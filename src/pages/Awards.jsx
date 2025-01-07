import React from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/images/arrow.png";

const Awards = () => {
    return (
    <div className="pt-24 md:pt-48 text-center mb-4">
    <div className="text-center text-[#BFBFBF] font-passion text-4xl md:text-6xl font-bold">
      Awards and Prizes
    </div>
    <div className="flex flex-col space-y-8 md:space-y-16 mt-10 md:mt-[70px]">

      <div className="shadow-lg shadow-[#BFBFBF] w-[90%] md:w-4/5 mx-auto p-6 md:p-[60px] space-y-6 md:space-y-12">
        <Link to="/alumniawardshowcase" className="block">
          <div className="flex flex-row justify-between items-center text-left">
            <div className="text-xl md:text-2xl lg:text-2xl font-bold font-poppins text-blue-900">
              Distinguished Alumnus Awards
            </div>
            <img src={arrow} alt="Arrow" className="w-3 h-3 md:w-auto md:h-auto mt-2 md:mt-0" />
          </div>
          <hr className="w-full h-0.5 bg-[#CCCCCC] border-none mx-auto" />
        </Link>
  
        <div className="text-gray-700 ml-4 md:ml-[35px]">
          {[
            { title: "DAA & DYAA 2019", link: "/awards/daa-dyya-2019" },
            { title: "DAA - 2019", link: "/awards/daa-2019" },
            { title: "Distinguished Alumnus Award (DAA) 2018", link: "/awards/daa-2018" },
          ].map((award, index) => (
            <div key={index}>
              <div className="flex justify-between items-center text-[13px] md:text-[18px] font-poppins mt-4 md:mt-[25px] mb-2 md:mb-[5px] text-left">
                <div>{award.title}</div>
                <Link to={award.link}>
                  <img src={arrow} alt="Arrow" className="w-2 h-2.5 md:w-auto md:h-auto mt-2 md:mt-0" />
                </Link>
              </div>
              <hr className="h-0.5 bg-[#CCCCCC] border-none" />
            </div>
          ))}
        </div>
      </div>
  
      <div className="shadow-lg shadow-[#BFBFBF] w-[90%] md:w-4/5 mx-auto p-6 md:p-[60px] space-y-6 md:space-y-12 text-blue-900">
        <a href="https://iitrdora.iitr.ac.in/news/ypages/daa-2022.php#osa">
          <div className="flex flex-row justify-between items-center text-left">
            <div className="text-xl md:text-2xl lg:text-2xl font-bold font-poppins">
              Outstanding Service Awards
            </div>
            <img src={arrow} alt="" className="w-3 h-3 md:w-auto md:h-auto mt-2 md:mt-0 md:ml-8" />
          </div>
          <hr className="w-full h-0.5 bg-[#CCCCCC] border-none" />
        </a>
      </div>

      <div className="shadow-lg shadow-[#BFBFBF] w-[90%] md:w-4/5 mx-auto p-6 md:p-[60px] space-y-6 md:space-y-12 text-blue-900">
        <div className="text-xl md:text-2xl lg:text-2xl font-bold font-poppins text-left">
          IIT Roorkee Research Awards
        </div>
        <div className="text-gray-700 ml-4 md:ml-[35px]">
          {[
            { title: "A.S. Arya-IITR Disaster Prevention Award", link: "/awards/as-arya-disaster-prevention-award" },
            { title: "Gopal Ranjan Technology Award", link: "/awards/gopal-ranjan-technology-award" },
            { title: "HRED Hydro & Renewable Energy Award", link: "/awards/hred-hydro-renewable-energy-award" },
          ].map((award, index) => (
            <div key={index}>
              <div className="flex justify-between items-center text-[13px] md:text-[18px] font-poppins mt-4 md:mt-[25px] mb-2 md:mb-[5px] text-left">
                <div>{award.title}</div>
                <Link to={award.link}>
                  <img src={arrow} alt="Arrow" className="w-2 h-2.5 md:w-auto md:h-auto mt-2 md:mt-0" />
                </Link>
              </div>
              <hr className="h-0.5 bg-[#CCCCCC] border-none" />
            </div>
          ))}
        </div>
      </div>

      <div className="shadow-lg shadow-[#BFBFBF] w-[90%] md:w-4/5 mx-auto p-6 md:p-[60px] space-y-6 md:space-y-12 text-blue-900">
        <a href="https://iitrdora.iitr.ac.in/alumni/rk-prize.php">
          <div className="flex flex-row justify-between items-center text-left">
            <div className="text-xl md:text-2xl font-bold text-[24px] md:text-[32px] font-poppins">
               Ram Kumar Prize
            </div>
            <img src={arrow} alt="" className="w-3 h-3 md:w-auto md:h-auto mt-2 md:mt-0 md:ml-8" />
          </div>
          <hr className="w-full h-0.5 bg-[#CCCCCC] border-none" />
        </a>
      </div>
    </div>
  </div>

    );
};

export default Awards;
