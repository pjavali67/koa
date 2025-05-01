// import React from 'react'

// function AcademicCalendarpage() {
//   return (
//     <div>AcademicCalendarpage</div>
//   )
// }

// export default AcademicCalendarpage;

import ImageCarousel from "../../components/ImageCarousel"

export default function AcademicCalendarpage() {
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
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Image Carousel</h1>

        <ImageCarousel images={carouselImages} autoPlay={true} autoPlayInterval={5000} />

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Use the arrow buttons or dots to navigate between slides.</p>
          <p>The carousel also automatically advances every 5 seconds.</p>
        </div>
      </div>
    </main>
  )
}
