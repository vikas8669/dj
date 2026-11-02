import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin, Tag } from 'lucide-react';
import { GalleryItem } from '@/data/gallery';

interface ImageLightboxProps {
  isOpen: boolean;
  currentIndex: number;
  items: GalleryItem[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  currentIndex,
  items,
  onClose,
  onNext,
  onPrev,
}) => {
  const currentItem = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/95 backdrop-blur-xl"
        />

        {/* Top Controls Bar */}
        <div className="absolute top-0 inset-x-0 z-50 p-4 sm:p-6 flex items-center justify-between pointer-events-auto">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-white/10 text-white font-bold">
              {currentIndex + 1} / {items.length}
            </span>
            <span className="hidden sm:inline-block text-zinc-400">
              {currentItem.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-zinc-900/80 border border-white/20 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-2 sm:left-6 z-50 p-2 sm:p-3 rounded-full bg-zinc-900/80 border border-white/15 text-white hover:bg-violet-600 transition-all hover:scale-110 active:scale-95"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-2 sm:right-6 z-50 p-2 sm:p-3 rounded-full bg-zinc-900/80 border border-white/15 text-white hover:bg-violet-600 transition-all hover:scale-110 active:scale-95"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Main Image Container */}
        <motion.div
          key={currentItem.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="relative z-40 max-w-5xl max-h-[85vh] mx-3 sm:mx-4 flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-[0_0_50px_rgba(0,0,0,0.8)] max-h-[60vh] sm:max-h-[70vh]">
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="max-h-[60vh] sm:max-h-[70vh] w-auto object-contain mx-auto"
            />
          </div>

          {/* Caption & Location metadata */}
          <div className="mt-4 text-center max-w-2xl px-2 sm:px-4">
            <h3 className="text-base sm:text-xl font-bold text-white font-display">
              {currentItem.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 mt-1 leading-relaxed line-clamp-2 sm:line-clamp-none">
              {currentItem.description}
            </p>
            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-2 text-xs text-zinc-400">
              <span className="flex items-center gap-1 text-violet-300">
                <Tag className="w-3 h-3" />
                {currentItem.category}
              </span>
              <span className="flex items-center gap-1 text-cyan-300">
                <MapPin className="w-3 h-3" />
                {currentItem.location}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
