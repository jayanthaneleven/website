"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Header from "../components/Header";

const projectsData = [
  {
    id: 1,
    title: "Sweden melody",
    location: "France, Paris",
    date: "Jun 10, 2021",
    image: "/project/proimg1.png",
    clientName: "Marina Li",
    clientAvatar: "https://framerusercontent.com/images/46pZyTt33EheY5tVRHk7ySHT21g.png",
    category: "commercial",
  },
  {
    id: 2,
    title: "Modern Mix",
    location: "Amsterdam, Netherlands",
    date: "Aug 6, 2023",
    image: "/project/proimg2.png",
    clientName: "Nicola Jowicev",
    clientAvatar: "https://framerusercontent.com/images/ob1xkuEYP7cvZ02VMk8oHHsibM.png",
    category: "commercial",
  },
  {
    id: 3,
    title: "Airy cave",
    location: "Madrid, Spain",
    date: "Apr 9, 2020",
    image: "/project/proimg3.png",
    clientName: "Alex Sarr",
    clientAvatar: "https://framerusercontent.com/images/0NtfEb6p7C9ZBUTh09tAf2uWc.png",
    category: "commercial",
  },
  {
    id: 4,
    title: "Pixy Agency Office",
    location: "Berlin, Germany",
    date: "Dec 2, 2024",
    image: "/project/proimg4.png",
    clientName: "Alisa Kim",
    clientAvatar: "https://framerusercontent.com/images/MzK2YM80FMJmtVEeAv4QsmAmjT0.png",
    category: "office",
  },
  {
    id: 5,
    title: "Old Cousine",
    location: "Copenhagen, Denmark",
    date: "Nov 20, 2024",
    image: "/project/proimg5.png",
    clientName: "Morgan Dufresne",
    clientAvatar: "https://framerusercontent.com/images/l8YnPfO1KlKps6bo2S4dz5wpFKs.png",
    category: "commercial",
  },
  {
    id: 6,
    title: "Elegant Living Space",
    location: "Thiruvananthapuram, Kerala",
    date: "Jan 15, 2025",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&h=900&fit=crop&q=90",
    clientName: "Rahul Menon",
    clientAvatar: "https://framerusercontent.com/images/46pZyTt33EheY5tVRHk7ySHT21g.png",
    category: "home",
  },
  {
    id: 7,
    title: "Serene Bedroom Retreat",
    location: "Kochi, Kerala",
    date: "Feb 20, 2025",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1600&h=900&fit=crop&q=90",
    clientName: "Priya Nair",
    clientAvatar: "https://framerusercontent.com/images/MzK2YM80FMJmtVEeAv4QsmAmjT0.png",
    category: "home",
  },
  {
    id: 8,
    title: "Modern Culinary Kitchen",
    location: "Kozhikode, Kerala",
    date: "Mar 5, 2025",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&h=900&fit=crop&q=90",
    clientName: "Arun Kumar",
    clientAvatar: "https://framerusercontent.com/images/ob1xkuEYP7cvZ02VMk8oHHsibM.png",
    category: "home",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "home", label: "Home" },
  { id: "office", label: "Office" },
  { id: "commercial", label: "Commercial" },
];

// Logomark SVG component
const LogoMark = () => (
  <svg
    className="w-6 h-6 opacity-60"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5" fill="none" />
  </svg>
);

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section className="min-h-screen bg-white">
      {/* Header */}
      <Header variant="dark" />

      {/* Main Content */}
      <div className="px-8 md:px-12 lg:px-16 py-16 md:py-24">
        {/* Decorative vertical line */}
        <div className="w-[1px] h-20 bg-gray-200 mb-8 ml-[35%] hidden lg:block" />

        {/* Title */}
        <h1 className="text-[56px] md:text-[80px] lg:text-[110px] font-medium leading-[1] tracking-[-0.03em] text-black mb-10 text-center">
          Our Projects
        </h1>

        {/* Categories Filter */}
        <div className="flex items-center justify-center gap-6 md:gap-10 mb-16 md:mb-20">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`text-[14px] md:text-[16px] font-medium transition-colors duration-300 ${
                activeCategory === category.id
                  ? "text-black"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-12 md:gap-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const slug = project.title.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link
      ref={cardRef}
      href={`/projects/${slug}`}
      className={`block group transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image Container - Panoramic strip */}
      <div className="relative w-full aspect-[21/7] md:aspect-[21/6] rounded-lg overflow-hidden mb-5 bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Logo mark in corner */}
        <div className="absolute top-5 right-5">
          <LogoMark />
        </div>
      </div>

      {/* Project Info Row */}
      <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-0">
        {/* Left - Date */}
        <div className="md:w-[140px] flex-shrink-0">
          <p className="text-[13px] text-gray-400">
            {project.date}
          </p>
        </div>

        {/* Center - Title and Location */}
        <div className="flex-1 md:pl-8">
          <h3 className="text-[24px] md:text-[28px] font-medium text-black tracking-[-0.02em] leading-tight mb-1">
            {project.title}
          </h3>
          <p className="text-[14px] text-gray-400">
            {project.location}
          </p>
        </div>

        {/* Right - Client */}
        <div className="flex items-center gap-3 md:ml-auto mt-3 md:mt-0">
          <span className="text-[13px] text-gray-400">Client:</span>
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-gray-100">
              <img
                src={project.clientAvatar}
                alt={project.clientName}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[14px] font-medium text-black">
              {project.clientName}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
