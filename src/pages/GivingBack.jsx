import React from "react";
import mainBuilding from "../assets/images/mainBuilding.jpeg";
import BenefitsImage from "../assets/images/image1.png";

const GivingBack = () => {
  return (
    <div className="w-fit flex flex-col gap-4 mb-4  ">
      <div className="font-poppinsw-full md:w-auto relative">
        <img
          className="h-[504px] w-full object-cover"
          src={mainBuilding}
          alt=""
        />
        
        <div className=" absolute h-[504px] inset-0 bg-[#0B0B0B] opacity-[69%]"></div>
        <div className="  flex flex-col h-[504px] gap-8 absolute inset-0 z-10 items-center justify-center px-5">
          <div className="text-white font-extrabold text-5xl">GIVING BACK</div>
          <div className="w-none text-center text-white text-2xl font-semibold md:w-[642px]">
            "Giving back to continue to grow together and raise the tradition of
            excellence."
          </div>
          <a
            className="bg-[#183059] rounded-3xl text-white text-2xl font-semibold px-6 py-2"
            href="https://iitrdora.iitr.ac.in/donors/info.php"
            target="_blank" 
            rel="noopener noreferrer" 
          >
            Donate Now
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-4 mx-6 md:mx-8 font-poppins justify-around md:flex-row">
      {/* Left Section */}
      <div className="w-full md:mt-0 mt-5 px-4 text-left md:w-6/12 bg-[#223551] text-white md:text-justify md:px-12 py-8 text-lg leading-8 break-words">
        <p className="md:text-3xl  text-[20px]  font-semibold mb-4">WHY GIVE BACK?</p>
        <div className="bg-white h-[3px] mb-2"></div>
        <p className="md:text-lg text-[12px] " style={{lineHeight:"2.3rem"}}>
          Your invaluable monetary support shall help IITR to build new
          infrastructure and undertake further developmental activities. It is
          of critical significance in helping IITR climb up the ladder of
          global excellence. The received funds shall be useful in various
          domains and will directly benefit and/or create opportunities for
          programmes like:
        </p>
        <ul className="list-disc ml-4 md:text-lg text-[12px]"  style={{lineHeight:"2.3rem"}}>
          <li>
            Running scholarships and awards for needy and deserving students
            as well as award recognition for notable alumni to promote the
            culture of learning and excellence.
          </li>
          <li>
            To further strengthen world-class research facilities and create
            an ideal environment for scientific innovation.
          </li>
          <li>
            To bridge the student-faculty ratio to facilitate interactive
            world-class learning.
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-5/12 border-s shadow-2xl py-10 px-6 md:px-12 bg-white mt-5 md:mt-0">
        <p className="md:text-2xl text-xl font-bold mb-4 text-[#183059]">Important Links</p>
        <div className="h-[3px] bg-[#183059] md:w-1/2 w-12/13 mb-8"></div>
        <ul className="flex-col flex gap-6">
          <a href="https://iitrdora.iitr.ac.in/givingbacknew/giving.php" target="_blank" rel="noopener noreferrer">
            <div className="flex justify-between">
              <div className="md:text-lg text-base text-[#183059]">Scheme</div>
              <div className="text-2xl text-[#A1A1A1]">{">"}</div>
            </div>
            <div className="bg-[#A1A1A1] h-[2px] mt-2"></div>
          </a>
          <a href="/topdonors">
            <div className="flex justify-between">
              <div className="md:text-lg text-base text-[#183059]">Esteemed Donors</div>
              <div className="text-2xl text-[#A1A1A1]">{">"}</div>
            </div>
            <div className="bg-[#A1A1A1] h-[2px] mt-2"></div>
          </a>
          <a href="/Givingbackcta">
            <div className="flex justify-between">
              <div className="md:text-lg text-base text-[#183059]">Giving back to IITR</div>
              <div className="text-2xl text-[#A1A1A1]">{">"}</div>
            </div>
            <div className="bg-[#A1A1A1] h-[2px] mt-2"></div>
          </a>
          <a href="http://localhost:3000/uploads/Foreign_Contribution_Act.pdf" target="_blank" rel="noopener noreferrer">
            <div className="flex justify-between">
              <div className="md:text-lg text-base text-[#183059]">Foreign Contribution Regulation Act</div>
              <div className="text-2xl text-[#A1A1A1]">{">"}</div>
            </div>
            <div className="bg-[#A1A1A1] h-[2px] mt-2"></div>
          </a>
          <a href="https://iitrdora.iitr.ac.in/donors/csr.php" target="_blank" rel="noopener noreferrer">
            <div className="flex justify-between">
              <div className="md:text-lg text-base text-[#183059]">CSR Contribution</div>
              <div className="text-2xl text-[#A1A1A1]">{">"}</div>
            </div>
            <div className="bg-[#A1A1A1] h-[2px] mt-2"></div>
          </a>
          <a href="http://localhost:3000/uploads/Tax_Exemption.pdf" target="_blank" rel="noopener noreferrer">
            <div className="flex justify-between">
              <div className="md:text-lg text-base text-[#183059]">Tax Exemption</div>
              <div className="text-2xl text-[#A1A1A1]">{">"}</div>
            </div>
            <div className="bg-[#A1A1A1] h-[2px] mt-2"></div>
          </a>
          <a href="https://iitrdora.iitr.ac.in/donors/Avenues.php">
            <div className="flex justify-between">
              <div className="md:text-lg text-base text-[#183059]">Avenues for Alumni</div>
              <div className="text-2xl text-[#A1A1A1]">{">"}</div>
            </div>
            <div className="bg-[#A1A1A1] h-[2px] mt-2"></div>
          </a>
        </ul>
      </div>
    </div>

      <div className="[min-height:388px] bg-[#223551] text-white font-poppins md:px-12 py-6">
        <div>
          <div className="md:text-4xl text-2xl font-extrabold flex justify-center md:justify-start">BENEFITS</div>
          <div className="bg-white [height:3px] mb-5 w-40 flex mx-auto md:mx-0  md:justify-start md:mb-0"></div>
        </div>
        <div className="mt-4 text-wrap flex flex-col  md:flex-row-reverse">
          <img
            className="md:w-1/3 w-3/2 h-auto mx-auto  md:ml-4 mb-4 mt-2 px-14 "
            src={BenefitsImage}
            alt=""
          />
          <p className="md:ml-4 md:text-[20px] md:px-0 px-[22px] text-[12px] text-justify   md:text-justify md:mr-[3vw] break-words "  style={{lineHeight:"2rem"}}>
            "All the donations made to IIT Roorkee are 100% deductible from
            total taxable income u/s 80G of the Income Tax Act 1961 and may be
            used to support a wide variety of schemes. The options to choose
            from include providing financial aid to needy students, encouraging
            academic and all-round excellence through various scholarships as
            well as funding technical team projects on campus and travel
            support. Other schemes include sponsoring fellowship to recognise
            research and outstanding contribution of faculty members. IITR also
            offers naming opportunities on making infrastructural donation.
            Moreover, the donation doesn't necessarily have to be as per one of
            the schemes, any small, general purpose donations are acceptable."
          </p>
          <div className="clear-both"></div>
        </div>
      </div>

      <div className="flex flex-col gap-8 justify-center items-center [min-height:336px] bg-[#223551] text-white font-poppins px-6  md:px-16 py-6 " >
        <div className="md:text-xl text-[12px] text-justify md:text-center" style={{lineHeight:"2rem"}}>
          Convenience of the donors is taken care of at each step, with multiple
          payment options including provision for online donations , demand
          drafts and feature of installments for donations above INR 10 Lacs.
          Status of the donation is informed to them regularly through a
          financial statement mailed each year with the details of opening
          amount, interest earned, expenditure, and balance amount of their
          donation. Institute also conveys the information of the list of
          beneficiaries through
         email to keep the donors updated.
        </div>

        <div className=" md:text-lg text-[14px] ">
          To donate please visit{" "}
          <a className="underline" href="">
            here
          </a>
        </div>
      </div>
    </div>
  );
};

export default GivingBack;
