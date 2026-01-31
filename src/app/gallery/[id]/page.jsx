"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

// Project details data with all room images
const projectsData = {
  'villa-serenity': {
    id: 'villa-serenity',
    name: 'Villa Serenity',
    location: 'Mumbai, India',
    category: 'Residential',
    year: '2024',
    area: '4,500 sq ft',
    description: 'A stunning villa that combines modern aesthetics with traditional Indian elements. The interiors feature warm earth tones, natural materials, and carefully curated lighting to create a peaceful sanctuary in the heart of the city.',
    mainImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    rooms: [
      { name: 'Living Room', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80', description: 'Spacious living area with high ceilings and natural light' },
      { name: 'Master Bedroom', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80', description: 'Luxurious bedroom with panoramic views' },
      { name: 'Kitchen', image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80', description: 'Modern modular kitchen with premium appliances' },
      { name: 'Dining Room', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80', description: 'Elegant dining space for family gatherings' },
      { name: 'Bathroom', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80', description: 'Spa-inspired bathroom with marble finishes' },
      { name: 'Balcony', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80', description: 'Private balcony with garden views' },
      { name: 'Guest Bedroom', image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&q=80', description: 'Comfortable guest room with warm tones' },
      { name: 'Home Office', image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&q=80', description: 'Dedicated workspace with built-in storage' },
    ],
  },
  'modern-loft': {
    id: 'modern-loft',
    name: 'Modern Loft',
    location: 'Bangalore, India',
    category: 'Apartment',
    year: '2024',
    area: '2,200 sq ft',
    description: 'An industrial-chic loft apartment featuring exposed brick, concrete accents, and floor-to-ceiling windows. The open-plan design maximizes space while creating distinct living zones.',
    mainImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
    rooms: [
      { name: 'Living Area', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80', description: 'Open-concept living with industrial touches' },
      { name: 'Bedroom', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80', description: 'Minimalist bedroom with mezzanine design' },
      { name: 'Kitchen', image: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=800&q=80', description: 'Contemporary kitchen with breakfast bar' },
      { name: 'Bathroom', image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80', description: 'Modern bathroom with rain shower' },
      { name: 'Study Corner', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80', description: 'Compact study area with natural light' },
      { name: 'Terrace', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80', description: 'Private rooftop terrace for relaxation' },
    ],
  },
  'coastal-retreat': {
    id: 'coastal-retreat',
    name: 'Coastal Retreat',
    location: 'Goa, India',
    category: 'Villa',
    year: '2023',
    area: '5,800 sq ft',
    description: 'A beachside villa designed to blur the boundaries between indoor and outdoor living. White-washed walls, natural textures, and ocean-inspired hues create a serene coastal atmosphere.',
    mainImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    rooms: [
      { name: 'Living Room', image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80', description: 'Breezy living space with ocean views' },
      { name: 'Master Suite', image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80', description: 'Luxurious suite with private terrace' },
      { name: 'Kitchen', image: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=800&q=80', description: 'Coastal kitchen with white cabinetry' },
      { name: 'Outdoor Dining', image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80', description: 'Al fresco dining area by the pool' },
      { name: 'Pool Area', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', description: 'Infinity pool overlooking the sea' },
      { name: 'Guest Room', image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&q=80', description: 'Cozy guest quarters with garden access' },
      { name: 'Bathroom', image: 'https://images.unsplash.com/photo-1600566752229-250ed79470f8?w=800&q=80', description: 'Open-air bathroom with tropical plants' },
    ],
  },
  'urban-penthouse': {
    id: 'urban-penthouse',
    name: 'Urban Penthouse',
    location: 'Delhi, India',
    category: 'Penthouse',
    year: '2023',
    area: '6,200 sq ft',
    description: 'A sophisticated penthouse featuring panoramic city views, custom art installations, and premium finishes throughout. The design balances luxury with livability.',
    mainImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    rooms: [
      { name: 'Grand Living', image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80', description: 'Double-height living with city skyline' },
      { name: 'Master Bedroom', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80', description: 'Opulent bedroom with walk-in closet' },
      { name: 'Gourmet Kitchen', image: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=800&q=80', description: 'Chef\'s kitchen with premium appliances' },
      { name: 'Dining Room', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80', description: 'Formal dining for entertaining' },
      { name: 'Home Theater', image: 'https://images.unsplash.com/photo-1594388372106-3c4aa84c3ffc?w=800&q=80', description: 'Private cinema room with plush seating' },
      { name: 'Rooftop Lounge', image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80', description: 'Exclusive rooftop entertaining space' },
      { name: 'Wine Cellar', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', description: 'Temperature-controlled wine storage' },
      { name: 'Spa Bathroom', image: 'https://images.unsplash.com/photo-1600566752229-250ed79470f8?w=800&q=80', description: 'Personal spa with steam room' },
    ],
  },
  'heritage-home': {
    id: 'heritage-home',
    name: 'Heritage Home',
    location: 'Jaipur, India',
    category: 'Residential',
    year: '2023',
    area: '7,500 sq ft',
    description: 'A lovingly restored heritage property that honors traditional Rajasthani architecture while incorporating modern comforts. Hand-painted murals, jharokhas, and antique furniture tell stories of the past.',
    mainImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    rooms: [
      { name: 'Central Courtyard', image: 'https://images.unsplash.com/photo-1600566752547-33e55e065c87?w=800&q=80', description: 'Traditional courtyard with fountain' },
      { name: 'Drawing Room', image: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=800&q=80', description: 'Formal reception with royal furnishings' },
      { name: 'Royal Bedroom', image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80', description: 'Heritage bedroom with canopy bed' },
      { name: 'Kitchen', image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80', description: 'Modern kitchen in traditional setting' },
      { name: 'Dining Hall', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80', description: 'Grand dining with hand-painted ceiling' },
      { name: 'Terrace', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80', description: 'Rooftop terrace with city views' },
      { name: 'Prayer Room', image: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&q=80', description: 'Serene space for meditation' },
    ],
  },
  'minimalist-studio': {
    id: 'minimalist-studio',
    name: 'Minimalist Studio',
    location: 'Pune, India',
    category: 'Studio',
    year: '2022',
    area: '850 sq ft',
    description: 'A compact studio apartment that proves less is more. Clean lines, multifunctional furniture, and a neutral palette create a calm, organized living space.',
    mainImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
    rooms: [
      { name: 'Living Space', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80', description: 'Multi-functional open living area' },
      { name: 'Sleeping Nook', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80', description: 'Cozy sleeping alcove with storage' },
      { name: 'Kitchen', image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80', description: 'Efficient galley kitchen' },
      { name: 'Bathroom', image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80', description: 'Compact bathroom with smart storage' },
      { name: 'Work Area', image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&q=80', description: 'Integrated home office setup' },
    ],
  },
  'luxury-apartment': {
    id: 'luxury-apartment',
    name: 'Luxury Apartment',
    location: 'Hyderabad, India',
    category: 'Apartment',
    year: '2022',
    area: '3,400 sq ft',
    description: 'A high-end apartment that showcases contemporary Indian luxury. Rich textures, statement lighting, and curated art pieces create an atmosphere of refined elegance.',
    mainImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
    rooms: [
      { name: 'Living Room', image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80', description: 'Elegant living with designer furniture' },
      { name: 'Master Bedroom', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80', description: 'Sophisticated bedroom retreat' },
      { name: 'Kids Room', image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&q=80', description: 'Playful space for children' },
      { name: 'Kitchen', image: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=800&q=80', description: 'Sleek modular kitchen' },
      { name: 'Dining Area', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80', description: 'Intimate dining space' },
      { name: 'Bathroom', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80', description: 'Luxury bathroom with jacuzzi' },
      { name: 'Balcony', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80', description: 'Landscaped balcony garden' },
    ],
  },
  'garden-villa': {
    id: 'garden-villa',
    name: 'Garden Villa',
    location: 'Chennai, India',
    category: 'Villa',
    year: '2022',
    area: '5,200 sq ft',
    description: 'A tropical villa where indoor spaces flow seamlessly into lush gardens. Natural materials, earthy colors, and abundant greenery create a connection with nature.',
    mainImage: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80',
    rooms: [
      { name: 'Living Pavilion', image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80', description: 'Open-air living with garden views' },
      { name: 'Master Bedroom', image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80', description: 'Serene bedroom with garden access' },
      { name: 'Kitchen', image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80', description: 'Country-style kitchen' },
      { name: 'Garden Courtyard', image: 'https://images.unsplash.com/photo-1600566752547-33e55e065c87?w=800&q=80', description: 'Central garden with water feature' },
      { name: 'Outdoor Living', image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80', description: 'Covered patio for entertaining' },
      { name: 'Guest Suite', image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&q=80', description: 'Private guest quarters' },
      { name: 'Bathroom', image: 'https://images.unsplash.com/photo-1600566752229-250ed79470f8?w=800&q=80', description: 'Nature-inspired bathroom design' },
    ],
  },
};

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(null);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const projectData = projectsData[params.id];
    if (projectData) {
      setProject(projectData);
    }
  }, [params.id]);

  if (!project) {
    return (
      <main className="bg-white min-h-screen">
        <Header variant="dark" />
        <div className="pt-40 pb-20 px-6 text-center">
          <h1 className="font-serif text-[32px] text-black">Project not found</h1>
          <Link href="/gallery" className="font-sans text-[16px] text-black/60 hover:text-black mt-4 inline-block">
            ← Back to Gallery
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen">
      <Header variant="dark" />

      {/* Hero Section */}
      <section className="pt-28 lg:pt-36 pb-12 px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/gallery"
            className="inline-flex items-center gap-2 font-sans text-[14px] text-black/60 hover:text-black transition-colors mb-8"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Gallery
          </Link>

          {/* Project Title */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <span className="font-sans text-[13px] text-black/50 uppercase tracking-wider">
                {project.category} • {project.year}
              </span>
              <h1 className="font-serif text-[42px] md:text-[56px] lg:text-[72px] font-normal leading-[1] tracking-[-0.02em] text-black mt-2">
                {project.name}
              </h1>
              <p className="font-sans text-[16px] text-black/60 mt-3 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {project.location}
              </p>
            </div>
            <div className="flex gap-8">
              <div>
                <span className="font-sans text-[12px] text-black/40 uppercase tracking-wider">Area</span>
                <p className="font-serif text-[24px] text-black">{project.area}</p>
              </div>
              <div>
                <span className="font-sans text-[12px] text-black/40 uppercase tracking-wider">Rooms</span>
                <p className="font-serif text-[24px] text-black">{project.rooms.length}</p>
              </div>
            </div>
          </div>

          {/* Main Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden">
            <img
              src={project.mainImage}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div className="max-w-3xl mt-12">
            <p className="font-serif text-[20px] md:text-[24px] text-black leading-[1.6]">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Room Gallery */}
      <section className="py-16 px-6 md:px-12 lg:px-16 xl:px-20 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-serif text-[32px] md:text-[40px] font-normal text-black">
              Explore the Spaces
            </h2>
            <span className="font-sans text-[14px] text-black/50">
              {project.rooms.length} Rooms
            </span>
          </div>

          {/* Room Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.rooms.map((room, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(room)}
              >
                <div className={`relative overflow-hidden rounded-lg ${
                  index === 0 ? 'h-[350px] md:h-[450px] md:col-span-2 lg:col-span-2' : 'h-[280px] md:h-[320px]'
                }`}>
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                    </svg>
                  </div>

                  {/* Room Info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-serif text-[22px] md:text-[26px] font-normal text-white">
                      {room.name}
                    </h3>
                    <p className="font-sans text-[13px] text-white/70 mt-1">
                      {room.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation to Other Projects */}
      <section className="py-16 px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <h3 className="font-serif text-[24px] text-black">Explore More Projects</h3>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-3 px-6 py-3 border border-black/20 rounded-full font-sans text-[14px] text-black hover:bg-black hover:text-white transition-all"
            >
              View All Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Image Container */}
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.name}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-6 text-center">
              <h3 className="font-serif text-[28px] text-white">{selectedImage.name}</h3>
              <p className="font-sans text-[15px] text-white/60 mt-2">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
