import  { useState, useEffect } from 'react';
import man from "../assets/images/man.png";

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
    <div className="flex justify-center items-center  w-[100%] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 p-4 w-full max-w-screen-lg">
        {DoraTeamData.length > 0 ? (
          DoraTeamData.map((data) => (
            <div
              key={data.name}
              className="flex flex-row justify-center items-center font-poppins gap-10 bg-white rounded-lg"
            >
              <img
                className="rounded-xl h-52 w-44"
                src={`http://localhost:3000/${data.path || man}`} // Use API path or fallback to static image
                alt={data.name}
              />
              <div className="flex flex-col justify-center">
                <div className="font-medium text-2xl">{data.name}</div>
                <div className="text-[#183059] font-medium text-base">{data.position}</div>
                <div className="text-[#909090] bg-[#909090] w-full h-[2px] my-4"></div>
                <div className="text-[#ABABAB] font-medium text-base mb-3">
                  Phone no.: {data.phone}
                </div>
                <div className="text-[#ABABAB] font-medium text-base">
                  {data.responsibilities}
                </div>
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
