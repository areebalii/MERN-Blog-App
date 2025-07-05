import AppSideBar from '@/components/AppSideBar'
import Footer from '@/components/Footer'
import TopBar from '@/components/TopBar'
import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <SidebarProvider>
    <TopBar />
      <AppSideBar />
      <main>
        <Outlet />
        <Footer />
      </main>
    </SidebarProvider>
  )
}

export default Layout