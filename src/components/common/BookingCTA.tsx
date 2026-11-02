import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, CalendarCheck, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';
import { fadeInUp } from '@/components/animations/variants';

interface BookingCTAProps {
  className?: string;
}

export const BookingCTA: React.FC<BookingCTAProps> = ({ className = '' }) => {
  return (
    <section className={`relative overflow-hidden py-16 lg:py-24 bg-zinc-50/70 border-t border-zinc-200 ${className}`}>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white p-6 sm:p-10 lg:p-16 rounded-2xl sm:rounded-3xl border border-zinc-200 shadow-sm text-center relative overflow-hidden"
        >
          {/* Subtle top decorative pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-violet-50 text-violet-700 border border-violet-200 mb-6 shadow-xs max-w-full flex-wrap justify-center text-center">
            <Sparkles className="w-3.5 h-3.5 text-violet-600 shrink-0" />
            <span>Phagwara • Jalandhar • Across Punjab</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-950 font-display leading-[1.2] mb-5">
            Ready to Power Your Next Celebration with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
              Concert-Grade Sound?
            </span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Whether it's a high-energy Punjabi Sangeet, traditional Gidda, all-night Jagrata, or royal wedding reception, Kartik DJ provides engineered sound clarity, deep bass, and dynamic visual production.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/events"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-sm tracking-normal shadow-xs hover:shadow transition-all duration-200 active:scale-[0.98]"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Sound Setup</span>
            </Link>

            <a
              href={SITE_CONFIG.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm tracking-normal shadow-xs hover:shadow transition-all duration-200 active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Instant Quote</span>
            </a>

            <a
              href={SITE_CONFIG.phoneHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-50 text-zinc-900 font-semibold text-sm tracking-normal border border-zinc-200 shadow-xs hover:border-zinc-300 transition-all duration-200 active:scale-[0.98]"
            >
              <Phone className="w-4 h-4 text-violet-600" />
              <span>Call Direct</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500 font-mono">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              100% Sound & Generator Backup
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
              Fast 15-Min Response
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Base: Onkar Nagar, Phagwara
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
