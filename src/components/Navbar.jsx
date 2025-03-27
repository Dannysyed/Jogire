import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-[#d67952]">
      <div className="p-4 max-w-6xl mx-auto flex items-center justify-between">
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
        <div className="hidden lg:flex space-x-10 items-center">
          <Link
            to="/"
            className="text-white hover:text-gray-700 my-auto font-bold"
          >
            Home
          </Link>
          {/* About with Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-white hover:text-gray-700 my-auto font-bold flex items-center focus:outline-none"
            >
              About Us
              <svg
                className={`w-3 h-3 ml-1 text-white transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 top-full mt-0 w-56 bg-white rounded-md shadow-lg transition-opacity duration-200 z-10">
                <Link
                  to="/gurus"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)} // Close dropdown on selection
                >
                  Our Guru's & Inspiration
                </Link>
                <Link
                  to="/mission"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 disabled"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Our Mission
                </Link>
                <Link
                  to="/team"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Our Team
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/services"
            className="text-white hover:text-gray-700 my-auto font-bold"
          >
            Services
          </Link>
          <Link
            to="/testimonials"
            className="text-white hover:text-gray-700 my-auto font-bold"
          >
            Testimonials
          </Link>
          <Link
            to="/blogs"
            className="text-white hover:text-gray-700 my-auto font-bold"
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            className="bg-white text-[#d67952] border border-orange-500 px-3 py-2 rounded-full hover:bg-gray-100 hover:text-gray-500 transition-colors duration-300 font-bold"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#ffaa85] p-4 flex flex-col space-y-4 items-center">
          <Link
            to="/"
            className="block text-white font-bold hover:text-gray-700"
          >
            Home
          </Link>
          {/* About with Dropdown for Mobile */}
          <div className="w-full text-center">
            <button
              onClick={toggleDropdown}
              className="text-white ml-1 font-bold hover:text-gray-700 flex items-center justify-center w-full focus:outline-none"
            >
              About Us
              <svg
                className={`w-3 h-3 ml-1 text-white transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="mt-2 w-full bg-white rounded-md shadow-lg">
                <Link
                  to="/gurus"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setIsOpen(false); // Close mobile menu on selection
                  }}
                >
                  Our Guru's & Inspiration
                </Link>
                <Link
                  to="/mission"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setIsOpen(false);
                  }}
                >
                  Our Mission
                </Link>
                <Link
                  to="/team"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setIsOpen(false);
                  }}
                >
                  Our Team
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/services"
            className="block text-white font-bold hover:text-gray-700"
          >
            Services
          </Link>
          <Link
            to="/testimonials"
            className="block text-white font-bold hover:text-gray-700"
          >
            Testimonials
          </Link>
          <Link
            to="/blogs"
            className="block text-white font-bold hover:text-gray-700"
          >
            Blogs
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
