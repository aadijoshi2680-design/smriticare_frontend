"use client"

import { Bell, LogOut, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function DashboardTopbar() {
  return (
    <header className="sticky top-0 z-30 flex items-center gap-3 border-b bg-card/80 px-4 py-3 backdrop-blur-md md:px-6">
      <SidebarTrigger />
      <Separator orientation="vertical" className="h-5" />

      <div className="relative flex-1 max-w-sm hidden md:flex">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search..."
          className="pl-9 h-9 bg-muted/50"
        />
      </div>

      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative" aria-label="View notifications">
          <Bell className="size-4" />
          <Badge className="absolute -top-0.5 -right-0.5 size-4 items-center justify-center rounded-full p-0 text-[10px]">
            3
          </Badge>
        </Button>

        <Separator orientation="vertical" className="h-5 hidden md:block" />

        <div className="hidden items-center gap-2 md:flex">
          <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
            AS
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground leading-none">
              Amit Sharma
            </span>
            <span className="text-[11px] text-muted-foreground">Guardian</span>
          </div>
        </div>

        <Button variant="ghost" size="icon" className="text-muted-foreground" asChild aria-label="Log out">
          <Link href="/">
            <LogOut className="size-4" />
          </Link>
        </Button>
      </div>
    </header>
  )
}
