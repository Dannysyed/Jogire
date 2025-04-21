import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const Gurus = () => {
  const [selectedGuru, setSelectedGuru] = useState(null);

  // Sample data for 11 gurus
  const gurus = [
    {
      id: 1,
      name: "Shiva (Adiyogi)",
      image:
        "https://jogire.s3.ap-south-1.amazonaws.com/static/aboutus/gurus/shiva.webp",
      details: `
# Shiva: The First Yogi (Adiyogi)

Shiva, the first yogi, is considered the **source of yoga**. Known as *Adiyogi*, he is credited with introducing yoga as a complete spiritual discipline that transcends physical postures and connects individuals with the ultimate reality. His teachings are deeply rooted in the idea of **self-awareness** and **liberation** from the physical and mental limitations of the world.

---

## Contributions to Yoga

- As *Adiyogi*, he is believed to have imparted the foundational knowledge of yoga to the **Saptarishis** (seven sages), who spread his teachings to various parts of the world.
- Shiva's teachings go beyond physical postures and include profound techniques for **mental discipline**, **concentration**, and **inner awakening**.
- He emphasizes the practice of **meditation**, **breath control** (*pranayama*), and the inner journey to achieving **ultimate consciousness** and **liberation** (*moksha*).
- *Adiyogi*’s philosophy connects the individual’s **inner potential** with the **universal energy**, aligning **mind**, **body**, and **spirit** in a state of balance.
- His influence on yoga practitioners and spiritual seekers remains powerful today, shaping the modern-day practice of yoga, especially in the context of **spiritual awakening** and **liberation**.

---

## Conclusion: A Global Legacy

Shiva's contributions to yoga laid the groundwork for what is now a **global movement**, with his teachings resonating with practitioners around the world, guiding them toward greater **self-awareness**, **inner peace**, and **spiritual evolution**.

---

## Final Thought

> "As *Adiyogi*, Shiva gifted humanity the eternal path of yoga—a journey to unite the self with the infinite."

His wisdom continues to illuminate the path for all seekers.
      `,
    },
    {
      id: 2,
      name: "Shakti (Adiyogini)",
      image:
        "https://jogire.s3.ap-south-1.amazonaws.com/static/aboutus/gurus/shakti.webp",
      details: `
# Shakti ( The First Student of Yoga)

## The Story: Shiva as Guru, Parvati as Student
Parvati, an incarnation of **Adi Shakti**, wished to attain the highest wisdom of yoga. She requested Shiva, the Adi Yogi (first yogi), to teach her. In response, Shiva revealed the secrets of yoga, tantra, and self-realization in what is known as the **Shiva-Parvati Samvad** (dialogue).

## This conversation is believed to be the source of texts like:

- **Vigyan Bhairav Tantra** – A collection of 112 meditation techniques given by Shiva.

- **Shiva Samhita** – A classic text on yoga philosophy and practices.

- **Rudra Yamala Tantra** – A tantric dialogue between Shiva and Parvati.
 ---
## Key Teachings from Shiva to Parvati
- Union of Shiva & Shakti

- Shiva explained that true yoga is the union of consciousness (Shiva) and energy (Shakti) within.

- The ultimate goal is to dissolve duality and realize one's divine nature.

- Kundalini Awakening

- Shiva taught that kundalini (Shakti) lies dormant at the base of the spine and must rise through the chakras to merge with Shiva at the crown.

- This leads to enlightenment and liberation.

- The 112 Meditation Techniques (Vigyan Bhairav Tantra)

- Shiva revealed simple but powerful techniques like breath awareness, mantra chanting, and focusing on inner space.

- These methods help one reach a state of samadhi (self-realization).

## Power of Mantra & Sound

- Shiva described how sound vibrations (Nada Yoga) can elevate consciousness.

- Mantras like Om Namah Shivaya and Shakti Beej Mantras hold transformative power.

- Balance of Masculine & Feminine Energies

- Shiva emphasized that yoga is not about rejecting the world but harmonizing inner and outer energies.

- He encouraged Parvati to embrace both strength (Durga) and surrender (Bhakti Yoga).
 ---
## Parvati: The First Tantra Yogini

Parvati did not just learn yoga—she embodied and practiced it, making her the **first female yogi** and tantric practitioner. She is considered the *eternal yogini*, guiding seekers through her forms like *Durga*, *Kali*, and *Lalita Tripura Sundari*.

 ---
## Final Thought
> The Shiva-Parvati dialogue represents the eternal guru-disciple tradition. Shiva is the ever-present teacher, and Parvati is the devoted seeker—just like anyone on the spiritual path.

## Guide for Spiritual Seekers

As **Tripura Sundari**, she represents the ultimate realization that everything—body, mind, and universe—is divine.

She is the eternal guru for yogis, guiding them to unite their inner Shiva (consciousness) and Shakti (energy).

## Conclusion
Parvati is more than just a goddess; she is the first yogini, a symbol of perseverance, wisdom, and ultimate self-realization. Her story teaches that yoga is not just about physical postures but a deep, transformative journey of the soul.
      `,
    },
    {
      id: 3,
      name: "Krishna",
      image:
        "https://jogire.s3.ap-south-1.amazonaws.com/static/aboutus/gurus/krishna.webp",
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
      image:
        "https://jogire.s3.ap-south-1.amazonaws.com/static/aboutus/gurus/dattatreya.webp",
      details: `
        Guru Dattatreya: The Eternal Yogi and Embodiment of Divine Wisdom

Guru Dattatreya is one of the most revered figures in India's spiritual and yogic traditions. Regarded as an embodiment of Supreme Consciousness and the Adi Guru (Primordial Teacher), he is considered the first yogi who imparted the essence of yoga to the world. His teachings offer a profound integration of philosophy, practice, and inner realization, guiding seekers on the path to liberation.

1. Embodiment of the Guru Principle
Dattatreya is known as the Guru of Gurus, representing the timeless wisdom that flows through the lineage of true spiritual masters.

One of his core teachings emphasizes that a sincere seeker can learn from everything in life. He exemplified this through his recognition of 24 Gurus, all drawn from nature and everyday life—highlighting the idea that the universe itself is a living scripture.

2. Master of Yoga and Non-Duality
Dattatreya is considered a Master of Yoga who transcended conventional teachings and inspired the Avadhuta Gita, a profound scripture of Advaita Vedanta (non-duality). This sacred text reveals the unity of the individual soul with the universal Self, and encourages:

Detachment from worldly illusions

Self-inquiry (Atma Vichara)

Direct realization of truth

His approach represents a radical freedom—beyond dogma, rituals, or religious identity.

3. Integration of the Three Yogic Paths
Guru Dattatreya’s teachings unify the three core paths of yoga:

🧠 Jnana Yoga – The path of self-knowledge and contemplation

❤ Bhakti Yoga – The path of devotion and surrender

🙌 Karma Yoga – The path of action performed without attachment

He embodies the Trimurti—Brahma (Creation), Vishnu (Preservation), and Shiva (Transformation)—representing a perfect balance of energies within the yogi's journey.

4. Nature as the Teacher: The 24 Gurus
Perhaps one of Dattatreya’s most unique contributions is his identification of 24 natural elements and beings as spiritual teachers, including:

Earth – Teaches patience and forgiveness

Wind – Reflects freedom and detachment

Fire – Symbolizes purification and transformation

Bee – Gathers only what is needed, teaching moderation

Snake – Lives alone, representing withdrawal from distraction

This reflects the yogic principle that wisdom is inherent in all life, if one remains observant and inwardly still.

5. Founder of the Avadhuta and Nath Traditions
Guru Dattatreya is regarded as the spiritual source of the Avadhuta tradition—a lineage of liberated beings who live in absolute freedom, untouched by social norms or ego.

He also inspired the Nath Sampradaya, a powerful yogic lineage that includes great masters like Matsyendranath and Gorakshanath. These traditions emphasize:

Kundalini awakening

Hatha Yoga

Mystical states of consciousness

6. The Dattatreya Yoga Shastra
The Dattatreya Yoga Shastra, a sacred text attributed to him, outlines a comprehensive yogic path. It includes the classical Ashtanga (eight limbs) of yoga:

Yama – Ethical restraints

Niyama – Personal observances

Asana – Postures

Pranayama – Breath control

Pratyahara – Sense withdrawal

Dharana – Concentration

Dhyana – Meditation

Samadhi – Absorption in the Self

This text reflects Dattatreya’s deep understanding of both practice and liberation.

7. Jivanmukti: The Path of Living Liberation
One of Dattatreya’s most profound messages is that true renunciation is internal. He taught the ideal of Jivanmukti—being liberated while living in the world.

This concept teaches that:

Spiritual life does not require withdrawal from society

Detachment comes from inner awareness, not outer conditions

Enlightenment is available here and now

His philosophy deeply resonates with modern seekers who aspire to balance spiritual depth with daily life.

Conclusion: A Timeless Beacon of Inner Freedom
Guru Dattatreya's teachings transcend time, offering a path that is as relevant today as it was thousands of years ago. He invites us to see the divine in everything, to live freely and consciously, and to realize that the ultimate guru resides within.

He is the yogi who smiles at the sky, learns from the river, and walks the earth in perfect stillness. His legacy continues to inspire all who seek truth—not through dogma, but through direct experience, humility, and inner freedom.

“Tat Tvam Asi – You are That.”
      `,
    },
    {
      id: 5,
      name: "Maharishi Patanjali",
      image:
        "https://jogire.s3.ap-south-1.amazonaws.com/static/aboutus/gurus/patanjali.webp",
      details: `
        Maharishi patanjali:

Maharshi Patanjali is regarded as the father of classical yoga due to his profound contributions to the philosophy and practice of yoga. His role in shaping yoga can be understood through the following key contributions:

1. Compilation of the Yoga Sutras
Patanjali is best known for writing the Yoga Sutras, a collection of 196 aphorisms that serve as the foundation of classical yoga.

These sutras provide a structured approach to achieving self-realization and liberation.

2. Eight Limbs of Yoga (Ashtanga Yoga)
He introduced the Ashtanga Yoga system, which consists of eight limbs:

Yama (Ethical disciplines – non-violence, truth, non-stealing, celibacy, non-possessiveness)

Niyama (Personal observances – cleanliness, contentment, self-discipline, self-study, surrender to God)

Asana (Physical postures – for body discipline and health)

Pranayama (Breath control – regulation of life energy)

Pratyahara (Withdrawal of senses – turning inward)

Dharana (Concentration – focus on a single point)

Dhyana (Meditation – continuous awareness)

Samadhi (Self-realization – union with the divine)

3. Bridging Philosophy and Practice
Patanjali’s Yoga Sutras provide a systematic approach to mental discipline and self-mastery.

He synthesized elements of earlier traditions, such as Vedic philosophy, Samkhya, and Buddhism.

4. Emphasizing the Mind’s Role in Yoga
He defined yoga as "Yogaś citta-vṛtti-nirodhaḥ" – meaning yoga is the cessation of mental fluctuations.

He taught that mastery over the mind leads to spiritual liberation.

5. Role in Therapeutic Yoga
His teachings highlight the connection between mind and body, influencing modern therapeutic yoga practices.

The integration of asanas, breath control, and meditation is now widely used for physical and mental well-being.

Legacy of Patanjali in Modern Yoga
His philosophy continues to inspire yoga practitioners worldwide.

The Yoga Sutras remain a key text in yoga teacher training and spiritual study.

Modern interpretations and commentaries help adapt his teachings to contemporary lifestyles.

Patanjali’s work transformed yoga from a loosely defined practice into a structured discipline, making it accessible for both spiritual seekers and modern wellness enthusiasts. His contribution remains a cornerstone of authentic yogic wisdom.
      `,
    },
    {
      id: 6,
      name: "Adi Shankaracharya",
      image:
        "https://jogire.s3.ap-south-1.amazonaws.com/static/aboutus/gurus/shankaracharya.webp",
      details: `
        Adi Shankaracharya: The Sage Who United Vedanta and Yoga

Adi Shankaracharya (788–820 CE) stands as one of the most influential spiritual masters in Indian history. Renowned for revitalizing Advaita Vedanta, his legacy extends beyond philosophy into the realm of practical spirituality and yoga. Through his commentaries, teachings, institutions, and travels, Shankara shaped the intellectual and spiritual foundation of Hinduism and elevated yoga from a physical discipline to a path of self-realization and liberation.

1. Revival of Advaita Vedanta: Unity of Self and Supreme
Shankara’s central teaching is Advaita (non-duality)—the assertion that Atman (individual soul) and Brahman (Supreme Reality) are one and the same. He refuted dualistic and ritualistic schools of thought and established that the material world is Maya (illusion), and that liberation (Moksha) is attained through the direct realization of the Self.

2. Integration of Yoga with Vedanta
While Shankara is primarily known for his Jnana Yoga (Path of Knowledge), he also acknowledged the role of yogic practices—particularly meditation, self-discipline, and contemplation—as essential tools to realize the truth of Advaita. He synthesized Vedantic philosophy with elements of Raja Yoga, especially in terms of internal purification and control of the mind.

He saw yoga not just as a physical practice, but as a spiritual methodology to transcend ego and realize the oneness of existence.

3. Commentary on Foundational Texts
Shankaracharya authored Bhashyas (commentaries) on key Hindu scriptures that are still considered authoritative in Advaita Vedanta:

Brahma Sutra Bhashya – Explains the role of meditation (Dhyana) and the disciplined mind (Dharana) in attaining knowledge of Brahman.

Bhagavad Gita Bhashya – Validates the importance of Bhakti Yoga, Karma Yoga, and Dhyana Yoga as stepping stones to Jnana Yoga.

Upanishadic Commentaries – Interprets core Upanishads with deep emphasis on self-inquiry and transcending Maya.

These works provide not just philosophical clarity but also practical guidance for yogic and meditative life.

4. Raja Yoga and Inner Realization
Shankara placed strong emphasis on Dhyana (meditation) and Nididhyasana (contemplation) as essential yogic disciplines:

Dharana and Dhyana – Focusing the mind to dissolve the ego and realize the non-dual self.

Manonasha – The "destruction of mind," a yogic state where identification with thought ceases.

Nididhyasana – Internalizing Advaitic truths until realization dawns.

He saw Samadhi, not as an escape from life, but as an experience of unbroken awareness of Brahman.

5. Practical Yogic Disciplines in Advaita Practice
Though not aligned with any one school of yoga, Shankara laid out a structured path of inner purification, reflecting the preparatory stages found in Patanjali's Yoga Sutras. These include:

Viveka – Discrimination between the real and unreal.

Vairagya – Detachment from transient pleasures.

Shad-Sampat – Six inner virtues, including:

Shama (tranquility)

Dama (control of senses)

Uparati (withdrawal)

Titiksha (forbearance)

Shraddha (faith)

Samadhana (mental focus)

Mumukshutva – An intense longing for liberation.

These form the fourfold qualifications (Sadhana Chatushtaya) essential for any seeker of truth.

6. Influence on Hatha Yoga and Kundalini Traditions
While Shankara did not directly practice or teach Hatha Yoga, his influence extended into the ascetic orders (Dashanami Sannyasa) he established. These orders later intersected with Nath Yogis and Tantric practitioners, contributing to the growth of Hatha Yoga and Kundalini practices.

His mystical composition Saundarya Lahari includes verses that have been interpreted as references to the awakening of Kundalini—the union of Shakti (energy) with Shiva (pure consciousness) at the Sahasrara (crown chakra).

7. Establishment of Monastic Institutions (Mathas)
Shankara institutionalized his teachings by establishing four major monastic centers (Mathas) in the four cardinal directions of India:

Sringeri Matha (South – Karnataka)

Dwarka Matha (West – Gujarat)

Jyotir Matha (North – Uttarakhand)

Puri Matha (East – Odisha)

These centers continue to promote Advaita Vedanta and serve as spiritual hubs for yogic learning and monastic life.

8. Unification of Hindu Worship (Panchayatana)
To bridge sectarian divides, Shankara introduced the Panchayatana system, advocating the worship of five deities:

Shiva

Vishnu

Shakti (Devi)

Ganesha

Surya

This approach fostered unity among various traditions while emphasizing that all deities are manifestations of the same non-dual Brahman.

9. Devotional and Philosophical Hymns
Despite his focus on knowledge, Shankara composed deeply devotional hymns, illustrating that Jnana and Bhakti are not mutually exclusive:

Bhaja Govindam – Urges renunciation and devotion to God.

Nirvana Shatakam – A poetic distillation of Advaita philosophy.

Saundarya Lahari – A blend of Tantra, devotion, and mysticism.

These hymns continue to inspire spiritual aspirants across traditions.

10. Pilgrimage and Temple Revival
Shankara undertook extensive pilgrimages across India, reviving key temples and sacred sites, including:

Kedarnath

Badrinath

Rameshwaram

Puri Jagannath

His efforts preserved Hindu worship and ensured the continuity of sacred geography in Indian spiritual life.

Conclusion: A Sage for All Times
Adi Shankaracharya was not only a philosopher and theologian but also a master of yogic insight, spiritual leadership, and cultural integration. By synthesizing Vedanta with yogic disciplines, he showed that liberation is not attained through external rites alone but through inner purification, contemplation, and direct experience of the Self.

His legacy lives on in the monastic orders, temples, scriptures, and seekers who strive to realize the truth that he declared centuries ago:

“Brahma Satyam, Jagat Mithya, Jivo Brahmaiva Na Aparah”
(Brahman alone is real, the world is illusion, the individual soul is none other than Brahman.)
      `,
    },
    {
      id: 7,
      name: "Guru Matsyendranath",
      image:
        "https://jogire.s3.ap-south-1.amazonaws.com/static/aboutus/gurus/matsyendranath.webp",
      details: `
        Guru matsyendranath:

Matsyendranath is one of the most revered figures in the history of yoga and is considered the founder of Hatha Yoga. His influence spans spiritual, philosophical, and practical aspects of yoga. Here’s a detailed look at his role:

1. Founder of Hatha Yoga Tradition
Matsyendranath is believed to have systematized and transmitted Hatha Yoga practices. He was the guru of Gorakshanath, who further spread the Nath tradition. Hatha Yoga, as he taught, focuses on physical postures, breath control, and spiritual awakening.

2. Connection to the Nath Tradition
He is regarded as the first teacher (Adi Guru) of the Nath sect, a lineage that blends Shaivism, Tantra, and Yoga. The Nath tradition emphasizes self-discipline, inner alchemy, and a balance of physical and spiritual energies.

3. Influence on Tantric Yoga
Matsyendranath integrated elements of Tantra with Hatha Yoga. His teachings emphasize the awakening of Kundalini energy and the balance of Ida and Pingala nadis (energy channels) to achieve enlightenment.

4. Author of the Kaulajñānanirnaya
This ancient text attributed to Matsyendranath contains esoteric tantric and yogic knowledge, revealing deeper aspects of the body-mind connection and spiritual transformation.

5. The Story of Matsyendranath’s Enlightenment
Legend says that he was originally a fisherman named Matsya. Lord Shiva, while secretly teaching yoga to Goddess Parvati underwater, was overheard by Matsya, who then became enlightened. This myth symbolizes his deep connection to divine wisdom and hidden yogic knowledge.

6. Matsyendrasana (Lord of the Fishes Pose)
One of the key asanas in Hatha Yoga, Ardha Matsyendrasana (Spinal Twist Pose), is named after him. This pose is associated with digestive health, spinal flexibility, and energy flow, aligning with his contributions to yogic practices.

7. Expansion of Yoga to Common People
Before Matsyendranath, yoga was largely confined to ascetics. He helped bridge the gap, making yogic wisdom more accessible to householders and spiritual seekers alike.

8. Guru-Disciple Tradition
He emphasized the importance of the Guru-Shishya parampara (teacher-student lineage), ensuring that yogic wisdom was preserved and transmitted properly.

Matsyendranath’s role in yoga is foundational, as he played a key part in shaping modern Hatha Yoga and integrating deep spiritual traditions into physical practices. His teachings continue to influence yoga practitioners worldwide.
      `,
    },
    {
      id: 8,
      name: "Guru Gorakhnath",
      image:
        "https://jogire.s3.ap-south-1.amazonaws.com/static/aboutus/gurus/gorakhnath.webp",
      details: `
        Guru gorakhnath:

Guru Gorakhnath was a seminal figure in the development of Hatha Yoga and one of the most influential Nath yogis. His teachings shaped yoga, spiritual practices, and even broader Indian philosophy. Here’s a detailed look at his role in yoga:

1. Founder of Hatha Yoga Tradition
Guru Gorakhnath is credited with organizing and systematizing Hatha Yoga, which focuses on physical postures (asanas), breathing techniques (pranayama), and bodily purification (shatkarmas) to prepare the body for higher spiritual experiences.

His disciple lineage, the Nath Sampradaya, played a crucial role in spreading these practices across India.

2. Emphasis on Kundalini Awakening
He advocated the awakening of Kundalini Shakti, the latent spiritual energy at the base of the spine.

His teachings describe siddhasanas (advanced postures), bandhas (locks), and mudras (gestures) that help in the movement of prana (life force) through the chakras.

3. Integration of Raja Yoga and Bhakti
He merged elements of Raja Yoga (mental control and meditation) with Hatha Yoga, emphasizing inner focus and spiritual discipline.

Despite his focus on yogic techniques, he also stressed devotion (Bhakti) to the divine.

4. Philosophical Contributions
His works, such as the Goraksha Samhita and Siddha Siddhanta Paddhati, discuss:

The nature of the soul and liberation (moksha).

The importance of the guru in guiding a yogi.

The six chakras and their role in spiritual awakening.

5. Popularization of Nath Sampradaya
He established the Nath tradition, which continues to influence yoga and spiritual seekers.

The Nath sect follows a strict ascetic lifestyle, with a focus on tapasya (austerity), celibacy, and renunciation.

6. Spread of Yoga Beyond Monasteries
Unlike earlier yogis who were primarily monks, Gorakhnath encouraged householders to practice yoga.

This helped in the wider transmission of yoga from esoteric practices to a more accessible discipline.

7. Practical Techniques and Teachings
He is associated with advanced yogic practices such as:

Shatkarmas (six cleansing techniques).

Pranayama (breath control) to regulate life energy.

Nada Yoga (sound meditation) as a means to spiritual elevation.

8. Influence on Later Yogic Traditions
His teachings deeply influenced medieval and modern yoga schools, including:

Swatmarama’s Hatha Yoga Pradipika (a 15th-century text on Hatha Yoga).

The integration of tantric elements into yoga practice.

The lineage of yogis practicing in the Himalayan and Nath traditions today.

Conclusion
Guru Gorakhnath was more than just a yogi—he was a spiritual reformer who shaped Hatha Yoga, blending physical discipline with spiritual depth. His teachings continue to inspire modern yogis seeking both physical well-being and spiritual enlightenment.
      `,
    },
    {
      id: 9,
      name: "Guru Maharaj (Bavan Giri)",
      image:
        "https://jogire.s3.ap-south-1.amazonaws.com/static/aboutus/gurus/gurumaharaj.webp",
      details: `
        
      `,
    },
    {
      id: 10,
      name: "Vedmurti Taponishtha Pandit Shriram Sharma Acharya",
      image:
        "https://jogire.s3.ap-south-1.amazonaws.com/static/aboutus/gurus/ptshriramacharya.webp",
      details: `
        Pandit shri ram Sharma Acharya ji :

Pandit Shri Ram Sharma Acharya (1911–1990) was a spiritual leader, social reformer, and the founder of the All World Gayatri Pariwar (AWGP). His contributions to yoga were profound, focusing on the integration of spirituality, Ayurveda, and scientific techniques to achieve holistic well-being.

His Role in Yoga:
Promoted Gayatri Yoga – He emphasized the power of Gayatri Mantra for mental and spiritual elevation, considering it a form of meditative yoga.

Developed Pragya Yoga – A unique approach blending asana (physical postures), pranayama (breath control), mantra chanting, and meditation for holistic development.

Scientific Spirituality – He bridged ancient yogic wisdom with modern science, explaining the psychological and physiological benefits of yoga in a rational way.

Self-Transformation Through Yoga – He advocated yoga as a tool for character-building, mental peace, and societal well-being.

Health & Ayurveda – He promoted yoga as a way to prevent diseases and maintain gut and mental health, aligning with Ayurvedic principles.

Mass Awareness – Through his writings, speeches, and institutions, he inspired millions to adopt yoga and meditation as part of their daily lives.

His teachings continue to influence yogic practices focused on mental clarity, spiritual awakening, and holistic health.
      `,
    },
    {
      id: 11,
      name: "& Many More",
      image:
        "https://jogire.s3.ap-south-1.amazonaws.com/static/aboutus/gurus/manymore.webp",
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

  // // Split gurus into rows
  // const rows = [
  //   gurus.slice(0, 2), // Row 1: 2 elements
  //   gurus.slice(2, 5), // Row 2: 3 elements
  //   gurus.slice(5, 9), // Row 3: 4 elements
  //   gurus.slice(9, 14), // Row 4: 5 elements (only 2 here)
  // ];

  // Split gurus into rows of 4 for consistent grid
  const rows = [];
  for (let i = 0; i < gurus.length; i += 4) {
    rows.push(gurus.slice(i, i + 4));
  }

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

        {/* Gurus Grid */}
        <div className="space-y-6">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {row.map((guru) => (
                <div
                  key={guru.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                  onClick={() => openModal(guru)}
                >
                  {/* Image Container with Fixed 16:9 Aspect Ratio */}
                  <div className="relative w-full pt-[56.25%]">
                    <img
                      src={guru.image}
                      alt={guru.name}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-medium text-gray-800">
                      {guru.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedGuru && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative max-h-[80vh] flex flex-col">
              {/* Close Button - Fixed Position */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none z-10"
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

              {/* Scrollable Content Area with Hidden Scrollbar */}
              <div className="flex-1 overflow-y-auto scrollbar-hidden">
                {/* Modal Image with 16:9 Aspect Ratio */}
                <div className="relative w-full pt-[56.25%]">
                  <img
                    src={selectedGuru.image}
                    alt={selectedGuru.name}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
                    {selectedGuru.name}
                  </h3>
                  <div className="prose max-w-prose  text-gray-700">
                    <ReactMarkdown>{selectedGuru.details}</ReactMarkdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom Scrollbar CSS */}
      <style>
        {`
          .scrollbar-hidden {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE and Edge */
          }
          .scrollbar-hidden::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Edge */
          }
        `}
      </style>
    </section>
  );
};

export default Gurus;
