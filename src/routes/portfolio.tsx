import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  useReveal,
  PageHero,
  SiteNav,
  SiteFooter,
  FloatingWhatsApp,
} from "@/components/site-layout";
import {
  MessageSquare,
  Receipt,
  Target,
  LayoutDashboard,
  Eye,
  Car,
  Wifi,
  Bird,
  ShieldAlert,
  PieChart,
  Mic,
  Music,
  Pill,
  FlaskConical,
  Check,
  ArrowRight,
  ChevronDown,
  ExternalLink,
  Bot,
  Brain,
  Database,
  Activity,
  Globe,
  Package,
  Heart,
  Stethoscope,
  TrendingUp,
  Users,
  FileText,
  DollarSign,
  Search,
  Shield,
  Cpu,
  Code2,
  BarChart3,
} from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({ meta: [{ title: "Portfolio — Zohaib Ahmad Khan Sumbal" }] }),
  component: PortfolioPage,
});

const WORK = [
  // ---- AI AGENTS ----
  {
    icon: MessageSquare,
    tag: "Conversational AI",
    category: "AI Agents",
    highlight: true,
    title: "AI WhatsApp Business Assistant",
    body: "A multilingual WhatsApp AI agent that qualifies leads, books appointments, answers product questions, and handles support 24/7 -- wired into business CRM with intelligent human handoff and full conversation logging.",
    tech: [
      "LangChain",
      "Twilio",
      "OpenAI GPT-4",
      "Node.js",
      "CRM Integration",
      "WebHooks",
    ],
    outcomes: [
      "80%+ of queries resolved autonomously",
      "24/7 availability without human staff",
      "Integrated with existing CRM pipeline",
    ],
  },
  {
    icon: Target,
    tag: "Agentic AI",
    category: "AI Agents",
    title: "Autonomous Lead Generation Agent",
    body: "An outbound AI agent that researches target prospects, personalizes cold outreach at scale, follows up intelligently, and schedules qualified sales meetings -- feeding a pipeline that converts at a higher rate than manual outreach.",
    tech: ["Python", "LangChain", "GPT-4", "Zapier", "HubSpot", "LinkedIn API"],
    outcomes: [
      "Fully automated prospect research",
      "Personalized outreach at scale",
      "Qualified meeting bookings delivered to calendar",
    ],
  },
  {
    icon: Bot,
    tag: "AI Memory Agent",
    category: "AI Agents",
    title: "Stateful AI Assistant with Long-Term Memory",
    body: "Production-ready AI assistant with short-term and long-term memory, semantic retrieval, preference learning, and personalization -- growing smarter with every interaction using vector embeddings and conversation summarization.",
    tech: [
      "LangChain",
      "LangGraph",
      "GPT-4",
      "Pinecone",
      "PostgreSQL",
      "FastAPI",
      "Redis",
    ],
    outcomes: [
      "Remembers user context across sessions",
      "Personalized tone and response style",
      "Memory compression & semantic retrieval",
    ],
  },
  {
    icon: Globe,
    tag: "Social Media AI",
    category: "AI Agents",
    title: "Social Media AI Agent with HITL Approval",
    body: "Enterprise-grade social media automation agent that drafts content, waits for human approval, and publishes to Twitter, Instagram, LinkedIn, TikTok, and Facebook -- with scheduling, analytics, and brand voice enforcement.",
    tech: [
      "LangGraph",
      "GPT-4",
      "Celery",
      "Redis",
      "React",
      "APScheduler",
      "Tweepy",
    ],
    outcomes: [
      "Multi-platform automated publishing",
      "Human approval gate before every post",
      "Learns from feedback to improve content quality",
    ],
  },
  {
    icon: Globe,
    tag: "WhatsApp SaaS",
    category: "AI Agents",
    title: "Dubai AI Business Agent (WhatsApp SaaS)",
    body: "Production-ready SaaS platform for UAE SMEs with real WhatsApp integration, AI-powered RAG engine, Stripe billing, Arabic + English bilingual support, and automated appointment booking.",
    tech: [
      "Next.js",
      "Express",
      "OpenAI",
      "PostgreSQL",
      "pgvector",
      "Stripe",
      "WhatsApp API",
    ],
    outcomes: [
      "Full bilingual Arabic/English support",
      "Real-time WhatsApp AI conversations",
      "Stripe subscription billing integrated",
    ],
  },
  // ---- ML & VISION ----
  {
    icon: Eye,
    tag: "Computer Vision",
    category: "ML & Vision",
    highlight: true,
    title: "AI Virtual Try-On System",
    body: "Deep learning system using computer vision and generative models to digitally fit garments onto human body images. Handles diverse body types, garment categories, and lighting conditions for interactive e-commerce visualization.",
    tech: ["PyTorch", "OpenCV", "GANs", "MediaPipe", "Python", "CUDA"],
    outcomes: [
      "Realistic garment rendering on real body images",
      "Supports multiple garment categories",
      "Real-time inference pipeline",
    ],
  },
  {
    icon: Car,
    tag: "Object Detection",
    category: "ML & Vision",
    title: "Car Violation Detection System",
    body: "Automated traffic surveillance system using YOLO-based object detection and OCR to detect vehicle number plates and headlight violations in real-time video streams -- designed for scalable deployment across camera networks.",
    tech: ["YOLOv8", "OpenCV", "Python", "TensorFlow", "OCR", "ALPR"],
    outcomes: [
      "Real-time violation detection from CCTV feeds",
      "Automated license plate recognition",
      "Violation logging and reporting dashboard",
    ],
  },
  {
    icon: ShieldAlert,
    tag: "Machine Learning",
    category: "ML & Vision",
    title: "Fraud Detection System",
    body: "Production ML pipeline for real-time financial fraud detection -- identifying suspicious and anomalous transaction patterns using ensemble methods, feature engineering on behavioral signals, and explainable model outputs.",
    tech: [
      "scikit-learn",
      "XGBoost",
      "Python",
      "Pandas",
      "SHAP",
      "Feature Engineering",
    ],
    outcomes: [
      "High precision anomaly classification",
      "Real-time scoring per transaction",
      "Explainable outputs for compliance teams",
    ],
  },
  {
    icon: Mic,
    tag: "Audio ML",
    category: "ML & Vision",
    title: "Spam Voice Detection System",
    body: "Audio signal processing and ML classification pipeline that identifies spam, robocall, and fraudulent voice patterns -- using MFCC features, spectral analysis, and ensemble classifiers trained on labeled audio datasets.",
    tech: ["Librosa", "scikit-learn", "Python", "FFmpeg", "MFCC", "SVM"],
    outcomes: [
      "Real-time call classification",
      "High accuracy on robocall patterns",
      "Deployable as an API endpoint",
    ],
  },
  {
    icon: Pill,
    tag: "Healthcare AI",
    category: "ML & Vision",
    title: "Medical Store Demand Prediction",
    body: "Predictive analytics system for pharmacy inventory management -- forecasting medicine demand from historical sales data, seasonal patterns, and supply chain signals to reduce stockouts, overstock, and waste.",
    tech: [
      "Python",
      "XGBoost",
      "Pandas",
      "Matplotlib",
      "ARIMA",
      "Feature Eng.",
    ],
    outcomes: [
      "Accurate 30-day demand forecasts",
      "Reduced stockout incidents",
      "Integrated with POS system data",
    ],
  },
  // ---- IOT & EMBEDDED ----
  {
    icon: Wifi,
    tag: "IoT System",
    category: "IoT & Embedded",
    highlight: true,
    title: "IoT Pet Monitoring System",
    body: "Real-time pet tracking and environmental monitoring system built on ESP32 microcontrollers with temperature, humidity, motion, and GPS sensors -- streaming live telemetry to a React web dashboard for remote pet owners.",
    tech: ["ESP32", "MQTT", "Sensors", "React", "WebSocket", "Node.js"],
    outcomes: [
      "Live sensor data streaming to web dashboard",
      "Motion and environment alerting",
      "Remote monitoring from any device",
    ],
  },
  {
    icon: Bird,
    tag: "IoT Automation",
    category: "IoT & Embedded",
    title: "IoT Bird Repellent System",
    body: "Smart agricultural automation system that detects bird activity using PIR motion sensors and image classification, then triggers automated deterrent mechanisms -- protecting crops without continuous human monitoring.",
    tech: [
      "Arduino",
      "PIR Sensors",
      "Python",
      "ESP32",
      "Relay Module",
      "Image Classification",
    ],
    outcomes: [
      "Automated bird detection and response",
      "Configurable deterrent timing",
      "Activity logging dashboard",
    ],
  },
  {
    icon: FlaskConical,
    tag: "Embedded AI",
    category: "IoT & Embedded",
    title: "Non-Invasive Glucose Monitoring Kiosk",
    body: "Multi-parameter biometric health kiosk using ESP32-S3 with MAX30102 and MLX90614 sensors, FreeRTOS dual-core scheduling, and a context-aware ML glucose estimation algorithm -- achieving 87% Clarke Zone A+B accuracy at USD 38 prototype cost.",
    tech: [
      "ESP32-S3",
      "FreeRTOS",
      "MAX30102",
      "MLX90614",
      "TFT Display",
      "Embedded ML",
    ],
    outcomes: [
      "87% Clarke Zone A+B accuracy",
      "3.2 BPM HR MAE, 1.4% SpO2 MAE",
      'Full 3.5" TFT display UI',
    ],
  },
  // ---- WEB & DASHBOARDS ----
  {
    icon: Receipt,
    tag: "Operations Software",
    category: "Web & Dashboards",
    title: "Invoice & Inventory Management System",
    body: "End-to-end web platform automating business invoicing, multi-location inventory tracking, purchase order management, and financial reporting -- replacing manual spreadsheet workflows with a real-time operations dashboard.",
    tech: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Tailwind",
      "REST API",
      "PDF Generation",
    ],
    outcomes: [
      "Fully automated invoice generation",
      "Multi-location inventory tracking",
      "Real-time financial reporting",
    ],
  },
  {
    icon: PieChart,
    tag: "Business Intelligence",
    category: "Web & Dashboards",
    title: "Power BI & Tableau Dashboards",
    body: "Interactive business intelligence dashboards designed for executive decision-making across retail, SaaS, and service industries -- with custom KPIs, drill-downs, and automated data refresh.",
    tech: ["Power BI", "Tableau", "DAX", "SQL", "Python", "ETL Pipelines"],
    outcomes: [
      "Unified data from 5+ sources",
      "Custom drill-downs for each business unit",
      "Automated daily data refresh",
    ],
  },
  {
    icon: Music,
    tag: "Utility Tool",
    category: "Web & Dashboards",
    title: "Audio & Video Downloader Tools",
    body: "Python-based automation utility applications for downloading audio from SoundCloud and video from multiple platforms -- with format selection, metadata extraction, and batch processing support via clean CLI interfaces.",
    tech: ["Python", "yt-dlp", "requests", "CLI", "Async IO", "Metadata"],
    outcomes: [
      "Multi-platform support",
      "Batch download capability",
      "Clean CLI and configuration interface",
    ],
  },
  // ---- FULL-STACK SYSTEMS ----
  {
    icon: DollarSign,
    tag: "AR Automation",
    category: "Full-Stack Systems",
    highlight: true,
    title: "AI Collection Engine -- Accounts Receivable",
    body: "Production-ready web application automating accounts receivable management with AI-powered reminders, intelligent aging analysis, Stripe payment links, and comprehensive analytics dashboard for cash flow forecasting.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "SQLite",
      "Claude API",
      "Stripe",
      "TypeScript",
    ],
    outcomes: [
      "Automated smart reminders at 7/30/60 days overdue",
      "Real-time DSO tracking & cash flow prediction",
      "High-value invoice alerts (>$10k) auto-escalation",
    ],
  },
  {
    icon: Shield,
    tag: "Compliance SaaS",
    category: "Full-Stack Systems",
    title: "AI Compliance Engine",
    body: "Full-stack open-source compliance management system with multi-channel consent tracking, real-time opt-out processing under 30 seconds, audit evidence generation, GDPR/CCPA/TCPA compliance, and 40+ REST API endpoints.",
    tech: [
      "FastAPI",
      "React",
      "PostgreSQL",
      "TimescaleDB",
      "Redis",
      "Celery",
      "Docker",
    ],
    outcomes: [
      "Real-time opt-out across all channels <30 seconds",
      "One-click audit evidence pack generation",
      "7 background jobs + full webhook system",
    ],
  },
  {
    icon: Package,
    tag: "Procurement AI",
    category: "Full-Stack Systems",
    title: "AI Procurement System",
    body: "Complete procurement automation platform preventing stockouts and overstocks with AI demand forecasting, supplier management, price monitoring, automated purchase order generation, and human approval workflows.",
    tech: [
      "React",
      "Vite",
      "Node.js",
      "SQLite",
      "Claude API",
      "TypeScript",
      "Zustand",
    ],
    outcomes: [
      "AI-powered demand forecasting from sales history",
      "Auto-generated POs with business justification",
      "Human approval gate with approve/reject workflow",
    ],
  },
  {
    icon: Users,
    tag: "HR Automation",
    category: "Full-Stack Systems",
    title: "AI Recruitment Pipeline System",
    body: "Production-ready AI recruitment automation platform with CV parsing, bias-free screening, AI-generated interview questions, automated scheduling with Google Calendar, and real-time analytics -- using Groq Llama 3.1 for fast inference.",
    tech: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Groq API",
      "TypeScript",
      "Nodemailer",
      "Docker",
    ],
    outcomes: [
      "Automated CV parsing and candidate scoring",
      "Bias-free anonymized screening profiles",
      "Automated interview invites with .ics calendar files",
    ],
  },
  {
    icon: FileText,
    tag: "Documentation AI",
    category: "Full-Stack Systems",
    title: "AI Tracking Engine -- SOP Gap Detection",
    body: "Intelligent documentation management system transforming company SOPs into a continuous improvement workflow -- with RAG-powered Q&A, automatic weekly question clustering, gap detection, and Kanban-based update tracking.",
    tech: [
      "React",
      "Node.js",
      "Together AI",
      "Supabase",
      "Qdrant",
      "TypeScript",
      "dnd-kit",
    ],
    outcomes: [
      "Confidence-scored answers from internal docs",
      "Auto-clustering of similar employee questions",
      "Drag-and-drop Kanban for SOP update management",
    ],
  },
  {
    icon: TrendingUp,
    tag: "Finance AI",
    category: "Full-Stack Systems",
    title: "Stock Market AI Assistant",
    body: "Educational AI-powered stock analysis tool combining real-time yfinance data with GPT-4 reasoning -- providing 12+ technical indicators, 25+ fundamental metrics, backtesting with 4 strategies, and educational AI insights.",
    tech: [
      "Python",
      "FastAPI",
      "Streamlit",
      "OpenAI",
      "yfinance",
      "LangChain",
      "Plotly",
    ],
    outcomes: [
      "12+ technical indicators (RSI, MACD, Bollinger Bands)",
      "4 backtesting strategies with Sharpe ratio metrics",
      "GPT-4 educational analysis with risk assessment",
    ],
  },
  {
    icon: Heart,
    tag: "HealthTech",
    category: "Full-Stack Systems",
    title: "E-Health Diabetes Monitoring Platform",
    body: "Comprehensive diabetes management platform built for MNS-UAM Multan connecting patients, doctors, caretakers, and admins -- with real-time glucose monitoring, AI health insights (GMI, TIR, trend forecasting), and role-based dashboards.",
    tech: [
      "Django",
      "JavaScript",
      "MySQL",
      "Chart.js",
      "TailwindCSS",
      "Django REST",
      "JWT",
    ],
    outcomes: [
      "4-role RBAC (Doctor, Patient, Caretaker, Admin)",
      "AI health insights: GMI, TIR, glycemic variability",
      "IoT device integration + real-time WebSocket updates",
    ],
  },
];

const CATEGORIES = [
  "All",
  "AI Agents",
  "ML & Vision",
  "IoT & Embedded",
  "Web & Dashboards",
  "Full-Stack Systems",
];

function PortfolioPage() {
  useReveal();
  const [active, setActive] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const filtered =
    active === "All" ? WORK : WORK.filter((w) => w.category === active);
  const visible = showAll ? filtered : filtered.slice(0, 6);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <PageHero
          eyebrow="My Portfolio"
          title="22+ projects delivered."
          titleGradient="Every one production-ready."
          subtitle="A full-spectrum portfolio spanning AI agents, computer vision, IoT systems, ML pipelines, full-stack applications, and business dashboards -- each one solving a concrete problem in a real context."
        />

        {/* Stats bar */}
        <section className="py-10 border-y border-[#262626] bg-[#0F0F0F]">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 text-center">
              {[
                { n: "22+", label: "Projects Shipped" },
                { n: "5", label: "Categories" },
                { n: "6+", label: "Industries" },
                { n: "100%", label: "Production Grade" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-black text-gradient">
                    {s.n}
                  </p>
                  <p className="mt-1 text-sm text-neutral-300">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters + grid */}
        <section className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-wrap gap-2 mb-10">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActive(cat);
                    setShowAll(false);
                  }}
                  className={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                    active === cat
                      ? "border-[#06B6D4] bg-[#06B6D4]/10 text-[#06B6D4] shadow-[0_0_20px_-8px_rgba(6,182,212,0.5)]"
                      : "border-[#262626] bg-[#0F0F0F] text-neutral-300 hover:border-[#3B82F6]/50 hover:text-white"
                  }`}
                >
                  {cat} (
                  {cat === "All"
                    ? WORK.length
                    : WORK.filter((w) => w.category === cat).length}
                  )
                </button>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((w, i) => (
                <article
                  key={w.title}
                  className={`card-3d group relative overflow-hidden rounded-2xl p-7 transition-all duration-500 hover:-translate-y-2 ${
                    w.highlight
                      ? "border-[#3B82F6]/50"
                      : "hover:border-[#3B82F6]/30"
                  }`}
                  style={{ animationDelay: `${(i % 3) * 50}ms` }}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-25"
                    style={{ background: "var(--gradient-brand)" }}
                  />
                  {w.highlight && (
                    <div className="absolute top-4 right-4 rounded-full bg-gradient-brand px-3 py-1 text-[10px] font-bold text-[#0a0e1a] uppercase tracking-wider">
                      Featured
                    </div>
                  )}
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand shadow-md mb-5">
                    <w.icon className="h-5 w-5 text-[#0a0e1a]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
                    {w.tag}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold leading-snug">
                    {w.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {w.body}
                  </p>
                  <div className="mt-5 space-y-1.5">
                    {w.outcomes.map((o) => (
                      <div
                        key={o}
                        className="flex items-start gap-2 text-xs text-foreground/75"
                      >
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[color:var(--cyan-glow)]" />
                        {o}
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-[#262626] pt-4">
                    {w.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-[#262626] bg-[#0F0F0F] px-2.5 py-1 text-[11px] font-medium text-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            {filtered.length > 6 && (
              <div className="mt-10 flex justify-center">
                <button
                  onClick={() => setShowAll((v) => !v)}
                  className="inline-flex items-center gap-2.5 rounded-full border border-[#262626] bg-[#0F0F0F] px-7 py-3 text-sm font-semibold text-white transition-all hover:border-[#06B6D4] hover:bg-[#06B6D4]/10 hover:text-[#06B6D4]"
                >
                  {showAll
                    ? "Show less"
                    : `Show all ${filtered.length} projects`}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Category highlights */}
        <section className="relative py-16 sm:py-20 overflow-hidden">
          <div aria-hidden className="circuit-bg absolute inset-0 opacity-15" />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="reveal text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow">What I cover</span>
              <h2 className="mt-4 font-display text-3xl font-bold">
                Projects across every layer of the stack.
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {[
                {
                  label: "AI Agents",
                  count: WORK.filter((w) => w.category === "AI Agents").length,
                  color: "text-[#3FD3E8]",
                  icon: Bot,
                },
                {
                  label: "ML & Vision",
                  count: WORK.filter((w) => w.category === "ML & Vision")
                    .length,
                  color: "text-[#4B6EF5]",
                  icon: Brain,
                },
                {
                  label: "IoT & Embedded",
                  count: WORK.filter((w) => w.category === "IoT & Embedded")
                    .length,
                  color: "text-[#6C5CE7]",
                  icon: Cpu,
                },
                {
                  label: "Web & Dashboards",
                  count: WORK.filter((w) => w.category === "Web & Dashboards")
                    .length,
                  color: "text-[#3FD3E8]",
                  icon: Code2,
                },
                {
                  label: "Full-Stack Systems",
                  count: WORK.filter((w) => w.category === "Full-Stack Systems")
                    .length,
                  color: "text-[#4B6EF5]",
                  icon: BarChart3,
                },
              ].map((cat, i) => (
                <div
                  key={cat.label}
                  className="reveal glass-card rounded-2xl p-6 text-center transition-all hover:border-[#3B82F6]/50 cursor-pointer"
                  style={{ transitionDelay: `${i * 60}ms` }}
                  onClick={() => {
                    setActive(cat.label);
                    setShowAll(false);
                    window.scrollTo({ top: 400, behavior: "smooth" });
                  }}
                >
                  <cat.icon className={`mx-auto h-8 w-8 ${cat.color} mb-3`} />
                  <p className="font-display text-2xl font-black text-gradient">
                    {cat.count}
                  </p>
                  <p className="mt-1 text-xs text-neutral-300">
                    {cat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
            <div className="reveal rounded-3xl border border-[#262626] bg-gradient-to-br from-[#3FD3E8]/[0.05] to-[#6C5CE7]/[0.05] p-12">
              <ExternalLink className="mx-auto h-10 w-10 text-[#06B6D4] mb-5" />
              <h2 className="font-display text-3xl font-bold">
                Have a unique project?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                I take on complex builds that don't fit a template. Describe
                your challenge and I'll tell you how I'd approach it.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-base font-bold text-[#0a0e1a] transition-all hover:scale-105"
              >
                Tell me your project <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
