import React from "react";
import arrow from "../../assets/images/arrow.png";

const OutstandingServiceAward2019 = () => {
  return (
    <div className="flex justify-between items-center text-[18px] font-poppins mt-[150px] mb-[5px]">
      <div>Outstanding Service Award 2019</div>
      <a href="https://alumni.iitr.ac.in/awards/daa/dadayaa">
        <img src={arrow} alt="arrow" />
      </a>
    </div>
  );
};

export default OutstandingServiceAward2019;
