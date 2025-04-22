"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
function AboutUsSection() {
  return (
    <>
      <div className="overflow-hidden bg-white py-1 sm:py-5">
        <div className="mx-auto max-w-7xl px-6 lg:px-4">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-1 lg:pr-8 mt-25">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl ">
                  KOA President’s Theme – “Ethical Orthopaedics – Safe
                  Orthopaedics”
                </p>
                <p className="mt-6 text-lg/8 text-gray-600 text-justify">
                  This community has been setup for the Karnataka Orthopaedic
                  Association Members and will attempt to be a high quality
                  forum for academic discussion, provide an information sharing
                  service for basic science and clinical practice research, be a
                  discussion forum of contemporary issues, reports of relevant
                  meetings, conferences, articles and publications.
                </p>
                <div className="mt-5 hidden">
                  <Button variant={"koaread"}> Read More </Button>
                </div>
              </div>
            </div>
            <div
              data-carousel='{ "loadingClasses": "opacity-0", "isAutoPlay": true, "speed":2500}'
              className="relative w-full mt-30  aspect-[16/9]"
            >
              <div className="aspect-[16/9]">
                <Image
                  src="/images/koacon_2025_1.jpg"
                  alt="KOACON-2025"
                  width={1000}
                  height={500}
                ></Image>
              </div>

              <div className="bg-indigo-200 w-full h-20 mt-6">
                <span className="text-2xl font-bold text-center pt-4 pl-2">
                  KOACON -2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsSection;
