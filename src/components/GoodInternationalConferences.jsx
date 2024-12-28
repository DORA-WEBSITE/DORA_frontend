import React from "react";

const GoodInternationalConferences = () => {
  return (
    <div className="cta_desc__3HavH p-8 mt-[150px]">
      <h1 className="cta_event__139em text-3xl font-bold text-center text-blue-900 mb-6">
        Good International Conferences
      </h1>

      <div className="cta_ckeditor__1R_iH">
        {/* Online Application Form Link */}
        <div className="mb-4">
          <a
            href="https://almamater.iitr.ac.in/file/gic/forms/GIC_applicationFrmInstruction.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Online Application Form for Travel Support to Students for attending Good International Conferences/Workshops/Symposia
          </a>{" "}
          <em>
            <strong style={{ color: "#c0392b" }}>&nbsp;Open!</strong>
          </em>
        </div>

        <div>
          <hr className="my-4 border-gray-300" />
        </div>

        {/* Guidelines Link */}
        <div className="mb-4">
          <a
            href="https://almamater.iitr.ac.in/alumportal/GICGuidelinesupdated.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Guidelines for Travel Support to attend Good International Conferences/Workshops/Symposia
          </a>{" "}
          <em>
            <strong style={{ color: "#c0392b" }}>New!</strong>
          </em>
        </div>

        <div>
          <hr className="my-4 border-gray-300" />
        </div>

        {/* 50% Advance Form */}
        <div className="mb-4">
          <a
            href="http://localhost:3000/uploads/media/50_ADVANCE_GIC.pdf"
            className="text-blue-600 hover:underline"
          >
            50% Advance For Good International Conferences/Workshops/Symposia (PDF)
          </a>
        </div>

        {/* Claim Form */}
        <div className="mb-4">
          <a
            href="http://localhost:3000/uploads/media/Claim_Form_.pdf"
            className="text-blue-600 hover:underline"
          >
            Claim Form For Good International Conferences/Workshops/Symposia (PDF)
          </a>
        </div>

        <div>
          <hr className="my-4 border-gray-300" />
        </div>

        {/* Travelling Allowance Bill */}
        <div className="mb-4">
          <a
            href="http://localhost:3000/uploads/TRAVELLING_ALLOWANCE_FORM.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Travelling Allowance Bill - IIT Roorkee
          </a>
        </div>

        {/* Proforma For Direct Payment */}
        <div className="mb-4">
          <a
            href="http://localhost:3000/uploads/Proforma_For_Direct_Payment.pdf"
            className="text-blue-600 hover:underline"
          >
            Proforma For Direct Payment (Pdf File)
          </a>
        </div>
      </div>
    </div>
  );
};

export default GoodInternationalConferences;
