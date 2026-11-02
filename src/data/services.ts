export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
  features: string[];
  idealFor: string;
  badge?: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'dj-services',
    slug: 'professional-dj-services',
    title: 'Professional DJ Services',
    shortDescription: 'High-energy live mixing, electrifying track transitions, and dance floor momentum tailored to your crowd.',
    fullDescription: 'Our signature DJ service brings relentless energy, versatile genre mastery, and seamless transitions to turn any gathering into a dance party. From modern Punjabi club anthems and Bollywood hits to EDM and English chartbusters, Kartik DJ curates live sets that resonate with every guest.',
    icon: 'Disc3',
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Live dynamic song mixing & beatmatching',
      'Curated playlists custom-tailored to your guests',
      'High-grade digital DJ consoles & audio interfaces',
      'Crowd engagement and energetic MC coordination',
      'Crystal-clear audio monitoring on stage'
    ],
    idealFor: 'Weddings, Receptions, Parties, Youth Festivals, College Fests',
  },
  {
    id: 'punjabi-functions',
    slug: 'punjabi-functions',
    title: 'Punjabi Functions',
    shortDescription: 'Authentic high-bass beats, live dhol sync, and folk melodies for vibrant Punjabi culture celebrations.',
    fullDescription: 'Punjabi celebrations demand unmatched bass, pristine treble, and an innate understanding of folk and modern Punjabi music. Kartik DJ specializes in Sangeet nights, Mehndi ceremonies, Shagan, and grand family gatherings with authentic Punjabi beats that keep everyone on their feet.',
    icon: 'Flame',
    badge: 'Signature',
    image: 'https://images.unsplash.com/photo-1583244532610-2a234e7c3eca?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Deep, thumping bass reproduction for Bhangra hits',
      'Coordination with live Dhol players & vocalists',
      'Extensive catalog of classic folk & trending Punjabi tracks',
      'Festive lighting matching colorful Punjabi attire',
      'Experienced sound engineering for indoor & outdoor banquet halls'
    ],
    idealFor: 'Sangeet, Mehndi, Shagan, Roka, Chooda Ceremony, Bhangra Nights',
  },
  {
    id: 'punjabi-gidda',
    slug: 'punjabi-gidda',
    title: 'Punjabi Gidda',
    shortDescription: 'Crystal-clear acoustic clarity for live boliyaan, clapping rhythm synchronization, and ladies sangeet.',
    fullDescription: 'Gidda requires specialized acoustic tuning where live singing, traditional boliyaan, dholki rhythms, and claps need to cut through without screeching feedback or muddiness. We calibrate specialized high-sensitivity microphone setups for ladies sangeet and Gidda groups.',
    icon: 'Sparkles',
    badge: 'Cultural Special',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Multi-mic arrays optimized for female vocal groups',
      'Feedback suppression algorithms for echo-prone spaces',
      'Harmonious balance of dholki, chimta, and vocal tracks',
      'Clear monitor wedges for performing artists',
      'Gentle yet vibrant atmospheric floor lighting'
    ],
    idealFor: 'Ladies Sangeet, Jaago Nights, Cultural Competitions, Family Functions',
  },
  {
    id: 'jagrata-events',
    slug: 'jagrata-events',
    title: 'Jagrata Events',
    shortDescription: 'Dedicated devotional audio engineering for Mata ki Chowki, Jagran, and night-long spiritual gatherings.',
    fullDescription: 'Spiritual events require continuous, rock-solid audio fidelity from dusk till dawn. Kartik DJ provides specialized sound systems for Jagrata, Mata ka Jagran, and Chowki setups, balancing harmonium, dholak, chorus singers, and lead vocalists with clarity and reverence.',
    icon: 'Sun',
    badge: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1200&auto=format&fit=crop',
    features: [
      'All-night continuous sound system endurance',
      'Multi-channel analog/digital mixers for live bhajan mandalis',
      'Pristine instrument balance (harmonium, octapad, dholak)',
      'High-clarity vocal microphones with minimal ambient hum',
      'Even acoustic distribution for large seated audiences'
    ],
    idealFor: 'Mata ki Chowki, Jagran, Shivratri Mahotsav, Kirtan & Bhajans',
  },
  {
    id: 'wedding-dj',
    slug: 'wedding-dj',
    title: 'Wedding DJ Setup',
    shortDescription: 'Regal audio-visual setups for Baraat, Varmala grand entries, cocktail parties, and grand receptions.',
    fullDescription: 'Your wedding is a once-in-a-lifetime occasion that deserves grand production. We design bespoke soundscapes for each milestone: romantic instrumental melodies for royal entries, booming portable Baraat sound trolleys, and high-octane reception dance floors.',
    icon: 'HeartHandshake',
    badge: 'Grand Setup',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Custom timed music cues for Bride & Groom Varmala entries',
      'Mobile high-power Baraat sound units',
      'Intelligent LED moving head lights and haze effects',
      'Wireless handheld & lapel mics for ceremonies & speeches',
      'Aesthetically concealed wiring for luxurious decor'
    ],
    idealFor: 'Baraat, Reception, Cocktail Party, Varmala, Pre-Wedding Celebrations',
  },
  {
    id: 'birthday-parties',
    slug: 'birthday-parties',
    title: 'Birthday Parties',
    shortDescription: 'Fun, vibrant, and age-adapted musical entertainment for kids, teens, and milestone birthdays.',
    fullDescription: 'From 1st birthday milestones to energetic 18th bashes and golden 50th celebrations, Kartik DJ brings upbeat rhythms, interactive party games music, and colorful dance lights to turn your birthday venue into an exhilarating zone.',
    icon: 'PartyPopper',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Age-appropriate music playlists and clean edits',
      'Dynamic RGB dance floor illumination',
      'Cake-cutting celebration sound flourishes',
      'Compact setups fitting home lawns, lounges, and banquet halls',
      'Quick sound checks and responsive volume leveling'
    ],
    idealFor: 'Milestone Birthdays, Kids Themed Parties, Teen Dances, Family Reunions',
  },
  {
    id: 'private-functions',
    slug: 'private-functions',
    title: 'Private Functions',
    shortDescription: 'Tailored audio solutions for farmhouses, home terraces, anniversaries, and private get-togethers.',
    fullDescription: 'Whether hosting an intimate anniversary dinner, pool party, or farmhouse reunion with close family and friends, we provide compact yet punchy sound and mood lighting engineered for residential and private venues without overwhelming conversational spaces.',
    icon: 'Users',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Tailored footprint systems for villas and private lawns',
      'Ambient background acoustic tuning transitioning into dance music',
      'Bluetooth & auxiliary plug-and-play guest connectivity',
      'Warm ambient lighting accents to complement home decor',
      'Discreet and polite technical on-site support'
    ],
    idealFor: 'Anniversary Dinners, Farmhouse Bashes, House Parties, Farewell Events',
  },
  {
    id: 'sound-system',
    slug: 'professional-sound-system',
    title: 'Professional Sound System',
    shortDescription: 'Heavy-duty linear array cabinets, dual subwoofers, precision digital crossovers, and power amplifiers.',
    fullDescription: 'Our sound inventory is built from industry-standard PA components, high-wattage subwoofers, mid-top cabinets, and digital sound processors engineered to produce clean, chest-thumping bass and distortion-free vocals even at high sound pressure levels.',
    icon: 'Speaker',
    badge: 'High Power',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Dual 18" high-excursion subwoofers for physical bass response',
      'Full-range dual 15" high-fidelity mid-high frequency speakers',
      'High-damping factor class-D & class-H power amplifiers',
      'Digital loudspeaker management processors (DSP)',
      'Backup power regulators and surge safety protections'
    ],
    idealFor: 'Open-Ground Rallies, Sports Days, Grand Marquees, Festival Stages',
  },
  {
    id: 'sound-management',
    slug: 'event-sound-management',
    title: 'Event Sound Management',
    shortDescription: 'Comprehensive live audio engineering, multi-zone sound distribution, and sound technicians.',
    fullDescription: 'Executing great sound for complex multi-area venues requires technical expertise. We take complete charge of event acoustic management, sound zoning (main stage, dining area, VIP lounge), multi-microphone frequency coordination, and live troubleshooting.',
    icon: 'Sliders',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Multi-zone delay speakers for consistent audio across venues',
      'RF frequency spectrum coordination for wireless microphones',
      'Dedicated on-site sound engineers throughout the program',
      'Sound level (dB) management respecting venue regulations',
      'Immediate technical redundancy for zero-downtime execution'
    ],
    idealFor: 'Corporate Conclaves, Multi-hall Weddings, Public Functions, Melas',
  },
  {
    id: 'lighting-setup',
    slug: 'music-and-lighting-setup',
    title: 'Music and Lighting Setup',
    shortDescription: 'Synchronized DMX moving heads, laser beams, LED par cans, strobe lights, and fog atmosphere.',
    fullDescription: 'Sound and light work in unison to transform an ordinary space into a spectacle. Our lighting setups feature computer-programmed DMX moving heads, sharp beam effects, vibrant LED par washes, low-lying cloud smoke machines, and dance-floor lighting.',
    icon: 'Zap',
    badge: 'Visual FX',
    image: 'https://images.unsplash.com/photo-1504680177321-2e6a879aac86?q=80&w=1200&auto=format&fit=crop',
    features: [
      'DMX computer-controlled intelligent moving head lights',
      'High-power RGBW LED Par cans for stage & wall washes',
      'Laser show units and strobe pulse effects for peak drops',
      'Low-lying dry ice fog / smoke machines for surreal entries',
      'Heavy-duty aluminum trussing and safety rigging'
    ],
    idealFor: 'Grand Weddings, Club Nights, DJ Concerts, Sangeet Dance Stages',
  },
];
