import Link from "next/link"
import { Brain, Heart } from "lucide-react"

export function LandingFooter() {
  return (
    <footer id="about" className="border-t bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary">
                <Brain className="size-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                SmritiCare
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              AI-powered memory and safety companion designed to provide comfort
              and security for Alzheimer&apos;s patients and their families.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
            <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Features
            </Link>
            <Link href="/dashboard" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Guardian Dashboard
            </Link>
            <Link href="/dashboard/patient-profile" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Register Patient
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-foreground">Support</h4>
            <p className="text-sm text-muted-foreground">
              Emergency Helpline: 112
            </p>
            <p className="text-sm text-muted-foreground">
              Email: support@smriticare.in
            </p>
            <p className="text-sm text-muted-foreground">
              Available 24/7 for patient safety
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SmritiCare. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="size-3.5 fill-destructive text-destructive" /> for Alzheimer&apos;s care
          </p>
        </div>
      </div>
    </footer>
  )
}
