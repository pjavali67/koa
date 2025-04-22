// app/components/PDFViewer.tsx
// "use client";

// import { Document, Page, pdfjs } from "react-pdf";
// import { useState } from "react";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js`;

// type Props = {
//   fileUrl: string;
// };

// export default function PDFViewer({ fileUrl }: Props) {
//   const [numPages, setNumPages] = useState<number | null>(null);

//   const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
//     setNumPages(numPages);
//   };

//   return (
//     <div>
//       <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
//         {Array.from(new Array(numPages), (_, index) => (
//           <Page
//             key={`page_${index + 1}`}
//             pageNumber={index + 1}
//             width={600} // You can adjust the width
//           />
//         ))}
//       </Document>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Set up local worker
// import workerSrc from "pdfjs-dist/build/pdf.worker.entry";
// pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();
export default function PDFViewer() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset: number) {
    setPageNumber((prev) => prev + offset);
  }

  function changePageBack() {
    changePage(-1);
  }

  function changePageNext() {
    changePage(1);
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div className="border p-2 shadow rounded">
        <Document file="/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} height={600} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <div className="flex gap-2">
          {pageNumber > 1 && (
            <button
              onClick={changePageBack}
              className="px-3 py-1 bg-gray-200 rounded"
            >
              Previous Page
            </button>
          )}
          {numPages && pageNumber < numPages && (
            <button
              onClick={changePageNext}
              className="px-3 py-1 bg-gray-200 rounded"
            >
              Next Page
            </button>
          )}
        </div>
      </div>

      {/* Optional: Render all pages below */}
      <div className="w-full mt-6 flex flex-col items-center">
        {numPages && (
          <Document file="/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (_, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={600}
              />
            ))}
          </Document>
        )}
      </div>
    </div>
  );
}
