"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
function PresidentsMessage() {
  return (
    <>
      <div className="overflow-hidden bg-white py-1 sm:py-5">
        <div className="mx-auto max-w-7xl px-6 lg:px-4">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-1 lg:pr-8">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Dr. Anil B Patil
                </p>
                <span className="text-base/7 font-semibold text-indigo-600">
                  President, KOA
                </span>
                <div className="mt-2 text-lg/8 text-gray-600 text-justify">
                  A Warm and a Heartfelt greeting to all the esteemed Members of
                  Karnataka Orthopaedic Association. It is an honour and
                  privilege to serve as your President. Leading this esteemed
                  community of Orthopaedic professionals is an Opportunity which
                  I abide to keep up to the expectations and glory of the POST.
                </div>
                <div className="mt-2 text-lg/8 text-gray-600 text-justify">
                  Our association is thriving because of the dedication and
                  expertise of each one of you. As we navigate the challenges
                  and opportunities in the world of Orthopaedics, I am inspired
                  by the collective knowledge and passion of our members in
                  their approach and commitment. Working together towards
                  progress is essential for achieving common goals and making a
                  positive impact. Collaboration, Shared knowledge and Support
                  can drive innovations and achieve remarkable advancements
                  which will have a high impact on enhanced patient care and
                  thus elevating the standards of orthopaedic practice.
                </div>
                <div className="mt-2 text-lg/8 text-gray-600  test-justify">
                  I hereby encourage each one of you to actively engage with the
                  association, organise and participate in all the activities.
                  Each one of you can contribute pricelessly, and together, we
                  can make a lasting impact on the lives of countless
                  individuals. Let us move forward by Empowering Vision and
                  Embracing Progress.
                </div>
                <p className="text-xl text-bold">Jai IOA, Jai KOA</p>
                <p>With warm regards,</p>
                <p className="mt-2 mb-2 text-2xl font-semibold tracking-tight text-pretty text-purple-500 sm:text-2xl">
                  Dr. Anil B Patil A
                </p>
                <span>President, KOA</span>
                <p>
                  Mobile: 9845198488 <br /> Email: deepsdoc@gmail.com
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
              <div className=" mt-20 grid grid-cols-2 gap-x-8 gap-y-8 sm:gap-y-16">
                <div className="w-auto">
                  <span>
                    <Image
                      src="/assets/members/dr-anil-B-Patil-1.jpg"
                      width={500}
                      height={500}
                      alt="Dr. Anil B Patil, President, KOA"
                    />
                    <span className="text-base/7 font-semibold text-indigo-600">
                      Dr. Anil B Patil, President, KOA
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
          </div>
        </div>
      </div>
    </>
  );
}

export default PresidentsMessage;
