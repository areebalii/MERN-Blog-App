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
      <main className='w-full'>
      <div className='w-full min-h-[calc(100vh-35px)]'>
        <Outlet />
      </div>
        <Footer />
      </main>
    </SidebarProvider>
  )
}

export default Layout