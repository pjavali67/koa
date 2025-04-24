"use client";

import { useEffect, useRef, useState } from "react";
import { getDocument, PDFDocumentProxy, GlobalWorkerOptions } from "pdfjs-dist";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Printer,
  Download,
} from "lucide-react";

GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@5.1.91/build/pdf.worker.min.mjs`;
interface PdfViewerProps {
  fileUrl: string;
}

export default function PdfViewer({ fileUrl }: PdfViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pdf, setPdf] = useState<PDFDocumentProxy | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  useEffect(() => {
    const loadingTask = getDocument(fileUrl);
    loadingTask.promise.then((pdf) => {
      setPdf(pdf);
    });
  }, [fileUrl]);

  useEffect(() => {
    if (pdf) {
      renderPage(pageNumber);
    }
  }, [pdf, pageNumber, scale]);

  const renderPage = async (num: number) => {
    const page = await pdf!.getPage(num);
    const viewport = page.getViewport({ scale });
    const canvas = canvasRef.current!;
    const context = canvas.getContext("2d")!;
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    await page.render({
      canvasContext: context,
      viewport,
    }).promise;
  };

  const printPdf = () => {
    const iframe = document.createElement("iframe");
    iframe.src = fileUrl;
    iframe.style.display = "none";
    document.body.appendChild(iframe);
    iframe.onload = () => {
      iframe.contentWindow?.print();
    };
  };

  const downloadPdf = () => {
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = fileUrl.split("/").pop() || "download.pdf";
    a.click();
  };

  return (
    <div className="w-full m-10 bg-gray-300 max-w-3xl mx-auto text-center space-y-4">
      <div className="flex justify-center gap-2">
        <button
          onClick={() => setPageNumber((prev) => Math.max(1, prev - 1))}
          className="btn bg-gray-500 hover:bg-purple-500"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() =>
            setPageNumber((prev) => Math.min(pdf?.numPages || 1, prev + 1))
          }
          className="btn bg-gray-500 hover:bg-purple-500"
        >
          <ChevronRight />
        </button>
        <button
          onClick={() => setScale((prev) => prev + 0.1)}
          className="btn bg-gray-500 hover:bg-purple-500"
        >
          <Plus />
        </button>
        <button
          onClick={() => setScale((prev) => Math.max(0.1, prev - 0.1))}
          className="btn bg-gray-500 hover:bg-purple-500"
        >
          <Minus />
        </button>
        <button
          onClick={printPdf}
          className="btn bg-gray-500 hover:bg-purple-500"
        >
          <Printer />
        </button>
        <button
          onClick={downloadPdf}
          className="btn bg-gray-500 hover:bg-purple-500"
        >
          <Download />
        </button>
        <p className="text-2xl text-gray-500">
          Page {pageNumber} of {pdf?.numPages || 0}
        </p>
      </div>

      <canvas ref={canvasRef} className="border shadow-lg mx-auto" />

      <p className="text-sm text-gray-500">
        Page {pageNumber} of {pdf?.numPages || 0}
      </p>
    </div>
  );
}
