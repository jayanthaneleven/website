"use client";
import { useState, useEffect, useRef } from 'react';

// Team members data
const teamMembers = [
  {
    id: 1,
    name: "Valeria Novikova",
    role: "Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=face",
    size: "normal",
  },
  {
    id: 2,
    name: "Alex Podzemsky",
    role: "Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
    size: "normal",
  },
  {
    id: 3,
    name: "Helen Reeves",
    role: "Designer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face",
    size: "normal",
  },
  {
    id: 4,
    name: "Mark Jackson",
    role: "Owner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face",
    size: "large",
    quote: "We are here to create space that will inspire you.",
  },
  {
    id: 5,
    name: "Tanya Rodriguez",
    role: "HR",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
    size: "normal",
  },
];

export default function Section5() {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards((prev) => [...new Set([...prev, index])]);
            }, index * 100);
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(card);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // Split team members for layout
  const topRow = teamMembers.slice(0, 3); // Valeria, Alex, Helen
  const ownerMember = teamMembers[3]; // Mark Jackson
  const hrMember = teamMembers[4]; // Tanya Rodriguez

  return (
    <section className="bg-neutral-100 py-20 px-5 md:px-10 min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <span className="font-sans text-xs font-semibold tracking-widest text-black uppercase mb-4 block">
          WHO WORK FOR YOU
        </span>
        <p className="font-sans text-sm text-gray-500 mb-8 max-w-xs">
          The team which changes the world of interior design
        </p>
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal text-black text-center mb-16">
          The Team:
        </h2>
      </div>

      {/* Team Grid - Desktop Layout */}
      <div className="max-w-7xl mx-auto">
        {/* Description + Top Row */}
        <div className="flex flex-col xl:flex-row gap-8 mb-8">
          {/* Left - Description */}
          <div className="xl:w-1/3">
            <div className="text-gray-400 text-2xl mb-4">∞</div>
            <p className="font-sans text-xl md:text-2xl font-semibold text-black leading-relaxed max-w-md">
              We are a passionate team of designers dedicated to transforming your vision into beautifully crafted spaces.
            </p>
          </div>

          {/* Right - Top 3 Team Members */}
          <div className="xl:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {topRow.map((member, index) => (
              <div
                key={member.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`transition-all duration-700 ease-out ${
                  visibleCards.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="font-sans text-sm font-medium text-white">{member.name}</p>
                    <p className="font-sans text-xs text-white/80">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - Divider + Owner + HR + Stats */}
        <div className="flex flex-col xl:flex-row gap-8 items-start">
          {/* Divider Line */}
          <div className="hidden xl:block xl:w-1/3 pt-8">
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          {/* Owner Card - Large */}
          <div
            ref={(el) => (cardRefs.current[3] = el)}
            className={`xl:w-1/3 transition-all duration-700 ease-out ${
              visibleCards.includes(3)
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden group">
              <img
                src={ownerMember.image}
                alt={ownerMember.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-white">→</span>
                </div>
                <p className="font-sans text-sm font-medium text-white">{ownerMember.name}</p>
                <p className="font-sans text-xs text-white/80 mb-4">{ownerMember.role}</p>
                <p className="font-sans text-sm text-white/90 leading-relaxed">
                  {ownerMember.quote}
                </p>
              </div>
            </div>
          </div>

          {/* HR Card */}
          <div
            ref={(el) => (cardRefs.current[4] = el)}
            className={`xl:w-1/6 transition-all duration-700 ease-out ${
              visibleCards.includes(4)
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative aspect-square rounded-xl overflow-hidden group">
              <img
                src={hrMember.image}
                alt={hrMember.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="font-sans text-sm font-medium text-white">{hrMember.name}</p>
                <p className="font-sans text-xs text-white/80">{hrMember.role}</p>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div
            ref={(el) => (cardRefs.current[5] = el)}
            className={`xl:w-1/6 transition-all duration-700 ease-out ${
              visibleCards.includes(5)
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="aspect-square border border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center">
              <span className="font-sans text-5xl font-normal text-black">50<sup className="text-2xl">+</sup></span>
              <span className="font-sans text-sm text-gray-500 mt-2">People in business</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
