import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './store/auth'

function AdminEvent() {
  const [Events, setEvents] = useState([]);
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  const [heading, setheading] = useState('');
  const [message, setMessage] = useState('');
  const { AuthorizationToken } = useAuth();

  // Fetch events

  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/admin/GetEvents", {
        method: 'GET',
        headers: {
          Authorization: AuthorizationToken,
        },
      });

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


  const deleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/admin/uploadEvents/delete/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: AuthorizationToken,
        },
      });

      const data = await response.json();
      console.log("user after delete ", data);

      if (response.ok) {
        fetchDoraTeamData();
      }
    } catch (error) {
      console.log(error);
    }

  }
  useEffect(() => {
    fetchEvents();
  }, [AuthorizationToken]); // Add AuthorizationToken as a dependency


  // Handle form inputs
  const handleChange = (setter) => (e) => setter(e.target.value);

  // Handle form submission
  const handleUpload = async (e) => {
    e.preventDefault();

    if (!duration || !description || !heading) {
      setMessage('Please enter both duration and description.');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:3000/api/admin/uploadEvents',
        { duration, description, heading },
        {
          headers: {
            Authorization: AuthorizationToken,
          },
        }
      );

      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.error || 'File upload failed.');
    }
  };


  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Events</h1>
          <form onSubmit={handleUpload}>
            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-700 font-medium mb-2">Enter Date</label>
              <input type="text" value={duration} onChange={handleChange(setDuration)} placeholder="Type something..." className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="text" className="block text-gray-700 font-medium mb-2">Enter heading</label>
              <input type="text" value={heading} onChange={handleChange(setheading)} placeholder="Type something..." className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="text" className="block text-gray-700 font-medium mb-2">Enter Text</label>
              <input type="text" value={description} onChange={handleChange(setDescription)} placeholder="Type something..." className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">Submit</button>
          </form>
          {message && <div className="mt-4 text-center text-sm text-gray-700 bg-gray-200 p-2 rounded">{message}</div>}
        </div>
      </div>

      <div className="flex flex-col bg-[#F2F1F1] justify-center w-full min-h-[520px] mt-5 shadow-inner  z-[10] relative">
        <h1 className="font-[700] text-[66px] text-[#BFBFBF] heading-font text-center">Events</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
          {Events.length ? Events.map((event) => (
            <div key={event._id} className="w-full bg-white shadow-lg p-5 border border-gray-300 rounded-lg">
              <h2 className="text-[#183059] text-[20px] font-[500]">{event.duration || 'Unknown Duration'}</h2>
              <div className="w-full bg-[#0000003D] h-[1px] my-2"></div>
              <p className="text-[#183059] text-[16px]">{event.description || 'No Description Available'}</p>

              {/* <Link to={`/admin/users/${curUser._id}/edit`}>
                  <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Edit</button>
                </Link> */}
              <button type="button" onClick={() => deleteUser(event._id)} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>
            </div>
          )) : <div className="text-center py-10 text-[#183059] text-[20px]">No events available at the moment.</div>}
        </div>
      </div>
    </>
  );
}

export default AdminEvent;
