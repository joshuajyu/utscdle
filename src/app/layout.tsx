import type { Metadata } from "next";
import { AppSidebar } from "@/components/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { inter } from "@/components/ui/fonts";
import { SidebarTrigger } from "@/components/ui/sidebar";

import "./globals.css";

export const metadata: Metadata = {
  title: "UTSCdle",
  description: "A combination of Geoguesser and Wordle for UTSC students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`dark ${inter.className} antialiased`}>
        <SidebarProvider>
          <div className="flex h-screen w-screen">
            {/* Sidebar */}
            <AppSidebar />
            <div className="flex-none w-min bg-gradient-to-b from-zinc-900 to-zinc-800">
              <SidebarTrigger />
            </div>
            {/* Main Content */}
            <div className="flex-1 flex items-start justify-center bg-gradient-to-b from-zinc-900 to-zinc-800">
              {children}
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
