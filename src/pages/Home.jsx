import React from "react";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import Team from "../components/Team";
import FAQ from "../components/FAQ";
import TestimonialSection from "../components/TestimonialSection";

const Home = () => {
  return (
    <div className="min-h-screen text-gray-900 bg-gray-50">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-6 text-[#d67952] animate-fade-in">
          Take charge of your health with Yoga, Meditation & Aahar
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl animate-fade-in delay-200">
          Compromised, physical and mental health for job money and family
          responsibilities? Join us to make yourself a priority.
        </p>
      </section>

      {/* Carousel */}
      <section className="p-5 w-full">
        <Carousel />
      </section>

      {/* Services Section */}
      <section className="py-5 bg-white">
        {/* <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2> */}
        <div className="max-w-6xl mx-auto px-6">
          <Services />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5">
        <div className="max-w-6xl mx-auto px-6">
          <Team />
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-5 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <TestimonialSection />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5">
        <div className="max-w-6xl mx-auto px-6">
          <FAQ />
        </div>
      </section>
    </div>
  );
};

export default Home;
