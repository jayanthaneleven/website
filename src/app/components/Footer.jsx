"use client";

import Link from 'next/link';

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
              <Link href="/" className="font-sans text-[24px] md:text-[26px] font-medium text-white hover:text-[#C4A052] transition-colors">
                Home
              </Link>
              <Link href="/projects" className="font-sans text-[24px] md:text-[26px] font-medium text-white hover:text-[#C4A052] transition-colors">
                Projects
              </Link>
              <Link href="/gallery" className="font-sans text-[24px] md:text-[26px] font-medium text-white hover:text-[#C4A052] transition-colors">
                Gallery
              </Link>
              <Link href="/contact" className="font-sans text-[24px] md:text-[26px] font-medium text-white hover:text-[#C4A052] transition-colors flex items-center gap-3">
                Contact
              </Link>
            </nav>
          </div>

          {/* Column 3: Social Links - 42% */}
          <div className="lg:w-[41.67%] mt-10 lg:mt-0 lg:pl-12 flex flex-col lg:flex-row lg:justify-end">
            <div className="flex gap-10">
              <a href="https://www.instagram.com/fortuna._interiors?igsh=dnQ4OGJpcHN4dDN2&utm_source=qr" target="_blank" rel="noopener noreferrer" className="font-sans text-[13px] text-white/40 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="https://www.facebook.com/people/Fortuna-Interiors/pfbid02s4cZyZ1KrQLfxa5bA8Td6S5PhBHoojxsDwxGNRsiTqyKzw95uRnsMhcuU2Bn7jel/" target="_blank" rel="noopener noreferrer" className="font-sans text-[13px] text-white/40 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="font-sans text-[13px] text-white/40 hover:text-white transition-colors">
                Twitter
              </a>
            </div>
            {/* Mobile: Phone and Email below social links */}
            <div className="lg:hidden mt-8 flex flex-col gap-2">
              <a href="tel:+916374434648" className="font-sans text-[13px] text-[#C4A052] hover:text-white transition-colors">
                (+91) 6374434648
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex-1 relative">
        </div>

        {/* Large Email and Phone - Absolutely positioned for exact placement */}
        <div className="hidden lg:flex flex-col items-center absolute left-0 right-0 bottom-[18%] text-center px-8">
          <a 
            href="mailto:fortuneinteriorf3@gmail.com" 
            className="font-serif text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] xl:text-[80px] 2xl:text-[90px] text-white hover:text-[#C4A052] transition-colors tracking-[-0.02em] leading-none"
          >
            fortuneinteriorf3@gmail.com
          </a>
          <a href="tel:+916374434648" className="font-sans text-[13px] text-white/40 hover:text-white transition-colors mt-4">
            (+91) 6374434648
          </a>
        </div>

        {/* Phone for mobile - removed, moved to social links section */}

        {/* Bottom Section - Fixed to bottom */}
        <div className="mt-auto pb-8 lg:pb-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-0">
            
            {/* Left - Copyright and Links */}
            <div className="lg:w-[33.33%] flex flex-col md:flex-row gap-4 md:gap-8">
              <span className="font-sans text-[11px] text-white/25">© All rights Reserved</span>
              <a href="/privacy-policy" className="font-sans text-[11px] text-white/25 hover:text-white transition-colors">
                Privacy policy
              </a>
              <a href="/terms-of-service" className="font-sans text-[11px] text-white/25 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>

            {/* Mobile Email - shown prominently on mobile */}
            <div className="lg:hidden">
              <a 
                href="mailto:fortuneinteriorf3@gmail.com" 
                className="font-serif text-[20px] text-white hover:text-[#C4A052] transition-colors"
              >
                fortuneinteriorf3@gmail.com
              </a>
            </div>

            {/* Center - Address */}
            <div className="lg:w-[33.33%] lg:text-center">
              <p className="font-sans text-[13px] text-white font-medium">K. Pudur, Madurai</p>
              <p className="font-sans text-[13px] text-white/40">No. 1/1, Madha Kovil 2nd Street</p>
              <p className="font-sans text-[13px] text-white/40">Tamil Nadu - 625007</p>
            </div>

            {/* Right - Created By */}
            <div></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
