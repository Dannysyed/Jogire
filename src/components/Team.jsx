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
        "Koushal, an established holistic yoga and meditation teacher. Koushal's teachings seamlessly integrate yoga philosophy from the physical to the profound.",
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
      name: "Dr. S. Divya Prabha, M.Sc., Ph.D.",
      role: "Counselling Psychologist",
      description:
        "Dr. Divya is a counselling psychologist with 16+ years of experience empowering individuals and families through holistic care.",
      image:
        "https://jogire.s3.ap-south-1.amazonaws.com/static/aboutus/team/divya.webp",
      detailedDescription: `
# Meet the Counselling Psychologist – Dr. S. Divya Prabha

***“Small steps every day.”*** — This simple yet profound philosophy defines Dr. Divya Prabha’s approach to life and mental health. As the Co-Founder of Jogire and Founder of Steps Foundations, Dr. Divya brings over sixteen years of dedicated experience in counselling psychology, school counselling, and community mental health to the mission of holistic well-being.

## Dr. Divya’s Journey

A Counselling Psychologist and ACA-certified Professional Supervisor, Dr. Divya’s work bridges accessibility, empathy, and ethics in mental health. Through Steps Foundations, she has built platforms for affordable counselling, pro bono services, and student internships that foster professional competence and social responsibility.

Currently, she serves as the **Chief Psychological Officer at Dhruti Trust**, where she leads mental health initiatives, and as a **Consulting Psychologist** for Presentation Convent Schools, continuing her life-long passion for nurturing emotional well-being in children and adolescents.

## Credentials That Matter

Dr. Divya’s academic and professional journey reflects her deep commitment to evidence-based and ethical practice:

- **Ph.D. in Psychology** — Bharathiar University, Coimbatore  
  *Research focus:* Prevention of Internet Addiction among Adolescents  
- **M.Sc. in Psychology** — University of Madras  
- **Certified CBT Practitioner**  
- **ACA Certified Professional Supervisor**  
- **Yoga Volunteer**, Ministry of AYUSH, Government of India  

Her training integrates psychological science with mindfulness and holistic approaches to create grounded, sustainable healing experiences.

## Experience You Can Trust

With more than 16 years in counselling and 13 years in school settings, Dr. Divya has supported thousands of children, parents, couples, and educators. Her expertise spans:

- Child & Adolescent Counselling  
- Marital & Family Counselling  
- Emotional Regulation & Anger Management  
- Trauma and Grief Support  
- Stress, Anxiety & Depression Care  
- Supervision & Ethical Practice for Counsellors  

She has led numerous workshops and training programs on **POCSO awareness**, **resilience building**, **suicide prevention**, and **ethical counselling**, empowering professionals and communities alike.

## Leadership and Recognition

Dr. Divya served as **President of the Chennai Counsellors Foundation (CCF)** for four consecutive years and continues as an Advisory Committee Member. She also held executive roles in the **Indian Academy of Professional Supervisors (IAPS)** and remains affiliated with respected organizations such as **APA**, **IAAP**, and **InSPA**.

In recognition of her contribution to mental health, she received the **“Great Indian Counselling Psychologist of the Year 2024”** award from *Wings of Fire*.

## The Heart Behind Her Work

For Dr. Divya, counselling is more than a profession — it’s a calling rooted in compassion, ethics, and community care. She is an advocate for **self-care among mental health professionals**, encouraging practitioners to nurture their own emotional well-being to better serve others.

Outside her professional life, she finds joy in nature, photography, cycling, doodling, and tending her garden — grounding practices that mirror the balance she teaches.

## The Spirit of Jogire

At Jogire, Dr. Divya Prabha brings the mental-emotional dimension of holistic health to life. Her vision complements the physical and nutritional wellness foundation laid by Koushal Puri, creating a truly integrated approach to conscious living — one that heals the mind, nourishes the body, and uplifts the spirit.

## Welcome to Jogire.

Your journey toward mindful emotional balance starts here.
  `,
    },
    {
      name: "Shashiranjan Giri",
      role: "Astro Yogi",
      description:
        "Shashiranjan blends the wisdom of astrology with the discipline of yoga to guide individuals toward holistic balance and self-awareness.",
      image:
        "https://jogire.s3.ap-south-1.amazonaws.com/static/aboutus/team/sashi.webp",
      detailedDescription: `
# Meet Shashiranjan Giri

Rooted in the timeless sciences of **Jyotish** and **Yoga**, Shashiranjan Giri brings over half a decade of experience helping people align their inner and outer worlds. His work bridges cosmic insight with mindful living, empowering individuals to find clarity, purpose, and peace.

## Education & Training

- Shastri in Jyotish  
- M.A. in Yogic Science  
- Diploma in Jyotish  

This unique combination of astrology and yogic philosophy enables Shashiranjan to offer a deeply integrative perspective on life’s challenges and transformations.

## Professional Experience

- **Yoga Teacher** at *Yokalp*  
- **Astrologer** at *Astrotalk*  
- **5+ years of experience** in Astrology and Yogic guidance  

Shashiranjan’s consultations and teachings emphasize self-awareness, emotional harmony, and spiritual alignment—helping people navigate modern life with ancient wisdom.

## Guiding Philosophy

For Shashiranjan, wellness is not just physical or astrological—it’s the art of living in rhythm with oneself and the universe. Through his work, he continues to illuminate the connection between cosmic patterns and conscious living.`,
    },
    {
      name: "Dr. Ishant Vijay",
      role: "Physiotherapist ",
      description:
        "Dr. Ishant is a sports and rehabilitation physiotherapist dedicated to restoring movement, strength, and performance through evidence-based care.",
      image:
        "https://jogire.s3.ap-south-1.amazonaws.com/static/aboutus/team/ishant.webp",
      detailedDescription: `
# Meet Dr. Ishant Vijay (PT)

With a deep passion for sports medicine and rehabilitation, Dr. Ishant Vijay serves as the **Head of Physiotherapy Department** at *Nandini Multi-Speciality Hospital, Kota (Rajasthan)*. His approach blends modern physiotherapy techniques with a commitment to personalized recovery and long-term wellness.

## Education & Credentials

- **Bachelor of Physiotherapy (BPT)**  
- **Master of Physiotherapy (MPT)** in *Sports & Rehabilitation*  

Dr. Ishant’s academic background is strengthened by specialized certifications and continuous learning in advanced treatment modalities.

## Certifications

- Certified by **FIFA – Football Medicine Course**  
- Certified in **K-Taping**, **Cupping Therapy**, **SPJM**, and **IALCR**

These credentials reflect his dedication to staying at the forefront of sports injury management and performance enhancement.

## Professional Experience

With **4 years of clinical practice**, Dr. Ishant has worked extensively with athletes, rehabilitation patients, and individuals seeking recovery from musculoskeletal injuries. His work emphasizes functional movement, preventive care, and customized therapy protocols designed to optimize physical potential.

## Philosophy

For Dr. Ishant, physiotherapy is more than treatment—it’s empowerment. His mission is to help people move better, recover faster, and live stronger through informed, compassionate care.
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
