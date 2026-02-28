"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { MapPin, Navigation, Clock, Shield, Bell, Locate } from "lucide-react"

const locationHistory = [
  { time: "10:30 AM", location: "14, Rajpur Road (Home)", status: "safe" },
  { time: "9:15 AM", location: "Gandhi Park, Rajpur Road", status: "safe" },
  { time: "8:45 AM", location: "Near Home - Morning Walk", status: "safe" },
  { time: "8:00 AM", location: "14, Rajpur Road (Home)", status: "safe" },
]

export default function LocationPage() {
  const [alertsEnabled, setAlertsEnabled] = useState(true)
  const [geofenceEnabled, setGeofenceEnabled] = useState(true)

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div>
        <h1
          className="text-2xl font-bold tracking-tight text-foreground md:text-3xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Live Location Tracking
        </h1>
        <p className="mt-1 text-muted-foreground">
          Real-time monitoring of Rajesh&apos;s location and safe zone management.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {/* Map placeholder */}
          <Card>
            <CardContent className="p-0">
              <div className="relative flex h-80 items-center justify-center overflow-hidden rounded-xl bg-accent md:h-96">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNlMmU4ZjAiIGQ9Ik0wIDBoNDB2NDBIMHoiLz48cGF0aCBkPSJNMCAwaDIwdjIwSDB6TTIwIDIwaDIwdjIwSDIweiIgZmlsbD0iI2VkZjJmNyIvPjwvZz48L3N2Zz4=')] opacity-60" />

                {/* Grid lines */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                {/* Safe zone circle */}
                <div className="absolute left-1/2 top-1/2 size-48 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-success/40 bg-success/5" />

                {/* Patient marker */}
                <div className="relative flex flex-col items-center gap-2">
                  <div className="animate-pulse-soft flex size-14 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/30">
                    <MapPin className="size-7 text-primary-foreground" />
                  </div>
                  <div className="rounded-full bg-card px-3 py-1 text-xs font-medium shadow-md text-foreground">
                    Rajesh - Home
                  </div>
                </div>

                {/* Controls */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <Button size="icon" variant="secondary" className="shadow-md" aria-label="Center map">
                    <Locate className="size-4" />
                  </Button>
                </div>

                <div className="absolute top-4 left-4">
                  <Badge className="bg-success text-success-foreground shadow-md">
                    <div className="mr-1.5 size-2 rounded-full bg-success-foreground animate-pulse" />
                    Live Tracking Active
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location history */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="size-5 text-primary" />
                Location History
              </CardTitle>
              <CardDescription>Today&apos;s movement log</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {locationHistory.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 rounded-lg border p-3 transition-colors hover:bg-accent/50">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Navigation className="size-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{item.location}</p>
                      <p className="text-xs text-muted-foreground">{item.time}</p>
                    </div>
                    <Badge variant="secondary" className="bg-success/10 text-success text-xs">
                      {item.status === "safe" ? "In Safe Zone" : "Outside"}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {/* Current location */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <MapPin className="size-4 text-primary" />
                Current Location
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="rounded-lg bg-accent/50 p-3">
                <p className="text-sm font-medium text-foreground">14, Rajpur Road</p>
                <p className="text-xs text-muted-foreground">Dehradun, Uttarakhand</p>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Last Updated</span>
                <span className="font-medium text-foreground">2 min ago</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">GPS Accuracy</span>
                <span className="font-medium text-foreground">High (5m)</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Battery</span>
                <span className="font-medium text-success">82%</span>
              </div>
            </CardContent>
          </Card>

          {/* Safe zone settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Shield className="size-4 text-primary" />
                Safe Zone Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="safeCenter">Center Location</Label>
                <Input id="safeCenter" defaultValue="14, Rajpur Road, Dehradun" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="safeRadius">Radius (meters)</Label>
                <Input id="safeRadius" type="number" defaultValue="500" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="geofence" className="cursor-pointer">
                  Enable Geofence
                </Label>
                <Switch
                  id="geofence"
                  checked={geofenceEnabled}
                  onCheckedChange={setGeofenceEnabled}
                />
              </div>
            </CardContent>
          </Card>

          {/* Alert settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Bell className="size-4 text-primary" />
                Alert Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="exitAlert" className="cursor-pointer text-sm">
                  Safe zone exit alert
                </Label>
                <Switch id="exitAlert" checked={alertsEnabled} onCheckedChange={setAlertsEnabled} />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="sosAlert" className="cursor-pointer text-sm">
                  SOS movement alert
                </Label>
                <Switch id="sosAlert" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="batteryAlert" className="cursor-pointer text-sm">
                  Low battery alert
                </Label>
                <Switch id="batteryAlert" defaultChecked />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
