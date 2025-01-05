import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-screen md:h-[454px] h-[180px]">
        <div className="h-full bg-[#05193B] flex text-white justify-around gap-1 md:gap-3 pt-4 md:pt-24 px-2 font-poppins">
          <div>
            <div className="text-[11px] md:text-2xl font-bold mb-2 md:mb-6">
              About
            </div>
            <ul className="text-[8px] md:[font-size:16px] flex flex-col gap-1 text-wrap">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.iitr.ac.in/"
              >
                IITR Home
              </a>
              <a href="">Contact Us</a>
            </ul>
          </div>
          <div>
            <div className="text-[11px] md:text-2xl font-bold mb-2 md:mb-6 text-wrap">
              Dean's Corner
            </div>
            <ul className="text-[8px] md:[font-size:16px] flex flex-col gap-1 text-wrap">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://iitr.ac.in/Academics/Contact.html"
              >
                Academic Affairs{" "}
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://iitr.ac.in/Administration/index.html"
              >
                Administration{" "}
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.iitr.ac.in/dosw/"
              >
                DOSW{" "}
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://iitr.ac.in/Administration/Deans%20Structure/DOFA.html"
              >
                Faculty Affairs{" "}
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://finance.iitr.ac.in/"
              >
                Finance & Planning{" "}
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.iitr.ac.in/estateworks/"
              >
                Infrastructure{" "}
              </a>
              <a target="_blank" rel="noopener noreferrer" href="">
                Resources and Alumni Affairs
              </a>
            </ul>
          </div>
          <div>
            <div className="text-[11px] md:text-2xl font-bold mb-2 md:mb-6">
              Portals
            </div>
            <ul className="text-[8px] md:[font-size:16px] flex flex-col gap-1 text-wrap">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ghbooking.iitr.ac.in/"
              >
                Guest House Booking{" "}
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://mgcl.iitr.ac.in/"
              >
                Library{" "}
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://almamater.iitr.ac.in/donor-portal"
              >
                Donor Portal{" "}
              </a>
              <a href="">Photo Upload Portal</a>
            </ul>
          </div>
          <div>
            <div className="text-[11px] md:text-2xl font-bold mb-2 md:mb-6">
              Awards & Scholarships
            </div>
            <ul className="text-[8px] md:[font-size:16px] flex flex-col gap-1 text-wrap">
              <a href="">
                <li>SENATE COMMITTEE FOR</li>
                <li>SCHOLARSHIPS AND PRIZES (SCSP)</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
