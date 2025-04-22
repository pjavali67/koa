"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
function SecretryMessage() {
  return (
    <>
      <div className="overflow-hidden bg-white py-1 sm:py-5">
        <div className="mx-auto max-w-7xl px-6 lg:px-4">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div
              data-carousel='{ "loadingClasses": "opacity-0", "isAutoPlay": true, "speed":2500}'
              className="relative w-full mt-10  aspect-[16/9]"
            >
              <div className=" mt-20 grid grid-cols-2 gap-x-8 gap-y-8 sm:gap-y-16">
                <div className="w-auto">
                  <span className="gi">
                    <Image
                      src="/assets/members/dr-harish-murthy-new-2.jpg"
                      width={500}
                      height={500}
                      alt="Dr. Anil B Patil, President, KOA"
                    />
                    <span className="text-base/7 font-semibold text-indigo-600">
                      Dr. Harish Murthy
                    </span>
                  </span>
                </div>
              </div>
              <div className="bg-indigo-200 w-full h-20 mt-6">
                <span className="text-2xl font-bold text-center pt-4 pl-2 hidden">
                  koa
                </span>
              </div>
            </div>
            <div className="lg:pt-1 lg:pr-8 mt-20">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Dr. Harish Murthy
                </p>
                <span className="text-base/7 font-semibold text-indigo-600">
                  Secretary General, KOA
                </span>
                <p className="mt-2 text-lg/8 text-gray-600 ">
                  Respected Seniors and Friends,
                </p>
                <p className="text-justify">
                  I thank all the members of KOA for unanimously electing me as
                  Secretary General of Karnataka Orthopaedic Association. I seek
                  your support and cooperation in conducting the activities of
                  KOA for next 3 years.
                </p>
                <p className="text-justify">
                  With the upcoming IOACON2024, IASCON2024 and ISSHCON being
                  conducted in Bengaluru this year, we all should work hard and
                  try to bag first position in “IOA Dr Arun Kumar Gupta trophy
                  for best large chapter award 2024”
                </p>
                <p className="text-xl text-bold">Long live KOA and IOA</p>
                <p>With Best Regards,</p>
                <p className="mt-2 mb-2 text-2xl font-semibold tracking-tight text-pretty text-purple-500 sm:text-2xl">
                  Dr. Harish Murthy
                </p>
                <p>Secretary General, KOA</p>
                <p></p>

                <div className="mt-5 hidden">
                  <Button variant={"koaread"}> Read More </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecretryMessage;
