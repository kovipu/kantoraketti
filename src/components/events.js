import React from 'react';

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
  const { summary, time, location } = event;
  return (
    <div className="mx-3 my-6 text-lef">
      <h2 className="text-xl font-bold">{summary}</h2>
      <p className="py-1">{time}</p>
      <p>{location}</p>
    </div>
  );
};

export default Events;
