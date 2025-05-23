import { useState, useEffect, useCallback } from "react";
import {
  FaUsers,
  FaUser,
  FaAppleAlt,
  FaBrain,
  FaHeartbeat,
  FaUtensils,
  FaTimes,
} from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

const Services = () => {
  const [modalState, setModalState] = useState(null);

  // Define routes for each service's registration form
  const serviceRoutes = {
    "Group Yoga Classes": "/services/group-yoga-class",
    "Personal Yoga Classes": "/services/personal-yoga-class",
    "Diet Counselling (Aahar)": "/services/diet-plan",
    "Gut Health": "/services/gut-health",
    "Mental Health": "/services/mental-health",
    "Metabolic Health": "/services/metabolic-health",
  };

  const generalFitnessServices = [
    {
      icon: <FaUsers className="w-8 h-8 text-white" />,
      title: "Group Yoga Classes",
      description:
        "Achieve balance and flexibility with expert-guided yoga sessions tailored for all levels.",
      options: [
        {
          title: "Fitness Fusion Program",
          description:
            "Explore more than **21 forms of yoga** including Hatha Yoga, Vinyasa Yoga, Yin Yoga, Yang Yoga, Restorative Yoga, Belt Yoga, Brick Yoga, Insight Yoga, Chair Yoga, Asthanga inspired Yoga, Warrior Flow",
        },
        {
          title: "7-Step Class Structure",
          description: `1. Mind Calming Techniques 
2. Gentle Stretches 
3. Yogic Cardio 
4. Main Yoga Flow
5. Pranayama, Mudra, Bandh
6. Dharna & Dhyana  
7. Shavasana 
`,
        },
        {
          title: "Class Schedule",
          description: "A 45-60 minute class conducted Monday through Friday",
        },
        {
          title: "Weekend Homework",
          description:
            "Personalized weekend routine according to your personal health goals",
        },
        {
          title: "Monthly Challenge Asanas",
          description: "",
        },
        {
          title: "Monthly Diet Challenge",
          description: "",
        },
      ],
    },
    {
      icon: <FaUser className="w-8 h-8 text-white" />,
      title: "Personal Yoga Classes",
      description:
        "Receive personalized yoga instruction to improve flexibility, strength, and inner peace.",
      options: [
        {
          title: "Fitness Fusion Program",
          description:
            "Explore more than **21 forms of yoga** including Hatha Yoga, Vinyasa Yoga, Yin Yoga, Yang Yoga, Restorative Yoga, Belt Yoga, Brick Yoga, Insight Yoga, Chair Yoga, Asthanga inspired Yoga, Warrior Flow",
        },
        {
          title: "7-Step Class Structure",
          description: `1. Mind Calming Techniques 
2. Gentle Stretches 
3. Yogic Cardio 
4. Main Yoga Flow
5. Pranayama, Mudra, Bandh
6. Dharna & Dhyana  
7. Shavasana 
`,
        },
        {
          title: "Class Schedule",
          description: "A 45-60 minute class conducted Monday through Friday",
        },
        {
          title: "Weekend Homework",
          description:
            "Personalized weekend routine according to your personal health goals",
        },
        {
          title: "Monthly Challenge Asanas",
          description: "",
        },
        {
          title: "Monthly Diet Challenge",
          description: "",
        },
      ],
    },
    {
      icon: <FaAppleAlt className="w-8 h-8 text-white" />,
      title: "Diet Counselling (Aahar)",
      description:
        "Personalized nutrition plans designed to support your fitness and wellness goals.",
      options: [
        {
          title: "Initial Consultation",
          description: "A 45-minute session to assess your dietary needs.",
        },
        {
          title: "Weight Loss Plan",
          description: "A personalized plan to support healthy weight loss.",
        },
        {
          title: "Energy Boost Plan",
          description: "A plan to increase energy through balanced nutrition.",
        },
        {
          title: "Long-Term Wellness Plan",
          description: "A comprehensive plan for sustained health.",
        },
      ],
    },
  ];

  const gmmHealthSolutions = [
    {
      icon: (
        <img
          src="https://jogire.s3.ap-south-1.amazonaws.com/static/services/intestine-fill.svg"
          alt="Gut Health Icon"
          className="w-8 h-8 invert"
        />
      ),
      title: "Gut Health",
      description:
        "Targeted programs to improve digestion and gut health through holistic practices.",
      options: [
        {
          title: "Gut Health Assessment",
          description: "A 45-minute consultation to evaluate gut health.",
        },
        {
          title: "Probiotic Program",
          description: "A 4-week program to improve gut flora.",
        },
        {
          title: "Digestive Wellness Plan",
          description: "A plan to address digestive issues.",
        },
        {
          title: "Gut Detox Session",
          description: "A 60-minute session to support gut cleansing.",
        },
      ],
    },
    {
      icon: <FaBrain className="w-8 h-8 text-white" />,
      title: "Mental Health",
      description:
        "Personalized sessions offering tailored support to improve mental health and emotional well-being.",
      options: [
        {
          title: "Mindfulness Starter",
          description:
            "A 60-minute session to introduce mindfulness techniques.",
        },
        {
          title: "Stress Management Plan",
          description: "A 4-week plan to manage stress effectively.",
        },
        {
          title: "Emotional Wellness Session",
          description: "A 60-minute session to enhance emotional health.",
        },
        {
          title: "Cognitive Support Plan",
          description: "A plan to improve mental clarity and focus.",
        },
      ],
    },
    {
      icon: <FaHeartbeat className="w-8 h-8 text-white" />,
      title: "Metabolic Health",
      description:
        "Optimize your metabolism with expert guidance on nutrition and lifestyle changes.",
      options: [
        {
          title: "Metabolic Assessment",
          description: "A 45-minute consultation to evaluate metabolism.",
        },
        {
          title: "Fat-Burning Program",
          description: "A 4-week program to boost fat metabolism.",
        },
        {
          title: "Blood Sugar Balance Plan",
          description: "A plan to stabilize blood sugar levels.",
        },
        {
          title: "Energy Optimization Session",
          description: "A 60-minute session to enhance energy metabolism.",
        },
      ],
    },
  ];

  const toggleModal = useCallback(
    (section, index) => {
      setModalState(
        modalState?.section === section && modalState?.index === index
          ? null
          : { section, index }
      );
    },
    [modalState]
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape" && modalState) {
        setModalState(null);
      }
    },
    [modalState]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const renderServiceCard = (service, section, index) => (
    <div
      key={`${section}-${index}`}
      className="relative flex flex-col items-start p-8 bg-white rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-[#d67952]/50"
    >
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-[#d67952] text-white">
          {service.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
      </div>
      <p className="mt-4 text-gray-600 text-lg">{service.description}</p>
      <button
        className="mt-6 text-[#d67952] font-semibold hover:underline"
        onClick={() => toggleModal(section, index)}
        aria-label={`Learn more about ${service.title}`}
      >
        Learn More
      </button>
    </div>
  );

  const selectedService = modalState
    ? modalState.section === "generalFitness"
      ? generalFitnessServices[modalState.index]
      : gmmHealthSolutions[modalState.index]
    : null;

  return (
    <div className="bg-white w-full">
      {/* Header Section */}
      <div className="py-12 sm:py-18">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-lg font-semibold text-[#d67952] uppercase tracking-wide">
              Our Services
            </h2>
            <p className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
              Start Your Fitness Journey Today
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Discover our expert-led programs designed to enhance your
              physical, mental, and metabolic well-being.
            </p>
          </div>
        </div>
      </div>

      {/* General Fitness Section */}
      <div className="py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              General Fitness
            </h2>
            <p className="mt-4 text-lg text-[#d67952]">
              Build a strong foundation for your wellness journey with our
              fitness and nutrition programs.
            </p>
          </div>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-3">
            {generalFitnessServices.map((service, index) =>
              renderServiceCard(service, "generalFitness", index)
            )}
          </div>
        </div>
      </div>

      {/* GMM Health Solutions Section */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              GMM Health Solutions
            </h2>
            <p className="mt-4 text-lg text-[#d67952]">
              Specialized programs to address gut, mental, and metabolic health
              challenges.
            </p>
          </div>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-3">
            {gmmHealthSolutions.map((service, index) =>
              renderServiceCard(service, "gmmHealthSolutions", index)
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalState && selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => toggleModal(null, null)}
        >
          <div
            className="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 transition-colors"
              onClick={() => toggleModal(null, null)}
              aria-label="Close modal"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {selectedService.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {selectedService.options.map((option, optionIndex) => (
                <div
                  key={optionIndex}
                  className="bg-gray-100 p-4 rounded-lg shadow-sm"
                >
                  <h4 className="font-bold text-lg">{option.title}</h4>
                  <div className="mt-2 text-gray-600 prose max-w-prose">
                    <ReactMarkdown>{option.description}</ReactMarkdown>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                to={serviceRoutes[selectedService.title]}
                onClick={() => toggleModal(null, null)}
                className="bg-[#d67952] text-white p-3 rounded-lg w-full hover:bg-[#b55e3f] transition-colors inline-block"
                aria-label={`Register for ${selectedService.title}`}
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
