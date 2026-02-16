"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Programs", href: "/programs" },
    { label: "About", href: "/about" },
    { label: "Calendar", href: "/calendar" },
    { label: "News", href: "/news" },
    { label: "Community", href: "/board" },
  ];

  return (
    <>
      {/* Top Bar - Register CTA */}
      <div className="bg-yellow-500 text-black py-2 text-center font-bold">
        🏈 REGISTRATION OPEN - EARLY BIRD PRICING ENDS 2/15/26! 
        <a href="https://login.stacksports.com/login?client_id=612b0399b1854a002e427f78&redirect_uri=https://core-api.bluesombrero.com/login/redirect/portal/22184&app_name=Escondido+Pop+Warner&portalid=22184&instancekey=tshq" className="underline ml-2 font-bold">REGISTER NOW</a>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 sticky top-9 z-40 shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-900 to-blue-950 rounded-full flex items-center justify-center group-hover:shadow-lg transition-all">
                  <span className="text-white font-black text-2xl">W</span>
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs font-black text-blue-900 tracking-widest">ESCONDIDO</p>
                  <p className="text-xs font-bold text-gray-600">POP WARNER</p>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-gray-900 hover:text-blue-900 transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="https://login.stacksports.com/login?client_id=612b0399b1854a002e427f78&redirect_uri=https://core-api.bluesombrero.com/login/redirect/portal/22184&app_name=Escondido+Pop+Warner&portalid=22184&instancekey=tshq"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 py-2.5 rounded-lg hover:shadow-lg font-bold text-sm transition-all hover:scale-105"
              >
                REGISTER
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-900 hover:text-blue-900"
            >
              {isOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden pb-4 space-y-2 border-t border-gray-100">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-gray-900 hover:bg-blue-50 rounded-lg transition-colors font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://login.stacksports.com/login?client_id=612b0399b1854a002e427f78&redirect_uri=https://core-api.bluesombrero.com/login/redirect/portal/22184&app_name=Escondido+Pop+Warner&portalid=22184&instancekey=tshq"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-900 text-white px-4 py-2.5 rounded-lg hover:bg-blue-800 font-bold transition-colors text-center text-sm"
              >
                REGISTER NOW
              </a>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
