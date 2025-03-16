import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "I've never done yoga before—can I still join?",
      answer:
        "Tailwind CSS is a utility-first CSS framework for creating custom designs without having to leave your HTML.",
    },
    {
      question: "Why JogiRe, and what makes it different from other platforms?",
      answer:
        "You can install Tailwind CSS using npm or by including the CDN link in your project.",
    },
    {
      question: "What practices do you cover in your daily classes?",
      answer:
        "Tailwind CSS provides more flexibility for custom designs, whereas Bootstrap offers pre-built components for faster development.",
    },
    {
      question: "Do you teach meditation?",
      answer:
        "Yes, Tailwind CSS works seamlessly with React. You can install it via npm and use its utility classes in JSX.",
    },
    {
      question:
        "What benefits can I expect as a member of the JogiRe community?",
      answer:
        "Yes, Tailwind CSS works seamlessly with React. You can install it via npm and use its utility classes in JSX.",
    },
    {
      question: "What is the duration of daily yoga session?",
      answer:
        "Yes, Tailwind CSS works seamlessly with React. You can install it via npm and use its utility classes in JSX.",
    },
    {
      question: "What is JogiRe?",
      answer:
        "Yes, Tailwind CSS works seamlessly with React. You can install it via npm and use its utility classes in JSX.",
    },
    {
      question: "Where is JogiRe based?",
      answer:
        "Yes, Tailwind CSS works seamlessly with React. You can install it via npm and use its utility classes in JSX.",
    },
    {
      question: "How many types of yoga forms/styles do you teach?",
      answer:
        "Yes, Tailwind CSS works seamlessly with React. You can install it via npm and use its utility classes in JSX.",
    },
    {
      question: "Are your coaches certified?",
      answer:
        "Yes, Tailwind CSS works seamlessly with React. You can install it via npm and use its utility classes in JSX.",
    },
    {
      question: "How much does it cost for one yoga session?",
      answer:
        "Yes, Tailwind CSS works seamlessly with React. You can install it via npm and use its utility classes in JSX.",
    },
    {
      question: "How can I contact JogiRe?",
      answer:
        "Yes, Tailwind CSS works seamlessly with React. You can install it via npm and use its utility classes in JSX.",
    },
  ];

  return (
    <div className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-[#d67952]">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-gray-600 text-center mt-2">
          Find answers to common questions about Tailwind CSS.
        </p>

        {/* FAQ List */}
        <div className="mt-10 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4 last:border-none"
            >
              {/* Question Section */}
              <button
                className="w-full flex justify-between items-center text-lg font-semibold text-gray-800 hover:text-[#d67952] focus:outline-none focus:ring-2 focus:ring-orange-200"
                onClick={() => toggleAnswer(index)}
              >
                <span>{faq.question}</span>
                <span
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-[#d67952]" : ""
                  }`}
                >
                  ⌄
                </span>
              </button>

              {/* Answer Section */}
              <div
                className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {openIndex === index && <p className="pt-2">{faq.answer}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
