import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './store/auth';

const AdminTestimonial = () => {
  const { AuthorizationToken } = useAuth(); // Access the authorization token

  // Fetch data
  const [TestimonialData, setTestimonialData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTestimonialData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/admin/GetTestimonial', {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.fetchTestimonial);
        setTestimonialData(data.fetchTestimonial);
        setIsLoading(false);
      } else {
        console.error("Error fetching testimonials data");
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      setIsLoading(false);
    }
  };

  const deleteUser = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/api/admin/Testimonialuploads/delete/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: AuthorizationToken,
            },
        });

        const data = await response.json();
        console.log("user after delete ", data);

        if (response.ok) {
          fetchTestimonialData();
        }
    } catch (error) {
        console.log(error);
    }

}

  useEffect(() => {
    fetchTestimonialData();
  }, [AuthorizationToken]); // Add AuthorizationToken as a dependency

  // Upload data
  const [formData, setFormData] = useState({
    file: null,
    name: '',
    position: '',
    department: '',
    comment: '',
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

    const { file, name, position, department, comment } = formData;

    if (!file || !name) {
      setMessage('Please fill in all required fields.');
      return;
    }

    const uploadData = new FormData();
    uploadData.append('file', file);
    uploadData.append('name', name);
    uploadData.append('position', position);
    uploadData.append('department', department);
    uploadData.append('comment', comment);

    try {
      const response = await axios.post(
        'http://localhost:3000/api/admin/Testimonialuploads',
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
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Upload Testimonial</h1>

        <form onSubmit={handleUpload} className="bg-white p-6 rounded shadow-md w-full max-w-md">
          {['name', 'position', 'department', 'comment'].map((field) => (
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

      <div className="flex flex-col justify-center w-full min-h-[434px]">
        <h1 className="font-[700] text-[66px] leading-[25px] text-[#BFBFBF] heading-font text-center mb-16">Testimonial</h1>
        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <p className="text-lg font-medium text-gray-600">Loading testimonials...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
            {TestimonialData.map((data) => (
              <div
                className="flex flex-col w-full max-w-[450px] shadow-lg shadow-[#00000040] justify-center p-[15px]"
                key={data.id}
              >
                <div className="flex gap-[27px]">
                  <img
                    src={`http://localhost:3000/${data.path}`}
                    alt=""
                    className="w-[33%] rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="text-[#183059] text-[18px] leading-[25px] font-[500]">{data.name}</p>
                    <p className="font-[500] text-[10px] leading-[10px] mt-[5px] text-[#848484]">{data.position}</p>
                    <p className="font-[500] text-[10px] leading-[10px] text-[#848484]">{data.department}</p>
                  </div>
                </div>

                <div className="w-[100%] h-[1px] bg-[#0000003D] mt-[12px]"></div>

                <div className="text-[8px] leading-[13px] font-[500] text-[#183059CC] mt-[10px]">
                  {data.comment}
                </div>
                <button type="button" onClick={() => deleteUser(data._id)} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>

              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AdminTestimonial;
