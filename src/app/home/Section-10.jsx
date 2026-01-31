"use client";
import { useState, useRef, useEffect } from 'react';

export default function Section10() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="bg-neutral-100 py-16 px-5 md:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div 
          className={`mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="font-sans text-xs font-semibold tracking-widest text-black uppercase">
           WHY PEOPLE CHOOSE US
          </span>
        </div>

        {/* Title */}
        <h2 
          className={`font-serif text-5xl md:text-6xl lg:text-7xl font-normal text-black text-center mb-12 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Advantages:
        </h2>

        {/* Bento Grid - Desktop */}
        <div className="hidden lg:grid grid-cols-12 grid-rows-2 gap-4 auto-rows-fr">
          {/* Row 1 */}
          
          {/* Card 1: HOUSEMOOD Logo Card */}
          <div 
            className={`col-span-4 row-span-1 bg-white rounded-2xl p-8 flex flex-col justify-center items-center min-h-[320px] transition-all duration-700 delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-center justify-center gap-6 w-full">
              <span className="font-sans text-xs text-gray-400 tracking-wide">Expertise</span>
              <div className="flex items-center gap-3">
                <div className="w-px h-16 bg-gray-200"></div>
                <div className="relative">
                  <span className="text-gold text-4xl font-light">&</span>
                </div>
                <div className="w-px h-16 bg-gray-200"></div>
              </div>
              <span className="font-sans text-xs text-gray-400 tracking-wide">Experience</span>
            </div>
            <div className="mt-6">
              <span className="font-sans text-xl font-bold tracking-wider text-black">
                FORT<span className="text-gold">UNA</span>
              </span>
            </div>
          </div>

          {/* Card 2: Unique Design Aesthetic - Large Image */}
          <div 
            className={`col-span-5 row-span-1 relative rounded-2xl overflow-hidden min-h-[320px] transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop"
              alt="Modern living room"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="font-sans text-lg font-semibold text-white">Unique Design</h3>
              <p className="font-sans text-sm text-white/80">Aesthetic</p>
            </div>
          </div>

          {/* Card 3: Right Column - Two stacked cards */}
          <div className="col-span-3 row-span-1 flex flex-col gap-4">
            {/* Top - Minimalist interior */}
            <div 
              className={`flex-1 relative rounded-2xl overflow-hidden transition-all duration-700 delay-250 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop"
                alt="Minimalist interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Bottom - Innovative Solutions */}
            <div 
              className={`flex-1 relative rounded-2xl overflow-hidden transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop"
                alt="Nature workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-sans text-sm font-medium text-white">Innovative</p>
                  <p className="font-sans text-sm font-medium text-white">Solutions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          
          {/* Card 4: 304 Projects Card */}
          <div 
            className={`col-span-4 row-span-1 relative rounded-2xl overflow-hidden bg-gradient-to-br from-amber-700 to-amber-900 min-h-[320px] transition-all duration-700 delay-350 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="absolute top-6 left-6">
              <div className="flex items-baseline gap-2">
                <span className="font-sans text-6xl font-light text-white/90">304</span>
                <div className="w-5 h-5 rounded-full border border-white/50 flex items-center justify-center">
                  <span className="text-white/50 text-xs">+</span>
                </div>
              </div>
              <p className="font-sans text-xs text-white/70 mt-1">Projects are<br/>launched</p>
            </div>
            {/* Polaroid-style images */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              <div className="w-16 h-20 bg-white p-1 shadow-lg transform -rotate-12">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100&h=100&fit=crop"
                  alt="Project 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-16 h-20 bg-white p-1 shadow-lg transform rotate-6">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=100&h=100&fit=crop"
                  alt="Project 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-16 h-20 bg-white p-1 shadow-lg transform -rotate-3">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=100&h=100&fit=crop"
                  alt="Project 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Card 5: Woman Image */}
          <div 
            className={`col-span-2 row-span-1 relative rounded-2xl overflow-hidden min-h-[320px] transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face"
              alt="Designer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card 6: Serious Attention to Detail */}
          <div 
            className={`col-span-3 row-span-1 bg-neutral-50 rounded-2xl p-6 flex flex-col justify-center min-h-[320px] transition-all duration-700 delay-450 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="text-gold text-lg mb-2">+</div>
            <h3 className="font-sans text-xl md:text-2xl font-semibold text-black leading-tight">
              Serious Attention<br/>to Detail
            </h3>
          </div>

          {/* Card 7: Ceramics Image */}
          <div 
            className={`col-span-3 row-span-1 relative rounded-2xl overflow-hidden min-h-[320px] transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=400&fit=crop"
              alt="Ceramic vases"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
          {/* Card 1: HOUSEMOOD */}
          <div 
            className={`bg-white rounded-2xl p-8 flex flex-col justify-center items-center min-h-[280px] transition-all duration-700 delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-center justify-center gap-4 w-full">
              <span className="font-sans text-xs text-gray-400">Expertise</span>
              <div className="flex items-center gap-2">
                <div className="w-px h-12 bg-gray-200"></div>
                <span className="text-gold text-3xl font-light">&</span>
                <div className="w-px h-12 bg-gray-200"></div>
              </div>
              <span className="font-sans text-xs text-gray-400">Experience</span>
            </div>
            <div className="mt-4">
              <span className="font-sans text-lg font-bold tracking-wider text-black">
                FORT<span className="text-gold">UNA</span>
              </span>
            </div>
          </div>

          {/* Card 2: Living Room */}
          <div 
            className={`relative rounded-2xl overflow-hidden min-h-[280px] transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop"
              alt="Modern living room"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="font-sans text-base font-semibold text-white">Unique Design Aesthetic</h3>
            </div>
          </div>

          {/* Card 3: 304 Projects */}
          <div 
            className={`relative rounded-2xl overflow-hidden bg-gradient-to-br from-amber-700 to-amber-900 min-h-[280px] transition-all duration-700 delay-250 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="absolute top-6 left-6">
              <span className="font-sans text-5xl font-light text-white/90">304+</span>
              <p className="font-sans text-xs text-white/70 mt-1">Projects launched</p>
            </div>
          </div>

          {/* Card 4: Attention to Detail */}
          <div 
            className={`bg-neutral-50 rounded-2xl p-6 flex flex-col justify-center min-h-[280px] transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="text-gold text-lg mb-2">+</div>
            <h3 className="font-sans text-xl font-semibold text-black">
              Serious Attention to Detail
            </h3>
          </div>

          {/* Card 5: Innovative Solutions */}
          <div 
            className={`col-span-2 relative rounded-2xl overflow-hidden min-h-[200px] transition-all duration-700 delay-350 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=300&fit=crop"
              alt="Nature workspace"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <p className="font-sans text-lg font-medium text-white">Innovative Solutions</p>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="grid md:hidden grid-cols-1 gap-4">
          {/* Card 1: HOUSEMOOD */}
          <div 
            className={`bg-white rounded-2xl p-6 flex flex-col justify-center items-center min-h-[200px] transition-all duration-700 delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-center justify-center gap-4 w-full">
              <span className="font-sans text-xs text-gray-400">Expertise</span>
              <span className="text-gold text-2xl font-light">&</span>
              <span className="font-sans text-xs text-gray-400">Experience</span>
            </div>
            <div className="mt-3">
              <span className="font-sans text-base font-bold tracking-wider text-black">
                FORT<span className="text-gold">UNA</span>
              </span>
            </div>
          </div>

          {/* Card 2: Living Room */}
          <div 
            className={`relative rounded-2xl overflow-hidden min-h-[220px] transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop"
              alt="Modern living room"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="font-sans text-base font-semibold text-white">Unique Design Aesthetic</h3>
            </div>
          </div>

          {/* Card 3: 304 Projects */}
          <div 
            className={`relative rounded-2xl overflow-hidden bg-gradient-to-br from-amber-700 to-amber-900 min-h-[180px] p-6 transition-all duration-700 delay-250 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="font-sans text-5xl font-light text-white/90">304+</span>
            <p className="font-sans text-xs text-white/70 mt-1">Projects launched</p>
          </div>

          {/* Card 4: Attention to Detail */}
          <div 
            className={`bg-neutral-50 rounded-2xl p-6 min-h-[140px] transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="text-gold text-lg mb-2">+</div>
            <h3 className="font-sans text-xl font-semibold text-black">
              Serious Attention to Detail
            </h3>
          </div>

          {/* Card 5: Innovative Solutions */}
          <div 
            className={`relative rounded-2xl overflow-hidden min-h-[180px] transition-all duration-700 delay-350 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=300&fit=crop"
              alt="Nature workspace"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <p className="font-sans text-lg font-medium text-white">Innovative Solutions</p>
            </div>
          </div>

          {/* Card 6: Ceramics */}
          <div 
            className={`relative rounded-2xl overflow-hidden min-h-[200px] transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=400&fit=crop"
              alt="Ceramic vases"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
