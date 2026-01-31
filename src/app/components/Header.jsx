"use client";

import { useState } from "react";
import Link from "next/link";
import Menu from "./Menu";

export default function Header({ variant = "light" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isLight = variant === "light";
  const textColor = isLight ? "text-white" : "text-black";
  const textMuted = isLight ? "opacity-60" : "opacity-50";
  const borderColor = isLight ? "border-white/30" : "border-gray-200";
  const hoverBg = isLight ? "hover:bg-white/10" : "hover:border-gray-400";
  const lineColor = isLight ? "bg-white" : "bg-black";

  return (
    <>
      {/* Full Page Menu */}
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Header */}
      <header className={`relative z-10 gap-2 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-8 ${!isLight ? 'border-b border-gray-100' : ''}`}>
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex gap-2 items-center">
            <img
                src="/low_poly_horse_no_face_detailingM.png"
                alt="Brand Logo"
                className="mb-2 h-20 w-20 object-contain"
            />
            <span className={`font-sans text-[20px] sm:text-[35px] font-extrabold tracking-[1px] ${textColor} uppercase`}>
              FORTUNA
            </span>
          </Link>
        </div>

        {/* Address */}
        <div className={`hidden lg:flex flex-col gap-0 ${textColor} text-[12px] leading-[1.7]`}>
          <span className="font-medium">Kudapanakunnu, Thiruvananthapuram</span>
          <span className={textMuted}>TCXX/2153, MLA Road</span>
          <span className={textMuted}>Near Devi Temple, Kerala</span>
        </div>

        {/* Contact */}
        <div className={`hidden md:flex flex-col gap-0 ${textColor} text-[12px] leading-[1.7]`}>
          <span className={textMuted}>fortuneinteriorf3@gmail.com</span>
          <span className={textMuted}>(+91) 9946661700</span>
        </div>

        {/* CTA Button + Menu */}
        <div className="flex items-center gap-2 sm:gap-6">
          <Link
            href="/contact"
            className={`group hidden md:flex items-center gap-3 bg-transparent border ${borderColor} rounded-full pl-5 pr-2 py-2 ${hoverBg} transition-colors`}
          >
            <span className={`text-[13px] font-medium ${textColor}`}>Say "Hello"</span>
            <span className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
              <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>

          {/* Menu icon */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="flex flex-col gap-1.5 p-2 hover:opacity-70 transition-opacity"
          >
            <span className={`w-6 h-0.5 ${lineColor}`}></span>
            <span className={`w-6 h-0.5 ${lineColor}`}></span>
          </button>
        </div>
      </header>
    </>
  );
}
