const { google } = require('googleapis');
const { format, parseISO, differenceInDays } = require('date-fns');
const fi = require('date-fns/locale/fi');

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

  const time = start.dateTime ? formatWithTime(start.dateTime, end.dateTime) : formatWithoutTime(start.date, end.date);

  return {
    time,
    location: location || null,
    summary: summary || '???'
  };
};

// Formatting helpers.

const options = { locale: fi };

const formatWithTime = (startDateTime, endDateTime) => {
  // This formatting omits the end date of the event.
  // Assuming events with a specific time set are not that long, there's not much lost.
  const startFormatted = format(parseISO(startDateTime), "cccc dd.MM. 'kello' H:mm", options);
  const endFormatted = format(parseISO(endDateTime), 'H.mm', options);

  return `${startFormatted} - ${endFormatted}`;
};

const formatWithoutTime = (startDate, endDate) => {
  const start = parseISO(startDate);
  const end = parseISO(endDate);

  const startFormatted = format(start, 'cccc dd.MM.', options);

  // event length is 1 day.
  if (differenceInDays(end, start) === 1) {
    return startFormatted;
  }

  // subtract one, as the end date is always set to midnight causing an off-by-one
  const ONE_DAY_IN_MILLISECONDS = 86400000;
  const endFormatted = format(end - ONE_DAY_IN_MILLISECONDS, 'cccc dd.MM.', options);

  return `${startFormatted} - ${endFormatted}`;
};
