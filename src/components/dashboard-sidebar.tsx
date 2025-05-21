"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, ChevronUp, FileEdit, Newspaper, Calendar, User, PenSquare, UserCog } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "../components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../components/ui/collapsible"

export function DashboardSidebar() {
  const pathname = usePathname()

  // Check if the current path is under admin to set initial state
  const isAdminPath = pathname?.includes("/dashboard/admin")
  const [adminOpen, setAdminOpen] = React.useState(isAdminPath)

  const mainNavItems = [
    {
      title: "Profile",
      href: "/dashboard/profile",
      icon: User,
    },

    {
      title: "Post Blog",
      href: "/dashboard/post-blog",
      icon: PenSquare,
    },
    {
      title: "Post Event",
      href: "/dashboard/post-event",
      icon: Calendar,
    },
    {
      title: "Find a Doctor Form",
      href: "/dashboard/find-doctor",
      icon: UserCog,
    },
  ]

  const adminNavItems = [
    {
      title: "Member",
      href: "/dashboard/admin/member",
    },
    {
      title: "Post News",
      href: "/dashboard/post-news",
      icon: Newspaper,
    },
    {
      title: "Office Bearers",
      href: "/dashboard/admin/office-bearers",
    },
    {
      title: "News Edit",
      href: "/dashboard/admin/news-edit",
    },
    {
      title: "Blog Edit",
      href: "/dashboard/admin/blog-edit",
    },
    {
      title: "Event Edit",
      href: "/dashboard/admin/event-edit",
    },
    {
      title: "Carousel Main",
      href: "/dashboard/admin/carousel-main",
    },
    {
      title: "Carousel Small",
      href: "/dashboard/admin/carousel-small",
    },
  ]

  // Check if any admin item is active
  const isAdminActive = adminNavItems.some((item) => pathname === item.href)

  return (
    <Sidebar className="relative z-50 m-2">
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {mainNavItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild isActive={pathname === item.href}>
                  <Link href={item.href}>
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}

            <Collapsible open={adminOpen} onOpenChange={setAdminOpen} className="w-full">
              <SidebarMenuItem>
                <CollapsibleTrigger className="w-full">
                  <SidebarMenuButton isActive={isAdminActive}>
                    <FileEdit className="h-4 w-4" />
                    <span>Admin</span>
                    {adminOpen ? (
                      <ChevronUp className="ml-auto h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-auto h-4 w-4" />
                    )}
                  </SidebarMenuButton>
                </CollapsibleTrigger>
              </SidebarMenuItem>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {adminNavItems.map((item) => (
                    <SidebarMenuSubItem key={item.href}>
                      <SidebarMenuSubButton asChild isActive={pathname === item.href}>
                        <Link href={item.href}>{item.title}</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
