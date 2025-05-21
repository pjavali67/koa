"use client"
import { useState, useEffect } from "react"
import { BarChart, Users, Newspaper, FileText, Calendar, UserRound, ChevronDown } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "../components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../components/ui/collapsible"
import { SearchForm } from "../components/search-form"

interface AdminSidebarProps {
  activeComponent: string
  setActiveComponent: (component: string) => void
}

export function AdminSidebar({ activeComponent, setActiveComponent }: AdminSidebarProps) {
  // Track which submenus are open
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({
    news: false,
    officeBearers: false,
  })

  // Open relevant submenus based on active component
  useEffect(() => {
    const newOpenSubmenus = { ...openSubmenus }

    if (activeComponent.startsWith("news-")) {
      newOpenSubmenus.news = true
    }

    if (activeComponent.startsWith("office-bearers-")) {
      newOpenSubmenus.officeBearers = true
    }

    setOpenSubmenus(newOpenSubmenus)
  }, [activeComponent])

  const handleNavigation = (component: string) => {
    setActiveComponent(component)
  }

  const toggleSubmenu = (submenu: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [submenu]: !prev[submenu],
    }))
  }

  return (
    
    <Sidebar className="z-50 relative">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <BarChart className="h-4 w-4" />
          </div>
          <div className="font-semibold">Admin Dashboard</div>
        </div>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton isActive={activeComponent === "dashboard"} onClick={() => handleNavigation("dashboard")}>
              <BarChart className="h-4 w-4" />
              <span>Dashboard</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton isActive={activeComponent === "members"} onClick={() => handleNavigation("members")}>
              <Users className="h-4 w-4" />
              <span>Members</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <Collapsible
            open={openSubmenus.news}
            onOpenChange={() => toggleSubmenu("news")}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger className="w-full">
                <SidebarMenuButton isActive={activeComponent.startsWith("news-")}>
                  <Newspaper className="h-4 w-4" />
                  <span>News</span>
                  <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton
                      isActive={activeComponent === "news-2024"}
                      onClick={() => handleNavigation("news-2024")}
                    >
                      News-2024
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton
                      isActive={activeComponent === "news-2025"}
                      onClick={() => handleNavigation("news-2025")}
                    >
                      News-2025
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>

          <SidebarMenuItem>
            <SidebarMenuButton isActive={activeComponent === "blog"} onClick={() => handleNavigation("blog")}>
              <FileText className="h-4 w-4" />
              <span>Post a Blog</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton isActive={activeComponent === "event"} onClick={() => handleNavigation("event")}>
              <Calendar className="h-4 w-4" />
              <span>Post an Event</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <Collapsible
            open={openSubmenus.officeBearers}
            onOpenChange={() => toggleSubmenu("officeBearers")}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger className="w-full">
                <SidebarMenuButton isActive={activeComponent.startsWith("office-bearers-")}>
                  <UserRound className="h-4 w-4" />
                  <span>Office Bearers</span>
                  <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton
                      isActive={activeComponent === "office-bearers-2024"}
                      onClick={() => handleNavigation("office-bearers-2024")}
                    >
                      2024
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton
                      isActive={activeComponent === "office-bearers-2025"}
                      onClick={() => handleNavigation("office-bearers-2025")}
                    >
                      2025
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        </SidebarMenu>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
