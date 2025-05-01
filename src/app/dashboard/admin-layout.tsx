// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Settings,
//   LogOut,
//   LayoutDashboard,
//   Users,
//   FileText,
//   Newspaper,
//   Image as ImageIcon,
//   UserCog,
//   Calendar,
//   ChevronDown,
//  } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";

// export function AdminLayout({ children }: { children: React.ReactNode }) {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const pathname = usePathname();

//   const toggleSidebar = () => setIsCollapsed(!isCollapsed);

//   const navItems = [
//     {
//       name: "Dashboard",
//       href: "/admin",
//       icon: <LayoutDashboard className="h-4 w-4" />,
//     },
//     {
//       name: "Member Details",
//       href: "/admin/members",
//       icon: <Users className="h-4 w-4" />,
//     },
//     {
//       name: "Blog",
//       href: "/admin/blog",
//       icon: <FileText className="h-4 w-4" />,
//     },
//     {
//       name: "News",
//       href: "/admin/news",
//       icon: <Newspaper className="h-4 w-4" />,
//     },
//     {
//       name: "Carousel",
//       href: "/admin/carousel",
//       icon: <ImageIcon className="h-4 w-4" />,
//     },
//     {
//       name: "Office Bearers",
//       href: "#",
//       icon: <UserCog className="h-4 w-4" />,
//       subItems: [
//         { name: "Year 2024", href: "/admin/office-bearers/2024" },
//         { name: "Year 2023", href: "/admin/office-bearers/2023" },
//       ],
//     },
//     {
//       name: "Events",
//       href: "/admin/events",
//       icon: <Calendar className="h-4 w-4" />,
//     },
//   ];

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Sidebar */}
//       <div
//         className={`bg-white border-r transition-all duration-300 ease-in-out ${isCollapsed ? "w-16" : "w-64"
//           }`}
//       >
//         <div className="flex flex-col h-full">
//           <div className="p-4 flex items-center justify-between">
//             {!isCollapsed && (
//               <h1 className="text-xl font-bold">Admin Panel</h1>
//             )}
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={toggleSidebar}
//               className="h-8 w-8"
//             >
//               {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
//             </Button>
//           </div>

//           <Separator />

//           <nav className="flex-1 p-2">
//             <ul className="space-y-1">
//               {navItems.map((item) => (
//                 <li key={item.name}>
//                   {item.subItems ? (
//                     <SidebarDropdown
//                       item={item}
//                       isCollapsed={isCollapsed}
//                       pathname={pathname}
//                     />
//                   ) : (
//                     <Link
//                       href={item.href}
//                       className={`flex items-center p-2 rounded-lg ${pathname === item.href
//                           ? "bg-primary text-primary-foreground"
//                           : "hover:bg-gray-100"
//                         } ${isCollapsed ? "justify-center" : ""}`}
//                     >
//                       <span className="mr-2">{item.icon}</span>
//                       {!isCollapsed && item.name}
//                     </Link>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Top Bar */}
//         <header className="bg-white border-b h-16 flex items-center justify-between px-4">
//           <div className="flex items-center">
//             <h2 className="text-lg font-semibold">
//               {navItems.find((item) => pathname.includes(item.href))?.name || "Dashboard"}
//             </h2>
//           </div>

//           <div className="flex items-center gap-2">
//             <Button variant="ghost" size="icon">
//               <Settings className="h-5 w-5" />
//             </Button>
//             <Button variant="outline">
//               <LogOut className="mr-2 h-4 w-4" />
//               Logout
//             </Button>
//           </div>
//         </header>

//         {/* Content Area */}
//         <main className="flex-1 overflow-auto p-6 bg-gray-50">{children}</main>
//       </div>
//     </div>
//   );
// }

// function SidebarDropdown({
//   item,
//   isCollapsed,
//   pathname,
// }: {
//   item: any;
//   isCollapsed: boolean;
//   pathname: string;
// }) {
//   const [isOpen, setIsOpen] = useState(
//     item.subItems.some((subItem: any) => pathname.includes(subItem.href))
//   );

//   return (
//     <div>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className={`flex items-center w-full p-2 rounded-lg hover:bg-gray-100 ${isCollapsed ? "justify-center" : ""
//           }`}
//       >
//         <span className="mr-2">{item.icon}</span>
//         {!isCollapsed && (
//           <>
//             <span className="flex-1 text-left">{item.name}</span>
//             {isOpen ? (
//               <ChevronDown className="h-4 w-4" />
//             ) : (
//               <ChevronRight className="h-4 w-4" />
//             )}
//           </>
//         )}
//       </button>

//       {!isCollapsed && isOpen && (
//         <ul className="ml-6 mt-1 space-y-1">
//           {item.subItems.map((subItem: any) => (
//             <li key={subItem.name}>
//               <Link
//                 href={subItem.href}
//                 className={`flex items-center p-2 rounded-lg ${pathname === subItem.href
//                     ? "bg-primary text-primary-foreground"
//                     : "hover:bg-gray-100"
//                   }`}
//               >
//                 {subItem.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   ChevronLeft, ChevronRight, Settings, LogOut,
//   LayoutDashboard, Users, FileText, Newspaper,
//   Image as ImageIcon, UserCog, Calendar, ChevronDown
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";

// const navItems = [
//   { name: "Dashboard", href: "/admin", icon: <LayoutDashboard size={16} /> },
//   { name: "Member Details", href: "/admin/members", icon: <Users size={16} /> },
//   { name: "Blog", href: "/admin/blog", icon: <FileText size={16} /> },
//   { name: "News", href: "/admin/news", icon: <Newspaper size={16} /> },
//   { name: "Carousel", href: "/admin/carousel", icon: <ImageIcon size={16} /> },
//   {
//     name: "Office Bearers",
//     icon: <UserCog size={16} />,
//     subItems: [
//       { name: "Year 2024", href: "/admin/office-bearers/2024" },
//       { name: "Year 2023", href: "/admin/office-bearers/2023" },
//     ],
//   },
//   { name: "Events", href: "/admin/events", icon: <Calendar size={16} /> },
// ];

// export function AdminLayout({ children }: { children: React.ReactNode }) {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const pathname = usePathname();

//   const currentPage = navItems.find(item =>
//     pathname === item.href ||
//     item.subItems?.some(sub => pathname === sub.href)
//   )?.name || "Dashboard";

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Sidebar */}
//       <div className={`bg-white border-r transition-all ${isCollapsed ? "w-16" : "w-64"}`}>
//         <div className="flex flex-col h-full">
//           <div className="p-4 flex items-center justify-between">
//             {!isCollapsed && <h1 className="text-xl font-bold">Admin Panel</h1>}
//             <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(!isCollapsed)}>
//               {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
//             </Button>
//           </div>

//           <Separator />

//           <nav className="flex-1 p-2">
//             <ul className="space-y-1">
//               {navItems.map(item => (
//                 <NavItem
//                   key={item.name}
//                   item={item}
//                   isCollapsed={isCollapsed}
//                   pathname={pathname}
//                 />
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         <header className="bg-white border-b h-16 flex items-center justify-between px-4">
//           <h2 className="text-lg font-semibold">{currentPage}</h2>
//           <div className="flex gap-2">
//             <Button variant="ghost" size="icon"><Settings size={20} /></Button>
//             <Button variant="outline">
//               <LogOut className="mr-2" size={16} /> Logout
//             </Button>
//           </div>
//         </header>

//         <main className="flex-1 overflow-auto p-6 bg-gray-50">{children}</main>
//       </div>
//     </div>
//   );
// }

// function NavItem({ item, isCollapsed, pathname }: {
//   item: any;
//   isCollapsed: boolean;
//   pathname: string
// }) {
//   if (item.subItems) {
//     return <DropdownItem item={item} isCollapsed={isCollapsed} pathname={pathname} />;
//   }

//   const isActive = pathname === item.href;
//   return (
//     <li>
//       <Link
//         href={item.href}
//         className={`flex items-center p-2 rounded-lg ${isActive ? "bg-primary text-primary-foreground" : "hover:bg-gray-100"} ${isCollapsed ? "justify-center" : ""}`}
//       >
//         {item.icon}
//         {!isCollapsed && <span className="ml-2">{item.name}</span>}
//       </Link>
//     </li>
//   );
// }

// function DropdownItem({ item, isCollapsed, pathname }: {
//   item: any;
//   isCollapsed: boolean;
//   pathname: string
// }) {
//   const [isOpen, setIsOpen] = useState(item.subItems.some((sub: any) => pathname === sub.href));

//   return (
//     <li>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className={`flex items-center w-full p-2 rounded-lg hover:bg-gray-100 ${isCollapsed ? "justify-center" : ""}`}
//       >
//         {item.icon}
//         {!isCollapsed && (
//           <>
//             <span className="ml-2 flex-1 text-left">{item.name}</span>
//             {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
//           </>
//         )}
//       </button>

//       {!isCollapsed && isOpen && (
//         <ul className="ml-6 mt-1 space-y-1">
//           {item.subItems.map((subItem: any) => (
//             <li key={subItem.name}>
//               <Link
//                 href={subItem.href}
//                 className={`flex p-2 rounded-lg ${pathname === subItem.href ? "bg-primary text-primary-foreground" : "hover:bg-gray-100"}`}
//               >
//                 {subItem.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </li>
//   );
// }
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronLeft, ChevronRight, Settings, LogOut,
  LayoutDashboard, Users, FileText, Newspaper,
  Image as ImageIcon, UserCog, Calendar, ChevronDown
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";

type NavItem = {
  name: string;
  href?: string;
  icon: React.ReactNode;
  subItems?: SubItem[];
};

type SubItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: "Dashboard", href: "/admin", icon: <LayoutDashboard size={16} /> },
  { name: "Member Details", href: "/admin/members", icon: <Users size={16} /> },
  { name: "Blog", href: "/admin/blog", icon: <FileText size={16} /> },
  { name: "News", href: "/admin/news", icon: <Newspaper size={16} /> },
  { name: "Carousel", href: "/admin/carousel", icon: <ImageIcon size={16} /> },
  {
    name: "Office Bearers",
    icon: <UserCog size={16} />,
    subItems: [
      { name: "Year 2024", href: "/admin/office-bearers/2024" },
      { name: "Year 2023", href: "/admin/office-bearers/2023" },
    ],
  },
  { name: "Events", href: "/admin/events", icon: <Calendar size={16} /> },
];

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const currentPage = navItems.find(item =>
    pathname === item.href ||
    item.subItems?.some(sub => pathname === sub.href)
  )?.name || "Dashboard";

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`bg-white border-r transition-all ${isCollapsed ? "w-16" : "w-64"}`}>
        <div className="flex flex-col h-full">
          <div className="p-4 flex items-center justify-between">
            {!isCollapsed && <h1 className="text-xl font-bold">Admin Panel</h1>}
            <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(!isCollapsed)}>
              {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </Button>
          </div>

          <Separator />

          <nav className="flex-1 p-2">
            <ul className="space-y-1">
              {navItems.map(item => (
                <NavItem
                  key={item.name}
                  item={item}
                  isCollapsed={isCollapsed}
                  pathname={pathname}
                />
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b h-16 flex items-center justify-between px-4">
          <h2 className="text-lg font-semibold">{currentPage}</h2>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon"><Settings size={20} /></Button>
            <Button variant="outline">
              <LogOut className="mr-2" size={16} /> Logout
            </Button>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6 bg-gray-50">{children}</main>
      </div>
    </div>
  );
}

function NavItem({ item, isCollapsed, pathname }: {
  item: NavItem;
  isCollapsed: boolean;
  pathname: string
}) {
  if (item.subItems) {
    return <DropdownItem item={item} isCollapsed={isCollapsed} pathname={pathname} />;
  }

  const isActive = pathname === item.href;
  return (
    <li>
      <Link
        href={item.href || "#"}
        className={`flex items-center p-2 rounded-lg ${isActive ? "bg-primary text-primary-foreground" : "hover:bg-gray-100"} ${isCollapsed ? "justify-center" : ""}`}
      >
        {item.icon}
        {!isCollapsed && <span className="ml-2">{item.name}</span>}
      </Link>
    </li>
  );
}

function DropdownItem({ item, isCollapsed, pathname }: {
  item: NavItem;
  isCollapsed: boolean;
  pathname: string
}) {
  const [isOpen, setIsOpen] = useState(
    item.subItems?.some(sub => pathname === sub.href) || false
  );

  return (
    <li>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center w-full p-2 rounded-lg hover:bg-gray-100 ${isCollapsed ? "justify-center" : ""}`}
      >
        {item.icon}
        {!isCollapsed && (
          <>
            <span className="ml-2 flex-1 text-left">{item.name}</span>
            {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </>
        )}
      </button>

      {!isCollapsed && isOpen && item.subItems && (
        <ul className="ml-6 mt-1 space-y-1">
          {item.subItems.map((subItem) => (
            <li key={subItem.name}>
              <Link
                href={subItem.href}
                className={`flex p-2 rounded-lg ${pathname === subItem.href ? "bg-primary text-primary-foreground" : "hover:bg-gray-100"}`}
              >
                {subItem.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}