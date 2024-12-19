import React from "react";
import arrow from "../assets/images/arrow.png";
const Schemes = () => {
    return (
    <div class="pt-48 text-center mb-4">
        <div class="text-center text-[#BFBFBF] font-passion text-6xl font-bold">
            Schemes
        </div>
        <div class="flex flex-col space-y-16 ">
            <div class="shadow-lg shadow-[#BFBFBF] w-4/5 mx-auto p-[60px] space-y-12 mt-[70px]">
                <div class="text-2xl font-bold text-[32px] font-poppins text-blue-900">For Faculty</div>
                <div class="text-gray-700 ml-[35px]">
                    <div class="flex justify-between items-center text-[18px] font-poppins mt-[25px] mb-[5px]">
                        <div>Guidelines for Support for IITR Faculty for Visiting Institutions Abroad</div>
                          <a href="https://iitrdora.iitr.ac.in/support_via/Guidelines_FVIA.html"> <img src={arrow} alt=""/></a>
                        </div>
                    <hr class="h-0.5 bg-[#CCCCCC] border-none"></hr>
                    <div class="flex justify-between items-center text-[18px] font-poppins mt-[25px] mb-[5px]">
                        <div>Online Application Form</div>
                          <a href="https://iitrdora.iitr.ac.in/fac_via/faculty_via.php"> <img src={arrow} alt=""/></a>
                    </div>
                    <hr class="h-0.5 bg-[#CCCCCC] border-none"></hr>
                    <div class="flex justify-between items-center text-[18px] font-poppins mt-[25px] mb-[5px]">
                        <div>100% Advance for Visiting Institutions Abroad (pdf)</div>
                          <a href="https://alumni.iitr.ac.in/media/website/media/100_ADVANCE__2.pdf"> <img src={arrow} alt=""/></a>
                    </div>
                    <hr class="h-0.5 bg-[#CCCCCC] border-none"></hr>
                    <div class="flex justify-between items-center text-[18px] font-poppins mt-[25px] mb-[5px]">
                        <div>Claim Form for Visiting Institutions Abroad (Pdf)</div>
                          <a href="https://alumni.iitr.ac.in/media/website/media/Claim_Form_For_IITR_Faculty_1.pdf"> <img src={arrow} alt=""/></a>
                    </div>
                    <hr class="h-0.5 bg-[#CCCCCC] border-none"></hr>
                    <div class="flex justify-between items-center text-[18px] font-poppins mt-[25px] mb-[5px]">
                        <div>Proforma For Direct Payment (Pdf File)</div>
                          <a href="https://alumni.iitr.ac.in/media/website/media/Proforma_For_Direct_Payment.pdf"> <img src={arrow} alt=""/></a>
                    </div>
                    <hr class="h-0.5 bg-[#CCCCCC] border-none"></hr>
                    <div class="flex justify-between items-center text-[18px] font-poppins mt-[25px] mb-[5px]">
                        <div>TA Form (pdf)</div>
                          <a href="https://alumni.iitr.ac.in/media/website/media/TRAVELLING_ALLOWANCE_FORM.pdf"> <img src={arrow} alt=""/></a>
                    </div>
                    <hr class="h-0.5 bg-[#CCCCCC] border-none"></hr>
                </div>
            </div>
            <div class="shadow-lg shadow-[#BFBFBF] w-4/5 mx-auto p-[60px] space-y-12">
                <div class="text-2xl font-bold text-[32px] font-poppins  text-blue-900">For Visitors</div>
                <div class="text-gray-700 ml-[35px]">
                    <div class="flex justify-between items-center text-[18px] font-poppins mt-[25px] mb-[5px]">
                        <div>Online Application For Support for Faculty, Researchers, and Students from Foreign Institutions</div>
                          <a href="https://iitrdora.iitr.ac.in/s_researcher/guide.php"> <img src={arrow} alt=""/></a>
                        </div>
                    <hr class="h-0.5 bg-[#CCCCCC] border-none"></hr>
                    <div class="flex justify-between items-center text-[18px] font-poppins mt-[25px] mb-[5px]">
                        <div>Guidelines for Support for Faculty, Researchers, and Students from Foreign Institutions</div>
                          <a href="https://iitrdora.iitr.ac.in/support_via/Guidelines_FRSFFI.html"> <img src={arrow} alt=""/></a>
                    </div>
                    <hr class="h-0.5 bg-[#CCCCCC] border-none"></hr>
                    <div class="flex justify-between items-center text-[18px] font-poppins mt-[25px] mb-[5px]">
                        <div>Travelling Allowance Bill - IIT Roorkee</div>
                          <a href="https://alumni.iitr.ac.in/media/website/media/TRAVELLING_ALLOWANCE_FORM.pdf"> <img src={arrow} alt=""/></a>
                    </div>
                    <hr class="h-0.5 bg-[#CCCCCC] border-none"></hr>
                    </div>
            </div>
            <div class="shadow-lg shadow-[#BFBFBF] w-4/5 mx-auto p-[60px] space-y-12">
                <div class="text-2xl font-bold text-[32px] font-poppins text-blue-900">For Students</div>
                <div class="text-gray-700 ml-[35px]">
                    <div class="flex justify-between items-center text-[18px] font-poppins mt-[25px] mb-[5px]">
                        <div>Partial Support for Visiting Institutions Abroad</div>
                          <a href="/studentsvisitingabroad"> <img src={arrow} alt=""/></a>
                        </div>
                    <hr class="h-0.5 bg-[#CCCCCC] border-none"></hr>
                    <div class="flex justify-between items-center text-[18px] font-poppins mt-[25px] mb-[5px]">
                        <div>Partial Support to Attend Good International Conferences</div>
                          <a href="/conference"> <img src={arrow} alt=""/></a>
                    </div>
                    <hr class="h-0.5 bg-[#CCCCCC] border-none"></hr>
                    <div class="flex justify-between items-center text-[18px] font-poppins mt-[25px] mb-[5px]">
                        <div>Partial Support for International Research Internships</div>
                          <a href="/InternationalResearchInternships"> <img src={arrow} alt=""/></a>
                    </div>
                    <hr class="h-0.5 bg-[#CCCCCC] border-none"></hr>
                </div>
            </div>
        </div>
    </div>
    );
};   

export default Schemes;