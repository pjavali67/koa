"use client";

// import React from "react";

// function OurMessage() {
//   return <div>OurMessage</div>;
// }

// export default OurMessage;

import Image from "next/image";
import { Button } from "../components/ui/button";

export default function OurMessage() {
  return (
    <div className="overflow-hidden bg-white py-2 sm:py-15">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">
                Our Message
              </h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl ">
                KOA President’s Theme, 2024 – 25 “Collaborate – Share – Support”
              </p>
              <p className="mt-6 text-lg/8 text-gray-600 text-justify">
                This community has been setup for the Karnataka Orthopaedic
                Association Members and will attempt to be a high quality forum
                for academic discussion, provide an information sharing service
                for basic science and clinical practice research, be a
                discussion forum of contemporary issues, reports of relevant
                meetings, conferences, articles and publications.
              </p>
              <div className="mt-5">
                <Button variant="koaread"> Read More </Button>
              </div>
            </div>
          </div>
          <div>
            <div className=" mt-20 grid grid-cols-2 gap-x-8 gap-y-8 sm:gap-y-16">
              <span className="">
                {" "}
                <Image
                  src="/assets/members/Dr-Anil-B-Patil-1.jpg"
                  width={500}
                  height={500}
                  alt="Dr. Anil B Patil"
                />
                <span className="text-base/7 font-semibold text-indigo-600">
                  Dr. Anil B Patil, President, KOA
                </span>
              </span>
              <span>
                {" "}
                <Image
                  src="/assets/members/dr-harish-murthy-new-2.jpg"
                  alt="DR. Harish Murthy"
                  width={500}
                  height={500}
                />
                <span className="text-base/7 font-semibold text-indigo-600">
                  Dr. Harish Murthy, Secretary General, KOA​
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
