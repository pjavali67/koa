// app/admin/page.tsx
"use client";

import { AdminLayout } from "./dashoard-simple";
import {
  Home,
  Users,
  Settings,
  Book,
  FileText,
  Calendar,
  Mail,
  MessageSquare,
} from "lucide-react";

const navItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: <Home size={16} />,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: <Users size={16} />,
    label: "New",
  },
  {
    title: "Content",
    icon: <Book size={16} />,
    items: [
      {
        title: "Posts",
        href: "/admin/posts",
        icon: <FileText size={16} />,
      },
      {
        title: "Pages",
        href: "/admin/pages",
        icon: <FileText size={16} />,
      },
    ],
  },
  {
    title: "Communication",
    icon: <Mail size={16} />,
    items: [
      {
        title: "Messages",
        href: "/admin/messages",
        icon: <MessageSquare size={16} />,
      },
      {
        title: "Events",
        href: "/admin/events",
        icon: <Calendar size={16} />,
      },
    ],
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: <Settings size={16} />,
  },
];

export default function AdminPage() {
  return (
    <AdminLayout navItems={navItems} title="Admin Panel">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>Welcome to your admin dashboard!</p>
        {/* Your dynamic content goes here */}
      </div>
    </AdminLayout>
  );
}