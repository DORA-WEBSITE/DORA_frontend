import React, { useState, useEffect } from 'react';


const Events = () => {
  const [Events, setEvents] = useState([]);

  useEffect(() => {
  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/admin/GetEvents');
      if (response.ok) {
        const data = await response.json();
        setEvents(data.Events);
      } else {
        console.error("Error fetching events data");
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  fetchEvents();
}, []);

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg mt-[150px]">
      <h1 className="text-2xl font-bold text-center mb-6">Events</h1>
      <div className="space-y-6">
        {Events.map((event) => (
          <div
            key={event._id}
            className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <svg
              height="20"
              width="20"
              className="flex-shrink-0"
            >
              <circle cx="10" cy="10" r="10" fill="#BD3D20" />
            </svg>
            <div className="flex-shrink-0 text-center">
              <p className="font-medium">
                {event.duration}
                {/* <br />
                <i>to</i>
                <br />
                {event.dateEnd} */}
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {event.heading}
              </h2>
              <p className="text-sm text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
