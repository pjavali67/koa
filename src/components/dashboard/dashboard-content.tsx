"use client"

import { useDashboard } from "./dashboard-context"
import { SidebarTrigger } from "../ui/sidebar"
import OverviewContent from "./content/overview-content"
import MembersContent from "./content/members-content"
import NewsContent from "./content/news-content"
import EventsContent from "./content/events-content"
import BlogsContent from "./content/blogs-content"
import OfficeBearersContent from "./content/office-bearers-content"
import SettingsContent from "./content/settings-content"

export default function DashboardContent() {
  const { activeSection } = useDashboard()

  const getSectionTitle = () => {
    switch (activeSection) {
      case "overview":
        return "Dashboard Overview"
      case "members":
        return "Members Management"
      case "news-2023":
        return "News 2023"
      case "news-2024":
        return "News 2024"
      case "news-2025":
        return "News 2025"
      case "events":
        return "Events Management"
      case "blogs":
        return "Blog Posts"
      case "office-bearers-2023":
        return "Office Bearers 2023"
      case "office-bearers-2024":
        return "Office Bearers 2024"
      case "office-bearers-2025":
        return "Office Bearers 2025"
      case "settings":
        return "Dashboard Settings"
      default:
        return "Dashboard"
    }
  }

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <OverviewContent />
      case "members":
        return <MembersContent />
      case "news-2023":
      case "news-2024":
      case "news-2025":
        return <NewsContent year={activeSection.split("-")[1]} />
      case "events":
        return <EventsContent />
      case "blogs":
        return <BlogsContent />
      case "office-bearers-2023":
      case "office-bearers-2024":
      case "office-bearers-2025":
        return <OfficeBearersContent year={activeSection.split("-")[2]} />
      case "settings":
        return <SettingsContent />
      default:
        return <OverviewContent />
    }
  }

  return (
    <>
      <header className="sticky top-0 z-200
       flex h-16 items-center gap-4 border-b bg-background px-6">
        <SidebarTrigger />
        <h1 className="text-xl font-semibold">{getSectionTitle()}</h1>
      </header>
      <main className="flex-1 p-6">{renderContent()}</main>
    </>
  )
}
