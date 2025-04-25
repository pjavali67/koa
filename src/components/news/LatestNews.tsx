// "use client";
// import React, { useState, useEffect } from "react";

// // import newsData from "@/news.json";
// // import newsData from "/assets/news.json";
// import Image from "next/image";

// type NewsItem = {
//   id: number;
//   title: string;
//   description: string;
//   mediaUrl: string;
// };

// export default function LatestNews() {
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
//       </div>
//     </main>
//   );
// }
// "use client";

// import { useState, useMemo, useEffect } from "react";

// import Image from "next/image";
// import { SearchInput } from "@/utils/SeaarchInput";
// import { Pagination } from "@/utils/Pagination";

// type NewsItem = {
//   id: number;
//   title: string;
//   description: string;
//   mediaUrl: string;
// };

// const ITEMS_PER_PAGE = 6;

// export default function LatestNews() {
//   const [news, setNews] = useState<NewsItem[]>([]);
//   const [searchTerm, setSearchTerm] = useState<string | null>("");
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     fetch("/data/news.json")
//       .then((res) => res.json())
//       .then((data) => setNews(data))
//       .catch((err) => console.error("Error loading JSON:", err));
//   }, []);

//   const filteredNews = useMemo(() => {
//     return news.filter((item) =>
//       `${item.title} ${item.description}`
//         .toLowerCase()
//         .includes(searchTerm.toLowerCase())
//     );
//   }, [searchTerm]);

//   const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);

//   const paginatedNews = useMemo(() => {
//     const start = (currentPage - 1) * ITEMS_PER_PAGE;
//     return filteredNews.slice(start, start + ITEMS_PER_PAGE);
//   }, [filteredNews, currentPage]);

//   return (
//     <main className="max-w-6xl mx-auto px-4 py-10">
//       <h1 className="text-3xl font-bold text-center mb-6">Latest News</h1>

//       <SearchInput value={searchTerm} onChange={setSearchTerm} />

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {paginatedNews.map((item: NewsItem) => {
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
//       </div>

//       <Pagination
//         currentPage={currentPage}
//         totalPages={totalPages}
//         onPageChange={setCurrentPage}
//       />
//     </main>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
// import newsData from "@/data/news.json";
import { Input } from "../../components/ui/input";
// import { Button } from "@/components/ui/button";
import { Pagination } from "../../utils/Pagination";

type NewsItem = {
  id: number;
  title: string;
  description: string;
  mediaUrl: string;
};

const ITEMS_PER_PAGE = 9;

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [newsData, SetNewsData] = useState<NewsItem[]>([]);
  useEffect(() => {
    fetch("/data/news.json")
      .then((res) => res.json())
      .then((data) => SetNewsData(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  const filteredNews = newsData.filter((item: NewsItem) =>
    `${item.title} ${item.description}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedNews = filteredNews.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // const handlePageChange = (newPage: number) => {
  //   setCurrentPage(newPage);
  // };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Latest News</h1>

      {/* Search Bar */}
      <div className="mb-6 max-w-md mx-auto">
        <Input
          placeholder="Search news..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset to page 1 on search
          }}
        />
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedNews.map((item) => {
          const isImage = item.mediaUrl.match(/\.(jpg|jpeg|png)$/i);
          const isVideo = item.mediaUrl.match(/\.(mp4|webm)$/i);

          return (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              <div className="relative h-56 w-full">
                {isImage ? (
                  <Image
                    src={item.mediaUrl}
                    alt={item.title}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : isVideo ? (
                  <video controls className="w-full h-full object-cover">
                    <source src={item.mediaUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : null}
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {/* Pagination */}
      {/* {totalPages > 1 && (
        <div className="flex justify-center gap-4 mt-8">
          <Button
            variant="outline"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Prev
          </Button>
          <span className="text-gray-700 text-sm pt-2">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      )} */}
    </div>
  );
}
