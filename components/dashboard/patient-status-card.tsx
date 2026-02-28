import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Heart, Brain, Clock } from "lucide-react"

export function PatientStatusCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="size-5 text-primary" />
          Patient Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 mb-6">
          <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
            RS
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Rajesh Sharma</h3>
            <p className="text-sm text-muted-foreground">Age 72 &middot; Alzheimer&apos;s Stage 2</p>
            <Badge className="mt-1 bg-success text-success-foreground">
              Active &amp; Safe
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center gap-2 rounded-xl bg-accent/50 p-4">
            <Heart className="size-5 text-destructive" />
            <span className="text-lg font-bold text-foreground">78</span>
            <span className="text-xs text-muted-foreground">Heart Rate</span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-xl bg-accent/50 p-4">
            <Brain className="size-5 text-primary" />
            <span className="text-lg font-bold text-foreground">Good</span>
            <span className="text-xs text-muted-foreground">Cognitive</span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-xl bg-accent/50 p-4">
            <Clock className="size-5 text-chart-2" />
            <span className="text-lg font-bold text-foreground">8h</span>
            <span className="text-xs text-muted-foreground">Sleep</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
