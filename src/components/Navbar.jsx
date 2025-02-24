import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#d67952]">
      <div className="p-4 max-w-6xl mx-auto flex items-center justify-between">
        {/* <div className="text-white text-4xl font-normal">
          <Link to="/">ᏠᎧᎶᎥᏒᏋ</Link>
        </div> */}
        <div className="text-white">
          <Link to="/">
            <img src={logo} alt="Jogi Re Logo" className="h-12 w-auto" />
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            id="menu-toggle"
            className="text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-between space-y-1 transition-transform">
              <div
                className={`w-full h-1 bg-white transition-transform ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></div>
              <div
                className={`w-full h-1 bg-white transition-opacity ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-full h-1 bg-white transition-transform ${
                  isOpen ? "-rotate-45 -translate-y-3" : ""
                }`}
              ></div>
            </div>
          </button>
        </div>
        <div className="hidden lg:flex space-x-10">
          <Link
            to="/"
            className="text-white hover:text-gray-700 my-auto font-bold"
          >
            Home
          </Link>
          <Link
            to="/team"
            className="text-white hover:text-gray-700 my-auto font-bold"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-white hover:text-gray-700 my-auto font-bold"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="bg-white text-[#d67952] border border-orange-500 px-3 py-2 rounded-full hover:bg-gray-100 hover:text-gray-500 transition-colors duration-300 font-bold"
          >
            Contact Us
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-[#ffaa85] p-4 flex flex-col space-y-4 items-center">
          <Link
            to="/"
            className="block text-white font-bold hover:text-gray-700"
          >
            Home
          </Link>
          <Link
            to="/team"
            className="block text-white font-bold hover:text-gray-700"
          >
            About
          </Link>
          <Link
            to="/services"
            className="block text-white font-bold hover:text-gray-700"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="bg-white text-[#d67952] border border-orange-500 px-3 py-2 rounded-full hover:bg-gray-100 hover:text-gray-500 transition-colors duration-300 font-bold"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
