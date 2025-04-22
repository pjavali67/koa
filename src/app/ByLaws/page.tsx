import React from "react";
import PageLayout from "@/utils/Pagelayout";
import PdfWraper from "../pdf-wraper/PdfWraper";
function ByLaws() {
  return (
    <>
      <PageLayout title="Bylaws and Bluebook" description="" />
      <h1 className="text-xl mb-6  ml-15 font-bold">Bylaws</h1>
      <PdfWraper url="./assets/KOA-Bylaws.pdf" fileName="Bylaws" />
    </>
  );
}

export default ByLaws;
