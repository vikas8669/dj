import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Sparkles,
  Disc3,
  Flame,
  Sun,
  HeartHandshake,
  PartyPopper,
  Users,
  Speaker,
  Sliders,
  Zap,
  CheckCircle2,
  CalendarCheck,
  X,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '@/data/services';
import { SectionHeading } from '@/components/common/SectionHeading';
import { BookingCTA } from '@/components/common/BookingCTA';
import { fadeInUp, scaleIn } from '@/components/animations/variants';

const iconMap: Record<string, React.ElementType> = {
  Disc3,
  Flame,
  Sparkles,
  Sun,
  HeartHandshake,
  PartyPopper,
  Users,
  Speaker,
  Sliders,
  Zap,
};

export const ServicesPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // If URL has ?view=slug, open modal
  useEffect(() => {
    const viewParam = searchParams.get('view');
    if (viewParam) {
      const match = SERVICES_DATA.find((s) => s.slug === viewParam || s.id === viewParam);
      if (match) setSelectedService(match);
    }
  }, [searchParams]);

  const handleBookService = (serviceTitle: string) => {
    navigate(`/events?service=${encodeURIComponent(serviceTitle)}`);
  };

  return (
    <>
      <Helmet>
        <title>Professional DJ & Sound Services | Kartik DJ Phagwara</title>
        <meta
          name="description"
          content="Explore all professional DJ, sound engineering, and lighting services by Kartik DJ in Phagwara, Punjab. Weddings, Gidda, Jagrata, and private events."
        />
      </Helmet>

      {/* Services SaaS Hero Banner */}
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
              <span>Complete Audio-Visual Solutions</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 font-display tracking-tight leading-[1.15]">
              Professional Sound &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                DJ Entertainment
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto pt-1 font-normal">
              From grand Punjabi wedding receptions and intimate Gidda sessions to high-power PA systems for open grounds, discover how Kartik DJ elevates your event.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 lg:py-28 relative bg-zinc-50/60 border-b border-zinc-200/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Tailored Packages"
            title="Explore Our"
            highlightedText="Audio Setups"
            description="Select any service below to view detailed specifications, features, or immediately book for your upcoming date in Phagwara and Punjab."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => {
              const IconComp = iconMap[service.icon] || Disc3;
              return (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group relative rounded-2xl overflow-hidden bg-white border border-zinc-200 shadow-xs hover:shadow-md hover:border-zinc-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Image Header */}
                    <div className="relative h-56 w-full overflow-hidden bg-zinc-100">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {service.badge && (
                        <span className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide uppercase bg-white/95 text-violet-700 backdrop-blur-md shadow-xs border border-violet-100">
                          {service.badge}
                        </span>
                      )}

                      <div className="absolute bottom-3.5 left-4 w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-violet-600 shadow-xs group-hover:bg-violet-600 group-hover:text-white transition-all">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-zinc-950 group-hover:text-violet-600 transition-colors">
                        {service.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                        {service.shortDescription}
                      </p>

                      {/* Features */}
                      <div className="mt-4 pt-4 border-t border-zinc-100 space-y-2">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-violet-600 shrink-0 mt-0.5" />
                            <span className="leading-snug">{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Ideal For */}
                      <div className="mt-4 pt-3 border-t border-zinc-100 text-[11px] text-zinc-500">
                        <span className="text-violet-700 font-semibold">Ideal For: </span>
                        <span>{service.idealFor}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-6 pt-0 space-y-2">
                    <button
                      onClick={() => handleBookService(service.title)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold tracking-normal shadow-xs transition-all active:scale-[0.98]"
                    >
                      <CalendarCheck className="w-3.5 h-3.5" />
                      <span>Book This Setup</span>
                    </button>

                    <button
                      onClick={() => setSelectedService(service)}
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-zinc-50 hover:bg-zinc-100 text-zinc-700 hover:text-zinc-950 text-xs font-medium border border-zinc-200 transition-colors"
                    >
                      <span>View Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 text-violet-600" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm"
            />

            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="relative w-full max-w-2xl bg-white border border-zinc-200 rounded-2xl p-5 sm:p-8 z-10 shadow-xl max-h-[90dvh] overflow-y-auto"
            >
              <div className="flex items-start justify-between pb-4 border-b border-zinc-100">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-violet-700 font-semibold bg-violet-50 px-2 py-0.5 rounded border border-violet-100">
                    Kartik DJ Audio Specification
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 mt-2">
                    {selectedService.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 rounded-lg bg-zinc-100 text-zinc-500 hover:text-zinc-950"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="my-5 rounded-xl overflow-hidden aspect-video border border-zinc-200 bg-zinc-100">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 font-mono">
                  Overview & Execution
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {selectedService.fullDescription}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 font-mono mb-2">
                    Included Capabilities:
                  </h4>
                  <div className="space-y-2">
                    {selectedService.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-violet-600 shrink-0" />
                  <p className="text-xs text-zinc-600">
                    Includes full on-site sound check, cable management, audio routing, and live monitoring by Kartik DJ sound engineers.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleBookService(selectedService.title)}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-xs tracking-normal shadow-xs transition-all active:scale-[0.98]"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Book This Setup Now</span>
                </button>

                <button
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-3 rounded-lg bg-zinc-100 text-zinc-700 hover:text-zinc-950 text-xs font-medium"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <BookingCTA />
    </>
  );
};
