"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
// import images from "@/data/heroCarousel.json";

interface ImageData {
  id: number;
  url: string;
  alt: string;
}

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState<ImageData[]>([]);
  const total = images.length;

  const nextSlide = () => setIndex((prev) => (prev + 1) % total);
  const prevSlide = () => setIndex((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);
  useEffect(() => {
    if (index >= total) {
      setIndex(total);
    }
    fetch("/data/heroCarousel.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, [total, index]);
  const currentImage: ImageData = images[index];
  console.log(currentImage.url);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage.id}
          className="absolute w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={currentImage.url}
            alt={currentImage.alt}
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute inset-0 z-10 flex items-center justify-between px-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="bg-black/50 text-white hover:bg-black/70"
        >
          <ChevronLeft className="w-8 h-8" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="bg-black/50 text-white hover:bg-black/70"
        >
          <ChevronRight className="w-8 h-8" />
        </Button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/50"
            } hover:bg-white/80`}
          />
        ))}
      </div>
    </div>
  );
}

