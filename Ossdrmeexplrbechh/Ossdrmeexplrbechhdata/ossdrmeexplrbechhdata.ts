import type {ImageSourcePropType} from 'react-native';

export type OssdrmeexplrbechhLocation = {
  id: string;
  title: string;
  country: string;
  coordinates: {lat: number; long: number};
  description: string;
  image?: ImageSourcePropType;
};

export const ossdrmeexplrbechhLocations: OssdrmeexplrbechhLocation[] = [
  {
    id: 'whitehaven-beach',
    title: 'Whitehaven Beach',
    country: 'Australia',
    coordinates: {lat: -20.282, long: 149.037},
    description:
      'Stretching across seven kilometers, Whitehaven Beach is world-renowned for its pure silica sand — so fine and bright it almost glows under the sun. The shifting tides create hypnotic swirls of white and turquoise, forming ever-changing natural patterns visible from above. The water remains calm, shallow, and impossibly clear, offering a sense of untouched serenity. Accessible only by boat, seaplane, or helicopter, this destination feels exclusive, remote, and almost otherworldly.',
    image: require('../../assets/i/ossdrmeexploc1.png'),
  },
  {
    id: 'anse-source-dargent',
    title: 'Anse Source d’Argent',
    country: 'Seychelles',
    coordinates: {lat: -4.371, long: 55.827},
    description:
      'Anse Source d’Argent is one of the most photographed beaches in the world — and for good reason. Massive, smooth granite boulders rise dramatically from the sand, sculpted over centuries into organic, almost surreal forms. Between them lie shallow pools of crystal-clear water, protected by a coral reef that keeps the ocean calm and inviting. The combination of textures, colors, and light creates an atmosphere that feels intimate, artistic, and deeply luxurious.',
    image: require('../../assets/i/ossdrmeexploc2.png'),
  },
  {
    id: 'navagio-beach',
    title: 'Navagio Beach',
    country: 'Greece',
    coordinates: {lat: 37.859, long: 20.624},
    description:
      'Hidden within towering limestone cliffs on Zakynthos Island, Navagio Beach — often called Shipwreck Beach — is one of the most dramatic coastal landscapes in the world. Its bright turquoise waters contrast sharply with the white sand and the rusted remains of a shipwreck resting at its center. Accessible only by boat, the beach feels like a secret revealed only to those who seek it. From above, the panoramic view is nothing short of cinematic.',
    image: require('../../assets/i/ossdrmeexploc3.png'),
  },
  {
    id: 'grace-bay',
    title: 'Grace Bay',
    country: 'Turks and Caicos',
    coordinates: {lat: 21.794, long: -72.185},
    description:
      'Grace Bay offers a seamless blend of natural beauty and refined luxury. Its powdery white sand stretches endlessly along calm, shallow waters protected by a barrier reef, making it one of the most tranquil swimming spots in the Caribbean. Luxury resorts line the coast discreetly, preserving the sense of openness and exclusivity. The clarity of the water is unmatched, shifting between shades of blue throughout the day.',
    image: require('../../assets/i/ossdrmeexploc4.png'),
  },
  {
    id: 'baia-do-sancho',
    title: 'Baía do Sancho',
    country: 'Brazil',
    coordinates: {lat: -3.854, long: -32.443},
    description:
      'Tucked away within the Fernando de Noronha archipelago, Baía do Sancho is a secluded paradise accessible through a narrow passage carved into the cliffs. Surrounded by lush vegetation and towering rock walls, the beach opens into a pristine stretch of golden sand and emerald-green water. Marine life thrives here, making it a dream for snorkeling. The journey to reach it only enhances the feeling of discovery and exclusivity.',
    image: require('../../assets/i/ossdrmeexploc5.png'),
  },
  {
    id: 'bora-bora-lagoon',
    title: 'Bora Bora Lagoon',
    country: 'French Polynesia',
    coordinates: {lat: -16.5, long: -151.741},
    description:
      'Bora Bora is synonymous with luxury travel. Its iconic lagoon glows in countless shades of blue, from pale aquamarine to deep sapphire. Overwater villas float gently above the water, offering direct access to the lagoon and uninterrupted views of Mount Otemanu rising in the distance. The atmosphere is calm, private, and deeply immersive — a place designed for complete escape.',
    image: require('../../assets/i/ossdrmeexploc6.png'),
  },
  {
    id: 'pink-sands-beach',
    title: 'Pink Sands Beach',
    country: 'Bahamas',
    coordinates: {lat: 25.5, long: -76.635},
    description:
      'This unique beach gets its soft pink hue from microscopic coral fragments mixed with the sand. At sunrise and sunset, the colors deepen even more, creating an almost fairy-tale atmosphere. Gentle waves and a quiet setting make it ideal for a relaxed, elegant escape.',
    image: require('../../assets/i/ossdrmeexploc7.png'),
  },
  {
    id: 'maya-bay',
    title: 'Maya Bay',
    country: 'Thailand',
    coordinates: {lat: 7.678, long: 98.766},
    description:
      'Maya Bay, enclosed by towering limestone cliffs, feels like a hidden world untouched by time. The lagoon-like setting creates calm, shallow waters that shimmer in vibrant shades of turquoise. Known globally after appearing in film, the beach retains an almost surreal beauty, especially during quieter hours when nature takes center stage.',
    image: require('../../assets/i/ossdrmeexploc8.png'),
  },
  {
    id: 'lanikai-beach',
    title: 'Lanikai Beach',
    country: 'Hawaii, USA',
    coordinates: {lat: 21.393, long: -157.715},
    description:
      'Lanikai Beach is known for its gentle, crystal-clear waters and soft, powder-like sand. Just offshore, the twin Mokulua Islands create a striking visual focal point. Sunrise here is particularly breathtaking, as warm light slowly illuminates the ocean, turning it into a glowing canvas of color.',
    image: require('../../assets/i/ossdrmeexploc9.png'),
  },
  {
    id: 'el-nido',
    title: 'El Nido',
    country: 'Palawan, Philippines',
    coordinates: {lat: 11.202, long: 119.417},
    description:
      'El Nido is a labyrinth of hidden lagoons, secret beaches, and towering limestone cliffs. Each turn reveals a new untouched corner of nature, accessible only by boat. The water here is unbelievably clear, and the scenery looks like a frame from a fantasy film.',
    image: require('../../assets/i/ossdrmeexploc10.png'),
  },
  {
    id: 'le-morne-beach',
    title: 'Le Morne Beach',
    country: 'Mauritius',
    coordinates: {lat: -20.459, long: 57.309},
    description:
      'Set against the dramatic silhouette of Le Morne Brabant mountain, this beach combines calm lagoons with powerful ocean winds. The contrast between still, shallow waters and the open ocean creates a dynamic yet balanced environment. It’s both a place of relaxation and quiet adventure.',
    image: require('../../assets/i/ossdrmeexploc11.png'),
  },
  {
    id: 'cala-macarella',
    title: 'Cala Macarella',
    country: 'Spain',
    coordinates: {lat: 39.932, long: 3.936},
    description:
      'Nestled along the coast of Menorca, Cala Macarella is a secluded cove surrounded by gentle cliffs and lush greenery. Its calm, emerald waters and soft sand create an intimate and peaceful atmosphere. The Mediterranean light adds a warm, golden tone that enhances the natural beauty of the landscape.',
    image: require('../../assets/i/ossdrmeexploc12.png'),
  },
];

export type OssdrmeexplrbechhSafetyTip = {
  id: string;
  title: string;
  body: string;
};

export const ossdrmeexplrbechhSafetyTips: OssdrmeexplrbechhSafetyTip[] = [
  {
    id: 'swim-parallel',
    title: 'Swim Parallel, Not Against',
    body: 'If caught in a current, move sideways along the shore — not directly against it.',
  },
  {
    id: 'flags',
    title: 'Respect the Flags',
    body: 'Beach flags are there for a reason. Always check them before entering the water.',
  },
  {
    id: 'conditions',
    title: 'Know Before You Go',
    body: 'Check local conditions — tides, wind, and currents can change quickly.',
  },
  {
    id: 'limits',
    title: 'Stay Within Your Limits',
    body: 'Calm water can be deceptive. Swim only as far as you feel fully in control.',
  },
  {
    id: 'solo',
    title: 'Avoid Solo Swimming',
    body: 'Even in paradise, it’s safer to have someone nearby.',
  },
  {
    id: 'tide',
    title: 'Watch the Tide',
    body: 'Incoming tides can quickly change depth and current strength.',
  },
  {
    id: 'sun',
    title: 'Protect Against the Sun',
    body: 'Use sunscreen and limit exposure — the ocean reflects UV, increasing intensity.',
  },
  {
    id: 'enter-slowly',
    title: 'Enter the Water Slowly',
    body: 'Unexpected drops or currents can occur just a few steps in.',
  },
  {
    id: 'marine-life',
    title: 'Be Aware of Marine Life',
    body: 'Avoid touching or stepping on unfamiliar sea creatures.',
  },
  {
    id: 'hydrate',
    title: 'Stay Hydrated',
    body: 'Heat and saltwater can dehydrate you faster than expected.',
  },
];

export const ossdrmeexplrbechhGetDailyIndex = (len: number) => {
  const day = Math.floor(Date.now() / (24 * 60 * 60 * 1000));
  return ((day % len) + len) % len;
};

export const ossdrmeexplrbechhGetDailySafetyTip = () => {
  return ossdrmeexplrbechhSafetyTips[
    ossdrmeexplrbechhGetDailyIndex(ossdrmeexplrbechhSafetyTips.length)
  ];
};

export const ossdrmeexplrbechhGetLocationById = (id: string) => {
  return ossdrmeexplrbechhLocations.find(l => l.id === id);
};
