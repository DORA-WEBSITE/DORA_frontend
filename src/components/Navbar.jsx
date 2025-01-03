import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-[30px] md:top-[55px] w-full bg-[#183059] z-[999] shadow-md h-[30px] md:h-[55px] flex justify-between items-center font-poppins text-white text-[12px] font-normal px-4">

      {/* Hamburger Icon */}
      <button
        className="lg:hidden flex flex-col justify-center items-center space-y-1"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="block w-5 h-0.5 bg-white"></span>
        <span className="block w-5 h-0.5 bg-white"></span>
        <span className="block w-5 h-0.5 bg-white"></span>
      </button>

      {/* Menu Items */}
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-[30px] left-0 w-full bg-[#183059] lg:flex lg:static lg:flex-row lg:gap-[10px] lg:items-center lg:bg-transparent list-none`}
      >
        <li className="nav-item">
          <a
            href="/Dora_Office"
            className="text-white hover:bg-[#1b3b72] px-5 py-2 block text-center transition duration-300"
          >
            DORA Office
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/givingback"
            className="text-white hover:bg-[#1b3b72] px-5 py-2 block text-center transition duration-300"
          >
            Giving Back
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/newsoutreach"
            className="text-white hover:bg-[#1b3b72] px-5 py-2 block text-center transition duration-300"
          >
            News and Outreach
          </a>
        </li>
        <li>
          <a
            href="/reunions"
            className="text-white hover:bg-[#1b3b72] px-4 py-2 block text-center transition duration-300"
          >
            Jubilee Reunions
          </a>
        </li>
        <li>
          <a
            href="/GlobalNetwork"
            className="text-white hover:bg-[#1b3b72] px-4 py-2 block text-center transition duration-300"
          >
            Global Network of IITR Alumni
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/Schemes"
            className="text-white hover:bg-[#1b3b72] px-5 py-2 block text-center transition duration-300"
          >
            Schemes
          </a>
        </li>
        <li>
          <a
            href="/Awards"
            className="text-white hover:bg-[#1b3b72] px-4 py-2 block text-center transition duration-300"
          >
            Awards and Prizes
          </a>
        </li>
        <li>
          <a
            href="/Gallery"
            className="text-white hover:bg-[#1b3b72] px-4 py-2 block text-center transition duration-300"
          >
            Gallery
          </a>
        </li>
        <li>
          <a
            href="/"
            className="text-white hover:bg-[#1b3b72] px-4 py-2 block text-center transition duration-300"
          >
            IARC
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.iitrfriends.org/iitramp"
            className="text-white hover:bg-[#1b3b72] px-4 py-2 block text-center transition duration-300"
          >
            AMP
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://iitrdora.iitr.ac.in/news/ypages/obituaries.html"
            className="text-white hover:bg-[#1b3b72] px-4 py-2 block text-center transition duration-300"
          >
            Obituaries
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
