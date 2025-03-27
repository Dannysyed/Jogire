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
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
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
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Our Vision
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We envision a world where every individual thrives in harmony with
            their mind, body, and spirit. By spreading the transformative power
            of yoga and mindfulness, we strive to build a healthier, more
            connected planet—one person, one practice at a time.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
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
            Be Part of Our Mission
          </h2>
          <p className="text-lg mb-8 leading-relaxed">
            Whether you're new to yoga or a seasoned practitioner, join us in
            spreading wellness and positivity. Let’s create a ripple effect of
            change together.
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
