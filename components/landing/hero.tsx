import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck } from "lucide-react"

export function LandingHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--color-accent)_0%,transparent_60%)]" />
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 lg:flex-row lg:gap-16 lg:py-28">
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-sm">
            <ShieldCheck className="size-4 text-primary" />
            AI-Powered Alzheimer&apos;s Care
          </div>

          <h1
            className="max-w-xl text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Helping Memories{" "}
            <span className="text-primary">Stay Alive</span>
          </h1>

          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            SmritiCare is an AI-powered companion that helps Alzheimer&apos;s patients
            and their guardians with memory support, location tracking, smart
            scheduling, and emergency assistance.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button size="lg" asChild className="h-12 px-8 text-base">
              <Link href="/dashboard/patient-profile">
                Register Patient
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-12 px-8 text-base">
              <Link href="/dashboard">
                Guardian Login
              </Link>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-success" />
              HIPAA Compliant
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-success" />
              24/7 Monitoring
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-success" />
              Family Connected
            </div>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl animate-pulse-soft" />
            <Image
              src="/images/hero-illustration.jpg"
              alt="Elderly person being supported with AI-powered care technology"
              width={520}
              height={420}
              className="relative rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
