import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from '@/components/common/ScrollToTop';
import { FloatingActions } from '@/components/common/FloatingActions';
import { MobileActionBar } from '@/components/common/MobileActionBar';
import { DjAudioPlayer } from '@/components/common/DjAudioPlayer';
import { Toaster } from 'sonner';

export const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-900 selection:bg-violet-600 selection:text-white">
      <ScrollToTop />
      <Navbar />

      <main className="flex-1 w-full bg-white">
        <Outlet />
      </main>

      <Footer />

      {/* Floating Interactive elements */}
      <FloatingActions />
      <MobileActionBar />
      <DjAudioPlayer />

      {/* Toast Notification Container */}
      <Toaster
        theme="light"
        position="bottom-center"
        toastOptions={{
          style: {
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            color: '#0f172a',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.08)',
          },
        }}
      />
    </div>
  );
};
