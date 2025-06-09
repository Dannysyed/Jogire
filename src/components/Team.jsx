// import React, { useState } from "react";
// import ReactMarkdown from "react-markdown";
// import Modal from "react-modal";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaTimes } from "react-icons/fa";

// // Bind modal to app element for accessibility
// Modal.setAppElement("#root");

// const Team = () => {
//   const [selectedMember, setSelectedMember] = useState(null);

//   const teamMembers = [
//     {
//       name: "Koushal Puri",
//       role: "Yoga Expert",
//       description:
//         "Anshul, an established holistic yoga and meditation teacher. Anshul's teachings seamlessly integrate yoga philosophy from the physical to the profound.",
//       image:
//         "https://jogire.s3.ap-south-1.amazonaws.com/static/aboutus/team/koushal.webp",
//       detailedDescription: `
// # Koushal Puri - Yoga Expert

// Koushal Puri has over 15 years of experience in holistic yoga and meditation. Her journey began in the serene foothills of the Himalayas, where she trained under renowned yogis.

// ## Expertise
// - **Hatha Yoga**: Mastering traditional postures for strength and flexibility.
// - **Meditation**: Guiding mindfulness practices for mental clarity.
// - **Pranayama**: Teaching breathing techniques to enhance energy flow.

// ## Philosophy
// Koushal believes in integrating yoga into daily life, making it accessible for everyone. Her sessions are designed to bring balance to both body and mind, helping individuals find inner peace.

// ## Achievements
// - Certified by the International Yoga Alliance.
// - Conducted over 500 workshops globally.
// - Authored "The Path to Serenity," a best-selling book on yoga philosophy.
//       `,
//     },
//     {
//       name: "Dhaval Prajapati",
//       role: "Wellness Coach",
//       description:
//         "Dhaval is a certified wellness coach, helping people achieve a balanced lifestyle through mindful movement and meditation.",
//       image:
//         "https://jogire.s3.ap-south-1.amazonaws.com/static/aboutus/team/dhawal.webp",
//       detailedDescription: `
// # Dhaval Prajapati - Wellness Coach

// Dhaval Prajapati is a passionate wellness coach with a mission to empower individuals through mindful practices. He has worked with clients from diverse backgrounds, helping them achieve their wellness goals.

// ## Expertise
// - **Mindful Movement**: Incorporating gentle exercises for daily vitality.
// - **Nutrition Guidance**: Offering tips for balanced eating habits.
// - **Stress Management**: Providing techniques to reduce stress and improve focus.

// ## Philosophy
// Dhaval emphasizes a holistic approach to wellness, focusing on the mind-body connection. His coaching style is supportive and personalized, ensuring every client feels motivated.

// ## Achievements
// - Certified Wellness Coach with over 10 years of experience.
// - Featured in "Wellness Today" magazine for innovative coaching methods.
// - Hosted wellness retreats in Bali and Goa.
//       `,
//     },
//     {
//       name: "Rudradeep",
//       role: "Ayurveda Specialist",
//       description:
//         "Rudra specializes in Ayurveda and natural healing practices, offering personalized wellness solutions.",
//       image:
//         "https://jogire.s3.ap-south-1.amazonaws.com/static/aboutus/team/rudradeep.webp",
//       detailedDescription: `
// # Rudradeep - Ayurveda Specialist

// Rudradeep is an Ayurveda specialist dedicated to natural healing. With a deep understanding of ancient practices, he offers solutions tailored to individual needs.

// ## Expertise
// - **Ayurvedic Diagnosis**: Assessing doshas for personalized treatments.
// - **Herbal Remedies**: Using natural herbs for healing and balance.
// - **Detox Programs**: Designing cleansing routines for overall health.

// ## Philosophy
// Rudradeep believes that true healing comes from nature. His approach combines traditional Ayurvedic wisdom with modern lifestyle adjustments to promote long-term well-being.

// ## Achievements
// - Trained under Ayurvedic masters in Kerala.
// - Developed a line of organic herbal products.
// - Speaker at the Global Ayurveda Summit 2024.
//       `,
//     },
//   ];

//   // Modal close handler
//   const closeModal = () => {
//     setSelectedMember(null);
//   };

//   // Animation variants for modal
//   const modalVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
//     exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
//   };

//   // Animation variants for team cards
//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//     hover: { scale: 1.05, boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)" },
//   };

//   return (
//     <div className="max-w-6xl mx-auto mt-12 mb-12 px-6">
//       {/* Header */}
//       <div className="text-center mb-10">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl font-bold text-[#d67952]"
//         >
//           Meet Our Team
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="text-lg text-gray-700 mt-2"
//         >
//           Dedicated professionals passionate about your well-being.
//         </motion.p>
//       </div>

//       {/* Team Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {teamMembers.map((member, index) => (
//           <motion.div
//             key={index}
//             variants={cardVariants}
//             initial="hidden"
//             animate="visible"
//             whileHover="hover"
//             transition={{ duration: 0.3 }}
//             className="bg-white shadow-lg rounded-3xl overflow-hidden text-center"
//           >
//             <img
//               src={member.image}
//               alt={member.name}
//               className="w-full h-64 object-cover"
//             />
//             <div className="p-6 flex flex-col justify-between min-h-[220px]">
//               <div>
//                 <h4 className="text-2xl font-bold text-[#d67952]">
//                   {member.name}
//                 </h4>
//                 <h6 className="text-gray-600 font-semibold mt-1">
//                   {member.role}
//                 </h6>
//                 <p className="text-gray-700 mt-3">{member.description}</p>
//               </div>
//               <div className="mt-4 text-right">
//                 <button
//                   onClick={() => setSelectedMember(member)}
//                   className="text-[#d67952] font-semibold hover:underline focus:outline-none"
//                 >
//                   Read More
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Modal */}
//       <AnimatePresence>
//         {selectedMember && (
//           <Modal
//             isOpen={!!selectedMember}
//             onRequestClose={closeModal}
//             className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50"
//             overlayClassName="fixed inset-0 bg-black bg-opacity-50"
//             shouldCloseOnOverlayClick={true}
//             onOverlayClick={(e) => {
//               // Prevent modal content clicks from bubbling up to overlay
//               if (e.target === e.currentTarget) {
//                 closeModal();
//               }
//             }}
//           >
//             <motion.div
//               variants={modalVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative scrollbar-hide"
//               onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
//               style={{
//                 WebkitOverflowScrolling: "touch",
//                 scrollbarWidth: "none",
//                 msOverflowStyle: "none",
//               }}
//             >
//               {/* Sticky Close Button */}
//               <button
//                 onClick={closeModal}
//                 className="text-gray-600 hover:text-gray-800 focus:outline-none"
//                 style={{
//                   position: "sticky",
//                   top: "1rem",
//                   right: "1rem",
//                   marginLeft: "auto",
//                   display: "block",
//                 }}
//               >
//                 <FaTimes className="w-6 h-6" />
//               </button>

//               {/* Modal Content */}
//               <div className="flex flex-col items-center">
//                 <img
//                   src={selectedMember.image}
//                   alt={selectedMember.name}
//                   className="w-full h-64 object-cover rounded-lg mb-6"
//                 />
//                 <h3 className="text-2xl font-bold text-[#d67952] mb-2">
//                   {selectedMember.name}
//                 </h3>
//                 <h5 className="text-gray-600 font-semibold mb-4">
//                   {selectedMember.role}
//                 </h5>
//                 <div className="prose prose-sm max-w-none text-gray-700">
//                   <ReactMarkdown>
//                     {selectedMember.detailedDescription}
//                   </ReactMarkdown>
//                 </div>
//               </div>
//             </motion.div>
//           </Modal>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Team;

// import React, { useState } from "react";
// import ReactMarkdown from "react-markdown";
// import Modal from "react-modal";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaTimes } from "react-icons/fa";

// // Bind modal to app element for accessibility
// Modal.setAppElement("#root");

// const Team = () => {
//   const [selectedMember, setSelectedMember] = useState(null);

//   const teamMembers = [
//     {
//       name: "Koushal Puri",
//       role: "Yoga Expert",
//       description:
//         "Anshul, an established holistic yoga and meditation teacher. Anshul's teachings seamlessly integrate yoga philosophy from the physical to the profound.",
//       image:
//         "https://jogire.s3.ap-south-1.amazonaws.com/static/aboutus/team/koushal.webp",
//       detailedDescription: `
// # Koushal Puri - Yoga Expert

// Koushal Puri has over 15 years of experience in holistic yoga and meditation. Her journey began in the serene foothills of the Himalayas, where she trained under renowned yogis.

// ## Expertise
// - **Hatha Yoga**: Mastering traditional postures for strength and flexibility.
// - **Meditation**: Guiding mindfulness practices for mental clarity.
// - **Pranayama**: Teaching breathing techniques to enhance energy flow.

// ## Philosophy
// Koushal believes in integrating yoga into daily life, making it accessible for everyone. Her sessions are designed to bring balance to both body and mind, helping individuals find inner peace.

// ## Achievements
// - Certified by the International Yoga Alliance.
// - Conducted over 500 workshops globally.
// - Authored "The Path to Serenity," a best-selling book on yoga philosophy.
//       `,
//     },
//     {
//       name: "Dhaval Prajapati",
//       role: "Wellness Coach",
//       description:
//         "Dhaval is a certified wellness coach, helping people achieve a balanced lifestyle through mindful movement and meditation.",
//       image:
//         "https://jogire.s3.ap-south-1.amazonaws.com/static/aboutus/team/dhawal.webp",
//       detailedDescription: `
// # Dhaval Prajapati - Wellness Coach

// Dhaval Prajapati is a passionate wellness coach with a mission to empower individuals through mindful practices. He has worked with clients from diverse backgrounds, helping them achieve their wellness goals.

// ## Expertise
// - **Mindful Movement**: Incorporating gentle exercises for daily vitality.
// - **Nutrition Guidance**: Offering tips for balanced eating habits.
// - **Stress Management**: Providing techniques to reduce stress and improve focus.

// ## Philosophy
// Dhaval emphasizes a holistic approach to wellness, focusing on the mind-body connection. His coaching style is supportive and personalized, ensuring every client feels motivated.

// ## Achievements
// - Certified Wellness Coach with over 10 years of experience.
// - Featured in "Wellness Today" magazine for innovative coaching methods.
// - Hosted wellness retreats in Bali and Goa.
//       `,
//     },
//     {
//       name: "Rudradeep",
//       role: "Ayurveda Specialist",
//       description:
//         "Rudra specializes in Ayurveda and natural healing practices, offering personalized wellness solutions.",
//       image:
//         "https://jogire.s3.ap-south-1.amazonaws.com/static/aboutus/team/rudradeep.webp",
//       detailedDescription: `
// # Rudradeep - Ayurveda Specialist

// Rudradeep is an Ayurveda specialist dedicated to natural healing. With a deep understanding of ancient practices, he offers solutions tailored to individual needs.

// ## Expertise
// - **Ayurvedic Diagnosis**: Assessing doshas for personalized treatments.
// - **Herbal Remedies**: Using natural herbs for healing and balance.
// - **Detox Programs**: Designing cleansing routines for overall health.

// ## Philosophy
// Rudradeep believes that true healing comes from nature. His approach combines traditional Ayurvedic wisdom with modern lifestyle adjustments to promote long-term well-being.

// ## Achievements
// - Trained under Ayurvedic masters in Kerala.
// - Developed a line of organic herbal products.
// - Speaker at the Global Ayurveda Summit 2024.
//       `,
//     },
//   ];

//   // Modal close handler
//   const closeModal = () => {
//     setSelectedMember(null);
//   };

//   // Animation variants for modal
//   const modalVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.3, ease: "easeOut" },
//     },
//     exit: {
//       opacity: 0,
//       scale: 0.95,
//       transition: { duration: 0.3, ease: "easeIn" },
//     },
//   };

//   // Animation variants for team cards
//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//     hover: {
//       scale: 1.05,
//       boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)",
//       transition: { duration: 0.2 },
//     },
//   };

//   return (
//     <div className="max-w-6xl mx-auto mt-12 mb-12 px-6">
//       {/* Header */}
//       <div className="text-center mb-12">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl md:text-5xl font-bold text-[#d67952]"
//         >
//           Meet Our Team
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="text-lg text-gray-700 mt-3"
//         >
//           Dedicated professionals passionate about your well-being.
//         </motion.p>
//       </div>

//       {/* Team Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {teamMembers.map((member, index) => (
//           <motion.div
//             key={index}
//             variants={cardVariants}
//             initial="hidden"
//             animate="visible"
//             whileHover="hover"
//             className="bg-white shadow-lg rounded-3xl overflow-hidden text-center transform transition-all duration-300"
//           >
//             <img
//               src={member.image}
//               alt={member.name}
//               className="w-full h-64 object-cover"
//             />
//             <div className="p-6 flex flex-col justify-between min-h-[220px]">
//               <div>
//                 <h4 className="text-2xl font-bold text-[#d67952]">
//                   {member.name}
//                 </h4>
//                 <h6 className="text-gray-600 font-semibold mt-1">
//                   {member.role}
//                 </h6>
//                 <p className="text-gray-700 mt-3 text-sm md:text-base">
//                   {member.description}
//                 </p>
//               </div>
//               <div className="mt-4 text-right">
//                 <button
//                   onClick={() => setSelectedMember(member)}
//                   className="text-[#d67952] font-semibold hover:underline focus:outline-none transition-colors duration-200"
//                 >
//                   Read More
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Modal */}
//       <AnimatePresence>
//         {selectedMember && (
//           <Modal
//             key={selectedMember.name}
//             isOpen={!!selectedMember}
//             onRequestClose={closeModal}
//             className="relative bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto outline-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
//             overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
//             shouldCloseOnOverlayClick={true}
//             shouldCloseOnEsc={true}
//             closeTimeoutMS={300}
//             contentLabel={`Profile of ${selectedMember.name}`}
//           >
//             <motion.div
//               variants={modalVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               style={{
//                 WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
//                 backgroundImage: "none",
//               }}
//             >
//               {/* Close Button */}
//               <button
//                 onClick={closeModal}
//                 className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none transition-colors duration-200"
//               >
//                 <FaTimes className="w-6 h-6" />
//               </button>

//               {/* Modal Content */}
//               <div className="flex flex-col items-center">
//                 <img
//                   src={selectedMember.image}
//                   alt={selectedMember.name}
//                   className="w-full h-64 object-cover rounded-lg mb-6"
//                 />
//                 <h3 className="text-2xl font-bold text-[#d67952] mb-2">
//                   {selectedMember.name}
//                 </h3>
//                 <h5 className="text-gray-600 font-semibold mb-4">
//                   {selectedMember.role}
//                 </h5>
//                 <div className="prose prose-sm max-w-none text-gray-700">
//                   <ReactMarkdown>
//                     {selectedMember.detailedDescription}
//                   </ReactMarkdown>
//                 </div>
//               </div>
//             </motion.div>
//           </Modal>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Team;

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import Modal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

// Bind modal to app element for accessibility
Modal.setAppElement("#root");

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: "Koushal Puri",
      role: "Founder",
      description:
        "Anshul, an established holistic yoga and meditation teacher. Anshul's teachings seamlessly integrate yoga philosophy from the physical to the profound.",
      image:
        "https://jogire.s3.ap-south-1.amazonaws.com/static/aboutus/team/koushal.webp",
      detailedDescription: `
# Meet the Founder – Koushal Puri

***“A journey from a compulsive bhogi to a conscious bhogi”*** — this powerful transformation lies at the heart of Jogire, a health and wellness initiative founded by Koushal Puri. With a vision to redefine how we approach fitness, food, and mindfulness, Koushal brings a rare blend of traditional wisdom and modern science to the wellness space.

## Koushal’s Journey

Koushal’s path to holistic health began with a deep personal transformation. Moving beyond superficial wellness trends, he immersed himself in disciplines that connect the body, mind, and spirit. His mission is simple yet profound: to guide others towards conscious living through balanced nutrition, mindful movement, and inner awareness.

## Credentials That Matter

Koushal’s work is backed by a strong academic and professional foundation:

- M.Sc. in Human Consciousness & Yogic Science  
  Dev Sanskriti Vishwavidyalaya (DSVV), Haridwar

- B.Sc. in Nutrition & Dietetics

- Diploma in Personal Training  
  K11 School of Fitness Sciences, Delhi

This multidisciplinary education allows him to create integrated wellness programs that address the full spectrum of health—physical, nutritional, and mental.

## Experience You Can Trust

Koushal has trained and touched lives across a wide range of settings:

- Master Trainer at Diva Yoga

- Dietitian in clinical hospital settings

- Yoga Teacher at Sarva Yoga

- Facilitator of wellness workshops in corporates, wellness centers, and luxury hotels

His practical experience in both therapeutic and lifestyle-based wellness makes him uniquely equipped to lead people toward sustainable and conscious health choices.

## The Heart of Jogire

At Jogire, Koushal’s vision comes alive—a space where ancient yogic practices meet modern fitness, where nutrition becomes nourishment, and where wellness is a lifestyle, not a trend. His personal evolution inspires the core philosophy of Jogire: helping people move from compulsive consumption to conscious living.

## Welcome to Jogire.

Your journey to holistic well-being starts here.
      `,
    },
    {
      name: "Dhawal Prajapati",
      role: "Co-Founder",
      description:
        "Dhawal is a certified wellness coach, helping people achieve a balanced lifestyle through mindful movement and meditation.",
      image:
        "https://jogire.s3.ap-south-1.amazonaws.com/static/aboutus/team/dhawal.webp",
      detailedDescription: `
# Meet the Co-Founder – Dhawal Prajapati

***“Guiding you toward balance in mind, body, and spirit”*** — this heartfelt mission drives Dhawal Prajapati, a dedicated yoga coach and wellness guide at Jogire. With a passion for holistic well-being, Dhawal combines classical yogic wisdom with modern therapeutic practices to help individuals find harmony and vitality in their lives.

## Dhawal’s Journey

Dhawal’s journey as a wellness guide is rooted in his deep commitment to fostering balance and mindfulness. With a focus on connecting the mind, body, and spirit, he has dedicated himself to supporting diverse individuals on their paths to health and inner peace, whether they are just starting out or seeking to deepen their practice.

## Credentials That Matter

Dhawal’s expertise is grounded in a robust academic and professional foundation:

- Master’s degree in Human Consciousness and Yogic Science  
- Certificate Course in Yoga Therapy  
- Level 3 certification from the Yoga Certification Board (YCB), accredited by the Government of India  

This comprehensive education equips him to design personalized yoga and wellness programs that address both physical and mental well-being with a therapeutic approach.

## Experience You Can Trust

Dhawal brings over 5 years of experience in both online and offline teaching, having guided a wide range of individuals toward their wellness goals:

- Yoga teacher at Sarva Yoga
- Yoga teacher at Healthify
- Yoga Coach for diverse groups, offering personalized sessions  
- Wellness Guide in both virtual and in-person settings  
- Facilitator of holistic health practices for beginners and advanced practitioners  

His extensive experience allows him to create supportive and transformative experiences tailored to each individual’s needs.

## The Heart of Wellness

At the core of Dhawal’s practice is a philosophy that blends classical yogic wisdom with therapeutic applications. He believes in empowering individuals through compassion, expertise, and a holistic perspective, ensuring that every step of their journey is mindful and meaningful. His approach makes wellness accessible and sustainable for all.

## Welcome to Jogire.

Let’s move together toward a more balanced, mindful, and vibrant life with Dhawal as your guide
      `,
    },
    {
      name: "Rudradeep",
      role: "Ayurveda Specialist",
      description:
        "Rudra specializes in Ayurveda and natural healing practices, offering personalized wellness solutions.",
      image:
        "https://jogire.s3.ap-south-1.amazonaws.com/static/aboutus/team/rudradeep.webp",
      detailedDescription: `
# Rudradeep - Ayurveda Specialist

Rudradeep is an Ayurveda specialist dedicated to natural healing. With a deep understanding of ancient practices, he offers solutions tailored to individual needs.

## Expertise
- **Ayurvedic Diagnosis**: Assessing doshas for personalized treatments.
- **Herbal Remedies**: Using natural herbs for healing and balance.
- **Detox Programs**: Designing cleansing routines for overall health.

## Philosophy
Rudradeep believes that true healing comes from nature. His approach combines traditional Ayurvedic wisdom with modern lifestyle adjustments to promote long-term well-being.

## Achievements
- Trained under Ayurvedic masters in Kerala.
- Developed a line of organic herbal products.
- Speaker at the Global Ayurveda Summit 2024.
      `,
    },
  ];

  // Modal close handler
  const closeModal = () => {
    setSelectedMember(null);
  };

  // Animation variants for modal
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  // Animation variants for team cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="max-w-6xl mx-auto mt-12 mb-12 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-[#d67952]"
        >
          Meet Our Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-700 mt-3"
        >
          Dedicated professionals passionate about your well-being.
        </motion.p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="bg-white shadow-lg rounded-3xl overflow-hidden text-center transform transition-all duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 flex flex-col justify-between min-h-[220px]">
              <div>
                <h4 className="text-2xl font-bold text-[#d67952]">
                  {member.name}
                </h4>
                <h6 className="text-gray-600 font-semibold mt-1">
                  {member.role}
                </h6>
                <p className="text-gray-700 mt-3 text-sm md:text-base">
                  {member.description}
                </p>
              </div>
              <div className="mt-4 text-right">
                <button
                  onClick={() => setSelectedMember(member)}
                  className="text-[#d67952] font-semibold hover:underline focus:outline-none transition-colors duration-200"
                >
                  Read More
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <Modal
            key={selectedMember.name}
            isOpen={!!selectedMember}
            onRequestClose={closeModal}
            className="relative bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto outline-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            closeTimeoutMS={300}
            contentLabel={`Profile of ${selectedMember.name}`}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                WebkitOverflowScrolling: "touch",
                backgroundImage: "none",
              }}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none transition-colors duration-200"
              >
                <FaTimes className="w-6 h-6" />
              </button>

              {/* Modal Content */}
              <div className="flex flex-col items-center">
                {/* Image Container with 16:9 Aspect Ratio */}
                <div className="w-full aspect-[16/9] mb-6">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#d67952] mb-2">
                  {selectedMember.name}
                </h3>
                <h5 className="text-gray-600 font-semibold mb-4">
                  {selectedMember.role}
                </h5>
                <div className="prose prose-sm max-w-none text-gray-700">
                  <ReactMarkdown>
                    {selectedMember.detailedDescription}
                  </ReactMarkdown>
                </div>
              </div>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Team;
