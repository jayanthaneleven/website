"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Header from "../components/Header";

export default function Section1() {
  const eleganceRef = useRef(null);
  const playsRef = useRef(null);

  useEffect(() => {
    // Create infinite, smooth background animation for masked text
    // Using linear ease for perfectly consistent motion with no acceleration
    const tl = gsap.timeline({ repeat: -1 });
    
    // Animate background position to create slow drifting parallax effect inside text mask
    tl.to([eleganceRef.current, playsRef.current], {
      backgroundPosition: "100% 60%",
      duration: 25,
      ease: "none",
    }).to([eleganceRef.current, playsRef.current], {
      backgroundPosition: "0% 40%",
      duration: 25,
      ease: "none",
    });

    return () => tl.kill();
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Modern living room interior"
          className="w-full h-full object-cover object-center"
        />
        <img
          src="/overlay-bg.png"
          alt="Gradient Overlay"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>

      {/* Header */}
      <Header variant="light" />

      {/* Middle Content - We Craft + Services */}
      <div className="relative z-10 px-6 md:px-12 lg:px-16 mt-16 sm:mt-20 lg:mt-32">
        {/* Mobile Layout - Dark Box with all content */}
        <div className="lg:hidden grid sm:flex justify-around p-6 rounded-lg w-full">
          <div className="flex flex-col gap-0 mb-6">
            <p className="font-sans text-[24px] sm:text-[20px] text-white tracking-[0.5px] font-medium leading-[1.5]">
              We Craft Interiors
            </p>
            <p className="font-sans text-[20px] sm:text-[20px] text-[#C4A052] font-normal leading-[1.5]">
              Since 2014
            </p>
          </div>
          
          {/* Services List - Visible on mobile */}
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[16px] text-white/90 font-medium">Tech Specifications</span>
            <span className="font-sans text-[16px] text-white/90 font-medium">Design Project</span>
            <span className="font-sans text-[16px] text-white/90 font-medium">3D visualisation</span>
          </div>
        </div>

        {/* Desktop Layout - Grid */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-start justify-between">
          {/* Left - We Craft Interiors */}
          <div className="flex flex-col gap-0">
            <p className="font-sans text-[15px] text-white tracking-[0.5px] font-medium leading-[1.5]">
              We Craft Interiors
            </p>
            <p className="font-sans text-[15px] text-[#C4A052] font-normal leading-[1.5]">
              Since 2014
            </p>
          </div>

          {/* Center - Decorative Vertical Line */}
          <div className="flex flex-col items-center mx-32">
            <div className="w-px h-32 bg-white/20"></div>
            <div className="w-2 h-px bg-white/20 mt-2"></div>
          </div>

          {/* Right - Services List */}
          <div className="flex flex-col gap-1 items-end mt-0 mr-12">
            <div className="flex items-center gap-3 mb-1">
              <span className="w-16 h-px bg-white/25"></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-sans text-[12px] text-white/70">Tech Specifications</span>
              <span className="text-white/50 text-[10px]">◐</span>
            </div>
            <span className="font-sans text-[12px] text-white/70">Design Project</span>
            <span className="font-sans text-[12px] text-white/70">3D visualisation</span>
          </div>
        </div>
      </div>

      {/* Main Headline - Fortune stays where elegance plays */}
      <div className="absolute top-[60%] sm:top-[68%] lg:top-[70%] bottom-0 left-0 right-0 z-10 px-4 sm:px-8 md:px-12 lg:px-16 flex items-end pb-[8%] sm:pb-[5%]">
        <h1 className="font-bold leading-[1.05] tracking-[-0.02em] w-full" style={{ fontFamily: '"Inter", "Inter Placeholder", sans-serif' }}>
          <span 
            className="block text-white text-[30px] sm:text-[42px] md:text-[56px] lg:text-[80px] xl:text-[110px] uppercase"
            style={{ textShadow: '0 4px 60px rgba(0,0,0,0.3)' }}
          >
            Fortune Stays Where
          </span>
          <span 
            className="block text-right text-[56px] sm:text-[42px] md:text-[56px] lg:text-[80px] xl:text-[110px] uppercase pl-[3%] sm:pl-[8%] md:pl-[10%] lg:pl-[12%]"
            style={{ textShadow: '0 4px 60px rgba(0,0,0,0.3)' }}
          >
            {/* Elegance - Masked Text with Animated Interior Visual */}
            <span 
              ref={eleganceRef}
              className="inline-block uppercase"
              style={{
                fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                backgroundImage: 'url("https://framerusercontent.com/images/FpPi9B2zCgJZautRGXpCZtzKgA.gif")',
                backgroundSize: '200% 200%',
                backgroundPosition: '0% 40%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Elegance
            </span>
            <span className="text-white"> </span>
            {/* Plays - Masked Text with Animated Interior Visual */}
            <span 
              ref={playsRef}
              className="inline-block uppercase"
              style={{
                fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                backgroundImage: 'url("https://framerusercontent.com/images/FpPi9B2zCgJZautRGXpCZtzKgA.gif")',
                backgroundSize: '200% 200%',
                backgroundPosition: '0% 40%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Plays
            </span>
          </span>
        </h1>
      </div>
    </section>
  );
}
