export interface GalleryItem {
  id: string;
  title: string;
  category: 'DJ Events' | 'Punjabi Functions' | 'Gidda' | 'Jagrata' | 'Weddings' | 'Sound Systems' | 'Lighting Setup';
  image: string;
  description: string;
  location: string;
  featured?: boolean;
}

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  duration: string;
  description: string;
}

export const GALLERY_CATEGORIES = [
  'All',
  'DJ Events',
  'Punjabi Functions',
  'Gidda',
  'Jagrata',
  'Weddings',
  'Sound Systems',
  'Lighting Setup',
] as const;

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'High-Energy DJ Concert Night',
    category: 'DJ Events',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop',
    description: 'Electric crowd momentum with live DJ mixing and synchronized beam lights.',
    location: 'Phagwara, Punjab',
    featured: true,
  },
  {
    id: 'g-2',
    title: 'Royal Punjabi Wedding Stage',
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    description: 'Majestic wedding reception audio-visual setup with warm lighting and premium acoustics.',
    location: 'Phagwara, Punjab',
    featured: true,
  },
  {
    id: 'g-3',
    title: 'Punjabi Sangeet & Bhangra Night',
    category: 'Punjabi Functions',
    image: 'https://images.unsplash.com/photo-1583244532610-2a234e7c3eca?q=80&w=1200&auto=format&fit=crop',
    description: 'Traditional Punjabi folk beats paired with modern club bass for non-stop dancing.',
    location: 'Jalandhar - Phagwara Highway',
    featured: true,
  },
  {
    id: 'g-4',
    title: 'Heavy Bass Sound Reinforcement Array',
    category: 'Sound Systems',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop',
    description: 'Dual high-output subwoofers and mid-top cabinets delivering high SPL sound.',
    location: 'Phagwara, Punjab',
    featured: true,
  },
  {
    id: 'g-5',
    title: 'Traditional Gidda Boliyaan Performance',
    category: 'Gidda',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
    description: 'Dedicated acoustic mic balancing for authentic Punjabi ladies sangeet and Gidda.',
    location: 'Phagwara, Punjab',
    featured: false,
  },
  {
    id: 'g-6',
    title: 'Devotional Mata Ki Chowki & Jagrata',
    category: 'Jagrata',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1200&auto=format&fit=crop',
    description: 'Spiritual all-night audio arrangement with balanced vocal mics and harmonium sound.',
    location: 'Onkar Nagar, Phagwara',
    featured: false,
  },
  {
    id: 'g-7',
    title: 'Intelligent DMX Moving Heads & Lasers',
    category: 'Lighting Setup',
    image: 'https://images.unsplash.com/photo-1504680177321-2e6a879aac86?q=80&w=1200&auto=format&fit=crop',
    description: 'Sharp beam projections, laser sweeps, and haze atmosphere on the dance floor.',
    location: 'Phagwara, Punjab',
    featured: true,
  },
  {
    id: 'g-8',
    title: 'Festival Dance Arena Stage',
    category: 'DJ Events',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop',
    description: 'Dynamic light beams cutting through haze with live electronic and Punjabi drops.',
    location: 'Phagwara, Punjab',
    featured: false,
  },
  {
    id: 'g-9',
    title: 'Baraat Grand Entry Sound Unit',
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop',
    description: 'Powerful mobile sound reinforcement escorting the Baraat procession with punchy beats.',
    location: 'Phagwara, Punjab',
    featured: false,
  },
  {
    id: 'g-10',
    title: 'Cultural Jaago Night Audio Management',
    category: 'Punjabi Functions',
    image: 'https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=1200&auto=format&fit=crop',
    description: 'Lively folk Jaago ceremonies celebrated with crisp, feedback-free wireless sound.',
    location: 'Phagwara, Punjab',
    featured: false,
  },
  {
    id: 'g-11',
    title: 'Ladies Sangeet Folk Ensemble',
    category: 'Gidda',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop',
    description: 'Harmonious mic leveling capturing clap accents and authentic Punjabi lyrics.',
    location: 'Phagwara, Punjab',
    featured: false,
  },
  {
    id: 'g-12',
    title: 'Night Bhajan & Kirtan Sound Setup',
    category: 'Jagrata',
    image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1200&auto=format&fit=crop',
    description: 'Clear sound transmission throughout the marquee for devotional gatherings.',
    location: 'Phagwara, Punjab',
    featured: false,
  },
  {
    id: 'g-13',
    title: 'Class-D Amplifiers & Processing Rack',
    category: 'Sound Systems',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop',
    description: 'Reliable equipment rack featuring high-headroom power amps and digital processors.',
    location: 'Phagwara, Punjab',
    featured: false,
  },
  {
    id: 'g-14',
    title: 'Ambient Trussing & LED Wash Lighting',
    category: 'Lighting Setup',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
    description: 'RGBW par fixtures providing cinematic backdrop washes and mood transitions.',
    location: 'Phagwara, Punjab',
    featured: false,
  },
];

export const VIDEO_SHOWCASES: VideoItem[] = [
  {
    id: 'v-1',
    title: 'Grand Wedding Reception Dance Floor',
    category: 'Weddings',
    thumbnail: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop',
    duration: '03:45',
    description: 'Live DJ set drop triggering intelligent lighting and packed dance floor in Phagwara.',
  },
  {
    id: 'v-2',
    title: 'Punjabi Sangeet Live Dhol & DJ Sync',
    category: 'Punjabi Functions',
    thumbnail: 'https://images.unsplash.com/photo-1583244532610-2a234e7c3eca?q=80&w=800&auto=format&fit=crop',
    duration: '02:30',
    description: 'Synchronized live dhol beats over heavy bass Punjabi tracks that energized the crowd.',
  },
  {
    id: 'v-3',
    title: 'Mata Ki Chowki Devotional Sound Setup',
    category: 'Jagrata',
    thumbnail: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=800&auto=format&fit=crop',
    duration: '04:12',
    description: 'Pure acoustic clarity for vocalists and instruments during all-night spiritual gathering.',
  },
];
