// "use client";
// import { useMemo, useRef, ChangeEvent } from "react";
// import { Upload, User } from "lucide-react";
// import { Button } from "../../components/ui/button";
// import Image from "next/image";

// type ProfileData = {
//   section: string;
//   header: string;
//   content: string;
// };

// type ProfileImage = {
//   file: File | null;
//   previewUrl: string | null;
// };

// export default function ProfileTable() {
//   const initialData: ProfileData[] = [
//     { section: "Personal Details", header: "First Name", content: "Dr. Ramachandra" },
//     { section: "Personal Details", header: "Nickname", content: "Dr. Ramachandra H M" },
//     { section: "Personal Details", header: "Last Name", content: "H M" },
//     { section: "Personal Details", header: "Address", content: "Madhava Ortho & Fracture Clinic,\nBehind Shankar Gas,\nLower Hutha,\nBhadravathi 577301,\nShivamogga District" },
//     { section: "Personal Details", header: "Email", content: "ramachandrahm@hotmail.com" },
//     { section: "Personal Details", header: "Mobile Number", content: "9448921890" },
//     { section: "Personal Details", header: "Date Of Birth", content: "20/08/1966" },
//     { section: "Personal Details", header: "Membership Number", content: "R 49" },
//     { section: "Academic Details", header: "PG College Name", content: "B J Medical College, Pune" },
//     { section: "Academic Details", header: "Passing Year", content: "1994" },
//     { section: "Academic Details", header: "MBBS College Name", content: "Government Mysore Medical College" },
//     { section: "Academic Details", header: "MBBS Passing Year", content: "1990" },
//     { section: "Invitee Details", header: "Proposer Name", content: "Proposer Name" },
//     { section: "Invitee Details", header: "Proposer KOA No.", content: "Proposer KOA Number" },
//     { section: "Invitee Details", header: "Seconded Name", content: "Seconder Name" },
//     { section: "Invitee Details", header: "Seconded KOA No.", content: "Seconder KOA Number" },
//   ];

//   const profileImage: ProfileImage = {
//     file: null,
//     previewUrl: null,
//   };

//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const sections = useMemo(() => {
//     const map = new Map<string, ProfileData[]>();
//     initialData.forEach((item) => {
//       if (!map.has(item.section)) {
//         map.set(item.section, []);
//       }
//       map.get(item.section)?.push(item);
//     });
//     return Array.from(map.entries());
//   }, []);

//   return (
//     <div className="space-y-6 w-full flex flex-col items-center justify-center p-6 bg-gray-50 max-w-full">
//       <h1 className="text-2xl font-bold">Profile</h1>

//       {/* Profile Image Section */}
//       <div className="flex flex-col items-center gap-4 p-6 border rounded-md bg-white">
//         <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200">
//           {profileImage.previewUrl ? (
//             <Image
//               src={profileImage.previewUrl}
//               alt="Profile Preview"
//               fill
//               className="object-cover"
//             />
//           ) : (
//             <div className="w-full h-full bg-gray-100 flex items-center justify-center">
//               <User className="h-16 w-16 text-gray-400" />
//             </div>
//           )}
//         </div>
//         <div className="flex gap-2">
//           <Button
//             variant="outline"
//             onClick={() => fileInputRef.current?.click()}
//             className="gap-2"
//           >
//             <Upload className="h-4 w-4" />
//             Change Photo
//           </Button>
//           <input
//             type="file"
//             ref={fileInputRef}
//             accept="image/*"
//             className="hidden"
//             onChange={(e: ChangeEvent<HTMLInputElement>) => { }}
//           />
//         </div>
//       </div>

//       {/* Profile Info Table */}
//       <div className="rounded-md w-3/4 border">
//         {sections.map(([section, rows]) => (
//           <div key={section}>
//             <div className="bg-gray-100 p-4 font-bold text-lg">{section}</div>
//             {rows.map((item, index) => (
//               <div
//                 key={item.header}
//                 className={`flex items-start p-4 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
//               >
//                 <div className="w-1/4 font-medium">{item.header}</div>
//                 <div className="flex-1 whitespace-pre-line">{item.content}</div>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";
import { useMemo, useState, Suspense } from "react"; // useRef, ChangeEvent
import { User } from "lucide-react";
// import { Button } from "../../components/ui/button";
import Image from "next/image";
import dynamic from "next/dynamic"
const LoadedContent = dynamic(() => import("../../components/custom-components/DetailProfileForPublic"))
import { Button } from "../../components/ui/button"
type ProfileData = {
  section: string;
  header: string;
  content: string;
};

type ProfileImage = {
  file: File | null;
  previewUrl: string | null;
};

export default function ProfileTable() {
  const [showContent, setShowContent] = useState(false)
  function handlertoShow() {
    setShowContent(prev => !prev)
  }

  const initialData: ProfileData[] = [
    { section: "Personal Details", header: "First Name", content: "Dr. Ramachandra" },
    { section: "Personal Details", header: "Nickname", content: "Dr. Ramachandra H M" },
    { section: "Personal Details", header: "Last Name", content: "H M" },
    { section: "Personal Details", header: "Address", content: "Madhava Ortho & Fracture Clinic,\nBehind Shankar Gas,\nLower Hutha,\nBhadravathi 577301,\nShivamogga District" },
    { section: "Personal Details", header: "Email", content: "ramachandrahm@hotmail.com" },
    { section: "Personal Details", header: "Mobile Number", content: "9448921890" },
    { section: "Personal Details", header: "Date Of Birth", content: "20/08/1966" },
    { section: "Personal Details", header: "Membership Number", content: "R 49" },
    { section: "Academic Details", header: "PG College Name", content: "B J Medical College, Pune" },
    { section: "Academic Details", header: "Passing Year", content: "1994" },
    { section: "Academic Details", header: "MBBS College Name", content: "Government Mysore Medical College" },
    { section: "Academic Details", header: "MBBS Passing Year", content: "1990" },
    { section: "Invitee Details", header: "Proposer Name", content: "Proposer Name" },
    { section: "Invitee Details", header: "Proposer KOA No.", content: "Proposer KOA Number" },
    { section: "Invitee Details", header: "Seconded Name", content: "Seconder Name" },
    { section: "Invitee Details", header: "Seconded KOA No.", content: "Seconder KOA Number" },
  ];

  const profileImage: ProfileImage = {
    file: null,
    previewUrl: null,
  };

  // const fileInputRef = useRef<HTMLInputElement>(null);

  const sections = useMemo(() => {
    const map = new Map<string, ProfileData[]>();
    initialData.forEach((item) => {
      if (!map.has(item.section)) {
        map.set(item.section, []);
      }
      map.get(item.section)?.push(item);
    });
    return Array.from(map.entries());
  }, []);

  return (
    <div className="space-y-6 w-full flex flex-col items-center justify-center p-6 bg-gray-50 max-w-full">
      <h1 className="text-2xl font-bold">Profile</h1>

      {/* Profile Image Section */}
      <div className="flex flex-col items-center gap-4 p-6 border rounded-md bg-white">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200">
          {profileImage.previewUrl ? (
            <Image
              src={profileImage.previewUrl}
              alt="Profile Preview"
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <User className="h-16 w-16 text-gray-400" />
            </div>
          )}
        </div>
        <div className="flex gap-2">
          {/* <Button
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
            className="gap-2"
          >
            <Upload className="h-4 w-4" />
            Change Photo
          </Button> */}
          {/* <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            className="hidden"
            onChange={(e: ChangeEvent<HTMLInputElement>) => { }}
          /> */}
        </div>
      </div>

      {/* Profile Info Table */}
      <div className="rounded-md w-3/4 border">
        {sections.map(([section, rows]) => (
          <div key={section}>
            <div className="bg-gray-100 p-4 font-bold text-lg">{section}</div>
            {rows.map((item, index) => (
              <div
                key={item.header}
                className={`flex items-start p-4 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
              >
                <div className="w-1/4 font-medium">{item.header}</div>
                <div className="flex-1 whitespace-pre-line">{item.content}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div>
        <Button variant={"koaread"} className="p-5" onClick={handlertoShow} >Your Detailed Profile Public View and Search</Button>
      </div>
      {
        showContent && (
          <Suspense fallback={<p>Loading...</p>}>
            <LoadedContent />
          </Suspense>
      )}
    </div >
  );
}
