// Footer.js
import React from "react";
import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
  FaThreads,
  FaYoutube,
} from "react-icons/fa6"; // You can install react-icons for easy social media icons

const Footer = () => {
  return (
    <footer className="bg-orange-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex container with default row direction, switching to column on mobile */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          {/* Copyright text */}
          <p className="text-sm text-white mt-4 md:mt-0">
            © 2025 Jogi Re!. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/jogire.me"
              className="text-white hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://www.threads.net/@jogire.we"
              className="text-white hover:text-gray-500 transition duration-300 ease-in-out transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaThreads size={30} />
            </a>
            <a
              href="https://youtube.com"
              className="text-white hover:text-gray-500 transition duration-300 ease-in-out transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={30} />
            </a>
            <a
              href="https://x.com"
              className="text-white hover:text-gray-500 transition duration-300 ease-in-out transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={30} />
            </a>
            <a
              href="https://www.instagram.com/jogire.we/"
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
