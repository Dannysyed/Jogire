import React, { useState } from "react";

const Gurus = () => {
  const [selectedGuru, setSelectedGuru] = useState(null);

  // Sample data for 11 gurus
  const gurus = [
    {
      id: 1,
      name: "Shiva (Adiyogi)",
      image:
        "https://img.atlasobscura.com/CURViHmdO7TDznACPAJZ3Oj4P23muJEIcgPbr9VDBs0/rt:fit/w:1200/q:80/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy8wOTZj/ZjY5MC1iMmZlLTQy/YzYtOGVhMi0yMWZm/M2Q2ODQwYTkyY2U2/ZjEyOTczY2ZiNDFj/ZWNfQWRpeW9naS1p/c2hhLmpwZw.jpg",
      details: `
        Shiva, the first yogi, is considered the source of yoga. Known as Adiyogi, he is credited with introducing yoga as a complete spiritual discipline that transcends physical postures and connects individuals with the ultimate reality. His teachings are deeply rooted in the idea of self-awareness and liberation from the physical and mental limitations of the world.
        
        - As Adiyogi, he is believed to have imparted the foundational knowledge of yoga to the Saptarishis (seven sages), who spread his teachings to various parts of the world.
        - Shiva's teachings go beyond physical postures and include profound techniques for mental discipline, concentration, and inner awakening.
        - He emphasizes the practice of meditation, breath control (pranayama), and the inner journey to achieving ultimate consciousness and liberation (moksha).
        - Adiyogi’s philosophy connects the individual’s inner potential with the universal energy, aligning mind, body, and spirit in a state of balance.
        - His influence on yoga practitioners and spiritual seekers remains powerful today, shaping the modern-day practice of yoga, especially in the context of spiritual awakening and liberation.
  
        Shiva's contributions to yoga laid the groundwork for what is now a global movement, with his teachings resonating with practitioners around the world, guiding them toward greater self-awareness, inner peace, and spiritual evolution.
      `,
    },
    {
      id: 2,
      name: "Shakti (Adiyogini)",
      image: "https://via.placeholder.com/300x300?text=Shakti",
      details: `
        Shakti, known as Adiyogini, is the divine feminine energy that complements Shiva’s masculine consciousness. She represents the dynamic and creative force of the universe, playing a crucial role in the manifestation of creation, balance, and transformation. Shakti's energy is integral to the practice of yoga, where she is revered as the embodiment of empowerment and transformation.
        
        - Adiyogini’s teachings emphasize the importance of harnessing the creative energy within each practitioner to bring about spiritual growth and awakening.
        - She is often associated with Kundalini energy, the dormant spiritual power that lies at the base of the spine, which, when awakened through yoga, leads to profound spiritual experiences.
        - Shakti’s influence in yoga is particularly significant in the practices of Hatha Yoga and Kundalini Yoga, where her energy is invoked to help practitioners awaken higher states of consciousness.
        - Shakti's role in yoga is to help practitioners balance the energies of the body, mind, and spirit, ensuring that their practice remains dynamic and transformative.
        - Her teachings encourage the integration of both masculine (Shiva) and feminine (Shakti) energies, promoting harmony and holistic growth in the journey toward self-realization.
  
        Shakti’s wisdom continues to inspire yogis to explore the power of their inner energies, guiding them to cultivate the strength and vitality needed for deep spiritual practice.
      `,
    },
    {
      id: 3,
      name: "Krishna",
      image:
        "https://static.wixstatic.com/media/b04f78_efaa6fad3f694c1e8af61dadc1585817~mv2.png/v1/fill/w_568,h_568,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b04f78_efaa6fad3f694c1e8af61dadc1585817~mv2.png",
      details: `
        Krishna: a yogi & a bhogi of the highest order 🧘

Krishna is a rare synthesis of yogi (one who is spiritually realized and detached) and bhogi (one who enjoys life’s pleasures), embodying the highest aspects of both.

Krishna as the Supreme Yogi:

Krishna is the ultimate Yogeshwara, the Lord of Yoga. His Bhagavad Gita discourse to Arjuna is the pinnacle of yogic wisdom, emphasizing selfless action (Karma Yoga), devotion (Bhakti Yoga), and wisdom (Jnana Yoga). He remains detached yet fully engaged in the world, acting without ego or attachment to results. His life reflects:

Equanimity in all situations – Whether as a cowherd in Vrindavan, a kingmaker in Hastinapura, or a strategist in Kurukshetra, he remains unshaken.

Mastery over body, mind, and senses – He plays, fights, loves, and leads, yet remains untouched by desire or sorrow.
Liberated while living (Jivanmukta) – Even amid worldly activities, he is established in divine consciousness.

Krishna as the Supreme Bhogi: 

While being a perfect yogi, Krishna also enjoys life’s beauty with full intensity. He is:

The divine lover ♥– His Rasa Leela with the Gopis symbolizes cosmic bliss and divine play (Lila). He enjoys love not as an attachment but as an expression of divine ecstasy.

The king of celebration – From the joy of playing the flute to the grandeur of Dwaraka, Krishna embraces life with openness and abundance.

The relisher of all rasas – He experiences the full spectrum of emotions—love, mischief, valor, compassion—without being bound by them.

Krishna: The Perfect Balance

Krishna teaches that yoga is not renunciation of life but mastery over it, and bhoga (enjoyment) is divine when it flows from wisdom and detachment. He enjoys but is never enslaved by pleasure, he detaches but never renounces responsibility. He is both the supreme ascetic and the cosmic enjoyer, proving that true spirituality is not about rejecting life but dancing through it with awareness and joy.♥🌸🕉🙏

Note: there is no bhoga without yoga
      `,
    },
    {
      id: 4,
      name: "Guru Dattatreya",
      image: "https://via.placeholder.com/300x300?text=Dattatreya",
      details: `
        Guru Dattatreya, a unique incarnation of Brahma, Vishnu, and Shiva, is revered as the guru of all gurus. His teachings focus on the holistic path of yoga, encompassing the physical, mental, and spiritual aspects of practice. Dattatreya is considered a symbol of wisdom, spiritual mastery, and the ultimate guru in the yogic tradition.
        
        - Dattatreya is believed to have had 24 gurus, each of whom imparted a unique lesson, symbolizing the idea that wisdom can be found in every aspect of life, whether in nature, animals, or human experience.
        - His teachings emphasize the importance of simplicity, humility, and surrender on the yogic path. He encourages practitioners to let go of the ego and to find wisdom in the present moment.
        - Dattatreya’s influence can be seen in many forms of yoga, especially in the integration of diverse practices such as Hatha Yoga, Kundalini Yoga, and Jnana Yoga.
        - He is also associated with the practice of silence (Mauna), teaching that true wisdom comes from within, and that silence and stillness are integral to the yogic journey.
        - His legacy as the ultimate guru who embodies all forms of knowledge continues to inspire yogis to seek inner peace and enlightenment through self-realization.
  
        Guru Dattatreya’s teachings remind practitioners that the path to self-realization requires constant learning and openness, and that wisdom is found in every moment of life.
      `,
    },
    {
      id: 5,
      name: "Maharishi Patanjali",
      image: "https://via.placeholder.com/300x300?text=Patanjali",
      details: `
        Maharishi Patanjali, the author of the Yoga Sutras, is one of the most influential figures in the history of yoga. His work, the Yoga Sutras, is a foundational text for the practice of yoga, providing a systematic approach to achieving spiritual growth and inner peace.
        
        - Patanjali codified the principles of yoga into 196 aphorisms, which remain a key reference for modern yogis. His work outlines the eightfold path of yoga (Ashtanga Yoga), which serves as a guide to ethical conduct, mental discipline, and spiritual enlightenment.
        - He emphasized the importance of mastering the mind, teaching yogis to cultivate stillness and concentration (Dhyana) in order to achieve higher states of consciousness.
        - The concept of non-attachment (Vairagya) in Patanjali’s teachings encourages practitioners to detach from the material world, thereby attaining inner freedom and spiritual liberation.
        - His contributions to pranayama (breathing techniques) and meditation are integral to the modern practice of yoga, helping yogis connect with their higher selves and reach deeper levels of consciousness.
  
        Maharishi Patanjali’s teachings continue to be a cornerstone of yoga practice worldwide, guiding both beginners and advanced practitioners in their journey toward enlightenment and self-mastery.
      `,
    },
    {
      id: 6,
      name: "Adi Shankaracharya",
      image: "https://via.placeholder.com/300x300?text=Shankaracharya",
      details: `
        Adi Shankaracharya was a profound philosopher and spiritual teacher who consolidated the Advaita Vedanta philosophy. His teachings on non-duality (Advaita) form the foundation for many modern yogic practices, particularly those focusing on self-inquiry and meditation.
        
        - Shankaracharya’s central teaching is that the ultimate reality (Brahman) is non-dual, and the individual soul (Atman) is one with this reality. This teaching is at the heart of many meditative practices in yoga.
        - He introduced the concept of “neti-neti” (not this, not this) as a tool for self-inquiry, guiding practitioners to disassociate from the ego and material world in order to experience their true, unchanging nature.
        - Shankaracharya’s influence on meditation practices is immense, as his teachings encourage deep contemplation (Dhyana) to realize the oneness of the self and the universe.
        - His commentary on the Upanishads and the Bhagavad Gita continues to inspire yogis and scholars alike, providing a philosophical and spiritual framework for modern yoga practice.
  
        Adi Shankaracharya’s teachings on non-duality and self-inquiry have had a profound impact on the development of yogic philosophy, helping seekers of all paths understand the nature of reality and consciousness.
      `,
    },
    {
      id: 7,
      name: "Guru Matsyendranath",
      image: "https://via.placeholder.com/300x300?text=Matsyendranath",
      details: `
        Guru Matsyendranath is considered the founder of Hatha Yoga and a key figure in the Nath tradition. His teachings focus on physical postures, breath control, and the awakening of spiritual energy through the practice of yoga.
        
        - Matsyendranath is credited with systematizing Hatha Yoga, a practice that emphasizes the purification of the body through asanas (postures) and pranayama (breathing techniques).
        - His teachings stress the importance of balancing the physical and spiritual aspects of yoga, helping practitioners achieve greater health, strength, and inner harmony.
        - Matsyendranath’s influence on Kundalini Yoga is also significant, as he taught techniques to awaken the dormant spiritual energy at the base of the spine.
  
        Guru Matsyendranath’s contributions to Hatha Yoga and the Nath tradition continue to guide yogis in the practice of physical postures and breath control, laying the foundation for many modern yoga practices.
      `,
    },
    {
      id: 8,
      name: "Guru Gorakhnath",
      image: "https://via.placeholder.com/300x300?text=Gorakhnath",
      details: `
        Guru Gorakhnath, a disciple of Matsyendranath, is one of the most influential figures in the Nath tradition. He is renowned for his role in advancing Hatha Yoga, particularly in the areas of breath control (pranayama) and meditation practices.
        
        - Gorakhnath's teachings on Kundalini awakening and spiritual liberation are considered pivotal in the development of yogic philosophy.
        - His practical techniques for controlling the breath and mastering the physical body remain integral to the practice of Hatha Yoga.
        - Guru Gorakhnath also emphasized the importance of meditation (Dhyana) as a means of experiencing the divine presence within, guiding yogis to cultivate inner stillness and peace.
        - His influence can be seen in various forms of yoga, especially in the practices of the Nath yogis, which blend physical discipline with deep spiritual practice.
        
        Guru Gorakhnath’s teachings continue to inspire yogis worldwide to embrace both the physical and spiritual aspects of yoga, fostering holistic health and deep spiritual awareness.
      `,
    },
    {
      id: 9,
      name: "Swami Vivekananda",
      image: "https://via.placeholder.com/300x300?text=Vivekananda",
      details: `
        Swami Vivekananda was a key figure in bringing the teachings of yoga and Vedanta to the West in the late 19th century. He is credited with popularizing the spiritual philosophy of yoga across the globe and inspiring countless people to embrace yoga for its physical, mental, and spiritual benefits.
        
        - Vivekananda's teachings emphasized the importance of self-realization, compassion, and service to humanity as integral parts of the yogic path.
        - His lecture at the 1893 Parliament of Religions in Chicago marked a turning point in the global awareness of yoga and its philosophical roots.
        - He advocated for Raja Yoga, the yoga of meditation and self-control, as a means of attaining inner peace and spiritual enlightenment.
        - His interpretation of Vedanta philosophy, particularly in his work on the nature of self and the universe, has influenced many contemporary yogic practices.
  
        Swami Vivekananda's influence has had a profound impact on the global yoga community, helping spread the spiritual message of yoga to millions and showing them how to live a life of service, devotion, and self-realization.
      `,
    },
    {
      id: 10,
      name: "Vedmurti Taponishtha Pandit Shriram Sharma Acharya",
      image: "https://via.placeholder.com/300x300?text=Shriram+Sharma",
      details: `
        Vedmurti Taponishtha Pandit Shriram Sharma Acharya was a spiritual reformer and the founder of the All World Gayatri Pariwar. His teachings focused on spiritual purification, meditation, and the power of mantras as tools for spiritual growth.
        
        - Shriram Sharma Acharya emphasized the importance of connecting with the divine through the practice of Gayatri Mantra, encouraging yogis to purify their minds and hearts through constant recitation.
        - His work also focused on the importance of moral and ethical living as part of a complete spiritual practice, and he advocated for social and cultural reform to align with yogic principles.
        - His influence on modern spiritual movements, especially in the areas of mantra meditation, continues to inspire thousands worldwide to integrate meditation and prayer into their daily lives for personal and collective transformation.
  
        Vedmurti Taponishtha Pandit Shriram Sharma Acharya’s contributions to spiritual practice and yoga remain a guiding light for many, encouraging practitioners to live a life of righteousness, devotion, and self-realization.
      `,
    },
    {
      id: 11,
      name: "& Many More",
      image: "https://via.placeholder.com/300x300?text=More",
      details: `
        The lineage of spiritual gurus is vast and includes countless sages and yogis who have shaped the course of yoga history. These teachers, whose wisdom transcends time and space, have influenced millions of seekers worldwide.
        
        - These yogis have contributed to the evolution of yoga in various forms, from meditation and mantra chanting to physical postures and ethical living.
        - They have shared their profound teachings through books, direct transmissions, and by living as examples of spiritual wisdom and discipline.
        - The collective wisdom of these countless yogis continues to guide modern practitioners on the path of self-realization and spiritual awakening.
  
        The teachings of these gurus, spanning centuries of wisdom, continue to inspire and transform the lives of yoga practitioners, helping them navigate their personal journeys toward enlightenment.
      `,
    },
  ];

  const openModal = (guru) => setSelectedGuru(guru);
  const closeModal = () => setSelectedGuru(null);

  // Split gurus into rows
  const rows = [
    gurus.slice(0, 2), // Row 1: 2 elements
    gurus.slice(2, 5), // Row 2: 3 elements
    gurus.slice(5, 9), // Row 3: 4 elements
    gurus.slice(9, 14), // Row 4: 5 elements (only 2 here)
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Us Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#d67952]">
            Our Gurus and Inspiration
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Celebrating the wisdom and inspiration of our spiritual gurus.
          </p>
        </div>

        {/* Our Gurus and Inspiration Section */}

        <div className="space-y-6">
          {/* Row 1: 2 elements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {rows[0].map((guru) => (
              <div
                key={guru.id}
                // className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 w-full"
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer w-full transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                onClick={() => openModal(guru)}
              >
                <img
                  src={guru.image}
                  alt={guru.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-medium text-gray-800">
                    {guru.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: 3 elements */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {rows[1].map((guru) => (
              <div
                key={guru.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer w-full transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                onClick={() => openModal(guru)}
              >
                <img
                  src={guru.image}
                  alt={guru.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-medium text-gray-800">
                    {guru.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Row 3: 4 elements */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {rows[2].map((guru) => (
              <div
                key={guru.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer w-full transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                onClick={() => openModal(guru)}
              >
                <img
                  src={guru.image}
                  alt={guru.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-medium text-gray-800">
                    {guru.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Row 4: 5 elements */}
          <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
            {rows[3].map((guru) => (
              <div
                key={guru.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer w-full sm:w-64 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                onClick={() => openModal(guru)}
              >
                <img
                  src={guru.image}
                  alt={guru.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-medium text-gray-800">
                    {guru.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedGuru && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative overflow-y-auto max-h-[80vh]">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <img
                src={selectedGuru.image}
                alt={selectedGuru.name}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
                  {selectedGuru.name}
                </h3>
                <div className="text-base leading-relaxed whitespace-pre-line text-gray-600">
                  {selectedGuru.details}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gurus;
