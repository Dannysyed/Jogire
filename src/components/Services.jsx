import React, { useState } from "react";
import { FaUsers, FaUser, FaAppleAlt, FaBrain } from "react-icons/fa"; // Updated icon imports

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(null);

  const services = [
    {
      icon: <FaUsers className="w-6 h-6 text-white" />, // Group icon for Group Yoga
      title: "Group Yoga Classes",
      description:
        "Achieve balance and flexibility with expert-guided yoga sessions tailored for all levels.",
    },
    {
      icon: <FaUser className="w-6 h-6 text-white" />, // Individual icon for Personal Yoga
      title: "Personal Yoga Classes",
      description:
        "Enhance your mental clarity and emotional well-being through mindfulness techniques, focusing on stress reduction, self-awareness, and present-moment living.",
    },
    {
      icon: <FaAppleAlt className="w-6 h-6 text-white" />, // Nutrition icon (unchanged)
      title: "Aahar",
      description:
        "Personalized nutrition plans designed to support your fitness and wellness goals.",
    },
    {
      icon: <FaBrain className="w-6 h-6 text-white" />, // Mental Health icon (unchanged)
      title: "Gut & Mental Health",
      description:
        "Personalized sessions offering tailored support to improve mental health and emotional well-being.",
    },
  ];

  const toggleModal = (index) => {
    setIsModalOpen(isModalOpen === index ? null : index);
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-lg font-semibold text-orange-600 uppercase tracking-wide">
            Be Healthy
          </h2>
          <p className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
            Start Your Fitness Journey Today
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Unlock your full potential with our expert-led programs designed to
            improve your health and well-being.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-12 max-w-4xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative flex items-start space-x-6 p-6 bg-gray-50 rounded-xl shadow-md transition-transform transform hover:scale-105"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-[#d67952] text-white">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <button
                  className="mt-4 text-orange-600 font-semibold"
                  onClick={() => toggleModal(index)}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen !== null && (
          <div
            className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => toggleModal(null)}
          >
            <div
              className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full overflow-y-auto max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {services[isModalOpen].title} Options
              </h2>
              <div className="grid grid-cols-2 gap-6 mb-6">
                {[1, 2, 3, 4].map((card, cardIndex) => (
                  <div
                    key={cardIndex}
                    className="bg-gray-100 p-4 rounded-xl shadow-md"
                  >
                    <h4 className="font-bold text-lg">Option {card}</h4>
                    <p className="mt-2 text-gray-600">
                      Description of option {card} for{" "}
                      {services[isModalOpen].title}.
                    </p>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <button className="bg-[#d67952] text-white p-3 rounded-lg w-full">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
