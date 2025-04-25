"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

type HerosectionImages = {
  id: string;
  url: string;
  alt: string;
};

function Herosection() {
  const [images, setImages] = useState<HerosectionImages[]>([]);
  
  useEffect(() => {
    fetch("/data/heroCarousel.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  
  }, [images]);

  return (
    <>
        <div
          id="image"
          data-carousel='{ "loadingclassNamees": "opacity-0" }'
          className=" relative w-full overflow-hidden pl-2 pr-2 pb-2  "
        >
          <div className="carousel ">
            <div className="carousel-body h-1/4 opacity-0">
              {images.map((image) => (
                <div className="carousel-slide" key={image.id}>
                  <div className="flex h-full justify-center">
                    <Image
                      src={image.url}
                      className="size-full object-cover  aspect-[16/9]"
                      alt={image.alt}
                      width={500}
                      height={300}
                    />
                  </div>
                </div>
              ))}
            </div>

            <button type="button" className="carousel-prev">
              <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm bg-purple-500">
                <span className="icon-[tabler--chevron-left] size-5 cursor-pointer rtl:rotate-180 bg-white"></span>
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

export default Herosection;
