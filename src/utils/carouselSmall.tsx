"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
//import { Button } from "@/components/ui/button";
type SmallImageType = {
  id: string;
  url: string;
  alt: string;
  textTag?: string;
};
function CarouselSmall() {
  const [smallImages, setSmallImages] = useState<SmallImageType[]>([]);
  useEffect(() => {
    fetch("/data/heroCarousel.json")
      .then((res) => res.json())
      .then((data) => setSmallImages(data));
  }, []);
  return (
    <>
      <div className="w-150">
        <div
          id="auto-play"
          data-carousel='{ "loadingclassNamees": "opacity-0", "isAutoPlay": true, "speed": 3000 }'
          className="relative w-full"
        >
          <div className="carousel h-80 w-full">
            <div className="carousel-body opacity-0 h-full">
              {smallImages.map((image) => {
                return (
                  <div className="carousel-slide" key={image.id}>
                    <div className="bg-base-200/60 flex h-full justify-center p-3">
                      <div className="apsct-[16/9] w-full h-screen">
                        <Image
                          src={image.url}
                          alt={image.alt}
                          height={100}
                          width={850}
                          className="aspect-[16/9] "
                        />
                        <span className="text-2xl sm:text-4xl">
                          {image.alt}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <button type="button" className="carousel-prev">
            <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm bg-purple-500">
              <span className="icon-[tabler--chevron-left] size-5 cursor-pointer rtl:rotate-180 bg-whites bg-wh bg-white"></span>
            </span>
            <span className="sr-only">Previous</span>
          </button>

          <button type="button" className="carousel-next ">
            <span className="sr-only ">Next</span>
            <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm bg-purple-500">
              <span className="icon-[tabler--chevron-right] size-5 cursor-pointer rtl:rotate-180 bg-white"></span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default CarouselSmall;
