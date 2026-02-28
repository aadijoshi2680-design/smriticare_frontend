import { Brain, MapPin, QrCode, CalendarClock, ShieldAlert, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Brain,
    title: "AI Memory Companion",
    description:
      "An intelligent chatbot that helps patients recall memories, recognize family members, and answer daily questions with empathy.",
  },
  {
    icon: MapPin,
    title: "GPS Live Tracking",
    description:
      "Real-time location monitoring with safe zone alerts so guardians always know where their loved ones are.",
  },
  {
    icon: QrCode,
    title: "QR Medical ID",
    description:
      "A scannable QR code that instantly shares critical medical information with first responders or good samaritans.",
  },
  {
    icon: CalendarClock,
    title: "Smart Scheduler",
    description:
      "Automated reminders for medication, meals, sleep, and appointments to maintain a healthy daily routine.",
  },
  {
    icon: ShieldAlert,
    title: "Emergency SOS",
    description:
      "One-tap emergency alerts that instantly notify all guardians and emergency contacts with location data.",
  },
  {
    icon: Heart,
    title: "Guardian Dashboard",
    description:
      "A comprehensive overview for caregivers with patient status, today's schedule, and quick access to all features.",
  },
]

export function LandingFeatures() {
  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Features
          </p>
          <h2
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Everything You Need for Peace of Mind
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            SmritiCare combines AI intelligence with compassionate care to support
            both patients and their families.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <CardContent className="flex flex-col gap-4 pt-2">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="size-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
