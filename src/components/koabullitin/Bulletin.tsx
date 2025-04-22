"use client";
import React from "react";
// import dynamic from "next/dynamic";

// const PdfViewer = dynamic(() => import("./PdfViewer"), { ssr: false });
// import { Document, Page } from "react-pdf";
// import samplePDF from "@/assets/members/bulletin-2003.pdf";
function Bulletin() {
  return (
    <div>
      <div>
        <h1>PDF Viewer</h1>
        <PdfViewer fileUrl="./bulletin-2003.pdf" />
      </div>
    </div>
  );
}

export default Bulletin;
