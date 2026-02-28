"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogDescription } from "@/components/ui/dialog"
import {
  ShieldAlert,
  Phone,
  Plus,
  Trash2,
  AlertTriangle,
  Siren,
  UserCircle,
} from "lucide-react"

type Contact = {
  id: number
  name: string
  phone: string
  relation: string
}

const initialContacts: Contact[] = [
  { id: 1, name: "Amit Sharma", phone: "+91 9876543210", relation: "Son (Primary Guardian)" },
  { id: 2, name: "Sunita Sharma", phone: "+91 9876543212", relation: "Wife" },
  { id: 3, name: "Dr. Priya Mehta", phone: "+91 9876543211", relation: "Primary Physician" },
  { id: 4, name: "Max Hospital ER", phone: "+91 135-2710000", relation: "Hospital" },
]

export default function EmergencyPage() {
  const [contacts, setContacts] = useState(initialContacts)
  const [sosTriggered, setSosTriggered] = useState(false)
  const [addDialogOpen, setAddDialogOpen] = useState(false)
  const [newContact, setNewContact] = useState({ name: "", phone: "", relation: "" })

  function addContact() {
    if (!newContact.name || !newContact.phone) return
    setContacts((prev) => [
      ...prev,
      { id: Date.now(), ...newContact },
    ])
    setNewContact({ name: "", phone: "", relation: "" })
    setAddDialogOpen(false)
  }

  function removeContact(id: number) {
    setContacts((prev) => prev.filter((c) => c.id !== id))
  }

  function triggerSOS() {
    setSosTriggered(true)
    setTimeout(() => setSosTriggered(false), 5000)
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1
          className="text-2xl font-bold tracking-tight text-foreground md:text-3xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Emergency Settings
        </h1>
        <p className="mt-1 text-muted-foreground">
          Configure SOS alerts and manage emergency contacts for quick response.
        </p>
      </div>

      {/* SOS Button */}
      <Card className={`border-2 transition-all duration-300 ${sosTriggered ? "border-destructive bg-destructive/5 shadow-lg shadow-destructive/10" : "border-destructive/30"}`}>
        <CardContent className="flex flex-col items-center gap-6 py-10">
          <div className={`relative flex size-32 items-center justify-center rounded-full transition-all duration-300 ${
            sosTriggered ? "bg-destructive animate-pulse-soft" : "bg-destructive/10"
          }`}>
            {sosTriggered && (
              <div className="absolute inset-0 rounded-full border-4 border-destructive animate-ping opacity-20" />
            )}
            <Siren className={`size-16 ${sosTriggered ? "text-destructive-foreground" : "text-destructive"}`} />
          </div>

          {sosTriggered ? (
            <div className="animate-fade-in text-center space-y-2">
              <Badge variant="destructive" className="text-base px-4 py-1.5">
                <AlertTriangle className="mr-2 size-4" />
                SOS ALERT SENT
              </Badge>
              <p className="text-sm text-muted-foreground">
                All emergency contacts have been notified with the patient&apos;s current location.
              </p>
            </div>
          ) : (
            <div className="text-center space-y-2">
              <h2 className="text-xl font-bold text-foreground">Emergency SOS</h2>
              <p className="text-sm text-muted-foreground max-w-sm">
                Press the button below to immediately alert all emergency contacts with the patient&apos;s location and medical information.
              </p>
            </div>
          )}

          <Button
            size="lg"
            onClick={triggerSOS}
            disabled={sosTriggered}
            className={`h-14 px-12 text-lg font-bold transition-all ${
              sosTriggered
                ? "bg-muted text-muted-foreground"
                : "bg-destructive text-white hover:bg-destructive/90 shadow-lg shadow-destructive/20 hover:shadow-xl hover:shadow-destructive/30 hover:scale-105"
            }`}
          >
            <Phone className="mr-2 size-5" />
            {sosTriggered ? "Alert Sent - Notifying..." : "Trigger SOS Alert"}
          </Button>
        </CardContent>
      </Card>

      {/* Emergency contacts */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <ShieldAlert className="size-5 text-primary" />
                Emergency Contacts
              </CardTitle>
              <CardDescription className="mt-1">
                People who will be notified during an SOS alert
              </CardDescription>
            </div>

            <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 size-4" />
                  Add Contact
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Emergency Contact</DialogTitle>
                  <DialogDescription>
                    Add a new person who will be notified during emergencies.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Full Name</Label>
                    <Input
                      id="contactName"
                      placeholder="e.g., Dr. Kapoor"
                      value={newContact.name}
                      onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactPhone">Phone Number</Label>
                    <Input
                      id="contactPhone"
                      type="tel"
                      placeholder="+91 XXXXXXXXXX"
                      value={newContact.phone}
                      onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactRelation">Relationship</Label>
                    <Input
                      id="contactRelation"
                      placeholder="e.g., Neighbor, Doctor, etc."
                      value={newContact.relation}
                      onChange={(e) => setNewContact({ ...newContact, relation: e.target.value })}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setAddDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={addContact}>Add Contact</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="group flex items-center gap-4 rounded-xl border p-4 transition-all hover:bg-accent/30 hover:shadow-sm"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <UserCircle className="size-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-foreground">{contact.name}</p>
                    {contact.id === 1 && (
                      <Badge variant="secondary" className="text-[10px]">Primary</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{contact.phone}</p>
                  <p className="text-xs text-muted-foreground">{contact.relation}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-primary hover:text-primary"
                    aria-label={`Call ${contact.name}`}
                  >
                    <Phone className="mr-1 size-3.5" />
                    Call
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    className="text-muted-foreground opacity-0 group-hover:opacity-100 hover:text-destructive"
                    onClick={() => removeContact(contact.id)}
                    aria-label={`Remove ${contact.name}`}
                  >
                    <Trash2 className="size-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Emergency info */}
      <Card>
        <CardContent className="py-4">
          <div className="flex items-start gap-3 rounded-lg bg-accent/50 p-4">
            <AlertTriangle className="size-5 text-warning shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-1">Important</p>
              <p>
                When SOS is triggered, all emergency contacts listed above will receive an SMS and push notification with the patient&apos;s real-time GPS location, medical ID information, and the nearest hospital details. For immediate life-threatening emergencies, also call <strong className="text-foreground">112</strong> (India Emergency Number).
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
