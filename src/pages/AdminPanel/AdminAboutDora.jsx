import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './store/auth';

const AdminAboutDora = () => {
  const { AuthorizationToken } = useAuth();

  // Fetch data
  const [DoraData, setDoraData] = useState([]);

  const fetchDoraData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/admin/GetDora', {
        method: 'GET',
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setDoraData(data.fetchDora);
      } else {
        console.error('Error fetching team data');
      }
    } catch (error) {
      console.error('Error fetching team data:', error);
    }
  };


  const deleteUser = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/api/admin/Dorauploads/delete/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: AuthorizationToken,
            },
        });

        const data = await response.json();
        console.log("user after delete ", data);

        if (response.ok) {
          fetchDoraData();
        }
    } catch (error) {
        console.log(error);
    }

}

  useEffect(() => {
    fetchDoraData();
  }, [AuthorizationToken]);

  // Upload data
  const [formData, setFormData] = useState({
    file: null,
    name: '',
    position: '',
    phone: '',
    email: '',
    email2: '',
    AboutDora: '',
    MessageFromDORA: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    const { file, name, position, phone, email, email2, AboutDora, MessageFromDORA } = formData;

    if (!file || !name) {
      setMessage('Please fill in all required fields.');
      return;
    }

    const uploadData = new FormData();
    uploadData.append('file', file);
    uploadData.append('name', name);
    uploadData.append('position', position);
    uploadData.append('phone', phone);
    uploadData.append('email', email);
    uploadData.append('email2', email2);
    uploadData.append('AboutDora', AboutDora);
    uploadData.append('MessageFromDORA', MessageFromDORA);

    try {
      const response = await axios.post(
        'http://localhost:3000/api/admin/Dorauploads',
        uploadData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
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
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Upload DORA Data</h1>

        <form onSubmit={handleUpload} className="bg-white p-6 rounded shadow-md w-full max-w-md">
          {['name', 'position', 'phone', 'email', 'email2', 'AboutDora', 'MessageFromDORA'].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              value={formData[field] || ''}
              onChange={handleChange}
              placeholder={`Enter ${field}`}
              className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg mb-4 p-2 focus:outline-none"
            />
          ))}
          <input
            type="file"
            name="file"
            onChange={handleChange}
            className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer focus:outline-none mb-4"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
          >
            Upload
          </button>
        </form>

        {message && (
          <div className="mt-4 text-center text-sm text-gray-700 bg-gray-200 p-2 rounded">
            {message}
          </div>
        )}
      </div>

      <div className="flex flex-wrap justify-center my-10">
        {DoraData.length > 0 ? (
          DoraData.map((data) => (
            <div key={data.name} className="w-full p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  className="md:h-auto h-60"
                  src={`http://localhost:3000/${data.path}`}
                  alt={data.name}
                />
                <div className="p-6">
                  <div className="text-[#003B71] font-semibold text-2xl mb-2">
                    {data.name}
                  </div>
                  <div className="text-[#003B71] font-medium text-lg mb-4">
                    {data.position}
                  </div>
                  <div className="text-[#909090] bg-[#909090] w-full h-[2px] my-4"></div>
                  <div className="text-[#909090] font-medium mb-2">
                    Phone: {data.phone}
                  </div>
                  <div className="text-[#909090] font-medium mb-2">
                    Email: {data.email}
                  </div>
                  <div className="text-[#909090] font-medium">
                    {data.email2}
                  </div>
                </div>
                <div className="bg-[#E6E6E6] p-6 mt-4 rounded-b-lg">
                  <div className="text-[#003B71] text-3xl font-bold mb-4">
                    About DORA
                  </div>
                  <div className="text-lg text-[#003B71]">{data.AboutDora}</div>
                </div>
                <div className="bg-[#E6E6E6] p-6 mt-4 rounded-b-lg">
                  <div className="text-[#003B71] text-3xl font-bold mb-4">
                    Message from DORA
                  </div>
                  <div className="text-lg text-[#003B71]">{data.MessageFromDORA}</div>
                </div>

                 {/* <Link to={`/admin/users/${curUser._id}/edit`}>
                  <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Edit</button>
                </Link> */}
                  <button type="button" onClick={() => deleteUser(data._id)} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center w-full">
            Loading team data or no data available.
          </div>
        )}
      </div>
    </>
  );
};

export default AdminAboutDora;
