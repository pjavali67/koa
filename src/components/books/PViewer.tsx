import React from "react";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
interface PDFViewerProps {
  fileUrl: string;
}

const PViewer: React.FC<PDFViewerProps> = ({ fileUrl }) => {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
      {/* https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js */}
      <div style={{ height: "800px" }}>
        <Viewer fileUrl={fileUrl} />
      </div>
    </Worker>
  );
};

export default PViewer;
