import { createFileRoute, Link } from "@tanstack/react-router";
import {
  useReveal,
  PageHero,
  SiteNav,
  SiteFooter,
  FloatingWhatsApp,
  WHATSAPP_HREF,
} from "@/components/site-layout";
import {
  Bot,
  Brain,
  Sparkles,
  BarChart3,
  Wifi,
  Code2,
  Check,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Users,
  MessageSquare,
  Activity,
  Database,
  Globe,
  Lock,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [{ title: "Services — Zohaib Ahmad Khan Sumbal" }],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: Bot,
    color: "from-[#3FD3E8] to-[#4B6EF5]",
    bg: "from-[#3FD3E8]/[0.06] to-[#4B6EF5]/[0.06]",
    title: "AI Agents & Automation",
    tagline: "Autonomous teammates that close loops, not tickets.",
    body: "I engineer AI agents that operate independently across channels — qualifying leads, handling support, booking appointments, processing workflows. These are not chatbots; they're full autonomous systems with tool access, memory, and business logic.",
    bullets: [
      "Multi-channel: web, WhatsApp, email, Slack",
      "Tool-calling agents with real API access",
      "Long-term memory and context management",
      "Human-in-the-loop handoff controls",
      "Complete observability & analytics dashboards",
      "Production monitoring and alerting",
    ],
    useCases: [
      "Customer support agents that resolve 80%+ of tickets",
      "Lead qualification bots that run 24/7",
      "Invoice processing agents that touch zero humans",
      "Meeting scheduling systems across time zones",
    ],
  },
  {
    icon: Brain,
    color: "from-[#4B6EF5] to-[#6C5CE7]",
    bg: "from-[#4B6EF5]/[0.06] to-[#6C5CE7]/[0.06]",
    title: "Machine Learning Solutions",
    tagline: "Predictive systems built on your actual data.",
    body: "I build production ML systems — from fraud detection and demand forecasting to classification and recommendation engines. Every model is trained on your data, validated against real metrics, and deployed into your infrastructure with monitoring.",
    bullets: [
      "Fraud & anomaly detection pipelines",
      "Demand forecasting & inventory optimization",
      "Classification, ranking & recommendation",
      "End-to-end MLOps with CI/CD pipelines",
      "Model monitoring, drift detection, retraining",
      "Explainability with SHAP & LIME",
    ],
    useCases: [
      "Fintech fraud detection with 99%+ precision",
      "Retail inventory demand forecasting",
      "Medical diagnosis assistance systems",
      "Customer churn prediction engines",
    ],
  },
  {
    icon: Sparkles,
    color: "from-[#6C5CE7] to-[#3FD3E8]",
    bg: "from-[#6C5CE7]/[0.06] to-[#3FD3E8]/[0.06]",
    title: "Generative AI Integration",
    tagline: "Your company's knowledge, made conversational.",
    body: "I integrate GPT-4, Claude, and open-source LLMs into your products using RAG, fine-tuning, and agent frameworks. Your data stays private — I build it on your infrastructure with proper access control.",
    bullets: [
      "Retrieval-augmented generation (RAG)",
      "Domain-specific fine-tuned assistants",
      "Document, PDF & knowledge base intelligence",
      "Secure private deployments (on-prem or VPC)",
      "Multi-modal: text, image, audio",
      "Structured output generation & extraction",
    ],
    useCases: [
      "Company knowledge base Q&A systems",
      "Legal document review assistants",
      "Customer-facing AI product chat",
      "Code generation & review tools",
    ],
  },
  {
    icon: BarChart3,
    color: "from-[#3FD3E8] to-[#6C5CE7]",
    bg: "from-[#3FD3E8]/[0.06] to-[#6C5CE7]/[0.06]",
    title: "Data Science & Analytics",
    tagline: "From raw data to decisions that actually stick.",
    body: "I turn scattered business data into Power BI and Tableau dashboards, predictive models, and automated reports — wired into the tools your team already uses, with drill-downs built for how decisions actually get made.",
    bullets: [
      "Power BI & Tableau dashboard design",
      "Data warehousing & ETL pipelines",
      "Feature engineering & statistical analysis",
      "Cohort, funnel & retention analysis",
      "Custom KPI design & metric systems",
      "Automated reporting infrastructure",
    ],
    useCases: [
      "Executive performance dashboards",
      "Multi-location retail analytics",
      "SaaS product analytics platforms",
      "Real-time operational monitoring",
    ],
  },
  {
    icon: Wifi,
    color: "from-[#4B6EF5] to-[#3FD3E8]",
    bg: "from-[#4B6EF5]/[0.06] to-[#3FD3E8]/[0.06]",
    title: "IoT Systems & Embedded AI",
    tagline: "Hardware that thinks, monitors, and acts in the field.",
    body: "I design and build complete IoT systems — from ESP32 firmware and sensor integration to cloud dashboards and edge AI inference. From pet monitors to industrial sensors, I own the full hardware-to-cloud stack.",
    bullets: [
      "ESP32-S3, Arduino firmware with FreeRTOS",
      "MQTT broker & cloud data pipelines",
      "Real-time sensor dashboards",
      "Edge AI / embedded ML inference",
      "Computer vision on embedded hardware",
      "Environmental & biometric monitoring",
    ],
    useCases: [
      "Agricultural monitoring and automation",
      "Smart building environmental systems",
      "Remote equipment health monitoring",
      "Wearable health & biometric devices",
    ],
  },
  {
    icon: Code2,
    color: "from-[#6C5CE7] to-[#4B6EF5]",
    bg: "from-[#6C5CE7]/[0.06] to-[#4B6EF5]/[0.06]",
    title: "Web & Full-Stack Development",
    tagline: "Scalable, polished applications built to last.",
    body: "Modern web apps, internal tools, admin dashboards, and AI-powered SaaS products — built with React, TanStack, and production-grade backend systems. Accessibility, performance, and security are not afterthoughts.",
    bullets: [
      "React, Next.js & TanStack Start",
      "Node.js, REST & GraphQL APIs",
      "PostgreSQL, Redis & cloud databases",
      "Authentication, billing & third-party integrations",
      "Performance optimization & Core Web Vitals",
      "Accessible, responsive UI design",
    ],
    useCases: [
      "SaaS product front-ends & dashboards",
      "Internal operations management tools",
      "AI-powered web applications",
      "Business automation portals",
    ],
  },
];

function ServicesPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <PageHero
          eyebrow="My Services"
          title="One technical partner."
          titleGradient="Every layer of your product."
          subtitle="From product strategy and UX to APIs, AI systems, dashboards, and deployment — I build software that solves real problems, with you on every call."
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-bold text-[#0a0e1a] transition-all hover:scale-105"
            >
              Start a Project <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#262626] bg-[#0F0F0F] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-[#06B6D4] hover:text-[#06B6D4]"
            >
              WhatsApp Us
            </a>
          </div>
        </PageHero>

        {/* Service cards */}
        <section className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-8">
            {SERVICES.map((s, i) => (
              <article
                key={s.title}
                className={`reveal group relative overflow-hidden rounded-3xl border border-[#262626] bg-gradient-to-br ${s.bg} p-8 transition-all hover:border-[#3B82F6]/50 lg:p-10`}
                style={{ transitionDelay: `${(i % 2) * 60}ms` }}
              >
                <div
                  aria-hidden
                  className={`pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-25 bg-gradient-to-br ${s.color}`}
                />
                <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
                  <div>
                    <div
                      className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${s.color} shadow-lg mb-5`}
                    >
                      <s.icon className="h-7 w-7 text-white" />
                    </div>
                    <h2 className="font-display text-2xl font-bold lg:text-3xl">
                      {s.title}
                    </h2>
                    <p className="mt-2 text-base font-semibold text-gradient">
                      {s.tagline}
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-white">
                      {s.body}
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-y-2.5 gap-x-4">
                      {s.bullets.map((b) => (
                        <div
                          key={b}
                          className="flex items-start gap-2 text-sm text-foreground/80"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--cyan-glow)]" />
                          {b}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/70 mb-4">
                      Use Cases
                    </p>
                    <div className="space-y-3">
                      {s.useCases.map((uc) => (
                        <div
                          key={uc}
                          className="flex items-start gap-3 rounded-xl border border-[#262626] bg-[#0F0F0F] px-4 py-3.5"
                        >
                          <Zap className="mt-0.5 h-4 w-4 shrink-0 text-[#06B6D4]" />
                          <p className="text-sm text-neutral-300">{uc}</p>
                        </div>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className={`mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${s.color} px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:scale-105`}
                    >
                      Inquire about {s.title.split(" ")[0]}{" "}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Why us */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div aria-hidden className="circuit-bg absolute inset-0 opacity-20" />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="reveal text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow">Why work with me</span>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                I don't just advise. I build and ship.
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Clock,
                  title: "Fast Turnaround",
                  body: "Most MVP builds complete in 4–8 weeks. I define scope clearly and stick to it.",
                },
                {
                  icon: Shield,
                  title: "Production Quality",
                  body: "Every system includes error handling, logging, monitoring, and documentation from day one.",
                },
                {
                  icon: Lock,
                  title: "Full Ownership",
                  body: "You own all code, models, and infrastructure. No vendor lock-in, ever.",
                },
                {
                  icon: Users,
                  title: "Direct Access",
                  body: "You always talk to the engineer who built it — not a project manager or sales rep.",
                },
                {
                  icon: Activity,
                  title: "Post-Launch Support",
                  body: "I monitor, iterate, and fix issues after launch. I don't disappear after delivery.",
                },
                {
                  icon: Database,
                  title: "Data Security",
                  body: "Your data never leaves your environment unless you explicitly require it. NDA on day one.",
                },
                {
                  icon: Globe,
                  title: "Remote-Native",
                  body: "I work with clients globally. Async-first with fast, direct communication.",
                },
                {
                  icon: MessageSquare,
                  title: "Clear Communication",
                  body: "Weekly updates, clear milestones, and honest timelines — no surprises.",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="reveal glass-card rounded-2xl p-6 transition-all hover:border-[#3B82F6]/50"
                  style={{ transitionDelay: `${(i % 4) * 50}ms` }}
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand mb-4">
                    <item.icon className="h-5 w-5 text-[#0a0e1a]" />
                  </div>
                  <h3 className="font-display text-base font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
            <div className="reveal rounded-3xl border border-[#262626] bg-gradient-to-br from-[#3FD3E8]/[0.06] to-[#6C5CE7]/[0.06] p-12">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Ready to get started?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Tell me your challenge. I'll respond with a focused plan within
                one business day.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-brand px-8 py-4 text-base font-bold text-[#0a0e1a] shadow-[0_0_50px_-10px_rgba(63,211,232,0.6)] transition-all hover:scale-105"
                >
                  Start a Project <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full border border-[#262626] bg-[#0F0F0F] px-8 py-4 text-base font-semibold transition-all hover:border-[#06B6D4] hover:text-[#06B6D4]"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
