"use client";

export default function Footer() {
  return (
    <footer className="relative h-screen bg-[#141414] overflow-hidden">
      {/* Background Image - Right side lamp */}
      <div className="absolute right-0 top-0 bottom-0 w-[50%] z-0">
        <img
          src="/footer-bg.png"
          alt="Pendant lamp"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/70 to-transparent"></div>
      </div>

      {/* Vertical Lines */}
      {/* Line 1 - after tagline column */}
      <div className="hidden lg:block absolute left-[33.33%] top-0 bottom-[25%] z-10">
        <div className="w-px h-full bg-white/10"></div>
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[5px] h-[5px] border border-white/20 rotate-45"></div>
      </div>
      
      {/* Line 2 - after navigation column */}
      <div className="hidden lg:block absolute left-[58%] top-0 bottom-[35%] z-10">
        <div className="w-px h-full bg-white/10"></div>
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[5px] h-[5px] border border-white/20 rotate-45"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col px-8 md:px-12 lg:px-16 xl:px-20">
        
        {/* Top Section - 3 Columns */}
        <div className="flex flex-col lg:flex-row pt-10 lg:pt-16">
          
          {/* Column 1: Tagline - 33% */}
          <div className="lg:w-[33.33%] lg:pr-12">
            <p className="font-sans text-[15px] md:text-[17px] text-white leading-[1.9] tracking-wide">
              We transform your<br />
              vision into<br />
              <span className="text-[#C4A052]">beautifully crafted<br />spaces.</span>
            </p>
          </div>

          {/* Column 2: Navigation - 25% */}
          <div className="lg:w-[25%] mt-10 lg:mt-0 lg:pl-12">
            <nav className="flex flex-col gap-[6px]">
              <a href="#home" className="font-sans text-[24px] md:text-[26px] font-medium text-white hover:text-[#C4A052] transition-colors">
                Home
              </a>
              <a href="#projects" className="font-sans text-[24px] md:text-[26px] font-medium text-white hover:text-[#C4A052] transition-colors">
                Projects
              </a>
              <a href="#about" className="font-sans text-[24px] md:text-[26px] font-medium text-white hover:text-[#C4A052] transition-colors">
                About Us
              </a>
              <a href="#contact" className="font-sans text-[24px] md:text-[26px] font-medium text-white hover:text-[#C4A052] transition-colors flex items-center gap-3">
                
                Contact
              </a>
            </nav>
          </div>

          {/* Column 3: Social Links - 42% */}
          <div className="lg:w-[41.67%] mt-10 lg:mt-0 lg:pl-12 flex lg:justify-end">
            <div className="flex gap-10">
              <a href="#" className="font-sans text-[13px] text-white/40 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="font-sans text-[13px] text-white/40 hover:text-white transition-colors">
                Behance
              </a>
              <a href="#" className="font-sans text-[13px] text-white/40 hover:text-white transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section - Phone Number */}
        <div className="flex-1 relative">
          {/* Phone Number - positioned near second vertical line */}
          <div className="hidden lg:block absolute left-[58%] bottom-[15%] pl-12">
            <a href="tel:+099791-00-75" className="font-sans text-[13px] text-white/40 hover:text-white transition-colors">
              (099) 791-00-75
            </a>
          </div>
        </div>

        {/* Large Email - Absolutely positioned for exact placement */}
        <div className="absolute left-0 right-0 bottom-[22%] text-center px-8">
          <a 
            href="mailto:hi@housemood.com" 
            className="font-serif text-[36px] sm:text-[50px] md:text-[70px] lg:text-[100px] xl:text-[120px] 2xl:text-[140px] text-white hover:text-[#C4A052] transition-colors tracking-[-0.02em] leading-none"
          >
            hi@housemood.com
          </a>
        </div>

        {/* Phone for mobile */}
        <div className="lg:hidden text-center mb-6">
          <a href="tel:+099791-00-75" className="font-sans text-[13px] text-white/40 hover:text-white transition-colors">
            (099) 791-00-75
          </a>
        </div>

        {/* Bottom Section - Fixed to bottom */}
        <div className="mt-auto pb-8 lg:pb-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-0">
            
            {/* Left - Copyright and Links */}
            <div className="lg:w-[33.33%] flex flex-col md:flex-row gap-4 md:gap-8">
              <span className="font-sans text-[11px] text-white/25">© All rights Reserved</span>
              <a href="#" className="font-sans text-[11px] text-white/25 hover:text-white transition-colors">
                Privacy policy
              </a>
              <a href="#" className="font-sans text-[11px] text-white/25 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>

            {/* Center - Address */}
            <div className="lg:w-[33.33%] lg:text-center">
              <p className="font-sans text-[13px] text-white font-medium">France, Paris</p>
              <p className="font-sans text-[13px] text-white/40">Str. Believein Yourself 29</p>
              <p className="font-sans text-[13px] text-white/40">App. 390</p>
            </div>

            {/* Right - Created By */}
            <div></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
