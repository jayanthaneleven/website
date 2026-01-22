"use client";
import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  {
    id: 1,
    name: "Morgan Dufresne",
    role: "Company owner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    quote: "From concept to reality, the team turned my vision into a stunning, livable space. I couldn't be happier with this!",
    description: "Morgan wanted a modern, functional office. We delivered a bright, stylish space with smart design solutions, perfectly tailored to his company style.",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    quote: "The attention to detail was extraordinary. Every corner of my home now reflects my personality and lifestyle perfectly.",
    description: "Sarah dreamed of a cozy yet elegant living space. We created a warm atmosphere with carefully curated furniture and lighting that transformed her house into a true home.",
  },
  {
    id: 3,
    name: "David Chen",
    role: "Restaurant Owner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    quote: "They understood exactly what our brand needed. The restaurant design has significantly improved our customer experience.",
    description: "David needed a space that would enhance dining experiences. We designed an inviting atmosphere that perfectly balances aesthetics with functionality.",
  },
];

export default function Section9() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="bg-white py-20 px-5 md:px-10 lg:px-16 "
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div 
          className={`mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="font-sans text-xs font-semibold tracking-widest text-black uppercase mb-4 block">
            OUR CLIENTS SAY
          </span>
          <p className="font-sans text-sm text-gray-500 max-w-xs">
            The warm words of our clients let us achieve more
          </p>
        </div>

        {/* Testimonial Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          onSwiper={() => setSwiperReady(true)}
          className="w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id}>
              <div 
                className={`flex flex-col lg:flex-row gap-10 lg:gap-20 transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                {/* Left - Client Info */}
                <div className="lg:w-1/4">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-sans text-sm font-semibold text-black">
                    {testimonial.name}
                  </h4>
                  <p className="font-sans text-xs text-gray-500">
                    {testimonial.role}
                  </p>
                </div>

                {/* Right - Testimonial Content */}
                <div className="lg:w-3/4">
                  {/* Quote Mark */}
                  <div className="text-gray-300 text-6xl md:text-7xl font-serif leading-none mb-4">
                    "
                  </div>

                  {/* Main Quote */}
                  <h3 className="font-sans text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-snug mb-6">
                    {testimonial.quote}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm md:text-base text-gray-500 leading-relaxed max-w-2xl">
                    {testimonial.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div 
          className={`flex items-center gap-3 mt-10 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            ref={prevRef}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all group"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-600 group-hover:text-white"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            ref={nextRef}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all group"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-600 group-hover:text-white"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
