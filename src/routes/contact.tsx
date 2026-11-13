import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState, type FormEvent } from "react";
import {
  useReveal,
  PageHero,
  SiteNav,
  SiteFooter,
  FloatingWhatsApp,
  Social,
  WhatsAppIcon,
  WHATSAPP_HREF,
  WHATSAPP_NUMBER,
  EMAIL,
  LINKEDIN_URL,
  GITHUB_URL,
} from "@/components/site-layout";
import {
  ArrowRight,
  Check,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Github,
  Clock,
  MessageSquare,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Zohaib Ahmad Khan Sumbal" }] }),
  component: ContactPage,
});

const SERVICES_LIST = [
  "AI Agents & Automation",
  "Machine Learning Solutions",
  "Generative AI Integration",
  "Data Science & Analytics",
  "IoT Systems & Embedded AI",
  "Web & Full-Stack Development",
];

const FAQS = [
  {
    q: "How quickly do you respond to project inquiries?",
    a: "I reply to all project inquiries within one business day. For urgent matters, WhatsApp is the fastest channel — I typically respond within a few hours during business hours.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes — I'm a remote-first engineer and work with clients globally. I handle async communication across time zones and schedule calls at mutually convenient times.",
  },
  {
    q: "Do you sign NDAs before project discussions?",
    a: "Absolutely. I sign NDAs before any technical discussion begins. Your ideas, data, and business information stay fully confidential.",
  },
  {
    q: "What happens after I fill out the contact form?",
    a: "I review your project details and reply within one business day with initial questions, a rough scope assessment, and proposed next steps — no sales call required first.",
  },
  {
    q: "Do you take on small projects or only large ones?",
    a: "I work on projects of all sizes — from focused ML models and small automation tools to full product builds. I scope honestly and won't oversell what you don't need.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. Post-launch support, bug fixes, model retraining, and ongoing improvements are part of how I deliver. I don't disappear after shipping.",
  },
];

function ContactPage() {
  useReveal();
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();
    if (!name) next.name = "Your name is required.";
    if (!email) next.email = "Your email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email address.";
    if (!message) next.message = "Tell us about your project.";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      const company = String(fd.get("company") || "").trim();
      const budget = String(fd.get("budget") || "").trim();
      const projectType = String(fd.get("projectType") || "").trim();
      const subject = `Project inquiry from ${name}`;
      const body = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        `Budget: ${budget || "Not provided"}`,
        `Service: ${projectType || "Not provided"}`,
        "",
        message,
      ].join("\n");
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setSubmitted(true);
      formRef.current?.reset();
    }
  }

  const inputCls =
    "w-full rounded-xl border border-[#262626] bg-[#0F0F0F] px-4 py-3.5 text-sm text-white placeholder:text-neutral-400 transition-all focus:border-[#06B6D4]/50 focus:bg-[#0F0F0F] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/20";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <PageHero
          eyebrow="Get in touch"
          title="Tell us what your business"
          titleGradient="needs to move forward."
          subtitle="Share your product idea, workflow, or technical challenge. I'll come back with a clear delivery path, realistic timeline, and the right approach to build it."
        />

        {/* Contact block */}
        <section className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
              {/* Form */}
              <form
                ref={formRef}
                onSubmit={onSubmit}
                noValidate
                className="reveal card-3d rounded-2xl p-8 sm:p-10"
                aria-label="Project inquiry form"
              >
                {submitted && (
                  <div className="mb-7 flex items-start gap-3 rounded-xl border border-[color:var(--cyan-glow)]/30 bg-[color:var(--cyan-glow)]/[0.08] px-5 py-4">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--cyan-glow)]" />
                    <div>
                      <p className="font-semibold text-foreground">
                        Message received!
                      </p>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        I'll be in touch within one business day with a focused
                        response.
                      </p>
                    </div>
                  </div>
                )}
                <h2 className="font-display text-2xl font-bold mb-7">
                  Send me a message
                </h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name *" id="name" error={errors.name}>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className={inputCls}
                      placeholder="Your full name"
                    />
                  </Field>
                  <Field
                    label="Email Address *"
                    id="email"
                    error={errors.email}
                  >
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={inputCls}
                      placeholder="you@company.com"
                    />
                  </Field>
                  <Field label="Company / Startup" id="company">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className={inputCls}
                      placeholder="Optional"
                    />
                  </Field>
                  <Field label="Budget Range" id="budget">
                    <select
                      id="budget"
                      name="budget"
                      defaultValue=""
                      className={inputCls}
                    >
                      <option value="" disabled>
                        Select range…
                      </option>
                      <option value="under-1k">Under $1,000</option>
                      <option value="1k-5k">$1,000 – $5,000</option>
                      <option value="5k-15k">$5,000 – $15,000</option>
                      <option value="15k-50k">$15,000 – $50,000</option>
                      <option value="50k+">$50,000+</option>
                      <option value="tbd">Not sure yet</option>
                    </select>
                  </Field>
                </div>
                <div className="mt-5">
                  <Field label="Service Needed" id="projectType">
                    <select
                      id="projectType"
                      name="projectType"
                      defaultValue=""
                      className={inputCls}
                    >
                      <option value="" disabled>
                        Select a service…
                      </option>
                      {SERVICES_LIST.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                      <option value="Other">Something custom</option>
                    </select>
                  </Field>
                </div>
                <div className="mt-5">
                  <Field
                    label="Project Details *"
                    id="message"
                    error={errors.message}
                  >
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className={inputCls}
                      placeholder="Describe your project, problem, or idea. The more detail you give, the better my first response will be — feel free to include your timeline, existing systems, or specific challenges."
                    />
                  </Field>
                </div>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-bold text-[#0a0e1a] shadow-[0_0_40px_-8px_rgba(63,211,232,0.5)] transition-all hover:scale-105"
                  >
                    Send Message <ArrowRight className="h-4 w-4" />
                  </button>
                  <p className="text-xs text-muted-foreground">
                    I reply within 1 business day. No spam, ever.
                  </p>
                </div>
              </form>

              {/* Sidebar */}
              <aside className="reveal flex flex-col gap-5">
                <div className="card-3d rounded-2xl p-7">
                  <h3 className="font-display text-lg font-bold mb-6">
                    Direct Contact
                  </h3>
                  <ul className="space-y-5">
                    {[
                      {
                        icon: Mail,
                        color: "bg-gradient-brand",
                        label: "Email",
                        value: EMAIL,
                        href: `mailto:${EMAIL}`,
                      },
                      {
                        icon: WhatsAppIcon,
                        color: "bg-[#25D366]/20",
                        label: "WhatsApp",
                        value: WHATSAPP_NUMBER,
                        href: WHATSAPP_HREF,
                        external: true,
                        iconColor: "text-[#25D366]",
                      },
                      {
                        icon: Phone,
                        color: "bg-[#0F0F0F]",
                        label: "Phone",
                        value: WHATSAPP_NUMBER,
                        href: "tel:+923061032323",
                      },
                    ].map((item) => (
                      <li key={item.label} className="flex items-center gap-4">
                        <div
                          className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${item.color}`}
                        >
                          <item.icon
                            className={`h-4 w-4 ${item.iconColor ?? "text-[#0a0e1a]"}`}
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground/60">
                            {item.label}
                          </p>
                          <a
                            href={item.href}
                            {...(item.external
                              ? { target: "_blank", rel: "noreferrer" }
                              : {})}
                            className="text-sm font-medium text-foreground transition-colors hover:text-[color:var(--cyan-glow)] truncate block"
                          >
                            {item.value}
                          </a>
                        </div>
                      </li>
                    ))}
                    <li className="flex items-center gap-4">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#0F0F0F]">
                        <MapPin className="h-4 w-4 text-[#06B6D4]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground/60">
                          Location
                        </p>
                        <p className="text-sm font-medium text-foreground">
                          Remote-first · Available Globally
                        </p>
                      </div>
                    </li>
                  </ul>
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-xl border border-[#25D366]/25 bg-[#25D366]/10 py-3.5 text-sm font-bold text-[#25D366] transition-all hover:bg-[#25D366]/15"
                  >
                    <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp Now
                  </a>
                </div>

                <div className="card-3d rounded-2xl p-7">
                  <h3 className="font-display text-base font-bold mb-4">
                    Follow Me
                  </h3>
                  <div className="flex gap-3">
                    <Social href={GITHUB_URL} label="GitHub">
                      <Github className="h-4 w-4" />
                    </Social>
                    <Social href={LINKEDIN_URL} label="LinkedIn">
                      <Linkedin className="h-4 w-4" />
                    </Social>
                    <Social href={WHATSAPP_HREF} label="WhatsApp">
                      <WhatsAppIcon className="h-4 w-4" />
                    </Social>
                  </div>
                </div>

                <div className="rounded-2xl border border-[color:var(--cyan-glow)]/15 bg-[color:var(--cyan-glow)]/[0.04] p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-5 w-5 text-[color:var(--cyan-glow)]" />
                    <p className="font-semibold text-foreground">
                      Response time
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I respond to all inquiries within{" "}
                    <span className="font-semibold text-foreground">
                      24 hours on business days.
                    </span>{" "}
                    WhatsApp is typically fastest for urgent matters.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* What to expect */}
        <section className="relative py-16 sm:py-20 overflow-hidden">
          <div aria-hidden className="circuit-bg absolute inset-0 opacity-15" />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="reveal text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow">What happens next</span>
              <h2 className="mt-4 font-display text-3xl font-bold">
                From first message to project kickoff.
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  n: "01",
                  icon: MessageSquare,
                  title: "You send a message",
                  body: "Fill out the contact form or WhatsApp us with your project details — as much or as little as you have.",
                },
                {
                  n: "02",
                  icon: Clock,
                  title: "I review within 24h",
                  body: "I review your inquiry carefully and respond with questions, a scope assessment, and proposed next steps.",
                },
                {
                  n: "03",
                  icon: Zap,
                  title: "Discovery call",
                  body: "A focused 30-minute call to align on your goals, constraints, timeline, and technical requirements.",
                },
                {
                  n: "04",
                  icon: ArrowRight,
                  title: "Proposal & kickoff",
                  body: "I send a clear proposal with scope, timeline, and pricing. Once aligned, I start immediately.",
                },
              ].map((step, i) => (
                <div
                  key={step.n}
                  className="reveal card-3d rounded-2xl p-6"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-display text-3xl font-black text-gradient opacity-40">
                      {step.n}
                    </span>
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand">
                      <step.icon className="h-4 w-4 text-[#0a0e1a]" />
                    </div>
                  </div>
                  <h3 className="font-display text-base font-bold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <div className="reveal text-center mb-12">
              <span className="eyebrow">FAQ</span>
              <h2 className="mt-4 font-display text-3xl font-bold">
                Common questions.
              </h2>
            </div>
            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <FaqItem key={faq.q} faq={faq} delay={i * 50} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}

function FaqItem({
  faq,
  delay,
}: {
  faq: { q: string; a: string };
  delay: number;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="reveal card-3d rounded-2xl overflow-hidden"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-[#0F0F0F]"
      >
        <span className="font-semibold text-foreground">{faq.q}</span>
        <span
          className={`text-[color:var(--cyan-glow)] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>
      {open && (
        <div className="border-t border-[#262626] px-6 pb-5 pt-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {faq.a}
          </p>
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground/70"
      >
        {label}
      </label>
      {children}
      {error && (
        <p
          role="alert"
          className="mt-2 text-xs text-red-400 flex items-center gap-1.5"
        >
          ⚠ {error}
        </p>
      )}
    </div>
  );
}
