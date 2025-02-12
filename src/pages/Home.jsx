import React from "react";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import Team from "../components/Team";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <div className="min-h-screen text-gray-900 bg-gray-50">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-orange-500 animate-fade-in">
          Welcome to ᏠᎧᎶᎥᏒᏋ
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl animate-fade-in delay-200">
          Discover our premium services, meet our expert team, and explore our
          frequently asked questions.
        </p>
      </section>

      {/* Carousel */}
      <section className="p-2 w-full">
        <Carousel />
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>
        <div className="max-w-6xl mx-auto px-6">
          <Services />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Team />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FAQ />
        </div>
      </section>
    </div>
  );
};

export default Home;
