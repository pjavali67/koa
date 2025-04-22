"use client";
import React from "react";

import PDFViewer from "@/components/PDFViewer";
type PdfWraperProps = {
  url: string;
  fileName: string;
};
function PdfWraper({ url, fileName }: PdfWraperProps) {
  return (
    <div>
      <PDFViewer url={url} fileName={fileName} />;
    </div>
  );
}

export default PdfWraper;
