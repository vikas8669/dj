import React, { useRef, useEffect } from 'react';

interface ShaderLinesCanvasProps {
  className?: string;
  lineCount?: number;
  speed?: number;
  interactive?: boolean;
}

export const ShaderLinesCanvas: React.FC<ShaderLinesCanvasProps> = ({
  className = '',
  lineCount = 5,
  speed = 0.015,
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let time = 0;

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseY = 0;

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / width;
      targetMouseY = ((e.clientY - rect.top) / height - 0.5) * 40;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Color palettes for line shader waves
    const lineGradients = [
      { start: 'rgba(124, 58, 237, 0.75)', mid: 'rgba(99, 102, 241, 0.85)', end: 'rgba(6, 182, 212, 0.75)' },
      { start: 'rgba(6, 182, 212, 0.7)', mid: 'rgba(59, 130, 246, 0.8)', end: 'rgba(236, 72, 153, 0.7)' },
      { start: 'rgba(236, 72, 153, 0.65)', mid: 'rgba(168, 85, 247, 0.8)', end: 'rgba(99, 102, 241, 0.65)' },
      { start: 'rgba(99, 102, 241, 0.55)', mid: 'rgba(6, 182, 212, 0.75)', end: 'rgba(16, 185, 129, 0.55)' },
      { start: 'rgba(168, 85, 247, 0.6)', mid: 'rgba(236, 72, 153, 0.7)', end: 'rgba(124, 58, 237, 0.6)' },
    ];

    const render = () => {
      time += speed;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const centerY = height * 0.5 + mouseY;

      // Render multiple harmonic shader lines
      for (let i = 0; i < lineCount; i++) {
        const pal = lineGradients[i % lineGradients.length];
        const grad = ctx.createLinearGradient(0, 0, width, 0);
        grad.addColorStop(0, 'rgba(124, 58, 237, 0)');
        grad.addColorStop(0.15, pal.start);
        grad.addColorStop(0.5, pal.mid);
        grad.addColorStop(0.85, pal.end);
        grad.addColorStop(1, 'rgba(6, 182, 212, 0)');

        ctx.beginPath();
        const step = 8;
        const freq = 0.003 + i * 0.001;
        const amp = 24 + i * 8 + Math.sin(time + i) * 8;
        const phase = time * (1.2 + i * 0.3) + i * 1.5;

        for (let x = 0; x <= width + step; x += step) {
          // Complex harmonic wave: primary sine + secondary harmonic + envelope taper
          const normX = x / width;
          const envelope = Math.sin(normX * Math.PI); // Pinches ends smoothly to zero

          const y1 = Math.sin(x * freq + phase) * amp;
          const y2 = Math.cos(x * freq * 1.8 - phase * 0.8) * (amp * 0.4);
          const mouseInfluence = Math.exp(-Math.pow((normX - mouseX) * 4, 2)) * 15;

          const y = centerY + (y1 + y2 + mouseInfluence) * envelope;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.strokeStyle = grad;
        ctx.lineWidth = i === 1 || i === 2 ? 2.5 : 1.75;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // Luminous line shader glow
        ctx.shadowColor = pal.mid;
        ctx.shadowBlur = i === 1 ? 16 : 8;
        ctx.stroke();
      }

      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [lineCount, speed, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
};
