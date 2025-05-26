import { useState, useCallback, useRef } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaHeartbeat,
  FaPills,
  FaUtensils,
  FaBed,
  FaRunning,
  FaUsers,
  FaBullseye,
  FaClock,
  FaCheck,
  FaSpinner,
  FaArrowLeft,
  FaArrowRight,
  FaNotesMedical,
  FaCalendarDay,
  FaBuilding,
  FaHome,
  FaDesktop,
  FaCommentDots,
  FaWeight,
  FaRulerVertical,
  FaWater,
  FaDollarSign,
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

const MetabolicHealthForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    primaryConcerns: [],
    symptomFrequency: "",
    symptomSeverity: "",
    bloodSugar: "",
    cholesterol: "",
    bloodPressure: "",
    metabolicDiagnoses: "",
    medications: "",
    pastInterventions: "",
    interventionDetails: "",
    otherConditions: "",
    familyHistory: "",
    substanceUse: "",
    substanceDetails: "",
    sleepQuality: "",
    sleepDuration: "",
    activityLevel: "",
    exerciseDetails: "",
    dietaryHabits: "",
    carbIntake: "",
    hydration: "",
    stressLevel: "",
    metabolicGoal: "",
    supportType: "",
    timeCommitment: "",
    dietaryPreferences: "",
    budget: "",
    dailySchedule: "",
    mealTiming: "",
    workEnvironment: "",
    livingSituation: "",
    foodAccess: "",
    screenTime: "",
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
      primaryConcerns: [],
      symptomFrequency: "",
      symptomSeverity: "",
      bloodSugar: "",
      cholesterol: "",
      bloodPressure: "",
      metabolicDiagnoses: "",
      medications: "",
      pastInterventions: "",
      interventionDetails: "",
      otherConditions: "",
      familyHistory: "",
      substanceUse: "",
      substanceDetails: "",
      sleepQuality: "",
      sleepDuration: "",
      activityLevel: "",
      exerciseDetails: "",
      dietaryHabits: "",
      carbIntake: "",
      hydration: "",
      stressLevel: "",
      metabolicGoal: "",
      supportType: "",
      timeCommitment: "",
      dietaryPreferences: "",
      budget: "",
      dailySchedule: "",
      mealTiming: "",
      workEnvironment: "",
      livingSituation: "",
      foodAccess: "",
      screenTime: "",
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
          newErrors.phone = "Invalid phone number (e.g., +91-9876543210)";
        if (!formData.age) newErrors.age = "Age is required";
        else if (formData.age < 1 || formData.age > 120)
          newErrors.age = "Age must be between 1 and 120";
        if (!formData.gender) newErrors.gender = "Gender is required";
        if (!formData.height.trim()) newErrors.height = "Height is required";
        else if (formData.height < 30 || formData.height > 300)
          newErrors.height = "Height must be between 30 and 300";
        if (!formData.weight) newErrors.weight = "Weight is required";
        else if (formData.weight < 10 || formData.weight > 300)
          newErrors.weight = "Weight must be between 10 and 300";
      } else if (currentStep === 2) {
        if (formData.primaryConcerns.length === 0)
          newErrors.primaryConcerns = "At least one option must be selected";
        if (!formData.symptomSeverity)
          newErrors.symptomSeverity = "Symptom severity is required";
        if (!formData.metabolicDiagnoses.trim())
          newErrors.metabolicDiagnoses =
            "Metabolic health history is required (enter 'None' if none)";
      } else if (currentStep === 3) {
        if (!formData.pastInterventions)
          newErrors.pastInterventions = "Past interventions are required";
        if (
          formData.pastInterventions === "yes" &&
          !formData.interventionDetails.trim()
        )
          newErrors.interventionDetails = "Intervention details are required";
        if (!formData.otherConditions.trim())
          newErrors.otherConditions =
            "Other conditions are required (enter 'None' if none)";
        if (!formData.familyHistory.trim())
          newErrors.familyHistory =
            "Family history is required (enter 'None' if none)";
        if (!formData.substanceUse)
          newErrors.substanceUse = "Substance use information is required";
        if (
          formData.substanceUse === "yes" &&
          !formData.substanceDetails.trim()
        )
          newErrors.substanceDetails = "Substance details are required";
      } else if (currentStep === 4) {
        if (!formData.sleepQuality)
          newErrors.sleepQuality = "Sleep quality is required";
        if (!formData.sleepDuration)
          newErrors.sleepDuration = "Sleep duration is required";
        else if (formData.sleepDuration < 0 || formData.sleepDuration > 24)
          newErrors.sleepDuration =
            "Sleep duration must be between 0 and 24 hours";
        if (!formData.activityLevel)
          newErrors.activityLevel = "Activity level is required";
        if (!formData.dietaryHabits)
          newErrors.dietaryHabits = "Dietary habits are required";
        if (!formData.carbIntake)
          newErrors.carbIntake = "Carbohydrate intake is required";
        if (!formData.hydration)
          newErrors.hydration = "Hydration level is required";
        if (!formData.stressLevel)
          newErrors.stressLevel = "Stress level is required";
      } else if (currentStep === 5) {
        if (!formData.metabolicGoal)
          newErrors.metabolicGoal = "Metabolic health goal is required";
        if (!formData.supportType)
          newErrors.supportType = "Support type is required";
        if (!formData.timeCommitment)
          newErrors.timeCommitment = "Time commitment is required";
        if (!formData.budget) newErrors.budget = "Budget is required";
      } else if (currentStep === 6) {
        if (!formData.dailySchedule.trim())
          newErrors.dailySchedule = "Daily schedule is required";
        if (!formData.mealTiming.trim())
          newErrors.mealTiming = "Meal timing is required";
        if (!formData.workEnvironment)
          newErrors.workEnvironment = "Work environment is required";
        if (!formData.livingSituation)
          newErrors.livingSituation = "Living situation is required";
        if (!formData.foodAccess)
          newErrors.foodAccess = "Food access information is required";
        if (!formData.screenTime)
          newErrors.screenTime = "Screen time is required";
        else if (formData.screenTime < 0 || formData.screenTime > 24)
          newErrors.screenTime = "Screen time must be between 0 and 24 hours";
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
          const updatedConcerns = checked
            ? [...prev.primaryConcerns, value]
            : prev.primaryConcerns.filter((concern) => concern !== value);
          return { ...prev, primaryConcerns: updatedConcerns };
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
          "https://jogire-backend.onrender.com/api/v1/metabolic-health", // Placeholder API
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
                      <FaHeartbeat className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                    {s === 3 && <FaPills className="w-4 h-4 sm:w-5 sm:h-5" />}
                    {s === 4 && (
                      <FaUtensils className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                    {s === 5 && (
                      <FaBullseye className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                    {s === 6 && <FaClock className="w-4 h-4 sm:w-5 sm:h-5" />}
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
          Metabolic Health Program Sign-Up
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
                      placeholder="e.g., +91-9876543210"
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
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="height"
                    >
                      <FaRulerVertical className="mr-2 text-orange-800" />
                      Height
                    </motion.label>
                    <input
                      id="height"
                      value={formData.height}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.height
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      placeholder="e.g., 170 cm"
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
                      Weight
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
                      placeholder="e.g., 70 kg or 154 lbs"
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
                {/* Step 2: Current Metabolic Health Status */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="primaryConcerns"
                    >
                      <FaHeartbeat className="mr-2 text-orange-800" />
                      Primary Metabolic Health Concerns
                    </motion.label>
                    <div className="space-y-2">
                      {[
                        "High Blood Sugar",
                        "High Cholesterol",
                        "High Blood Pressure",
                        "Obesity",
                        "Fatigue",
                        "Insulin Resistance",
                        "Thyroid Issues",
                        "PCOS",
                        "Other",
                        "None",
                      ].map((concern) => (
                        <label key={concern} className="flex items-center">
                          <input
                            type="checkbox"
                            value={concern}
                            checked={formData.primaryConcerns.includes(concern)}
                            onChange={handleChange}
                            className="mr-2"
                            disabled={isSubmitting}
                          />
                          {concern}
                        </label>
                      ))}
                    </div>
                    {errors.primaryConcerns && (
                      <p
                        id="primaryConcerns-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.primaryConcerns}
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
                      <FaClock className="mr-2 text-orange-800" />
                      Frequency of Symptoms (Optional)
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
                      htmlFor="symptomSeverity"
                    >
                      <FaHeartbeat className="mr-2 text-orange-800" />
                      Severity of Symptoms
                    </motion.label>
                    <select
                      id="symptomSeverity"
                      value={formData.symptomSeverity}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.symptomSeverity
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      aria-describedby={
                        errors.symptomSeverity
                          ? "symptomSeverity-error"
                          : undefined
                      }
                      disabled={isSubmitting}
                    >
                      <option value="">Select Severity</option>
                      <option value="mild">Mild (minimal impact)</option>
                      <option value="moderate">
                        Moderate (noticeable impact)
                      </option>
                      <option value="severe">
                        Severe (significant impact)
                      </option>
                      <option value="very severe">
                        Very Severe (disabling)
                      </option>
                    </select>
                    {errors.symptomSeverity && (
                      <p
                        id="symptomSeverity-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.symptomSeverity}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="bloodSugar"
                    >
                      <FaHeartbeat className="mr-2 text-orange-800" />
                      Recent Blood Sugar Levels (Optional)
                    </motion.label>
                    <input
                      id="bloodSugar"
                      value={formData.bloodSugar}
                      onChange={handleChange}
                      className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 focus:ring-orange-800"
                      placeholder="e.g., 110 mg/dL"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="cholesterol"
                    >
                      <FaHeartbeat className="mr-2 text-orange-800" />
                      Recent Cholesterol Levels (Optional)
                    </motion.label>
                    <textarea
                      id="cholesterol"
                      value={formData.cholesterol}
                      onChange={handleChange}
                      className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 focus:ring-orange-800"
                      placeholder="e.g., Total: 200 mg/dL, LDL: 130, HDL: 50, Triglycerides: 150"
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
                      htmlFor="bloodPressure"
                    >
                      <FaHeartbeat className="mr-2 text-orange-800" />
                      Recent Blood Pressure Readings (Optional)
                    </motion.label>
                    <input
                      id="bloodPressure"
                      value={formData.bloodPressure}
                      onChange={handleChange}
                      className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 focus:ring-orange-800"
                      placeholder="e.g., 120/80 mmHg"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="metabolicDiagnoses"
                    >
                      <FaNotesMedical className="mr-2 text-orange-800" />
                      History of Metabolic Diagnoses
                    </motion.label>
                    <textarea
                      id="metabolicDiagnoses"
                      value={formData.metabolicDiagnoses}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.metabolicDiagnoses
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      placeholder="e.g., Type 2 Diabetes since 2022, None"
                      rows="3"
                      aria-describedby={
                        errors.metabolicDiagnoses
                          ? "metabolicDiagnoses-error"
                          : undefined
                      }
                      disabled={isSubmitting}
                    />
                    {errors.metabolicDiagnoses && (
                      <p
                        id="metabolicDiagnoses-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.metabolicDiagnoses}
                      </p>
                    )}
                  </div>
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
                {/* Step 3: Medical and Family History */}
                <div className="grid grid-cols-1 gap-4">
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
                      placeholder="e.g., Metformin 500mg daily, None"
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
                      htmlFor="pastInterventions"
                    >
                      <FaNotesMedical className="mr-2 text-orange-800" />
                      Past Medical Interventions
                    </motion.label>
                    <select
                      id="pastInterventions"
                      value={formData.pastInterventions}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.pastInterventions
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      aria-describedby={
                        errors.pastInterventions
                          ? "pastInterventions-error"
                          : undefined
                      }
                      disabled={isSubmitting}
                    >
                      <option value="">Select Option</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                    {errors.pastInterventions && (
                      <p
                        id="pastInterventions-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.pastInterventions}
                      </p>
                    )}
                  </div>
                  {formData.pastInterventions === "yes" && (
                    <div className="mb-4">
                      <motion.label
                        variants={labelVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                        htmlFor="interventionDetails"
                      >
                        <FaNotesMedical className="mr-2 text-orange-800" />
                        Details of Interventions
                      </motion.label>
                      <textarea
                        id="interventionDetails"
                        value={formData.interventionDetails}
                        onChange={handleChange}
                        className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                          errors.interventionDetails
                            ? "border-red-500 focus:ring-red-500"
                            : "focus:ring-orange-800"
                        }`}
                        placeholder="e.g., Bariatric surgery in 2020"
                        rows="3"
                        aria-describedby={
                          errors.interventionDetails
                            ? "interventionDetails-error"
                            : undefined
                        }
                        disabled={isSubmitting}
                      />
                      {errors.interventionDetails && (
                        <p
                          id="interventionDetails-error"
                          className="text-red-500 text-xs mt-1"
                        >
                          {errors.interventionDetails}
                        </p>
                      )}
                    </div>
                  )}
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="otherConditions"
                    >
                      <FaNotesMedical className="mr-2 text-orange-800" />
                      Other Medical Conditions
                    </motion.label>
                    <textarea
                      id="otherConditions"
                      value={formData.otherConditions}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.otherConditions
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      placeholder="e.g., Hypertension since 2018, None"
                      rows="3"
                      aria-describedby={
                        errors.otherConditions
                          ? "otherConditions-error"
                          : undefined
                      }
                      disabled={isSubmitting}
                    />
                    {errors.otherConditions && (
                      <p
                        id="otherConditions-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.otherConditions}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="familyHistory"
                    >
                      <FaUsers className="mr-2 text-orange-800" />
                      Family History of Metabolic Conditions
                    </motion.label>
                    <textarea
                      id="familyHistory"
                      value={formData.familyHistory}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.familyHistory
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      placeholder="e.g., Mother has Type 2 Diabetes, None"
                      rows="3"
                      aria-describedby={
                        errors.familyHistory ? "familyHistory-error" : undefined
                      }
                      disabled={isSubmitting}
                    />
                    {errors.familyHistory && (
                      <p
                        id="familyHistory-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.familyHistory}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="substanceUse"
                    >
                      <FaPills className="mr-2 text-orange-800" />
                      Substance Use
                    </motion.label>
                    <select
                      id="substanceUse"
                      value={formData.substanceUse}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.substanceUse
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      aria-describedby={
                        errors.substanceUse ? "substanceUse-error" : undefined
                      }
                      disabled={isSubmitting}
                    >
                      <option value="">Select Option</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                    {errors.substanceUse && (
                      <p
                        id="substanceUse-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.substanceUse}
                      </p>
                    )}
                  </div>
                  {formData.substanceUse === "yes" && (
                    <div className="mb-4">
                      <motion.label
                        variants={labelVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                        htmlFor="substanceDetails"
                      >
                        <FaPills className="mr-2 text-orange-800" />
                        Substance Use Details
                      </motion.label>
                      <textarea
                        id="substanceDetails"
                        value={formData.substanceDetails}
                        onChange={handleChange}
                        className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                          errors.substanceDetails
                            ? "border-red-500 focus:ring-red-500"
                            : "focus:ring-orange-800"
                        }`}
                        placeholder="e.g., Alcohol twice a week"
                        rows="3"
                        aria-describedby={
                          errors.substanceDetails
                            ? "substanceDetails-error"
                            : undefined
                        }
                        disabled={isSubmitting}
                      />
                      {errors.substanceDetails && (
                        <p
                          id="substanceDetails-error"
                          className="text-red-500 text-xs mt-1"
                        >
                          {errors.substanceDetails}
                        </p>
                      )}
                    </div>
                  )}
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
                {/* Step 4: Lifestyle Factors */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="sleepQuality"
                    >
                      <FaBed className="mr-2 text-orange-800" />
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
                      htmlFor="sleepDuration"
                    >
                      <FaClock className="mr-2 text-orange-800" />
                      Sleep Duration (hours)
                    </motion.label>
                    <input
                      id="sleepDuration"
                      type="number"
                      value={formData.sleepDuration}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.sleepDuration
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      placeholder="e.g., 7"
                      aria-describedby={
                        errors.sleepDuration ? "sleepDuration-error" : undefined
                      }
                      disabled={isSubmitting}
                    />
                    {errors.sleepDuration && (
                      <p
                        id="sleepDuration-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.sleepDuration}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="activityLevel"
                    >
                      <FaRunning className="mr-2 text-orange-800" />
                      Daily Activity Level
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
                      <option value="light">Light (occasional activity)</option>
                      <option value="moderate">
                        Moderate (regular exercise 3-5 times/week)
                      </option>
                      <option value="active">Active (daily exercise)</option>
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
                      htmlFor="exerciseDetails"
                    >
                      <FaRunning className="mr-2 text-orange-800" />
                      Exercise Type and Frequency (Optional)
                    </motion.label>
                    <textarea
                      id="exerciseDetails"
                      value={formData.exerciseDetails}
                      onChange={handleChange}
                      className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 focus:ring-orange-800"
                      placeholder="e.g., Walking 30 mins 3 times/week, None"
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
                      htmlFor="dietaryHabits"
                    >
                      <FaUtensils className="mr-2 text-orange-800" />
                      Dietary Habits
                    </motion.label>
                    <select
                      id="dietaryHabits"
                      value={formData.dietaryHabits}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.dietaryHabits
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      aria-describedby={
                        errors.dietaryHabits ? "dietaryHabits-error" : undefined
                      }
                      disabled={isSubmitting}
                    >
                      <option value="">Select Dietary Habits</option>
                      <option value="balanced">
                        Balanced (includes fruits, veggies, whole grains)
                      </option>
                      <option value="moderate">
                        Moderate (some healthy foods)
                      </option>
                      <option value="unhealthy">
                        Unhealthy (mostly processed foods)
                      </option>
                      <option value="unsure">Unsure</option>
                    </select>
                    {errors.dietaryHabits && (
                      <p
                        id="dietaryHabits-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.dietaryHabits}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="carbIntake"
                    >
                      <FaUtensils className="mr-2 text-orange-800" />
                      Carbohydrate Intake
                    </motion.label>
                    <select
                      id="carbIntake"
                      value={formData.carbIntake}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.carbIntake
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      aria-describedby={
                        errors.carbIntake ? "carbIntake-error" : undefined
                      }
                      disabled={isSubmitting}
                    >
                      <option value="">Select Carbohydrate Intake</option>
                      <option value="high">High (mostly refined carbs)</option>
                      <option value="moderate">
                        Moderate (balanced carbs)
                      </option>
                      <option value="low">Low (low-carb or ketogenic)</option>
                      <option value="unsure">Unsure</option>
                    </select>
                    {errors.carbIntake && (
                      <p
                        id="carbIntake-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.carbIntake}
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
                      <FaWater className="mr-2 text-orange-800" />
                      Daily Hydration (liters or glasses)
                    </motion.label>
                    <input
                      id="hydration"
                      value={formData.hydration}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.hydration
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      placeholder="e.g., 2 liters or 8 glasses"
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
                      htmlFor="stressLevel"
                    >
                      <FaHeartbeat className="mr-2 text-orange-800" />
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
                {/* Step 5: Metabolic Health Goals and Preferences */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="metabolicGoal"
                    >
                      <FaBullseye className="mr-2 text-orange-800" />
                      Primary Metabolic Health Goal
                    </motion.label>
                    <select
                      id="metabolicGoal"
                      value={formData.metabolicGoal}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.metabolicGoal
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      aria-describedby={
                        errors.metabolicGoal ? "metabolicGoal-error" : undefined
                      }
                      disabled={isSubmitting}
                    >
                      <option value="">Select Goal</option>
                      <option value="Improve Blood Sugar Control">
                        Improve Blood Sugar Control
                      </option>
                      <option value="Lower Cholesterol">
                        Lower Cholesterol
                      </option>
                      <option value="Reduce Blood Pressure">
                        Reduce Blood Pressure
                      </option>
                      <option value="Lose Weight">Lose Weight</option>
                      <option value="Increase Energy">Increase Energy</option>
                      <option value="Manage Thyroid Function">
                        Manage Thyroid Function
                      </option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.metabolicGoal && (
                      <p
                        id="metabolicGoal-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.metabolicGoal}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="supportType"
                    >
                      <FaHeartbeat className="mr-2 text-orange-800" />
                      Preferred Support Type
                    </motion.label>
                    <select
                      id="supportType"
                      value={formData.supportType}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.supportType
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      aria-describedby={
                        errors.supportType ? "supportType-error" : undefined
                      }
                      disabled={isSubmitting}
                    >
                      <option value="">Select Support Type</option>
                      <option value="yoga">Yoga (e.g., yoga trainer)</option>
                      <option value="nutritional">
                        Nutritional (e.g., dietitian)
                      </option>
                      <option value="fitness">Fitness (e.g., trainer)</option>
                      <option value="self-help strategies">
                        Self-Help Strategies
                      </option>
                      <option value="combination">Combination</option>
                      <option value="unsure">Unsure</option>
                    </select>
                    {errors.supportType && (
                      <p
                        id="supportType-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.supportType}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="timeCommitment"
                    >
                      <FaClock className="mr-2 text-orange-800" />
                      Time Commitment
                    </motion.label>
                    <select
                      id="timeCommitment"
                      value={formData.timeCommitment}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.timeCommitment
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      aria-describedby={
                        errors.timeCommitment
                          ? "timeCommitment-error"
                          : undefined
                      }
                      disabled={isSubmitting}
                    >
                      <option value="">Select Time Commitment</option>
                      <option value="Less than 1 hour">Less than 1 hour</option>
                      <option value="1-3 hours">1-3 hours</option>
                      <option value="3-5 hours">3-5 hours</option>
                      <option value="More than 5 hours">
                        More than 5 hours
                      </option>
                    </select>
                    {errors.timeCommitment && (
                      <p
                        id="timeCommitment-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.timeCommitment}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="dietaryPreferences"
                    >
                      <FaUtensils className="mr-2 text-orange-800" />
                      Dietary Preferences (Optional)
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
                      <option value="omnivore">Omnivore</option>
                      <option value="vegetarian">Vegetarian</option>
                      <option value="vegan">Vegan</option>
                      <option value="pescatarian">Pescatarian</option>
                      <option value="keto">Keto</option>
                      <option value="paleo">Paleo</option>
                      <option value="low fodmap">Low FODMAP</option>
                      <option value="other">Other</option>
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
                      htmlFor="budget"
                    >
                      <FaDollarSign className="mr-2 text-orange-800" />
                      Budget for Metabolic Health Support
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
                        Low (prefer free/affordable options)
                      </option>
                      <option value="moderate">
                        Moderate (willing to spend on quality)
                      </option>
                      <option value="no constraint">
                        No Constraint (open to premium options)
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
                {/* Step 6: Daily Routine and Environment */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="dailySchedule"
                    >
                      <FaCalendarDay className="mr-2 text-orange-800" />
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
                      placeholder="e.g., Wake up at 6 AM, breakfast at 7 AM..."
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
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="mealTiming"
                    >
                      <FaUtensils className="mr-2 text-orange-800" />
                      Meal Frequency and Timing
                    </motion.label>
                    <textarea
                      id="mealTiming"
                      value={formData.mealTiming}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.mealTiming
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      placeholder="e.g., 3 meals: 7 AM, 1 PM, 7 PM"
                      rows="3"
                      aria-describedby={
                        errors.mealTiming ? "mealTiming-error" : undefined
                      }
                      disabled={isSubmitting}
                    />
                    {errors.mealTiming && (
                      <p
                        id="mealTiming-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.mealTiming}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="workEnvironment"
                    >
                      <FaBuilding className="mr-2 text-orange-800" />
                      Work Environment
                    </motion.label>
                    <select
                      id="workEnvironment"
                      value={formData.workEnvironment}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.workEnvironment
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      aria-describedby={
                        errors.workEnvironment
                          ? "workEnvironment-error"
                          : undefined
                      }
                      disabled={isSubmitting}
                    >
                      <option value="">Select Work Environment</option>
                      <option value="supportive">Supportive</option>
                      <option value="neutral">Neutral</option>
                      <option value="stressful">Stressful</option>
                      <option value="toxic">Toxic</option>
                    </select>
                    {errors.workEnvironment && (
                      <p
                        id="workEnvironment-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.workEnvironment}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="livingSituation"
                    >
                      <FaHome className="mr-2 text-orange-800" />
                      Living Situation
                    </motion.label>
                    <select
                      id="livingSituation"
                      value={formData.livingSituation}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.livingSituation
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      aria-describedby={
                        errors.livingSituation
                          ? "livingSituation-error"
                          : undefined
                      }
                      disabled={isSubmitting}
                    >
                      <option value="">Select Living Situation</option>
                      <option value="live alone">Live Alone</option>
                      <option value="live with family">Live with Family</option>
                      <option value="live with roommates">
                        Live with Roommates
                      </option>
                      <option value="other">Other</option>
                    </select>
                    {errors.livingSituation && (
                      <p
                        id="livingSituation-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.livingSituation}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="foodAccess"
                    >
                      <FaUtensils className="mr-2 text-orange-800" />
                      Access to Healthy Food Options
                    </motion.label>
                    <select
                      id="foodAccess"
                      value={formData.foodAccess}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.foodAccess
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-teal-orange-800"
                      }`}
                      aria-describedby={
                        errors.foodAccess ? "foodAccess-error" : undefined
                      }
                      disabled={isSubmitting}
                    >
                      <option value="">Select Food Access</option>
                      <option value="always">Always</option>
                      <option value="often">Often</option>
                      <option value="sometimes">Sometimes</option>
                      <option value="rarely">Rarely</option>
                      <option value="never">Never</option>
                    </select>
                    {errors.foodAccess && (
                      <p
                        id="foodAccess-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.foodAccess}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="screenTime"
                    >
                      <FaDesktop className="mr-2 text-orange-800" />
                      Daily Screen Time (hours)
                    </motion.label>
                    <input
                      id="screenTime"
                      type="number"
                      value={formData.screenTime}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.screenTime
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      placeholder="e.g., 5"
                      aria-describedby={
                        errors.screenTime ? "screenTime-error" : undefined
                      }
                      disabled={isSubmitting}
                    />
                    {errors.screenTime && (
                      <p
                        id="screenTime-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.screenTime}
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
                      <FaCommentDots className="mr-2 text-orange-800" />
                      Additional Notes (Optional)
                    </motion.label>
                    <textarea
                      id="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 focus:ring-orange-800"
                      placeholder="e.g., I feel tired after meals, None"
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
                {/* Step 7: Review */}
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
                      <p>Height: {formData.height}</p>
                      <p>Weight: {formData.weight}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        Current Metabolic Health Status
                      </h3>
                      <p>
                        Primary Concerns:{" "}
                        {formData.primaryConcerns.join(", ") || "None"}
                      </p>
                      <p>Symptom Frequency: {formData.symptomFrequency}</p>
                      <p>Symptom Severity: {formData.symptomSeverity}</p>
                      <p>
                        Blood Sugar Levels:{" "}
                        {formData.bloodSugar || "Not specified"}
                      </p>
                      <p>
                        Cholesterol Levels:{" "}
                        {formData.cholesterol || "Not specified"}
                      </p>
                      <p>
                        Blood Pressure:{" "}
                        {formData.bloodPressure || "Not specified"}
                      </p>
                      <p>Metabolic Diagnoses: {formData.metabolicDiagnoses}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        Medical and Family History
                      </h3>
                      <p>
                        Medications: {formData.medications || "Not specified"}
                      </p>
                      <p>Past Interventions: {formData.pastInterventions}</p>
                      <p>
                        Intervention Details:{" "}
                        {formData.interventionDetails || "Not specified"}
                      </p>
                      <p>Other Conditions: {formData.otherConditions}</p>
                      <p>Family History: {formData.familyHistory}</p>
                      <p>Substance Use: {formData.substanceUse}</p>
                      <p>
                        Substance Details:{" "}
                        {formData.substanceDetails || "Not specified"}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        Lifestyle Factors
                      </h3>
                      <p>Sleep Quality: {formData.sleepQuality}</p>
                      <p>Sleep Duration: {formData.sleepDuration} hours</p>
                      <p>Activity Level: {formData.activityLevel}</p>
                      <p>
                        Exercise Details:{" "}
                        {formData.exerciseDetails || "Not specified"}
                      </p>
                      <p>Dietary Habits: {formData.dietaryHabits}</p>
                      <p>Carbohydrate Intake: {formData.carbIntake}</p>
                      <p>Hydration: {formData.hydration}</p>
                      <p>Stress Level: {formData.stressLevel}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        Metabolic Health Goals and Preferences
                      </h3>
                      <p>Metabolic Health Goal: {formData.metabolicGoal}</p>
                      <p>Preferred Support Type: {formData.supportType}</p>
                      <p>Time Commitment: {formData.timeCommitment}</p>
                      <p>
                        Dietary Preferences:{" "}
                        {formData.dietaryPreferences || "Not specified"}
                      </p>
                      <p>Budget: {formData.budget}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        Daily Routine and Environment
                      </h3>
                      <p>Daily Schedule: {formData.dailySchedule}</p>
                      <p>Meal Timing: {formData.mealTiming}</p>
                      <p>Work Environment: {formData.workEnvironment}</p>
                      <p>Living Situation: {formData.livingSituation}</p>
                      <p>Access to Healthy Food: {formData.foodAccess}</p>
                      <p>Screen Time: {formData.screenTime} hours</p>
                      <p>
                        Additional Notes: {formData.notes || "Not specified"}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

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
                  - May all beings everywhere be happy and free.
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

export default MetabolicHealthForm;
