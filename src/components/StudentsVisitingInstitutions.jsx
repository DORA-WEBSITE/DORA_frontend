import React from "react";

const StudentsVisitingInstitutions = () => {
  return (
    <div className="cta_desc__3HavH p-8 mt-[150px]">
      <h1 className="cta_event__139em text-3xl font-bold text-center text-blue-900 mb-6">
        Students for Visiting Institutions Abroad
      </h1>

      <div className="cta_ckeditor__1R_iH">
        {/* Guidelines Link */}
        <p className="font-semibold mb-4">
          <a
            href="https://iitrdora.iitr.ac.in/support_via/Guideline1.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Guidelines for Support for IITR Students for Visiting Institutions Abroad
          </a>{" "}
          <span style={{ color: "#ff0000" }}>NEW!</span>
        </p>

        <hr className="my-4 border-gray-300" />

        {/* Online Application Link */}
        <p className="font-semibold mb-4">
          <a
            href="https://iitrdora.iitr.ac.in/support_via/via_s.php"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Online Application Form for IITR Students for Visiting Institutions Abroad
          </a>{" "}
          <strong style={{ color: "#ff0000" }}>OPEN!</strong>
        </p>

        <hr className="my-4 border-gray-300" />

        {/* 50% Advance Form */}
        <p className="mb-4">
          <a
            href="http://localhost:3000/uploads/50_ADVANCE_SVIA_uarbUiR.pdf"
            className="text-blue-600 hover:underline"
          >
            50% Advance Form for Visiting Institutions Abroad (Pdf)
          </a>
        </p>

        {/* Claim Form */}
        <p className="mb-4">
          <a
            href="http://localhost:3000/uploads/Claim_Form_XaVzHDJ.pdf"
            className="text-blue-600 hover:underline"
          >
            Claim Form for Visiting Institutions Abroad (pdf)
          </a>
        </p>

        <hr className="my-4 border-gray-300" />

        {/* Travelling Allowance Bill */}
        <p className="mb-4">
          <a
            href="http://localhost:3000/uploads/TRAVELLING_ALLOWANCE_FORM.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Travelling Allowance Bill - IIT Roorkee
          </a>
        </p>

        {/* Proforma For Direct Payment */}
        <p className="mb-4">
          <a
            href="http://localhost:3000/uploads/Proforma_For_Direct_Payment.pdf"
            className="text-blue-600 hover:underline"
          >
            Proforma For Direct Payment (Pdf File)
          </a>
        </p>
      </div>
    </div>
  );
};

export default StudentsVisitingInstitutions;
