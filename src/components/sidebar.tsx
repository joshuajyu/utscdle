import {
  Calendar,
  Timer,
  ImagePlus,
  ChartColumn,
  GalleryHorizontalEnd,
} from "lucide-react";
import { MapPin } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { AuthFooter } from "@/components/sidebarFooter";
import { Suspense } from "react";

// Menu items.
const items = [
  {
    title: "Daily Challenge",
    url: "/daily-challenge",
    icon: Calendar,
  },
  {
    title: "Race",
    url: "/race",
    icon: Timer,
  },
  {
    title: "Collections",
    url: "/collections",
    icon: GalleryHorizontalEnd,
  },
  {
    title: "Leaderboard",
    url: "/leaderboard",
    icon: ChartColumn,
  },
  {
    title: "Submit an Image",
    url: "/submit-image",
    icon: ImagePlus,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarGroupLabel>
          <MapPin className="h-10 w-10 text-white mr-2" />
          <h1 className="font-bold text-lg">UTSCdle</h1>
        </SidebarGroupLabel>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className="flex items-center">
                      <item.icon className="mr-2" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <Suspense>
        <AuthFooter />
      </Suspense>
    </Sidebar>
  );
}
