"use client"

import type React from "react"
import DashboardSidebar from "./dashboard-sidebar"
import DashboardContent from "./dashboard-content"
import { SidebarProvider, SidebarInset } from "../ui/sidebar"
import { Toaster } from "../ui/toaster"

export default function DashboardLayout() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "16rem",
        } as React.CSSProperties
      }
    >
      <DashboardSidebar />
      <SidebarInset className="bg-background">
        <DashboardContent />
      </SidebarInset>
      <Toaster />
    </SidebarProvider>
  )
}
