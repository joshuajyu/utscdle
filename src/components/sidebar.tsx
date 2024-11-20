import { Calendar, Timer, User2, ChevronUp, ImagePlus, ChartColumn, GalleryHorizontalEnd } from "lucide-react";
import { MapPin } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from 'next/link';

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
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem asChild>
                  <Link href="/account-info">
                    <span>Account</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
