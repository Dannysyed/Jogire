import React, { useState } from "react";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^\d{10}$/.test(phone); // Simple 10-digit check

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(false);
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!validatePhone(formData.phone))
      newErrors.phone = "Enter a valid 10-digit phone number";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setErrors({});
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl lg:w-1/2 w-full">
        <h2 className="text-[#d67952] text-4xl font-semibold mb-6 text-center">
          Get in Touch
        </h2>

        {submitted && (
          <div className="flex items-center bg-green-100 text-green-700 p-4 mb-6 rounded-lg">
            <CheckCircleIcon className="w-6 h-6 mr-2" />
            <p>Thank you! Your message has been sent successfully.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <input
              id="name"
              type="text"
              className={`w-full h-12 px-4 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal rounded-full border ${
                errors.name ? "border-red-400" : "border-gray-300"
              } focus:ring-2 focus:ring-orange-500 focus:outline-none`}
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="flex items-center text-red-500 text-sm mt-1">
                <ExclamationCircleIcon className="w-4 h-4 mr-1" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <input
              id="email"
              type="email"
              className={`w-full h-12 px-4 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal rounded-full border ${
                errors.email ? "border-red-400" : "border-gray-300"
              } focus:ring-2 focus:ring-orange-500 focus:outline-none`}
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="flex items-center text-red-500 text-sm mt-1">
                <ExclamationCircleIcon className="w-4 h-4 mr-1" />
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone Input */}
          <div>
            <input
              id="phone"
              type="text"
              className={`w-full h-12 px-4 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal rounded-full border ${
                errors.phone ? "border-red-400" : "border-gray-300"
              } focus:ring-2 focus:ring-orange-500 focus:outline-none`}
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="flex items-center text-red-500 text-sm mt-1">
                <ExclamationCircleIcon className="w-4 h-4 mr-1" />
                {errors.phone}
              </p>
            )}
          </div>

          {/* Message Input */}
          <div>
            <textarea
              id="message"
              className={`w-full h-24 px-4 py-2 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal rounded-xl border ${
                errors.message ? "border-red-400" : "border-gray-300"
              } focus:ring-2 focus:ring-orange-500 focus:outline-none`}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="flex items-center text-red-500 text-sm mt-1">
                <ExclamationCircleIcon className="w-4 h-4 mr-1" />
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-12 text-white text-lg font-semibold rounded-full bg-[#d67952] shadow-md transition-all duration-300 hover:bg-orange-700 focus:ring-2 focus:ring-orange-400 focus:outline-none"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
