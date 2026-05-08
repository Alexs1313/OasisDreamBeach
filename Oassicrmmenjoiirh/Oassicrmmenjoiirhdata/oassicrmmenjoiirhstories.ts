import type {ImageSourcePropType} from 'react-native';

export type OassicrmmenjoiirhStory = {
  id: string;
  title: string;
  tag: string;
  tagline: string;
  body: string;
  readMin: number;
  image?: ImageSourcePropType;
};

export const oassicrmmenjoiirhStories: OassicrmmenjoiirhStory[] = [
  {
    id: 'endless-blue-illusion',
    title: 'The Endless Blue Illusion',
    tag: 'MIND & OCEAN',
    tagline:
      'A quiet illusion where the visible world fades into something infinite and unknown.',
    body: `At the horizon, the ocean seems to disappear into the sky, forming a perfect line of endless blue. But this illusion hides something deeper — beyond what the eye can see lies a vast, layered world of currents, temperatures, and life. The deeper you go, the darker and quieter it becomes, until light itself fades away. The ocean is not just a surface — it’s a vertical universe.`,
    readMin: 5,
    image: require('../../assets/i/ossdrmeexpempstrs1.png'),
  },
  {
    id: 'sand-that-never-heats',
    title: 'Sand That Never Heats',
    tag: 'OCEAN SCIENCE',
    tagline:
      'Not all sand absorbs the sun — some reflects it, quietly changing everything.',
    body: `On certain rare beaches, the sand stays cool even under intense sunlight. This phenomenon is caused by ultra-pure silica, which reflects heat instead of absorbing it. Walking barefoot here feels almost surreal — as if the ground itself is untouched by the sun. It’s one of those subtle details that turns a beautiful beach into a truly unforgettable experience.`,
    readMin: 4,
    image: require('../../assets/i/ossdrmeexpempstrs2.png'),
  },
  {
    id: 'ocean-that-glows',
    title: 'The Ocean That Glows at Night',
    tag: 'NIGHT OCEAN',
    tagline:
      'In certain places, the ocean does not reflect light — it creates it.',
    body: `In some parts of the world, the ocean comes alive after sunset. Tiny organisms called phytoplankton emit light when disturbed, causing waves to glow with a soft neon blue shimmer. Every step in the water leaves a trail of light, as if the sea itself is responding to your presence. It’s a quiet, almost magical reminder that nature still holds secrets.`,
    readMin: 4,
    image: require('../../assets/i/ossdrmeexpempstrs3.png'),
  },
  {
    id: 'waves-that-travel',
    title: 'Waves That Travel Across Oceans',
    tag: 'OCEAN SCIENCE',
    tagline: 'Every wave carries a story that began far beyond the horizon.',
    body: `Some waves begin their journey thousands of kilometers away, shaped by distant storms and powerful winds. By the time they reach the shore, they carry the energy of entire ocean systems. What feels like a simple wave is often the result of forces set in motion days — or even weeks — earlier. The ocean is always in motion, even when it seems calm.`,
    readMin: 6,
    image: require('../../assets/i/ossdrmeexpempstrs4.png'),
  },
  {
    id: 'sound-beneath-surface',
    title: 'The Sound Beneath the Surface',
    tag: 'MIND & OCEAN',
    tagline:
      'Silence underwater is not absence — it is a different kind of presence.',
    body: `Beneath the surface, the ocean is far from silent. It’s filled with subtle sounds — distant clicks, echoes, shifting currents, and the quiet movement of marine life. These sounds travel faster and farther underwater than in air, creating an entirely different acoustic world. When you float and listen, it feels like entering a hidden dimension.`,
    readMin: 7,
    image: require('../../assets/i/ossdrmeexpempstrs5.png'),
  },
  {
    id: 'perfect-sunset-illusion',
    title: 'The Perfect Sunset Illusion',
    tag: 'TRAVEL ART',
    tagline:
      'For a brief moment, the ocean stops being water and becomes light.',
    body: `At sunset, the ocean transforms into a mirror, reflecting the sky in shades of gold, orange, and deep violet. The horizon softens, and for a brief moment, it becomes difficult to tell where water ends and sky begins. This perfect symmetry is fleeting — lasting only minutes — but it’s enough to leave a lasting impression of calm and clarity.`,
    readMin: 5,
    image: require('../../assets/i/ossdrmeexpempstrs6.png'),
  },
];

export const oassicrmmenjoiirhGetStoryById = (id: string) => {
  return oassicrmmenjoiirhStories.find(s => s.id === id);
};
