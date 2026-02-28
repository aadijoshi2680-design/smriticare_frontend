"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { QrCode, Download, RefreshCw, FileHeart, User, Phone, Droplets } from "lucide-react"

export default function QRCodePage() {
  const [generated, setGenerated] = useState(false)

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1
          className="text-2xl font-bold tracking-tight text-foreground md:text-3xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          QR Code Medical ID
        </h1>
        <p className="mt-1 text-muted-foreground">
          Generate a scannable QR code containing essential medical information for emergencies.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* QR Code display */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <QrCode className="size-5 text-primary" />
              Medical QR Code
            </CardTitle>
            <CardDescription>
              Scannable by any smartphone camera
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-6">
            <div className={`flex size-64 items-center justify-center rounded-2xl border-2 border-dashed transition-all duration-500 ${generated ? "border-primary bg-card" : "border-border bg-accent/50"}`}>
              {generated ? (
                <div className="animate-fade-in flex flex-col items-center gap-2 p-4">
                  {/* QR Code SVG placeholder */}
                  <svg viewBox="0 0 200 200" className="size-48" fill="currentColor">
                    <rect x="10" y="10" width="60" height="60" rx="4" className="text-foreground" />
                    <rect x="18" y="18" width="44" height="44" rx="2" className="text-card" />
                    <rect x="26" y="26" width="28" height="28" rx="1" className="text-foreground" />

                    <rect x="130" y="10" width="60" height="60" rx="4" className="text-foreground" />
                    <rect x="138" y="18" width="44" height="44" rx="2" className="text-card" />
                    <rect x="146" y="26" width="28" height="28" rx="1" className="text-foreground" />

                    <rect x="10" y="130" width="60" height="60" rx="4" className="text-foreground" />
                    <rect x="18" y="138" width="44" height="44" rx="2" className="text-card" />
                    <rect x="26" y="146" width="28" height="28" rx="1" className="text-foreground" />

                    {/* Data pattern */}
                    <rect x="80" y="10" width="12" height="12" className="text-foreground" />
                    <rect x="96" y="10" width="12" height="12" className="text-foreground" />
                    <rect x="80" y="26" width="12" height="12" className="text-foreground" />
                    <rect x="112" y="26" width="12" height="12" className="text-foreground" />
                    <rect x="96" y="42" width="12" height="12" className="text-foreground" />
                    <rect x="80" y="58" width="12" height="12" className="text-foreground" />
                    <rect x="112" y="58" width="12" height="12" className="text-foreground" />

                    <rect x="80" y="80" width="12" height="12" className="text-foreground" />
                    <rect x="96" y="80" width="12" height="12" className="text-foreground" />
                    <rect x="112" y="80" width="12" height="12" className="text-foreground" />
                    <rect x="80" y="96" width="12" height="12" className="text-foreground" />
                    <rect x="112" y="96" width="12" height="12" className="text-foreground" />
                    <rect x="96" y="112" width="12" height="12" className="text-foreground" />

                    <rect x="10" y="80" width="12" height="12" className="text-foreground" />
                    <rect x="26" y="96" width="12" height="12" className="text-foreground" />
                    <rect x="42" y="80" width="12" height="12" className="text-foreground" />
                    <rect x="58" y="96" width="12" height="12" className="text-foreground" />
                    <rect x="10" y="112" width="12" height="12" className="text-foreground" />
                    <rect x="42" y="112" width="12" height="12" className="text-foreground" />

                    <rect x="130" y="80" width="12" height="12" className="text-foreground" />
                    <rect x="146" y="96" width="12" height="12" className="text-foreground" />
                    <rect x="162" y="80" width="12" height="12" className="text-foreground" />
                    <rect x="178" y="96" width="12" height="12" className="text-foreground" />
                    <rect x="130" y="112" width="12" height="12" className="text-foreground" />

                    <rect x="130" y="130" width="12" height="12" className="text-foreground" />
                    <rect x="146" y="146" width="12" height="12" className="text-foreground" />
                    <rect x="162" y="130" width="12" height="12" className="text-foreground" />
                    <rect x="178" y="146" width="12" height="12" className="text-foreground" />
                    <rect x="130" y="162" width="12" height="12" className="text-foreground" />
                    <rect x="162" y="178" width="12" height="12" className="text-foreground" />
                    <rect x="178" y="178" width="12" height="12" className="text-foreground" />
                  </svg>
                  <p className="text-xs text-muted-foreground">SmritiCare Medical ID</p>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-3 text-muted-foreground">
                  <QrCode className="size-16 opacity-30" />
                  <p className="text-sm">Click Generate to create QR</p>
                </div>
              )}
            </div>

            <div className="flex w-full gap-3">
              <Button
                className="flex-1"
                onClick={() => setGenerated(true)}
              >
                <RefreshCw className="mr-2 size-4" />
                {generated ? "Regenerate" : "Generate QR Code"}
              </Button>
              <Button variant="outline" className="flex-1" disabled={!generated}>
                <Download className="mr-2 size-4" />
                Download
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Medical info preview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileHeart className="size-5 text-primary" />
              Medical Info Preview
            </CardTitle>
            <CardDescription>
              Information encoded in the QR code
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-xl border bg-accent/30 p-4 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-border/60">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                  RS
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Rajesh Sharma</h3>
                  <p className="text-sm text-muted-foreground">Patient ID: SC-2026-0472</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <User className="mt-0.5 size-4 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Age / Gender</p>
                    <p className="text-sm font-medium text-foreground">72 Years / Male</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Droplets className="mt-0.5 size-4 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Blood Type</p>
                    <p className="text-sm font-medium text-foreground">B+</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileHeart className="mt-0.5 size-4 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Condition</p>
                    <p className="text-sm font-medium text-foreground">Alzheimer&apos;s Disease - Stage 2</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-4 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Emergency Contact</p>
                    <p className="text-sm font-medium text-foreground">Amit Sharma: +91 9876543210</p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-border/60">
                <p className="text-xs font-medium text-foreground mb-2">Allergies</p>
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="destructive" className="text-xs">Penicillin</Badge>
                  <Badge variant="destructive" className="text-xs">Sulfa Drugs</Badge>
                </div>
              </div>

              <div className="pt-3 border-t border-border/60">
                <p className="text-xs font-medium text-foreground mb-2">Current Medications</p>
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="secondary" className="text-xs">Donepezil 10mg</Badge>
                  <Badge variant="secondary" className="text-xs">Memantine 5mg</Badge>
                  <Badge variant="secondary" className="text-xs">Vitamin E 400 IU</Badge>
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              This QR code is for emergency use. Scanning will display the above medical information to help first responders provide immediate care.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
