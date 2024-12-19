import React, { useState } from 'react';
import axios from 'axios';

const Uploadimg = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:3000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.error || 'File upload failed.');
    }
  };



  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">File Upload and Retrieval</h1>

      {/* File Upload Section */}
      <form onSubmit={handleUpload} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Upload File</h2>
        <input
          type="file"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer focus:outline-none mb-4"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
        >
          Upload
        </button>
      </form>

      {/* File Fetch Section */}
    

      {/* Message Display */}
      {message && (
        <div className="mt-4 text-center text-sm text-gray-700 bg-gray-200 p-2 rounded">
          {message}
        </div>
      )}

 
      <div className="">
      <iframe src="https://www.google.com/maps/d/embed?mid=1Y8mcQN3oO70S6lQiLSJ6P2ef2GBBGf4&ehbc=2E312F" width="640" height="480"></iframe>
      </div>
    </div>
  );
};

export default Uploadimg;
