"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Sample JSON data
const carouselData = [
  {
    id: 1,
    image: "/images/image2.jpg",
    alt: "Hero Image 1",
  },
  {
    id: 2,
    image: "/images/image1.jpg",
    alt: "Hero Image 2",
  },
  {
    id: 3,
    image: "/images/image3.jpg",
    alt: "Hero Image 3",
  },
  {
    id: 4,
    image: "/images/image4.jpg",
    alt: "Hero Image 4",
  },
  {
    id: 5,
    image: "/images/image5.jpg",
    alt: "Hero Image 5",
  },
];
type HeroImages = {
  id: string;
  url: string;
  alt: string;
};

const HeroCarousel = () => {
  const [carouselImages, setCarouselImages] = useState<HeroImages[]>([]);
  const [current, setCurrent] = useState(0);
  const total = carouselData.length;
  useEffect(() => {
    fetch("/data/heroCarousel.json")
      .then((res) => res.json())
      .then((data) => setCarouselImages(data));
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative aspect-[16/9]   w-full h-[100vh] overflow-hidden rounded-2xl shadow-lg">
      {carouselImages.map((item, index) => (
        <div
          key={item.id}
          className={`ml-1 absolute inset-0 transition-opacity duration-700 ease-in-out aspect-[16/9] ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          } `}
        >
          <Image
            src={item.url}
            alt={item.alt}
            fill
            className="h-screen w-full aspect-[16/9]  object-cover"
            priority={index === current}
          />
          <span className="text-6xl relative top-30 left-100  text-bold   ">
            <p className="text-light-50 shadow-dark-200">{item.alt}</p>
            <br />
            <Button variant={"koaread"}>click me</Button>
          </span>
        </div>
      ))}

      {/* Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
        <Button variant="koaread" size="icon" onClick={prevSlide}>
          <ArrowLeft className="w-6 h-6 text-white drop-shadow-lg" />
        </Button>
        <Button variant="koaread" size="icon" onClick={nextSlide}>
          <ArrowRight className="w-6 h-6 text-white drop-shadow-lg" />
        </Button>
      </div>
    </div>
  );
};

export default HeroCarousel;
