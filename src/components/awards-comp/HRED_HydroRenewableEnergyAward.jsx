import React from "react";
import arrow from "../../assets/images/arrow.png";

const HRED_HydroRenewableEnergyAward = () => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md mt-[150px]">
    <h1 className="text-2xl font-bold text-gray-800 mb-4">
      HRED Hydro & Renewable Energy Award
    </h1>
    <p className="text-gray-700 mb-4">
      Annual Research Award titled HRED Hydro & Renewable Energy Award will be
      given to any national or international researcher who is working in the
      subject covering hydro resource assessment, optimization, integration,
      new technology development, etc. The annual award of Rs. 1.00 lac will
      be given to the awardee.
    </p>
    <a
      href="https://awards.iitr.ac.in/alumni/HRED_Hydro_&_Renewable_Energy_Award.php"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:text-blue-700 underline"
    >
      Click here to Nominate
    </a>
  </div>
  );
};

export default HRED_HydroRenewableEnergyAward;
