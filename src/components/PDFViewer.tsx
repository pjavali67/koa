"use client";
//**addin wraper for pdf viewer */

import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  ZoomIn,
  ZoomOut,
  RotateCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import "@/utils/PdfWorker"; // Important: ensure this is imported

// Set up the worker properly
// We need to do this in a useEffect to avoid SSR issues
// and make sure it only runs once in the browser

interface PDFViewerProps {
  url: string;
  fileName?: string;
}

export default function PDFViewer({
  url,
  fileName = "document.pdf",
}: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [rotation, setRotation] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [workerInitialized, setWorkerInitialized] = useState<boolean>(false);

  // Initialize the worker in useEffect to avoid SSR issues
  useEffect(() => {
    // Only set the worker source once
    if (!workerInitialized) {
      // Use unpkg as a more reliable CDN
      // const workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
      // pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
      pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        "pdfjs-dist/build/pdf.worker.min.mjs",
        import.meta.url
      ).toString();
      setWorkerInitialized(true);
    }
  }, [workerInitialized]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setLoading(false);
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => {
      const newPageNumber = prevPageNumber + offset;
      return newPageNumber >= 1 && newPageNumber <= (numPages || 1)
        ? newPageNumber
        : prevPageNumber;
    });
  }

  function zoomIn() {
    setScale((prevScale) => Math.min(prevScale + 0.2, 3));
  }

  function zoomOut() {
    setScale((prevScale) => Math.max(prevScale - 0.2, 0.5));
  }

  function rotate() {
    setRotation((prevRotation) => (prevRotation + 90) % 360);
  }

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => changePage(-1)}
            disabled={pageNumber <= 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm">
            Page {pageNumber} of {numPages || "--"}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => changePage(1)}
            disabled={!numPages || pageNumber >= numPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={zoomOut}>
            <ZoomOut className="h-4 w-4" />
          </Button>
          <span className="text-sm w-16 text-center">
            {Math.round(scale * 100)}%
          </span>
          <Button variant="outline" size="icon" onClick={zoomIn}>
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={rotate}>
            <RotateCw className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a
              href={url}
              download={fileName}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4 bg-gray-50 flex justify-center min-h-[500px]">
        {loading && (
          <div className="flex flex-col items-center justify-center w-full">
            <Skeleton className="h-[600px] w-[450px]" />
          </div>
        )}

        {workerInitialized && (
          <Document
            file={url}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(error) => {
              console.error("Error loading PDF:", error);
              setLoading(false);
            }}
            loading={
              <div className="flex flex-col items-center justify-center w-full">
                <Skeleton className="h-[600px] w-[450px]" />
              </div>
            }
          >
            <Page
              pageNumber={pageNumber}
              scale={scale}
              rotate={rotation}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        )}
      </div>
    </div>
  );
}
