// "use client";
// import React, { useState, useEffect } from "react";
// import { TabSwitcher } from "@/components/ui/TabSwitcher";
// import LatestNews from "@/components/news/LatestNews";
// // import newsData from "@/news.json";
// // import newsData from "/assets/news.json";
// import Image from "next/image";

// type NewsItem = {
//   id: number;
//   title: string;
//   description: string;
//   mediaUrl: string;
// };

// // const Overview = () => <div>📊 Overview content here</div>;
// const Settings = () => <div>⚙️ Settings content here</div>;
// const Profile = () => <div>👤 Profile details here</div>;
// export default function NewsPage() {
//   const tabs = [
//     { title: "News -2025", content: <LatestNews /> },
//     { title: "Archive News", content: <Settings /> },
//     { title: "Annoucement", content: <Profile /> },
//   ];
//   const [news, setNews] = useState<NewsItem[]>([]);

//   useEffect(() => {
//     fetch("/data/news.json")
//       .then((res) => res.json())
//       .then((data) => setNews(data))
//       .catch((err) => console.error("Error loading JSON:", err));
//   }, []);
//   return (
//     <main className="max-w-6xl mx-auto px-4 py-10">
//       <h1 className="text-3xl font-bold text-center mb-8">Latest News</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {news.map((item: NewsItem) => {
//           const isImage = item.mediaUrl.match(/\.(jpg|jpeg|png)$/i);
//           const isVideo = item.mediaUrl.match(/\.(mp4|webm)$/i);

//           return (
//             <div
//               key={item.id}
//               className="bg-white shadow rounded-lg overflow-hidden flex flex-col"
//             >
//               <div className="relative h-56 w-full">
//                 {isImage && (
//                   <Image
//                     src={item.mediaUrl}
//                     alt={item.title}
//                     fill
//                     className="object-cover"
//                   />
//                 )}
//                 {isVideo && (
//                   <video controls className="w-full h-full object-cover">
//                     <source src={item.mediaUrl} type="video/mp4" />
//                     Your browser does not support the video tag.
//                   </video>
//                 )}
//               </div>

//               <div className="p-4 flex flex-col flex-grow">
//                 <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
//                 <p className="text-gray-600 text-sm flex-grow">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//
//     </main>
//   );
import { TabSwitcher } from "../../components/ui/TabSwitcher";
import LatestNews from "../../components/news/LatestNews";
import Annoucements from "../../components/news/Annoucements";

const Settings = () => (
  <div className="text-bold text-2xl">
    ⚙️ Archive Contents here , its under developement
  </div>
);

export default function DashboardPage() {
  const tabs = [
    { title: "Latest News -2025", content: <LatestNews /> },
    { title: "Archive News", content: <Settings /> },
    { title: "Annoucement", content: <Annoucements /> },
  ];

  return (
    <div className="m-full m-20 pr-20">
      <h1 className="text-3xl font-bold mb-6">News Dashboard</h1>
      <TabSwitcher tabs={tabs} />
    </div>
  );
}
