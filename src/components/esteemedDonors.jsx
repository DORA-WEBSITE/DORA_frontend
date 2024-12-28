import React from "react";

const DonorsCTA = () => {
  return (
    <div className="cta_desc__3HavH p-6 bg-gray-50 rounded-md shadow-md mt-[150px]">
      <h1 className="cta_event__139em text-2xl font-bold text-gray-800 mb-4">
        Esteemed Donors
      </h1>
      <div className="cta_ckeditor__1R_iH space-y-4">
        <h2 className="text-lg text-gray-700">
          We are grateful to all of our generous alumni and philanthropists who
          have donated to IIT Roorkee to support and promote excellence in the
          institute.
        </h2>
        <h2 className="text-lg text-gray-700">
          1) Here is the list of Top Donors of IIT Roorkee:{" "}
          <a
            href="https://iitrdora.iitr.ac.in/donors/top-donors.php"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Click Here
          </a>
        </h2>
        <h2 className="text-lg text-gray-700">
          2) Here is the list of Donors of IIT Roorkee:{" "}
          <a
            href="https://iitrdora.iitr.ac.in/news/ypages/list_donor.php"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Click Here
          </a>
        </h2>
        <h2 className="text-lg text-gray-700">
          3) Here is the list of Batch Donors of IIT Roorkee:{" "}
          <a
            href="https://iitrdora.iitr.ac.in/donors/batch-donors.php"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Click Here
          </a>
        </h2>
      </div>
    </div>
  );
};

export default DonorsCTA;
