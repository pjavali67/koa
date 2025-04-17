import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function FeatureSection() {
  return (
    <>
      <div className="overflow-hidden bg-white py-1 sm:py-5">
        <div className="mx-auto max-w-7xl px-6 lg:px-4">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-1 lg:pr-8">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Introducing a new online social community for the Karnataka
                  Orthopaedic Association Members.
                </p>
                <p className="mt-2 text-lg/8 text-gray-600">
                  This community has been setup for the Karnataka Orthopaedic
                  Association Members and will attempt to be a high quality
                  forum for academic discussion, provide an information sharing
                  service for basic science and clinical practice research, be a
                  discussion forum of contemporary issues, reports of relevant
                  meetings, conferences, articles and publications.
                </p>
                <div className="mt-5">
                  <Button variant={"koaread"}> Read More </Button>
                </div>
              </div>
            </div>
            <div
              id="auto-play"
              data-carousel='{ "loadingClasses": "opacity-0", "isAutoPlay": true, "speed":2500}'
              className="relative w-full mt-30"
            >
              <div className="carousel h-80">
                <div className="carousel-body opacity-0 h-full">
                  {/* <!-- Slide 1 --> */}
                  <div className="carousel-slide">
                    <div className="bg-base-200/60 flex h-full justify-center p-6">
                      <span className="self-center text-2xl sm:text-4xl">
                        First slide
                      </span>
                    </div>
                  </div>
                  {/* <!-- Slide 2 --> */}
                  <div className="carousel-slide">
                    <div className="bg-base-200/80 flex h-full justify-center p-6">
                      <span className="self-center text-2xl sm:text-4xl">
                        Second slide
                      </span>
                    </div>
                  </div>
                  {/* <!-- Slide 3 --> */}
                  <div className="carousel-slide">
                    <div className="bg-base-200 flex h-full justify-center p-6">
                      <span className="self-center text-2xl sm:text-4xl">
                        <Image
                          src="/images/image1.jpg"
                          alt="third slide"
                          className="rounded-xl relative  top-[15] bottom-[2] right-[2] absolute w-full"
                          width={1500}
                          height={800}
                        />
                        <span className="relative top-[-50] bottom-[15] right-[-50] absolute text-light-900">
                          {" "}
                          Third slide
                        </span>
                      </span>
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
              <div className="bg-indigo-200 w-full h-20 mt-6">
                <span className="text-2xl font-bold text-center pt-4 pl-2">
                  KOA Bulletin Links
                </span>
                <div className="flex gap-2 text-xl text-gray-900 ml-2">
                  {" "}
                  <span className="font-medium ">2024 | </span>
                  <span className="font-medium ">2023 |</span>
                  <span className="font-medium ">2022</span>
                </div>
              </div>
            </div>

            {/* <img
              alt="Product screenshot"
              src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
