"use client";
import React from "react";
import PageLayout from "@/utils/Pagelayout";
import dynamic from "next/dynamic";
const PdfViewer = dynamic(() => import("@/utils/PdfViewer"), {
  ssr: false,
});
// import PdfWraper from "../pdf-wraper/PdfWraper";
function ByLaws() {
  return (
    <>
      <PageLayout title="Bylaws and Bluebook" description="" />
      <h1 className="text-xl mb-6  ml-15 font-bold">Bylaws</h1>
      <PdfViewer fileUrl="./assets/KOA-Bylaws.pdf" />
    </>
  );
}

export default ByLaws;
