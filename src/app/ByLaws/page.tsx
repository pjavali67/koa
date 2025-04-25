"use client";
import React from "react";

// import PageLayout from "@/utils/Pagelayout";
//import dynamic from "next/dynamic";
// const PdfViewer = dynamic(() => import("@/utils/PdfViewer"), {
//   ssr: false,
// });
// import PdfWraper from "../pdf-wraper/PdfWraper";
function ByLaws() {
  return (
    <>
      <div >
        {/* <PageLayout title="Bylaws and Bluebook" description="" /> */}
        <h1 className="text-xl mb-6  ml-15 font-bold">Bylaws</h1>
        {/* <PdfViewer fileUrl="./assets/KOA-Bylaws.pdf" /> */}
        <div className="w-full h-screen p-10 m-5">
          {/* <iframe width="100%" height="100%" src="/assets/KOA-Bylaws.pdf" /> */}
          <embed src="/assets/KOA-Bylaws.pdf" width="100%" height="600px" type="application/pdf" />


        </div>
      </div>
    </>
  );
}

export default ByLaws;
