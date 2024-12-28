import React from 'react';

const Navbar = () => {

  return (
    <nav className="fixed top-[53.6px] w-full bg-[#183059] z-[999] shadow-md h-[60px] flex justify-center items-center font-poppins text-white text-[12px] font-normal">
      <ul className="flex gap-[10px] list-none bg-[#183059]">

        <li className="nav-item">
          <a href="/Dora_Office" className="text-white bg-[#183059] hover:bg-[#1b3b72] px-5 py-2 block text-center transition duration-300">
            DORA Office
          </a>
        </li>

        <li className="nav-item">
          <a href="/givingback" className="text-white bg-[#183059] hover:bg-[#1b3b72] px-5 py-2 block text-center transition duration-300">
            Giving Back
          </a>
        </li>

        <li className="nav-item">
          <a href="/newsoutreach" className="text-white bg-[#183059] hover:bg-[#1b3b72] px-5 py-2 block text-center transition duration-300">
            News and Outreach
          </a>
        </li>

        <li>
          <a href="/reunions" className="text-white bg-[#183059] hover:bg-[#1b3b72] px-4 py-2 block text-center transition duration-300">
            Jubliee Reunions
          </a>
        </li>

        <li>
          <a href="/GlobalNetwork" className="text-white bg-[#183059] hover:bg-[#1b3b72] px-4 py-2 block text-center transition duration-300">
            Global Network of IITR Alumni
          </a>
        </li>

        <li className="nav-item">
          <a href="/Schemes" className="text-white bg-[#183059] hover:bg-[#1b3b72] px-5 py-2 block text-center transition duration-300">
            Schemes
          </a>
        </li>

        <li>
          <a href="/Awards" className="text-white bg-[#183059] hover:bg-[#1b3b72] px-4 py-2 block text-center transition duration-300">
            Awards and Prizes
          </a>
        </li>

        <li>
          <a href="/Gallery" className="text-white bg-[#183059] hover:bg-[#1b3b72] px-4 py-2 block text-center transition duration-300">
            Gallery
          </a>
        </li>

        <li>
          <a href="/" className="text-white bg-[#183059] hover:bg-[#1b3b72] px-4 py-2 block text-center transition duration-300">
            IARC
          </a>
        </li>

        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://www.iitrfriends.org/iitramp" className="text-white bg-[#183059] hover:bg-[#1b3b72] px-4 py-2 block text-center transition duration-300">
            AMP
          </a>
        </li>

        <li>
          <a target="_blank" href="https://iitrdora.iitr.ac.in/news/ypages/obituaries.html" className="text-white bg-[#183059] hover:bg-[#1b3b72] px-4 py-2 block text-center transition duration-300">
            Obituaries
          </a>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
