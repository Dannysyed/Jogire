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
        "Absolutely! JogiRe welcomes everyone, whether you're a beginner, intermediate, or advanced practitioner. Our sessions are designed to cater to all levels, with modifications and progressions to suit your needs. Our expert instructors will guide you step by step, ensuring you feel comfortable and confident on your yoga journey.",
    },
    {
      question: "Why JogiRe, and what makes it different from other platforms?",
      answer: `At JogiRe, we follow a holistic approach based on the Panchkosha Philosophy, which focuses on five layers of human existence- <ul class="list-decimal pl-6">
<li> Annamaya Kosha – Physical health through diet and movement.</li> 
<li> Pranamaya Kosha – Energy balance through breathwork.</li> 
<li> Manomaya Kosha – Mental clarity and emotional well-being.</li> 
<li> Vijnanamaya Kosha – Self-awareness and wisdom.</li>
<li> Anandamaya Kosha – Inner peace and bliss.</li> </ul>Unlike other platforms that focus only on physical fitness, JogiRe integrates yoga, breathwork, meditation, and lifestyle guidance to bring true transformation from the inside out.`,
    },
    {
      question: "What practices do you cover in your daily classes?",
      answer: `At JogiRe, we offer customized yoga practices targeting individual goals. 
Our daily classes include: <ul class="list-disc pl-6">      
<li>Asanas (Yoga Poses) – To improve strength, flexibility, and posture. </li>
<li>Pranayama (Breathwork) – To enhance energy levels and mental clarity. </li>
<li>Mindfulness – To reduce stress and improve focus. </li>
<li>Relaxation Techniques – To restore balance and inner peace. </li>
</ul>Each session provides a well-rounded yoga experience, ensuring steady progress for all levels.`,
    },
    {
      question: "Do you teach meditation?",
      answer:
        "Meditation is not just a practice—it is a state of being. At JogiRe, we prepare your body and mind to naturally enter a meditative state through yoga, breathwork, and mindfulness. Instead of forcing the mind to be still, we help you cultivate the right conditions for deep awareness and inner peace to arise effortlessly.",
    },
    {
      question:
        "What benefits can I expect as a member of the JogiRe community?",
      answer: `As a JogiRe member, you'll experience: <ul class="list-disc pl-6"> <li>Personalized Yoga Practices – Tailored to your health and wellness goals. </li>
<li>Stress Relief & Mental Clarity – Techniques to help you stay calm and focused. </li>
<li>Better Energy & Vitality – Breathwork and movement for overall well-being. </li>
<li>A Supportive Community – Connect with like-minded individuals. </li>
<li>Sustainable Wellness – Develop habits for long-term health and inner peace.</li></ul>
JogiRe is about living yoga, not just practicing it.`,
    },
    {
      question: "What is the duration of daily yoga session?",
      answer:
        "Our daily yoga sessions typically last between 45 to 60 minutes, ensuring a well-balanced practice that includes warm-up, asanas, breathwork, relaxation, and mindfulness.",
    },
    {
      question: "What is JogiRe?",
      answer:
        "JogiRe's mission is to promote sustainable wellness through a holistic approach, helping individuals become the healthiest version of themselves. We focus on yoga, balanced nutrition (Aahar), and mindful living to create lasting well-being.",
    },
    {
      question: "Where is JogiRe based?",
      answer:
        "JogiRe is based in India, the birthplace of yoga. While we primarily offer online sessions, we also conduct offline workshops, retreats, and yoga sessions in beautiful locations.",
    },
    {
      question: "How many types of yoga forms/styles do you teach?",
      answer: `At JogiRe, we teach more than 21 forms of yoga, including: <ul class="list-disc pl-6">
<li>Hatha Yoga – Traditional practice for balance, strength, and flexibility.</li>
<li>Vinyasa Yoga – Dynamic flow for mobility and endurance.</li> 
<li>Ashtanga Yoga – A structured, intense practice for strength and discipline.</li> 
</ul>We integrate various styles to create the best experience for your body, mind, and goals.`,
    },
    {
      question: "Are your coaches certified?",
      answer:
        "Yes! Our coaches are highly certified, with many holding master’s degrees and scholarly expertise in yoga and wellness. They bring years of experience and deep knowledge to guide you on your wellness journey.",
    },
    {
      question: "How much does it cost for one yoga session?",
      answer:
        "The cost varies based on the type of session: Group classes are budget-friendly and ideal for community practice. Private sessions offer personalized guidance for deeper progress. We provide flexible pricing plans to make yoga accessible to everyone. Contact us for details.",
    },
    {
      question: "How can I contact JogiRe?",
      answer: `You can reach out to us through: <ul class="list-disc pl-6">
<li>Email: [Your Email Here] </li>
<li>Phone/WhatsApp: [Your Contact Number] </li>
<li>Website: [Your Website URL] </li>
<li>Social Media: Follow us on [Instagram/Facebook/LinkedIn] for updates and insights. </li>
</ul>We'd love to hear from you and help you start your JogiRe wellness journey!`,
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
          Find answers to common questions about JogiRe.
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
                className="w-full flex justify-between items-center text-lg text-left font-semibold text-gray-800 hover:text-[#d67952] focus:outline-none focus:ring-2 focus:ring-orange-200"
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
                  openIndex === index ? "opacity-100" : "max-h-0 opacity-0"
                }`}
                style={{
                  whiteSpace: "pre-wrap",
                  height: openIndex === index ? "auto" : "0",
                }}
              >
                {openIndex === index && (
                  <p
                    className="pt-2"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
