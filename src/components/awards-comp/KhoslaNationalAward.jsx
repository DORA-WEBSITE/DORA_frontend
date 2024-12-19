import React from "react";
import arrow from "../../assets/images/arrow.png";

const KhoslaNationalAward = () => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md mt-[150px]">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Khosla National Award</h1>
      
      <p className="text-gray-700 mb-4">
        (A) Two “Khosla National Awards of IIT Roorkee” can be given every year, one in the Engineering category and the other in Science/HSS/Management category.
        <br />
        (B) The nominations can be made by S.S. Bhatnagar Prize awardees, Fellows of the National Academies, or Heads of Institutions.
        <br />
        (C) Self-nominations will also be considered.
        <br />
        (D) Each “Khosla National Awards of IIT Roorkee” will carry a citation and a cash prize of Rs. Five lakhs.
      </p>

      <h4 className="text-xl font-semibold text-gray-800 mb-2">ELIGIBILITY</h4>

      <p className="text-gray-700 mb-4">
        1. The nominees should have made outstanding contributions in their chosen field and should not be more than 45 years of age on 30 April 2020.
        <br />
        2. The nominee should be an Indian National.
        <br />
        3. The contributions based on work carried out in India will be considered for the awards.
      </p>

      <a
        href="https://awards.iitr.ac.in/alumni/khosla-awards.php"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 underline"
      >
        Click here to Nominate
      </a>
    </div>
  );
};

export default KhoslaNationalAward;
