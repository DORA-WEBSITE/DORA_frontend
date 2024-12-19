import React from "react";

const InternationalResearchInternships = () => {
  return (
    <div className="cta_desc__3HavH p-8 mt-[150px]">
      <h1 className="cta_event__139em text-3xl font-bold text-center text-blue-900 mb-6">
        International Research Internships
      </h1>

      <div className="cta_ckeditor__1R_iH">
        {/* Online Application Form Link */}
        <div className="mb-4">
          <a
            href="https://iitrdora.iitr.ac.in/iriform/iri.php"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Online Application Form for Travel Support to Students for International Research Internships (TSS-IRI)
          </a>{" "}
          <span style={{ color: "#e74c3c" }}>
            <strong>&nbsp;Open!</strong>
          </span>
        </div>

        <div>&nbsp;</div>

        {/* Guidelines Link */}
        <div className="mb-4">
          <a
            href="https://iitrdora.iitr.ac.in/support_via/Guideline.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Guidelines for Travel Support to Students for International Research Internships (TSS-IRI)
          </a>
        </div>

        <div>
          <hr className="my-4 border-gray-300" />
        </div>

        {/* 50% Advance Form */}
        <div className="mb-4">
          <a
            href="https://alumni.iitr.ac.in/media/website/media/50_ADVANCE_TSS_IRI.pdf"
            className="text-blue-600 hover:underline"
          >
            50% Advance For International Research Internships (TSS-IRI) (Pdf)
          </a>
        </div>

        {/* Claim Form */}
        <div className="mb-4">
          <a
            href="https://alumni.iitr.ac.in/media/website/media/Claim_Form_For_Internship_Word_File_1_1RPOA0N.pdf"
            className="text-blue-600 hover:underline"
          >
            Claim Form For International Research Internships (TSS-IRI) (Pdf)
          </a>
        </div>

        <div>
          <hr className="my-4 border-gray-300" />
        </div>

        {/* Travelling Allowance Bill */}
        <div className="mb-4">
          <a
            href="https://alumni.iitr.ac.in/media/website/media/TRAVELLING_ALLOWANCE_FORM.pdf"
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
            href="https://alumni.iitr.ac.in/media/website/media/Proforma_For_Direct_Payment.pdf"
            className="text-blue-600 hover:underline"
          >
            Proforma For Direct Payment (Pdf File)
          </a>
        </div>
      </div>
    </div>
  );
};

export default InternationalResearchInternships;
