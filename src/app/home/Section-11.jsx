"use client";
import { useState, useRef, useEffect } from 'react';

export default function Section11() {
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
        {/* Top Border */}
        <div className="border-t border-gray-300 pt-6 mb-8">
          {/* Header */}
          <span 
            className={`font-sans text-xs font-semibold tracking-widest text-black uppercase transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            HOW WE CREATE
          </span>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Row 1 */}
          <div className="grid grid-cols-12 gap-5 mb-5">
            {/* Title + Line */}
            <div 
              className={`col-span-3 flex flex-col justify-start pt-4 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <h2 className="font-serif text-5xl md:text-6xl font-normal text-black mb-8">
                We are:
              </h2>
              <div className="w-32 h-px bg-gray-300"></div>
            </div>

            {/* Image 1 - Hands working */}
            <div 
              className={`col-span-3 transition-all duration-700 delay-150 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=400&fit=crop"
                  alt="Working hands"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Block */}
            <div 
              className={`col-span-3 flex items-center transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                The team works like storytellers, turning spaces into narratives you'll love living in.
              </p>
            </div>

            {/* Image 2 - Woman designing */}
            <div 
              className={`col-span-3 transition-all duration-700 delay-250 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=400&fit=crop"
                  alt="Designer working"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Row 2 - 4 Images */}
          <div className="grid grid-cols-12 gap-5 mb-5">
            {/* Image 3 - Woman on phone */}
            <div 
              className={`col-span-3 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop"
                  alt="Woman on phone"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Image 4 - Woman at window */}
            <div 
              className={`col-span-3 transition-all duration-700 delay-350 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=500&fit=crop"
                  alt="Woman looking out window"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Image 5 - Hands with pin */}
            <div 
              className={`col-span-3 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=500&fit=crop"
                  alt="Blueprint planning"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Image 6 - Team working */}
            <div 
              className={`col-span-3 transition-all duration-700 delay-450 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=400&h=500&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Row 3 - Text + Image + Text */}
          <div className="grid grid-cols-12 gap-5">
            {/* Text Block Left */}
            <div 
              className={`col-span-3 flex items-end pb-8 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                Our process is alive — adapting, refining, and growing with your vision. Always.
              </p>
            </div>

            {/* Empty space */}
            <div className="col-span-3"></div>

            {/* Image 7 - Two people working */}
            <div 
              className={`col-span-3 transition-all duration-700 delay-550 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=500&fit=crop"
                  alt="Collaborative work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Block Right */}
            <div 
              className={`col-span-3 flex items-end pb-8 transition-all duration-700 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                Like artists with a blank canvas, we transform rooms into living works of art.
              </p>
            </div>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden">
          {/* Title */}
          <h2 
            className={`font-serif text-5xl font-normal text-black mb-8 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            We are:
          </h2>
          <div className="w-24 h-px bg-gray-300 mb-8"></div>

          {/* Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Image 1 */}
            <div 
              className={`transition-all duration-700 delay-150 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=400&fit=crop"
                  alt="Working hands"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Block 1 */}
            <div 
              className={`flex items-center transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                The team works like storytellers, turning spaces into narratives you'll love living in.
              </p>
            </div>

            {/* Image 2 */}
            <div 
              className={`transition-all duration-700 delay-250 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=400&fit=crop"
                  alt="Designer working"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Image 3 */}
            <div 
              className={`transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=400&fit=crop"
                  alt="Woman on phone"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Image 4 */}
            <div 
              className={`transition-all duration-700 delay-350 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&h=400&fit=crop"
                  alt="Woman at window"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Block 2 */}
            <div 
              className={`flex items-center transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                Our process is alive — adapting, refining, and growing with your vision. Always.
              </p>
            </div>

            {/* Image 5 */}
            <div 
              className={`transition-all duration-700 delay-450 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500&h=400&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Block 3 */}
            <div 
              className={`flex items-center transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                Like artists with a blank canvas, we transform rooms into living works of art.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block md:hidden">
          {/* Title */}
          <h2 
            className={`font-serif text-4xl font-normal text-black mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            We are:
          </h2>
          <div className="w-20 h-px bg-gray-300 mb-8"></div>

          {/* Stacked content */}
          <div className="space-y-6">
            {/* Image 1 */}
            <div 
              className={`transition-all duration-700 delay-150 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=400&fit=crop"
                  alt="Working hands"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text 1 */}
            <p 
              className={`font-sans text-sm text-gray-500 leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              The team works like storytellers, turning spaces into narratives you'll love living in.
            </p>

            {/* Image 2 */}
            <div 
              className={`transition-all duration-700 delay-250 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=400&fit=crop"
                  alt="Designer working"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Images Grid 2x2 */}
            <div className="grid grid-cols-2 gap-3">
              <div 
                className={`aspect-square rounded-lg overflow-hidden transition-all duration-700 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop"
                  alt="Woman on phone"
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className={`aspect-square rounded-lg overflow-hidden transition-all duration-700 delay-350 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&h=300&fit=crop"
                  alt="Woman at window"
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className={`aspect-square rounded-lg overflow-hidden transition-all duration-700 delay-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=300&h=300&fit=crop"
                  alt="Blueprint"
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className={`aspect-square rounded-lg overflow-hidden transition-all duration-700 delay-450 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=300&h=300&fit=crop"
                  alt="Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text 2 */}
            <p 
              className={`font-sans text-sm text-gray-500 leading-relaxed transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Our process is alive — adapting, refining, and growing with your vision. Always.
            </p>

            {/* Image 3 */}
            <div 
              className={`transition-all duration-700 delay-550 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=400&fit=crop"
                  alt="Collaborative work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text 3 */}
            <p 
              className={`font-sans text-sm text-gray-500 leading-relaxed transition-all duration-700 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Like artists with a blank canvas, we transform rooms into living works of art.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
