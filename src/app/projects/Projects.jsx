"use client";

import { useState, useEffect, useRef } from "react";

const projectsData = [
  {
    id: 1,
    title: "Sweden melody",
    location: "France, Paris",
    date: "Jun 10, 2021",
    image: "/project/proimg1.png",
    clientName: "Marina Li",
    clientAvatar: "https://framerusercontent.com/images/46pZyTt33EheY5tVRHk7ySHT21g.png",
    category: "home",
  },
  {
    id: 2,
    title: "Modern Mix",
    location: "Amsterdam, Netherlands",
    date: "Aug 6, 2023",
    image: "/project/proimg2.png",
    clientName: "Nicola Jowicev",
    clientAvatar: "https://framerusercontent.com/images/ob1xkuEYP7cvZ02VMk8oHHsibM.png",
    category: "home",
  },
  {
    id: 3,
    title: "Airy cave",
    location: "Madrid, Spain",
    date: "Apr 9, 2020",
    image: "/project/proimg3.png",
    clientName: "Alex Sarr",
    clientAvatar: "https://framerusercontent.com/images/0NtfEb6p7C9ZBUTh09tAf2uWc.png",
    category: "home",
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
    category: "different",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "home", label: "Home" },
  { id: "office", label: "Office" },
  { id: "different", label: "Different" },
];

// Logomark SVG component
const LogoMark = () => (
  <svg
    className="w-7 h-4 opacity-80"
    viewBox="0 0 28 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.9"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.12 -2.09808e-05C6.09333 -2.09808e-05 5.14 0.17998 4.26 0.53998C3.39333 0.89998 2.64 1.39998 2 2.03998C1.37333 2.69331 0.88 3.45998 0.52 4.33998C0.173333 5.21998 0 6.18665 0 7.23998C0 8.27998 0.173333 9.23998 0.52 10.12C0.88 11 1.37333 11.7666 2 12.42C2.64 13.0733 3.39333 13.58 4.26 13.94C5.14 14.3 6.09333 14.48 7.12 14.48C8.14667 14.48 9.08667 14.3 9.94 13.94C10.8067 13.58 11.56 13.0733 12.2 12.42C12.84 11.7666 13.3333 10.9933 13.68 10.1C14.0382 9.22427 14.2182 8.27593 14.22 7.25498H14.2403L14.2402 7.21998C14.2402 6.37998 14.4135 5.62665 14.7602 4.95998C15.1202 4.30665 15.6002 3.78665 16.2002 3.39998C16.8135 3.02665 17.5202 2.83998 18.3202 2.83998C18.9069 2.83998 19.4469 2.94665 19.9402 3.15998C20.4335 3.38665 20.8602 3.69331 21.2202 4.07998C21.5935 4.47998 21.8802 4.94665 22.0802 5.47998C22.2802 6.01331 22.3802 6.59998 22.3802 7.23998C22.3802 7.86665 22.2802 8.44665 22.0802 8.97998C21.8802 9.51331 21.5935 9.97998 21.2202 10.38C20.8602 10.78 20.4335 11.0866 19.9402 11.3C19.4469 11.5266 18.9069 11.64 18.3202 11.64C17.7393 11.64 17.1977 11.5289 16.6952 11.3067C16.3229 12.2587 15.8191 13.096 15.1838 13.8184C15.2746 13.8606 15.3667 13.9012 15.4602 13.94C16.3402 14.3 17.2935 14.48 18.3202 14.48C19.3469 14.48 20.2869 14.3 21.1402 13.94C22.0069 13.58 22.7602 13.0733 23.4002 12.42C24.0402 11.7666 24.5335 10.9933 24.8802 10.1C25.2402 9.21998 25.4202 8.26665 25.4202 7.23998C25.4202 6.19998 25.2402 5.23998 24.8802 4.35998C24.5335 3.47998 24.0402 2.71331 23.4002 2.05998C22.7602 1.40665 22.0069 0.89998 21.1402 0.53998C20.2869 0.17998 19.3469 -2.09808e-05 18.3202 -2.09808e-05C17.2935 -2.09808e-05 16.3402 0.17998 15.4602 0.53998C14.5935 0.89998 13.8402 1.39998 13.2002 2.03998C12.5735 2.69331 12.0802 3.45998 11.7202 4.33998C11.3735 5.21998 11.2002 6.18665 11.2002 7.23998C11.2002 7.32046 11.2012 7.40046 11.2033 7.47998H11.175C11.1526 8.01539 11.0542 8.51539 10.88 8.97998C10.68 9.51331 10.3933 9.97998 10.02 10.38C9.66 10.78 9.23333 11.0866 8.74 11.3C8.24667 11.5266 7.70667 11.64 7.12 11.64C6.53333 11.64 5.98667 11.5266 5.48 11.3C4.98667 11.0866 4.55333 10.78 4.18 10.38C3.82 9.99331 3.54 9.52665 3.34 8.97998C3.14 8.44665 3.04 7.85998 3.04 7.21998C3.04 6.37998 3.21333 5.62665 3.56 4.95998C3.92 4.30665 4.4 3.78665 5 3.39998C5.61333 3.02665 6.32 2.83998 7.12 2.83998C7.70667 2.83998 8.24667 2.94665 8.74 3.15998L8.74006 3.16001C9.12793 2.23455 9.62697 1.40497 10.2372 0.671256C10.1397 0.625522 10.0406 0.581763 9.94 0.53998C9.08667 0.17998 8.14667 -2.09808e-05 7.12 -2.09808e-05Z"
      fill="white"
    />
  </svg>
);

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section className="min-h-screen bg-[#f1f1f1] py-20 px-6 md:px-10 lg:px-[42px] font-['Inter',sans-serif]">
      <div className="grid grid-cols-3">
      <div className="col-span-1"></div>
      <div className="max-w-[1920px]  col-span-2">
        {/* Header */}
        <div className="flex flex-col items-start mb-12">
          {/* Decorative line */}
          <div className="w-[1px] h-16 bg-[#d6dbdc] mb-6" />
          
          {/* Title */}
          <h1 className="font-sans text-[64px] md:text-[80px] lg:text-[96px] font-semibold leading-[1] tracking-[-0.04em] text-black mb-8">
            Our Projects
          </h1>

          {/* Categories */}
          <div className="flex items-center gap-4 md:gap-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`text-sm md:text-base font-semibold tracking-[-0.02em] transition-colors duration-300 ${
                  activeCategory === category.id
                    ? "text-black"
                    : "text-[#828487] hover:text-black"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        
      </div>
      </div>
      <div className="flex flex-col gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [imageLoaded, setImageLoaded] = useState(false);
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

  return (
    <a
      ref={cardRef}
      href={`/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
      className={`block group transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[16/7] md:aspect-[16/6] lg:aspect-[16/4] rounded-xl overflow-hidden mb-4 bg-[#e5e5e5]">
        <img
          src={project.image}
          alt={project.title}
          onLoad={() => setImageLoaded(true)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/[0.07] rounded-xl" />
        
        {/* Logo mark in corner */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6">
          <LogoMark />
        </div>
      </div>

      {/* Project Info */}
      <div className="relative flex flex-col md:flex-row md:items-center gap-4 md:gap-0 py-2">
        {/* Left side - Date */}
        <div className="md:w-[120px] flex-shrink-0">
          <p className="text-[12px] font-normal text-[#828487] tracking-[-0.01em]">
            {project.date}
          </p>
        </div>

        {/* Center - Title and Location (offset left from center) */}
        <div className="md:absolute md:left-[25%] md:transform">
          <h3 className="text-[22px] md:text-[26px] font-medium text-black tracking-[-0.02em] leading-tight mb-1">
            {project.title}
          </h3>
          <p className="text-[14px] font-normal text-[#828487] tracking-[-0.01em]">
            {project.location}
          </p>
        </div>

        {/* Right side - Client */}
        <div className="flex items-center gap-3 flex-shrink-0 md:ml-auto">
          <p className="text-[12px] font-normal text-[#828487] tracking-[-0.01em]">
            Client:
          </p>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-black/[0.06]">
              <img
                src={project.clientAvatar}
                alt={project.clientName}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[14px] font-normal text-black tracking-[-0.01em]">
              {project.clientName}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
