import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export const FloatingActions: React.FC = () => {
  return (
    <aside aria-label="Quick contact buttons" className="fixed bottom-24 left-5 z-40 hidden sm:flex flex-col gap-3">
      {/* Floating Call Button */}
      <a
        href={SITE_CONFIG.phoneHref}
        className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-zinc-950 text-white shadow-md hover:scale-105 active:scale-95 transition-all duration-200 border border-zinc-800"
        aria-label="Call Kartik DJ"
      >
        <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
        <span className="absolute left-14 whitespace-nowrap bg-white text-zinc-900 text-xs font-medium px-3 py-1.5 rounded-lg border border-zinc-200 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Call: {SITE_CONFIG.phoneFormatted}
        </span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={SITE_CONFIG.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
        aria-label="Chat on WhatsApp with Kartik DJ"
      >
        <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="absolute left-14 whitespace-nowrap bg-white text-zinc-900 text-xs font-medium px-3 py-1.5 rounded-lg border border-zinc-200 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          WhatsApp Instant Quote
        </span>
      </a>
    </aside>
  );
};
