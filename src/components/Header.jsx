import React from 'react';
import Logo from '../assets/images/Logo.png'; 

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full h-[30px] md:h-[55px] z-20 flex justify-between items-center px-1 md:px-5 py-1.5 bg-white">
      <div className="logo">
        <img src={Logo} alt="Logo" className="h-[26px] md:w-[200px] md:h-[40px]" />
      </div>
      <div className="nav-buttons flex md:gap-5">
        <a 
          href="/" 
          className="btn text-[#0C1528] bg-white px-1 md:px-4 py-2 rounded-md font-sans text-[10px] md:text-base font-normal"
        >
          Home
        </a>
        <a 
          href="https://almamater.iitr.ac.in/alumPortal/login_website.aspx" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn text-[#0C1528] bg-white px-1 md:px-4 py-2 rounded-md font-sans text-[10px] md:text-base font-normal"
        >
          Login
        </a>
        <a 
          href="/givingback" 
          // target="_blank" 
          // rel="noopener noreferrer" 
          className="btn donate-btn bg-[#223551] flex items-center my-1.5 md:my-0 text-white px-1 md:px-4 text-center rounded-md font-sans text-[8px] md:text-base font-normal"
        >
          Donate
        </a>
      </div>
    </header>
  );
};

export default Header;
