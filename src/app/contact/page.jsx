"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const testimonials = [
  {
    id: 1,
    name: "Morgan Dufresne",
    role: "Company owner",
    avatar: "https://framerusercontent.com/images/l8YnPfO1KlKps6bo2S4dz5wpFKs.png",
    quote:
      "From concept to reality, the team turned my vision into a stunning, livable space. I couldn't be happier with this!",
    description:
      "Morgan wanted a modern, functional office. We delivered a bright, stylish space with smart design solutions, perfectly tailored to his company style.",
  },
  {
    id: 2,
    name: "Marina Li",
    role: "Homeowner",
    avatar: "https://framerusercontent.com/images/46pZyTt33EheY5tVRHk7ySHT21g.png",
    quote:
      "They understood exactly what I wanted and delivered beyond my expectations. The attention to detail is remarkable!",
    description:
      "Marina needed a cozy yet elegant living space. We created a warm atmosphere with premium materials and thoughtful design elements.",
  },
  {
    id: 3,
    name: "Alex Sarr",
    role: "Entrepreneur",
    avatar: "https://framerusercontent.com/images/0NtfEb6p7C9ZBUTh09tAf2uWc.png",
    quote:
      "Professional, creative, and incredibly responsive. The best design team I've ever worked with!",
    description:
      "Alex wanted a unique space that reflects his personality. We designed an inspiring environment that sparks creativity every day.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const current = testimonials[currentTestimonial];

  return (
    <main className="min-h-screen  font-['Inter',sans-serif]">
      {/* Header */}
      <div className="bg-[#f1f1f1]">
        <Header variant="dark" />
      </div>

      {/* Contact Form Section */}
      <section className="py-20 px-6 md:px-10 lg:px-[42px] bg-[#f1f1f1]">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-[48px] md:text-[64px] lg:text-[80px] font-medium tracking-[-0.04em] text-black leading-[1.1]">
              Let's make Design
            </h1>
          </div>

          {/* Designer Info */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-black/10">
              <img
                src="https://framerusercontent.com/images/ob1xkuEYP7cvZ02VMk8oHHsibM.png"
                alt="Mark Jackson"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-[14px] font-medium text-black">Mark Jackson</p>
              <p className="text-[12px] text-[#828487]">Designer</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-16 max-w-[600px]">
            <p className="text-[18px] md:text-[20px] text-black leading-relaxed">
              Let's design your dream space together.
              <br />
              Or maybe you want join our team?
              <br />
              Say hello to us.
            </p>
          </div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 pb-8 border-b border-[#d6dbdc]">
            {/* Social Links */}
            <div>
              <a
                href="#"
                className="block text-[14px] text-black hover:text-[#828487] transition-colors mb-2"
              >
                Instagram
              </a>
              <a
                href="#"
                className="block text-[14px] text-black hover:text-[#828487] transition-colors mb-2"
              >
                Behance
              </a>
              <a
                href="#"
                className="block text-[14px] text-black hover:text-[#828487] transition-colors"
              >
                Twitter
              </a>
            </div>

            {/* Address */}
            <div>
              <p className="text-[12px] text-[#828487] mb-2">Address:</p>
              <p className="text-[14px] text-black">TCXX/2153, MLA Road, Near Devi Temple</p>
              <p className="text-[14px] text-black">Kudapanakunnu, Thiruvananthapuram</p>
              <p className="text-[14px] text-black">Kerala, India</p>
            </div>

            {/* Contact */}
            <div>
              <p className="text-[14px] text-[#828487] mb-1">Tél: (+91) 9946661700 | Mob: (+91) 8907321700</p>
              <p className="text-[18px] md:text-[20px] font-medium text-black">
                fortuneinteriorf3@gmail.com
              </p>
              <p className="text-[12px] text-[#828487] mt-2">Mon - Sat, 11am to 7pm</p>
            </div>
          </div>

          {/* Message Form */}
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8">
            {/* Left Label */}
            <div>
              <h2 className="text-[24px] md:text-[28px] font-medium text-black mb-2">
                Message
              </h2>
              <p className="text-[13px] text-[#828487] leading-relaxed">
                Leave your message and we
                <br />
                will get back to you ASAP
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-[#d6dbdc] py-3 text-[14px] text-black placeholder-[#828487] focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-[#d6dbdc] py-3 text-[14px] text-black placeholder-[#828487] focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#d6dbdc] py-3 text-[14px] text-black placeholder-[#828487] focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={1}
                  className="w-full bg-transparent border-b border-[#d6dbdc] py-3 text-[14px] text-black placeholder-[#828487] focus:outline-none focus:border-black transition-colors resize-none"
                />
              </div>

              {/* Submit Row */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-6">
                <p className="text-[13px] text-[#828487] max-w-[250px]">
                  If you're ready to shape the future with us, your journey could
                  start here.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-3 px-6 py-3 bg-white border border-[#e5e7eb] rounded-full hover:shadow-md transition-all disabled:opacity-50"
                >
                  <span className="text-[14px] font-medium text-black">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                  <div className="w-8 h-8 bg-[#ffd900] rounded-full flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 7H13M13 7L7 1M13 7L7 13"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <p className="text-green-600 text-[14px]">
                  Message sent successfully! We'll get back to you soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-600 text-[14px]">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 md:px-10 lg:px-[42px] border-t border-[#d6dbdc]">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="mb-12">
            <p className="text-[12px] font-medium text-[#c9a962] uppercase tracking-wider mb-2">
              OUR CLIENTS SAY
            </p>
            <p className="text-[14px] text-[#828487]">
              The warm words of our
              <br />
              <span className="text-black underline">clients</span> let us achieve
              more
            </p>
          </div>

          {/* Testimonial Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12">
            {/* Left - Client Info */}
            <div className="flex flex-col items-start">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-black/10 mb-4">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[14px] font-medium text-black">{current.name}</p>
              <p className="text-[12px] text-[#828487]">{current.role}</p>
            </div>

            {/* Right - Testimonial */}
            <div>
              {/* Quote Icon */}
              <div className="text-[48px] text-[#c9a962] leading-none mb-4">"</div>

              {/* Quote */}
              <blockquote className="text-[24px] md:text-[32px] lg:text-[36px] font-medium text-black leading-[1.3] tracking-[-0.02em] mb-6">
                {current.quote}
              </blockquote>

              {/* Description */}
              <p className="text-[14px] text-[#828487] leading-relaxed max-w-[600px] mb-8">
                {current.description}
              </p>

              {/* Navigation */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-[#d6dbdc] flex items-center justify-center hover:border-black transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 12L6 8L10 4"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-[#d6dbdc] flex items-center justify-center hover:border-black transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
