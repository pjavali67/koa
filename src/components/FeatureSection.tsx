import Link from "next/link";
// import { Button } from "../components/ui/button";
// import CarouselSmall from "../utils/carouselSmall";
//import HeroCarousel from "./custom-components/HeroCarousel";
// import CarouselSmall from "@/utils/carouselSmall";
import SmallCarousel from "./custom-components/SmallCarusel";


export default function FeatureSection() {
  return (
    <>
      <div className="overflow-hidden bg-white py-1 ">
        <div className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text bg-transparent  mb-3 ml-20 text-5xl font-semibold tracking-tight text-pretty ">
          Welcome to Karnataka Orthopaedic Association
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-4">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-1 lg:pr-8">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl ">
                  Introducing a new online social community for the Karnataka
                  Orthopaedic Association Members.
                </p>
                <p className="mt-2 text-lg/8 text-gray-600  text-justify">
                  This community has been setup for the Karnataka Orthopaedic
                  Association Members and will attempt to be a high quality
                  forum for academic discussion, provide an information sharing
                  service for basic science and clinical practice research, be a
                  discussion forum of contemporary issues, reports of relevant
                  meetings, conferences, articles and publications.
                </p>
                <div className="mt-5">
                  <Link href={'/aboutus'} className="btn bg-purple-500 "> Read More </Link>
                </div>
              </div>
            </div>

            <div
              id="auto-play"
              data-carousel='{ "loadingClasses": "opacity-0", "isAutoPlay": true, "speed":2500}'
              className="relative w-full mt-30  aspect-[16/9]"
            >
              <>
                <SmallCarousel />
              </>
              <div className="bg-indigo-200 w-full h-20 mt-6">
                <span className="text-2xl font-bold text-center pt-4 pl-2">
                  KOA Bulletin Links
                </span>
                <div className="flex gap-2 text-xl text-gray-900 ml-2">
                  {" "}
                  <Link href={'/news'}
                    className="font-medium "> 2024 | </Link>
                  <Link href={'/news'} className="font-medium ">2023 |</Link>
                  <Link href={'/news'} className="font-medium ">2022</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
