import { useState, useEffect } from 'react';
import man from "../assets/images/man.png";

const TeamCard = () => {
  const [DoraTeamData, setDoraTeamData] = useState([]);

  // Static data for the team
  const staticDoraTeamData = [
    {
      name: "Mohit Sharma",
      path: "path/to/image1.jpg",
      position: "Office Attendant",
      phone: "+91-1332-285840",
      responsibilities: "Diary & Dispatch, Data entry, and Record Maintenance"
    },
    {
      name: "Mohit Sharma",
      path: "path/to/image1.jpg",
      position: "Office Attendant",
      phone: "+91-1332-285840",
      responsibilities: "Diary & Dispatch, Data entry, and Record Maintenance"
    },
    {
      name: "Mohit Sharma",
      path: "path/to/image1.jpg",
      position: "Office Attendant",
      phone: "+91-1332-285840",
      responsibilities: "Diary & Dispatch, Data entry, and Record Maintenance"
    },
  ];

  // Set static data on component mount
  useEffect(() => {
    setDoraTeamData(staticDoraTeamData);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen w-[100mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 p-4 w-full max-w-screen-lg">
        {DoraTeamData.length > 0 ? (
          DoraTeamData.map((data) => (
            <div
              key={data.name}
              className="flex flex-row justify-center items-center font-poppins gap-10 bg-white   rounded-lg"
            >
              <img
                className="rounded-xl h-52 w-44"
                src={man} // Static image path
                alt={data.name}
              />
              <div className="flex flex-col justify-center ">
                <div className="font-medium text-2xl">{data.name}</div>
                <div className="text-[#183059] font-medium text-base">{data.position}</div>
                <div className="text-[#909090] bg-[#909090] w-full h-[2px] my-4"></div>
                <div className="text-[#ABABAB] font-medium text-base mb-3">Phone no.: {data.phone}</div>
                <div className="text-[#ABABAB] font-medium text-base">{data.responsibilities}</div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center col-span-1 lg:col-span-2">
            No team data available.
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamCard;