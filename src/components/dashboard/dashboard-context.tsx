"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Section =
  | "overview"
  | "members"
  | "news-2023"
  | "news-2024"
  | "news-2025"
  | "events"
  | "blogs"
  | "office-bearers-2023"
  | "office-bearers-2024"
  | "office-bearers-2025"
  | "settings"

interface DashboardContextType {
  activeSection: Section
  setActiveSection: (section: Section) => void
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined)

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<Section>("overview")

  return <DashboardContext.Provider value={{ activeSection, setActiveSection }}>{children}</DashboardContext.Provider>
}

export function useDashboard() {
  const context = useContext(DashboardContext)
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider")
  }
  return context
}
