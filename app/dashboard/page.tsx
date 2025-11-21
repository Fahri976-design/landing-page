"use client"

import Image from "next/image"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-black text-white">
        <AppSidebar />
        <main className="flex-1 p-8 overflow-auto">
          <h1 className="text-4xl font-bold mb-6">Welcome to your Spotify Dashboard</h1>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Recently Played</h2>
            <div className="grid grid-cols-6 gap-4">
              <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer">
                <Image src="https://via.placeholder.com/150x150/1db954/ffffff?text=Album" alt="Album cover" width={150} height={150} className="w-full aspect-square rounded-lg mb-3" />
                <h3 className="font-semibold text-sm">Blinding Lights</h3>
                <p className="text-gray-400 text-xs">The Weeknd</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer">
                <Image src="https://via.placeholder.com/150x150/1db954/ffffff?text=Album" alt="Album cover" width={150} height={150} className="w-full aspect-square rounded-lg mb-3" />
                <h3 className="font-semibold text-sm">Watermelon Sugar</h3>
                <p className="text-gray-400 text-xs">Harry Styles</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer">
                <Image src="https://via.placeholder.com/150x150/1db954/ffffff?text=Album" alt="Album cover" width={150} height={150} className="w-full aspect-square rounded-lg mb-3" />
                <h3 className="font-semibold text-sm">Levitating</h3>
                <p className="text-gray-400 text-xs">Dua Lipa</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer">
                <Image src="https://via.placeholder.com/150x150/1db954/ffffff?text=Album" alt="Album cover" width={150} height={150} className="w-full aspect-square rounded-lg mb-3" />
                <h3 className="font-semibold text-sm">Good 4 U</h3>
                <p className="text-gray-400 text-xs">Olivia Rodrigo</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer">
                <Image src="https://via.placeholder.com/150x150/1db954/ffffff?text=Album" alt="Album cover" width={150} height={150} className="w-full aspect-square rounded-lg mb-3" />
                <h3 className="font-semibold text-sm">Stay</h3>
                <p className="text-gray-400 text-xs">The Kid Laroi, Justin Bieber</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer">
                <Image src="https://via.placeholder.com/150x150/1db954/ffffff?text=Album" alt="Album cover" width={150} height={150} className="w-full aspect-square rounded-lg mb-3" />
                <h3 className="font-semibold text-sm">Drivers License</h3>
                <p className="text-gray-400 text-xs">Olivia Rodrigo</p>
              </div>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Made for You</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer">
                <Image src="https://via.placeholder.com/200x200/1db954/ffffff?text=Playlist" alt="Playlist cover" width={200} height={200} className="w-full aspect-square rounded-lg mb-3" />
                <h3 className="font-semibold text-sm">Daily Mix 1</h3>
                <p className="text-gray-400 text-xs">The Weeknd, Dua Lipa, Harry Styles and more</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer">
                <Image src="https://via.placeholder.com/200x200/1db954/ffffff?text=Playlist" alt="Playlist cover" width={200} height={200} className="w-full aspect-square rounded-lg mb-3" />
                <h3 className="font-semibold text-sm">Discover Weekly</h3>
                <p className="text-gray-400 text-xs">Your weekly mixtape of fresh music</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer">
                <Image src="https://via.placeholder.com/200x200/1db954/ffffff?text=Playlist" alt="Playlist cover" width={200} height={200} className="w-full aspect-square rounded-lg mb-3" />
                <h3 className="font-semibold text-sm">Release Radar</h3>
                <p className="text-gray-400 text-xs">Catch all the latest music from artists you follow</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer">
                <Image src="https://via.placeholder.com/200x200/1db954/ffffff?text=Playlist" alt="Playlist cover" width={200} height={200} className="w-full aspect-square rounded-lg mb-3" />
                <h3 className="font-semibold text-sm">Daily Mix 2</h3>
                <p className="text-gray-400 text-xs">Olivia Rodrigo, Justin Bieber, The Kid Laroi and more</p>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Library</h2>
            <div className="grid grid-cols-5 gap-4">
              <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer">
                <Image src="https://via.placeholder.com/150x150/1db954/ffffff?text=Liked" alt="Liked songs" width={150} height={150} className="w-full aspect-square rounded-lg mb-3" />
                <h3 className="font-semibold text-sm">Liked Songs</h3>
                <p className="text-gray-400 text-xs">127 songs</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer">
                <Image src="https://via.placeholder.com/150x150/1db954/ffffff?text=Playlist" alt="Playlist" width={150} height={150} className="w-full aspect-square rounded-lg mb-3" />
                <h3 className="font-semibold text-sm">My Playlist #1</h3>
                <p className="text-gray-400 text-xs">By you • 45 songs</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer">
                <Image src="https://via.placeholder.com/150x150/1db954/ffffff?text=Playlist" alt="Playlist" width={150} height={150} className="w-full aspect-square rounded-lg mb-3" />
                <h3 className="font-semibold text-sm">Chill Vibes</h3>
                <p className="text-gray-400 text-xs">By you • 32 songs</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer">
                <Image src="https://via.placeholder.com/150x150/1db954/ffffff?text=Playlist" alt="Playlist" width={150} height={150} className="w-full aspect-square rounded-lg mb-3" />
                <h3 className="font-semibold text-sm">Workout Mix</h3>
                <p className="text-gray-400 text-xs">By you • 28 songs</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer">
                <Image src="https://via.placeholder.com/150x150/1db954/ffffff?text=Playlist" alt="Playlist" width={150} height={150} className="w-full aspect-square rounded-lg mb-3" />
                <h3 className="font-semibold text-sm">Road Trip</h3>
                <p className="text-gray-400 text-xs">By you • 67 songs</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </SidebarProvider>
  )
}
