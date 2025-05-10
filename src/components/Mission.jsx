import React from "react";
import { Link } from "react-router-dom";

const Mission = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 mb-12">
      {/* Hero Section: Image and Text */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#d67952]/10 to-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left: Photo */}
          <div className="lg:w-1/2 w-full h-80 lg:h-96 relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1520&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Yoga in Nature"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-75"></div>
            <p className="absolute bottom-4 left-4 text-white text-lg font-semibold">
              Empowering Lives Through Yoga
            </p>
          </div>

          {/* Right: Text */}
          <div className="lg:w-1/2 w-full p-6 lg:p-0">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#d67952] mb-4">
              Our Mission
            </h1>
            <p className="text-justify text-lg text-gray-700 mb-6 leading-relaxed">
              At Jogi Re, our mission is to inspire and empower individuals to
              achieve holistic well-being by blending ancient wisdom with modern
              lifestyles. Through yoga, mindfulness, and balanced nutrition, we
              aim to create a global community where self-care is a priority,
              fostering inner peace and outer strength.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#d67952] text-white font-semibold py-3 px-6 rounded-full hover:bg-[#b55e3f] transition-colors duration-300"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-center text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Our Vision
          </h2>
          <p className="text-justify text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Jogire, we believe that the path to true well-being doesn't lie
            in denial, but in conscious living. In a world overwhelmed by
            distractions, indulgences, and extremes, most people engage in bhoga
            (sensory pleasure) in a compulsive, unconscious manner—leading not
            to joy, but to roga (disease) and dissatisfaction. Gut health
            issues, mental health struggles, and spiritual confusion are on the
            rise, not because people are indulging, but because they are doing
            so without awareness. We are here to change that.
          </p>
        </div>
      </section>

      {/* The Modern Struggle Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-center text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            The Modern Struggle: Indulgence Without Awareness
          </h2>
          <p className="text-justify text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Today, our lifestyles are shaped by impulse, emotional reactivity,
            and digital overstimulation. We consume—not just food, but
            experiences, relationships, and information—in ways that disconnect
            us from ourselves. This disconnection manifests as chronic gut
            issues, anxiety, burnout, and spiritual emptiness. At the same time,
            many who turn toward spirituality are not driven by a deep, inner
            thirst for truth, but by social media trends, past traumas, or life
            setbacks. They often attempt to renounce bhoga forcefully, without
            the inner preparation to support such a shift. This leads to a cycle
            of guilt, suppression, and failure, where neither the material nor
            the spiritual path brings lasting fulfillment.
          </p>
        </div>
      </section>

      {/* Our Realization Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-center text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Our Realization: Conscious Bhoga is the Key
          </h2>
          <p className="text-justify text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Jogire, we do not see bhoga as the enemy. We see it as a
            gateway—a tool that, when approached consciously, can become a
            catalyst for personal growth, healing, and even spiritual evolution.
            We believe the solution is not repression but transformation. Rather
            than asking people to give up the world, we teach them how to live
            in the world—with clarity, balance, and awareness. We guide
            individuals to infuse consciousness into their pleasures, turning
            indulgence from a source of suffering into a path of
            self-realization.
          </p>
        </div>
      </section>

      {/* Our Founder Journey Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-center text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Our Founder’s Journey: From Suffering to Service
          </h2>
          <p className="text-justify text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our mission was born from real, lived experience. Our founder
            battled with debilitating gut health problems, mental distress, and
            a sense of spiritual disconnection. He explored every major system
            of healing—Ayurveda, Allopathy, Homeopathy, Siddha, and more—but
            found no lasting solution. It was only through a holistic lifestyle
            transformation, combining Yoga, Mindfulness, and Conscious
            Nutrition, that a miraculous shift occurred. This personal healing
            journey not only restored his health but awakened a deeper
            calling—to help others break free from similar cycles of suffering.
            Since then, Jogire has guided many individuals through their own
            healing journeys—empowering them to reclaim their health, vitality,
            and purpose.
          </p>
        </div>
      </section>

      {/* Misson in Action Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-center text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Our Mission in Action
          </h2>
          <p className="text-justify text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Jogire, we are on a mission to: Help individuals overcome gut
            health and mental well-being challenges caused by unconscious
            consumption and lifestyle habits. Support spiritual seekers who are
            struggling with forced renunciation by showing them a balanced,
            gradual, and sustainable path forward. Transform bhoga from a
            compulsive behavior into a conscious practice that fuels both
            material success and spiritual evolution. Bridge the gap between
            indulgence and enlightenment, between the worldly and the sacred.
            Promote holistic wellness through integrative practices rooted in
            ancient wisdom and adapted for modern life.
          </p>
        </div>
      </section>

      {/* Conscious Path Forward Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto ">
          <h2 className="text-center text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            A Conscious Path Forward
          </h2>
          <p className="text-justify text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We recognize that true transformation doesn't come from extreme
            practices or forced discipline—it begins with acceptance and
            awareness. We meet you where you are, and guide you gently toward
            where you want to be. At Jogire, we offer a new paradigm for health
            and spirituality—one where pleasure and purpose are not opposites,
            but partners. One where bhoga becomes a stepping stone, not a
            stumbling block. One where healing is not just physical, but
            holistic and lasting.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#d67952] mb-2">
                Authenticity
              </h3>
              <p className="text-gray-600">
                Rooted in the timeless traditions of yoga, we honor its origins
                while adapting it for today.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#d67952] mb-2">
                Empowerment
              </h3>
              <p className="text-gray-600">
                We equip individuals with tools to take charge of their health
                and happiness.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#d67952] mb-2">
                Community
              </h3>
              <p className="text-gray-600">
                Together, we grow stronger—connecting people through shared
                values and practices.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#d67952] mb-2">
                Balance
              </h3>
              <p className="text-gray-600">
                Harmony in mind, body, and spirit is the foundation of a
                fulfilling life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#d67952] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Be A Part of Our Mission
          </h2>
          <p className="text-lg mb-8 leading-relaxed">
            Join us on this conscious revolution. From compulsive bhogi to
            conscious bhogi—let’s walk this journey together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="inline-block bg-white text-[#d67952] font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-[#d67952] transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
