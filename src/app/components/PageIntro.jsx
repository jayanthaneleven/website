"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function PageIntro({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const brandingRef = useRef(null);
  const taglineRef = useRef(null);
  const yearRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsVisible(false);
        if (onComplete) onComplete();
      },
    });

    // Initial state - elements start invisible
    gsap.set([brandingRef.current, taglineRef.current, yearRef.current], {
      opacity: 0,
      y: 15,
    });

    // Animate branding elements in
    tl.to(brandingRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
    })
      .to(
        taglineRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .to(
        yearRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      )
      // Hold branding on screen
      .to({}, { duration: 1.2 })
      // Fade out - background first, then text with smoke effect
      .to(
        containerRef.current,
        {
          backgroundColor: "transparent",
          duration: 0.6,
          ease: "power2.inOut",
        },
        "exit"
      )
      .to(
        contentRef.current,
        {
          opacity: 0,
          scale: 1.05,
          filter: "blur(8px)",
          duration: 0.8,
          ease: "power2.in",
        },
        "exit+=0.3"
      )
      .to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "exit+=0.3"
      );

    return () => tl.kill();
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999999] bg-white flex items-center justify-center"
    >
        
      <div ref={contentRef} className="flex flex-col items-center">

        <img
          src="/low_poly_horse_no_face_detailingM.png"
          alt="Brand Logo"
          className="mb-2 h-32 w-32 object-contain"
        />

        {/* Brand Logo */}
        <div ref={brandingRef} className="text-center mb-5">
          <h1
            className="text-3xl md:text-4xl font-bold tracking-[0.15em] text-black"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            FORTUNA
          </h1>
        </div>

        {/* Tagline with year */}
        <div className="flex items-center gap-6 text-sm md:text-base">
          <span
            ref={taglineRef}
            className="text-gray-600 tracking-wide"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            We Craft Interiors
          </span>
          <span className="text-amber-500 text-base">+</span>
          <span
            ref={yearRef}
            className="text-gray-600 tracking-wide"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            Since 2021
          </span>
        </div>
      </div>
    </div>
  );
}
