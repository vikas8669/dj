"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface LayoutTextFlipProps {
  text?: string;
  words: string[];
  duration?: number;
  className?: string;
  textClassName?: string;
  wordsClassName?: string;
}

export const LayoutTextFlip: React.FC<LayoutTextFlipProps> = ({
  text = '',
  words = ['Punjabi Weddings', 'Royal Sangeet', 'Ladies Gidda', 'Devotional Jagrata', 'Concert Stages'],
  duration = 2800,
  className = '',
  textClassName = '',
  wordsClassName = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  const currentWord = words[currentIndex] || '';

  return (
    <span className={`inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 align-baseline max-w-full text-center ${className}`}>
      {text && <span className={`inline-block ${textClassName}`}>{text}</span>}

      <span className="relative inline-flex items-center overflow-hidden align-baseline max-w-full py-0.5">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentWord}
            initial={{
              opacity: 0,
              y: 20,
              rotateX: 80,
              filter: 'blur(4px)',
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: 0,
              filter: 'blur(0px)',
            }}
            exit={{
              opacity: 0,
              y: -20,
              rotateX: -80,
              filter: 'blur(4px)',
            }}
            transition={{
              type: 'spring',
              stiffness: 280,
              damping: 24,
              mass: 0.8,
            }}
            className={`inline-block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 text-center break-words max-w-full ${wordsClassName}`}
            style={{ transformOrigin: '50% 50%' }}
          >
            {currentWord}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
};

export default LayoutTextFlip;
