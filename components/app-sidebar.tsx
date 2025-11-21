"use client"

import { LogoutButton } from "@/components/logout-button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Home, Search, Library, Plus, Heart } from "lucide-react"

export function AppSidebar() {
  return (
    <Sidebar className="bg-black border-r border-gray-800">
      <SidebarHeader className="p-6">
        <div className="flex items-center space-x-2">
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-white">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.6-.12-.421.18-.78.6-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.081zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.42-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56z"/>
          </svg>
          <span className="text-white text-xl font-bold">Spotify</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="px-3">
          <SidebarMenuItem>
            <SidebarMenuButton className="text-gray-300 hover:text-white hover:bg-gray-800">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="text-gray-300 hover:text-white hover:bg-gray-800">
              <Search className="h-5 w-5" />
              <span>Search</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="text-gray-300 hover:text-white hover:bg-gray-800">
              <Library className="h-5 w-5" />
              <span>Your Library</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <div className="px-3 mt-6">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="text-gray-300 hover:text-white hover:bg-gray-800">
                <Plus className="h-5 w-5" />
                <span>Create Playlist</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className="text-gray-300 hover:text-white hover:bg-gray-800">
                <Heart className="h-5 w-5" />
                <span>Liked Songs</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <LogoutButton />
      </SidebarFooter>
    </Sidebar>
  )
}
