"use client";

import { PatientStatusCard } from "@/components/dashboard/patient-status-card"
import { LocationPreviewCard } from "@/components/dashboard/location-preview-card"
import { TodayScheduleCard } from "@/components/dashboard/today-schedule-card"
import { EmergencyCard } from "@/components/dashboard/emergency-card"
import { QuickActionsCard } from "@/components/dashboard/quick-actions-card"
import { PatientInfoCard } from "@/components/dashboard/patient-info-card"

import { useEffect } from "react";
import API_BASE_URL from "@/config/api";

export default function DashboardPage() {

  useEffect(() => {
    fetch(`${API_BASE_URL}`)
      .then(res => res.json())
      .then(data => console.log("✅ Backend connected:", data))
      .catch(err => console.error("❌ Backend error:", err));
  }, []);

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      <PatientStatusCard />
      <LocationPreviewCard />
      <TodayScheduleCard />
      <EmergencyCard />
      <QuickActionsCard />
      <PatientInfoCard />

    </div>
  )
}