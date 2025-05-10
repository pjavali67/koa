"use client"

import { useState } from "react"
import { useDashboard } from "./dashboard-context"
import {
  BarChart3,
  Users,
  Newspaper,
  Calendar,
  FileText,
  UserRound,
  Settings,
  LogOut,
  ChevronDown,
  ChevronRight,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "../ui/sidebar"
import { useToast } from "../ui/use-toast"

export default function DashboardSidebar() {
  const { activeSection, setActiveSection } = useDashboard()
  const { toast } = useToast()
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
    news: false,
    officeBearers: false,
  })

  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }))
  }

  const handleLogout = () => {
    toast({
      title: "Logging out",
      description: "You have been logged out successfully.",
    })
  }

  return (
  

  
    <Sidebar className="relative">
      <SidebarHeader className="border-b">
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <BarChart3 className="h-4 w-4" />
          </div>
          <div className="font-semibold">Admin Dashboard</div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton isActive={activeSection === "overview"} onClick={() => setActiveSection("overview")}>
              <BarChart3 className="h-4 w-4" />
              <span>Overview</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton isActive={activeSection === "members"} onClick={() => setActiveSection("members")}>
              <Users className="h-4 w-4" />
              <span>Members</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => toggleMenu("news")}
              className={openMenus.news ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""}
            >
              <Newspaper className="h-4 w-4" />
              <span>News</span>
              {openMenus.news ? (
                <ChevronDown className="ml-auto h-4 w-4" />
              ) : (
                <ChevronRight className="ml-auto h-4 w-4" />
              )}
            </SidebarMenuButton>

            {openMenus.news && (
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton
                    isActive={activeSection === "news-2023"}
                    onClick={() => setActiveSection("news-2023")}
                  >
                    News 2023
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton
                    isActive={activeSection === "news-2024"}
                    onClick={() => setActiveSection("news-2024")}
                  >
                    News 2024
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton
                    isActive={activeSection === "news-2025"}
                    onClick={() => setActiveSection("news-2025")}
                  >
                    News 2025
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            )}
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton isActive={activeSection === "events"} onClick={() => setActiveSection("events")}>
              <Calendar className="h-4 w-4" />
              <span>Events</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton isActive={activeSection === "blogs"} onClick={() => setActiveSection("blogs")}>
              <FileText className="h-4 w-4" />
              <span>Blogs</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => toggleMenu("officeBearers")}
              className={openMenus.officeBearers ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""}
            >
              <UserRound className="h-4 w-4" />
              <span>Office Bearers</span>
              {openMenus.officeBearers ? (
                <ChevronDown className="ml-auto h-4 w-4" />
              ) : (
                <ChevronRight className="ml-auto h-4 w-4" />
              )}
            </SidebarMenuButton>

            {openMenus.officeBearers && (
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton
                    isActive={activeSection === "office-bearers-2023"}
                    onClick={() => setActiveSection("office-bearers-2023")}
                  >
                    2023
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton
                    isActive={activeSection === "office-bearers-2024"}
                    onClick={() => setActiveSection("office-bearers-2024")}
                  >
                    2024
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton
                    isActive={activeSection === "office-bearers-2025"}
                    onClick={() => setActiveSection("office-bearers-2025")}
                  >
                    2025
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            )}
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton isActive={activeSection === "settings"} onClick={() => setActiveSection("settings")}>
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={handleLogout}>
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
