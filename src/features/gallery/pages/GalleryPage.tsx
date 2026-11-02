import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Sparkles,
  Eye,
  Play,
  MapPin,
  Tag,
  Filter,
  Film,
  MessageCircle,
} from 'lucide-react';
import {
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  VIDEO_SHOWCASES,
  VideoItem,
} from '@/data/gallery';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ImageLightbox } from '@/components/common/ImageLightbox';
import { BookingCTA } from '@/components/common/BookingCTA';
import { fadeInUp, scaleIn } from '@/components/animations/variants';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeVideoModal, setActiveVideoModal] = useState<VideoItem | null>(null);

  // Filter images according to active category
  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <>
      <Helmet>
        <title>Visual Gallery | Kartik DJ Phagwara</title>
        <meta
          name="description"
          content="Explore photos and video moments of Kartik DJ performing at Punjabi weddings, Gidda performances, Jagrata events, and concert setups across Phagwara, Punjab."
        />
      </Helmet>

      {/* Gallery Hero Banner */}
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
              <span>Event Visual Showcase</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 font-display tracking-tight leading-[1.15]">
              Stage, Lights &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                Memorable Celebrations
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto pt-1 font-normal">
              Browse authentic event photography showcasing our DJ concert stages, Punjabi cultural celebrations, Jagrata setups, and heavy-bass sound systems in Phagwara and Punjab.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Gallery Section with Category Filters */}
      <section className="py-20 lg:py-28 relative bg-zinc-50/60 border-b border-zinc-200/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar">
            {GALLERY_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-normal whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-zinc-950 text-white shadow-xs'
                      : 'bg-white text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 border border-zinc-200 shadow-xs'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Gallery Items Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => openLightbox(index)}
                  className="group relative rounded-2xl overflow-hidden bg-white border border-zinc-200 aspect-[4/3] cursor-pointer shadow-xs hover:shadow-md hover:border-zinc-300 transition-all"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Metadata and Caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-violet-300 font-semibold flex items-center gap-1">
                      <Tag className="w-2.5 h-2.5" />
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold truncate mt-0.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-200 truncate mt-0.5 flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5 text-violet-300" />
                      {item.location}
                    </p>
                  </div>

                  {/* Hover Eye Badge */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200 flex items-center justify-center text-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                    <Eye className="w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16 text-zinc-500">
              <Filter className="w-8 h-8 mx-auto mb-2 text-zinc-400" />
              <p className="text-sm">No items found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-20 lg:py-28 relative bg-white border-b border-zinc-200/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Live Motion"
            title="Video"
            highlightedText="Showcases"
            description="Experience live snippets capturing dance floor energy, dhol synchronization, and lighting sweeps from actual event setups."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {VIDEO_SHOWCASES.map((vid) => (
              <motion.div
                key={vid.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => setActiveVideoModal(vid)}
                className="group relative rounded-2xl overflow-hidden bg-white border border-zinc-200 shadow-xs hover:shadow-md hover:border-zinc-300 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-100">
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-white/95 text-zinc-950 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 fill-zinc-950 ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-2.5 right-2.5 text-[10px] font-mono px-2 py-0.5 rounded bg-black/75 text-white">
                    {vid.duration}
                  </span>
                </div>

                <div className="p-5">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-violet-700 font-semibold bg-violet-50 px-2 py-0.5 rounded border border-violet-100">
                    {vid.category}
                  </span>
                  <h4 className="text-base font-bold text-zinc-950 mt-2">
                    {vid.title}
                  </h4>
                  <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                    {vid.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal Preview */}
      <AnimatePresence>
        {activeVideoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideoModal(null)}
              className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm"
            />

            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="relative w-full max-w-2xl max-h-[90dvh] overflow-y-auto bg-white border border-zinc-200 rounded-2xl p-5 sm:p-6 z-10 shadow-xl"
            >
              <div className="flex items-center justify-between pb-3 border-b border-zinc-100 mb-4">
                <div className="flex items-center gap-2">
                  <Film className="w-4 h-4 text-violet-600" />
                  <span className="text-sm font-bold text-zinc-950">{activeVideoModal.title}</span>
                </div>
                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="text-xs text-zinc-500 hover:text-zinc-950 px-2 py-1 rounded bg-zinc-100"
                >
                  Close
                </button>
              </div>

              <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200 flex items-center justify-center">
                <img
                  src={activeVideoModal.thumbnail}
                  alt={activeVideoModal.title}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-white/80 backdrop-blur-xs">
                  <Play className="w-10 h-10 text-violet-600 mb-2" />
                  <p className="text-sm font-bold text-zinc-950">Live Event Video Preview</p>
                  <p className="text-xs text-zinc-600 max-w-md mt-1">
                    Contact Kartik DJ directly on WhatsApp to receive recent live HD video clips from Punjabi weddings and concerts in Phagwara!
                  </p>
                  <a
                    href="https://wa.me/919646669649?text=Hi%20Kartik%20DJ,%20can%20you%20share%20recent%20event%20videos?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold tracking-normal shadow-xs transition-colors inline-flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Request Video Clips on WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Lightbox for Images */}
      <ImageLightbox
        isOpen={lightboxOpen}
        currentIndex={currentImageIndex}
        items={filteredItems}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />

      <BookingCTA />
    </>
  );
};
