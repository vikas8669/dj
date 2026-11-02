import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import confetti from 'canvas-confetti';
import {
  CalendarCheck,
  Phone,
  MessageCircle,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  MapPin,
  HelpCircle,
  X,
} from 'lucide-react';
import { toast } from 'sonner';

import { SITE_CONFIG } from '@/config/site';
import { SERVICES_DATA } from '@/data/services';
import { bookingFormSchema, BookingFormData } from '../schemas/bookingSchema';
import { fadeInUp, scaleIn } from '@/components/animations/variants';

export const BookingPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';
  const [demoSubmittedData, setDemoSubmittedData] = useState<BookingFormData | null>(null);
  const [showDemoModal, setShowDemoModal] = useState(false);

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      fullName: '',
      mobileNumber: '',
      eventType: preselectedService,
      eventDate: '',
      eventLocation: 'Phagwara',
      eventRequirements: '',
      additionalMessage: '',
    },
  });

  // If search param changes, update form
  useEffect(() => {
    if (preselectedService) {
      setValue('eventType', preselectedService);
    }
  }, [preselectedService, setValue]);

  // Construct formatted WhatsApp message
  const createWhatsAppUrl = (data: BookingFormData) => {
    const text = `*New Event Booking Enquiry - Kartik DJ*\n\n` +
      `👤 *Name:* ${data.fullName}\n` +
      `📞 *Mobile:* +91 ${data.mobileNumber}\n` +
      `🎉 *Event Type:* ${data.eventType}\n` +
      `📅 *Date:* ${data.eventDate}\n` +
      `📍 *Location:* ${data.eventLocation}\n` +
      (data.eventRequirements ? `🔊 *Requirements:* ${data.eventRequirements}\n` : '') +
      (data.additionalMessage ? `💬 *Message:* ${data.additionalMessage}\n` : '') +
      `\n_Sent via Kartik DJ Website_`;

    return `https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  // Submit Handler: triggers options
  const onSubmit = (data: BookingFormData) => {
    setDemoSubmittedData(data);
    setShowDemoModal(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#7c3aed', '#6366f1', '#0ea5e9', '#10b981'],
      });
    } catch {
      // Confetti fallback
    }

    toast.success('Validation Successful! Choose how to proceed below.');
  };

  const handleSendToWhatsApp = () => {
    if (!demoSubmittedData) return;
    const url = createWhatsAppUrl(demoSubmittedData);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Get today's ISO date string (YYYY-MM-DD) for min date
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <>
      <Helmet>
        <title>Book Your Event | Kartik DJ Phagwara</title>
        <meta
          name="description"
          content="Book professional DJ and sound system services for your wedding, Punjabi function, Gidda, or Jagrata in Phagwara, Punjab. Instant WhatsApp enquiry with Kartik DJ."
        />
      </Helmet>

      {/* Hero Banner */}
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
              <CalendarCheck className="w-3.5 h-3.5 text-violet-600" />
              <span>Event Date Reservation</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 font-display tracking-tight leading-[1.15]">
              Book Your Next Event With{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                Kartik DJ
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto pt-1 font-normal">
              Fill in your event details below to initiate direct consultation via WhatsApp or phone. We recommend reserving dates in advance for peak wedding and festive seasons.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form and Info Section */}
      <section className="py-16 lg:py-24 relative bg-zinc-50/60 border-b border-zinc-200/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
            {/* Left Column: Booking Form */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-zinc-200 shadow-sm relative"
            >
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-zinc-100">
                <div>
                  <h2 className="text-xl font-bold text-zinc-950">
                    Event Reservation Form
                  </h2>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Live client-side validation • Direct WhatsApp notification
                  </p>
                </div>
                <Sparkles className="w-5 h-5 text-violet-600" />
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Jaswinder Singh"
                    {...register('fullName')}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-base sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all ${
                      errors.fullName ? 'border-rose-400' : 'border-zinc-200'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                    Indian Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-zinc-500">
                      +91
                    </span>
                    <input
                      type="tel"
                      placeholder="9646669649"
                      maxLength={10}
                      {...register('mobileNumber')}
                      className={`w-full pl-12 pr-4 py-2.5 rounded-lg bg-white border text-base sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all ${
                        errors.mobileNumber ? 'border-rose-400' : 'border-zinc-200'
                      }`}
                    />
                  </div>
                  {errors.mobileNumber ? (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.mobileNumber.message}
                    </p>
                  ) : (
                    <p className="mt-1 text-[11px] text-zinc-500">
                      10 digits without leading 0 or country code.
                    </p>
                  )}
                </div>

                {/* Event Type & Date (2 columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                      Event Type <span className="text-rose-500">*</span>
                    </label>
                    <select
                      {...register('eventType')}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-base sm:text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all ${
                        errors.eventType ? 'border-rose-400' : 'border-zinc-200'
                      }`}
                    >
                      <option value="">-- Select Event --</option>
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                      <option value="General Celebration / Other">
                        General Celebration / Other
                      </option>
                    </select>
                    {errors.eventType && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.eventType.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                      Event Date <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="date"
                      min={todayStr}
                      {...register('eventDate')}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-base sm:text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all ${
                        errors.eventDate ? 'border-rose-400' : 'border-zinc-200'
                      }`}
                    />
                    {errors.eventDate && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.eventDate.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Event Location */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                    Event Venue / City <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Haveli Banquet, Phagwara / Onkar Nagar"
                    {...register('eventLocation')}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-base sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all ${
                      errors.eventLocation ? 'border-rose-400' : 'border-zinc-200'
                    }`}
                  />
                  {errors.eventLocation && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.eventLocation.message}
                    </p>
                  )}
                </div>

                {/* Requirements / Scale */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                    Sound / Lighting Requirements (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Dual 18-inch bass, moving heads, smoke machine, Baraat trolley"
                    {...register('eventRequirements')}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-zinc-200 text-base sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all"
                  />
                </div>

                {/* Additional Message */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                    Additional Notes / Timings (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide any specific timing details or song requests..."
                    {...register('additionalMessage')}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-zinc-200 text-base sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all resize-none"
                  />
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-sm tracking-normal shadow-xs transition-all active:scale-[0.98] disabled:opacity-50"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Review & Proceed to Book</span>
                </button>
              </form>
            </motion.div>

            {/* Right Column: Direct Contact & Information */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-5"
            >
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-zinc-200 shadow-xs space-y-4">
                <span className="text-[11px] uppercase font-mono tracking-wider text-violet-700 font-semibold bg-violet-50 px-2 py-0.5 rounded border border-violet-100">
                  Direct Line
                </span>
                <h3 className="text-lg font-bold text-zinc-950">
                  Prefer Direct Voice or WhatsApp?
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Call Kartik DJ directly for date availability, emergency bookings, or immediate package consultation in Phagwara.
                </p>

                <div className="pt-1 space-y-2.5">
                  <a
                    href={SITE_CONFIG.phoneHref}
                    className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 text-zinc-800 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-violet-600 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-zinc-500">Call Now (Direct)</p>
                      <p className="text-sm font-semibold font-mono text-zinc-900">{SITE_CONFIG.phoneFormatted}</p>
                    </div>
                  </a>

                  <a
                    href={SITE_CONFIG.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 text-emerald-900 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-emerald-700">Quick WhatsApp Chat</p>
                      <p className="text-sm font-semibold font-mono">+91 96466 69649</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Booking Process Steps */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-zinc-200 shadow-xs space-y-4">
                <h3 className="text-sm font-bold text-zinc-950 uppercase tracking-wide">
                  How Our Booking Works
                </h3>

                <div className="space-y-3 pt-1">
                  <div className="flex items-start gap-3 text-xs text-zinc-600">
                    <span className="w-5 h-5 rounded-full bg-violet-50 text-violet-700 border border-violet-200 flex items-center justify-center shrink-0 font-mono text-[11px] font-bold">
                      1
                    </span>
                    <p>Submit date, venue location, and event type.</p>
                  </div>

                  <div className="flex items-start gap-3 text-xs text-zinc-600">
                    <span className="w-5 h-5 rounded-full bg-violet-50 text-violet-700 border border-violet-200 flex items-center justify-center shrink-0 font-mono text-[11px] font-bold">
                      2
                    </span>
                    <p>Discuss audio setup scale (subwoofers, mics, moving lights, stage).</p>
                  </div>

                  <div className="flex items-start gap-3 text-xs text-zinc-600">
                    <span className="w-5 h-5 rounded-full bg-violet-50 text-violet-700 border border-violet-200 flex items-center justify-center shrink-0 font-mono text-[11px] font-bold">
                      3
                    </span>
                    <p>Direct date reservation and on-time arrival on event day.</p>
                  </div>
                </div>
              </div>

              {/* Base Location Badge */}
              <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-xs flex items-center gap-3">
                <MapPin className="w-5 h-5 text-violet-600 shrink-0" />
                <div className="text-xs text-zinc-600">
                  <span className="font-semibold text-zinc-900">Base Location: </span>
                  {SITE_CONFIG.address.full}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Confirmation & Dual Options Modal */}
      <AnimatePresence>
        {showDemoModal && demoSubmittedData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDemoModal(false)}
              className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm"
            />

            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="relative w-full max-w-lg max-h-[90dvh] overflow-y-auto bg-white border border-zinc-200 rounded-2xl p-5 sm:p-7 z-10 shadow-xl space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-base font-bold text-zinc-950">
                    Form Validated Successfully
                  </h3>
                </div>
                <button
                  onClick={() => setShowDemoModal(false)}
                  className="p-1.5 rounded-lg bg-zinc-100 text-zinc-500 hover:text-zinc-950"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Summary of what was entered */}
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Client Name:</span>
                  <span className="font-semibold text-zinc-900">{demoSubmittedData.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Mobile:</span>
                  <span className="font-mono text-zinc-900 font-semibold">+91 {demoSubmittedData.mobileNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Event:</span>
                  <span className="font-semibold text-violet-700">{demoSubmittedData.eventType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Date:</span>
                  <span className="font-mono text-zinc-900">{demoSubmittedData.eventDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Location:</span>
                  <span className="text-zinc-900">{demoSubmittedData.eventLocation}</span>
                </div>
              </div>

              {/* Transparent Frontend-Only Notice */}
              <div className="p-3.5 rounded-xl bg-violet-50 border border-violet-100 text-xs text-violet-800 flex items-start gap-2.5">
                <HelpCircle className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Notice:</strong> This is a frontend-only application. Choose an option below to proceed:
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                {/* 1. Send via WhatsApp */}
                <button
                  onClick={handleSendToWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs tracking-normal shadow-xs transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Details via WhatsApp</span>
                </button>

                {/* 2. Local Demo Dismiss */}
                <button
                  onClick={() => {
                    setShowDemoModal(false);
                    reset();
                    toast.info('Local Demo Completed. Form fields have been reset.');
                  }}
                  className="w-full py-2.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-medium transition-colors"
                >
                  Close & Reset Form
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
