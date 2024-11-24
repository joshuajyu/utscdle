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
import { auth } from "@/lib/auth";
import { Suspense } from "react";

// Menu items.
const items = [
  {
    title: "Daily Challenge",
    url: "/daily-challenge",
    icon: Calendar,
    accountRequired: false,
  },
  {
    title: "Race",
    url: "/race",
    icon: Timer,
    accountRequired: true,
  },
  {
    title: "Collections",
    url: "/collections",
    icon: GalleryHorizontalEnd,
    accountRequired: true,
  },
  {
    title: "Leaderboard",
    url: "/leaderboard",
    icon: ChartColumn,
    accountRequired: true,
  },
  {
    title: "Submit an Image",
    url: "/submit-image",
    icon: ImagePlus,
    accountRequired: true,
  },
];

export async function AppSidebar() {
  const session = await auth();
  const filteredItems = session
    ? items
    : items.filter((item) => !item.accountRequired);
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
              {filteredItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
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
