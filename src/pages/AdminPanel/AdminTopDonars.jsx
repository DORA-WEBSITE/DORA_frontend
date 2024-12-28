import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './store/auth'; // Assuming the AuthorizationToken is managed in this hook

const AdminTopDonars = () => {
  const [donors, setDonors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { AuthorizationToken } = useAuth(); // Get AuthorizationToken from context or state

  const fetchDonors = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/admin/imgGet', {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken, // Add Authorization header
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.photos);
        setDonors(data.photos);
        setIsLoading(false);
      } else {
        console.error("Error fetching services data");
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error fetching donors:', error);
      setIsLoading(false);
    }
  };


  const deleteUser = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/api/admin/uploadFile/delete/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: AuthorizationToken,
            },
        });

        const data = await response.json();
        console.log("user after delete ", data);

        if (response.ok) {
          fetchDonors();
        }
    } catch (error) {
        console.log(error);
    }

}

  useEffect(() => {
    fetchDonors();
  }, [AuthorizationToken]); // Re-fetch if AuthorizationToken changes

  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage('Please select a file to upload.');
      return;
    }

    if (!name) {
      setMessage('Please enter the name of the person in the image.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);

    try {
      const response = await axios.post(
        'http://localhost:3000/api/admin/uploadFile',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: AuthorizationToken, // Add Authorization header
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
      <div className="min-h-screen bg-gray-100 flex flex-col items-center ">
        <h1 className="text-3xl font-bold mt-[200px] text-gray-800 mb-6">Upload Top Donars</h1>

        {/* File Upload Section */}
        <form onSubmit={handleUpload} className="bg-white p-6 rounded shadow-md w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">Upload File</h2>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter the name of the person"
            className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg mb-4 p-2 focus:outline-none"
          />
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

        {/* Message Display */}
        {message && (
          <div className="mt-4 text-center text-sm text-gray-700 bg-gray-200 p-2 rounded">
            {message}
          </div>
        )}
      </div>

      <div className="w-full  bg-[#F2F1F1]">
        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <p className="text-lg font-medium text-gray-600">Loading donors...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
            {donors.map((donar) => (
              <div key={donar.id} className="w-full min-h-[246.59px] max-w-[220px] border-[1px] bg-white shadow-lg flex flex-col items-center p-4">
                <div className="w-full h-[200px] overflow-hidden border-2 border-gray-200 mb-4">
                  <img
                    src={`http://localhost:3000/${donar.path}`}
                    alt={donar.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full bg-[#0000003D] h-[1px]"></div>
                <p className="font-medium text-lg text-gray-700 text-center mt-2">
                  {donar.name}
                </p>
                                {/* <Link to={`/admin/users/${curUser._id}/edit`}>
                  <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Edit</button>
                </Link> */}
                <button type="button" onClick={() => deleteUser(donar._id)} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AdminTopDonars;
