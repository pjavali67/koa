// "use client";

import React from "react";
import Image from "next/image";

function Herosection() {
  return (
    <div
      id="image"
      data-carousel='{ "loadingclassNamees": "opacity-0" }'
      className="relative w-full overflow-hidden"
    >
      <div className="carousel ">
        <div className="carousel-body h-1/4 opacity-0">
          {/* <!-- Slide 1 --> */}
          <div className="carousel-slide">
            <div className="flex h-full justify-center">
              <Image
                src="/images/image2.jpg"
                className="size-full object-cover"
                alt="image2"
                width={500}
                height={300}
              />
            </div>
          </div>
          {/* <!-- Slide 2 --> */}
          <div className="carousel-slide">
            <div className="flex h-full justify-center">
              <Image
                src="/images/image3.jpg"
                className="size-full object-cover"
                alt="image3"
                width={500}
                height={500}
              />
            </div>
          </div>
          {/* <!-- Slide 3 --> */}
          <div className="carousel-slide">
            <div className="flex h-full justify-center">
              <Image
                src="/images/image4.jpg"
                className="size-full object-cover"
                alt="image4"
                width={500}
                height={300}
              />
            </div>
          </div>
          {/* <!-- Slide 4 --> */}
          <div className="carousel-slide">
            <div className="flex h-full justify-center">
              <Image
                src="/images/image5.jpg"
                className="size-full object-cover"
                alt="image5"
                width={500}
                height={300}
              />
            </div>
          </div>
          {/* <!-- Slide 5 --> */}
          <div className="carousel-slide">
            <div className="flex h-full justify-center">
              <Image
                src="/images/image1.jpg"
                className="size-full object-cover"
                alt="image1"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Previous Slide --> */}
      <button type="button" className="carousel-prev">
        <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
          <span className="icon-[tabler--chevron-left] size-5 cursor-pointer rtl:rotate-180"></span>
        </span>
        <span className="sr-only">Previous</span>
      </button>
      {/* <!-- Next Slide --> */}
      <button type="button" className="carousel-next">
        <span className="sr-only">Next</span>
        <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
          <span className="icon-[tabler--chevron-right] size-5 cursor-pointer rtl:rotate-180"></span>
        </span>
      </button>
    </div>
  );
}

export default Herosection;
