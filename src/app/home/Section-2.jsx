"use client";
import { useState, useEffect, useRef } from 'react';

// Counter hook for animated numbers
function useCountUp(end, duration = 2000, startCounting = false) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!startCounting) return;
    
    let startTime = null;
    const startValue = 0;
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, startCounting]);
  
  return count;
}

export default function Section2() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Intersection Observer for scroll detection
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
  
  // Animated counters
  const yearCount = useCountUp(2014, 2000, isVisible);
  const projectsCount = useCountUp(304, 2000, isVisible);
  const clientsCount = useCountUp(189, 2000, isVisible);
  const workCount = useCountUp(12, 1500, isVisible);

  return (
    <section className="bg-neutral-100 py-20 px-5 md:px-10 min-h-screen relative" ref={sectionRef}>
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start gap-3 md:gap-6 max-w-6xl mx-auto mb-16 md:mb-20 md:pl-16">
        <span className="font-sans text-sm text-gray-500 shrink-0">2025</span>
        <div className="font-sans text-lg md:text-2xl leading-relaxed text-black">
          <p>Whether it's your home, office, or a commercial project, we are</p>
          <p>always dedicated to bringing your vision to life.</p>
          <p><strong className="font-semibold">Our numbers speak better than words:</strong></p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 max-w-7xl mx-auto relative">
        {/* Stat 1 - Year of establishment */}
        <div className="relative p-5">
          <h2 className="font-sans text-6xl md:text-7xl lg:text-8xl font-normal text-black mb-2 leading-none">{yearCount}</h2>
          <h3 className="font-sans text-lg font-semibold text-black mb-1">Year of establishment</h3>
          <p className="font-sans text-sm text-gray-500 mb-4">More than 10 years in the field</p>
          <div className="flex">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="Team member" className="w-10 h-10 rounded-full border-2 border-neutral-100 object-cover" />
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" alt="Team member" className="w-10 h-10 rounded-full border-2 border-neutral-100 object-cover -ml-2" />
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" alt="Team member" className="w-10 h-10 rounded-full border-2 border-neutral-100 object-cover -ml-2" />
          </div>
          {/* Connector line - hidden on mobile */}
          <div className="hidden xl:block absolute bottom-16 left-28 w-[calc(100%-40px)] h-px bg-gray-300 after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-1.5 after:h-1.5 after:bg-gray-300 after:rounded-full before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-gray-300 before:rounded-full"></div>
        </div>

        {/* Stat 2 - Projects launched */}
        <div className="relative p-5 xl:mt-28">
          <h2 className="font-sans text-6xl md:text-7xl lg:text-8xl font-normal text-black mb-2 leading-none">{projectsCount}</h2>
          <h3 className="font-sans text-lg font-semibold text-black mb-1">Projects are launched</h3>
          <p className="font-sans text-sm text-gray-500 mb-4">A lot of projects are done</p>
          <div className="flex gap-1">
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=100&h=100&fit=crop" alt="Project" className="w-12 h-12 rounded-lg object-cover" />
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=100&h=100&fit=crop" alt="Project" className="w-12 h-12 rounded-lg object-cover" />
            <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=100&h=100&fit=crop" alt="Project" className="w-12 h-12 rounded-lg object-cover" />
          </div>
          {/* Connector line */}
          <div className="hidden xl:block absolute bottom-20 left-32 w-[calc(100%+60px)] h-px bg-gray-300 after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-1.5 after:h-1.5 after:bg-gray-300 after:rounded-full before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-gray-300 before:rounded-full"></div>
        </div>

        {/* Stat 3 - Clients satisfied */}
        <div className="relative p-5">
          <h2 className="font-sans text-6xl md:text-7xl lg:text-8xl font-normal text-black mb-2 leading-none">{clientsCount}</h2>
          <h3 className="font-sans text-lg font-semibold text-black mb-1">Clients are satisfied</h3>
          <p className="font-sans text-sm text-gray-500 mb-4">These people love us</p>
          <div className="flex">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" alt="Client" className="w-10 h-10 rounded-full border-2 border-neutral-100 object-cover" />
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" alt="Client" className="w-10 h-10 rounded-full border-2 border-neutral-100 object-cover -ml-2" />
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop&crop=face" alt="Client" className="w-10 h-10 rounded-full border-2 border-neutral-100 object-cover -ml-2" />
          </div>
        </div>

        {/* Stat 4 - Projects in work */}
        <div className="relative p-5 xl:mt-28">
          <h2 className="font-sans text-6xl md:text-7xl lg:text-8xl font-normal text-black mb-2 leading-none">{workCount}</h2>
          <h3 className="font-sans text-lg font-semibold text-black mb-1">Projects in work</h3>
          <p className="font-sans text-sm text-gray-500 mb-4">What we do right now</p>
          <div className="flex gap-1">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100&h=100&fit=crop" alt="Project" className="w-12 h-12 rounded-lg object-cover" />
            <img src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=100&h=100&fit=crop" alt="Project" className="w-12 h-12 rounded-lg object-cover" />
            <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=100&h=100&fit=crop" alt="Project" className="w-12 h-12 rounded-lg object-cover" />
          </div>
          {/* Connector line */}
          <div className="hidden xl:block absolute bottom-20 left-32 w-[calc(100%-140px)] h-px bg-gray-300 after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-1.5 after:h-1.5 after:bg-gray-300 after:rounded-full before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-gray-300 before:rounded-full"></div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-16">
        <a href="#contact" className="flex items-center gap-3 py-4 pl-7 pr-5 bg-white border border-gray-200 rounded-full text-black no-underline text-base font-sans transition-all duration-300 shadow-sm hover:shadow-lg">
          <span>Want your own Design?</span>
          <div className="flex items-center justify-center w-10 h-10 bg-yellow-400 rounded-full text-black">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </a>
        <div className="flex items-center gap-2 font-sans text-sm text-gray-600">
          <span>Slots are available</span>
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        </div>
      </div>
    </section>
  );
}
