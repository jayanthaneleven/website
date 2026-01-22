"use client";
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Projects data array
const projectsData = [
  {
    id: 1,
    title: "Sweden melody",
    location: "Paris, France",
    year: 2019,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=1000&fit=crop",
  },
  {
    id: 2,
    title: "Modern mix",
    location: "Madrid, Spain",
    year: 2021,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=1000&fit=crop",
  },
  {
    id: 3,
    title: "Airy cave",
    location: "Amsterdam, Netherlands",
    year: 2023,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=1000&fit=crop",
  },
  {
    id: 4,
    title: "Urban loft",
    location: "Berlin, Germany",
    year: 2022,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=1000&fit=crop",
  },
  {
    id: 5,
    title: "Coastal retreat",
    location: "Lisbon, Portugal",
    year: 2024,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=1000&fit=crop",
  },
  {
    id: 6,
    title: "Minimalist haven",
    location: "Copenhagen, Denmark",
    year: 2023,
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=1000&fit=crop",
  },
];

export default function Section3() {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section className="bg-neutral-100 py-20 px-5 md:px-10 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start max-w-7xl mx-auto mb-12 gap-6">
        <div className="flex flex-col gap-4">
          <span className="font-sans text-xs font-semibold tracking-widest text-black uppercase">
            WHAT WE PROUD OF
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-black">
            Our Projects:
          </h2>
        </div>
        <div className="flex items-center gap-4 mt-0 md:mt-10">
          <button 
            onClick={handlePrev}
            className="flex items-center justify-center w-12 h-12 bg-white border border-gray-200 rounded-full cursor-pointer transition-all duration-300 text-black hover:bg-black hover:text-white hover:border-black"
            aria-label="Previous"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            onClick={handleNext}
            className="flex items-center justify-center gap-2 py-3 px-5 bg-white border border-gray-200 rounded-full cursor-pointer transition-all duration-300 text-black font-sans text-sm hover:bg-black hover:text-white hover:border-black"
            aria-label="Next"
          >
            <span>Next</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Swiper Carousel */}
      <div className="max-w-7xl mx-auto overflow-hidden">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1.2}
          loop={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 3.2,
              spaceBetween: 32,
            },
          }}
          className="overflow-visible!"
        >
          {projectsData.map((project, index) => (
            <SwiperSlide key={project.id}>
              <div className={`cursor-grab active:cursor-grabbing group `}>
                <div className={`relative w-full  ${index % 2 === 0 ? 'aspect-3/4' : 'aspect-4/5'} rounded-2xl overflow-hidden mb-4`}    >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="rgba(255,255,255,0.6)"/>
                    </svg>
                  </div>
                </div>
                <div className="px-1">
                  <h3 className="font-serif text-2xl font-normal text-black mb-2">{project.title}</h3>
                  <p className="font-sans text-sm text-gray-600 mb-1">{project.location}</p>
                  <p className="font-sans text-sm text-gray-400">{project.year}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
