import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  HelpCircle,
  X,
} from 'lucide-react';
import { toast } from 'sonner';

import { SITE_CONFIG } from '@/config/site';
import { contactFormSchema, ContactFormData } from '../schemas/contactSchema';
import { BookingCTA } from '@/components/common/BookingCTA';
import { fadeInUp, scaleIn } from '@/components/animations/variants';

export const ContactPage: React.FC = () => {
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);
  const [showDemoModal, setShowDemoModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactFormData) => {
    setSubmittedData(data);
    setShowDemoModal(true);
    toast.success('Form validated! Choose how to send your inquiry.');
  };

  const handleSendToWhatsApp = () => {
    if (!submittedData) return;
    const text = `*New Contact Enquiry - Kartik DJ*\n\n` +
      `👤 *Name:* ${submittedData.name}\n` +
      `📞 *Phone:* +91 ${submittedData.phone}\n` +
      `📌 *Subject:* ${submittedData.subject}\n` +
      `💬 *Message:* ${submittedData.message}\n` +
      `\n_Sent via Kartik DJ Contact Page_`;

    const url = `https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Kartik DJ Phagwara, Punjab</title>
        <meta
          name="description"
          content="Get in touch with Kartik DJ. Call +91 96466 69649 or visit Onkar Nagar, Phagwara, Punjab. Professional DJ & Sound system bookings."
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
              <Sparkles className="w-3.5 h-3.5 text-violet-600" />
              <span>Get In Touch</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 font-display tracking-tight leading-[1.15]">
              Connect With{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                Kartik DJ
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto pt-1 font-normal">
              Have questions about sound packages, wedding dates, or technical setup scales? Contact our team directly in Phagwara.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards & Form Section */}
      <section className="py-16 lg:py-24 relative bg-zinc-50/60 border-b border-zinc-200/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
            {/* Left 5 Cols: Contact Details & Map */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-5"
            >
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-zinc-200 shadow-xs space-y-5">
                <h3 className="text-lg font-bold text-zinc-950">
                  Business Information
                </h3>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">Direct Phone</p>
                    <a
                      href={SITE_CONFIG.phoneHref}
                      className="text-base font-bold text-zinc-900 hover:text-violet-600 font-mono transition-colors"
                    >
                      {SITE_CONFIG.phoneFormatted}
                    </a>
                    <p className="text-xs text-zinc-500 mt-0.5">Calls accepted for event bookings</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">WhatsApp Instant</p>
                    <a
                      href={SITE_CONFIG.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-zinc-900 hover:text-emerald-700 font-mono transition-colors"
                    >
                      +91 96466 69649
                    </a>
                    <p className="text-xs text-zinc-500 mt-0.5">Quick inquiries & song list discussions</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">Official Address</p>
                    <p className="text-sm font-semibold text-zinc-900">
                      {SITE_CONFIG.address.street}
                    </p>
                    <p className="text-xs text-zinc-600">
                      {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} – {SITE_CONFIG.address.postalCode}
                    </p>
                    <p className="text-xs text-zinc-500 mt-0.5">Punjab, India</p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-3.5 pt-3 border-t border-zinc-100">
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-600 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">Consultation Timings</p>
                    <p className="text-xs text-zinc-800 font-medium">9:00 AM – 9:00 PM IST (Daily)</p>
                    <p className="text-xs text-zinc-500 mt-0.5">Events executed 24/7 as booked</p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden border border-zinc-200 shadow-xs aspect-video relative group bg-zinc-100">
                <iframe
                  title="Kartik DJ Location in Phagwara Punjab"
                  src={SITE_CONFIG.maps.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
                <a
                  href={SITE_CONFIG.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-white/95 text-xs text-zinc-800 border border-zinc-200 flex items-center gap-1 shadow-xs hover:text-violet-600"
                >
                  <span>Open Directions</span>
                  <ArrowUpRight className="w-3 h-3 text-violet-600" />
                </a>
              </div>
            </motion.div>

            {/* Right 7 Cols: Contact Form */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white p-6 sm:p-9 rounded-2xl border border-zinc-200 shadow-xs"
            >
              <div className="pb-5 mb-5 border-b border-zinc-100">
                <h2 className="text-xl font-bold text-zinc-950">
                  Send a Quick Message
                </h2>
                <p className="text-xs text-zinc-500 mt-0.5">
                  Have a question about DJ sound or dates? Fill out this quick form.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Harpreet Kaur"
                    {...register('name')}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-base sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all ${
                      errors.name ? 'border-rose-400' : 'border-zinc-200'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                    Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-zinc-500">
                      +91
                    </span>
                    <input
                      type="tel"
                      placeholder="9646669649"
                      maxLength={10}
                      {...register('phone')}
                      className={`w-full pl-12 pr-4 py-2.5 rounded-lg bg-white border text-base sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all ${
                        errors.phone ? 'border-rose-400' : 'border-zinc-200'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                    Subject / Event Topic <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Wedding Reception DJ Sound in Phagwara"
                    {...register('subject')}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-base sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all ${
                      errors.subject ? 'border-rose-400' : 'border-zinc-200'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                    Message Details <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your venue, tentative date, and sound/lighting preferences..."
                    {...register('message')}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-base sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all resize-none ${
                      errors.message ? 'border-rose-400' : 'border-zinc-200'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-xs tracking-normal shadow-xs transition-all active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Message</span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal for Contact Form Options */}
      <AnimatePresence>
        {showDemoModal && submittedData && (
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
                    Enquiry Validated
                  </h3>
                </div>
                <button
                  onClick={() => setShowDemoModal(false)}
                  className="p-1.5 rounded-lg bg-zinc-100 text-zinc-500 hover:text-zinc-950"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-3.5 rounded-xl bg-violet-50 border border-violet-100 text-xs text-violet-800 flex items-start gap-2.5">
                <HelpCircle className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
                <p>
                  <strong>Frontend Demo Notice:</strong> You can launch WhatsApp to send these details directly to Kartik DJ.
                </p>
              </div>

              <div className="space-y-2 pt-1">
                <button
                  onClick={handleSendToWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs tracking-normal shadow-xs transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Message via WhatsApp</span>
                </button>

                <button
                  onClick={() => {
                    setShowDemoModal(false);
                    reset();
                    toast.info('Form cleared.');
                  }}
                  className="w-full py-2.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-medium transition-colors"
                >
                  Close & Clear
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <BookingCTA />
    </>
  );
};
