import React from "react";
import arrow from "../../assets/images/arrow.png";

const OPJainMemorialStructuralDesignAward = () => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md mt-[100px]">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        O. P. Jain Memorial Structural Design Award
      </h1>
      
      <p className="text-gray-700 mb-4">
        O. P. Jain Memorial Structural Design Award to honour a structural engineer of Indian nationality for his/her innovative/exemplary work in the field of structural design. The annual award of Rs. 1,00,000 (Rs. One lakh Only) will be given to the awardee.
      </p>

      <a
        href="https://awards.iitr.ac.in/alumni/op-jain-memorial-structural-design-award.php"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 underline"
      >
        Click here to Nominate
      </a>
    </div>
  );
};

export default OPJainMemorialStructuralDesignAward;
