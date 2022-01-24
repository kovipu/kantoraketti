const { google } = require('googleapis');

const { GCP_CLIENT_EMAIL, GCP_PRIVATE_KEY, GCP_CALENDAR_ID } = process.env;

/*
 * This handler fetches 3 latest events from Google Calendar using a service account to authenticate.
 */
exports.handler = async () => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: GCP_CLIENT_EMAIL,
      private_key: GCP_PRIVATE_KEY.replace(/\\n/g, '\n') // Fix newlines.
    },
    scopes: ['https://www.googleapis.com/auth/calendar.readonly']
  });

  // Get start of today.
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  const calendar = google.calendar({ version: 'v3', auth });

  try {
    const eventsResponse = await calendar.events.list({
      calendarId: GCP_CALENDAR_ID,
      timeMin: today.toISOString(),
      maxResults: 3,
      singleEvents: true,
      orderBy: 'startTime'
    });

    const events = eventsResponse.data.items.map(formatEvent);

    return {
      statusCode: 200,
      body: JSON.stringify({ events })
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error
      })
    };
  }
};

/*
 * Format events to include only the fields we want and a nicely formatted time.
 */
const formatEvent = (event) => {
  const { start, end, location, summary } = event;

  return {
    start,
    end,
    location: location || null,
    summary: summary || '???'
  };
};
