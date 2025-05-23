import React from "react";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import Team from "../components/Team";
import FAQ from "../components/FAQ";
import TestimonialSection from "../components/TestimonialSection";
import TypewriterParagraph from "../components/TypewriterParagraph";

const Home = () => {
  const messages = [
    "Compromised physical and mental health for job, money, and family responsibilities? Join us to make yourself a priority.",
    "Reclaim your energy, focus, and inner peace. Your well-being matters.",
    "Start your journey from being a compulsive bhogi to a conscious bhogi.",
  ];

  return (
    <div className="min-h-screen text-gray-900 bg-gray-50">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-6 text-[#d67952] animate-fade-in">
          Take charge of your health with Yoga, Mindfulness & Aahar
        </h1>
        <TypewriterParagraph
          messages={messages}
          typingSpeed={50}
          deletingSpeed={30}
          pauseTime={5000}
          className=""
        />
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
