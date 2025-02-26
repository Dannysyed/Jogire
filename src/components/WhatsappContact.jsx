import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../logo.jpg"; // Ensure this path is correct

const WhatsappContact = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Toggle popup
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="relative bg-gray-50">
      {/* WhatsApp Button */}
      <button
        onClick={togglePopup}
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
      >
        <FaWhatsapp size={30} />
      </button>

      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full mx-4">
            {/* Profile Header */}
            <div className="flex items-center mb-4">
              <img
                src={logo} // Replace with your profile picture URL if needed
                alt="Profile"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-800">Jogire</h3>
                <p className="text-sm text-gray-600">Health and Wellness</p>
              </div>
            </div>

            {/* Message Section */}
            <p className="text-gray-700 mb-4">
              Ready to find your zen? Connect with us on WhatsApp! Just click
              'Send Message' to start your yoga journey with Jogire today!
            </p>

            {/* Popup Buttons */}
            <div className="flex justify-center gap-2">
              <button
                onClick={togglePopup}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition duration-300"
              >
                Cancel
              </button>
              <a
                href="https://wa.me/917023831569?text=Hi%20Team%20Jogire%21%20I%27m%20excited%20to%20start%20my%20yoga%20journey%20and%20would%20love%20to%20connect%20with%20you%20all.%20Looking%20forward%20to%20learning%20and%20growing%20together%21"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#d67952] text-white rounded hover:bg-[#b1542c] transition duration-300"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsappContact;
