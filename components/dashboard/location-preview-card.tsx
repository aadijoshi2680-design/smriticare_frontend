import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, ExternalLink } from "lucide-react"

export function LocationPreviewCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <MapPin className="size-4 text-primary" />
          Current Location
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="relative flex h-36 items-center justify-center overflow-hidden rounded-xl bg-accent">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNlMmU4ZjAiIGQ9Ik0wIDBoNDB2NDBIMHoiLz48cGF0aCBkPSJNMCAwaDIwdjIwSDB6TTIwIDIwaDIwdjIwSDIweiIgZmlsbD0iI2VkZjJmNyIvPjwvZz48L3N2Zz4=')] opacity-60" />
          <div className="relative flex flex-col items-center gap-2">
            <div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
              <MapPin className="size-5" />
            </div>
            <span className="text-xs font-medium text-muted-foreground">Map View</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Status</span>
            <Badge variant="secondary" className="text-xs bg-success/10 text-success">In Safe Zone</Badge>
          </div>
          <p className="text-sm font-medium text-foreground">
            14, Rajpur Road, Dehradun
          </p>
          <p className="text-xs text-muted-foreground">
            Last updated: 2 minutes ago
          </p>
        </div>

        <Button variant="outline" size="sm" className="w-full" asChild>
          <Link href="/dashboard/location">
            View Live Tracking
            <ExternalLink className="ml-1 size-3.5" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
