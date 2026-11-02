export interface EventCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  serviceSlug: string;
  highlights: string[];
}

export const EVENT_CATEGORIES: EventCategory[] = [
  {
    id: 'punjabi-celebrations',
    title: 'Punjabi Celebrations',
    subtitle: 'High Energy & Cultural Roots',
    description: 'From vibrant Mehndi and Sangeet ceremonies to festive Jaago nights, we bring high-impact sound and music tuned to Punjabi culture.',
    image: 'https://images.unsplash.com/photo-1583244532610-2a234e7c3eca?q=80&w=1200&auto=format&fit=crop',
    serviceSlug: 'punjabi-functions',
    highlights: ['Deep folk & modern Punjabi music', 'Live dhol player integration', 'High SPL dance floor sound'],
  },
  {
    id: 'gidda-performances',
    title: 'Gidda Performances',
    subtitle: 'Acoustic Clarity & Rhythm Sync',
    description: 'Preserving the essence of traditional Punjabi boliyan and synchronized clapping with specialized vocal microphone placement.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
    serviceSlug: 'punjabi-gidda',
    highlights: ['Multi-mic array for vocal clarity', 'Zero acoustic feedback', 'Warm floor lighting'],
  },
  {
    id: 'jagrata-events',
    title: 'Jagrata Events',
    subtitle: 'Reverent Devotional Acoustics',
    description: 'Providing steadfast sound clarity for Mata ki Chowki, Jagran, and night-long spiritual recitals with balanced vocal and instrument levels.',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1200&auto=format&fit=crop',
    serviceSlug: 'jagrata-events',
    highlights: ['All-night endurance systems', 'Balanced harmonium & dholak mix', 'Even seating-area dispersion'],
  },
  {
    id: 'weddings',
    title: 'Weddings & Receptions',
    subtitle: 'Grand Production & Memories',
    description: 'Regal soundscapes crafted for Baraat processions, Varmala grand entrances, cocktail parties, and high-energy receptions.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    serviceSlug: 'wedding-dj',
    highlights: ['Timed entrance music cues', 'Mobile Baraat sound setups', 'Synchronized intelligent lighting'],
  },
  {
    id: 'birthday-celebrations',
    title: 'Birthday Celebrations',
    subtitle: 'Upbeat Music & Lighting',
    description: 'Custom musical entertainment for milestone birthdays and family parties with age-appropriate playlists and vibrant dance floor lighting.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
    serviceSlug: 'birthday-parties',
    highlights: ['Multi-genre dance playlists', 'RGB dynamic dance lights', 'Cake cutting sound fanfare'],
  },
  {
    id: 'private-parties',
    title: 'Private Parties',
    subtitle: 'Tailored Farmhouse & Home Sound',
    description: 'Compact yet punchy sound systems engineered for farmhouses, rooftops, and private get-togethers without overpowering conversations.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop',
    serviceSlug: 'private-functions',
    highlights: ['Compact system footprint', 'Auxiliary & wireless phone connectivity', 'Ambient evening mood lighting'],
  },
];

export interface FeaturePoint {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const WHY_CHOOSE_KARTIK_DJ: FeaturePoint[] = [
  {
    id: 'professional-sound',
    title: 'Professional Sound Setup',
    description: 'High-headroom power amplifiers, dual high-excursion subwoofers, and digital signal processors delivering crystal-clear sound with punchy bass.',
    icon: 'Speaker',
  },
  {
    id: 'music-celebration',
    title: 'Music for Every Celebration',
    description: 'From latest Punjabi club hits, timeless Bhangra, and Bollywood anthems to devotional bhajans, our music selection matches the mood.',
    icon: 'Music2',
  },
  {
    id: 'punjabi-experience',
    title: 'Punjabi Event Experience',
    description: 'Deep understanding of local cultural nuances in Phagwara and Punjab, ensuring timely musical cues for traditions like Jaago, Baraat, and Gidda.',
    icon: 'Flame',
  },
  {
    id: 'flexible-services',
    title: 'Flexible Event Services',
    description: 'Customizable sound and lighting packages tailored to venue dimensions, indoor banquet halls, outdoor open grounds, or intimate farmhouses.',
    icon: 'Layers',
  },
  {
    id: 'dedicated-support',
    title: 'Dedicated Event Support',
    description: 'On-site technical sound engineers present throughout the event to manage volume levels, microphone checks, and uninterrupted performance.',
    icon: 'Headphones',
  },
];
