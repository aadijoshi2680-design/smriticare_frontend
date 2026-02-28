import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarClock, ExternalLink } from "lucide-react"

const scheduleItems = [
  { time: "8:00 AM", label: "Morning Medicine", status: "done" },
  { time: "9:00 AM", label: "Breakfast", status: "done" },
  { time: "12:30 PM", label: "Lunch", status: "upcoming" },
  { time: "2:00 PM", label: "Afternoon Medicine", status: "upcoming" },
  { time: "7:00 PM", label: "Dinner", status: "upcoming" },
]

export function TodayScheduleCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <CalendarClock className="size-4 text-primary" />
          Today&apos;s Schedule
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-2">
          {scheduleItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-accent/50"
            >
              <span className="w-16 text-xs font-medium text-muted-foreground">
                {item.time}
              </span>
              <span className={`flex-1 text-sm ${item.status === "done" ? "text-muted-foreground line-through" : "text-foreground font-medium"}`}>
                {item.label}
              </span>
              <Badge
                variant={item.status === "done" ? "secondary" : "outline"}
                className="text-[10px] px-1.5"
              >
                {item.status === "done" ? "Done" : "Pending"}
              </Badge>
            </div>
          ))}
        </div>

        <Button variant="outline" size="sm" className="w-full" asChild>
          <Link href="/dashboard/schedule">
            Manage Schedule
            <ExternalLink className="ml-1 size-3.5" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
