"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { TopBar } from "../../components/admin-dash/top-bar"
import { AdminSidebar } from "../../components/admin-dash/admin-sidebar"
import { SidebarProvider } from "../../components/ui/sidebar"
import { Dashboard } from "../../components/features/dashboard"
import { Members } from "../../components/features/members"
import { News2024 } from "../../components/features/news-2024"
import { News2025 } from "../../components/features/news-2025"
import { PostBlog } from "../../components/features/post-blog"
import { PostEvent } from "../../components/features/post-event"
import { OfficeBearers2024 } from "../../components/features/office-bearers-2024"
import { OfficeBearers2025 } from "../../components/features/office-bearers-2025"
//{ children }: { children: React.ReactNode }
export function AdminLayout() {
  const [activeComponent, setActiveComponent] = useState("dashboard")

  // Get the active component from localStorage on initial load
  useEffect(() => {
    const storedComponent = localStorage.getItem("activeComponent")
    if (storedComponent) {
      setActiveComponent(storedComponent)
    }
  }, [])

  // Save the active component to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("activeComponent", activeComponent)
  }, [activeComponent])

  // Render the appropriate component based on the active component
  const renderComponent = () => {
    switch (activeComponent) {
      case "dashboard":
        return <Dashboard />
      case "members":
        return <Members />
      case "news-2024":
        return <News2024 />
      case "news-2025":
        return <News2025 />
      case "blog":
        return <PostBlog />
      case "event":
        return <PostEvent />
      case "office-bearers-2024":
        return <OfficeBearers2024 />
      case "office-bearers-2025":
        return <OfficeBearers2025 />
      default:
        return <Dashboard />
    }
  }

  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen bg-background">
        <AdminSidebar activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
        <div className="flex flex-1 flex-col">
          <TopBar  />
          <main className="flex-1 p-6">{renderComponent()}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
