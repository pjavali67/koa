"use client"

import type React from "react"
import { SidebarProvider } from "../components/ui/sidebar"
import { DashboardSidebar } from "../components/dashboard-sidebar"
import { DashboardTopbar } from "../components/dashboard-topbar"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider className="w-full">
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        <div className="flex flex-1 flex-col">
          <DashboardTopbar />
          <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
