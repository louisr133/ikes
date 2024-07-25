import React, { useState, useEffect } from 'react';
import '../Styles/Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(false); // Error state

  const fetchEvents = async () => {
    try {
      const response = await fetch('https://ikeseventserver-546172d29f62.herokuapp.com/fetch-events');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setEvents(data);
      setLoading(false); // End loading
    } catch (error) {
      setError(true);
      setLoading(false); // End loading even if there's an error
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true); // Ensure loading state is set
      setError(false); // Reset error state
      await fetchEvents(); // Fetch the events
    };

    loadData();
  }, []);

  return (
    <div className='pushdown-other'>
      <div className="events-container">
        <h1>Events</h1>
        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            Loading...
          </div>
        ) : error ? (
          <div className="error-message">
            <p>Something went wrong! Check back later!</p>
          </div>
        ) : (
          <div className="events-list">
            {events.map((event, index) => (
              <div key={index} className="event-card">
                <h3>{event.title}</h3>
                {event.image && <img src={event.image} alt={event.title} className="event-image" />}
                <p>{event.date}</p>
                {event.link && <a href={event.link} target="_blank" rel="noopener noreferrer">VIEW EVENT</a>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
