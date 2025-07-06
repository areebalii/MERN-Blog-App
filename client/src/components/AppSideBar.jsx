import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { Link } from "react-router-dom"
import logo from "@/assets/images/logo.png"
import { IoHomeOutline } from "react-icons/io5";
import { TbCategory2 } from "react-icons/tb";
import { LiaBlogSolid } from "react-icons/lia";
import { FaRegComments } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { FaRegCircle } from "react-icons/fa";


const AppSideBar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="bg-white">
        <img src={logo} alt="" width={100}/>
      </SidebarHeader>
      <SidebarContent className="bg-white">

        <SidebarGroup>
          <SidebarMenu>

            <SidebarMenuItem>
              <SidebarMenuButton>
                <IoHomeOutline />
                <Link to="/" >Home</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton>
                <TbCategory2 />
                <Link to="/" >Categories</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton>
                <LiaBlogSolid />
                <Link to="/" >Blogs</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton>
                <FaRegComments />
                <Link to="/" >Comments</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton>
                <LuUsers />
                <Link to="/" >Users</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

          </SidebarMenu>
        </SidebarGroup>
        
        <SidebarGroup>
        <SidebarGroupLabel>
          Categories
        </SidebarGroupLabel>
          <SidebarMenu>

            <SidebarMenuItem>
              <SidebarMenuButton>
                <FaRegCircle />
                <Link to="/" >Category item</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

          </SidebarMenu>
        </SidebarGroup>

      </SidebarContent>
     
    </Sidebar>
  )
}

export default AppSideBar