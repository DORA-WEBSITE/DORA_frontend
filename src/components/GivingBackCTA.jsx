import React from "react";

const GivingBackCTA = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-blue-50 to-white shadow-xl rounded-lg max-w-4xl mx-auto mt-[150px] mb-5">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
        Giving Back to IITR
      </h1>
      <div className="space-y-6 text-gray-700">
        {/* Donation Info */}
        <div className="text-center">
          <p className="text-lg">
            <strong>Donate before 31st March</strong> &amp; claim{" "}
            <span className="text-blue-600 font-semibold">
              100% Deduction
            </span>{" "}
            from the Taxable Income of that Financial Year.
          </p>
        </div>

        {/* Introduction */}
        <p className="text-justify leading-relaxed">
          Any generous alumnus and/or a philanthropist is welcome to join hands
          with IIT Roorkee to promote excellence among students, faculty, and
          departments. This can be done by creating a corpus to support one or
          more{" "}
          <a
            href="https://iitrdora.iitr.ac.in/givingbacknew/giving.php"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline"
          >
            schemes
          </a>{" "}
          through a one-time donation to the institute. These schemes are
          suggestive and not exclusive. You may write to the Dean of Resources
          &amp; Alumni Affairs (DORA) at{" "}
          <a
            href="mailto:dora@iitr.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline"
          >
            dora@iitr.ac.in
          </a>{" "}
          to learn about more opportunities to establish a partnership with IIT
          Roorkee.
        </p>
        <p className="text-center font-semibold">
          Donations to IIT Roorkee are{" "}
          <span className="text-green-600">100% exempt</span> from Income Tax
          under Section 80G.
        </p>

        {/* Image */}
        <div className="flex justify-center">
          <a
            href="https://iitrdora.iitr.ac.in/donors/info.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://alumni.iitr.ac.in/media/website/media/asasasas.JPG"
              alt="Donation Information"
              className="w-full max-w-md rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          </a>
        </div>

        {/* Top Donors */}
        <p className="text-lg">
          Here is the list of{" "}
          <a
            href="https://iitrdora.iitr.ac.in/donors/top-donors.php"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline"
          >
            Top Donors of IIT Roorkee
          </a>
          .
        </p>

        {/* Donation Link */}
        <div className="text-center">
          <a
            href="https://iitrdora.iitr.ac.in/donors/info.php"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium shadow-md hover:bg-blue-700 transition-colors"
          >
            Donate Now
          </a>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            For any queries, please contact:
          </h2>
          <p className="text-base">
            <strong>Prof. R.D. Garg</strong>
            <br />
            Dean of Resources and Alumni Affairs
            <br />
            Indian Institute of Technology, Roorkee
            <br />
            Ph. 01332-285840
            <br />
            E-mail:{" "}
            <a
              href="mailto:dora@iitr.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline"
            >
              dora@iitr.ac.in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GivingBackCTA;
