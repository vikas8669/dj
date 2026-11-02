import React from 'react';
import { motion } from 'framer-motion';

interface ShaderBeamLineProps {
  className?: string;
  glow?: boolean;
}

export const ShaderBeamLine: React.FC<ShaderBeamLineProps> = ({
  className = '',
  glow = true,
}) => {
  return (
    <div className={`relative w-full h-[2px] overflow-hidden ${className}`}>
      {/* Background static subtle gradient track */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      {/* Primary animated flowing gradient line shader */}
      <div className={`absolute inset-0 line-shader-gradient ${glow ? 'line-shader-glow' : ''}`} />

      {/* Traveling laser beam packet */}
      <motion.div
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: 'easeInOut',
        }}
        className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-90 blur-[1px]"
      />
    </div>
  );
};
