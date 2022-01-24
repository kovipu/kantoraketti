import React from 'react';
import { format, parseISO, differenceInDays } from 'date-fns';
import fi from 'date-fns/locale/fi';

const Events = () => {
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('/.netlify/functions/get-events');
      const data = await response.json();
      setEvents(data.events);
    };
    fetchEvents();
  }, []);

  if (events.length === 0) {
    return <p className="text-lg">Ei tulevia tapahtumia.</p>;
  }

  return events.map((event, idx) => <Event event={event} key={idx} />);
};

const Event = ({ event }) => {
  const { summary, start, end, location } = event;

  const time = start.dateTime ? formatWithTime(start.dateTime, end.dateTime) : formatWithoutTime(start.date, end.date);

  return (
    <div className="mx-3 my-6 text-lef">
      <h2 className="text-xl font-bold">{summary}</h2>
      <p className="py-1">{time}</p>
      <p>{location}</p>
    </div>
  );
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

export default Events;
