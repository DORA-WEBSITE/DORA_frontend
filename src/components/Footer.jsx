import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full [height:454px]">
        <div className="h-full bg-[#05193B] flex text-white justify-between pt-24 px-20 font-poppins">
          <div>
            <div className="text-2xl font-bold mb-6">About</div>
            <ul className="[font-size:16px] flex flex-col gap-1">
              <a href="">IITR Home</a>
              <a href="">Contact Us</a>
            </ul>
          </div>
          <div>
            <div className="text-2xl font-bold mb-6">Dean's Corner</div>
            <ul className="[font-size:16px] flex flex-col gap-1">
              <a href="">Academic Affairs </a>
              <a href="">Administration </a>
              <a href="">DOSW </a>
              <a href="">Faculty Affairs </a>
              <a href="">Finance & Planning </a>
              <a href="">Infrastructure </a>
              <a href="">Resources and Alumni Affairs</a>
            </ul>
          </div>
          <div>
            <div className="text-2xl font-bold mb-6">Portals</div>
            <ul className="[font-size:16px] flex flex-col gap-1">
              <a href="">Guest House Booking </a>
              <a href="">Library </a>
              <a href="">Donor Portal </a>
              <a href="">Photo Upload Portal</a>
            </ul>
          </div>
          <div>
            <div className="text-2xl font-bold mb-6">Awards & Scholarships</div>
            <ul className="[font-size:16px] flex flex-col gap-1">
              <a href="">
                <li>SENATE COMMITTEE FOR</li>
                <li>SCHOLARSHIPS AND PRIZES (SCSP)</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="[height:34px] bg-[#183059]"></div>
      </div>
    </>
  );
};

export default Footer;
