"use client";
import { useState, useEffect, useRef } from 'react';

// Process steps data
const processSteps = [
  {
    id: 1,
    number: "01.",
    title: "Tech specifications",
    description: "Technical assignment, measuring the site, and assessing remodeling needs.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=400&fit=crop",
  },
  {
    id: 2,
    number: "02.",
    title: "Concept, sketches",
    description: "A hand-drawn sketch typically outlines the style and layout of the future interior.",
    image: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?w=800&h=400&fit=crop",
  },
  {
    id: 3,
    number: "03.",
    title: "Design project",
    description: "Details on color schemes, furniture, lighting placement, and technical layouts.",
    image: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=800&h=400&fit=crop",
  },
  {
    id: 4,
    number: "04.",
    title: "3D visualization",
    description: "So that the client can see with his own eyes what he will ultimately receive.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=400&fit=crop",
  },
  {
    id: 5,
    number: "05.",
    title: "Estimation",
    description: "The pricing details and the total cost of the customer's interior design project.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
  },
  {
    id: 6,
    number: "06.",
    title: "Materials, etc.",
    description: "Building materials, components and furniture: everything you need for the interior.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
  },
  {
    id: 7,
    number: "07.",
    title: "Supervision",
    description: "Supervises the work, making sure that the interior exactly as he intended.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=400&fit=crop",
  },
];

export default function Section4() {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);
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
            }, index * 150);
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

  // First card (Tech specifications) - shown separately on xl
  const firstStep = processSteps[0];
  // Row 2 cards (02-05)
  const row2Steps = processSteps.slice(1, 5);
  // Row 3 cards (06-07)
  const row3Steps = processSteps.slice(5);

  return (
    <section className="bg-stone-800 py-20 px-5 md:px-10 min-h-screen" ref={sectionRef}>
      {/* Top Section - Header + First Card */}
      <div className="max-w-7xl mx-auto mb-12 xl:mb-16">
        <div className="xl:grid xl:grid-cols-2 xl:gap-16 xl:items-start">
          {/* Header - Left Side */}
          <div className="mb-12 xl:mb-0">
            <span className="font-sans text-xs font-semibold tracking-widest text-white uppercase mb-4 block">
              HOW WE DO IT
            </span>
            <p className="font-sans text-base text-gray-400 mb-8">
              Our work involves many intricate steps and stages.
            </p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal text-white">
              The Process: <span className="text-gray-500">*</span>
            </h2>
          </div>

          {/* First Card - Right Side on xl */}
          <div
            ref={(el) => (cardRefs.current[0] = el)}
            className={`hidden xl:block transition-all duration-700 ease-out ${
              visibleCards.includes(0)
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-16'
            }`}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-gray-500">→</span>
              <span className="font-sans text-sm text-gray-500">{firstStep.number}</span>
            </div>
            <div className="relative w-full h-36 rounded-xl overflow-hidden mb-6 bg-gray-900">
              <img
                src={firstStep.image}
                alt={firstStep.title}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <h3 className="font-sans text-xl md:text-2xl font-semibold text-white mb-3">
              {firstStep.title}
            </h3>
            <p className="font-sans text-sm md:text-base text-gray-400 leading-relaxed">
              {firstStep.description}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet: All cards in 2-column grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 xl:hidden">
        {processSteps.map((step, index) => (
          <div
            key={step.id}
            className="transition-all duration-700 ease-out opacity-100 translate-y-0"
          >
            <span className="font-sans text-sm text-gray-500 mb-3 block">
              {step.number}
            </span>
            <div className="relative w-full h-36 rounded-xl overflow-hidden mb-6 bg-gray-900">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <h3 className="font-sans text-xl md:text-2xl font-semibold text-white mb-3">
              {step.title}
            </h3>
            <p className="font-sans text-sm md:text-base text-gray-400 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* XL Screen: Row 2 - Cards 02-05 in 4-column grid */}
      <div className="hidden xl:grid max-w-7xl mx-auto grid-cols-4 gap-8 mb-12">
        {row2Steps.map((step, index) => (
          <div
            key={step.id}
            ref={(el) => (cardRefs.current[index + 1] = el)}
            className={`transition-all duration-700 ease-out ${
              visibleCards.includes(index + 1)
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-16'
            }`}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-gray-500">→</span>
              <span className="font-sans text-sm text-gray-500">{step.number}</span>
            </div>
            <div className="relative w-full h-28 rounded-xl overflow-hidden mb-6 bg-gray-900">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <h3 className="font-sans text-lg font-semibold text-white mb-3">
              {step.title}
            </h3>
            <p className="font-sans text-sm text-gray-400 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* XL Screen: Row 3 - Card 06, Note, Card 07 */}
      <div className="hidden xl:grid max-w-7xl mx-auto grid-cols-4 gap-8">
        {/* Empty first column */}
        <div></div>

        {/* Card 06 - Materials */}
        <div
          ref={(el) => (cardRefs.current[5] = el)}
          className={`transition-all duration-700 ease-out ${
            visibleCards.includes(5)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-16'
          }`}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-gray-500">→</span>
            <span className="font-sans text-sm text-gray-500">{row3Steps[0].number}</span>
          </div>
          <div className="relative w-full h-28 rounded-xl overflow-hidden mb-6 bg-gray-900">
            <img
              src={row3Steps[0].image}
              alt={row3Steps[0].title}
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          <h3 className="font-sans text-lg font-semibold text-white mb-3">
            {row3Steps[0].title}
          </h3>
          <p className="font-sans text-sm text-gray-400 leading-relaxed">
            {row3Steps[0].description}
          </p>
        </div>

        {/* Note - Depends on your wishes */}
        <div className="flex items-center justify-center">
          <p className="font-sans text-base text-gray-400">
            <span className="text-yellow-400">*</span> Depends on your wishes
          </p>
        </div>

        {/* Card 07 - Supervision */}
        <div
          ref={(el) => (cardRefs.current[6] = el)}
          className={`transition-all duration-700 ease-out ${
            visibleCards.includes(6)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-16'
          }`}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-gray-500">→</span>
            <span className="font-sans text-sm text-gray-500">{row3Steps[1].number}</span>
          </div>
          <div className="relative w-full h-28 rounded-xl overflow-hidden mb-6 bg-gray-900">
            <img
              src={row3Steps[1].image}
              alt={row3Steps[1].title}
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          <h3 className="font-sans text-lg font-semibold text-white mb-3">
            {row3Steps[1].title}
          </h3>
          <p className="font-sans text-sm text-gray-400 leading-relaxed">
            {row3Steps[1].description}
          </p>
        </div>
      </div>
    </section>
  );
}
