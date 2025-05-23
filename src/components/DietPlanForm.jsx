// import React, { useState } from "react";
// import { motion } from "framer-motion"; // For animations
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // For navigation icons

// const DietPlanForm = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     age: "",
//     gender: "",
//     height: "",
//     weight: "",
//     goalWeight: "",
//     dietaryGoal: "",
//     activityLevel: "",
//     waterIntake: "",
//     schedule: "",
//     foodPrefs: "",
//     dietaryRestrictions: "",
//     cookingAbility: "",
//     budget: "",
//     medicalConditions: "",
//     medications: "",
//     supplements: "",
//     mealFrequency: "",
//     notes: "",
//   });
//   const [errors, setErrors] = useState({});

//   // Validation function
//   const validateStep = () => {
//     const newErrors = {};
//     if (step === 1) {
//       if (!formData.name.trim()) newErrors.name = "Full name is required";
//       if (!formData.email.trim()) newErrors.email = "Email is required";
//       else if (!/\S+@\S+\.\S+/.test(formData.email))
//         newErrors.email = "Invalid email";
//       if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
//       else if (!/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(formData.phone))
//         newErrors.phone = "Invalid phone number (e.g., (555) 123-4567)";
//       if (!formData.age) newErrors.age = "Age is required";
//       else if (formData.age < 1 || formData.age > 120)
//         newErrors.age = "Age must be between 1 and 120";
//       if (!formData.gender) newErrors.gender = "Gender is required";
//     } else if (step === 2) {
//       if (!formData.height) newErrors.height = "Height is required";
//       if (!formData.weight) newErrors.weight = "Current weight is required";
//     } else if (step === 3) {
//       if (!formData.dietaryGoal)
//         newErrors.dietaryGoal = "Dietary goal is required";
//       if (!formData.activityLevel)
//         newErrors.activityLevel = "Activity level is required";
//       if (!formData.waterIntake)
//         newErrors.waterIntake = "Water intake is required";
//       if (!formData.schedule.trim())
//         newErrors.schedule = "Schedule is required";
//     } else if (step === 4) {
//       if (!formData.foodPrefs.trim())
//         newErrors.foodPrefs = "Food preferences are required";
//       if (!formData.dietaryRestrictions.trim())
//         newErrors.dietaryRestrictions =
//           "Dietary restrictions are required (enter 'None' if none)";
//       if (!formData.cookingAbility)
//         newErrors.cookingAbility = "Cooking ability is required";
//     } else if (step === 5) {
//       if (!formData.medicalConditions.trim())
//         newErrors.medicalConditions =
//           "Medical conditions are required (enter 'None' if none)";
//     } else if (step === 6) {
//       if (!formData.mealFrequency)
//         newErrors.mealFrequency = "Meal frequency is required";
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle input change
//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({ ...prev, [id]: value }));
//     if (errors[id]) setErrors((prev) => ({ ...prev, [id]: "" }));
//   };

//   // Navigation
//   const nextStep = () => {
//     if (validateStep()) setStep((prev) => prev + 1);
//   };
//   const prevStep = () => setStep((prev) => prev - 1);

//   // Handle form submission
//   const handleSubmit = () => {
//     console.log("Diet Plan Submitted:", formData);
//     // Add API call or further processing here
//   };

//   // Progress bar calculation
//   const progress = ((step - 1) / 6) * 100;

//   // Animation variants
//   const pageVariants = {
//     initial: { opacity: 0, x: 100 },
//     in: { opacity: 1, x: 0 },
//     out: { opacity: 0, x: -100 },
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
//       <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
//         {/* Progress Bar */}
//         <div className="mb-6">
//           <div className="w-full bg-gray-200 rounded-full h-2.5">
//             <div
//               className="bg-orange-800 h-2.5 rounded-full transition-all duration-500"
//               style={{ width: `${progress}%` }}
//             ></div>
//           </div>
//           <p className="text-sm text-gray-600 mt-2 text-center">
//             Step {step} of 7 ({Math.round(progress)}% Complete)
//           </p>
//         </div>

//         {/* Form Content */}
//         <motion.div
//           key={step}
//           variants={pageVariants}
//           initial="initial"
//           animate="in"
//           exit="out"
//           transition={{ duration: 0.3 }}
//           className="space-y-6"
//         >
//           {step === 1 && (
//             <>
//               <h2 className="text-2xl font-bold text-gray-800 text-center">
//                 Personal Information
//               </h2>
//               <div>
//                 <label
//                   className="block text-gray-700 font-semibold mb-1"
//                   htmlFor="name"
//                 >
//                   Full Name
//                 </label>
//                 <input
//                   id="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
//                     errors.name
//                       ? "border-red-500 focus:ring-red-500"
//                       : "focus:ring-orange-800"
//                   }`}
//                   placeholder="e.g., John Doe"
//                 />
//                 {errors.name && (
//                   <p className="text-red-500 text-xs mt-1">{errors.name}</p>
//                 )}
//               </div>
//               <div>
//                 <label
//                   className="block text-gray-700 font-semibold mb-1"
//                   htmlFor="email"
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
//                     errors.email
//                       ? "border-red-500 focus:ring-red-500"
//                       : "focus:ring-orange-800"
//                   }`}
//                   placeholder="e.g., john.doe@example.com"
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-xs mt-1">{errors.email}</p>
//                 )}
//               </div>
//               <div>
//                 <label
//                   className="block text-gray-700 font-semibold mb-1"
//                   htmlFor="phone"
//                 >
//                   Phone Number
//                 </label>
//                 <input
//                   id="phone"
//                   type="tel"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
//                     errors.phone
//                       ? "border-red-500 focus:ring-red-500"
//                       : "focus:ring-orange-800"
//                   }`}
//                   placeholder="e.g., (555) 123-4567"
//                 />
//                 {errors.phone && (
//                   <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
//                 )}
//               </div>
//               <div>
//                 <label
//                   className="block text-gray-700 font-semibold mb-1"
//                   htmlFor="age"
//                 >
//                   Age
//                 </label>
//                 <input
//                   id="age"
//                   type="number"
//                   value={formData.age}
//                   onChange={handleChange}
//                   className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
//                     errors.age
//                       ? "border-red-500 focus:ring-red-500"
//                       : "focus:ring-orange-800"
//                   }`}
//                   placeholder="e.g., 30"
//                 />
//                 {errors.age && (
//                   <p className="text-red-500 text-xs mt-1">{errors.age}</p>
//                 )}
//               </div>
//               <div>
//                 <label
//                   className="block text-gray-700 font-semibold mb-1"
//                   htmlFor="gender"
//                 >
//                   Gender
//                 </label>
//                 <select
//                   id="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                   className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
//                     errors.gender
//                       ? "border-red-500 focus:ring-red-500"
//                       : "focus:ring-orange-800"
//                   }`}
//                 >
//                   <option value="">Select Gender</option>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="other">Other</option>
//                 </select>
//                 {errors.gender && (
//                   <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
//                 )}
//               </div>
//             </>
//           )}

//           {step === 2 && (
//             <>
//               <h2 className="text-2xl font-bold text-gray-800 text-center">
//                 Physical Metrics
//               </h2>
//               <div>
//                 <label
//                   className="block text-gray-700 font-semibold mb-1"
//                   htmlFor="height"
//                 >
//                   Height (cm)
//                 </label>
//                 <input
//                   id="height"
//                   type="number"
//                   value={formData.height}
//                   onChange={handleChange}
//                   className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
//                     errors.height
//                       ? "border-red-500 focus:ring-red-500"
//                       : "focus:ring-orange-800"
//                   }`}
//                   placeholder="e.g., 167"
//                 />
//                 {errors.height && (
//                   <p className="text-red-500 text-xs mt-1">{errors.height}</p>
//                 )}
//               </div>
//               <div>
//                 <label
//                   className="block text-gray-700 font-semibold mb-1"
//                   htmlFor="weight"
//                 >
//                   Current Weight (kg)
//                 </label>
//                 <input
//                   id="weight"
//                   type="number"
//                   value={formData.weight}
//                   onChange={handleChange}
//                   className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
//                     errors.weight
//                       ? "border-red-500 focus:ring-red-500"
//                       : "focus:ring-orange-800"
//                   }`}
//                   placeholder="e.g., 68"
//                 />
//                 {errors.weight && (
//                   <p className="text-red-500 text-xs mt-1">{errors.weight}</p>
//                 )}
//               </div>
//               <div>
//                 <label
//                   className="block text-gray-700 font-semibold mb-1"
//                   htmlFor="goalWeight"
//                 >
//                   Goal Weight (kg, Optional)
//                 </label>
//                 <input
//                   id="goalWeight"
//                   type="number"
//                   value={formData.goalWeight}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-800"
//                   placeholder="e.g., 65"
//                 />
//               </div>
//             </>
//           )}

//           {step === 3 && (
//             <>
//               <h2 className="text-2xl font-bold text-gray-800 text-center">
//                 Goals and Lifestyle
//               </h2>
//               <div>
//                 <label
//                   className="block text-gray-700 font-semibold mb-1"
//                   htmlFor="dietaryGoal"
//                 >
//                   Dietary Goal
//                 </label>
//                 <select
//                   id="dietaryGoal"
//                   value={formData.dietaryGoal}
//                   onChange={handleChange}
//                   className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
//                     errors.dietaryGoal
//                       ? "border-red-500 focus:ring-red-500"
//                       : "focus:ring-orange-800"
//                   }`}
//                 >
//                   <option value="">Select Goal</option>
//                   <option value="weight-loss">Weight Loss</option>
//                   <option value="muscle-gain">Muscle Gain</option>
//                   <option value="general-health">General Health</option>
//                   <option value="medical">Medical Condition Management</option>
//                 </select>
//                 {errors.dietaryGoal && (
//                   <p className="text-red-500 text-xs mt-1">
//                     {errors.dietaryGoal}
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <label
//                   className="block text-gray-700 font-semibold mb-1"
//                   htmlFor="activityLevel"
//                 >
//                   Activity Level
//                 </label>
//                 <select
//                   id="activityLevel"
//                   value={formData.activityLevel}
//                   onChange={handleChange}
//                   className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
//                     errors.activityLevel
//                       ? "border-red-500 focus:ring-red-500"
//                       : "focus:ring-orange-800"
//                   }`}
//                 >
//                   <option value="">Select Activity Level</option>
//                   <option value="sedentary">Sedentary</option>
//                   <option value="light">Lightly Active</option>
//                   <option value="moderate">Moderately Active</option>
//                   <option value="very">Very Active</option>
//                 </select>
//                 {errors.activityLevel && (
//                   <p className="text-red-500 text-xs mt-1">
//                     {errors.activityLevel}
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <label
//                   className="block text-gray-700 font-semibold mb-1"
//                   htmlFor="waterIntake"
//                 >
//                   Daily Water Intake (liters)
//                 </label>
//                 <input
//                   id="waterIntake"
//                   type="number"
//                   step="0.1"
//                   value={formData.waterIntake}
//                   onChange={handleChange}
//                   className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
//                     errors.waterIntake
//                       ? "border-red-500 focus:ring-red-500"
//                       : "focus:ring-orange-800"
//                   }`}
//                   placeholder="e.g., 2.5"
//                 />
//                 {errors.waterIntake && (
//                   <p className="text-red-500 text-xs mt-1">
//                     {errors.waterIntake}
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <label
//                   className="block text-gray-700 font-semibold mb-1"
//                   htmlFor="schedule"
//                 >
//                   Typical Daily Schedule
//                 </label>
//                 <textarea
//                   id="schedule"
//                   value={formData.schedule}
//                   onChange={handleChange}
//                   className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
//                     errors.schedule
//                       ? "border-red-500 focus:ring-red-500"
//                       : "focus:ring-orange-800"
//                   }`}
//                   placeholder="e.g., Breakfast at 7 AM, Lunch at 1 PM..."
//                   rows="3"
//                 />
//                 {errors.schedule && (
//                   <p className="text-red-500 text-xs mt-1">{errors.schedule}</p>
//                 )}
//               </div>
//             </>
//           )}

//           {step === 4 && (
//             <>
//               <h2 className="text-2xl font-bold text-gray-800 text-center">
//                 Food Preferences and Restrictions
//               </h2>
//               <div>
//                 <label
//                   className="block text-gray-700 font-semibold mb-1"
//                   htmlFor="foodPrefs"
//                 >
//                   Food Preferences
//                 </label>
//                 <textarea
//                   id="foodPrefs"
//                   value={formData.foodPrefs}
//                   onChange={handleChange}
//                   className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
//                     errors.foodPrefs
//                       ? "border-red-500 focus:ring-red-500"
//                       : "focus:ring-orange-800"
//                   }`}
//                   placeholder="e.g., Love chicken, dislike fish"
//                   rows="3"
//                 />
//                 {errors.foodPrefs && (
//                   <p className="text-red-500 text-xs mt-1">
//                     {errors.foodPrefs}
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <label
//                   className="block text-gray-700 font-semibold mb-1"
//                   htmlFor="dietaryRestrictions"
//                 >
//                   Dietary Restrictions
//                 </label>
//                 <textarea
//                   id="dietaryRestrictions"
//                   value={formData.dietaryRestrictions}
//                   onChange={handleChange}
//                   className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
//                     errors.dietaryRestrictions
//                       ? "border-red-500 focus:ring-red-500"
//                       : "focus:ring-orange-800"
//                   }`}
//                   placeholder="e.g., Vegetarian, No Dairy, None"
//                   rows="3"
//                 />
//                 {errors.dietaryRestrictions && (
//                   <p className="text-red-500 text-xs mt-1">
//                     {errors.dietaryRestrictions}
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <label
//                   className="block text-gray-700 font-semibold mb-1"
//                   htmlFor="cookingAbility"
//                 >
//                   Cooking Ability
//                 </label>
//                 <select
//                   id="cookingAbility"
//                   value={formData.cookingAbility}
//                   onChange={handleChange}
//                   className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
//                     errors.cookingAbility
//                       ? "border-red-500 focus:ring-red-500"
//                       : "focus:ring-orange-800"
//                   }`}
//                 >
//                   <option value="">Select Cooking Ability</option>
//                   <option value="beginner">Beginner</option>
//                   <option value="intermediate">Intermediate</option>
//                   <option value="advanced">Advanced</option>
//                   <option value="quick">Prefer Quick Meals</option>
//                 </select>
//                 {errors.cookingAbility && (
//                   <p className="text-red-500 text-xs mt-1">
//                     {errors.cookingAbility}
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <label
//                   className="block text-gray-700 font-semibold mb-1"
//                   htmlFor="budget"
//                 >
//                   Budget Constraints (Optional)
//                 </label>
//                 <select
//                   id="budget"
//                   value={formData.budget}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-800"
//                 >
//                   <option value="">Select Budget</option>
//                   <option value="low">Low Budget</option>
//                   <option value="moderate">Moderate</option>
//                   <option value="none">No Restrictions</option>
//                 </select>
//               </div>
//             </>
//           )}

//           {step === 5 && (
//             <>
//               <h2 className="text-2xl font-bold text-gray-800 text-center">
//                 Health and Supplements
//               </h2>
//               <div>
//                 <label
//                   className="block text-gray-700 font-semibold mb-1"
//                   htmlFor="medicalConditions"
//                 >
//                   Medical Conditions
//                 </label>
//                 <textarea
//                   id="medicalConditions"
//                   value={formData.medicalConditions}
//                   onChange={handleChange}
//                   className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
//                     errors.medicalConditions
//                       ? "border-red-500 focus:ring-red-500"
//                       : "focus:ring-orange-800"
//                   }`}
//                   placeholder="e.g., Type 2 Diabetes, None"
//                   rows="3"
//                 />
//                 {errors.medicalConditions && (
//                   <p className="text-red-500 text-xs mt-1">
//                     {errors.medicalConditions}
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <label
//                   className="block text-gray-700 font-semibold mb-1"
//                   htmlFor="medications"
//                 >
//                   Current Medications (Optional)
//                 </label>
//                 <textarea
//                   id="medications"
//                   value={formData.medications}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-800"
//                   placeholder="e.g., Metformin, None"
//                   rows="3"
//                 />
//               </div>
//               <div>
//                 <label
//                   className="block text-gray-700 font-semibold mb-1"
//                   htmlFor="supplements"
//                 >
//                   Supplements Used (Optional)
//                 </label>
//                 <textarea
//                   id="supplements"
//                   value={formData.supplements}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-800"
//                   placeholder="e.g., Multivitamin, None"
//                   rows="3"
//                 />
//               </div>
//             </>
//           )}

//           {step === 6 && (
//             <>
//               <h2 className="text-2xl font-bold text-gray-800 text-center">
//                 Meal Preferences and Notes
//               </h2>
//               <div>
//                 <label
//                   className="block text-gray-700 font-semibold mb-1"
//                   htmlFor="mealFrequency"
//                 >
//                   Meal Frequency Preference
//                 </label>
//                 <select
//                   id="mealFrequency"
//                   value={formData.mealFrequency}
//                   onChange={handleChange}
//                   className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
//                     errors.mealFrequency
//                       ? "border-red-500 focus:ring-red-500"
//                       : "focus:ring-orange-800"
//                   }`}
//                 >
//                   <option value="">Select Meal Frequency</option>
//                   <option value="3-meals">3 Meals</option>
//                   <option value="5-meals">5 Small Meals</option>
//                   <option value="intermittent">Intermittent Fasting</option>
//                 </select>
//                 {errors.mealFrequency && (
//                   <p className="text-red-500 text-xs mt-1">
//                     {errors.mealFrequency}
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <label
//                   className="block text-gray-700 font-semibold mb-1"
//                   htmlFor="notes"
//                 >
//                   Goals or Additional Notes (Optional)
//                 </label>
//                 <textarea
//                   id="notes"
//                   value={formData.notes}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-800"
//                   placeholder="e.g., Improve energy levels"
//                   rows="3"
//                 />
//               </div>
//             </>
//           )}

//           {step === 7 && (
//             <>
//               <h2 className="text-2xl font-bold text-gray-800 text-center">
//                 Review and Submit
//               </h2>
//               <div className="space-y-4">
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-700">
//                     Personal Information
//                   </h3>
//                   <p>Name: {formData.name}</p>
//                   <p>Email: {formData.email}</p>
//                   <p>Phone: {formData.phone}</p>
//                   <p>Age: {formData.age}</p>
//                   <p>Gender: {formData.gender}</p>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-700">
//                     Physical Metrics
//                   </h3>
//                   <p>Height: {formData.height} cm</p>
//                   <p>Weight: {formData.weight} kg</p>
//                   <p>
//                     Goal Weight: {formData.goalWeight || "Not specified"} kg
//                   </p>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-700">
//                     Goals and Lifestyle
//                   </h3>
//                   <p>Dietary Goal: {formData.dietaryGoal}</p>
//                   <p>Activity Level: {formData.activityLevel}</p>
//                   <p>Water Intake: {formData.waterIntake} liters</p>
//                   <p>Schedule: {formData.schedule}</p>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-700">
//                     Food Preferences
//                   </h3>
//                   <p>Preferences: {formData.foodPrefs}</p>
//                   <p>Restrictions: {formData.dietaryRestrictions}</p>
//                   <p>Cooking Ability: {formData.cookingAbility}</p>
//                   <p>Budget: {formData.budget || "Not specified"}</p>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-700">
//                     Health
//                   </h3>
//                   <p>Medical Conditions: {formData.medicalConditions}</p>
//                   <p>Medications: {formData.medications || "Not specified"}</p>
//                   <p>Supplements: {formData.supplements || "Not specified"}</p>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-700">
//                     Meal Preferences
//                   </h3>
//                   <p>Meal Frequency: {formData.mealFrequency}</p>
//                   <p>Notes: {formData.notes || "Not specified"}</p>
//                 </div>
//               </div>
//             </>
//           )}
//         </motion.div>

//         {/* Navigation Buttons */}
//         <div className="flex justify-between mt-8">
//           {step > 1 && (
//             <button
//               onClick={prevStep}
//               className="flex items-center px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition duration-300"
//             >
//               <FaArrowLeft className="mr-2" /> Back
//             </button>
//           )}
//           {step < 7 ? (
//             <button
//               onClick={nextStep}
//               className="flex items-center px-4 py-2 bg-orange-800 text-white rounded hover:bg-orange-900 transition duration-300 ml-auto"
//             >
//               Next <FaArrowRight className="ml-2" />
//             </button>
//           ) : (
//             <button
//               onClick={handleSubmit}
//               className="w-full px-4 py-2 bg-orange-800 text-white rounded hover:bg-orange-900 transition duration-300"
//             >
//               Submit Diet Plan
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DietPlanForm;

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
import PropTypes from "prop-types";
import Modal from "react-modal";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

// Bind modal to app element for accessibility
Modal.setAppElement("#root");

const DietPlanForm = ({ formType }) => {
  const FORM_CONFIG = {
    "diet-plan": {
      title: "Diet Counselling (Aahar) Sign-Up",
      courseType: "diet-plan",
      courseLabel: "Diet Counselling (Aahar)",
    },
    "gut-health": {
      title: "Gut Health Program Sign-Up",
      courseType: "gut-health",
      courseLabel: "Gut Health Program",
    },
    "mental-health": {
      title: "Mental Health Program Sign-Up",
      courseType: "mental-health",
      courseLabel: "Mental Health Program",
    },
    "metabolic-health": {
      title: "Metabolic Health Program Sign-Up",
      courseType: "metabolic-health",
      courseLabel: "Metabolic Health Program",
    },
  };

  const config = FORM_CONFIG[formType] || FORM_CONFIG["diet-plan"];

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
    dietaryGoal: "",
    activityLevel: "",
    waterIntake: "",
    schedule: "",
    foodPrefs: "",
    dietaryRestrictions: "",
    cookingAbility: "",
    budget: "",
    medicalConditions: "",
    medications: "",
    supplements: "",
    mealFrequency: "",
    notes: "",
    courseType: config.courseType,
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
      dietaryGoal: "",
      activityLevel: "",
      waterIntake: "",
      schedule: "",
      foodPrefs: "",
      dietaryRestrictions: "",
      cookingAbility: "",
      budget: "",
      medicalConditions: "",
      medications: "",
      supplements: "",
      mealFrequency: "",
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
          newErrors.height = "Height must be between 50 and 300";
        if (!formData.weight) newErrors.weight = "Current weight is required";
        else if (formData.weight < 10 || formData.weight > 300)
          newErrors.weight = "Weight must be between 10 and 300 kg";
        if (formData.goalWeight) {
          const goalWeight = Number(formData.goalWeight);
          if (goalWeight < 10 || goalWeight > 300) {
            newErrors.goalWeight = "Goal weight must be between 10 and 300 kg";
          }
        }
      } else if (currentStep === 3) {
        if (!formData.dietaryGoal)
          newErrors.dietaryGoal = "Dietary goal is required";
        if (!formData.activityLevel)
          newErrors.activityLevel = "Activity level is required";
        if (!formData.waterIntake)
          newErrors.waterIntake = "Water intake is required";
        else if (formData.waterIntake < 0 || formData.waterIntake > 10)
          newErrors.waterIntake =
            "Water intake must be between 0 and 10 liters";
        if (!formData.schedule.trim())
          newErrors.schedule = "Schedule is required";
      } else if (currentStep === 4) {
        if (!formData.foodPrefs.trim())
          newErrors.foodPrefs = "Food preferences are required";
        if (!formData.dietaryRestrictions.trim())
          newErrors.dietaryRestrictions =
            "Dietary restrictions are required (enter 'None' if none)";
        if (!formData.cookingAbility)
          newErrors.cookingAbility = "Cooking ability is required";
      } else if (currentStep === 5) {
        if (!formData.medicalConditions.trim())
          newErrors.medicalConditions =
            "Medical conditions are required (enter 'None' if none)";
      } else if (currentStep === 6) {
        if (!formData.mealFrequency)
          newErrors.mealFrequency = "Meal frequency is required";
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    },
    [formData]
  );

  // Handle input change
  const handleChange = useCallback(
    (e) => {
      const { id, value } = e.target;
      setFormData((prev) => ({ ...prev, [id]: value }));
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
          "https://jogire-backend.onrender.com/api/v1/diet-plan",
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
                  {s === 2 && <FaRulerVertical className="w-5 h-5" />}
                  {s === 3 && <FaBullseye className="w-5 h-5" />}
                  {s === 4 && <FaUtensils className="w-5 h-5" />}
                  {s === 5 && <FaNotesMedical className="w-5 h-5" />}
                  {s === 6 && <FaUtensils className="w-5 h-5" />}
                  {s === 7 && <FaCheck className="w-5 h-5" />}
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
                        errors.weight
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      placeholder="e.g., 65"
                      aria-describedby={
                        errors.weight ? "goalWeight-error" : undefined
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
                {/* Step 3: Goals and Lifestyle */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="dietaryGoal"
                    >
                      <FaBullseye className="mr-2 text-orange-800" />
                      Dietary Goal
                    </motion.label>
                    <select
                      id="dietaryGoal"
                      value={formData.dietaryGoal}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.dietaryGoal
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      aria-describedby={
                        errors.dietaryGoal ? "dietaryGoal-error" : undefined
                      }
                      disabled={isSubmitting}
                    >
                      <option value="">Select Goal</option>
                      <option value="weight-loss">Weight Loss</option>
                      <option value="muscle-gain">Muscle Gain</option>
                      <option value="general-health">General Health</option>
                      <option value="medical">
                        Medical Condition Management
                      </option>
                    </select>
                    {errors.dietaryGoal && (
                      <p
                        id="dietaryGoal-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.dietaryGoal}
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
                      <option value="sedentary">Sedentary</option>
                      <option value="light">Lightly Active</option>
                      <option value="moderate">Moderately Active</option>
                      <option value="very">Very Active</option>
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
                      htmlFor="waterIntake"
                    >
                      <FaTint className="mr-2 text-orange-800" />
                      Daily Water Intake (liters)
                    </motion.label>
                    <input
                      id="waterIntake"
                      type="number"
                      step="0.1"
                      value={formData.waterIntake}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.waterIntake
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      placeholder="e.g., 2.5"
                      aria-describedby={
                        errors.waterIntake ? "waterIntake-error" : undefined
                      }
                      disabled={isSubmitting}
                    />
                    {errors.waterIntake && (
                      <p
                        id="waterIntake-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.waterIntake}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="schedule"
                    >
                      <FaClock className="mr-2 text-orange-800" />
                      Typical Daily Schedule
                    </motion.label>
                    <textarea
                      id="schedule"
                      value={formData.schedule}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.schedule
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      placeholder="e.g., Breakfast at 7 AM, Lunch at 1 PM..."
                      rows="3"
                      aria-describedby={
                        errors.schedule ? "schedule-error" : undefined
                      }
                      disabled={isSubmitting}
                    />
                    {errors.schedule && (
                      <p
                        id="schedule-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.schedule}
                      </p>
                    )}
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
                {/* Step 4: Food Preferences and Restrictions */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="foodPrefs"
                    >
                      <FaUtensils className="mr-2 text-orange-800" />
                      Food Preferences
                    </motion.label>
                    <textarea
                      id="foodPrefs"
                      value={formData.foodPrefs}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.foodPrefs
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      placeholder="e.g., Love chicken, dislike fish"
                      rows="3"
                      aria-describedby={
                        errors.foodPrefs ? "foodPrefs-error" : undefined
                      }
                      disabled={isSubmitting}
                    />
                    {errors.foodPrefs && (
                      <p
                        id="foodPrefs-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.foodPrefs}
                      </p>
                    )}
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
                      Dietary Restrictions
                    </motion.label>
                    <textarea
                      id="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.dietaryRestrictions
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-orange-800"
                      }`}
                      placeholder="e.g., Vegetarian, No Dairy, None"
                      rows="3"
                      aria-describedby={
                        errors.dietaryRestrictions
                          ? "dietaryRestrictions-error"
                          : undefined
                      }
                      disabled={isSubmitting}
                    />
                    {errors.dietaryRestrictions && (
                      <p
                        id="dietaryRestrictions-error"
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.dietaryRestrictions}
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
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                      <option value="quick">Prefer Quick Meals</option>
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
                      Budget Constraints (Optional)
                    </motion.label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 focus:ring-orange-800"
                      disabled={isSubmitting}
                    >
                      <option value="">Select Budget</option>
                      <option value="low">Low Budget</option>
                      <option value="moderate">Moderate</option>
                      <option value="none">No Restrictions</option>
                    </select>
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
                {/* Step 5: Health and Supplements */}
                <div className="grid grid-cols-1 gap-4">
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
                      placeholder="e.g., Type 2 Diabetes, None"
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
                      placeholder="e.g., Metformin, None"
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
                      placeholder="e.g., Multivitamin, None"
                      rows="3"
                      disabled={isSubmitting}
                    />
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
                {/* Step 6: Meal Preferences and Notes */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="mb-4">
                    <motion.label
                      variants={labelVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-700 font-bold mb-2 text-sm sm:text-base flex items-center"
                      htmlFor="mealFrequency"
                    >
                      <FaUtensils className="mr-2 text-orange-800" />
                      Meal Frequency Preference
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
                      <option value="3-meals">3 Meals</option>
                      <option value="5-meals">5 Small Meals</option>
                      <option value="intermittent">Intermittent Fasting</option>
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
                      htmlFor="notes"
                    >
                      <FaUtensils className="mr-2 text-orange-800" />
                      Goals or Additional Notes (Optional)
                    </motion.label>
                    <textarea
                      id="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 transition-all duration-300 focus:ring-orange-800"
                      placeholder="e.g., Improve energy levels"
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
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        Goals and Lifestyle
                      </h3>
                      <p>Dietary Goal: {formData.dietaryGoal}</p>
                      <p>Activity Level: {formData.activityLevel}</p>
                      <p>Water Intake: {formData.waterIntake} liters</p>
                      <p>Schedule: {formData.schedule}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        Food Preferences
                      </h3>
                      <p>Preferences: {formData.foodPrefs}</p>
                      <p>Restrictions: {formData.dietaryRestrictions}</p>
                      <p>Cooking Ability: {formData.cookingAbility}</p>
                      <p>Budget: {formData.budget || "Not specified"}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        Health
                      </h3>
                      <p>Medical Conditions: {formData.medicalConditions}</p>
                      <p>
                        Medications: {formData.medications || "Not specified"}
                      </p>
                      <p>
                        Supplements: {formData.supplements || "Not specified"}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        Meal Preferences
                      </h3>
                      <p>Meal Frequency: {formData.mealFrequency}</p>
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
                  Submit Diet Plan
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

DietPlanForm.propTypes = {
  formType: PropTypes.oneOf([
    "diet-plan",
    "gut-health",
    "mental-health",
    "metabolic-health",
  ]).isRequired,
};

export default DietPlanForm;
