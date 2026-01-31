"use client";

import { useState, useEffect } from "react";

export default function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferredTime: "morning",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Contact details - customize these
  const whatsappNumber = "917402782714"; // WhatsApp number
  const whatsappMessage = "Hi! I'm interested in your interior design services.";
  const emailAddress = "fortuneinteriorf3@gmail.com";
  const emailSubject = "Interior Design Inquiry";
  const emailBody = "Hello,\n\nI would like to inquire about your interior design services.\n\nBest regards";

  useEffect(() => {
    // Fade in animation on mount
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleCallbackSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call - replace with actual callback request logic
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset and close modal after success
    setTimeout(() => {
      setSubmitSuccess(false);
      setIsModalOpen(false);
      setFormData({ name: "", phone: "", preferredTime: "morning" });
    }, 2000);
  };

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <>
      {/* Floating Contact Widget */}
      <div
        className={`fixed z-[9999] transition-all duration-500 ease-out
          right-0 backdrop-blur-md bg-amber-100/40 shadow-lg
           py-2 rounded-l-xl overflow-auto 
          top-1/2 -translate-y-1/2
          md:translate-x-[50%] md:hover:translate-x-0
          hover:backdrop-blur-none hover:bg-amber-100
          ${isVisible ? "opacity-100" : "opacity-0 translate-x-full"}`}
        style={{ fontFamily: '"Inter", "Poppins", sans-serif' }}
      >
        <ul className="flex flex-col gap-1">
          {/* Call Back Button */}
          <li>
            <button
              onClick={() => setIsModalOpen(true)}
              aria-label="Request a callback"
              className="group flex items-center gap-3  md:px-[18px] md:py-2.5
                transition-all duration-300 ease-out cursor-pointer
                hover:-translate-y-[3px]
                 
                "
            >
              <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center
                transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-900">
                <svg
                  className="w-5 h-5 text-amber-900 transition-colors duration-300 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
            </button>
          </li>

          {/* WhatsApp Button */}
          <li>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="group flex items-center gap-3 md:px-[18px] md:py-2.5
                transition-all duration-300 ease-out cursor-pointer
                hover:-translate-y-[3px]
                focus:outline-none 
                "
            >
              <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center
                transition-all duration-300 group-hover:scale-110 group-hover:bg-green-500">
                <svg
                  className="w-5 h-5 text-green-600 transition-colors duration-300 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
            </a>
          </li>

          {/* Send Mail Button */}
          <li>
            <a
              href={mailtoUrl}
              aria-label="Send us an email"
              className="group flex items-center gap-3  md:px-[18px] md:py-2.5
                transition-all duration-300 ease-out cursor-pointer
                hover:-translate-y-[3px]
                focus:outline-none 
                "
            >
              <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center
                transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-900">
                <svg
                  className="w-5 h-5 text-amber-900 transition-colors duration-300 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </a>
          </li>
        </ul>
      </div>

      {/* Callback Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="callback-modal-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Content */}
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 md:p-8
              transform transition-all duration-300 animate-modalIn"
            style={{ fontFamily: '"Inter", "Poppins", sans-serif' }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center
                hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
              aria-label="Close modal"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h2 id="callback-modal-title" className="text-2xl font-semibold text-gray-900">
                Request a Callback
              </h2>
              <p className="text-gray-500 mt-2 text-sm">
                Leave your details and we'll call you back shortly
              </p>
            </div>

            {/* Success State */}
            {submitSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Thank You!</h3>
                <p className="text-gray-500 mt-2">We'll call you back soon.</p>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleCallbackSubmit} className="space-y-4">
                {/* Name Input */}
                <div>
                  <label htmlFor="callback-name" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="callback-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 
                      focus:ring-2 focus:ring-purple-100 outline-none transition-all duration-200
                      text-gray-900 placeholder-gray-400"
                    placeholder="John Doe"
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <label htmlFor="callback-phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="callback-phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 
                      focus:ring-2 focus:ring-purple-100 outline-none transition-all duration-200
                      text-gray-900 placeholder-gray-400"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Preferred Time */}
                <div>
                  <label htmlFor="callback-time" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Preferred Time
                  </label>
                  <select
                    id="callback-time"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 
                      focus:ring-2 focus:ring-purple-100 outline-none transition-all duration-200
                      text-gray-900 bg-white cursor-pointer"
                  >
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 8 PM)</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-purple-600 text-white font-medium
                    hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 
                    transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed
                    flex items-center justify-center gap-2 mt-6"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Request Callback
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Custom Styles for Animations */}
      <style jsx global>{`
        @keyframes modalIn {
          0% {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-modalIn {
          animation: modalIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}
