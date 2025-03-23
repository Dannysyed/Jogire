import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Anshul",
      role: "Yoga Expert",
      description:
        "Anshul, an established holistic yoga and meditation teacher. Anshul's teachings seamlessly integrate yoga philosophy from the physical to the profound.",
      image:
        "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Dhaval Prajapati",
      role: "Wellness Coach",
      description:
        "Dhaval is a certified wellness coach, helping people achieve a balanced lifestyle through mindful movement and meditation.",
      image:
        "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Rudra",
      role: "Ayurveda Specialist",
      description:
        "Rudra specializes in Ayurveda and natural healing practices, offering personalized wellness solutions.",
      image:
        "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-12 px-6">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[#d67952]">Meet Our Team</h2>
        <p className="text-lg text-gray-700 mt-2">
          Dedicated professionals passionate about your well-being.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-3xl overflow-hidden text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h4 className="text-2xl font-bold text-[#d67952]">
                {member.name}
              </h4>
              <h6 className="text-gray-600 font-semibold mt-1">
                {member.role}
              </h6>
              <p className="text-gray-700 mt-3">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
