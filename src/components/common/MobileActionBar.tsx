import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export const MobileActionBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-zinc-200 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-lg">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={SITE_CONFIG.phoneHref}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-800 active:bg-zinc-100 transition-colors"
        >
          <Phone className="w-4 h-4 text-violet-600 mb-0.5" />
          <span className="text-[11px] font-medium">Call Us</span>
        </a>

        <a
          href={SITE_CONFIG.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 active:bg-emerald-100 transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span className="text-[11px] font-medium">WhatsApp</span>
        </a>

        <Link
          to="/events"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-zinc-950 text-white font-medium active:scale-95 transition-all shadow-xs"
        >
          <CalendarCheck className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-semibold">Book Setup</span>
        </Link>
      </div>
    </div>
  );
};
