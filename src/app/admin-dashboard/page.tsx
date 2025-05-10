import type React from "react";
import { ThemeProvider } from "../../components/admin-dash/theme-provider"
import { AdminLayout } from "../../components/admin-dash/admin-layout"
  function page() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AdminLayout/>
      </ThemeProvider>
  )
}

export default page