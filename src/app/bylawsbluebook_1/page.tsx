"use client";
import React from "react";
import PageLayout from "../../components/custom-components/PageLayout";
import dynamic from "next/dynamic";
const PdfViewer = dynamic(() => import("../../components/PdfViewer"), {
  ssr: false,
});



function ByLaws() {

  return (
    <>
      <PageLayout title="Bylaws and Bluebook"  >
        <h1 className="text-xl font-bold mb-6 mt-10 ml-15 mb-10">
          KOA Bylaws and Bluebook
        </h1>
        <div className=" ml-20 justify-center item-center relative w-full h-auto ">
          <nav
            className="tabs tabs-bordered mb-10"
            aria-label="Tabs"
            role="tablist"
            aria-orientation="horizontal"
          >
            <button
              type="button"
              className="tab active-tab:tab-active active text-bold text-2xl"
              id="tabs-basic-item-1"
              data-tab="#tabs-basic-1"
              aria-controls="tabs-basic-1"
              role="tab"
              aria-selected="true"
            >
              Bylaws
            </button>
            <button
              type="button"
              className="tab active-tab:tab-active text-bold text-2xl"
              id="tabs-basic-item-2"
              data-tab="#tabs-basic-2"
              aria-controls="tabs-basic-2"
              role="tab"
              aria-selected="false"
            >
              BlueBook
            </button>
            <button
              type="button"
              className="tab active-tab:tab-active text-bold text-2xl"
              id="tabs-basic-item-3"
              data-tab="#tabs-basic-3"
              aria-controls="tabs-basic-3"
              role="tab"
              aria-selected="false"
            >

            </button>
          </nav>

          <div className="mt-3">
            <div
              id="tabs-basic-1"
              role="tabpanel"
              aria-labelledby="tabs-basic-item-1"
              className="bg-gray-200 "
            >
              <PdfViewer fileUrl="./assets/KOA-Bylaws.pdf" />
            </div>
            <div
              id="tabs-basic-2"
              className="hidden"
              role="tabpanel"
              aria-labelledby="tabs-basic-item-2"
            ></div>
            <div
              id="tabs-basic-3"
              className="hidden"
              role="tabpanel"
              aria-labelledby="tabs-basic-item-3"
            ></div>
          </div>
        </div>
      </PageLayout>
    </>

  );

}

export default ByLaws;
