"use client"

import React from 'react'
import NavigationBar from "../../components/custom-components/NavigationBar"
import { SessionProvider } from "next-auth/react";
function NavTopBar() {
  return (
    <div><SessionProvider><NavigationBar /></SessionProvider></div>
  )
}

export default NavTopBar;