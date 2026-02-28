"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogDescription } from "@/components/ui/dialog"
import {
  CalendarClock,
  Plus,
  Pill,
  UtensilsCrossed,
  Moon,
  Bell,
  Pencil,
  Trash2,
  Clock,
} from "lucide-react"

type ScheduleItem = {
  id: number
  time: string
  label: string
  type: "medicine" | "meal" | "sleep" | "custom"
  status: "done" | "upcoming" | "missed"
}

const initialSchedule: ScheduleItem[] = [
  { id: 1, time: "06:30", label: "Wake Up & Morning Routine", type: "custom", status: "done" },
  { id: 2, time: "07:00", label: "Morning Medicine (Donepezil 10mg)", type: "medicine", status: "done" },
  { id: 3, time: "08:00", label: "Breakfast", type: "meal", status: "done" },
  { id: 4, time: "09:00", label: "Morning Walk & Exercise", type: "custom", status: "done" },
  { id: 5, time: "12:30", label: "Lunch", type: "meal", status: "upcoming" },
  { id: 6, time: "14:00", label: "Afternoon Medicine (Vitamin E)", type: "medicine", status: "upcoming" },
  { id: 7, time: "16:00", label: "Evening Snack & Tea", type: "meal", status: "upcoming" },
  { id: 8, time: "18:00", label: "Evening Medicine (Memantine 5mg)", type: "medicine", status: "upcoming" },
  { id: 9, time: "19:30", label: "Dinner", type: "meal", status: "upcoming" },
  { id: 10, time: "21:00", label: "Sleep Time", type: "sleep", status: "upcoming" },
]

const typeConfig = {
  medicine: { icon: Pill, color: "text-primary", bg: "bg-primary/10" },
  meal: { icon: UtensilsCrossed, color: "text-chart-2", bg: "bg-chart-2/10" },
  sleep: { icon: Moon, color: "text-chart-3", bg: "bg-chart-3/10" },
  custom: { icon: Bell, color: "text-chart-5", bg: "bg-chart-5/10" },
}

export default function SchedulePage() {
  const [schedule, setSchedule] = useState(initialSchedule)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [newTask, setNewTask] = useState({ time: "", label: "", type: "custom" as ScheduleItem["type"] })

  function addTask() {
    if (!newTask.time || !newTask.label) return
    setSchedule((prev) => [
      ...prev,
      {
        id: Date.now(),
        time: newTask.time,
        label: newTask.label,
        type: newTask.type,
        status: "upcoming",
      },
    ].sort((a, b) => a.time.localeCompare(b.time)))
    setNewTask({ time: "", label: "", type: "custom" })
    setDialogOpen(false)
  }

  function removeTask(id: number) {
    setSchedule((prev) => prev.filter((item) => item.id !== id))
  }

  function toggleDone(id: number) {
    setSchedule((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: item.status === "done" ? "upcoming" : "done" }
          : item
      )
    )
  }

  const doneCount = schedule.filter((s) => s.status === "done").length

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1
            className="text-2xl font-bold tracking-tight text-foreground md:text-3xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Smart Schedule Planner
          </h1>
          <p className="mt-1 text-muted-foreground">
            Manage daily routines, medication, meals, and custom reminders.
          </p>
        </div>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button size="lg" className="h-11">
              <Plus className="mr-2 size-4" />
              Add Reminder
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Reminder</DialogTitle>
              <DialogDescription>
                Set up a new schedule item for the patient&apos;s daily routine.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="taskLabel">Reminder Label</Label>
                <Input
                  id="taskLabel"
                  placeholder="e.g., Take blood pressure medicine"
                  value={newTask.label}
                  onChange={(e) => setNewTask({ ...newTask, label: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="taskTime">Time</Label>
                  <Input
                    id="taskTime"
                    type="time"
                    value={newTask.time}
                    onChange={(e) => setNewTask({ ...newTask, time: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="taskType">Type</Label>
                  <Select
                    value={newTask.type}
                    onValueChange={(v) => setNewTask({ ...newTask, type: v as ScheduleItem["type"] })}
                  >
                    <SelectTrigger id="taskType">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="medicine">Medicine</SelectItem>
                      <SelectItem value="meal">Meal</SelectItem>
                      <SelectItem value="sleep">Sleep</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={addTask}>Add Reminder</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Progress bar */}
      <Card>
        <CardContent className="flex items-center gap-4 py-4">
          <CalendarClock className="size-5 text-primary" />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">Today&apos;s Progress</span>
              <span className="text-sm text-muted-foreground">{doneCount}/{schedule.length} completed</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-accent">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
                style={{ width: `${(doneCount / schedule.length) * 100}%` }}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Schedule list */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="size-5 text-primary" />
            Daily Schedule
          </CardTitle>
          <CardDescription>Click a task to toggle completion status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {schedule.map((item) => {
              const config = typeConfig[item.type]
              const Icon = config.icon
              return (
                <div
                  key={item.id}
                  className={`group flex items-center gap-4 rounded-xl border p-4 transition-all hover:shadow-sm ${
                    item.status === "done" ? "bg-accent/30 opacity-70" : "bg-card"
                  }`}
                >
                  <button
                    onClick={() => toggleDone(item.id)}
                    className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${config.bg} transition-transform hover:scale-105`}
                    aria-label={`Mark ${item.label} as ${item.status === "done" ? "pending" : "done"}`}
                  >
                    <Icon className={`size-5 ${config.color}`} />
                  </button>

                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium ${item.status === "done" ? "text-muted-foreground line-through" : "text-foreground"}`}>
                      {item.label}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {item.time} &middot; {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </p>
                  </div>

                  <Badge
                    variant={item.status === "done" ? "secondary" : "outline"}
                    className={`text-xs shrink-0 ${item.status === "done" ? "bg-success/10 text-success" : ""}`}
                  >
                    {item.status === "done" ? "Done" : "Pending"}
                  </Badge>

                  <div className="flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      className="text-muted-foreground hover:text-foreground"
                      aria-label={`Edit ${item.label}`}
                    >
                      <Pencil className="size-3.5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      className="text-muted-foreground hover:text-destructive"
                      onClick={() => removeTask(item.id)}
                      aria-label={`Delete ${item.label}`}
                    >
                      <Trash2 className="size-3.5" />
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
