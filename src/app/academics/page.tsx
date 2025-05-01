import React from "react";

// function AcademicsPage() {
//   return <div>accademics pagessads</div>;
// }

// export default AcademicsPage;
import ImageCarousel from "../../components/ImageCarousel"

export default function AcademicsPage() {
  // Sample images for the carousel
  const carouselImages = [
    {
      src: "/images/image1.jpg",
      alt: "Slide 1",
    },
    {
      src: "/images/image2.jpg",
      alt: "Slide 2",
    },
    {
      src: "/images/image3.jpg",
      alt: "Slide 3",
    },
    {
      src: "/images/image4.jpg",
      alt: "Slide 4",
    },
    {
      src: "/images/image5.jpg",
      alt: "Slide 5",
    },
  ]

  return (
    <main className="flex  flex-col items-center justify-center sm:p-1">
      <div className="w-full max-w-8xl max-h-screen-md m-2 rounded-lg shadow-lg overflow-hidden  ">
        {/* <ImageCarousel images={carouselImages} autoPlay={true} autoPlayInterval={5000} /> */}
        <ImageCarousel images={carouselImages} height="h-screen" autoPlay={false} width="w-full-2xl" />
      </div>
      <div className="pt-50 h-200"></div>
    </main>
  )

}
