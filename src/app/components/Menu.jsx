"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

const teamMembers = [
  { name: "Marina Li", avatar: "https://framerusercontent.com/images/46pZyTt33EheY5tVRHk7ySHT21g.png" },
  { name: "Nicola Jowicev", avatar: "https://framerusercontent.com/images/ob1xkuEYP7cvZ02VMk8oHHsibM.png" },
  { name: "Alex Sarr", avatar: "https://framerusercontent.com/images/0NtfEb6p7C9ZBUTh09tAf2uWc.png" },
  { name: "Alisa Kim", avatar: "https://framerusercontent.com/images/MzK2YM80FMJmtVEeAv4QsmAmjT0.png" },
  { name: "Morgan Dufresne", avatar: "https://framerusercontent.com/images/l8YnPfO1KlKps6bo2S4dz5wpFKs.png" },
  { name: "Jordan Lee", avatar: "https://framerusercontent.com/images/ob1xkuEYP7cvZ02VMk8oHHsibM.png" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/fortuna._interiors?igsh=dnQ4OGJpcHN4dDN2&utm_source=qr" },
  { label: "Behance", href: "https://behance.net" },
  { label: "Twitter", href: "https://twitter.com" },
];

export default function Menu({ isOpen, onClose }) {
  const menuRef = useRef(null);
  const contentRef = useRef(null);
  const navLinksRef = useRef([]);
  const avatarsRef = useRef(null);
  const socialLinksRef = useRef([]);
  const closeRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Show menu
      gsap.set(menuRef.current, { display: "flex" });
      
      // Animate menu dropping from top
      gsap.fromTo(
        menuRef.current,
        { y: "-100%" },
        { y: "0%", duration: 0.6, ease: "power3.out" }
      );

      // Animate close button
      gsap.fromTo(
        closeRef.current,
        { opacity: 0, rotate: -90 },
        { opacity: 1, rotate: 0, duration: 0.4, delay: 0.3, ease: "power2.out" }
      );

      // Animate nav links
      gsap.fromTo(
        navLinksRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, delay: 0.25, ease: "power2.out" }
      );

      // Animate avatars
      gsap.fromTo(
        avatarsRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.5, delay: 0.5, ease: "power2.out" }
      );

      // Animate social links
      gsap.fromTo(
        socialLinksRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, delay: 0.6, ease: "power2.out" }
      );
    } else {
      // Animate out - slide up
      gsap.to(menuRef.current, {
        y: "-100%",
        duration: 0.5,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(menuRef.current, { display: "none" });
        },
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="fixed inset-0 z-[9999] hidden"
      style={{ display: "none" }}
    >
      {/* Mobile Layout - Single Column */}
      <div className="md:hidden w-full h-full bg-[#000000] flex flex-col p-6 overflow-y-auto">
        {/* Header - Logo + Close */}
        <div className="flex justify-between items-center">
          <Link href="/" onClick={onClose}>
            <span className="font-sans text-[14px] font-bold tracking-[1px] text-white uppercase">
              FORTUNA
            </span>
          </Link>
          <button
            ref={closeRef}
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center hover:opacity-60 transition-opacity"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="mt-8">
          <ul className="space-y-3">
            {navLinks.map((link, index) => (
              <li key={link.label}>
                <Link
                  ref={(el) => (navLinksRef.current[index] = el)}
                  href={link.href}
                  onClick={onClose}
                  className="text-[28px] font-normal text-white hover:text-gray-400 transition-colors leading-[1.4] block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links - Horizontal */}
        <div className="flex gap-6 mt-8">
          {socialLinks.map((link, index) => (
            <a
              key={link.label}
              ref={(el) => (socialLinksRef.current[index] = el)}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-gray-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Images */}
        <div className="relative mt-8 flex-1 min-h-[200px]">
          <div className="relative w-full">
            {/* Main image */}
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl w-[75%]">
              <img
                src="/project/proimg1.png"
                alt="Interior design"
                className="w-full h-[160px] object-cover"
              />
            </div>
            {/* Overlay image */}
            <div className="absolute bottom-[-30px] right-0 z-20 rounded-lg overflow-hidden shadow-2xl w-[55%]">
              <img
                src="/project/proimg2.png"
                alt="Interior design"
                className="w-full h-[100px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-auto pt-12 flex gap-8">
          <div className="text-white text-[12px] leading-[1.8]">
            <p className="font-medium">Kudapanakunnu, Thiruvananthapuram</p>
            <p className="opacity-50">TCXX/2153, MLA Road</p>
            <p className="opacity-50">Near Devi Temple, Kerala</p>
          </div>
          <div className="text-white text-[12px] leading-[1.8]">
            <p className="opacity-50">fortuneinteriorf3@gmail.com</p>
            <p className="opacity-50">(+91) 9946661700</p>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Two Panels */}
      <div className="hidden md:flex w-full h-full">
        {/* Left Panel - Dark with images */}
        <div className="w-1/2 h-full bg-[#000000] flex flex-col justify-between p-10 lg:p-16">
          {/* Logo */}
          <div>
            <Link href="/" onClick={onClose}>
              <span className="font-sans text-[14px] font-bold tracking-[1px] text-white uppercase">
                FORTUNA
              </span>
            </Link>
          </div>

          {/* Images */}
          <div className="relative flex-1 flex items-center py-10">
            <div className="relative w-full max-w-lg">
              {/* Main image */}
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl w-[85%]">
                <img
                  src="/project/proimg1.png"
                  alt="Interior design"
                  className="w-full h-[280px] lg:h-[340px] object-cover"
                />
              </div>
              {/* Overlay image */}
              <div className="absolute bottom-[-20px] right-0 z-20 rounded-lg overflow-hidden shadow-2xl w-[55%]">
                <img
                  src="/project/proimg2.png"
                  alt="Interior design"
                  className="w-full h-[140px] lg:h-[180px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex gap-12 lg:gap-20">
            <div className="text-white text-[13px] leading-[1.9]">
              <p className="font-medium">Kudapanakunnu, Thiruvananthapuram</p>
              <p className="opacity-50">TCXX/2153, MLA Road</p>
              <p className="opacity-50">Near Devi Temple, Kerala</p>
            </div>
            <div className="text-white text-[13px] leading-[1.9]">
              <p className="opacity-50">fortuneinteriorf3@gmail.com</p>
              <p className="opacity-50">(+91) 9946661700</p>
            </div>
          </div>
        </div>

        {/* Right Panel - Dark with navigation */}
        <div className="w-1/2 h-full bg-[#000000] flex flex-col p-10 lg:p-16">
          {/* Close Button */}
          <div className="flex justify-end">
            <button
              ref={closeRef}
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center hover:opacity-60 transition-opacity"
            >
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation and Avatars */}
          <div className="flex-1 flex items-center justify-between">
            {/* Navigation Links */}
            <nav>
              <ul className="space-y-1">
                {navLinks.map((link, index) => (
                  <li key={link.label}>
                    <Link
                      ref={(el) => (navLinksRef.current[index] = el)}
                      href={link.href}
                      onClick={onClose}
                      className="text-[40px] lg:text-[52px] font-normal text-white hover:text-gray-400 transition-colors leading-[1.25] block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Team Avatars - Grid layout with rounded boxes */}
            <div ref={avatarsRef} className="hidden lg:block">
              <div className="grid grid-cols-4 gap-2">
                {teamMembers.slice(0, 4).map((member, index) => (
                  <div
                    key={index}
                    className="w-[60px] h-[60px] xl:w-[72px] xl:h-[72px] rounded-lg overflow-hidden"
                  >
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-4 gap-2 mt-2">
                {teamMembers.slice(4, 6).map((member, index) => (
                  <div
                    key={index}
                    className="w-[60px] h-[60px] xl:w-[72px] xl:h-[72px] rounded-lg overflow-hidden"
                  >
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-auto">
            <div className="flex flex-col gap-1">
              <div className="w-[1px] h-8 bg-white/20 mb-3" />
              {socialLinks.map((link, index) => (
                <a
                  key={link.label}
                  ref={(el) => (socialLinksRef.current[index] = el)}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
