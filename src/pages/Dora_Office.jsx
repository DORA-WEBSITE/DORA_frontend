import React, { useState, useEffect } from 'react';
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
    <div className="flex flex-col gap-4 mb-4">
      <div className="font-poppins">
        <img
          className="h-[504px] w-full object-cover"
          src={mainBuilding}
          alt=""
        />
        <div className="absolute h-[504px] inset-0 bg-[#0B0B0B] opacity-[69%]"></div>
        <div className="flex flex-col h-[504px] absolute inset-0 z-10 items-center justify-center">
          <div className="text-white font-semibold text-xl">WELCOME TO</div>
          <div className="text-center text-white text-5xl font-extrabold w-[642px]">
            DORA OFFICE
          </div>
        </div>
      </div>

      <div className="flex flex-col my-10 lg:mx-40 mx-16">
        {DoraData.length > 0 ? (
          DoraData.map((data) => (
            <>
              <div key={data.name} className="flex flex-row w-full justify-center gap-8 font-poppins">
                <img className="md:h-auto h-60" src={`http://localhost:3000/${data.path}`} alt="" />
                <div className="flex flex-col justify-center pb-16">
                  <div className="text-[#003B71] font-semibold text-2xl">
                    {data.name}
                  </div>
                  <div className="text-[#003B71] font-medium text-lg">
                    {data.position}
                  </div>
                  <div className="text-[#909090] bg-[#909090] w-full h-[2px] mt-4 mb-2"></div>
                  <a href="" className="text-[#909090] font-medium">
                    Phone: {data.phone}
                  </a>
                  <a
                    href="mailto:dora.office@iitr.ac.in"
                    className="text-[#909090] font-medium"
                  >
                    Email: {data.email}
                  </a>
                  <a
                    href="mailto:dora@iitr.ac.in"
                    className="text-[#909090] font-medium pl-12"
                  >
                    : {data.email2}
                  </a>
                </div>
              </div>
              <div className="bg-[#E6E6E6] flex flex-col px-20 rounded-sm -translate-y-24 -z-10 pt-28 pb-12">
                <div className="text-[#003B71] text-3xl font-bold mb-8 text-center">
                  About DORA
                </div>
                <div className="text-lg">
                  {data.AboutDora}
                </div>
                <div className="text-[#003B71] mt-8 text-3xl font-bold mb-8 text-center">
                  Message from DORA
                </div>
                <div className="text-lg">
                  {data.MessageFromDORA}
                </div>
              </div>
            </>
          ))
        ) : (
          <div className="text-center col-span-1 lg:col-span-2">
            Loading team data or no data available.
          </div>
        )}
      </div>

      <div className="font-bold  font-poppins text-center text-[66px] text-[#BFBFBF]">
        MEET OUR TEAM
      </div>

      <div className="w-[100%] gap-8 mx-auto mt-4 p-4 justify-center">
        <TeamCard />
      </div>
    </div>
  );
};

export default Dora_Office;