import React, { useState, useEffect } from 'react';

const TeamCard = () => {
  const [DoraTeamData, setDoraTeamData] = useState([]);

  // Fetch data from API
  const fetchDoraTeamData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/admin/GetDoraTeam', {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setDoraTeamData(data.fetchDoraTeam);
      } else {
        console.error("Error fetching team data");
      }
    } catch (error) {
      console.error('Error fetching team data:', error);
    }
  };

  useEffect(() => {
    fetchDoraTeamData();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen w-[100%] bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto p-4">
        {DoraTeamData.length > 0 ? (
          DoraTeamData.map((data) => (
            <div
              key={data.name}
              className="flex flex-row font-poppins gap-8 bg-white p-4 shadow-md rounded-lg"
            >
              <img
                className="rounded-xl"
                src={`http://localhost:3000/${data.path}`}
                alt=""
              />
              <div className="flex flex-col justify-center">
                <div className="font-medium text-2xl">{data.name}</div>
                <div className="text-[#183059] font-medium text-base">{data.position}</div>
                <div className="text-[#909090] bg-[#909090] w-full h-[2px] my-4"></div>
                <div className="text-[#ABABAB] font-medium text-base">Phone no.: {data.phone}</div>
                <div className="text-[#ABABAB] font-medium text-base">{data.work}</div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center col-span-1 lg:col-span-2">
            Loading team data or no data available.
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
