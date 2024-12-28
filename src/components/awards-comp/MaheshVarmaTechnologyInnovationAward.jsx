import React from "react";
import arrow from "../../assets/images/arrow.png";

const MaheshVarmaTechnologyInnovationAward = () => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md mt-[100px]">
    <h1 className="text-2xl font-bold text-gray-800 mb-4">
      Mahesh Varma Technology Innovation Award
    </h1>
    
    <p className="text-gray-700 mb-4">
      Mahesh Varma Technology Innovation Award of Rs. 50,000/- is given annually for outstanding contribution made by a young engineer, technologist of Indian nationality or an Indian organization through original research in the field of innovation in Construction Technology and/or Construction Project Management/ Management of Technology, characterized by theoretical work or applied research done in India during the five years preceding the year of award.
    </p>

    <a
      href="https://awards.iitr.ac.in/alumni/mahesh-varma-technology-innovation-awards.php"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:text-blue-700 underline"
    >
      Click here to Nominate
    </a>
  </div>
  );
};

export default MaheshVarmaTechnologyInnovationAward;
