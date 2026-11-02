export const SITE_CONFIG = {
  name: 'Kartik DJ',
  tagline: 'Professional Sound & DJ Services',
  heroHeading: 'KARTIK DJ',
  heroSubheading: 'PROFESSIONAL SOUND. UNFORGETTABLE CELEBRATIONS.',
  heroDescription: 'Bringing energy, music, and unforgettable experiences to every celebration in Phagwara and beyond.',
  aboutIntroduction: 'Kartik DJ delivers concert-grade sound reinforcement, high-energy live DJ mixing, and mesmerizing intelligent lighting for Punjabi weddings, Gidda performances, Jagrata events, and celebrations.',
  
  // Contact details
  phoneRaw: '9646669649',
  phoneFormatted: '+91 96466 69649',
  phoneHref: 'tel:+919646669649',
  whatsappRaw: '919646669649',
  whatsappHref: 'https://wa.me/919646669649',
  
  // Address & Location
  address: {
    street: 'Onkar Nagar',
    city: 'Phagwara',
    state: 'Punjab',
    postalCode: '144401',
    country: 'India',
    full: 'Onkar Nagar, Phagwara, Punjab – 144401, India',
    cityRegion: 'Phagwara, Punjab, India',
  },
  
  // Google Maps Coordinates / Embed URL for Phagwara
  maps: {
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13651.139611270258!2d75.76016629738202!3d31.226757758778408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a817454845585%3A0xe5412433bb5e3b5e!2sPhagwara%2C%20Punjab%20144401!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    directionsUrl: 'https://maps.google.com/?q=Onkar+Nagar+Phagwara+Punjab+144401',
  },

  // Social Links (Real or configurable)
  socialLinks: [
    { name: 'WhatsApp', href: 'https://wa.me/919646669649', icon: 'MessageCircle' },
    { name: 'Instagram', href: 'https://instagram.com', icon: 'Instagram' },
    { name: 'Facebook', href: 'https://facebook.com', icon: 'Facebook' },
    { name: 'YouTube', href: 'https://youtube.com', icon: 'Youtube' },
  ],

  // Navigation Links
  navLinks: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Events', path: '/events' },
    { label: 'Contact', path: '/contact' },
  ],

  // SEO Defaults
  seo: {
    defaultTitle: 'Kartik DJ | Professional Sound & DJ Services | Phagwara, Punjab',
    titleTemplate: '%s | Kartik DJ Phagwara',
    defaultDescription: 'Kartik DJ offers professional DJ setups, Punjabi Functions, Gidda, Jagrata, Weddings, and premium sound systems in Onkar Nagar, Phagwara, Punjab. Contact +91 96466 69649.',
    keywords: [
      'Kartik DJ',
      'DJ in Phagwara',
      'Punjabi Wedding DJ',
      'Phagwara DJ sound system',
      'Gidda DJ Punjab',
      'Jagrata Sound Setup Phagwara',
      'Event Sound Management Punjab',
      'Kartik Sound Phagwara',
    ],
  },
} as const;
