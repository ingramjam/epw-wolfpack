"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  cta: {
    label: string;
    href: string;
  };
  gradient: string;
  icon?: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    title: "2025 Registration Open",
    subtitle: "Early bird pricing ends February 15th. Limited spots available!",
    cta: { label: "REGISTER NOW", href: "https://login.stacksports.com/login?client_id=612b0399b1854a002e427f78&redirect_uri=https://core-api.bluesombrero.com/login/redirect/portal/22184&app_name=Escondido+Pop+Warner&portalid=22184&instancekey=tshq" },
    gradient: "from-blue-900 via-blue-800 to-blue-950",
    icon: "🏈",
  },
  {
    id: 2,
    title: "Build Championship Teams",
    subtitle: "Flag Football • Tackle Football • Cheerleading for ages 5-14",
    cta: { label: "EXPLORE PROGRAMS", href: "/programs" },
    gradient: "from-blue-800 via-indigo-900 to-blue-900",
    icon: "🏆",
  },
  {
    id: 3,
    title: "Make a Difference",
    subtitle: "Join our volunteer community and help shape young athletes",
    cta: { label: "VOLUNTEER TODAY", href: "/volunteer" },
    gradient: "from-indigo-900 via-blue-900 to-blue-800",
    icon: "👥",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [autoPlay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
  };

  const slide = slides[currentSlide];

  return (
    <div className="relative w-full h-96 md:h-screen max-h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-r ${s.gradient}`} />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 md:px-8 max-w-3xl z-10">
              <div className="text-6xl md:text-7xl mb-4">{s.icon}</div>
              <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
                {s.title}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 font-semibold">
                {s.subtitle}
              </p>
              <a
                href={s.cta.href}
                target={s.cta.href.startsWith("http") ? "_blank" : undefined}
                rel={s.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-block bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-black text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-xl"
              >
                {s.cta.label}
              </a>
            </div>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-yellow-500 w-8"
                : "bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <HiChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <HiChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
