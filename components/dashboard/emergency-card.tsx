import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShieldAlert, Phone } from "lucide-react"

export function EmergencyCard() {
  return (
    <Card className="border-destructive/30 bg-destructive/5">
      <CardContent className="flex flex-col items-center gap-4 py-6 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-destructive/10">
          <ShieldAlert className="size-7 text-destructive" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Emergency SOS</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Tap to alert all emergency contacts
          </p>
        </div>
        <Button
          size="lg"
          className="w-full bg-destructive text-destructive-foreground hover:bg-destructive/90 h-12 text-base font-semibold"
          asChild
        >
          <Link href="/dashboard/emergency">
            <Phone className="mr-2 size-5" />
            SOS Emergency
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
