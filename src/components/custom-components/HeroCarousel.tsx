// 
"use client";

import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import slidesData from "../../../public/data/slides.json"; // Adjust the path as necessary

interface HeroCarouselProps {
  height?: string; // e.g., "h-[500px]" or "h-screen"
  className?: string;
}

export default function HeroCarousel({ height = "h-[500px] md:h-[600px] lg:h-[700px]", className = "" }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const autoSlideInterval = 5000;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [currentIndex, autoSlide]);

  return (
    <div className={`relative w-full ${height} overflow-hidden ${className}`}>
      <Carousel
        opts={{
          startIndex: currentIndex,
          loop: true,
        }}
        className="w-full h-full"
      >
        <CarouselContent className="h-full">
          {slidesData.map((slide) => (
            <CarouselItem key={slide.id} className="h-full">
              <div
                className={`relative w-full h-full bg-cover bg-center`}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/30"></div>
                <div className={`relative h-[600] flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 lg:px-8`}>
                  <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl mb-8">
                      {slide.description}
                    </p>
                    <Button
                      size="lg"
                      className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a href={slide.ctaLink}>{slide.ctaText}</a>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Navigation arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
        <Button
          variant="ghost"
          size="icon"
          className="h-12 w-12 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm pointer-events-auto"
          onClick={prevSlide}
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-12 w-12 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm pointer-events-auto"
          onClick={nextSlide}
        >
          <ArrowRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="flex justify-center space-x-2">
          {slidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-all ${currentIndex === index
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/70"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Auto slide toggle */}
      <div className="absolute top-4 right-4 z-10">
        <Button
          variant="ghost"
          size="sm"
          className="bg-white/30 hover:bg-white/50 backdrop-blur-sm"
          onClick={() => setAutoSlide(!autoSlide)}
        >
          {autoSlide ? "Pause" : "Play"}
        </Button>
      </div>
    </div>
  );
}