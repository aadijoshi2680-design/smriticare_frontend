import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User } from "lucide-react"

export function PatientInfoCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <User className="size-4 text-primary" />
          Patient Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="space-y-3 text-sm">
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Name</dt>
            <dd className="font-medium text-foreground">Rajesh Sharma</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Age</dt>
            <dd className="font-medium text-foreground">72 Years</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Condition</dt>
            <dd className="font-medium text-foreground">Alzheimer&apos;s</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Blood Type</dt>
            <dd className="font-medium text-foreground">B+</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Guardian</dt>
            <dd className="font-medium text-foreground">Amit Sharma</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Phone</dt>
            <dd className="font-medium text-foreground">+91 9876543210</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  )
}
