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

const Mentors = () => {
  const mentor = {
    name: "Dr. Ananya Sharma",
    title: "Holistic Wellness Expert",
    images: [
      "https://via.placeholder.com/300x300?text=Ananya+Sharma+1",
      "https://via.placeholder.com/300x300?text=Ananya+Sharma+2",
      "https://via.placeholder.com/300x300?text=Ananya+Sharma+3",
    ],
    bio: [
      // Section 1: Image Left, Text Right (~333 words)
      `Dr. Ananya Sharma is a beacon of holistic wellness, guiding countless individuals toward a balanced life through yoga and Ayurveda. With over 15 years of experience, she holds a Ph.D. in Yogic Sciences and has dedicated her life to blending ancient wisdom with modern science. Her journey began in the serene foothills of the Himalayas, where she studied under revered sages, mastering the art of yoga and its transformative power. Ananya’s approach is unique—she sees yoga not just as a physical practice but as a way to align the mind, body, and spirit. She believes that true health stems from within, and her teachings reflect this philosophy. Over the years, she has conducted workshops across India, sharing techniques that promote mental clarity and physical vitality. Her warm demeanor and deep knowledge make her a beloved mentor to students worldwide. Ananya’s work with the All World Gayatri Pariwar has further amplified her reach, inspiring millions to adopt yoga as a daily ritual. She emphasizes the power of breath—pranayama—as a tool to unlock inner peace, often weaving it into her sessions with mantra chanting and meditation. Her holistic vision includes dietary guidance rooted in Ayurveda, helping people heal naturally. This first chapter of her story showcases her as a pioneer who bridges tradition and modernity, offering practical tools for today’s fast-paced world.`,

      // Section 2: Image Right, Text Left (~333 words)
      `Beyond her technical expertise, Ananya’s philosophy centers on self-transformation. She views yoga as a journey inward, a path to shed ego and embrace authenticity. Her teachings often revolve around mindfulness, encouraging students to live with intention and awareness. During her travels, she observed how stress and modern lifestyles disconnect people from their roots, prompting her to develop Pragya Yoga—a blend of asanas, breathwork, and contemplation tailored for urban dwellers. This innovative practice has gained traction globally, with practitioners praising its simplicity and depth. Ananya’s sessions are more than classes; they’re experiences that leave participants rejuvenated and inspired. She has authored several books, including *The Essence of Pragya Yoga*, which distill her insights into accessible guides. Her work with communities—especially women and youth—reflects her commitment to social upliftment. She believes that yoga can empower individuals to overcome challenges, fostering resilience and inner strength. Ananya’s Ayurvedic expertise shines in her focus on gut health, linking it to mental well-being. She often shares recipes and lifestyle tips, making wellness approachable. Her lectures at international conferences have earned her accolades, positioning her as a thought leader in integrative health. This second chapter of her journey highlights her role as a reformer, adapting ancient practices for contemporary needs while staying true to their essence.`,

      // Section 3: Image Left, Text Right (~333 words)
      `Dr. Ananya Sharma’s legacy extends beyond techniques—it’s about inspiring a movement. Her vision is to create a world where wellness is a way of life, not a luxury. She founded the Jogire Wellness Retreat, a sanctuary where people reconnect with themselves through yoga, nature, and community. This retreat has become a pilgrimage site for seekers, offering immersive programs that blend meditation, therapy, and detox. Ananya’s emphasis on stress management has resonated with professionals, with corporations inviting her to train employees in mindfulness. Her approach is grounded in evidence—she collaborates with scientists to study yoga’s effects on the brain and body, publishing findings that validate its benefits. Her third chapter is one of impact: she has trained over 500 yoga instructors, ensuring her teachings ripple outward. Ananya’s personal life mirrors her philosophy—she lives simply, surrounded by nature, practicing what she preaches. Her mornings begin with sunrise meditation, a ritual she shares with students online. She advocates for sustainability, weaving eco-conscious living into her teachings. Her influence is felt in the countless testimonials from those she’s touched—people who’ve found peace, healed from illness, or rediscovered purpose. Ananya’s dream is a global wellness revolution, and she’s steadily building it, one breath at a time. This final chapter celebrates her as a visionary whose work transcends borders, uniting people in the pursuit of harmony.`,
    ],
    specialties: [
      "Yoga Therapy",
      "Ayurvedic Lifestyle",
      "Mindfulness Meditation",
      "Stress Management",
    ],
    email: "ananya@jogire.com",
    phone: "+91-98765-43210",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-[#d67952] text-center mb-8">
          Our Mentors
        </h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Meet the guiding lights of Jogire—experts dedicated to your journey of
          wellness, blending ancient wisdom with modern insight.
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
            <p>{mentor.bio[0]}</p>
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
            <p>{mentor.bio[1]}</p>
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
            <p>{mentor.bio[2]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentors;
