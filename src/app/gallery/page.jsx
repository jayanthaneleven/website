"use client";

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

// Gallery data - projects/sites done by the company
const projects = [
  {
    id: 'villa-serenity',
    name: 'Villa Serenity',
    location: 'Mumbai, India',
    category: 'Residential',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  },
  {
    id: 'modern-loft',
    name: 'Modern Loft',
    location: 'Bangalore, India',
    category: 'Apartment',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
  },
  {
    id: 'coastal-retreat',
    name: 'Coastal Retreat',
    location: 'Goa, India',
    category: 'Villa',
    year: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
  {
    id: 'urban-penthouse',
    name: 'Urban Penthouse',
    location: 'Delhi, India',
    category: 'Penthouse',
    year: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
  },
  {
    id: 'heritage-home',
    name: 'Heritage Home',
    location: 'Jaipur, India',
    category: 'Residential',
    year: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
  {
    id: 'minimalist-studio',
    name: 'Minimalist Studio',
    location: 'Pune, India',
    category: 'Studio',
    year: '2022',
    thumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
  },
  {
    id: 'luxury-apartment',
    name: 'Luxury Apartment',
    location: 'Hyderabad, India',
    category: 'Apartment',
    year: '2022',
    thumbnail: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
  },
  {
    id: 'garden-villa',
    name: 'Garden Villa',
    location: 'Chennai, India',
    category: 'Villa',
    year: '2022',
    thumbnail: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
  },
];

const categories = ['All', 'Residential', 'Apartment', 'Villa', 'Penthouse', 'Studio'];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <main className="bg-white min-h-screen">
      <Header variant="dark" />

      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 pb-12 px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Vertical Line */}
          <div className="relative mb-12">
            <div className="absolute left-0 top-0 w-px h-20 bg-black/20"></div>
            <div className="absolute left-[-2px] top-20 w-[5px] h-[5px] border border-black/30 rotate-45"></div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mt-24">
            <div>
              <h1 className="font-serif text-[48px] md:text-[64px] lg:text-[80px] xl:text-[100px] font-normal leading-[0.95] tracking-[-0.02em] text-black">
                Our Gallery
              </h1>
              <p className="font-sans text-[16px] md:text-[18px] text-black/60 mt-6 max-w-[500px]">
                Explore our portfolio of beautifully crafted interiors. Each project tells a unique story of elegance and functionality.
              </p>
            </div>

            {/* Project Count */}
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-[64px] md:text-[80px] font-normal text-black leading-none">
                {projects.length}
              </span>
              <span className="font-sans text-[14px] text-black/50">Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-6 md:px-12 lg:px-16 xl:px-20 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full font-sans text-[14px] transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-black text-white'
                    : 'bg-transparent text-black border border-black/20 hover:border-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 md:px-12 lg:px-16 xl:px-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                href={`/gallery/${project.id}`}
                className="group cursor-pointer"
              >
                {/* Image Container */}
                <div className={`relative overflow-hidden rounded-lg ${
                  index === 0 || index === 3 ? 'h-[400px] md:h-[500px]' : 'h-[300px] md:h-[350px]'
                }`}>
                  <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500"></div>
                  
                  {/* View Project Button - appears on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="px-6 py-3 bg-white text-black font-sans text-[14px] rounded-full">
                      View Project
                    </span>
                  </div>

                  {/* Category Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-black font-sans text-[12px] rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="mt-4 flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-[22px] md:text-[26px] font-normal text-black group-hover:text-black/70 transition-colors">
                      {project.name}
                    </h3>
                    <p className="font-sans text-[14px] text-black/50 mt-1">
                      {project.location}
                    </p>
                  </div>
                  <span className="font-sans text-[14px] text-black/40">
                    {project.year}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 lg:px-16 xl:px-20 bg-[#F8F8F8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-[32px] md:text-[40px] lg:text-[48px] font-normal text-black mb-6">
            Have a project in mind?
          </h2>
          <p className="font-sans text-[16px] md:text-[18px] text-black/60 mb-10 max-w-[500px] mx-auto">
            Let's create something beautiful together. Our team is ready to transform your space.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 px-8 py-4 bg-black text-white font-sans text-[15px] rounded-full hover:bg-black/80 transition-colors"
          >
            Start a Project
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
