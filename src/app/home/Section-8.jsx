"use client";
import { useEffect, useState, useRef } from 'react';

export default function Section8() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden">
      {/* Background - Three Images Side by Side */}
      <div className="absolute inset-0 flex">
        {/* Left Image - Sofa with pillow */}
        <div className="w-1/3 h-full relative">
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=1200&fit=crop"
            alt="Living room sofa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Center Image - Brown leather sofa with gray wall */}
        <div className="w-1/3 h-full relative">
          <img
            src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=1200&fit=crop"
            alt="Brown leather sofa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Right Image - Wood slat wall with chair */}
        <div className="w-1/3 h-full relative">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=1200&fit=crop"
            alt="Modern chair with wood wall"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full">
        {/* Center Tag - Positioned in center panel upper area */}
        <div 
          className={`absolute top-[38%] left-[36%] transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="font-sans text-xs md:text-sm font-medium text-white/80 leading-relaxed tracking-wide">
            Crafting Environments<br />
            That Inspire
          </p>
        </div>
          
        {/* Main Headline */}
        <div className="absolute bottom-[22%] left-0 right-0 px-6 md:px-10">
          {/* Line 1: It's so Easy to */}
          <h1 
            className={`font-sans font-bold text-[42px] md:text-[80px] lg:text-[110px] xl:text-[130px] leading-[1] tracking-[-0.02em] text-white transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            It's so Easy to
          </h1>
          {/* Line 2: Change the Mood (indented) */}
          <h1 
            className={`font-sans font-bold text-[42px] md:text-[80px] lg:text-[110px] xl:text-[130px] leading-[1] tracking-[-0.02em] ml-[10%] md:ml-[15%] lg:ml-[20%] transition-all duration-1000 delay-200 whitespace-nowrap ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <span className="text-white">Change the Mood</span>
            
          </h1>
        </div>

        {/* Order Button - Bottom center panel */}
        <div 
          className={`absolute bottom-[8%] left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a
            href="#contact"
            className="flex items-center gap-3 bg-neutral-800/60 backdrop-blur-sm border border-white/10 rounded-full pl-5 pr-2 py-2 group hover:bg-neutral-700/60 transition-all"
          >
            <span className="font-sans text-sm text-white/90">Order the Design</span>
            <span className="w-9 h-9 bg-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Decorative Vertical Lines - Between panels */}
      <div 
        className={`absolute top-[32%] left-[33.33%] w-px bg-white/15 transition-all duration-1000 delay-300 ${
          isVisible ? 'h-28 opacity-100' : 'h-0 opacity-0'
        }`}
      ></div>
      <div 
        className={`absolute top-[32%] right-[33.33%] w-px bg-white/15 transition-all duration-1000 delay-400 ${
          isVisible ? 'h-28 opacity-100' : 'h-0 opacity-0'
        }`}
      ></div>

      {/* Corner frame elements */}
      <div className="absolute top-[32%] left-[33.33%] w-3 h-px bg-white/15"></div>
      <div className="absolute top-[32%] right-[33.33%] w-3 h-px bg-white/15 -translate-x-3"></div>
    </section>
  );
}
