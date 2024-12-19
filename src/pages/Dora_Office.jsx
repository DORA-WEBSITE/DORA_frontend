import React from "react";
import TeamCard from "../components/TeamCard";
import mainBuilding from "../assets/images/mainBuilding.jpeg";
import RDG from "../assets/images/RDG 2.png";

const Dora_Office = () => {
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
        <div className="flex flex-row w-full justify-center gap-8 font-poppins">
          <img className="md:h-auto h-60" src={RDG} alt="" />
          <div className="flex flex-col justify-center pb-16">
            <div className="text-[#003B71] font-semibold text-2xl">
              Prof. R. D. Garg
            </div>
            <div className="text-[#003B71] font-medium text-lg">
              Dean of Resources & Alumni Affairs
            </div>
            <div className="text-[#909090] bg-[#909090] w-full h-[2px] mt-4 mb-2"></div>
            <a href="" className="text-[#909090] font-medium">
              Phone: +91-1332-285840
            </a>
            <a
              href="mailto:dora.office@iitr.ac.in"
              className="text-[#909090] font-medium"
            >
              Email: dora.office@iitr.ac.in
            </a>
            <a
              href="mailto:dora@iitr.ac.in"
              className="text-[#909090] font-medium pl-12"
            >
              : dora@iitr.ac.in
            </a>
          </div>
        </div>
        <div className="bg-[#E6E6E6] flex flex-col px-20 rounded-sm -translate-y-24 -z-10 pt-28 pb-12">
          <div className="text-[#003B71] text-3xl font-bold mb-8 pl-36">
            About DORA
          </div>
          <div className="text-lg">
            Prof. R.D. Garg is a Professor of Civil Engineering at the Indian
            Institute of Technology Roorkee. He also holds the responsibility of
            Dean of Resources and Alumni Affairs (DORA) since 01,May 2023. As
            DORA, Prof. R.D. Garg is dedicated to Improve and strengthen the
            institute-alumni connect.
          </div>
        </div>
      </div>

      <div className="font-bold font-poppins text-center text-[66px] text-[#BFBFBF]">
        MEET OUR TEAM
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto mt-4 p-4 justify-center">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </div>
  );
};

export default Dora_Office;