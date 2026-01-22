"use client";

export default function Section1() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Modern living room interior"
          className="w-full h-full object-cover object-center"
        />
        <img
          src="/overlay-bg.png"
          alt="Gradient Overlay"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>

      {/* Header - Exact 5 column layout */}
      <header className="relative z-10 grid grid-cols-2 lg:grid-cols-[auto_1fr_1fr_auto_auto] items-start gap-4 lg:gap-8 px-8 md:px-12 lg:px-16 py-6">
        {/* Logo */}
        <div className="shrink-0">
          <span className="font-sans text-[14px] font-bold tracking-[1px] text-white uppercase">
            FORTUNA
          </span>
        </div>

        {/* Address */}
        <div className="hidden lg:flex flex-col gap-0 text-white text-[11px] leading-[1.6]">
          <span className="font-medium">France, Paris</span>
          <span className="opacity-60">Str. Believein Yourself 29</span>
          <span className="opacity-60">App. 390</span>
        </div>

        {/* Contact */}
        <div className="hidden lg:flex flex-col gap-0 text-[11px] leading-[1.6]">
          <a href="mailto:hi@housemood.com" className="text-white no-underline hover:opacity-80 transition-opacity">
            hi@housemood.com
          </a>
          <a href="tel:+099791-00-75" className="text-white no-underline opacity-60 hover:opacity-100 transition-opacity">
            (099) 791-00-75
          </a>
        </div>

        {/* CTA Button */}
        <a href="#contact" className="col-start-2 lg:col-start-auto justify-self-end flex items-center gap-20 py-[6px] pl-5 pr-[6px] bg-transparent border border-white/30 rounded-full text-white no-underline text-[12px] font-medium transition-all hover:bg-white/5">
          <span>Say "Hello"</span>
          <div className="flex items-center justify-center w-9 h-9 bg-[#F5C518] rounded-full text-black">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </a>

        {/* Hamburger Menu */}
        <button className="hidden lg:flex flex-col gap-[5px] p-2 ml-2">
          <span className="w-[22px] h-[1.5px] bg-white"></span>
          <span className="w-[22px] h-[1.5px] bg-white"></span>
        </button>
      </header>

      {/* Middle Content - We Craft + Services */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-start px-8 md:px-12 lg:px-16 mt-20 lg:mt-32">
        {/* Left - We Craft Interiors */}
        <div className="flex flex-col gap-0">
          <p className="font-sans text-[14px] md:text-[15px] text-white tracking-[0.5px] font-medium leading-[1.5]">
            We Craft Interiors
          </p>
          <p className="font-sans text-[14px] md:text-[15px] text-[#C4A052] font-normal leading-[1.5]">
            Since 2014
          </p>
        </div>

        {/* Center - Decorative Vertical Line */}
        <div className="hidden lg:flex flex-col items-center mx-32">
          <div className="w-px h-32 bg-white/20"></div>
          <div className="w-2 h-px bg-white/20 mt-2"></div>
        </div>

        {/* Right - Services List */}
        <div className="hidden lg:flex flex-col gap-1 items-end mt-0">
          <div className="flex items-center gap-3 mb-1">
            <span className="w-16 h-px bg-white/25"></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-sans text-[12px] text-white/70">Tech Specifications</span>
            <span className="text-white/50 text-[10px]">◐</span>
          </div>
          <span className="font-sans text-[12px] text-white/70">Design Project</span>
          <span className="font-sans text-[12px] text-white/70">3D visualisation</span>
        </div>
      </div>

      {/* Main Headline - Fortune stays where elegance plays */}
      <div className="absolute bottom-[6%] md:bottom-[8%] left-0 right-0 z-10 px-8 md:px-12 lg:px-16">
        <h1 className="font-serif font-normal leading-[0.95] tracking-[-0.02em]">
          <span 
            className="block text-white text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] xl:text-[120px] uppercase"
            style={{ textShadow: '0 4px 60px rgba(0,0,0,0.2)' }}
          >
            Fortune Stays
          </span>
          <span 
            className="block text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] xl:text-[120px] ml-[8%] md:ml-[12%] lg:ml-[18%] uppercase"
            style={{ textShadow: '0 4px 60px rgba(0,0,0,0.2)' }}
          >
            <span className="text-white">Where </span>
            <span className="text-[#D4B896]">Elegance</span>
          </span>
          <span 
            className="block text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] xl:text-[120px] ml-[8%] md:ml-[12%] lg:ml-[18%] uppercase text-[#D4B896]"
            style={{ textShadow: '0 4px 60px rgba(0,0,0,0.2)' }}
          >
            Plays.
          </span>
        </h1>
      </div>
    </section>
  );
}
