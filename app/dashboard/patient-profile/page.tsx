"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { User, Save, Upload } from "lucide-react"

export default function PatientProfilePage() {
  const [saved, setSaved] = useState(false)

  function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1
          className="text-2xl font-bold tracking-tight text-foreground md:text-3xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Patient Profile
        </h1>
        <p className="mt-1 text-muted-foreground">
          Manage patient details and emergency contact information.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="size-5 text-primary" />
              Personal Information
            </CardTitle>
            <CardDescription>Basic details about the patient</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <div className="flex size-20 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                RS
              </div>
              <Button variant="outline" type="button">
                <Upload className="mr-2 size-4" />
                Upload Photo
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="patientName">Patient Name</Label>
                <Input id="patientName" defaultValue="Rajesh Sharma" placeholder="Full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input id="age" type="number" defaultValue="72" placeholder="Age" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="condition">Medical Condition</Label>
                <Input id="condition" defaultValue="Alzheimer's Disease - Stage 2" placeholder="Primary condition" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bloodType">Blood Type</Label>
                <Input id="bloodType" defaultValue="B+" placeholder="Blood type" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" defaultValue="14, Rajpur Road, Dehradun, Uttarakhand - 248001" placeholder="Full address" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Guardian Information</CardTitle>
            <CardDescription>Primary caregiver and guardian details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="guardianName">Guardian Name</Label>
                <Input id="guardianName" defaultValue="Amit Sharma" placeholder="Guardian full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="guardianPhone">Guardian Phone</Label>
                <Input id="guardianPhone" type="tel" defaultValue="+91 9876543210" placeholder="Phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="guardianEmail">Guardian Email</Label>
                <Input id="guardianEmail" type="email" defaultValue="amit.sharma@email.com" placeholder="Email address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="relationship">Relationship</Label>
                <Input id="relationship" defaultValue="Son" placeholder="Relationship to patient" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Emergency Contacts</CardTitle>
            <CardDescription>Additional contacts for emergencies</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="emergency1Name">Contact 1 Name</Label>
                <Input id="emergency1Name" defaultValue="Dr. Priya Mehta" placeholder="Name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emergency1Phone">Contact 1 Phone</Label>
                <Input id="emergency1Phone" type="tel" defaultValue="+91 9876543211" placeholder="Phone" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emergency2Name">Contact 2 Name</Label>
                <Input id="emergency2Name" defaultValue="Sunita Sharma" placeholder="Name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emergency2Phone">Contact 2 Phone</Label>
                <Input id="emergency2Phone" type="tel" defaultValue="+91 9876543212" placeholder="Phone" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center gap-4">
          <Button type="submit" size="lg" className="h-12 px-8">
            <Save className="mr-2 size-4" />
            {saved ? "Saved Successfully!" : "Save Profile"}
          </Button>
          {saved && (
            <span className="animate-fade-in text-sm font-medium text-success">
              Profile updated successfully
            </span>
          )}
        </div>
      </form>
    </div>
  )
}
