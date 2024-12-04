import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [dropdowns, setDropdowns] = useState({
    givingBack: false,
    newsAndOutreach: false,
    schemes: false,
    awardsAndPrizes: false,
    more: false,
  });

  const toggleDropdown = (dropdownName) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName],
    }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setDropdowns({
          givingBack: false,
          newsAndOutreach: false,
          schemes: false,
          awardsAndPrizes: false,
          more: false,
        });
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-[53.6px] w-full bg-[#183059] z-[999] shadow-md h-[60px] flex justify-center items-center font-poppins text-white text-[12px] font-normal">
      <ul className="flex gap-[10px] list-none bg-[#183059]">
        <li className="nav-item">
          <a
            href="/dora_office"
            className="text-white bg-[#183059] hover:bg-[#1b3b72] px-5 py-2 block text-center transition duration-300"
          >
            DORA Office
          </a>
        </li>

        <li className="relative dropdown">
          <button
            onClick={() => toggleDropdown("givingBack")}
            className="text-white bg-[#183059] hover:bg-[#1b3b72] px-5 py-2 block text-center transition duration-300"
          >
            Giving Back ▼
          </button>

          {dropdowns.givingBack && (
            <ul className="absolute top-full left-0 min-w-[200px] bg-[#183059] list-none p-0 m-0 rounded-lg z-50 opacity-100 transition-opacity duration-300 flex flex-col gap-0">
              <li>
                <a
                  href="/donations"
                  className="text-white bg-[#183059] hover:bg-[#1b3b72] px-5 py-2 block text-center transition duration-300"
                >
                  Donations
                </a>
              </li>
              <li>
                <a
                  href="/volunteer"
                  className="text-white bg-[#183059] hover:bg-[#1b3b72] px-5 py-2 block text-center transition duration-300"
                >
                  Volunteer
                </a>
              </li>
            </ul>
          )}
        </li>

        <li className="relative dropdown">
          <button
            onClick={() => toggleDropdown("newsAndOutreach")}
            className="text-white bg-[#183059] hover:bg-[#1b3b72] px-4 py-2 block text-center transition duration-300"
          >
            News and Outreach ▼
          </button>

          {dropdowns.newsAndOutreach && (
            <ul className="absolute top-full left-0 min-w-[200px] bg-[#183059] list-none p-0 m-0 rounded-lg z-50 opacity-100 transition-opacity duration-300 flex flex-col gap-0">
              <li>
                <a
                  href="/news"
                  className="text-white bg-[#183059] hover:bg-[#1b3b72] px-4 py-2 block text-center transition duration-300"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="text-white bg-[#183059] hover:bg-[#1b3b72] px-4 py-2 block text-center transition duration-300"
                >
                  Events
                </a>
              </li>
            </ul>
          )}
        </li>

        <li>
          <a
            href="/JublieeReunions"
            className="text-white bg-[#183059] hover:bg-[#1b3b72] px-4 py-2 block text-center transition duration-300"
          >
            Jubliee Reunions
          </a>
        </li>
        <li>
          <a
            href="/GlobalNetwork"
            className="text-white bg-[#183059] hover:bg-[#1b3b72] px-4 py-2 block text-center transition duration-300"
          >
            Global Network of IITR Alumni
          </a>
        </li>

        <li className="relative dropdown">
          <button
            onClick={() => toggleDropdown("schemes")}
            className="text-white bg-[#183059] hover:bg-[#1b3b72] px-4 py-2 block text-center transition duration-300"
          >
            Schemes ▼
          </button>

          {dropdowns.schemes && (
            <ul className="absolute top-full left-0 min-w-[200px] bg-[#183059] list-none p-0 m-0 rounded-lg z-50 opacity-100 transition-opacity duration-300 flex flex-col gap-0">
              <li>
                <a
                  href="/scholarships"
                  className="text-white bg-[#183059] hover:bg-[#1b3b72] px-4 py-2 block text-center transition duration-300"
                >
                  Scholarships
                </a>
              </li>
              <li>
                <a
                  href="/grants"
                  className="text-white bg-[#183059] hover:bg-[#1b3b72] px-4 py-2 block text-center transition duration-300"
                >
                  Grants
                </a>
              </li>
            </ul>
          )}
        </li>

        <li className="relative dropdown">
          <button
            onClick={() => toggleDropdown("awardsAndPrizes")}
            className="text-white bg-[#183059] hover:bg-[#1b3b72] px-4 py-2 block text-center transition duration-300"
          >
            Awards and Prizes ▼
          </button>

          {dropdowns.awardsAndPrizes && (
            <ul className="absolute top-full left-0 min-w-[200px] bg-[#183059] list-none p-0 m-0 rounded-lg z-50 opacity-100 transition-opacity duration-300 flex flex-col gap-0">
              <li>
                <a
                  href="/academic-awards"
                  className="text-white bg-[#183059] hover:bg-[#1b3b72] px-4 py-2 block text-center transition duration-300"
                >
                  Academic Awards
                </a>
              </li>
              <li>
                <a
                  href="/achievement-awards"
                  className="text-white bg-[#183059] hover:bg-[#1b3b72] px-4 py-2 block text-center transition duration-300"
                >
                  Achievement Awards
                </a>
              </li>
            </ul>
          )}
        </li>

        <li>
          <a
            href="/Gallery"
            className="text-white bg-[#183059] hover:bg-[#1b3b72] px-4 py-2 block text-center transition duration-300"
          >
            Gallery
          </a>
        </li>
        <li>
          <a
            href="/IARC"
            className="text-white bg-[#183059] hover:bg-[#1b3b72] px-4 py-2 block text-center transition duration-300"
          >
            IARC
          </a>
        </li>
        <li>
          <a
            href="/AMP"
            className="text-white bg-[#183059] hover:bg-[#1b3b72] px-4 py-2 block text-center transition duration-300"
          >
            AMP
          </a>
        </li>
        <li>
          <a
            href="/Obituaries"
            className="text-white bg-[#183059] hover:bg-[#1b3b72] px-4 py-2 block text-center transition duration-300"
          >
            Obituaries
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
