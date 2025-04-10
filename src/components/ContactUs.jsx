import React, { useState } from "react";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/solid";
import axios from "axios";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

// Bind modal to app element for accessibility
Modal.setAppElement("#root");

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });
  const navigate = useNavigate();

  // Validation functions
  const validateName = (name) =>
    name.trim().length >= 2 && /^[A-Za-z\s]+$/.test(name);
  const validateEmail = (email) =>
    /^(?![_.])[A-Za-z0-9](?:[A-Za-z0-9._%+-]*[A-Za-z0-9])?@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$|^(?![_.])[A-Za-z0-9](?:[A-Za-z0-9._%+-]*[A-Za-z0-9])?@(?:(?:\[(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\])$/.test(
      email
    );
  const validatePhone = (phone) => /^\+?\d{10,15}$/.test(phone);
  const validateMessage = (message) => message.trim().length >= 10;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value.trimStart() }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!validateName(formData.name))
      newErrors.name = "Name must be at least 2 characters (letters only)";
    if (!validateEmail(formData.email))
      newErrors.email = "Please enter a valid email address";
    if (!validatePhone(formData.phone))
      newErrors.phone = "Enter a valid phone number (10-15 digits)";
    if (!formData.inquiry) newErrors.inquiry = "Please select an inquiry type";
    if (!validateMessage(formData.message))
      newErrors.message = "Message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/contact", // Use env variable
        formData,
        { timeout: 10000 }
      );
      if (response.status === 201) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({
          name: "",
          email: "",
          phone: "",
          inquiry: "",
          message: "",
        });
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error:
          error.response?.data?.detail ||
          "Failed to send your message. Please try again later.",
      });
    }
  };

  const closeSuccessModal = () => {
    setStatus((prev) => ({ ...prev, success: false }));
    navigate("/"); // Redirect to homepage
  };

  const closeErrorModal = () => {
    setStatus((prev) => ({ ...prev, error: null }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-lg w-full transform transition-all duration-300 hover:shadow-3xl">
        <h2 className="text-3xl font-bold text-[#d67952] mb-6 text-center">
          Let’s Connect
        </h2>
        <p className="text-gray-600 text-center mb-8">
          We’re here to help you on your wellness journey. Reach out today!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Name */}
          <div>
            <label htmlFor="name" className="sr-only">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              className={`w-full h-12 px-4 text-gray-700 bg-gray-50 rounded-full border ${
                errors.name ? "border-red-400" : "border-gray-300"
              } focus:ring-2 focus:ring-[#d67952] focus:border-transparent transition-all duration-200`}
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              disabled={status.loading}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p
                id="name-error"
                className="flex items-center text-red-500 text-sm mt-1"
              >
                <ExclamationCircleIcon className="w-4 h-4 mr-1" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className={`w-full h-12 px-4 text-gray-700 bg-gray-50 rounded-full border ${
                errors.email ? "border-red-400" : "border-gray-300"
              } focus:ring-2 focus:ring-[#d67952] focus:border-transparent transition-all duration-200`}
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              disabled={status.loading}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p
                id="email-error"
                className="flex items-center text-red-500 text-sm mt-1"
              >
                <ExclamationCircleIcon className="w-4 h-4 mr-1" />
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="sr-only">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              className={`w-full h-12 px-4 text-gray-700 bg-gray-50 rounded-full border ${
                errors.phone ? "border-red-400" : "border-gray-300"
              } focus:ring-2 focus:ring-[#d67952] focus:border-transparent transition-all duration-200`}
              placeholder="Phone Number (e.g., 7023831569)"
              value={formData.phone}
              onChange={handleChange}
              disabled={status.loading}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && (
              <p
                id="phone-error"
                className="flex items-center text-red-500 text-sm mt-1"
              >
                <ExclamationCircleIcon className="w-4 h-4 mr-1" />
                {errors.phone}
              </p>
            )}
          </div>

          {/* Inquiry Dropdown */}
          <div>
            <label htmlFor="inquiry" className="sr-only">
              Inquiry Type
            </label>
            <select
              id="inquiry"
              className={`w-full h-12 px-4 text-gray-700 bg-gray-50 rounded-full border ${
                errors.inquiry ? "border-red-400" : "border-gray-300"
              } focus:ring-2 focus:ring-[#d67952] focus:border-transparent transition-all duration-200`}
              value={formData.inquiry}
              onChange={handleChange}
              disabled={status.loading}
              aria-invalid={!!errors.inquiry}
              aria-describedby={errors.inquiry ? "inquiry-error" : undefined}
            >
              <option value="" disabled>
                Select Inquiry Type
              </option>
              <option value="gut-health">Gut Health</option>
              <option value="mental-health">Mental Health</option>
              <option value="weight-management">Weight Management</option>
              <option value="general-fitness">General Fitness</option>
              <option value="pain-management">Pain Management</option>
              <option value="sleep-disorders">Sleep Disorders</option>
              <option value="allergy">Allergy</option>
            </select>
            {errors.inquiry && (
              <p
                id="inquiry-error"
                className="flex items-center text-red-500 text-sm mt-1"
              >
                <ExclamationCircleIcon className="w-4 h-4 mr-1" />
                {errors.inquiry}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="sr-only">
              Your Message
            </label>
            <textarea
              id="message"
              className={`w-full h-32 px-4 py-3 text-gray-700 bg-gray-50 rounded-xl border ${
                errors.message ? "border-red-400" : "border-gray-300"
              } focus:ring-2 focus:ring-[#d67952] focus:border-transparent transition-all duration-200`}
              placeholder="Tell us how we can assist you..."
              value={formData.message}
              onChange={handleChange}
              disabled={status.loading}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p
                id="message-error"
                className="flex items-center text-red-500 text-sm mt-1"
              >
                <ExclamationCircleIcon className="w-4 h-4 mr-1" />
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-12 text-white font-semibold rounded-full bg-[#d67952] shadow-md hover:bg-[#b55e3f] transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-[#d67952] focus:outline-none disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
            disabled={status.loading}
          >
            {status.loading ? (
              <>
                <ArrowPathIcon className="w-5 h-5 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        {/* Success Modal */}
        <Modal
          isOpen={status.success}
          onRequestClose={closeSuccessModal}
          className="bg-white p-6 rounded-lg shadow-xl max-w-md mx-auto my-20"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          aria={{
            labelledby: "success-modal-title",
            describedby: "success-modal-desc",
          }}
        >
          <h2
            id="success-modal-title"
            className="text-2xl font-bold text-[#d67952] mb-4"
          >
            Message Sent!
          </h2>
          <div
            id="success-modal-desc"
            className="flex items-center text-gray-700 mb-6"
          >
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md text-gray-800 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-[#d67952] mb-4">
                <CheckCircleIcon className="w-10 h-10 mr-2 mt-3 flex float-left text-green-600" />
                Thank you for reaching out to us!
              </h2>
              <p className="mb-4">
                Your message has been successfully submitted. We truly
                appreciate you connecting with us. Our team will get back to you
                within{" "}
                <span className="font-medium text-indigo-600">24 hours</span>.
              </p>
              <p className="mb-6">
                With gratitude and light,
                <br />
                <span className="font-semibold text-gray-900">
                  The Jogire Team
                </span>
              </p>
              <blockquote className="italic text-purple-700 border-l-4 border-purple-300 pl-4">
                “लोकाः समस्ताः सुखिनो भवन्तु”
                <br />
                <span className="text-sm text-gray-600 not-italic">
                  – May all beings everywhere be happy and free.
                </span>
              </blockquote>
            </div>
          </div>
          <button
            onClick={closeSuccessModal}
            className="w-full py-2 px-4 bg-[#d67952] text-white font-semibold rounded-full hover:bg-[#b55e3f] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d67952]"
          >
            OK
          </button>
        </Modal>

        {/* Error Modal */}
        <Modal
          isOpen={!!status.error}
          onRequestClose={closeErrorModal}
          className="bg-white p-6 rounded-lg shadow-xl max-w-md mx-auto my-20"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          aria={{
            labelledby: "error-modal-title",
            describedby: "error-modal-desc",
          }}
        >
          <h2
            id="error-modal-title"
            className="text-2xl font-bold text-red-600 mb-4"
          >
            Submission Failed
          </h2>
          <div
            id="error-modal-desc"
            className="flex items-center text-gray-700 mb-6"
          >
            <ExclamationCircleIcon className="w-6 h-6 mr-2 text-red-600" />
            <p>{status.error}</p>
          </div>
          <button
            onClick={closeErrorModal}
            className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
          >
            OK
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default ContactUs;
