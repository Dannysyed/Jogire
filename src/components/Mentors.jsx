// import React from "react";
// import { Link } from "react-router-dom";

// const Mentors = () => {
//   const mentor = {
//     name: "Dr. Ananya Sharma",
//     title: "Holistic Wellness Expert",
//     image: "https://via.placeholder.com/300x300?text=Ananya+Sharma",
//     bio: "Dr. Ananya Sharma is a renowned yoga practitioner and Ayurveda specialist with over 15 years of experience. She holds a Ph.D. in Yogic Sciences and has guided thousands toward mental clarity, physical health, and spiritual growth. Her approach blends traditional wisdom with modern science, making wellness accessible to all.",
//     specialties: [
//       "Yoga Therapy",
//       "Ayurvedic Lifestyle",
//       "Mindfulness Meditation",
//       "Stress Management",
//     ],
//     email: "ananya@jogire.com",
//     phone: "+91-98765-43210",
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
//       <div className="max-w-4xl w-full">
//         {/* Header */}
//         <h1 className="text-4xl font-bold text-[#d67952] text-center mb-8">
//           Our Mentors
//         </h1>
//         <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
//           Meet the guiding lights of Jogire—experts dedicated to your journey of
//           wellness, blending ancient wisdom with modern insight.
//         </p>

//         {/* Mentor Card */}
//         <div className="bg-white rounded-2xl shadow-2xl p-6 transform transition-all duration-300 hover:shadow-3xl flex flex-col md:flex-row items-center">
//           {/* Image */}
//           <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
//             <img
//               src={mentor.image}
//               alt={mentor.name}
//               className="w-48 h-48 rounded-full object-cover shadow-md"
//             />
//           </div>

//           {/* Details */}
//           <div className="flex-1 text-center md:text-left">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-1">
//               {mentor.name}
//             </h2>
//             <p className="text-[#d67952] font-medium mb-4">{mentor.title}</p>
//             <p className="text-gray-600 mb-4">{mentor.bio}</p>

//             {/* Specialties */}
//             <div className="mb-4">
//               <h3 className="text-lg font-semibold text-gray-700 mb-2">
//                 Specialties
//               </h3>
//               <ul className="flex flex-wrap gap-2 justify-center md:justify-start">
//                 {mentor.specialties.map((specialty, index) => (
//                   <li
//                     key={index}
//                     className="bg-[#d67952] text-white text-sm font-medium px-3 py-1 rounded-full"
//                   >
//                     {specialty}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Contact Info */}
//             <div className="text-gray-700">
//               <p className="mb-1">
//                 <span className="font-semibold">Email:</span>{" "}
//                 <a
//                   href={`mailto:${mentor.email}`}
//                   className="text-[#d67952] hover:underline"
//                 >
//                   {mentor.email}
//                 </a>
//               </p>
//               <p>
//                 <span className="font-semibold">Phone:</span>{" "}
//                 <a
//                   href={`tel:${mentor.phone}`}
//                   className="text-[#d67952] hover:underline"
//                 >
//                   {mentor.phone}
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Mentors;

import React from "react";
import ReactMarkdown from "react-markdown";

const Mentors = () => {
  const mentor = {
    name: "Dr. Chinmay Pandya",
    title:
      "Pro Vice-Chancellor, Dev Sanskriti Vishwavidyalaya (MBBS, PGDipl, MRCPsych – London)",
    images: [
      "https://jogire.s3.ap-south-1.amazonaws.com/static/aboutus/mentors/mentor2.webp",
      "https://jogire.s3.ap-south-1.amazonaws.com/static/aboutus/mentors/mentor1.webp",
      "https://jogire.s3.ap-south-1.amazonaws.com/static/aboutus/mentors/mentor3.webp",
    ],
    bio: [
      // Section 1: Image Left, Text Right
      `
## Our Mentor: Dr. Chinmay Pandya

Dr. Chinmay Pandya stands as a revered spiritual mentor and thought leader, bridging the realms of science and spirituality. A trained psychiatrist who served in the British National Health Service, Dr. Pandya returned to India to advance the spiritual and cultural mission of his grandfather, Pt. Shriram Sharma Acharya — the founder of the All World Gayatri Pariwar (AWGP). As the Pro Vice-Chancellor of DSVV, he has pioneered a holistic education model that integrates ancient Indian wisdom with modern disciplines.

Through his visionary leadership, Dr. Pandya has inspired a movement of Sanskritik Punarjanma (Cultural Renaissance) by aligning consciousness-based learning with global spiritual unity. His dedication continues to elevate DSVV as a global spiritual and educational institution.
`,

      // Section 2: Image Right, Text Left
      `
## Contributions & Leadership

- **Editor** – Dev Sanskriti, an interdisciplinary international journal.
- **Vice President** – Indian Yoga Association.
- **Chairperson** – International Festival of Yoga, Culture and Spirituality.
- **Director** – Global Covenant of Religions (GCR) (a UN Security Council initiative).
- **Founder** Patron – Rishihood University.
- **Founder** – South Asian Institute of Peace & Reconciliation.
- **Co-founder** – First Centre for Baltic Culture and Studies of Asia.
- **Core Committee Member** – International Day of Yoga.
- **Judge** – Templeton Prize Committee.
- **Honorary Member** – Senate of the University of Latvia.
- **Member** – Governing Council, Indian Council for Cultural Relations (ICCR).
- **Invited Representative** – Ministry of AYUSH, for enlisting Yoga in the UNESCO Intangible Cultural Heritage List.
- **Non-officio Member** – Ministry of Culture (GoI).
`,

      // Section 3: Image Left, Text Right
      `
## Global Impact & Recognition

Dr. Pandya has presented lectures and research across leading institutions such as the United Nations, University of Cambridge, IITs, IIMs, BARC, DRDO, and more. He has convened over 200 international and national colloquia, contributing to topics ranging from indigenous rights to Vedic science.

He has represented India at the UNESCO Inter-Governmental Meeting on Intangible Cultural Heritage and participated in the Inter-Parliamentary Conference on Interfaith Dialogue in Morocco.

### Honors & Awards:
- **Bharat Gaurav Award** – House of Commons, UK (2023)
- **Erasmus+ Scholarship** – Prestigious international academic recognition
`,
    ],
    specialties: [
      "Yoga Therapy",
      "Ayurvedic Lifestyle",
      "Mindfulness Meditation",
      "Stress Management",
    ],
    email: "chinmay@jogire.com",
    phone: "+91-98765-43210",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-[#d67952] text-center mb-8">
          Our Mentors
        </h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Meet the guiding light of Jogire—We are deeply honored to be guided by
          Dr. Chinmay Pandya, the esteemed Pro Vice-Chancellor of Dev Sanskriti
          Vishwavidyalaya (DSVV).
        </p>

        {/* Section 1: Image Left, Text Right */}
        <div className="mb-12 flex flex-col md:flex-row items-center">
          <div className="flex-shrink-0 md:w-1/3 mb-6 md:mb-0 md:mr-6">
            <img
              src={mentor.images[0]}
              alt={`${mentor.name} - Journey`}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-2/3 text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {mentor.name}
            </h2>
            <p className="text-[#d67952] font-medium mb-4">{mentor.title}</p>
            <div className="prose">
              <ReactMarkdown>{mentor.bio[0]}</ReactMarkdown>
            </div>
          </div>
        </div>

        {/* Section 2: Image Right, Text Left */}
        <div className="mb-12 flex flex-col md:flex-row-reverse items-center">
          <div className="flex-shrink-0 md:w-1/3 mb-6 md:mb-0 md:ml-6">
            <img
              src={mentor.images[1]}
              alt={`${mentor.name} - Philosophy`}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-2/3 text-gray-700">
            <div className="prose">
              <ReactMarkdown>{mentor.bio[1]}</ReactMarkdown>
            </div>
          </div>
        </div>

        {/* Section 3: Image Left, Text Right */}
        <div className="mb-12 flex flex-col md:flex-row items-center">
          <div className="flex-shrink-0 md:w-1/3 mb-6 md:mb-0 md:mr-6">
            <img
              src={mentor.images[2]}
              alt={`${mentor.name} - Legacy`}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-2/3 text-gray-700">
            <div className="prose">
              <ReactMarkdown>{mentor.bio[2]}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentors;
