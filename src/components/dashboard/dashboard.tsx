"use client"

import { DashboardProvider } from "./dashboard-context"
import DashboardLayout from "./dashboard-layout"

export default function Dashboard() {
  return (
    <DashboardProvider>
      <DashboardLayout />
    </DashboardProvider>
  )
}
