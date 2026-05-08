export type OassicrmmenjoiirhQuizOptionKey = 'A' | 'B' | 'C';

export type OassicrmmenjoiirhQuizQuestion = {
  id: string;
  quiz: 1 | 2 | 3 | 4 | 5;
  category: string;
  question: string;
  options: Record<OassicrmmenjoiirhQuizOptionKey, string>;
  answer: OassicrmmenjoiirhQuizOptionKey;
  explanation: string;
};

export const oassicrmmenjoiirhQuizQuestions: OassicrmmenjoiirhQuizQuestion[] = [
  {
    id: 'q1_salty',
    quiz: 1,
    category: 'OCEAN BASICS',
    question: 'Why is ocean water salty?',
    options: {
      A: 'Because of marine animals',
      B: 'Due to dissolved minerals from rocks',
      C: 'Because of sunlight evaporation',
    },
    answer: 'B',
    explanation:
      'Rainwater erodes rocks on land, carrying dissolved minerals into the ocean over millions of years.',
  },
  {
    id: 'q1_blue',
    quiz: 1,
    category: 'OCEAN BASICS',
    question: 'Why does the ocean usually appear blue?',
    options: {
      A: 'It reflects the sky only',
      B: 'Water absorbs red light and reflects blue',
      C: 'Because of algae',
    },
    answer: 'B',
    explanation:
      'Water absorbs longer wavelengths like red and reflects shorter blue wavelengths, giving the ocean its color.',
  },
  {
    id: 'q1_deepest',
    quiz: 1,
    category: 'OCEAN BASICS',
    question: 'What is the deepest part of the ocean?',
    options: {
      A: 'Mariana Trench',
      B: 'Bermuda Triangle',
      C: 'Great Barrier Reef',
    },
    answer: 'A',
    explanation: 'The Mariana Trench reaches depths of nearly 11,000 meters.',
  },
  {
    id: 'q1_waves',
    quiz: 1,
    category: 'OCEAN BASICS',
    question: 'What primarily causes ocean waves?',
    options: {
      A: 'Earthquakes',
      B: 'Wind passing over the water',
      C: 'Marine animals',
    },
    answer: 'B',
    explanation:
      'Most waves are created by wind transferring energy to the surface of the water.',
  },
  {
    id: 'q1_covered',
    quiz: 1,
    category: 'OCEAN BASICS',
    question: 'How much of Earth is covered by oceans?',
    options: {
      A: '50%',
      B: '60%',
      C: '70%',
    },
    answer: 'C',
    explanation: "Oceans cover about 71% of the Earth's surface.",
  },

  {
    id: 'q2_rip',
    quiz: 2,
    category: 'OCEAN SAFETY',
    question: 'What should you do if caught in a rip current?',
    options: {
      A: 'Swim directly toward the shore',
      B: 'Swim parallel to the shore',
      C: 'Float without moving',
    },
    answer: 'B',
    explanation:
      'Swimming parallel helps you escape the current instead of fighting against it.',
  },
  {
    id: 'q2_lifeguards',
    quiz: 2,
    category: 'OCEAN SAFETY',
    question: 'Why is it safer to swim near lifeguards?',
    options: {
      A: 'They control ocean conditions',
      B: 'They monitor safety and respond quickly',
      C: 'The water is calmer there',
    },
    answer: 'B',
    explanation:
      'Lifeguards are trained to identify risks and provide immediate assistance.',
  },
  {
    id: 'q2_red_flag',
    quiz: 2,
    category: 'OCEAN SAFETY',
    question: 'What does a red flag at the beach indicate?',
    options: {
      A: 'Ideal swimming conditions',
      B: 'Dangerous conditions',
      C: 'Cold water',
    },
    answer: 'B',
    explanation: 'A red flag signals strong currents or unsafe swimming conditions.',
  },
  {
    id: 'q2_alone',
    quiz: 2,
    category: 'OCEAN SAFETY',
    question: 'Why should you avoid swimming alone?',
    options: {
      A: 'It is less enjoyable',
      B: 'No one can help in an emergency',
      C: 'The water is deeper',
    },
    answer: 'B',
    explanation:
      'Having someone nearby significantly increases safety in case of unexpected situations.',
  },
  {
    id: 'q2_sun',
    quiz: 2,
    category: 'OCEAN SAFETY',
    question: 'When is the sun strongest at the beach?',
    options: {
      A: 'Early morning',
      B: 'Midday',
      C: 'Late evening',
    },
    answer: 'B',
    explanation: 'UV radiation is strongest between 10 AM and 4 PM.',
  },

  {
    id: 'q3_overwater',
    quiz: 3,
    category: 'LUXURY BEACHES',
    question: 'Which destination is famous for overwater villas?',
    options: {
      A: 'Maldives',
      B: 'Spain',
      C: 'Canada',
    },
    answer: 'A',
    explanation: 'The Maldives is globally known for its luxury overwater villas.',
  },
  {
    id: 'q3_pink',
    quiz: 3,
    category: 'LUXURY BEACHES',
    question: 'What gives pink sand beaches their color?',
    options: {
      A: 'Algae',
      B: 'Coral fragments',
      C: 'Minerals',
    },
    answer: 'B',
    explanation:
      'Tiny coral fragments and microorganisms create the pink color.',
  },
  {
    id: 'q3_silica',
    quiz: 3,
    category: 'LUXURY BEACHES',
    question: 'Which beach is known for ultra-white silica sand?',
    options: {
      A: 'Bondi Beach',
      B: 'Whitehaven Beach',
      C: 'Copacabana',
    },
    answer: 'B',
    explanation: 'Whitehaven Beach has sand made of nearly pure silica.',
  },
  {
    id: 'q3_luxury',
    quiz: 3,
    category: 'LUXURY BEACHES',
    question: 'What defines a luxury beach experience?',
    options: {
      A: 'Strong waves',
      B: 'Clean water, privacy, and premium services',
      C: 'Large crowds',
    },
    answer: 'B',
    explanation:
      'Luxury beaches combine natural beauty with comfort and exclusivity.',
  },
  {
    id: 'q3_exclusive',
    quiz: 3,
    category: 'LUXURY BEACHES',
    question: 'Why are remote beaches often more exclusive?',
    options: {
      A: 'They are smaller',
      B: 'They are harder to reach',
      C: 'They have no facilities',
    },
    answer: 'B',
    explanation:
      'Limited accessibility naturally reduces crowds and increases exclusivity.',
  },

  {
    id: 'q4_bio',
    quiz: 4,
    category: 'NATURAL PHENOMENA',
    question: 'What is bioluminescence?',
    options: {
      A: 'Water pollution',
      B: 'Light produced by living organisms',
      C: 'Reflection of moonlight',
    },
    answer: 'B',
    explanation:
      'Some marine organisms produce light through chemical reactions.',
  },
  {
    id: 'q4_tides',
    quiz: 4,
    category: 'NATURAL PHENOMENA',
    question: 'What primarily causes ocean tides?',
    options: {
      A: 'Wind',
      B: 'The Moon’s gravity',
      C: "Earth’s rotation",
    },
    answer: 'B',
    explanation: 'The gravitational pull of the Moon controls the rise and fall of tides.',
  },
  {
    id: 'q4_turquoise',
    quiz: 4,
    category: 'NATURAL PHENOMENA',
    question: 'Why does tropical water often appear turquoise?',
    options: {
      A: 'Pollution',
      B: 'Shallow depth and light reflection',
      C: 'Sand color only',
    },
    answer: 'B',
    explanation:
      'Sunlight reflects off light-colored sand in shallow water, creating a turquoise color.',
  },
  {
    id: 'q4_reef',
    quiz: 4,
    category: 'NATURAL PHENOMENA',
    question: 'What is a coral reef?',
    options: {
      A: 'A rock formation',
      B: 'A living ecosystem',
      C: 'A sand structure',
    },
    answer: 'B',
    explanation:
      'Coral reefs are built by living organisms and support diverse marine life.',
  },
  {
    id: 'q4_currents',
    quiz: 4,
    category: 'NATURAL PHENOMENA',
    question: 'What are ocean currents?',
    options: {
      A: 'Still water zones',
      B: 'Large moving water systems',
      C: 'Small waves',
    },
    answer: 'B',
    explanation:
      'Ocean currents transport heat, nutrients, and energy across the planet.',
  },

  {
    id: 'q5_boat',
    quiz: 5,
    category: 'TRAVEL & EXPLORATION',
    question: 'Why are some beaches only accessible by boat?',
    options: {
      A: 'There are no roads',
      B: 'Government restrictions',
      C: 'They are too small',
    },
    answer: 'A',
    explanation: 'Remote geography makes them inaccessible by land.',
  },
  {
    id: 'q5_season',
    quiz: 5,
    category: 'TRAVEL & EXPLORATION',
    question: 'What is the best season to visit tropical beaches?',
    options: {
      A: 'Rainy season',
      B: 'Dry season',
      C: 'Storm season',
    },
    answer: 'B',
    explanation: 'The dry season offers more stable weather and clear skies.',
  },
  {
    id: 'q5_snorkeling',
    quiz: 5,
    category: 'TRAVEL & EXPLORATION',
    question: 'Why is snorkeling popular in luxury destinations?',
    options: {
      A: 'It is inexpensive',
      B: 'Water clarity allows underwater visibility',
      C: 'It requires no equipment',
    },
    answer: 'B',
    explanation:
      'Clear water makes it ideal for observing marine life.',
  },
  {
    id: 'q5_private',
    quiz: 5,
    category: 'TRAVEL & EXPLORATION',
    question: 'What does a “private beach” usually mean?',
    options: {
      A: 'No public access',
      B: 'Limited or restricted access',
      C: 'Small beach size',
    },
    answer: 'B',
    explanation: 'Access is often reserved for guests or limited visitors.',
  },
  {
    id: 'q5_remote',
    quiz: 5,
    category: 'TRAVEL & EXPLORATION',
    question: 'Why do travelers seek remote destinations?',
    options: {
      A: 'Lower prices',
      B: 'Privacy and unique experiences',
      C: 'Shorter trips',
    },
    answer: 'B',
    explanation:
      'Exclusivity and authenticity define luxury travel.',
  },
];

export const oassicrmmenjoiirhShuffle = <T,>(arr: T[]) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

