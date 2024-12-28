import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from './store/auth'; // Assuming you have useAuth hook for token

const PdfAdmin = () => {
  // upload data
  const [pdf, setPdf] = useState(null);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const { AuthorizationToken } = useAuth(); // Access the Authorization token

  const handleFileChange = (e) => {
    setPdf(e.target.files[0]);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!pdf) {
      setMessage('Please select a file to upload.');
      return;
    }

    if (!name) {
      setMessage('Please enter the name of the file');
      return;
    }

    const formData = new FormData();
    formData.append('file', pdf);
    formData.append('name', name);

    try {
      const response = await axios.post(
        'http://localhost:3000/api/admin/uploadPdf',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: AuthorizationToken, // Include Authorization token here
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
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleUpload}
          className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">PDF Form</h2>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="pdfFile"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Upload PDF
            </label>
            <input
              type="file"
              id="pdfFile"
              name="pdfFile"
              accept="application/pdf"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-indigo-600 file:text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:ring focus:ring-indigo-200"
          >
            Submit
          </button>
        </form>
      </div>
      {message && (
        <div className="mt-4 text-center text-sm text-gray-700 bg-gray-200 p-2 rounded">
          {message}
        </div>
      )}
    </>
  );
};

export default PdfAdmin;
