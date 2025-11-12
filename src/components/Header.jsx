import React from 'react';

const Header = ({ onFindDoctorsClick }) => {
  return (
    <header className="bg-[#FFF7E2] py-4 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#3A643B]">AMRUTAM</h1>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-black font-medium hover:text-[#3A643B] transition-colors"
          >
            Home
          </a>
          <button
            onClick={onFindDoctorsClick}
            className="text-black font-bold hover:text-[#3A643B] transition-colors"
          >
            Find Doctors
          </button>
          <a
            href="#"
            className="text-black font-medium hover:text-[#3A643B] transition-colors"
          >
            About Us
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 border border-[#3A643B] text-[#3A643B] rounded-md hover:bg-[#3A643B] hover:text-white transition-colors">
            Login
          </button>
          <button className="px-4 py-2 bg-[#3A643B] text-white rounded-md hover:bg-opacity-90 transition-opacity">
            Sign-up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
