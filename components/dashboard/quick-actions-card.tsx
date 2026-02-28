import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, QrCode, CalendarClock, MapPin } from "lucide-react"

const actions = [
  { icon: MessageCircle, label: "AI Companion", href: "/dashboard/ai-companion", color: "text-primary" },
  { icon: QrCode, label: "QR Code ID", href: "/dashboard/qr-code", color: "text-chart-2" },
  { icon: CalendarClock, label: "Schedule", href: "/dashboard/schedule", color: "text-chart-3" },
  { icon: MapPin, label: "Location", href: "/dashboard/location", color: "text-success" },
]

export function QuickActionsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          {actions.map((action) => (
            <Button
              key={action.label}
              variant="outline"
              className="h-auto flex-col gap-2 py-4 hover:bg-accent"
              asChild
            >
              <Link href={action.href}>
                <action.icon className={`size-5 ${action.color}`} />
                <span className="text-xs font-medium">{action.label}</span>
              </Link>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
