import { PatientStatusCard } from "@/components/dashboard/patient-status-card"
import { LocationPreviewCard } from "@/components/dashboard/location-preview-card"
import { TodayScheduleCard } from "@/components/dashboard/today-schedule-card"
import { EmergencyCard } from "@/components/dashboard/emergency-card"
import { QuickActionsCard } from "@/components/dashboard/quick-actions-card"
import { PatientInfoCard } from "@/components/dashboard/patient-info-card"

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div>
        <h1
          className="text-2xl font-bold tracking-tight text-foreground md:text-3xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Good Morning, Amit
        </h1>
        <p className="mt-1 text-muted-foreground">
          Here&apos;s an overview of Rajesh&apos;s care status today.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <PatientStatusCard />
          <div className="grid gap-6 md:grid-cols-2">
            <LocationPreviewCard />
            <TodayScheduleCard />
          </div>
        </div>
        <div className="space-y-6">
          <EmergencyCard />
          <QuickActionsCard />
          <PatientInfoCard />
        </div>
      </div>
    </div>
  )
}
