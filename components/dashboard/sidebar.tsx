"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Brain,
  LayoutDashboard,
  User,
  MapPin,
  CalendarClock,
  FileHeart,
  QrCode,
  MessageCircle,
  ShieldAlert,
} from "lucide-react"
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
  SidebarFooter,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"

const mainNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Patient Profile",
    href: "/dashboard/patient-profile",
    icon: User,
  },
  {
    title: "Live Location",
    href: "/dashboard/location",
    icon: MapPin,
  },
  {
    title: "Schedule Manager",
    href: "/dashboard/schedule",
    icon: CalendarClock,
  },
  {
    title: "Medical Info",
    href: "/dashboard/medical",
    icon: FileHeart,
  },
]

const toolNavItems = [
  {
    title: "QR Code ID",
    href: "/dashboard/qr-code",
    icon: QrCode,
  },
  {
    title: "AI Companion",
    href: "/dashboard/ai-companion",
    icon: MessageCircle,
    badge: "AI",
  },
  {
    title: "Emergency",
    href: "/dashboard/emergency",
    icon: ShieldAlert,
    badge: "SOS",
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar variant="inset">
      <SidebarHeader className="p-4">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary">
            <Brain className="size-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
              SmritiCare
            </span>
            <span className="text-[11px] text-muted-foreground">
              Guardian Portal
            </span>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    tooltip={item.title}
                  >
                    <Link href={item.href}>
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {toolNavItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    tooltip={item.title}
                  >
                    <Link href={item.href}>
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                      {item.badge && (
                        <Badge
                          variant={item.badge === "SOS" ? "destructive" : "secondary"}
                          className="ml-auto text-[10px] px-1.5 py-0"
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="flex items-center gap-3 rounded-lg bg-accent/60 p-3">
          <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            AS
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">Amit Sharma</span>
            <span className="text-xs text-muted-foreground">Guardian</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
