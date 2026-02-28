import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileHeart, Pill, Stethoscope, AlertTriangle, ClipboardList } from "lucide-react"

export default function MedicalInfoPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1
          className="text-2xl font-bold tracking-tight text-foreground md:text-3xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Medical Information
        </h1>
        <p className="mt-1 text-muted-foreground">
          Complete medical records and medication details for Rajesh Sharma.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileHeart className="size-5 text-primary" />
              Diagnosis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-accent/50 p-4">
              <h4 className="font-semibold text-foreground">Alzheimer&apos;s Disease</h4>
              <p className="mt-1 text-sm text-muted-foreground">Stage 2 - Moderate Cognitive Decline</p>
              <p className="mt-2 text-sm text-muted-foreground">Diagnosed: March 2023</p>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Primary Doctor</span>
                <span className="font-medium text-foreground">Dr. Priya Mehta</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Hospital</span>
                <span className="font-medium text-foreground">Max Super Specialty</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Last Checkup</span>
                <span className="font-medium text-foreground">Feb 15, 2026</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Pill className="size-5 text-primary" />
              Current Medications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "Donepezil", dosage: "10mg", frequency: "Once daily", time: "Morning" },
                { name: "Memantine", dosage: "5mg", frequency: "Twice daily", time: "Morning & Evening" },
                { name: "Vitamin E", dosage: "400 IU", frequency: "Once daily", time: "Afternoon" },
              ].map((med) => (
                <div key={med.name} className="flex items-center justify-between rounded-lg border p-3">
                  <div>
                    <p className="font-medium text-foreground">{med.name}</p>
                    <p className="text-xs text-muted-foreground">{med.dosage} &middot; {med.frequency}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">{med.time}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="size-5 text-warning" />
              Allergies &amp; Precautions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="destructive">Penicillin</Badge>
                <Badge variant="destructive">Sulfa Drugs</Badge>
                <Badge className="bg-warning text-warning-foreground">Lactose Intolerant</Badge>
              </div>
              <div className="rounded-lg bg-accent/50 p-3">
                <p className="text-sm font-medium text-foreground">Precautions</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>Avoid crowded or noisy environments</li>
                  <li>Ensure proper hydration throughout the day</li>
                  <li>Monitor for signs of confusion or agitation</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Stethoscope className="size-5 text-primary" />
              Vital Stats
            </CardTitle>
            <CardDescription>Latest recorded vitals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { label: "Blood Pressure", value: "130/85 mmHg", status: "Normal" },
                { label: "Heart Rate", value: "78 bpm", status: "Normal" },
                { label: "Blood Sugar", value: "110 mg/dL", status: "Normal" },
                { label: "Weight", value: "68 kg", status: "Stable" },
                { label: "Temperature", value: "98.2 F", status: "Normal" },
              ].map((vital) => (
                <div key={vital.label} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{vital.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">{vital.value}</span>
                    <Badge variant="secondary" className="text-[10px] bg-success/10 text-success">{vital.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ClipboardList className="size-5 text-primary" />
              Medical History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { date: "Feb 2026", event: "Routine checkup - Stable condition, adjusted Memantine dosage" },
                { date: "Dec 2025", event: "Minor fall incident - No fractures, prescribed physiotherapy" },
                { date: "Oct 2025", event: "Cognitive assessment - Stage 2 confirmed, memory exercises recommended" },
                { date: "Mar 2023", event: "Initial diagnosis - Alzheimer's Disease Stage 1, started Donepezil" },
              ].map((record) => (
                <div key={record.date} className="flex gap-4 border-l-2 border-primary/20 pl-4">
                  <span className="w-20 shrink-0 text-sm font-medium text-primary">{record.date}</span>
                  <p className="text-sm text-muted-foreground">{record.event}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
