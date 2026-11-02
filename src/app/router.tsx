import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { HomePage } from '@/features/home/pages/HomePage';
import { AboutPage } from '@/features/about/pages/AboutPage';
import { ServicesPage } from '@/features/services/pages/ServicesPage';
import { GalleryPage } from '@/features/gallery/pages/GalleryPage';
import { BookingPage } from '@/features/bookings/pages/BookingPage';
import { ContactPage } from '@/features/contact/pages/ContactPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'services',
        element: <ServicesPage />,
      },
      {
        path: 'gallery',
        element: <GalleryPage />,
      },
      {
        path: 'events',
        element: <BookingPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
