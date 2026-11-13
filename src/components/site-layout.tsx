import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const WHATSAPP_NUMBER = "+92 306 1032323";
export const WHATSAPP_HREF =
  "https://wa.me/923061032323?text=" +
  encodeURIComponent("Hi Zohaib, I'd like to discuss a project with you.");
export const EMAIL = "zohaibsumbal8@gmail.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/zohaib-ahmad-bb4483369";
export const GITHUB_URL = "https://github.com/zohaibsumbal786";

export function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M19.11 4.91A10.05 10.05 0 0 0 12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2.1 22l5.34-1.4a9.86 9.86 0 0 0 4.6 1.17h.01c5.44 0 9.86-4.42 9.86-9.86 0-2.63-1.02-5.1-2.8-6.99zM12.05 20.1h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.17.83.85-3.09-.2-.32a8.18 8.18 0 0 1-1.26-4.34c0-4.52 3.68-8.2 8.2-8.2a8.16 8.16 0 0 1 5.8 2.4 8.14 8.14 0 0 1 2.4 5.8c0 4.52-3.68 8.2-8.2 8.2zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.22-.08-.38-.12-.55.12-.16.25-.62.8-.76.96-.14.16-.28.18-.52.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.28.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.2.88 2.37 1 2.53.12.16 1.73 2.64 4.19 3.71.59.25 1.04.4 1.4.51.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.28z" />
    </svg>
  );
}

export function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:text-[color:var(--cyan-glow)]"
    >
      {children}
    </a>
  );
}

export function ZKMonogram() {
  return (
    <span className="zk-monogram" aria-label="Zohaib Ahmad Khan Sumbal">
      <span className="zk-badge">ZK</span>
      <span className="zk-name">Zohaib</span>
    </span>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [currentPath]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-white/[0.06] bg-[oklch(0.14_0.025_265)]/95 backdrop-blur-xl" : "bg-transparent"}`}
    >
      <div className="mx-auto flex h-[64px] max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link to="/" className="shrink-0">
          <ZKMonogram />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          <Link
            to="/services"
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${currentPath === "/services" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            Skills
          </Link>
          <Link
            to="/portfolio"
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${currentPath === "/portfolio" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            Work
          </Link>
          <Link
            to="/about"
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${currentPath === "/about" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            About
          </Link>
          <Link
            to="/blog"
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${currentPath === "/blog" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            Insights
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg border border-white/[0.08] px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-white/[0.15] hover:text-foreground"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[color:var(--cyan-glow)] px-5 py-2.5 text-sm font-semibold text-[#07111f] transition-all hover:opacity-90"
          >
            Start a Project
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center rounded-lg lg:hidden"
        >
          <div className="flex flex-col gap-[5px]">
            <span
              className={`block h-[1.5px] w-5 bg-foreground/80 transition-all duration-300 ${mobileOpen ? "translate-y-[6.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-foreground/80 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-foreground/80 transition-all duration-300 ${mobileOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/[0.06] bg-[oklch(0.14_0.025_265)] lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 gap-1">
            {[
              { label: "Skills", to: "/services" },
              { label: "Work", to: "/portfolio" },
              { label: "About", to: "/about" },
              { label: "Insights", to: "/blog" },
              { label: "Contact", to: "/contact" },
            ].map((item) => (
              <Link
                key={item.to}
                to={
                  item.to as
                    | "/services"
                    | "/portfolio"
                    | "/about"
                    | "/blog"
                    | "/contact"
                }
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-white/[0.04] hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2 border-t border-white/[0.06] pt-4">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-white/[0.08] px-4 py-3 text-sm font-medium text-muted-foreground"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                WhatsApp
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[color:var(--cyan-glow)] px-5 py-3 text-sm font-semibold text-[#07111f]"
              >
                Start a Project
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ─── Footer with newsletter ─── */
const FOOTER_SERVICES = [
  "AI Agents & Automation",
  "Machine Learning Solutions",
  "Generative AI Integration",
  "Data Science & Analytics",
  "IoT Systems & Embedded AI",
  "Web & Full-Stack Development",
];
const FOOTER_QUICK = [
  { label: "Home", to: "/" },
  { label: "Skills", to: "/services" },
  { label: "My Work", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Insights", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="relative bg-[oklch(0.12_0.025_265)]">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.8fr_1fr_1.2fr_1.4fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3 mb-5">
              <ZKMonogram />
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-xs">
              Data Scientist & AI Engineer from Pakistan. I build agentic AI systems,
              ML pipelines, computer vision solutions, IoT embedded devices, and
              full-stack applications.
            </p>
            <div className="mt-6 flex gap-3">
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

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_QUICK.map((l) => (
                <li key={l.to}>
                  <Link
                    to={
                      l.to as
                        | "/"
                        | "/services"
                        | "/portfolio"
                        | "/about"
                        | "/blog"
                        | "/contact"
                    }
                    className="text-sm text-foreground/65 transition-colors hover:text-[color:var(--cyan-glow)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm text-foreground/65 transition-colors hover:text-[color:var(--cyan-glow)]"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2.5 text-sm text-foreground/65 hover:text-[color:var(--cyan-glow)] transition-colors"
                >
                  <Mail className="h-4 w-4 text-[color:var(--cyan-glow)] shrink-0" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-sm text-foreground/65 hover:text-[color:var(--cyan-glow)] transition-colors"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366] shrink-0" />
                  {WHATSAPP_NUMBER}
                </a>
              </li>
              <li>
                <a
                  href="tel:+923061032323"
                  className="flex items-center gap-2.5 text-sm text-foreground/65 hover:text-[color:var(--cyan-glow)] transition-colors"
                >
                  <Phone className="h-4 w-4 text-[color:var(--cyan-glow)] shrink-0" />
                  {WHATSAPP_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-foreground/65">
                <MapPin className="h-4 w-4 text-[color:var(--cyan-glow)] shrink-0" />
                Muzaffargarh, Pakistan · Remote
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-muted-foreground/50 sm:flex-row lg:px-8">
          <p>© 2026 Zohaib Ahmad Khan Sumbal. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
          <p className="text-gradient font-bold tracking-[0.2em] text-[10px]">
            DATA SCIENTIST · AI ENGINEER · PAKISTAN
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page Hero ─── */
export function PageHero({
  eyebrow,
  title,
  titleGradient,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  titleGradient?: string;
  subtitle: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate flex min-h-[55vh] items-center overflow-hidden pt-20">
      <div className="relative mx-auto w-full max-w-7xl px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="reveal inline-flex items-center gap-2.5 rounded-full border border-[#3FD3E8]/25 bg-[#3FD3E8]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--cyan-glow)] mb-6">
            {eyebrow}
          </div>
          <h1 className="reveal font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {title}
            {titleGradient && (
              <>
                <br />
                <span className="text-gradient">{titleGradient}</span>
              </>
            )}
          </h1>
          <p className="reveal mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
          {children && <div className="reveal mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
