import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
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
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { ServiceItem } from '@/data/services';
import { fadeInUp } from '@/components/animations/variants';

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

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

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, featured = false }) => {
  const IconComponent = iconMap[service.icon] || Disc3;

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={`group relative rounded-2xl overflow-hidden bg-white border flex flex-col justify-between transition-all duration-200 ${
        featured
          ? 'border-violet-300 shadow-sm ring-1 ring-violet-200/60'
          : 'border-zinc-200/90 shadow-xs hover:shadow-md hover:border-zinc-300'
      }`}
    >
      <div>
        {/* Card Image with SaaS Gradient Overlay */}
        <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-zinc-100">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* SaaS Badge */}
          {service.badge && (
            <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide uppercase bg-white/95 text-violet-700 backdrop-blur-md shadow-xs border border-violet-100">
              {service.badge}
            </div>
          )}

          {/* Floating Icon Box */}
          <div className="absolute bottom-3.5 left-4 w-10 h-10 rounded-xl bg-white border border-zinc-200/80 backdrop-blur-md flex items-center justify-center text-violet-600 shadow-sm group-hover:bg-violet-600 group-hover:text-white transition-all">
            <IconComponent className="w-5 h-5" />
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-zinc-950 tracking-tight group-hover:text-violet-600 transition-colors">
            {service.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
            {service.shortDescription}
          </p>

          {/* Key Features List */}
          <div className="mt-4 pt-3.5 border-t border-zinc-100 space-y-2">
            {service.features.slice(0, 3).map((feature, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-zinc-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-violet-600 shrink-0 mt-0.5" />
                <span className="leading-snug">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="p-5 sm:p-6 pt-0 flex items-center justify-between gap-3 border-t border-zinc-100 mt-2">
        <Link
          to={`/events?service=${encodeURIComponent(service.title)}`}
          className="text-xs font-semibold text-violet-600 hover:text-violet-800 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
        >
          <span>Select Package</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <span className="text-[11px] font-mono text-zinc-500">
          Phagwara Setup
        </span>
      </div>
    </motion.div>
  );
};
