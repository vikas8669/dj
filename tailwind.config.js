/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
        '2xl': '3rem',
      },
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        background: '#ffffff',
        surface: {
          DEFAULT: '#ffffff',
          elevated: '#f8fafc',
          card: '#ffffff',
          border: '#e2e8f0',
        },
        brand: {
          purple: '#7c3aed',
          violet: '#6366f1',
          indigo: '#4f46e5',
          fuchsia: '#a855f7',
          neonCyan: '#0284c7',
          neonBlue: '#2563eb',
          neonPink: '#db2777',
          gold: '#d97706',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Cabinet Grotesk', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'saas-xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'saas-sm': '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px -1px rgba(0, 0, 0, 0.08)',
        'saas-md': '0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
        'saas-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.04)',
        'saas-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
        'glow-purple': '0 4px 20px -2px rgba(124, 58, 237, 0.25)',
        'glow-cyan': '0 4px 20px -2px rgba(2, 132, 199, 0.25)',
        'glow-pink': '0 4px 20px -2px rgba(219, 39, 119, 0.25)',
        'glass': '0 8px 30px 0 rgba(0, 0, 0, 0.06)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(ellipse at 50% 0%, rgba(99, 102, 241, 0.12) 0%, rgba(248, 250, 252, 0.7) 60%, #ffffff 100%)',
        'glow-conic': 'conic-gradient(from 180deg at 50% 50%, #6366f1 0deg, #0284c7 120deg, #db2777 240deg, #6366f1 360deg)',
      },
      keyframes: {
        eq1: {
          '0%, 100%': { height: '20%' },
          '50%': { height: '95%' },
        },
        eq2: {
          '0%, 100%': { height: '80%' },
          '50%': { height: '30%' },
        },
        eq3: {
          '0%, 100%': { height: '40%' },
          '50%': { height: '100%' },
        },
        eq4: {
          '0%, 100%': { height: '70%' },
          '50%': { height: '15%' },
        },
        eq5: {
          '0%, 100%': { height: '35%' },
          '50%': { height: '85%' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 0.9, transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'eq-1': 'eq1 1.2s ease-in-out infinite',
        'eq-2': 'eq2 0.9s ease-in-out infinite',
        'eq-3': 'eq3 1.4s ease-in-out infinite',
        'eq-4': 'eq4 1.1s ease-in-out infinite',
        'eq-5': 'eq5 0.8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float': 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
