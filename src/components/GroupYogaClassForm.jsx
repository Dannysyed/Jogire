// import React, { useState } from "react";

// const YogaClassForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     experience: "",
//     courseType: "",
//     health: "",
//     emergencyName: "",
//     emergencyPhone: "",
//     referral: "",
//     notes: "",
//   });

//   const [errors, setErrors] = useState({});

//   // Validation function
//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) newErrors.name = "Full name is required";
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address";
//     }
//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(formData.phone)) {
//       newErrors.phone =
//         "Please enter a valid phone number (e.g., (555) 123-4567)";
//     }
//     if (!formData.experience)
//       newErrors.experience = "Please select your experience level";

//     if (!formData.courseType)
//       newErrors.experience = "Please select your course type";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle input changes
//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({ ...prev, [id]: value }));
//     if (errors[id]) {
//       setErrors((prev) => ({ ...prev, [id]: "" }));
//     }
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log("Form submitted successfully:", formData);
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         experience: "",
//         courseType: "",
//         health: "",
//         emergencyName: "",
//         emergencyPhone: "",
//         referral: "",
//         notes: "",
//       });
//       setErrors({});
//     } else {
//       console.log("Validation failed");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-lg mx-4 p-6 bg-white shadow-md rounded-lg sm:mx-auto lg:max-w-4xl"
//       >
//         <h1 className="text-orange-800 text-center text-2xl mb-4 font-bold ">
//           Registration Form
//         </h1>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//           {/* Column 1 */}
//           <div>
//             {/* Full Name */}
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 font-bold mb-2 text-sm sm:text-base"
//                 htmlFor="name"
//               >
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 ${
//                   errors.name
//                     ? "border-red-500 focus:ring-red-500"
//                     : "focus:ring-orange-800"
//                 }`}
//                 placeholder="Enter your full name"
//               />
//               {errors.name && (
//                 <p className="text-red-500 text-xs mt-1">{errors.name}</p>
//               )}
//             </div>

//             {/* Email Address */}
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 font-bold mb-2 text-sm sm:text-base"
//                 htmlFor="email"
//               >
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 ${
//                   errors.email
//                     ? "border-red-500 focus:ring-red-500"
//                     : "focus:ring-orange-800"
//                 }`}
//                 placeholder="Enter your email"
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-xs mt-1">{errors.email}</p>
//               )}
//             </div>

//             {/* Phone Number */}
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 font-bold mb-2 text-sm sm:text-base"
//                 htmlFor="phone"
//               >
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 ${
//                   errors.phone
//                     ? "border-red-500 focus:ring-red-500"
//                     : "focus:ring-orange-800"
//                 }`}
//                 placeholder="(555) 123-4567"
//               />
//               {errors.phone && (
//                 <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
//               )}
//             </div>

//             {/* Experience Level */}
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 font-bold mb-2 text-sm sm:text-base"
//                 htmlFor="experience"
//               >
//                 Experience Level
//               </label>
//               <select
//                 id="experience"
//                 value={formData.experience}
//                 onChange={handleChange}
//                 className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 ${
//                   errors.experience
//                     ? "border-red-500 focus:ring-red-500"
//                     : "focus:ring-orange-800"
//                 }`}
//               >
//                 <option value="">Select an option</option>
//                 <option value="beginner">Beginner</option>
//                 <option value="intermediate">Intermediate</option>
//                 <option value="advanced">Advanced</option>
//               </select>
//               {errors.experience && (
//                 <p className="text-red-500 text-xs mt-1">{errors.experience}</p>
//               )}
//             </div>

//             {/* Type of Course */}
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 font-bold mb-2 text-sm sm:text-base"
//                 htmlFor="courseType"
//               >
//                 Type of Course
//               </label>
//               <select
//                 id="courseType"
//                 disabled
//                 value={formData.courseType}
//                 onChange={handleChange}
//                 className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 ${
//                   errors.courseType
//                     ? "border-red-500 focus:ring-red-500"
//                     : "focus:ring-orange-800"
//                 }`}
//               >
//                 <option value="beginner">Group Yoga Class</option>
//               </select>
//               {errors.courseType && (
//                 <p className="text-red-500 text-xs mt-1">{errors.courseType}</p>
//               )}
//             </div>
//           </div>

//           {/* Column 2 */}
//           <div>
//             {/* How Did You Hear About Us */}
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 font-bold mb-2 text-sm sm:text-base"
//                 htmlFor="referral"
//               >
//                 How Did You Hear About Us? (Optional)
//               </label>
//               <select
//                 id="referral"
//                 value={formData.referral}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-800"
//               >
//                 <option value="">Select an option</option>
//                 <option value="social-media">Social Media</option>
//                 <option value="friend">Friend/Family</option>
//                 <option value="website">Website</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>
//             {/* Health Conditions */}
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 font-bold mb-2 text-sm sm:text-base"
//                 htmlFor="health"
//               >
//                 Health Conditions or Injuries
//               </label>
//               <textarea
//                 id="health"
//                 value={formData.health}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-800"
//                 placeholder="e.g., knee injury, none"
//                 rows="4"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Special Requests (Full Width) */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 font-bold mb-2 text-sm sm:text-base"
//             htmlFor="notes"
//           >
//             Special Requests (Optional)
//           </label>
//           <textarea
//             id="notes"
//             value={formData.notes}
//             onChange={handleChange}
//             className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-800"
//             placeholder="Any additional notes?"
//             rows="3"
//           />
//         </div>

//         {/* Submit Button (Full Width) */}
//         <button
//           type="submit"
//           className="w-full bg-orange-800 text-white p-2 rounded text-sm sm:text-base hover:bg-orange-900 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-800"
//         >
//           Register for Class
//         </button>
//       </form>
//     </div>
//   );
// };

// export default YogaClassForm;

import { useState, useCallback, useRef } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaUserGraduate,
  FaInfoCircle,
  FaComment,
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaDumbbell,
  FaSpinner,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import Modal from "react-modal";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

// Bind modal to app element for accessibility
Modal.setAppElement("#root");

const GroupYogaClassForm = ({ formType }) => {
  const FORM_CONFIG = {
    "group-yoga": {
      title: "Join the Flow: Group Yoga Sign-Up",
      courseType: "group-yoga",
      courseLabel: "Group Yoga Class",
      requiresExperience: true,
    },
    "personal-yoga": {
      title: "Join the Flow: Personal Yoga Sign-Up",
      courseType: "personal-yoga",
      courseLabel: "Personal Yoga Class",
      requiresExperience: false,
    },
    "diet-counselling": {
      title: "Diet Counselling (Aahar) Sign-Up",
      courseType: "diet-counselling",
      courseLabel: "Diet Counselling (Aahar)",
      requiresExperience: false,
    },
    "gut-health": {
      title: "Gut Health Program Sign-Up",
      courseType: "gut-health",
      courseLabel: "Gut Health Program",
      requiresExperience: false,
    },
    "mental-health": {
      title: "Mental Health Program Sign-Up",
      courseType: "mental-health",
      courseLabel: "Mental Health Program",
      requiresExperience: false,
    },
    "metabolic-health": {
      title: "Metabolic Health Program Sign-Up",
      courseType: "metabolic-health",
      courseLabel: "Metabolic Health Program",
      requiresExperience: false,
    },
  };

  const config = FORM_CONFIG[formType] || FORM_CONFIG["group-yoga"];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    courseType: config.courseType,
    health: "",
    referral: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ success: false, error: null });
  const formRef = useRef(null);

  const totalSteps = config.requiresExperience ? 3 : 2;

  const navigate = useNavigate();
  // Modal close handlers
  const closeSuccessModal = () => {
    setStatus({ success: false, error: null });
    // Reset form and step after closing
    setFormData({
      name: "",
      email: "",
      phone: "",
      experience: "",
      courseType: config.courseType,
      health: "",
      referral: "",
      notes: "",
    });
    setErrors({});
    setStep(1);
    navigate("/"); // redirects to homepage
  };

  const closeErrorModal = () => {
    setStatus({ success: false, error: null });
  };

  // Validation function for each step
  const validateStep = useCallback(
    (currentStep) => {
      const newErrors = {};

      if (currentStep === 1) {
        if (!formData.name.trim()) newErrors.name = "Full name is required";
        if (!formData.email.trim()) {
          newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = "Please enter a valid email address";
        }
        if (!formData.phone.trim()) {
          newErrors.phone = "Phone number is required";
        } else if (
          !/^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/.test(
            formData.phone
          )
        ) {
          newErrors.phone =
            "Please enter a valid phone number (e.g., +1 555-123-4567)";
        }
      } else if (currentStep === 2 && config.requiresExperience) {
        if (!formData.experience)
          newErrors.experience = "Please select your experience level";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    },
    [formData, config.requiresExperience]
  );

  // Handle input changes
  const handleChange = useCallback(
    (e) => {
      const { id, value } = e.target;
      setFormData((prev) => ({ ...prev, [id]: value }));
      if (errors[id]) {
        setErrors((prev) => ({ ...prev, [id]: "" }));
      }
    },
    [errors]
  );

  // Handle step navigation
  const handleNext = useCallback(() => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, totalSteps));
    }
  }, [step, validateStep, totalSteps]);

  const handlePrevious = useCallback(() => {
    setStep((prev) => Math.max(prev - 1, 1));
  }, []);

  // Handle form submission with API call
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!validateStep(step)) {
        console.log("Validation failed");
        return;
      }

      setIsSubmitting(true);
      setStatus({ success: false, error: null });

      try {
        const response = await fetch(
          "http://localhost:8080/api/v1/group-yoga",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.detail || `Failed to submit form: ${response.statusText}`
          );
        }

        const result = await response.json();
        console.log("Form submitted successfully:", result);
        setStatus({ success: true, error: null });
      } catch (error) {
        console.error("Error submitting form:", error);
        setStatus({
          success: false,
          error:
            error.message ||
            "Failed to submit the form. Please try again later.",
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, step, validateStep]
  );

  // Handle manual form submission on the final step
  const handleFinalSubmit = useCallback(() => {
    if (validateStep(step)) {
      formRef.current.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }
  }, [step, validateStep]);

  // Animation variants for step transitions
  const stepVariants = {
    hidden: { opacity: 0, x: 20, scale: 0.98 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: -20, scale: 0.98, transition: { duration: 0.4 } },
  };

  // Animation variants for labels
  const labelVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 } },
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8">
      <div className="w-full max-w-lg mx-4 p-6 bg-white shadow-md rounded-lg sm:mx-auto lg:max-w-4xl overflow-hidden">
        {/* Step Indicator */}
        <div className="flex justify-center mb-6">
          {Array.from({ length: totalSteps }).map((_, index) => {
            const s = index + 1;
            return (
              <div key={s} className="flex items-center mx-2">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${
                    step >= s
                      ? "bg-orange-800 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {s === 1 && <FaUser className="w-5 h-5" />}
                  {s === 2 &&
                    (config.requiresExperience ? (
                      <FaDumbbell className="w-5 h-5" />
                    ) : (
                      <FaInfoCircle className="w-5 h-5" />
                    ))}
                  {s === 3 && <FaInfoCircle className="w-5 h-5" />}
                </div>
                {s < totalSteps && (
                  <div
                    className={`h-1 w-12 ${
                      step > s ? "bg-orange-800" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
        <h2 className="text-center text-sm sm:text-base text-gray-600 mb-4">
          Step {step} of {totalSteps}
        </h2>
        <h1 className="text-orange-800 text-center text-2xl mb-6 font-bold">
          {config.title}
        </h1>

        <form ref={formRef} onSubmit={handleSubmit}>
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Step 1: Personal Information */}
                <div className="grid grid-cols-1 gap-4">
                  {/* Full Name */}
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="name"
                    >
                      <FaUser className="mr-2 text-orange-800" />
                      Full Name
                    </motion.label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.name
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      placeholder="Enter your full name"
                      aria-describedby={errors.name ? "name-error" : undefined}
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-red-500 text-xs mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="email"
                    >
                      <FaEnvelope className="mr-2 text-orange-800" />
                      Email Address
                    </motion.label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.email
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      placeholder="Enter your email"
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="phone"
                    >
                      <FaPhone className="mr-2 text-orange-800" />
                      Phone Number
                    </motion.label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.phone
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      placeholder="+91-7023831569"
                      aria-describedby={
                        errors.phone ? "phone-error" : undefined
                      }
                      disabled={isSubmitting}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && config.requiresExperience && (
              <motion.div
                key="step2"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Step 2: Yoga Details (for yoga forms only) */}
                <div className="grid grid-cols-1 gap-4">
                  {/* Experience Level */}
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="experience"
                    >
                      <FaUserGraduate className="mr-2 text-orange-800" />
                      Experience Level
                    </motion.label>
                    <select
                      id="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.experience
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      aria-describedby={
                        errors.experience ? "experience-error" : undefined
                      }
                      disabled={isSubmitting}
                    >
                      <option value="">Select an option</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                    {errors.experience && (
                      <p
                        id="experience-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.experience}
                      </p>
                    )}
                  </div>

                  {/* Type of Course */}
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="courseType"
                    >
                      <FaDumbbell className="mr-2 text-orange-800" />
                      Type of Course
                    </motion.label>
                    <select
                      id="courseType"
                      disabled
                      value={formData.courseType}
                      onChange={handleChange}
                      className="w-full p-2 border rounded text-sm sm:text-base bg-gray-100 cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-orange-800 transition-all duration-300"
                      aria-describedby={
                        errors.courseType ? "courseType-error" : undefined
                      }
                    >
                      <option value={config.courseType}>
                        {config.courseLabel}
                      </option>
                    </select>
                    <p className="text-gray-500 text-xs mt-1">
                      This form is for {config.courseLabel}.
                    </p>
                    {errors.courseType && (
                      <p
                        id="courseType-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.courseType}
                      </p>
                    )}
                  </div>

                  {/* Health Conditions */}
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="health"
                    >
                      <FaInfoCircle className="mr-2 text-orange-800" />
                      Health Conditions or Injuries
                    </motion.label>
                    <textarea
                      id="health"
                      value={formData.health}
                      onChange={handleChange}
                      className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-800 transition-all duration-300"
                      placeholder="e.g., knee injury, none"
                      rows="4"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {step === (config.requiresExperience ? 3 : 2) && (
              <motion.div
                key={config.requiresExperience ? "step3" : "step2"}
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Step 2/3: Additional Information */}
                <div className="grid grid-cols-1 gap-4">
                  {/* How Did You Hear About Us */}
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="referral"
                    >
                      <FaInfoCircle className="mr-2 text-orange-800" />
                      How Did You Hear About Us? (Optional)
                    </motion.label>
                    <select
                      id="referral"
                      value={formData.referral}
                      onChange={handleChange}
                      className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-800 transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      <option value="">Select an option</option>
                      <option value="social-media">Social Media</option>
                      <option value="friend">Friend/Family</option>
                      <option value="website">Website</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Special Requests */}
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="notes"
                    >
                      <FaComment className="mr-2 text-orange-800" />
                      Special Requests (Optional)
                    </motion.label>
                    <textarea
                      id="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-800 transition-all duration-300"
                      placeholder="Any additional notes?"
                      rows="3"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <motion.button
              type="button"
              onClick={handlePrevious}
              className="flex items-center bg-gray-300 text-gray-700 p-2 rounded text-sm sm:text-base hover:bg-gray-400 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              <FaArrowLeft className="mr-2" />
              Previous
            </motion.button>
          )}
          {step < totalSteps ? (
            <motion.button
              type="button"
              onClick={handleNext}
              className="flex items-center bg-orange-800 text-white p-2 rounded text-sm sm:text-base hover:bg-orange-900 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-800 ml-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              Next
              <FaArrowRight className="ml-2" />
            </motion.button>
          ) : (
            <motion.button
              type="button"
              onClick={handleFinalSubmit}
              className="flex items-center bg-orange-800 text-white p-2 rounded text-sm sm:text-base hover:bg-orange-900 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-800 ml-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin mr-2" />
                  Submitting...
                </>
              ) : (
                <>
                  Register for Program
                  <FaCheck className="ml-2" />
                </>
              )}
            </motion.button>
          )}
        </div>

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
                Your registration has been successfully submitted. We truly
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

GroupYogaClassForm.propTypes = {
  formType: PropTypes.oneOf([
    "group-yoga",
    "personal-yoga",
    "diet-plan",
    "gut-health",
    "mental-health",
    "metabolic-health",
  ]).isRequired,
};

export default GroupYogaClassForm;
