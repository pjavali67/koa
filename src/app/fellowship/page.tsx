// import React from "react";

// import { Worker, Viewer } from "@react-pdf-viewer/core";
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// import { toolbarPlugin, ToolbarSlot } from "@react-pdf-viewer/toolbar";

// import "@react-pdf-viewer/core/lib/styles/index.css";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// import demoFile from "@/assets/sample.pdf";

// export default function FellowshipPage() {
//   const renderToolbar = (Toolbar: (props: ToolbarProps) => ReactElement) => (
//     <Toolbar>
//       {(slots: ToolbarSlot) => {
//         const { ZoomOut } = slots;
//         return (
//           <div
//             style={{
//               alignItems: "center",
//               display: "flex",
//             }}
//           >
//             <div style={{ padding: "0px 2px" }}>
//               <ZoomOut>
//                 {(props) => (
//                   <button
//                     style={{
//                       backgroundColor: "#357edd",
//                       border: "none",
//                       borderRadius: "4px",
//                       color: "#ffffff",
//                       cursor: "pointer",
//                       padding: "8px",
//                     }}
//                     onClick={props.onClick}
//                   >
//                     Zoom out
//                   </button>
//                 )}
//               </ZoomOut>
//             </div>
//             ...
//           </div>
//         );
//       }}
//     </Toolbar>
//   );

//   const defaultLayoutPluginInstance = defaultLayoutPlugin();

//   return (
//     <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
//       <div style={{ height: "720px" }}>
//         <Viewer fileUrl={demoFile} plugins={[defaultLayoutPluginInstance]} />
//       </div>
//     </Worker>
//   );
// }
import React from "react";

function FellowshipPag() {
  return <div>hello</div>;
}

export default FellowshipPag;
