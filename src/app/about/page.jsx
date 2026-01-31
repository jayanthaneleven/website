"use client";

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  const teamMembers = [
    { name: 'Valeria Novikova', role: 'Designer', image: '/team/valeria.jpg' },
    { name: 'Alex Podzemsky', role: 'Designer', image: '/team/alex.jpg' },
    { name: 'Helen Reeves', role: 'Designer', image: '/team/helen.jpg' },
    { name: 'Tanya Rodriguez', role: 'HR', image: '/team/tanya.jpg' },
  ];

  const historyItems = [
    { year: '2024', description: 'Celebrates 15 years with a retrospective showcase of the company\'s most iconic projects and milestones.' },
    { year: '2022', description: 'Wins a prestigious national design award for an innovative mixed-use development project.' },
    { year: '2021', description: 'Participates in a national interior design expo, showcasing innovative concepts and gaining industry recognition.' },
    { year: '2019', description: 'Opens a second office in a neighboring city to meet growing demand and takes on larger projects, such as retail spaces and restaurants.' },
    { year: '2014', description: 'The company is founded by a visionary designer with a focus on personalized, high-quality residential interiors. The first few projects are local homes.' },
  ];

  const awards = [
    { name: 'International Design Awards (IDA)', year: '2024', description: 'Celebrates 15 years with a retrospective showcase of the company\'s most iconic projects and milestones.' },
    { name: 'Red Dot Design Award', year: '2021', description: 'Wins a prestigious national design award for an innovative mixed-use development project.' },
    { name: 'SBID International Design AwardsName', year: '2019', description: 'Celebrates 15 years with a retrospective showcase of the company\'s most iconic projects and milestones.' },
  ];

  const galleryImages = [
    { src: '/about/color-selection.jpg', caption: 'Color selection' },
    { src: '/about/always-positive.jpg', caption: 'Always positive' },
    { src: '/about/working-on-plan.jpg', caption: 'Working on plan' },
  ];

  return (
    <main className="bg-white min-h-screen">
      <Header variant="dark" />

      {/* Section 1: Hero - About Us Title + Testimonial */}
      <section className="pt-32 lg:pt-40 px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Vertical Line */}
        <div className="relative">
          <div className="absolute left-0 top-0 w-px h-24 bg-black/20"></div>
          <div className="absolute left-[-2px] top-24 w-[5px] h-[5px] border border-black/30 rotate-45"></div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mt-16">
          {/* Left: About Us Title with Avatars */}
          <div className="flex items-start gap-4">
            <h1 className="font-serif text-[64px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-normal leading-[0.9] tracking-[-0.02em] text-black">
              About Us
            </h1>
            {/* Avatars */}
            <div className="flex -space-x-3 mt-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                <img src="/team/avatar1.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                <img src="/team/avatar2.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                <img src="/team/avatar3.jpg" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Row */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mt-20 lg:mt-32">
          {/* Left: Owner Info */}
          <div className="lg:w-[280px] flex-shrink-0">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img src="/team/mark-jackson.jpg" alt="Mark Jackson" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-sans text-[16px] font-medium text-black">Mark Jackson</p>
                <p className="font-sans text-[14px] text-black/50">Owner</p>
              </div>
            </div>
            <p className="font-sans text-[15px] text-black/60 leading-relaxed">
              I deeply love and appreciate my team for everything they do!
            </p>
          </div>

          {/* Right: Main Description */}
          <div className="flex-1 lg:max-w-[800px]">
            <p className="font-serif text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-medium text-black leading-[1.4] tracking-[-0.01em]">
              This team reinforced the importance of building user-centered features that offer value beyond aesthetics, especially in social networking. The app's launch exceeded initial user growth targets, and the client received positive feedback.
            </p>
            <p className="font-sans text-[16px] md:text-[18px] text-black/50 leading-[1.7] mt-8">
              This team reinforced the importance of building user-centered features that offer value beyond aesthetics, especially in social networking. The app's launch exceeded initial user growth targets, and the client received positive feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Full-width Team Image */}
      <section className="mt-20 lg:mt-32 px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] rounded-lg overflow-hidden">
          <img 
            src="/about/team-working.jpg" 
            alt="Team working together" 
            className="w-full h-full object-cover"
          />
          {/* Centered Logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif text-[32px] md:text-[40px] lg:text-[48px] text-white tracking-[0.2em] uppercase">
              FORTUNA
            </span>
          </div>
        </div>
      </section>

      {/* Section 3: History Timeline */}
      <section className="mt-20 lg:mt-32 px-6 md:px-12 lg:px-16 xl:px-20 pb-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: History Title */}
          <div className="lg:w-[280px] flex-shrink-0">
            <h2 className="font-serif text-[32px] md:text-[40px] font-normal text-black mb-4">History</h2>
            <p className="font-sans text-[15px] text-black/50 leading-relaxed">
              Our history is full of interesting stages and events.
            </p>
          </div>

          {/* Right: Timeline */}
          <div className="flex-1">
            {historyItems.map((item, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row gap-6 md:gap-16 py-8 ${index !== historyItems.length - 1 ? 'border-b border-black/10' : ''}`}
              >
                <span className="font-serif text-[48px] md:text-[56px] lg:text-[64px] font-normal text-black leading-none md:w-[200px] flex-shrink-0">
                  {item.year}
                </span>
                <p className="font-sans text-[15px] md:text-[16px] text-black/70 leading-[1.7] flex-1 md:pt-4">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Team Section */}
      <section className="py-20 lg:py-32 px-6 md:px-12 lg:px-16 xl:px-20 bg-white">
        {/* Link Icon */}
        <div className="mb-8">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-black/30">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: Team Description */}
          <div className="lg:w-[380px] flex-shrink-0">
            <p className="font-serif text-[28px] md:text-[32px] lg:text-[36px] font-medium text-black leading-[1.35] tracking-[-0.01em]">
              We are a passionate team of designers dedicated to transforming your vision into beautifully crafted spaces.
            </p>
          </div>

          {/* Right: Team Grid */}
          <div className="flex-1">
            {/* Top Row - 3 designers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              {teamMembers.slice(0, 3).map((member, index) => (
                <div key={index} className="relative h-[280px] rounded-lg overflow-hidden group">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <p className="font-sans text-[16px] font-medium text-white">{member.name}</p>
                    <p className="font-sans text-[13px] text-white/70">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row - Owner card, HR, Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Owner Card - Larger */}
              <div className="relative h-[400px] rounded-lg overflow-hidden group sm:col-span-2 lg:col-span-1 lg:row-span-2">
                <img 
                  src="/team/mark-jackson-full.jpg" 
                  alt="Mark Jackson" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                {/* Arrow */}
                <div className="absolute top-4 left-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-sans text-[16px] font-medium text-white">Mark Jackson</p>
                  <p className="font-sans text-[13px] text-white/70 mb-4">Owner</p>
                  <p className="font-sans text-[18px] text-white leading-relaxed">
                    We are here to create space that will inspire you.
                  </p>
                </div>
              </div>

              {/* HR Member */}
              <div className="relative h-[220px] rounded-lg overflow-hidden group">
                <img 
                  src={teamMembers[3].image} 
                  alt={teamMembers[3].name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <p className="font-sans text-[16px] font-medium text-white">{teamMembers[3].name}</p>
                  <p className="font-sans text-[13px] text-white/70">{teamMembers[3].role}</p>
                </div>
              </div>

              {/* Stats Card */}
              <div className="h-[220px] rounded-lg border border-black/10 flex flex-col items-center justify-center p-6">
                <span className="font-serif text-[72px] md:text-[80px] font-normal text-black leading-none">
                  50<span className="text-[48px]">+</span>
                </span>
                <p className="font-sans text-[14px] text-black/50 mt-2">People in business</p>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="mt-20 relative">
          <div className="w-full h-px bg-black/10"></div>
          <div className="absolute right-0 top-[-2px] w-[5px] h-[5px] border border-black/30 rotate-45"></div>
        </div>
      </section>

      {/* Section 5: Awards */}
      <section className="py-20 lg:py-32 px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: Awards Title */}
          <div className="lg:w-[280px] flex-shrink-0">
            <h2 className="font-serif text-[32px] md:text-[40px] font-normal text-black">Awards</h2>
          </div>

          {/* Right: Awards List */}
          <div className="flex-1">
            {awards.map((award, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row gap-6 md:gap-16 py-8 ${index !== awards.length - 1 ? 'border-b border-black/10' : ''}`}
              >
                <div className="md:w-[200px] flex-shrink-0">
                  <p className="font-serif text-[20px] md:text-[24px] font-medium text-black leading-[1.3]">
                    {award.name}
                  </p>
                </div>
                <div className="flex-1">
                  <span className="font-serif text-[28px] md:text-[32px] font-normal text-black italic">
                    {award.year}
                  </span>
                  <p className="font-sans text-[15px] text-black/50 leading-[1.7] mt-3">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Gallery */}
      <section className="py-12 px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryImages.map((img, index) => (
            <div key={index} className="relative h-[250px] md:h-[300px] rounded-lg overflow-hidden group">
              <img 
                src={img.src} 
                alt={img.caption} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <p className="absolute bottom-4 left-4 font-sans text-[15px] font-medium text-white">
                {img.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7: Join the Team CTA */}
      <section className="py-20 lg:py-32 px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-8 md:gap-20">
          <h2 className="font-serif text-[32px] md:text-[40px] font-normal text-black">
            Join the Team
          </h2>
          <div>
            <p className="font-serif text-[18px] md:text-[20px] font-medium text-black leading-[1.5] mb-6">
              If you're ready to shape the future with us,<br />
              your journey could start here.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-between w-full max-w-[300px] px-6 py-4 rounded-full border border-black/20 hover:border-black transition-colors group"
            >
              <span className="font-sans text-[16px] text-black">Say "Hello"</span>
              <span className="w-10 h-10 rounded-full bg-[#F5C543] flex items-center justify-center group-hover:bg-[#e0b23d] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
