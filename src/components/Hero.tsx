// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// // import Images from "@/data/heroImages";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// interface HeroImage {
//   id: number;
//   url: string;
//   alt: string;
// }
// // interface HeroCarouselProps {
// //   slides: HeroImage[];
// // }

// const HeroCarousel = () => {
//   const [images, setImages] = useState<HeroImage[]>([]);
//   useEffect(() => {
//     // Fetch images and update the state when component mounts
//     fetch("data/heroCarousel.json")
//       .then((response) => response.json())
//       .then((data) => setImages(data))
//       .catch((error) => console.error("Error fetching images:", error));
//     console.log(images);
//   }, []);
//   return (
//     <div className="relative w-screen h-screen overflow-hidden">
//       <Carousel opts={{ loop: true }} className="w-full h-full">
//         <CarouselContent className="w-full h-full">
//           {images.map((slide) => (
//             <CarouselItem
//               key={slide.id}
//               className="relative w-full h-full flex items-center justify-center"
//             >
//               <Image
//                 src={slide.url}
//                 alt={slide.alt}
//                 fill
//                 className="object-cover"
//                 priority
//               />
//             </CarouselItem>
//           ))}
//         </CarouselContent>

//         {/* Navigation Buttons */}
//         <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70" />
//         <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70" />
//       </Carousel>
//     </div>
//   );
// };

// export default HeroCarousel;
import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
export function Hero() {
  return (
    <Carousel className="w-full h-screen">
      <CarouselContent>
        {carouselData.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-[16/9] items-center justify-center rounded-xl shadow-lg">
                  <Image src={item.image} alt={item.alt} layout="fill" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}

        <div className="absolute inset-0 flex items-center justify-between  z-20">
          <CarouselPrevious className="bg-black/40 hover:bg-black/60 text-white py-[-50]" />
          <CarouselNext className="bg-black/40 hover:bg-black/60 text-white" />
        </div>
      </CarouselContent>
    </Carousel>
  );
}
