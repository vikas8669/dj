import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/components/animations/variants';
import { Sparkles } from 'lucide-react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightedText?: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlightedText,
  description,
  align = 'center',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`mb-10 md:mb-14 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet-50 text-violet-700 border border-violet-200/80 mb-3.5 shadow-xs ${isCenter ? 'mx-auto' : ''}`}>
          <Sparkles className="w-3.5 h-3.5 text-violet-600" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-950 font-display leading-[1.2]">
        {title}{' '}
        {highlightedText && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
            {highlightedText}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-3.5 text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
          {description}
        </p>
      )}

      {/* Decorative clean SaaS accent bar */}
      <div className={`flex items-center gap-1.5 mt-4 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="w-10 h-1 rounded-full bg-violet-600" />
        <div className="w-2 h-1 rounded-full bg-indigo-400" />
        <div className="w-2 h-1 rounded-full bg-zinc-200" />
      </div>
    </motion.div>
  );
};
