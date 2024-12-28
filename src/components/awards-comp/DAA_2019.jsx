import React from "react";
import arrow from "../../assets/images/arrow.png";

const DAA_2019 = () => {
  return (
    <div className="flex justify-between items-center text-[18px] font-poppins my-[150px]">
      <div>DAA - 2019</div>
      <a href="https://alumni.iitr.ac.in/awards/daa/daac">
        <img src={arrow} alt="arrow" />
      </a>
    </div>
  );
};

export default DAA_2019;
