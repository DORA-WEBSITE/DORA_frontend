import React from "react";
import arrow from "../../assets/images/arrow.png";

const ProfSRMehraMemorialAward = () => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md mt-[100px]">
    <h1 className="text-2xl font-bold text-gray-800 mb-4">
      Prof. S. R. Mehra Memorial Award
    </h1>

    <p className="text-gray-700 mb-4">
      Prof. S. R. Mehra Memorial Award of Rs. 50,000/- will be given for research in Transportation Engg./ Soil Mechanics. This award is made once in every two years for outstanding contributions made by an Indian engineer, Technologist or Scientist through original research in the field of Transportation Engg./Soil Mechanics categorized by theoretical work or applied research done in India during the five years preceding the year of award.
    </p>

    <a
      href="https://awards.iitr.ac.in/alumni/sr-mehra-memorial-awards.php"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:text-blue-700 underline"
    >
      Click here to Nominate
    </a>
  </div>
  );
};

export default ProfSRMehraMemorialAward;
