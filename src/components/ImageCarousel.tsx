// "use client"

// import { useState, useEffect, useCallback } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import { cn } from "../utils/cn"

// interface ImageCarouselProps {
//   images: {
//     src: string
//     alt: string
//   }[]
//   autoPlay?: boolean
//   autoPlayInterval?: number
//   className?: string
// }

// export default function ImageCarousel({
//   images,
//   autoPlay = true,
//   autoPlayInterval = 5000,
//   className,
// }: ImageCarouselProps) {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isAnimating, setIsAnimating] = useState(false)

//   const goToNext = useCallback(() => {
//     if (isAnimating) return

//     setIsAnimating(true)
//     setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))

//     setTimeout(() => {
//       setIsAnimating(false)
//     }, 500) // Match this with the transition duration
//   }, [images.length, isAnimating])

//   const goToPrevious = useCallback(() => {
//     if (isAnimating) return

//     setIsAnimating(true)
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))

//     setTimeout(() => {
//       setIsAnimating(false)
//     }, 500) // Match this with the transition duration
//   }, [images.length, isAnimating])

//   const goToSlide = (index: number) => {
//     if (isAnimating || index === currentIndex) return

//     setIsAnimating(true)
//     setCurrentIndex(index)

//     setTimeout(() => {
//       setIsAnimating(false)
//     }, 500) // Match this with the transition duration
//   }

//   useEffect(() => {
//     let interval: NodeJS.Timeout

//     if (autoPlay) {
//       interval = setInterval(() => {
//         goToNext()
//       }, autoPlayInterval)
//     }

//     return () => {
//       if (interval) clearInterval(interval)
//     }
//   }, [autoPlay, autoPlayInterval, goToNext])

//   if (!images || images.length === 0) {
//     return null
//   }

//   return (
//     <div className={cn("relative w-full overflow-hidden rounded-lg", className)}>
//       {/* Carousel container */}
//       <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
//         {/* Images */}
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={cn(
//               "absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out",
//               index === currentIndex
//                 ? "translate-x-0 opacity-100"
//                 : index < currentIndex
//                   ? "-translate-x-full opacity-0"
//                   : "translate-x-full opacity-0",
//             )}
//           >
//             <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
//           </div>
//         ))}

//         {/* Navigation buttons */}
//         <button
//           onClick={goToPrevious}
//           className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-300"
//           aria-label="Previous slide"
//         >
//           <ChevronLeft className="h-6 w-6" />
//         </button>
//         <button
//           onClick={goToNext}
//           className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-300"
//           aria-label="Next slide"
//         >
//           <ChevronRight className="h-6 w-6" />
//         </button>
//       </div>

//       {/* Dots navigation */}
//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={cn(
//               "w-3 h-3 rounded-full transition-all duration-300",
//               index === currentIndex ? "bg-white scale-110" : "bg-white/50 hover:bg-white/80",
//             )}
//             aria-label={`Go to slide ${index + 1}`}
//             aria-current={index === currentIndex ? "true" : "false"}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }
"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "../lib/utils"
import Image from "next/image"
interface ImageCarouselProps {
  images: {
    src: string
    alt: string
  }[]
  autoPlay?: boolean
  autoPlayInterval?: number
  className?: string
  height?: string
  width?: string
}

export default function ImageCarousel({
  images,
  autoPlay = true,
  autoPlayInterval = 5000,
  className,
  height = "h-64 sm:h-80 md:h-96",
  width ,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToNext = useCallback(() => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))

    setTimeout(() => {
      setIsAnimating(false)
    }, 500) // Match this with the transition duration
  }, [images.length, isAnimating])

  const goToPrevious = useCallback(() => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))

    setTimeout(() => {
      setIsAnimating(false)
    }, 500) // Match this with the transition duration
  }, [images.length, isAnimating])

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return

    setIsAnimating(true)
    setCurrentIndex(index)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500) // Match this with the transition duration
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoPlay) {
      interval = setInterval(() => {
        goToNext()
      }, autoPlayInterval)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [autoPlay, autoPlayInterval, goToNext])

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className={cn(`relative  rounded-lg $`, className )}>
      {/* Carousel container */}
      <div className={cn(`relative   ${height} ${width} overflow-hidden`)}>
        {/* Images */}
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute top-0 left-0   transition-transform duration-500 ease-in-out",
              index === currentIndex
                ? "translate-x-0 opacity-100"
                : index < currentIndex
                  ? "-translate-x-full opacity-0"
                  : "translate-x-full opacity-0",
            )}
          >
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
          </div>
        ))}

        {/* Navigation buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentIndex ? "bg-white scale-110" : "bg-white/50 hover:bg-white/80",
            )}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  )
}
