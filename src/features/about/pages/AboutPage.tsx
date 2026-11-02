import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Sparkles,
  Flame,
  Radio,
  Sliders,
  CheckCircle2,
  MapPin,
  Cpu,
  ArrowRight,
} from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { BookingCTA } from '@/components/common/BookingCTA';
import { fadeInUp, scaleIn } from '@/components/animations/variants';

export const AboutPage: React.FC = () => {
  const equipmentList = [
    {
      category: 'Low-Frequency Reinforcement',
      name: 'High-Excursion Dual 18" Subwoofers',
      description: 'Engineered for chest-thumping bass reproduction specifically tuned for Punjabi Bhangra and modern festival tracks.',
    },
    {
      category: 'Mid-High Precision',
      name: 'Linear Array & Two-Way Cabinets',
      description: 'Pristine vocal throw and crystal-clear high frequencies reaching every corner of open grounds and banquet halls.',
    },
    {
      category: 'Amplification & Power',
      name: 'High-Headroom Class-D Amplifiers',
      description: 'Clean power delivery with thermal and surge protection guaranteeing non-stop performance through all-night Jagratas.',
    },
    {
      category: 'Acoustic Processing',
      name: 'Digital Loudspeaker Processors (DSP)',
      description: 'Real-time multi-band EQ, delay alignment, active crossovers, and limiter safeguards.',
    },
    {
      category: 'Wireless Vocal Systems',
      name: 'UHF True Diversity Wireless Microphones',
      description: 'Feedback-resistant handheld and lapel mics providing distortion-free clarity for Gidda boliyaan and wedding announcements.',
    },
    {
      category: 'Atmospheric & Visual FX',
      name: 'DMX Moving Heads, Laser Beams & Low Fog',
      description: 'Computer-synchronized lighting fixtures, stage wash pars, and dense dry ice smoke for bride/groom entrances.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Kartik DJ Phagwara</title>
        <meta
          name="description"
          content="Learn about Kartik DJ — Professional sound management, live DJ mixing, and Punjabi cultural entertainment based in Onkar Nagar, Phagwara, Punjab."
        />
      </Helmet>

      {/* 1. About SaaS Hero Banner */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-white border-b border-zinc-200/80">
        <div className="absolute inset-0 bg-saas-grid opacity-60 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-violet-50/50 rounded-full blur-3xl pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet-50 text-violet-700 border border-violet-200 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-violet-600" />
              <span>About Our Sound Brand</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 font-display tracking-tight leading-[1.15]">
              Crafting Pure Audio &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                Memorable Celebrations
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto pt-1 font-normal">
              Based in Onkar Nagar, Phagwara, Kartik DJ delivers concert-grade audio engineering, intelligent lighting, and authentic Punjabi entertainment across Punjab.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Introduction to Kartik DJ */}
      <section className="py-20 lg:py-28 relative bg-zinc-50/60 border-b border-zinc-200/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-zinc-200 shadow-md aspect-[4/3] group bg-zinc-100">
                <img
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop"
                  alt="Sound Console and DJ Deck"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-zinc-200 shadow-xs flex items-center justify-between">
                  <div className="flex items-center gap-2 text-zinc-800">
                    <MapPin className="w-4 h-4 text-violet-600" />
                    <span className="text-xs font-mono">Onkar Nagar, Phagwara, Punjab</span>
                  </div>
                  <span className="text-[11px] text-violet-600 font-bold font-mono">144401</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-5"
            >
              <SectionHeading
                align="left"
                badge="Identity & Focus"
                title="Sound is our"
                highlightedText="Engineering Passion"
                className="mb-4"
              />

              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                Kartik DJ was founded with a straightforward conviction: great sound makes an event unforgettable. An event is not just about playing songs loud; it is about proper acoustic coverage, crisp vocals where speeches and boliyaan can be heard clearly, and punchy low frequencies that invite everyone onto the dance floor.
              </p>

              <p className="text-sm sm:text-base text-zinc-500 leading-relaxed">
                We handle every event with meticulous technical preparation. From checking venue dimensions in advance to balancing frequency levels before guests arrive, our goal is to deliver zero-downtime, professional entertainment.
              </p>

              <div className="pt-2">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-zinc-200 shadow-xs">
                  <Radio className="w-5 h-5 text-violet-600 shrink-0" />
                  <p className="text-xs text-zinc-700 leading-normal">
                    Available for weddings, Sangeet, Jagrata, Gidda, birthday celebrations, and corporate gatherings throughout Phagwara, Jalandhar, Kapurthala, and nearby districts.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Brand Vision and Mission */}
      <section className="py-20 lg:py-24 relative bg-white border-b border-zinc-200/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Operational Standards"
            title="Vision &"
            highlightedText="Mission"
            description="Our core principles guide every event setup, acoustic check, and live performance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white border border-zinc-200 shadow-xs hover:shadow-md hover:border-zinc-300 transition-all relative overflow-hidden"
            >
              <div className="w-11 h-11 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600 mb-5 shadow-xs">
                <Sparkles className="w-5 h-5" />
              </div>

              <h3 className="text-xl font-bold text-zinc-950 mb-2.5">
                Our Vision
              </h3>

              <p className="text-sm text-zinc-600 leading-relaxed">
                To be Punjab's most trusted event audio production service — recognized for acoustic integrity, professional conduct, musical versatility, and celebrating regional traditions with dignity and high excitement.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white border border-zinc-200 shadow-xs hover:shadow-md hover:border-zinc-300 transition-all relative overflow-hidden"
            >
              <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-5 shadow-xs">
                <Sliders className="w-5 h-5" />
              </div>

              <h3 className="text-xl font-bold text-zinc-950 mb-2.5">
                Our Mission
              </h3>

              <p className="text-sm text-zinc-600 leading-relaxed">
                To deliver tailored audio and visual solutions for every client, using well-maintained sound hardware, customized track selection, punctual arrival, and attentive technical monitoring from sound check until the final song ends.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Punjabi Cultural Events Showcase */}
      <section className="py-20 lg:py-28 relative bg-zinc-50/70 border-b border-zinc-200/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-50 text-orange-700 border border-orange-200">
                <Flame className="w-3.5 h-3.5 text-orange-600" />
                <span>Punjab's Cultural Heritage</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight font-display leading-[1.2]">
                Punjabi Cultural{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                  Specialization
                </span>
              </h2>

              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                Punjab's folk music and festive occasions carry unique acoustic demands. When aunties and ladies gather for Gidda boliyaan, high-gain microphones with fast feedback response are required so everyone can sing freely.
              </p>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-zinc-200 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-zinc-900">
                      Gidda & Ladies Sangeet Acoustics
                    </h4>
                    <p className="text-xs text-zinc-600 mt-0.5">
                      Clear vocal capture without jarring echo, preserving the charm of live bolis and traditional claps.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-zinc-200 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-zinc-900">
                      Jaago Nights & Folk Dhol Balance
                    </h4>
                    <p className="text-xs text-zinc-600 mt-0.5">
                      Coordinated sound leveling so live acoustic dhol beats and electronic backing tracks blend seamlessly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-zinc-200 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-zinc-900">
                      All-Night Jagrata Audio Engineering
                    </h4>
                    <p className="text-xs text-zinc-600 mt-0.5">
                      Spiritual gatherings with balanced harmonium, dholak, octapad, and vocal channels for serene devotion.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-6"
            >
              <div className="relative rounded-2xl overflow-hidden border border-zinc-200 shadow-md aspect-[4/3] group bg-zinc-100">
                <img
                  src="https://images.unsplash.com/photo-1583244532610-2a234e7c3eca?q=80&w=1200&auto=format&fit=crop"
                  alt="Punjabi Cultural Dance and Celebration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Professional Equipment Showcase */}
      <section className="py-20 lg:py-28 relative bg-white border-b border-zinc-200/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Hardware Standards"
            title="Professional Equipment"
            highlightedText="Showcase"
            description="We invest in dependable, industry-recognized audio components to ensure distortion-free sound pressure and smooth performance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipmentList.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-xs hover:shadow-md hover:border-zinc-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Cpu className="w-4 h-4 text-violet-600" />
                    <span className="text-[10px] uppercase font-mono tracking-wider text-violet-700 font-semibold bg-violet-50 px-2 py-0.5 rounded border border-violet-100">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-zinc-950 mb-2">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-100 text-[11px] font-mono text-zinc-500 flex items-center justify-between">
                  <span>Tested & Calibrated</span>
                  <span className="text-violet-600 font-medium">Zero-Downtime</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Summary and Navigation */}
      <section className="py-16 relative bg-zinc-50/70">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <SectionHeading
            badge="Direct Commitment"
            title="Our Promise to"
            highlightedText="You"
            description="When you book Kartik DJ for your event in Phagwara or Punjab, you get a direct artist commitment, transparent communication, and meticulous sound support."
          />

          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold tracking-normal shadow-xs transition-all"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-zinc-200 text-zinc-800 hover:bg-zinc-50 text-xs font-semibold tracking-normal shadow-xs transition-all"
            >
              <span>Browse Event Gallery</span>
              <ArrowRight className="w-3.5 h-3.5 text-violet-600" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Contact CTA */}
      <BookingCTA />
    </>
  );
};
