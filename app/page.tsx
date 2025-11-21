import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl flex items-center justify-center text-lg font-semibold text-muted-foreground">
              Welcome to your Dashboard
            </div>
            <div className="bg-muted/50 aspect-video rounded-xl flex items-center justify-center text-lg font-semibold text-muted-foreground">
              Analytics Overview
            </div>
            <div className="bg-muted/50 aspect-video rounded-xl flex items-center justify-center text-lg font-semibold text-muted-foreground">
              Recent Activity
            </div>
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min p-6">
            <h2 className="text-xl font-bold mb-4">Dashboard Content</h2>
            <p>
              This is your dashboard where you can see an overview of your application data, recent activities, and analytics.
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
              <li>View your latest stats and reports</li>
              <li>Manage your settings and preferences</li>
              <li>Track your recent user activities</li>
            </ul>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
