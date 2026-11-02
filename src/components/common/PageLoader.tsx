import React from 'react';
import { motion } from 'framer-motion';
import { Disc3 } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export const PageLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-zinc-900">
      <div className="relative flex flex-col items-center">
        {/* Animated Turntable Vinyl */}
        <div className="relative w-20 h-20 mb-5">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
            className="w-full h-full rounded-full border border-zinc-200 bg-zinc-50 flex items-center justify-center shadow-xs"
          >
            <div className="w-14 h-14 rounded-full border border-zinc-200 flex items-center justify-center">
              <div className="w-7 h-7 rounded-full bg-violet-600 flex items-center justify-center shadow-sm">
                <Disc3 className="w-3.5 h-3.5 text-white animate-spin" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Brand Name */}
        <h2 className="text-xl font-bold tracking-tight uppercase font-display text-zinc-950 mb-1">
          {SITE_CONFIG.name}
        </h2>
        <p className="text-[11px] tracking-wider text-zinc-500 uppercase font-mono mb-4">
          Professional Sound & Entertainment • Phagwara
        </p>

        {/* Equalizer animation */}
        <div className="flex items-end gap-1 h-6">
          <span className="w-1 rounded-full bg-violet-600 animate-eq-1 h-full" />
          <span className="w-1 rounded-full bg-indigo-500 animate-eq-2 h-full" />
          <span className="w-1 rounded-full bg-blue-500 animate-eq-3 h-full" />
          <span className="w-1 rounded-full bg-violet-500 animate-eq-4 h-full" />
          <span className="w-1 rounded-full bg-emerald-500 animate-eq-5 h-full" />
        </div>
      </div>
    </div>
  );
};
