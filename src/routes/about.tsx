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
  ArrowRight,
  Check,
  Zap,
  Layers,
  Gauge,
  Shield,
  Globe,
  TrendingUp,
  Target,
  Eye,
  Wifi,
  Brain,
  Code2,
  BarChart3,
  Award,
  Download,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Database,
  Cpu,
  Star,
  Cloud,
} from "lucide-react";
import { PORTFOLIO_CONFIG } from "@/lib/portfolio-config";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — Zohaib Ahmad Khan Sumbal" }] }),
  component: AboutPage,
});




const PILLARS = [
  {
    icon: Zap,
    title: "Agentic-First Engineering",
    body: "I don't bolt AI onto existing systems. I design with autonomy at the core — agents, pipelines, and automation built in from the start.",
  },
  {
    icon: Layers,
    title: "Full-Stack Ownership",
    body: "Sensor to dashboard, ML pipeline to production API — I own the entire build. No handoff gaps. No broken seams.",
  },
  {
    icon: Gauge,
    title: "Outcome-Driven Delivery",
    body: "Every project defines success before I start. I ship against business metrics, not just feature lists.",
  },
  {
    icon: Shield,
    title: "Security & Reliability",
    body: "Proper auth, data handling, error boundaries, and monitoring — built for real environments, not controlled demos.",
  },
  {
    icon: Globe,
    title: "Remote-Native Communication",
    body: "Async-first, globally connected. Fast, direct, no middlemen — you always talk to the engineer who built it.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    body: "I ship, monitor, and iterate. Post-launch support, model retraining, and system evolution are part of my standard process.",
  },
];

const TECH_GROUPS = [
  {
    label: "AI & ML",
    color: "text-[#3FD3E8]",
    items: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "XGBoost",
      "OpenAI API",
      "LangChain",
      "Hugging Face",
      "ONNX",
      "SHAP",
    ],
  },
  {
    label: "IoT & Embedded",
    color: "text-[#4B6EF5]",
    items: [
      "ESP32-S3",
      "Arduino",
      "FreeRTOS",
      "MQTT",
      "MAX30102",
      "MLX90614",
      "YOLO",
      "OpenCV",
      "MediaPipe",
      "Edge AI",
    ],
  },
  {
    label: "Web & Backend",
    color: "text-[#6C5CE7]",
    items: [
      "React",
      "TanStack",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "TypeScript",
      "Tailwind",
      "Redis",
      "Docker",
    ],
  },
  {
    label: "Data & BI",
    color: "text-[#3FD3E8]",
    items: [
      "Power BI",
      "Tableau",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "SQL",
      "Librosa",
      "FFmpeg",
      "DAX",
      "Plotly",
    ],
  },
];

const TIMELINE = [
  {
    year: "2022",
    title: "BS Data Science Begins",
    body: "Started BS Data Science at MNS University of Agriculture Multan, focusing on machine learning, deep learning, and AI systems.",
  },
  {
    year: "2023",
    title: "First AI Projects Shipped",
    body: "Started building custom ML systems, computer vision pipelines, and automation tools. First production projects in fraud detection and computer vision.",
  },
  {
    year: "2024",
    title: "IoT & Vision Expansion",
    body: "Expanded into computer vision and IoT embedded systems. Shipped virtual try-on, car violation detection, and pet monitoring projects.",
  },
  {
    year: "2024",
    title: "Research Published",
    body: "Published peer-reviewed research on non-invasive IoT glucose monitoring using embedded ML on ESP32-S3 hardware.",
  },
  {
    year: "2025",
    title: "AI Agents Go Live",
    body: "Shipped first production WhatsApp AI agents for business clients. Expanded to lead generation, fraud detection, and dashboard products.",
  },
  {
    year: "2026",
    title: "AI Engineer in Full Stride",
    body: "Building and shipping production AI systems across agentic workflows, ML pipelines, computer vision, IoT, and full-stack applications. 30+ projects. Open to freelance and collaboration.",
  },
];

function AboutPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <PageHero
          eyebrow="About Zohaib"
          title="A Data Scientist built"
          titleGradient="for real-world AI."
          subtitle="BS Data Science graduate from MNSUAM passionate about building intelligent systems — from agentic AI and machine learning to computer vision, IoT, and full-stack applications."
        />

        {/* Mission */}
        <section className="relative py-20 sm:py-24 overflow-hidden">
          <div
            aria-hidden
            className="circuit-bg absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
          />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
              <div className="reveal">
                <span className="eyebrow">My Mission</span>
                <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
                  I build AI that earns its place inside real operations.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Most developers deliver demos and prototypes. I
                  deliver deployed systems that handle real load, real edge
                  cases, and real business processes.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  My work is built around one principle: every system I ship has to work in the real world, not just in a demo. That means proper error handling, monitoring, documentation, and ongoing support as standard — not optional extras.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {[
                    "Production-only deliverables",
                    "Full source code ownership",
                    "NDA on day one",
                    "Post-launch support included",
                    "Direct engineer access",
                    "Weekly progress updates",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-foreground/80"
                    >
                      <Check className="h-4 w-4 shrink-0 text-[color:var(--cyan-glow)]" />
                      {item}
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-bold text-[#0a0e1a] transition-all hover:scale-105"
                >
                  Work with me <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="reveal grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Brain,
                    label: "AI & ML",
                    value: "12 Projects",
                    color: "text-[#3FD3E8]",
                  },
                  {
                    icon: Wifi,
                    label: "IoT Systems",
                    value: "3 Projects",
                    color: "text-[#4B6EF5]",
                  },
                  {
                    icon: Code2,
                    label: "Web & Dashboards",
                    value: "9 Projects",
                    color: "text-[#6C5CE7]",
                  },
                  {
                    icon: BarChart3,
                    label: "Data & BI",
                    value: "3 Projects",
                    color: "text-[#3FD3E8]",
                  },
                  {
                    icon: Eye,
                    label: "Computer Vision",
                    value: "4 Projects",
                    color: "text-[#4B6EF5]",
                  },
                  {
                    icon: Target,
                    label: "AI Agents",
                    value: "5 Projects",
                    color: "text-[#6C5CE7]",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="glass-card rounded-2xl p-5 text-center transition-all hover:border-[#3B82F6]/50"
                  >
                    <item.icon
                      className={`mx-auto h-8 w-8 ${item.color} mb-3`}
                    />
                    <p className="font-display text-lg font-bold text-gradient">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core pillars */}
        <section className="relative py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="reveal text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow">Core principles</span>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                How I approach every project.
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PILLARS.map((p, i) => (
                <div
                  key={p.title}
                  className="reveal card-3d group relative overflow-hidden rounded-2xl p-7 transition-all"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand mb-5">
                    <p.icon className="h-5 w-5 text-[#0a0e1a]" />
                  </div>
                  <h3 className="font-display text-lg font-bold">{p.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solo Profile */}
        <section className="relative py-20 sm:py-24 overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(108,92,231,0.07),transparent)]"
          />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="reveal text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow">About Me</span>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                One engineer. Full-stack AI expertise.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Every project is owned end-to-end. When you work with
                Zohaib, you get the specialist — not a middleman.
              </p>
            </div>
            <article className="reveal card-3d group relative overflow-hidden rounded-2xl p-8 max-w-3xl mx-auto">
              <div
                aria-hidden
                className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-[0.03] bg-gradient-to-br from-[#3FD3E8] to-[#4B6EF5]"
              />
              <div className="flex items-start gap-5">
                <div className="relative shrink-0 inline-flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-gradient-to-br from-[#3FD3E8] to-[#4B6EF5] text-2xl font-black text-white shadow-lg">
                  ZK
                  <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-[oklch(0.19_0.038_265)] bg-[#25D366]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-xl font-bold">
                    Zohaib Ahmad Khan Sumbal
                  </h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] bg-gradient-to-r from-[#3FD3E8] to-[#4B6EF5] bg-clip-text text-transparent">
                    Data Scientist & AI Engineer
                  </p>
                  <span className="mt-2 inline-block rounded-full border border-[color:var(--cyan-glow)]/30 bg-[color:var(--cyan-glow)]/10 px-3 py-0.5 text-xs font-semibold text-[color:var(--cyan-glow)]">
                    30+ projects shipped
                  </span>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {PORTFOLIO_CONFIG.bio} I specialize in building autonomous agent systems with LangChain, LangGraph, and CrewAI, production ML pipelines, computer vision with YOLO and OpenCV, IoT firmware on ESP32, and full-stack web applications with React and FastAPI.
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {[
                  "Agentic AI", "RAG", "LangChain", "LangGraph", "CrewAI",
                  "Machine Learning", "Deep Learning", "Computer Vision",
                  "CNN", "YOLO", "OpenCV", "PyTorch", "TensorFlow",
                  "IoT & Embedded AI", "ESP32", "FreeRTOS",
                  "Python", "React", "FastAPI", "TypeScript",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-[#262626] bg-[#0F0F0F] px-2 py-1 text-[10px] font-medium text-neutral-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={PORTFOLIO_CONFIG.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#3B82F6] bg-[#3B82F6]/10 px-4 py-2 text-xs font-semibold text-white transition-all hover:border-[#3B82F6] hover:bg-[#3B82F6]/20"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> View GitHub
                </a>
                <a
                  href={PORTFOLIO_CONFIG.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#3B82F6] bg-[#3B82F6]/10 px-4 py-2 text-xs font-semibold text-white transition-all hover:border-[#3B82F6] hover:bg-[#3B82F6]/20"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> LinkedIn
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* Timeline */}
        <section className="relative py-20 sm:py-24 overflow-hidden">
          <div aria-hidden className="circuit-bg absolute inset-0 opacity-15" />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="reveal text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow">My journey</span>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                From first project to AI engineer.
              </h2>
            </div>
            <div className="relative mx-auto max-w-3xl">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#3FD3E8]/50 via-[#6C5CE7]/50 to-transparent" />
              <div className="space-y-8">
                {TIMELINE.map((t, i) => (
                  <div
                    key={`${t.year}-${t.title}`}
                    className="reveal relative flex gap-6"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#262626] bg-gradient-brand text-xs font-black text-[#0a0e1a] shadow-lg">
                      {t.year}
                    </div>
                    <div className="flex-1 card-3d rounded-2xl p-5">
                      <h3 className="font-display text-lg font-bold">
                        {t.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {t.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section className="relative py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="reveal flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-[#262626]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
                Technology Stack
              </span>
              <div className="h-px flex-1 bg-[#262626]" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {TECH_GROUPS.map((g, i) => (
                <div
                  key={g.label}
                  className="reveal card-3d rounded-2xl p-6"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <p
                    className={`text-xs font-black uppercase tracking-[0.2em] mb-5 ${g.color}`}
                  >
                    {g.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-[#262626] bg-[#0F0F0F] px-3 py-1.5 text-xs font-medium text-neutral-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Certifications - Visual Gallery */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div aria-hidden className="circuit-bg absolute inset-0 opacity-10" />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            
            {/* Section Header */}
            <div className="reveal text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow">Education & Credentials</span>
              <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
                Formal training meets<br />
                <span className="text-gradient">real-world experience.</span>
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Bachelor's degree in Data Science plus professional certifications from Google, Microsoft, and top universities — 
                each credential represents skills I use in production every day.
              </p>
            </div>

            {/* BS Degree - Featured Hero Card */}
            <div className="reveal mb-12">
              <article className="card-3d group relative overflow-hidden rounded-3xl p-8 sm:p-10 transition-all hover:-translate-y-2">
                
                {/* Subtle gradient glow on hover */}
                <div aria-hidden className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#8B5CF6]/20 via-[#EC4899]/10 to-transparent blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                
                {/* Featured badge */}
                <div className="absolute top-6 right-6 sm:top-8 sm:right-8">
                  <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-4 py-1.5 backdrop-blur-sm">
                    <Star className="h-3.5 w-3.5 text-[#8B5CF6] fill-[#8B5CF6]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8B5CF6]">Featured</span>
                  </div>
                </div>

                <div className="relative grid gap-8 lg:grid-cols-[1fr,400px] lg:items-center">
                  
                  {/* Left: Degree info */}
                  <div>
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-brand shadow-[0_8px_30px_rgba(139,92,246,0.4)]">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                    
                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#06B6D4]">
                      Bachelor's Degree · 2022 – 2026
                    </p>
                    
                    <h3 className="mt-2 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
                      BS Data Science
                    </h3>
                    
                    <p className="mt-2 text-lg font-semibold text-slate-600">
                      Muhammad Nawaz Sharif University of Agriculture, Multan
                    </p>
                    
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <div className="rounded-xl border border-[#3B82F6]/30 bg-[#3B82F6]/10 px-5 py-3">
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#06B6D4]">Duration</p>
                        <p className="mt-1 font-display text-2xl font-bold text-white">4 Years</p>
                      </div>
                      <div className="rounded-xl border border-[#06B6D4]/30 bg-[#06B6D4]/10 px-5 py-3">
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#06B6D4]">Year</p>
                        <p className="mt-1 font-display text-2xl font-bold text-white">2022-2026</p>
                      </div>
                    </div>

                    <p className="mt-6 text-base leading-relaxed text-neutral-300">
                      Comprehensive 4-year program covering machine learning, deep learning, AI systems, statistical modeling, 
                      data engineering, and software development. Published researcher in IoT-based non-invasive health monitoring 
                      using embedded machine learning on ESP32 platforms.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {[
                        "Machine Learning",
                        "Deep Learning", 
                        "Statistics",
                        "Data Engineering",
                        "Python/R",
                        "Research",
                        "IoT Systems"
                      ].map(skill => (
                        <span key={skill} className="inline-flex items-center rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 px-3 py-1.5 text-xs font-semibold text-white">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <a
                        href="/certificates/bs-degree-certificate.jpg"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2.5 rounded-full bg-gradient-brand px-6 py-3 text-sm font-bold text-white shadow-[0_0_40px_rgba(6,182,212,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(6,182,212,0.5)]"
                      >
                        <Eye className="h-4 w-4" />
                        View Certificate
                      </a>
                      <a
                        href="/certificates/bs-degree-certificate.jpg"
                        download="Zohaib-BS-Data-Science-Certificate.jpg"
                        className="inline-flex items-center gap-2.5 rounded-full border border-[#06B6D4] bg-[#06B6D4]/10 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-[#06B6D4] hover:bg-[#06B6D4]/20"
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </a>
                    </div>
                  </div>

                  {/* Right: Certificate image preview */}
                  <div className="relative hidden lg:block">
                    <div className="group/img relative overflow-hidden rounded-2xl border border-[#262626] bg-[#0F0F0F] p-3 shadow-2xl transition-all hover:border-[#06B6D4]">
                      <img
                        src="/certificates/bs-degree-certificate.jpg"
                        alt="BS Data Science Certificate"
                        className="h-full w-full rounded-xl object-cover transition-transform duration-500 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover/img:opacity-100" />
                    </div>
                    {/* Decorative glow */}
                    <div aria-hidden className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-[#06B6D4]/20 to-[#7C3AED]/20 blur-2xl opacity-50" />
                  </div>
                </div>
              </article>
            </div>

            {/* Professional Certifications Grid */}
            <div className="reveal mb-8">
              <h3 className="font-display text-2xl font-bold sm:text-3xl">
                Professional Certifications
              </h3>
              <p className="mt-2 text-muted-foreground">
                Industry-recognized credentials from leading tech companies and universities.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PORTFOLIO_CONFIG.certifications.map((cert, i) => {
                const categoryIcon = {
                  Experience: Briefcase,
                  "Data Science": BarChart3,
                  "Data Analytics": Database,
                  Database: Database,
                  "Cloud & AI": Cloud,
                  IoT: Cpu,
                  Education: GraduationCap,
                }[cert.category] ?? Award;
                
                const CategoryIcon = categoryIcon;
                
                const categoryGradient = {
                  Experience: "from-[#06B6D4]/10 to-[#7C3AED]/5",
                  "Data Science": "from-[#7C3AED]/10 to-[#EC4899]/5",
                  "Data Analytics": "from-[#EC4899]/10 to-[#06B6D4]/5",
                  Database: "from-[#06B6D4]/10 to-[#4B6EF5]/5",
                  "Cloud & AI": "from-[#4B6EF5]/10 to-[#06B6D4]/5",
                  IoT: "from-[#4B6EF5]/10 to-[#7C3AED]/5",
                  Education: "from-[#7C3AED]/10 to-[#06B6D4]/5",
                }[cert.category] ?? "from-[#06B6D4]/10 to-[#7C3AED]/5";

                return (
                  <article
                    key={cert.title}
                    className="reveal card-3d group relative overflow-hidden rounded-2xl p-6 transition-all"
                    style={{ transitionDelay: `${(i % 3) * 60}ms` }}
                  >
                    {/* Subtle gradient glow on hover */}
                    <div aria-hidden className={`absolute inset-0 -z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-[0.05] bg-gradient-to-br ${categoryGradient.replace('/10', '/30').replace('/5', '/15')}`} />
                    
                    {/* Special badge for internship */}
                    {cert.category === "Experience" && (
                      <div className="absolute top-4 right-4 rounded-full bg-gradient-brand px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                        Internship
                      </div>
                    )}

                    {/* Icon & Header */}
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 grid h-14 w-14 place-items-center rounded-xl bg-gradient-brand shadow-lg">
                        <CategoryIcon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display text-lg font-bold leading-tight text-slate-900">
                          {cert.title}
                        </h4>
                        <p className="mt-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#8B5CF6]">
                          {cert.issuer}
                        </p>
                        {cert.date && (
                          <p className="mt-1 text-xs text-slate-500">
                            {cert.date}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-5 text-sm leading-relaxed text-slate-600">
                      {cert.description}
                    </p>

                    {/* Actions */}
                    {cert.file && (
                      <div className="mt-6 flex gap-2">
                        <a
                          href={cert.file}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 px-4 py-2.5 text-xs font-semibold text-white transition-all hover:border-[#3B82F6]/60 hover:bg-[#3B82F6]/20"
                        >
                          <Eye className="h-3.5 w-3.5" />
                          View
                        </a>
                        <a
                          href={cert.file}
                          download
                          className="inline-flex items-center justify-center gap-2 rounded-full border border-[#06B6D4]/30 bg-[#06B6D4]/10 px-4 py-2.5 text-xs font-semibold text-white transition-all hover:border-[#06B6D4]/60 hover:bg-[#06B6D4]/20"
                        >
                          <Download className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
            <div className="reveal rounded-3xl border border-[#262626] bg-gradient-to-br from-[#3FD3E8]/[0.05] to-[#6C5CE7]/[0.05] p-12">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Ready to work together?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Let's talk about what you're building and how I can bring it to production.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-bold text-[#0a0e1a] transition-all hover:scale-105"
                >
                  Start a conversation <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold transition-all hover:border-white/25"
                >
                  See my work
                </Link>
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
