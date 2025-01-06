import { useState, useEffect } from 'react';
import TeamCard from "../components/TeamCard";
import mainBuilding from "../assets/images/mainBuilding.jpeg";

const Dora_Office = () => {
  const [DoraData, setDoraData] = useState([]);

  // Fetch data from API
  const fetchDoraData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/admin/GetDora', {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setDoraData(data.fetchDora);
      } else {
        console.error("Error fetching team data");
      }
    } catch (error) {
      console.error('Error fetching team data:', error);
    }
  };

  useEffect(() => {
    fetchDoraData();
  }, []);

  return (
    <div className="flex flex-col gap-4 mb-4 font-poppins">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <img
          className="w-screen h-[300px] md:h-[504px] object-fill"
          src={mainBuilding}
          alt="Main Building"
        />
        <div className="absolute inset-0 bg-[#0B0B0B] opacity-[69%]"></div>
        <div className="flex flex-col absolute inset-0 z-10 items-center justify-center">
          <div className="text-white font-semibold text-lg md:text-xl">WELCOME TO</div>
          <div className="text-center text-white text-3xl md:text-5xl font-extrabold w-[90%] md:w-[642px]">
            DORA OFFICE
          </div>
        </div>
      </div>

      {/* DORA Details Section */}
      <div className="flex flex-col my-10 lg:mx-40 mx-6 md:mx-16">
        {DoraData.length > 0 ? (
          DoraData.map((data) => (
            <div key={data.name} className="flex flex-col md:flex-row w-full gap-10 md:gap-20">
              <div className="relative mt-8 md:mt-16 flex justify-center md:block">
                <img
                  className="h-[200px] md:h-[320px] w-[160px] md:w-[260px]"
                  src={`http://localhost:3000/${data.path}`}
                  alt={data.name}
                />
              </div>
              <div className="flex flex-col justify-center pb-8 md:pb-16 text-center md:text-left px-4 md:px-0">
                <div className="text-[#003B71] font-semibold text-lg sm:text-xl md:text-2xl">
                  {data.name}
                </div>
                <div className="text-[#003B71] font-medium text-sm sm:text-md md:text-lg mt-2">
                  {data.position}
                </div>
                <div className="text-[#909090] bg-[#909090] w-full h-[1px] md:h-[2px] md:w-[auto] mt-4 mb-2"></div>
                <a href={`tel:${data.phone}`} className="text-[#909090] font-medium text-sm sm:text-md">
                  Phone: {data.phone}
                </a>
                <a
                  href={`mailto:${data.email}`}
                  className="text-[#909090] font-medium text-sm sm:text-md mt-2"
                >
                  Email: {data.email}
                </a>
                <a
                  href={`mailto:${data.email2}`}
                  className="text-[#909090] font-medium text-sm sm:text-md mt-2 md:pl-12"
                >
                  : {data.email2}
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">Loading team data or no data available.</div>
        )}

        {/* About DORA Section */}
        {DoraData.length > 0 && (
          <div className="bg-[#E6E6E6] flex flex-col px-20 rounded-sm -translate-y-24 -z-10 pt-28 pb-10">
            <div className="text-[#003B71] text-2xl md:text-3xl font-bold my-4 md:my-7 text-center md:text-left md:ml-32">
              About DORA
            </div>
            <div className="text-md md:text-lg">{DoraData[0].AboutDora}</div>
          </div>
        )}
      </div>

      {/* Meet Our Team Section */}
      <div className="font-black text-center text-[40px] md:text-[80px] text-[#BFBFBF]">
        MEET OUR TEAM
      </div>

      {/* Team Cards */}
      <div className="w-full gap-8 mx-auto mt-4 p-4 flex justify-center">
        <TeamCard />
      </div>
    </div>
  );
};

export default Dora_Office;
