import React from "react";
import arrow from "../../assets/images/arrow.png";

const GopalRanjanTechnologyAward = () => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md mt-[150px]">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Gopal Ranjan Technology Award
      </h1>
      <p className="text-gray-700 mb-4">
        Gopal Ranjan Technology Award of Rs. 1,00,000/- will be given to a
        deserving person on the basis of his/her ‘Creative Work’ in the fields of
        Soil Characteristics, Foundation Engineering, Ground Improvement, Soil
        Structure Interaction, Engineering Geology, Underground Structures, Rock
        Mechanics, or Subsurface including marine structure in India. The award
        shall be given to an Indian National or an alumnus of IIT Roorkee (or its
        predecessor University of Roorkee) of any nationality. Self-nomination
        will also be accepted.
      </p>
      <a
        href="https://awards.iitr.ac.in/alumni/gopal-ranjan-technology-awards.php"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 underline"
      >
        Click here to Nominate
      </a>
    </div>
  );
};

export default GopalRanjanTechnologyAward;
