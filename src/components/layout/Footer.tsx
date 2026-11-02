import React from 'react';
import { Link } from 'react-router-dom';
import { Disc3, MapPin, Phone, MessageCircle, Mail, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';
import { SERVICES_DATA } from '@/data/services';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-zinc-50 text-zinc-600 border-t border-zinc-200 pt-16 pb-28 sm:pb-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-zinc-200">
          {/* Col 1: Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-lg bg-violet-600 flex items-center justify-center text-white shadow-xs shrink-0">
                <Disc3 className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight uppercase font-display text-zinc-950 group-hover:text-violet-600 transition-colors leading-none">
                  KARTIK <span className="text-violet-600">DJ</span>
                </span>
                <span className="text-[10px] tracking-widest text-zinc-500 uppercase font-mono font-semibold mt-1">
                  Light • DJ • Sound
                </span>
              </div>
            </Link>

            <p className="text-sm text-zinc-600 leading-relaxed max-w-sm">
              Concert-grade sound reinforcement, live Punjabi DJ entertainment, and intelligent stage lighting based in Onkar Nagar, Phagwara, Punjab.
            </p>

            {/* SaaS Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-medium text-zinc-700 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for bookings across Punjab</span>
            </div>

            {/* Direct Contact Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href={SITE_CONFIG.phoneHref}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-zinc-200 text-xs font-semibold text-zinc-800 hover:text-violet-600 hover:border-violet-300 transition-colors shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-violet-600" />
                <span>{SITE_CONFIG.phoneFormatted}</span>
              </a>

              <a
                href={SITE_CONFIG.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 hover:bg-emerald-100 transition-colors shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp Instant Quote</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 font-mono mb-4">
              Platform
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SITE_CONFIG.navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-zinc-600 hover:text-zinc-950 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Links (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 font-mono mb-4">
              Sound Services
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-zinc-600 hover:text-violet-600 transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span className="truncate">{service.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-violet-600" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-violet-600 hover:text-violet-700 text-xs font-semibold inline-flex items-center gap-1 pt-1"
                >
                  View All 10 Sound Setups →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Business Location & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 font-mono mb-4">
              Operations Hub
            </h3>

            <div className="flex items-start gap-2.5 text-sm text-zinc-600">
              <MapPin className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-zinc-900 font-semibold">{SITE_CONFIG.address.street}</p>
                <p>{SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} – {SITE_CONFIG.address.postalCode}</p>
                <p className="text-xs text-zinc-500 mt-0.5">Punjab, India</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-sm text-zinc-600 pt-1">
              <Phone className="w-4 h-4 text-violet-600 shrink-0" />
              <a href={SITE_CONFIG.phoneHref} className="hover:text-zinc-950 font-medium transition-colors">
                {SITE_CONFIG.phoneFormatted}
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-sm text-zinc-600">
              <Mail className="w-4 h-4 text-violet-600 shrink-0" />
              <span className="text-zinc-600">Direct booking via WhatsApp & Phone</span>
            </div>

            <div className="pt-2">
              <a
                href={SITE_CONFIG.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-violet-600 hover:text-violet-700 inline-flex items-center gap-1 hover:underline"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex items-center gap-3 font-mono">
            <span className="inline-flex items-center gap-1.5 text-emerald-700 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Sound Systems Ready
            </span>
            <span>•</span>
            <span>Phagwara, Punjab</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
