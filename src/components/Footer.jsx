// Footer.js
import React from "react";
import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6"; // You can install react-icons for easy social media icons

const Footer = () => {
  return (
    <footer className="bg-orange-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex container for both elements */}
        <div className="flex justify-between items-center">
          {/* Copyright text */}
          <p className="text-sm text-white">
            &copy; 2025 Jogire. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-6">
            <a
              href="https://facebook.com"
              className="text-white hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://x.com" // Twitter's new domain after rebranding to X
              className="text-white hover:text-gray-500 transition duration-300 ease-in-out transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={30} /> {/* X Icon */}
            </a>
            <a
              href="https://instagram.com"
              className="text-white hover:text-pink-500 transition duration-300 ease-in-out transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-white hover:text-blue-700 transition duration-300 ease-in-out transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
