import { useState, useCallback, useRef } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaRulerVertical,
  FaWeight,
  FaBullseye,
  FaDumbbell,
  FaTint,
  FaClock,
  FaUtensils,
  FaBan,
  FaNotesMedical,
  FaPills,
  FaCapsules,
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaSpinner,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "react-modal";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

// Bind modal to app element for accessibility
Modal.setAppElement("#root");

const GutHealthForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    goalWeight: "",
    rapidWeightChange: "",
    rapidWeightChangeDetails: "",
    digestiveSymptoms: [],
    symptomFrequency: "",
    medicalConditions: "",
    medications: "",
    supplements: "",
    allergies: "",
    dietaryPreferences: "",
    fiberIntake: "",
    fermentedFoods: "",
    sugarProcessedFoods: "",
    hydration: "",
    mealFrequency: "",
    foodPreferences: "",
    dietaryRestrictions: "",
    activityLevel: "",
    stressLevel: "",
    sleepQuality: "",
    dailySchedule: "",
    gutHealthGoal: "",
    cookingAbility: "",
    budget: "",
    notes: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ success: false, error: null });
  const formRef = useRef(null);

  const totalSteps = 7;
  const navigate = useNavigate();

  // Modal close handlers
  const closeSuccessModal = () => {
    setStatus({ success: false, error: null });
    setFormData({
      name: "",
      email: "",
      phone: "",
      age: "",
      gender: "",
      height: "",
      weight: "",
      goalWeight: "",
      rapidWeightChange: "",
      rapidWeightChangeDetails: "",
      digestiveSymptoms: [],
      symptomFrequency: "",
      medicalConditions: "",
      medications: "",
      supplements: "",
      allergies: "",
      dietaryPreferences: "",
      fiberIntake: "",
      fermentedFoods: "",
      sugarProcessedFoods: "",
      hydration: "",
      mealFrequency: "",
      foodPreferences: "",
      dietaryRestrictions: "",
      activityLevel: "",
      stressLevel: "",
      sleepQuality: "",
      dailySchedule: "",
      gutHealthGoal: "",
      cookingAbility: "",
      budget: "",
      notes: "",
    });
    setErrors({});
    setStep(1);
    navigate("/");
  };

  const closeErrorModal = () => {
    setStatus({ success: false, error: null });
  };

  // Validation function
  const validateStep = useCallback(
    (currentStep) => {
      const newErrors = {};
      if (currentStep === 1) {
        if (!formData.name.trim()) newErrors.name = "Full name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email))
          newErrors.email = "Invalid email";
        if (!formData.phone.trim())
          newErrors.phone = "Phone number is required";
        else if (
          !/^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/.test(
            formData.phone
          )
        )
          newErrors.phone = "Invalid phone number (e.g., +91-7023831569)";
        if (!formData.age) newErrors.age = "Age is required";
        else if (formData.age < 1 || formData.age > 120)
          newErrors.age = "Age must be between 1 and 120";
        if (!formData.gender) newErrors.gender = "Gender is required";
      } else if (currentStep === 2) {
        if (!formData.height) newErrors.height = "Height is required";
        else if (formData.height < 50 || formData.height > 300)
          newErrors.height = "Height must be between 50 and 300 cm";
        if (!formData.weight) newErrors.weight = "Current weight is required";
        else if (formData.weight < 10 || formData.weight > 300)
          newErrors.weight = "Weight must be between 10 and 300 kg";
        if (formData.goalWeight) {
          const goalWeight = Number(formData.goalWeight);
          if (goalWeight < 10 || goalWeight > 300) {
            newErrors.goalWeight = "Goal weight must be between 10 and 300 kg";
          }
        }
        if (!formData.rapidWeightChange)
          newErrors.rapidWeightChange =
            "Please select whichever applicable to you";
        if (formData.rapidWeightChange === "No")
          formData.rapidWeightChangeDetails = "Not Specified";
        if (
          formData.rapidWeightChange === "Rapid Weight Gain" ||
          formData.rapidWeightChange === "Rapid Weight Loss"
        ) {
          const value = formData.rapidWeightChangeDetails;

          if (!value) {
            newErrors.rapidWeightChangeDetails = "This field is required";
          } else {
            const rapidWeightChangeDetails = Number(value);
            if (
              isNaN(rapidWeightChangeDetails) ||
              rapidWeightChangeDetails < 5 ||
              rapidWeightChangeDetails > 30
            ) {
              newErrors.rapidWeightChangeDetails =
                "Weight must be between 5 to 30 kg";
            }
          }
        }
      } else if (currentStep === 3) {
        if (formData.digestiveSymptoms.length === 0)
          newErrors.digestiveSymptoms = "At least one option must be selected";
        if (!formData.symptomFrequency)
          newErrors.symptomFrequency = "Symptom frequency is required";
        if (!formData.medicalConditions.trim())
          newErrors.medicalConditions =
            "Medical conditions are required (enter 'None' if none)";
      } else if (currentStep === 4) {
        if (!formData.dietaryPreferences)
          newErrors.dietaryPreferences = "Dietary preference is required";
        if (!formData.fiberIntake)
          newErrors.fiberIntake = "Fiber intake is required";
        if (!formData.fermentedFoods)
          newErrors.fermentedFoods = "Fermented foods frequency is required";
        if (!formData.sugarProcessedFoods)
          newErrors.sugarProcessedFoods =
            "Sugar/processed foods frequency is required";
        if (!formData.hydration)
          newErrors.hydration = "Hydration level is required";
        else if (formData.hydration < 0 || formData.hydration > 10)
          newErrors.hydration = "Hydration must be between 0 and 10 liters";
        if (!formData.mealFrequency)
          newErrors.mealFrequency = "Meal frequency is required";
      } else if (currentStep === 5) {
        if (!formData.activityLevel)
          newErrors.activityLevel = "Activity level is required";
        if (!formData.stressLevel)
          newErrors.stressLevel = "Stress level is required";
        if (!formData.sleepQuality)
          newErrors.sleepQuality = "Sleep quality is required";
        if (!formData.dailySchedule.trim())
          newErrors.dailySchedule = "Daily schedule is required";
      } else if (currentStep === 6) {
        if (!formData.gutHealthGoal)
          newErrors.gutHealthGoal = "Gut health goal is required";
        if (!formData.cookingAbility)
          newErrors.cookingAbility = "Cooking ability is required";
        if (!formData.budget) newErrors.budget = "Budget is required";
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    },
    [formData]
  );

  // Handle input change
  const handleChange = useCallback(
    (e) => {
      const { id, value, type, checked } = e.target;
      if (type === "checkbox") {
        setFormData((prev) => {
          const updatedSymptoms = checked
            ? [...prev.digestiveSymptoms, value]
            : prev.digestiveSymptoms.filter((symptom) => symptom !== value);
          return { ...prev, digestiveSymptoms: updatedSymptoms };
        });
      } else {
        setFormData((prev) => ({ ...prev, [id]: value }));
      }
      if (errors[id]) setErrors((prev) => ({ ...prev, [id]: "" }));
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
          "https://jogire-backend.onrender.com/api/v1/gut-health",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
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
        <div className="flex justify-center mb-6 w-full px-2 sm:px-6">
          <div className="flex w-full max-w-4xl">
            {Array.from({ length: totalSteps }).map((_, index) => {
              const s = index + 1;
              return (
                <div key={s} className="flex items-center flex-1">
                  <div
                    className={`flex items-center justify-center rounded-full 
              ${
                step >= s
                  ? "bg-orange-800 text-white"
                  : "bg-gray-300 text-gray-600"
              }
              w-8 h-8 sm:w-10 sm:h-10 transition-all duration-200
            `}
                  >
                    {s === 1 && <FaUser className="w-4 h-4 sm:w-5 sm:h-5" />}
                    {s === 2 && (
                      <FaRulerVertical className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                    {s === 3 && (
                      <FaNotesMedical className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                    {s === 4 && (
                      <FaUtensils className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                    {s === 5 && (
                      <FaDumbbell className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                    {s === 6 && (
                      <FaBullseye className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                    {s === 7 && <FaCheck className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </div>
                  {s < totalSteps && (
                    <div
                      className={`flex-1 h-1 mx-1 sm:mx-2 transition-all duration-200 ${
                        step > s ? "bg-orange-800" : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <h2 className="text-center text-sm sm:text-base text-gray-600 mb-4">
          Step {step} of {totalSteps}
        </h2>
        <h1 className="text-orange-800 text-center text-2xl mb-6 font-bold">
          Gut Health Program Sign-Up
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
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.name
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      placeholder="e.g., John Doe"
                      aria-describedby={errors.name ? "name-error" : undefined}
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-red-500 text-xs mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>
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
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.email
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      placeholder="e.g., john.doe@example.com"
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
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.phone
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      placeholder="e.g., +91-7023831569"
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
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="age"
                    >
                      <FaUser className="mr-2 text-orange-800" />
                      Age
                    </motion.label>
                    <input
                      id="age"
                      type="number"
                      value={formData.age}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.age
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      placeholder="e.g., 30"
                      aria-describedby={errors.age ? "age-error" : undefined}
                      disabled={isSubmitting}
                    />
                    {errors.age && (
                      <p id="age-error" className="text-red-500 text-xs mt-1">
                        {errors.age}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="gender"
                    >
                      <FaUser className="mr-2 text-orange-800" />
                      Gender
                    </motion.label>
                    <select
                      id="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.gender
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      aria-describedby={
                        errors.gender ? "gender-error" : undefined
                      }
                      disabled={isSubmitting}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer not to say">
                        Prefer not to say
                      </option>
                    </select>
                    {errors.gender && (
                      <p
                        id="gender-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.gender}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
            {step === 2 && (
              <motion.div
                key="step2"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Step 2: Physical Metrics */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="height"
                    >
                      <FaRulerVertical className="mr-2 text-orange-800" />
                      Height (cm)
                    </motion.label>
                    <input
                      id="height"
                      type="number"
                      value={formData.height}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.height
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      placeholder="e.g., 167"
                      aria-describedby={
                        errors.height ? "height-error" : undefined
                      }
                      disabled={isSubmitting}
                    />
                    {errors.height && (
                      <p
                        id="height-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.height}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="weight"
                    >
                      <FaWeight className="mr-2 text-orange-800" />
                      Current Weight (kg)
                    </motion.label>
                    <input
                      id="weight"
                      type="number"
                      value={formData.weight}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.weight
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      placeholder="e.g., 68"
                      aria-describedby={
                        errors.weight ? "weight-error" : undefined
                      }
                      disabled={isSubmitting}
                    />
                    {errors.weight && (
                      <p
                        id="weight-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.weight}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="goalWeight"
                    >
                      <FaWeight className="mr-2 text-orange-800" />
                      Goal Weight (kg, Optional)
                    </motion.label>
                    <input
                      id="goalWeight"
                      type="number"
                      value={formData.goalWeight}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.goalWeight
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      placeholder="e.g., 65"
                      aria-describedby={
                        errors.goalWeight ? "goalWeight-error" : undefined
                      }
                      disabled={isSubmitting}
                    />
                    {errors.goalWeight && (
                      <p
                        id="goalWeight-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.goalWeight}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="rapidWeightChange"
                    >
                      <FaWeight className="mr-2 text-red-800" />
                      Have you experienced any rapid weight change in the past 6
                      months?
                    </motion.label>
                    <select
                      id="rapidWeightChange"
                      value={formData.rapidWeightChange}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.rapidWeightChange
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      aria-describedby={
                        errors.rapidWeightChange
                          ? "rapidWeightChange-error"
                          : undefined
                      }
                      disabled={isSubmitting}
                    >
                      <option value="">Select Option</option>
                      <option value="Rapid Weight Gain">
                        Rapid Weight Gain
                      </option>
                      <option value="Rapid Weight Loss">
                        Rapid Weight Loss
                      </option>
                      <option value="No">No</option>
                    </select>
                    {errors.rapidWeightChange && (
                      <p
                        id="rapidWeightChange-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.rapidWeightChange}
                      </p>
                    )}
                  </div>
                  {(formData.rapidWeightChange === "Rapid Weight Gain" ||
                    formData.rapidWeightChange === "Rapid Weight Loss") && (
                    <div className="mb-4">
                      <motion.label
                        variants={labelVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                        htmlFor="rapidWeightChangeDetails"
                      >
                        <FaWeight className="mr-2 text-red-800" />
                        How much weight did you gain/lose (in kgs) ?
                      </motion.label>
                      <input
                        id="rapidWeightChangeDetails"
                        type="number"
                        value={formData.rapidWeightChangeDetails}
                        onChange={handleChange}
                        className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                          errors.rapidWeightChangeDetails
                            ? "border-red-500 focus:ring-red-500"
                            : "focus:ring-orange-800"
                        }`}
                        placeholder="e.g., 10"
                        aria-describedby={
                          errors.rapidWeightChangeDetails
                            ? "rapidWeightChangeDetails-error"
                            : undefined
                        }
                        disabled={isSubmitting}
                      />
                      {errors.rapidWeightChangeDetails && (
                        <p
                          id="rapidWeightChangeDetails-error"
                          className="text-red-500 text-xs mt-1"
                        >
                          {errors.rapidWeightChangeDetails}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Step 3: Gut Health and Medical History */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="digestiveSymptoms"
                    >
                      <FaNotesMedical className="mr-2 text-orange-800" />
                      Digestive Symptoms
                    </motion.label>
                    {/* <div className="space-y-2"> */}
                    <div className="space-y-2 grid grid-cols-2 gap-2">
                      {[
                        "Bloating",
                        "Gas",
                        "Constipation",
                        "Diarrhea",
                        "Abdominal Pain",
                        "Acid Reflux",
                        "Burping",
                        "Stool not formed",
                        "Food pieces in stool",
                        "Sticky stool ",
                        "Toilet 3+ times daily",
                        "Loss of appetite",
                        "Heartburn",
                        "None",
                      ].map((symptom) => (
                        <label key={symptom} className="flex items-center">
                          <input
                            type="checkbox"
                            value={symptom}
                            checked={formData.digestiveSymptoms.includes(
                              symptom
                            )}
                            onChange={handleChange}
                            className="mr-2"
                            disabled={isSubmitting}
                          />
                          {symptom}
                        </label>
                      ))}
                    </div>
                    {errors.digestiveSymptoms && (
                      <p
                        id="digestiveSymptoms-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.digestiveSymptoms}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="symptomFrequency"
                    >
                      <FaNotesMedical className="mr-2 text-orange-800" />
                      Frequency of Symptoms
                    </motion.label>
                    <select
                      id="symptomFrequency"
                      value={formData.symptomFrequency}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.symptomFrequency
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      aria-describedby={
                        errors.symptomFrequency
                          ? "symptomFrequency-error"
                          : undefined
                      }
                      disabled={isSubmitting}
                    >
                      <option value="">Select Frequency</option>
                      <option value="Daily">Daily</option>
                      <option value="Weekly">Weekly</option>
                      <option value="Monthly">Monthly</option>
                      <option value="Rarely">Rarely</option>
                      <option value="Never">Never</option>
                    </select>
                    {errors.symptomFrequency && (
                      <p
                        id="symptomFrequency-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.symptomFrequency}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="medicalConditions"
                    >
                      <FaNotesMedical className="mr-2 text-orange-800" />
                      Medical Conditions
                    </motion.label>
                    <textarea
                      id="medicalConditions"
                      value={formData.medicalConditions}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.medicalConditions
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      placeholder="e.g., IBS, None"
                      rows="3"
                      aria-describedby={
                        errors.medicalConditions
                          ? "medicalConditions-error"
                          : undefined
                      }
                      disabled={isSubmitting}
                    />
                    {errors.medicalConditions && (
                      <p
                        id="medicalConditions-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.medicalConditions}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="medications"
                    >
                      <FaPills className="mr-2 text-orange-800" />
                      Current Medications (Optional)
                    </motion.label>
                    <textarea
                      id="medications"
                      value={formData.medications}
                      onChange={handleChange}
                      className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 focus:ring-orange-800"
                      placeholder="e.g., Antibiotics, None"
                      rows="3"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="supplements"
                    >
                      <FaCapsules className="mr-2 text-orange-800" />
                      Supplements Used (Optional)
                    </motion.label>
                    <textarea
                      id="supplements"
                      value={formData.supplements}
                      onChange={handleChange}
                      className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 focus:ring-orange-800"
                      placeholder="e.g., Probiotics, None"
                      rows="3"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="allergies"
                    >
                      <FaBan className="mr-2 text-orange-800" />
                      Food Allergies or Intolerances (Optional)
                    </motion.label>
                    <textarea
                      id="allergies"
                      value={formData.allergies}
                      onChange={handleChange}
                      className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 focus:ring-orange-800"
                      placeholder="e.g., Lactose Intolerance, None"
                      rows="3"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
              </motion.div>
            )}
            {step === 4 && (
              <motion.div
                key="step4"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Step 4: Dietary Habits */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="dietaryPreferences"
                    >
                      <FaUtensils className="mr-2 text-orange-800" />
                      Dietary Preferences
                    </motion.label>
                    <select
                      id="dietaryPreferences"
                      value={formData.dietaryPreferences}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.dietaryPreferences
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      aria-describedby={
                        errors.dietaryPreferences
                          ? "dietaryPreferences-error"
                          : undefined
                      }
                      disabled={isSubmitting}
                    >
                      <option value="">Select Preference</option>
                      <option value="Omnivore">Omnivore</option>
                      <option value="Vegetarian">Vegetarian</option>
                      <option value="Vegan">Vegan</option>
                      <option value="Pescatarian">Pescatarian</option>
                      <option value="Keto">Keto</option>
                      <option value="Paleo">Paleo</option>
                      <option value="Low FODMAP">Low FODMAP</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.dietaryPreferences && (
                      <p
                        id="dietaryPreferences-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.dietaryPreferences}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="fiberIntake"
                    >
                      <FaUtensils className="mr-2 text-orange-800" />
                      Daily Fiber Intake
                    </motion.label>
                    <select
                      id="fiberIntake"
                      value={formData.fiberIntake}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.fiberIntake
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      aria-describedby={
                        errors.fiberIntake ? "fiberIntake-error" : undefined
                      }
                      disabled={isSubmitting}
                    >
                      <option value="">Select Fiber Intake</option>
                      <option value="high">
                        High (lots of fruits, veggies, whole grains)
                      </option>
                      <option value="moderate">
                        Moderate (some fiber-rich foods)
                      </option>
                      <option value="low">Low (mostly processed foods)</option>
                      <option value="unsure">Unsure</option>
                    </select>
                    {errors.fiberIntake && (
                      <p
                        id="fiberIntake-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.fiberIntake}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="fermentedFoods"
                    >
                      <FaUtensils className="mr-2 text-orange-800" />
                      Fermented Foods Consumption
                    </motion.label>
                    <select
                      id="fermentedFoods"
                      value={formData.fermentedFoods}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.fermentedFoods
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      aria-describedby={
                        errors.fermentedFoods
                          ? "fermentedFoods-error"
                          : undefined
                      }
                      disabled={isSubmitting}
                    >
                      <option value="">Select Frequency</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="rarely">Rarely</option>
                      <option value="never">Never</option>
                    </select>
                    {errors.fermentedFoods && (
                      <p
                        id="fermentedFoods-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.fermentedFoods}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="sugarProcessedFoods"
                    >
                      <FaUtensils className="mr-2 text-orange-800" />
                      Sugary/Processed Foods Consumption
                    </motion.label>
                    <select
                      id="sugarProcessedFoods"
                      value={formData.sugarProcessedFoods}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.sugarProcessedFoods
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      aria-describedby={
                        errors.sugarProcessedFoods
                          ? "sugarProcessedFoods-error"
                          : undefined
                      }
                      disabled={isSubmitting}
                    >
                      <option value="">Select Frequency</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="rarely">Rarely</option>
                      <option value="never">Never</option>
                    </select>
                    {errors.sugarProcessedFoods && (
                      <p
                        id="sugarProcessedFoods-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.sugarProcessedFoods}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="hydration"
                    >
                      <FaTint className="mr-2 text-orange-800" />
                      Daily Water Intake (liters)
                    </motion.label>
                    <input
                      id="hydration"
                      type="number"
                      step="0.1"
                      value={formData.hydration}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.hydration
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      placeholder="e.g., 2.5"
                      aria-describedby={
                        errors.hydration ? "hydration-error" : undefined
                      }
                      disabled={isSubmitting}
                    />
                    {errors.hydration && (
                      <p
                        id="hydration-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.hydration}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="mealFrequency"
                    >
                      <FaUtensils className="mr-2 text-orange-800" />
                      Meal Frequency
                    </motion.label>
                    <select
                      id="mealFrequency"
                      value={formData.mealFrequency}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.mealFrequency
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      aria-describedby={
                        errors.mealFrequency ? "mealFrequency-error" : undefined
                      }
                      disabled={isSubmitting}
                    >
                      <option value="">Select Meal Frequency</option>
                      <option value="1-2 meals">1-2 Meals</option>
                      <option value="3 meals">3 Meals</option>
                      <option value="4-5 meals">4-5 Meals</option>
                      <option value="intermittent fasting">
                        Intermittent Fasting
                      </option>
                      <option value="other">Other</option>
                    </select>
                    {errors.mealFrequency && (
                      <p
                        id="mealFrequency-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.mealFrequency}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="foodPreferences"
                    >
                      <FaUtensils className="mr-2 text-orange-800" />
                      Food Preferences (Optional)
                    </motion.label>
                    <textarea
                      id="foodPreferences"
                      value={formData.foodPreferences}
                      onChange={handleChange}
                      className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 focus:ring-orange-800"
                      placeholder="e.g., Love fermented foods, dislike spicy foods"
                      rows="3"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="dietaryRestrictions"
                    >
                      <FaBan className="mr-2 text-orange-800" />
                      Dietary Restrictions (Optional)
                    </motion.label>
                    <textarea
                      id="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={handleChange}
                      className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 focus:ring-orange-800"
                      placeholder="e.g., No Dairy, None"
                      rows="3"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
              </motion.div>
            )}
            {step === 5 && (
              <motion.div
                key="step5"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Step 5: Lifestyle and Activity */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="activityLevel"
                    >
                      <FaDumbbell className="mr-2 text-orange-800" />
                      Activity Level
                    </motion.label>
                    <select
                      id="activityLevel"
                      value={formData.activityLevel}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.activityLevel
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      aria-describedby={
                        errors.activityLevel ? "activityLevel-error" : undefined
                      }
                      disabled={isSubmitting}
                    >
                      <option value="">Select Activity Level</option>
                      <option value="sedentary">
                        Sedentary (little to no exercise)
                      </option>
                      <option value="light">
                        Light (occasional walking/light activity)
                      </option>
                      <option value="moderate">
                        Moderate (regular exercise 3-5 times/week)
                      </option>
                      <option value="active">
                        Active (daily exercise/intense workouts)
                      </option>
                    </select>
                    {errors.activityLevel && (
                      <p
                        id="activityLevel-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.activityLevel}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="stressLevel"
                    >
                      <FaDumbbell className="mr-2 text-orange-800" />
                      Stress Level
                    </motion.label>
                    <select
                      id="stressLevel"
                      value={formData.stressLevel}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.stressLevel
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      aria-describedby={
                        errors.stressLevel ? "stressLevel-error" : undefined
                      }
                      disabled={isSubmitting}
                    >
                      <option value="">Select Stress Level</option>
                      <option value="low">Low</option>
                      <option value="moderate">Moderate</option>
                      <option value="high">High</option>
                      <option value="very high">Very High</option>
                    </select>
                    {errors.stressLevel && (
                      <p
                        id="stressLevel-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.stressLevel}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="sleepQuality"
                    >
                      <FaDumbbell className="mr-2 text-orange-800" />
                      Sleep Quality
                    </motion.label>
                    <select
                      id="sleepQuality"
                      value={formData.sleepQuality}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.sleepQuality
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      aria-describedby={
                        errors.sleepQuality ? "sleepQuality-error" : undefined
                      }
                      disabled={isSubmitting}
                    >
                      <option value="">Select Sleep Quality</option>
                      <option value="poor">Poor (frequent disturbances)</option>
                      <option value="fair">Fair (occasional issues)</option>
                      <option value="good">Good (mostly restful)</option>
                      <option value="excellent">
                        Excellent (consistently restful)
                      </option>
                    </select>
                    {errors.sleepQuality && (
                      <p
                        id="sleepQuality-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.sleepQuality}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="dailySchedule"
                    >
                      <FaClock className="mr-2 text-orange-800" />
                      Typical Daily Schedule
                    </motion.label>
                    <textarea
                      id="dailySchedule"
                      value={formData.dailySchedule}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.dailySchedule
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      placeholder="e.g., Breakfast at 7 AM, Lunch at 1 PM..."
                      rows="3"
                      aria-describedby={
                        errors.dailySchedule ? "dailySchedule-error" : undefined
                      }
                      disabled={isSubmitting}
                    />
                    {errors.dailySchedule && (
                      <p
                        id="dailySchedule-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.dailySchedule}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
            {step === 6 && (
              <motion.div
                key="step6"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Step 6: Gut Health Goals and Preferences */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="gutHealthGoal"
                    >
                      <FaBullseye className="mr-2 text-orange-800" />
                      Primary Gut Health Goal
                    </motion.label>
                    <select
                      id="gutHealthGoal"
                      value={formData.gutHealthGoal}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.gutHealthGoal
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      aria-describedby={
                        errors.gutHealthGoal ? "gutHealthGoal-error" : undefined
                      }
                      disabled={isSubmitting}
                    >
                      <option value="">Select Goal</option>
                      <option value="Reduce Bloating/Gas">
                        Reduce Bloating/Gas
                      </option>
                      <option value="Improve Bowel Regularity">
                        Improve Bowel Regularity
                      </option>
                      <option value="Manage IBS/IBD Symptoms">
                        Manage IBS/IBD Symptoms
                      </option>
                      <option value="Enhance Overall Gut Health">
                        Enhance Overall Gut Health
                      </option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.gutHealthGoal && (
                      <p
                        id="gutHealthGoal-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.gutHealthGoal}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="cookingAbility"
                    >
                      <FaUtensils className="mr-2 text-orange-800" />
                      Cooking Ability
                    </motion.label>
                    <select
                      id="cookingAbility"
                      value={formData.cookingAbility}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.cookingAbility
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      aria-describedby={
                        errors.cookingAbility
                          ? "cookingAbility-error"
                          : undefined
                      }
                      disabled={isSubmitting}
                    >
                      <option value="">Select Cooking Ability</option>
                      <option value="beginner">
                        Beginner (minimal skills)
                      </option>
                      <option value="intermediate">
                        Intermediate (can follow recipes)
                      </option>
                      <option value="advanced">
                        Advanced (confident in the kitchen)
                      </option>
                      <option value="quick">Quick (prefer fast meals)</option>
                    </select>
                    {errors.cookingAbility && (
                      <p
                        id="cookingAbility-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.cookingAbility}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="budget"
                    >
                      <FaUtensils className="mr-2 text-orange-800" />
                      Budget for Food and Supplements
                    </motion.label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.budget
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      aria-describedby={
                        errors.budget ? "budget-error" : undefined
                      }
                      disabled={isSubmitting}
                    >
                      <option value="">Select Budget</option>
                      <option value="low">
                        Low (prefer affordable options)
                      </option>
                      <option value="moderate">
                        Moderate (willing to spend on quality)
                      </option>
                      <option value="high">
                        High (open to premium options)
                      </option>
                    </select>
                    {errors.budget && (
                      <p
                        id="budget-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.budget}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="notes"
                    >
                      <FaNotesMedical className="mr-2 text-orange-800" />
                      Additional Notes (Optional)
                    </motion.label>
                    <textarea
                      id="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 focus:ring-orange-800"
                      placeholder="e.g., Any specific concerns or preferences"
                      rows="3"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
              </motion.div>
            )}
            {step === 7 && (
              <motion.div
                key="step7"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Step 7: Review and Submit */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        Personal Information
                      </h3>
                      <p>Name: {formData.name}</p>
                      <p>Email: {formData.email}</p>
                      <p>Phone: {formData.phone}</p>
                      <p>Age: {formData.age}</p>
                      <p>Gender: {formData.gender}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        Physical Metrics
                      </h3>
                      <p>Height: {formData.height} cm</p>
                      <p>Weight: {formData.weight} kg</p>
                      <p>
                        Goal Weight: {formData.goalWeight || "Not specified"} kg
                      </p>
                      <p>
                        Rapid Weight Gain/Lose: {formData.rapidWeightChange}
                      </p>
                      <p>
                        Rapid Weight Gain/Lose Details:{" "}
                        {formData.rapidWeightChangeDetails || "Not specified"}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        Gut Health and Medical History
                      </h3>
                      <p>
                        Digestive Symptoms:{" "}
                        {formData.digestiveSymptoms.join(", ") || "None"}
                      </p>
                      <p>Symptom Frequency: {formData.symptomFrequency}</p>
                      <p>Medical Conditions: {formData.medicalConditions}</p>
                      <p>
                        Medications: {formData.medications || "Not specified"}
                      </p>
                      <p>
                        Supplements: {formData.supplements || "Not specified"}
                      </p>
                      <p>
                        Allergies/Intolerances:{" "}
                        {formData.allergies || "Not specified"}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        Dietary Habits
                      </h3>
                      <p>Dietary Preferences: {formData.dietaryPreferences}</p>
                      <p>Fiber Intake: {formData.fiberIntake}</p>
                      <p>Fermented Foods: {formData.fermentedFoods}</p>
                      <p>
                        Sugar/Processed Foods: {formData.sugarProcessedFoods}
                      </p>
                      <p>Hydration: {formData.hydration} liters</p>
                      <p>Meal Frequency: {formData.mealFrequency}</p>
                      <p>
                        Food Preferences:{" "}
                        {formData.foodPreferences || "Not specified"}
                      </p>
                      <p>
                        Dietary Restrictions:{" "}
                        {formData.dietaryRestrictions || "Not specified"}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        Lifestyle and Activity
                      </h3>
                      <p>Activity Level: {formData.activityLevel}</p>
                      <p>Stress Level: {formData.stressLevel}</p>
                      <p>Sleep Quality: {formData.sleepQuality}</p>
                      <p>Daily Schedule: {formData.dailySchedule}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        Gut Health Goals and Preferences
                      </h3>
                      <p>Gut Health Goal: {formData.gutHealthGoal}</p>
                      <p>Cooking Ability: {formData.cookingAbility}</p>
                      <p>Budget: {formData.budget}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        Additional Notes
                      </h3>
                      <p>Notes: {formData.notes || "Not specified"}</p>
                    </div>
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
                  Submit
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

export default GutHealthForm;
