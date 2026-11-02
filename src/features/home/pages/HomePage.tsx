import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  CalendarCheck,
  Disc3,
  ArrowRight,
  CheckCircle2,
  Eye,
  Sliders,
  Flame,
  Radio,
  Activity,
  ShieldCheck,
  Sparkles,
  MessageCircle,
} from 'lucide-react';

import { SITE_CONFIG } from '@/config/site';
import { SERVICES_DATA } from '@/data/services';
import { EVENT_CATEGORIES } from '@/data/events';
import { GALLERY_ITEMS } from '@/data/gallery';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ServiceCard } from '@/components/common/ServiceCard';
import { BookingCTA } from '@/components/common/BookingCTA';
import { ImageLightbox } from '@/components/common/ImageLightbox';
import { ShaderLinesCanvas } from '@/components/common/ShaderLinesCanvas';
import { ShaderBeamLine } from '@/components/common/ShaderBeamLine';
import { LayoutTextFlip } from '@/components/ui/layout-text-flip';
import { fadeInUp, staggerContainer } from '@/components/animations/variants';

export const HomePage: React.FC = () => {
  // Lightbox state for gallery preview
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Sound Mode Simulator State
  const [selectedMode, setSelectedMode] = useState<'bhangra' | 'gidda' | 'jagrata' | 'club'>('bhangra');

  const soundModes = {
    bhangra: {
      name: 'Punjabi Bhangra / Sangeet',
      bpm: '128 BPM',
      subBass: '32 Hz - 85 Hz (+6dB)',
      vocal: 'High Dynamic Vocal Spread',
      lighting: 'Full Color Moving Heads & Strobe',
      description: 'Maximum bass punch with chest-thumping low end tuned for Punjabi folk and UK Bhangra hits.',
    },
    gidda: {
      name: 'Traditional Gidda & Boliyan',
      bpm: '110 BPM',
      subBass: 'Controlled Low-End',
      vocal: 'Feedback-Shield True UHF Mics',
      lighting: 'Warm Ambient Stage Wash',
      description: 'Crystal-clear vocal reproduction so every boli and clapping rhythm is distinctly heard without acoustic feedback.',
    },
    jagrata: {
      name: 'All-Night Jagrata Devotional',
      bpm: 'Adaptive BPM',
      subBass: 'Harmonic Deep Subwoofer Alignment',
      vocal: 'Continuous Non-Stop Clarity',
      lighting: 'Serene Spiritual Amber & Gold',
      description: 'Engineered for 10+ hours continuous audio fidelity balancing live harmonium, dholak, and octapad feeds.',
    },
    club: {
      name: 'Royal Wedding Reception',
      bpm: '126 BPM',
      subBass: 'Concert-Grade Array (138 dB Peak)',
      vocal: 'Intelligent Speech Limiter',
      lighting: 'Synchronized DMX Beams & Low Fog',
      description: 'Grand ballroom and open-air acoustic immersion with club-style intelligent beam sweeps and dry-ice cloud entry.',
    },
  };

  const previewGalleryItems = GALLERY_ITEMS.slice(0, 6);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % previewGalleryItems.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + previewGalleryItems.length) % previewGalleryItems.length);
  };

  return (
    <>
      <Helmet>
        <title>Kartik DJ | Professional Sound & Live DJ Entertainment | Phagwara, Punjab</title>
        <meta name="description" content="Kartik DJ — High-performance concert-grade sound systems, live DJ mixing, and intelligent lighting for Punjabi weddings, Gidda, Jagrata, and grand celebrations in Phagwara, Punjab." />
      </Helmet>

      {/* SECTION 1: ULTRA-MODERN NEXT.JS HERO WITH ANIMATED LINE SHADERS */}
      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 bg-white border-b border-zinc-200/80 bg-radial-spotlight">
        {/* Subtle Next.js Dot Grid Pattern */}
        <div className="absolute inset-0 bg-saas-grid opacity-50 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-violet-100/50 via-indigo-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Dynamic HTML5 Canvas Line Shaders Background Wave */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-45 sm:opacity-60">
          <ShaderLinesCanvas lineCount={5} speed={0.012} interactive={true} />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            {/* Shimmer Announcement Pill */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-3.5 rounded-full text-xs font-semibold text-zinc-800 border border-violet-200/90 shadow-xs mb-6 shimmer-badge hover:border-violet-300 transition-colors max-w-full flex-wrap justify-center text-center"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="text-zinc-700 font-mono text-[11px] uppercase tracking-wider font-semibold">
                Phagwara's #1 Live Sound & DJ Production
              </span>
              <span className="hidden xs:inline text-zinc-400 font-mono">•</span>
              <span className="text-violet-700 font-medium flex items-center gap-1">
                Booking 2026/27 <ArrowRight className="w-3 h-3" />
              </span>
            </motion.div>

            {/* HERO BRAND TITLE: KARTIK DJ */}
            <motion.div variants={fadeInUp} className="relative w-full">
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight uppercase font-display leading-[0.95] text-zinc-950 break-words">
                KARTIK{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600">
                  DJ
                </span>
              </h1>
            </motion.div>

            {/* Sub-headline Badge */}
            <motion.p
              variants={fadeInUp}
              className="mt-3 text-xs sm:text-sm md:text-base font-bold uppercase tracking-widest text-zinc-700 font-mono"
            >
              Concert-Grade Sound Engineering • Live Punjabi Entertainment
            </motion.p>

            {/* Dynamic Aceternity Layout Text Flip: DJ & Sound */}
            <motion.div
              variants={fadeInUp}
              className="mt-4 flex items-center justify-center text-base sm:text-2xl md:text-3xl font-extrabold tracking-tight text-center px-2 w-full"
            >
              <LayoutTextFlip
                text="Engineered Sound & DJ For"
                words={[
                  'Grand Punjabi Weddings',
                  'High-Energy Sangeet Nights',
                  'Traditional Ladies Gidda',
                  'All-Night Devotional Jagrata',
                  'Royal Reception Celebrations',
                  'Mega Concert Stages',
                ]}
                duration={2600}
                textClassName="text-zinc-900 mr-1"
                wordsClassName="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 drop-shadow-xs"
              />
            </motion.div>

            {/* High-Fidelity Description */}
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-base sm:text-lg md:text-xl text-zinc-600 max-w-2xl font-normal leading-relaxed"
            >
              High-excursion dual 18" subwoofers, precision line array acoustic throw, and intelligent DMX moving lights. Transforming weddings, Sangeets, Gidda, and Jagratas across Phagwara and Punjab.
            </motion.p>

            {/* Next.js CTA Button Group */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto"
            >
              <Link
                to="/events"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-sm tracking-normal shadow-xs hover:shadow-md transition-all duration-200 active:scale-[0.98]"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Check Date Availability</span>
                <ArrowRight className="w-4 h-4 text-zinc-400" />
              </Link>

              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-50 text-zinc-900 font-semibold text-sm tracking-normal border border-zinc-200 shadow-xs hover:border-zinc-300 transition-all duration-200 active:scale-[0.98]"
              >
                <Disc3 className="w-4 h-4 text-violet-600" />
                <span>Explore Sound Setups</span>
              </Link>

              <a
                href={SITE_CONFIG.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-sm tracking-normal border border-emerald-200 shadow-xs transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Instant WhatsApp Quote</span>
              </a>
            </motion.div>

            {/* Metrics Trust Strip */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 w-full max-w-3xl pt-8 border-t border-zinc-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center"
            >
              <div className="p-2">
                <p className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight font-display">500+</p>
                <p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider font-mono mt-0.5">Events Powered</p>
              </div>
              <div className="p-2">
                <p className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight font-display">100%</p>
                <p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider font-mono mt-0.5">Power Redundancy</p>
              </div>
              <div className="p-2">
                <p className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight font-display">4.9 / 5</p>
                <p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider font-mono mt-0.5">Client Rating</p>
              </div>
              <div className="p-2">
                <p className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight font-display">15+ Yrs</p>
                <p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider font-mono mt-0.5">Audio Mastery</p>
              </div>
            </motion.div>
          </motion.div>

          {/* INTERACTIVE NEXT.JS AUDIO ENGINE & DSP WORKSTATION MOCKUP */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mt-12 max-w-4xl mx-auto rounded-2xl bg-white border border-zinc-200 shadow-lg p-5 sm:p-7 text-left next-card relative overflow-hidden"
          >
            {/* Top Workspace Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-100 gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center border border-violet-100 shadow-xs">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-zinc-950">Kartik DJ Sound Engine DSP Console</h3>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-violet-50 text-violet-700 border border-violet-200">
                      LIVE SIMULATION
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 font-mono">Digital Crossover Alignment • Onkar Nagar, Phagwara</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  0 dBFS Headroom Safe
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 text-zinc-700 border border-zinc-200">
                  138 dB Peak SPL
                </span>
              </div>
            </div>

            {/* Interactive Sound Mode Switcher */}
            <div className="pt-4 pb-2">
              <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2 font-semibold">
                Select Audio Acoustic Profile:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
                {(['bhangra', 'gidda', 'jagrata', 'club'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setSelectedMode(mode)}
                    className={`px-2.5 py-2 sm:px-3 rounded-lg text-[11px] sm:text-xs font-semibold text-left transition-all ${
                      selectedMode === mode
                        ? 'bg-zinc-950 text-white shadow-xs'
                        : 'bg-zinc-50 hover:bg-zinc-100 text-zinc-700 border border-zinc-200/80'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="capitalize truncate">{mode}</span>
                      {selectedMode === mode && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 ml-1" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Embedded Real-time Audio Line Shader Oscilloscope */}
            <div className="h-20 sm:h-24 w-full rounded-xl overflow-hidden bg-zinc-50/90 border border-zinc-200/90 relative my-3 shadow-inner">
              <div className="absolute top-2 left-3 z-10 flex items-center gap-2 text-[10px] font-mono text-zinc-500 font-semibold uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-600 animate-ping" />
                <span>Live Audio Shader Waveform • {soundModes[selectedMode].bpm}</span>
              </div>
              <ShaderLinesCanvas lineCount={4} speed={0.022} interactive={false} />
            </div>

            {/* Live Spec Readout for Active Sound Profile */}
            <div className="p-4 my-2 rounded-xl bg-zinc-50 border border-zinc-200/80">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-200/60">
                <span className="text-xs font-bold text-zinc-900 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-violet-600" />
                  {soundModes[selectedMode].name} Profile
                </span>
                <span className="text-xs font-mono font-bold text-violet-700 bg-violet-50 px-2 py-0.5 rounded border border-violet-100">
                  {soundModes[selectedMode].bpm}
                </span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed mb-3">
                {soundModes[selectedMode].description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-[11px] font-mono">
                <div className="p-2 rounded-lg bg-white border border-zinc-200">
                  <span className="text-zinc-500 block text-[10px]">SUB RESPONSE:</span>
                  <span className="font-semibold text-zinc-900">{soundModes[selectedMode].subBass}</span>
                </div>
                <div className="p-2 rounded-lg bg-white border border-zinc-200">
                  <span className="text-zinc-500 block text-[10px]">VOCAL DISPERSION:</span>
                  <span className="font-semibold text-zinc-900">{soundModes[selectedMode].vocal}</span>
                </div>
                <div className="p-2 rounded-lg bg-white border border-zinc-200">
                  <span className="text-zinc-500 block text-[10px]">DMX LIGHTING SYNC:</span>
                  <span className="font-semibold text-zinc-900">{soundModes[selectedMode].lighting}</span>
                </div>
              </div>
            </div>

            {/* Equalizer Visualizer Strip */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                <Radio className="w-3.5 h-3.5 text-violet-600 animate-pulse" />
                <span>Real-Time Phase & Frequency Sweep</span>
              </div>
              <div className="flex items-end gap-1 h-5 px-1">
                <span className="w-1.5 rounded-full bg-violet-600 animate-eq-1 h-full" />
                <span className="w-1.5 rounded-full bg-indigo-500 animate-eq-2 h-full" />
                <span className="w-1.5 rounded-full bg-blue-500 animate-eq-3 h-full" />
                <span className="w-1.5 rounded-full bg-violet-500 animate-eq-4 h-full" />
                <span className="w-1.5 rounded-full bg-cyan-500 animate-eq-5 h-full" />
                <span className="w-1.5 rounded-full bg-emerald-500 animate-eq-2 h-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: NEXT.JS HIGH-END BENTO GRID WITH LINE SHADERS */}
      <section className="py-20 lg:py-28 relative bg-zinc-50/70 border-b border-zinc-200/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Engineering Excellence"
            title="Engineered for"
            highlightedText="Flawless Production"
            description="Unlike ordinary DJ operators, Kartik DJ treats every venue as an acoustic project with calibrated subwoofers, precision sound zoning, and clean technical management."
          />

          {/* Asymmetrical Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
            {/* Bento 1: Large Concert-Grade Audio Architecture (8 cols) with Live Line Shader */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-12 lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between next-card relative overflow-hidden"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono uppercase font-semibold bg-violet-50 text-violet-700 border border-violet-100">
                    Acoustic Core
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">138 dB Continuous SPL</span>
                </div>
                <h3 className="text-2xl font-bold text-zinc-950 font-display">
                  Dual 18" High-Excursion Subwoofer Arrays
                </h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed max-w-xl">
                  Engineered specifically for heavy Punjabi folk, dhol beats, and festival drops. Class-D amplification ensures thunderous low end without distortion, overheating, or circuit trips.
                </p>

                {/* Subwoofer Acoustic Line Shader Simulation */}
                <div className="mt-5 h-16 w-full rounded-xl overflow-hidden bg-zinc-50 border border-zinc-200/80 relative">
                  <div className="absolute top-2 left-3 z-10 text-[10px] font-mono text-zinc-400">
                    SUB HARMONIC SPECTRUM (30 Hz - 90 Hz)
                  </div>
                  <ShaderLinesCanvas lineCount={3} speed={0.018} interactive={false} />
                </div>

                {/* Micro Visualizer */}
                <div className="mt-4 p-3.5 sm:p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-xs font-mono">
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase">Cabinet Type</span>
                    <p className="font-semibold text-zinc-900 mt-0.5">Folded Horn & Bass Reflex</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase">Frequency Range</span>
                    <p className="font-semibold text-zinc-900 mt-0.5">30 Hz – 18 kHz Flat</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase">Vocal Throw</span>
                    <p className="font-semibold text-zinc-900 mt-0.5">Up to 150 Meters</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase">DSP Protection</span>
                    <p className="font-semibold text-zinc-900 mt-0.5">Active RMS Limiter</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500">Phagwara Local Technical Fleet</span>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-600 hover:text-violet-800"
                >
                  <span>Read Equipment Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Bento 2: Fast Date Availability Widget (4 cols) */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-12 lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-white border border-violet-200 shadow-xs flex flex-col justify-between next-card ring-1 ring-violet-100"
            >
              <div>
                <span className="text-[11px] uppercase font-mono tracking-wider text-violet-700 font-semibold bg-violet-50 px-2.5 py-1 rounded border border-violet-100 inline-block mb-3">
                  Direct Reservation
                </span>
                <h3 className="text-xl font-bold text-zinc-950">
                  Instant Availability Check
                </h3>
                <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                  Dates fill rapidly for November to March Punjabi wedding seasons. Lock in your preferred audio scale today.
                </p>

                <div className="mt-4 p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-500">Base Hub:</span>
                    <span className="font-semibold text-zinc-900">Onkar Nagar, Phagwara</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-500">Direct Contact:</span>
                    <span className="font-mono font-semibold text-zinc-900">+91 96466 69649</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-500">Coverage:</span>
                    <span className="font-semibold text-emerald-700">Phagwara, Jalandhar & Punjab</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  to="/events"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-xs tracking-normal shadow-xs transition-all active:scale-[0.98]"
                >
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span>Reserve Your Date</span>
                </Link>
              </div>
            </motion.div>

            {/* Bento 3: Intelligent DMX Moving Head Lighting (4 cols) */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-6 lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-white border border-zinc-200 shadow-xs hover:shadow-md transition-all next-card"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950">
                Synchronized DMX Lighting & FX
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Computer-programmed beam moving heads, high-output LED wash pars, strobe bursts, and dense dry-ice low fog for royal bridal & groom entries.
              </p>
            </motion.div>

            {/* Bento 4: Cultural Punjabi Nuance (4 cols) */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-6 lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-white border border-zinc-200 shadow-xs hover:shadow-md transition-all next-card"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-4">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950">
                Cultural Punjabi Mastery
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Dedicated microphone tuning for Ladies Gidda boliyan without howling feedback, seamless acoustic dhol leveling, and soulful Jagrata devotion.
              </p>
            </motion.div>

            {/* Bento 5: 100% Zero-Downtime Guarantee (4 cols) */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-12 lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-white border border-zinc-200 shadow-xs hover:shadow-md transition-all next-card"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950">
                Zero-Downtime Technical Rig
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Dual digital mixer consoles on standby, isolated surge suppression, and dual generator hookups guaranteeing your party never stops mid-song.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SIGNATURE SOUND PACKAGES CATALOG */}
      <section className="py-20 lg:py-28 relative bg-white border-b border-zinc-200/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Sound Services"
            title="Curated Sound"
            highlightedText="Packages"
            description="From intimate family sangeets to 1,000+ guest grand resort weddings, select the package engineered for your celebration."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES_DATA.slice(0, 6).map((service, idx) => (
              <ServiceCard key={service.id} service={service} featured={idx === 0 || idx === 1} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 text-zinc-800 text-xs font-semibold tracking-normal transition-all shadow-xs"
            >
              <span>Explore All 10 Sound Setups</span>
              <ArrowRight className="w-4 h-4 text-violet-600" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: EVENT CATEGORIES WITH HIGH-FIDELITY BADGES */}
      <section className="py-20 lg:py-28 relative bg-zinc-50/60 border-b border-zinc-200/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Celebration Types"
            title="Celebration"
            highlightedText="Categories"
            description="Explore how Kartik DJ tailors frequency balance, musical playlists, and stage lighting to match your event's exact mood."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVENT_CATEGORIES.map((cat) => (
              <motion.div
                key={cat.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden bg-white border border-zinc-200/90 shadow-xs hover:shadow-md hover:border-zinc-300 transition-all flex flex-col justify-between next-card"
              >
                <div className="relative h-48 w-full overflow-hidden bg-zinc-100">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-wider text-zinc-900 bg-white/95 px-2.5 py-1 rounded-md backdrop-blur-md border border-zinc-200 shadow-xs font-semibold">
                    {cat.subtitle}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-zinc-950 group-hover:text-violet-600 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-zinc-100 space-y-1.5">
                    {cat.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-violet-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to={`/events?service=${encodeURIComponent(cat.title)}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-zinc-50 hover:bg-zinc-100 text-xs font-semibold text-zinc-900 border border-zinc-200 transition-all shadow-xs"
                  >
                    <span>Book For {cat.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-violet-600" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: GALLERY SHOWCASE */}
      <section className="py-20 lg:py-28 relative bg-white border-b border-zinc-200/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet-50 text-violet-700 border border-violet-200/80 mb-3">
                <Eye className="w-3.5 h-3.5 text-violet-600" />
                <span>Visual Moments</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 font-display">
                Event{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                  Gallery
                </span>
              </h2>
            </div>

            <Link
              to="/gallery"
              className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-xs font-semibold text-violet-600 hover:text-violet-800 group"
            >
              <span>View Complete Gallery</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Grid with Lightbox Triggers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewGalleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => openLightbox(index)}
                className="group relative rounded-2xl overflow-hidden bg-white border border-zinc-200 aspect-[4/3] cursor-pointer shadow-xs hover:shadow-md transition-all next-card"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-violet-300 font-semibold">
                    {item.category}
                  </span>
                  <h4 className="text-base font-bold truncate">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-200 truncate mt-0.5">
                    {item.location}
                  </p>
                </div>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200 flex items-center justify-center text-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <Eye className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CONVERSION BOOKING CTA */}
      <BookingCTA />

      {/* Image Lightbox */}
      <ImageLightbox
        isOpen={lightboxOpen}
        currentIndex={selectedImageIndex}
        items={previewGalleryItems}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
};
