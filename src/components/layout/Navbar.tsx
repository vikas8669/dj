import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Disc3, Menu, X, CalendarCheck, Phone, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-2 shadow-xs'
            : 'bg-white/85 backdrop-blur-sm py-2.5 sm:py-3'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Compact Brand Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group focus:outline-none"
              aria-label="Kartik DJ Home"
            >
              <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center text-white shadow-xs shrink-0">
                <Disc3 className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-700" />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-black tracking-tight uppercase font-display text-zinc-950 group-hover:text-violet-600 transition-colors leading-none">
                  KARTIK <span className="text-violet-600">DJ</span>
                </span>
                <span className="text-[9px] tracking-wider text-zinc-500 uppercase font-mono font-medium mt-0.5 leading-none">
                  Light-DJ-Sound
                </span>
              </div>
            </Link>

            {/* Compact Desktop Nav Links - Borderless & Minimal */}
            <nav className="hidden md:flex items-center gap-5 lg:gap-6">
              {SITE_CONFIG.navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative text-xs lg:text-[13px] font-medium transition-colors py-0.5 ${
                      isActive
                        ? 'text-violet-600 font-semibold'
                        : 'text-zinc-600 hover:text-zinc-950'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-violet-600 rounded-full"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Compact Right Action CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={SITE_CONFIG.phoneHref}
                className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-zinc-700 hover:text-violet-600 transition-colors"
              >
                <Phone className="w-3 h-3 text-violet-600" />
                <span>{SITE_CONFIG.phoneFormatted}</span>
              </a>

              <Link
                to="/events"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold tracking-normal shadow-xs hover:shadow transition-all active:scale-[0.98]"
              >
                <CalendarCheck className="w-3 h-3" />
                <span>Book Setup</span>
              </Link>
            </div>

            {/* Compact Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded-lg bg-zinc-50 text-zinc-700 hover:text-zinc-950 focus:outline-none md:hidden transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Drawer Content - Borderless & Clean */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[84%] max-w-sm bg-white z-50 p-6 flex flex-col justify-between overflow-y-auto md:hidden shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white shrink-0">
                      <Disc3 className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-display font-black text-lg text-zinc-950 leading-none">
                        KARTIK <span className="text-violet-600">DJ</span>
                      </span>
                      <span className="text-[10px] tracking-widest text-zinc-500 uppercase font-mono font-semibold mt-1">
                        Light • DJ • Sound
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg bg-zinc-50 text-zinc-500 hover:text-zinc-950"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Mobile Links */}
                <nav className="flex flex-col gap-1 mt-6">
                  {SITE_CONFIG.navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm transition-all ${
                          isActive
                            ? 'text-violet-600 font-semibold bg-violet-50/80'
                            : 'text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50 font-medium'
                        }`}
                      >
                        <span>{link.label}</span>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Quick Contact in Drawer */}
              <div className="pt-6 space-y-3">
                <Link
                  to="/events"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-sm tracking-normal shadow-sm"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Book Event Sound Setup</span>
                </Link>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={SITE_CONFIG.phoneHref}
                    className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-50 text-xs font-semibold text-zinc-800 hover:bg-zinc-100"
                  >
                    <Phone className="w-3.5 h-3.5 text-violet-600" />
                    <span>Call Us</span>
                  </a>
                  <a
                    href={SITE_CONFIG.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-50 text-xs font-semibold text-emerald-800 hover:bg-emerald-100"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="text-[11px] text-zinc-500 text-center font-mono pt-2">
                  {SITE_CONFIG.address.full}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};