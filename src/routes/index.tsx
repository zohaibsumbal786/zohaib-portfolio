import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { PORTFOLIO_CONFIG, FEATURED_PROJECTS } from "@/lib/portfolio-config";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight,
  Code2,
  Brain,
  Sparkles,
  Database,
  Network,
  Cpu,
  Terminal,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${PORTFOLIO_CONFIG.name} - ${PORTFOLIO_CONFIG.title}` },
      { name: "description", content: PORTFOLIO_CONFIG.bio },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [activeProject, setActiveProject] = useState(0);
  const [activeSkillCategory, setActiveSkillCategory] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#07111f] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/[0.08] bg-[#07111f]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="font-display text-xl font-bold">
            <span className="text-[color:var(--cyan-glow)]">&lt;</span>
            {PORTFOLIO_CONFIG.name.split(' ')[0]}
            <span className="text-[color:var(--cyan-glow)]">/&gt;</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#about" className="text-sm font-medium transition-colors hover:text-[color:var(--cyan-glow)]">About</a>
            <a href="#skills" className="text-sm font-medium transition-colors hover:text-[color:var(--cyan-glow)]">Skills</a>
            <a href="#projects" className="text-sm font-medium transition-colors hover:text-[color:var(--cyan-glow)]">Projects</a>
            <a href="#education" className="text-sm font-medium transition-colors hover:text-[color:var(--cyan-glow)]">Education</a>
            <a href="#contact" className="rounded-full bg-gradient-brand px-6 py-2 text-sm font-semibold text-[#0a0e1a] transition-transform hover:scale-105">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden pt-16">
        <TechField />
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-center px-6 py-20 lg:px-8">
          <div className="reveal">
            <div className="inline-flex items-center gap-2.5 border-l-2 border-[#3FD3E8] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--cyan-glow)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--cyan-glow)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--cyan-glow)]" />
              </span>
              Available for Opportunities
            </div>
          </div>

          <h1 className="reveal mt-8 font-display text-6xl font-bold leading-tight tracking-tight lg:text-8xl">
            {PORTFOLIO_CONFIG.name.split(' ').slice(0, 2).join(' ')}
            <br />
            <span className="text-gradient">
              {PORTFOLIO_CONFIG.name.split(' ').slice(2).join(' ')}
            </span>
          </h1>

          <p className="reveal mt-6 text-2xl font-semibold text-[color:var(--cyan-glow)] lg:text-3xl">
            {PORTFOLIO_CONFIG.title}
          </p>

          <p className="reveal mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 lg:text-xl">
            {PORTFOLIO_CONFIG.bio}
          </p>

          <div className="reveal mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-brand px-8 py-4 text-base font-semibold text-[#0a0e1a] shadow-[0_0_50px_-10px_rgba(63,211,232,0.7)] transition-all hover:scale-105"
            >
              View My Work
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-base font-semibold transition-all hover:border-white/30 hover:bg-white/[0.06]"
            >
              Get In Touch
            </a>
          </div>

          <div className="reveal mt-16 flex flex-wrap items-center gap-4">
            <a href={PORTFOLIO_CONFIG.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[color:var(--cyan-glow)]">
              <Github className="h-5 w-5" />
              GitHub
            </a>
            <a href={`mailto:${PORTFOLIO_CONFIG.email}`} className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[color:var(--cyan-glow)]">
              <Mail className="h-5 w-5" />
              Email
            </a>
            <a href={`tel:${PORTFOLIO_CONFIG.phone}`} className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[color:var(--cyan-glow)]">
              <Phone className="h-5 w-5" />
              Phone
            </a>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-5 w-5" />
              {PORTFOLIO_CONFIG.location}
            </span>
          </div>

          {/* Stats */}
          <div className="reveal mt-20 grid grid-cols-2 gap-px overflow-hidden border border-white/[0.14] bg-white/[0.08] sm:grid-cols-4">
            {PORTFOLIO_CONFIG.stats.map((stat, idx) => (
              <div key={idx} className="bg-[#07111f] p-6">
                <div className="font-display text-4xl font-bold text-foreground">
                  {stat.number}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative border-t border-white/[0.08] bg-[oklch(0.14_0.025_265)] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="reveal text-center">
            <span className="eyebrow">About Me</span>
            <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
              Transforming Data Into{" "}
              <span className="text-gradient">Intelligent Solutions</span>
            </h2>
          </div>

          <div className="reveal mt-16 grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold">My Journey</h3>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  I'm a <span className="font-semibold text-foreground">BS Data Science graduate</span> from{" "}
                  {PORTFOLIO_CONFIG.education[0].institution} with a strong foundation in
                  artificial intelligence, machine learning, and data engineering.
                </p>
                <p>
                  My expertise spans across <span className="font-semibold text-foreground">Generative AI</span>,{" "}
                  <span className="font-semibold text-foreground">Agentic AI Systems</span>,{" "}
                  <span className="font-semibold text-foreground">Deep Learning</span>, and{" "}
                  <span className="font-semibold text-foreground">Computer Vision</span>. I specialize in
                  building production-ready AI applications that solve real-world business problems.
                </p>
                <p>
                  I've worked on cutting-edge projects involving{" "}
                  <span className="font-semibold text-foreground">multi-agent orchestration</span>,{" "}
                  <span className="font-semibold text-foreground">RAG systems</span>,{" "}
                  <span className="font-semibold text-foreground">IoT-ML integration</span>, and{" "}
                  <span className="font-semibold text-foreground">enterprise AI platforms</span>.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-white/[0.08] bg-[oklch(0.19_0.038_265)] p-8">
                <h3 className="text-xl font-bold">Research & Publications</h3>
                <div className="mt-4 space-y-3 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <Sparkles className="mt-1 h-5 w-5 shrink-0 text-[color:var(--cyan-glow)]" />
                    <div>
                      <p className="font-semibold text-foreground">IoT-Based Non-Invasive Glucose Monitoring</p>
                      <p className="text-sm">Multi-parameter biometric health kiosk with 87% accuracy using ML</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-[oklch(0.19_0.038_265)] p-8">
                <h3 className="text-xl font-bold">Core Competencies</h3>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {["AI Engineering", "Machine Learning", "Deep Learning", "NLP & Computer Vision", "Agentic AI", "RAG Systems", "LLM Integration", "Full-Stack Development"].map((skill) => (
                    <div key={skill} className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm">
                      <Zap className="h-4 w-4 text-[color:var(--cyan-glow)]" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative border-t border-white/[0.08] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="reveal text-center">
            <span className="eyebrow">Technical Expertise</span>
            <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
          </div>

          <div className="reveal mt-16">
            <div className="mb-8 flex flex-wrap justify-center gap-3">
              {Object.keys(PORTFOLIO_CONFIG.skills).map((category, idx) => (
                <button
                  key={category}
                  onClick={() => setActiveSkillCategory(idx)}
                  className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                    activeSkillCategory === idx
                      ? "bg-gradient-brand text-[#0a0e1a]"
                      : "border border-white/15 text-foreground hover:border-white/30"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {PORTFOLIO_CONFIG.skills[Object.keys(PORTFOLIO_CONFIG.skills)[activeSkillCategory]].map((skill) => (
                <div
                  key={skill}
                  className="group flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[oklch(0.19_0.038_265)] p-4 transition-all hover:border-[color:var(--cyan-glow)]/40 hover:bg-[oklch(0.2_0.038_265)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-brand/10">
                    <Code2 className="h-5 w-5 text-[color:var(--cyan-glow)]" />
                  </div>
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="relative border-t border-white/[0.08] bg-[oklch(0.14_0.025_265)] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="reveal text-center">
            <span className="eyebrow">Portfolio</span>
            <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Explore my AI/ML projects spanning generative AI, multi-agent systems, computer vision, and more
            </p>
          </div>

          <div className="reveal mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {FEATURED_PROJECTS.filter(p => p.featured).map((project, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[oklch(0.19_0.038_265)] p-8 transition-all hover:border-[color:var(--cyan-glow)]/40"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="rounded-lg bg-gradient-brand/10 p-3">
                    <Brain className="h-6 w-6 text-[color:var(--cyan-glow)]" />
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-[color:var(--cyan-glow)]"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>

                <h3 className="mb-3 text-xl font-bold group-hover:text-[color:var(--cyan-glow)]">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[color:var(--cyan-glow)]/10 px-3 py-1 text-xs font-medium text-[color:var(--cyan-glow)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-brand opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>

          <div className="reveal mt-12 text-center">
            <a
              href={PORTFOLIO_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[color:var(--cyan-glow)] transition-colors hover:underline"
            >
              View all {FEATURED_PROJECTS.length}+ projects on GitHub
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="relative border-t border-white/[0.08] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="reveal text-center">
            <span className="eyebrow">Background</span>
            <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
              Education & <span className="text-gradient">Certifications</span>
            </h2>
          </div>

          <div className="reveal mt-16 grid gap-12 lg:grid-cols-2">
            {/* Education */}
            <div>
              <h3 className="mb-6 text-2xl font-bold">Education</h3>
              <div className="space-y-6">
                {PORTFOLIO_CONFIG.education.map((edu, idx) => (
                  <div key={idx} className="rounded-2xl border border-white/[0.08] bg-[oklch(0.19_0.038_265)] p-6">
                    <div className="mb-2 text-sm font-semibold text-[color:var(--cyan-glow)]">
                      {edu.period}
                    </div>
                    <h4 className="text-xl font-bold">{edu.degree}</h4>
                    <p className="mt-1 text-muted-foreground">{edu.institution}</p>
                    {edu.gpa && (
                      <p className="mt-2 text-sm font-semibold">
                        GPA: {edu.gpa}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="mb-6 text-2xl font-bold">Certifications</h3>
              <div className="space-y-4">
                {PORTFOLIO_CONFIG.certifications.map((cert, idx) => (
                  <div key={idx} className="rounded-xl border border-white/[0.08] bg-[oklch(0.19_0.038_265)] p-5">
                    <h4 className="font-bold">{cert.title}</h4>
                    <p className="mt-1 text-sm text-[color:var(--cyan-glow)]">
                      {cert.issuer}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative border-t border-white/[0.08] bg-[oklch(0.14_0.025_265)] py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="reveal text-center">
            <span className="eyebrow">Get In Touch</span>
            <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
              Let's Work <span className="text-gradient">Together</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              I'm currently open to new opportunities in AI/ML engineering, data science, and full-stack development roles
            </p>
          </div>

          <div className="reveal mt-16 grid gap-6 sm:grid-cols-2">
            <a
              href={`mailto:${PORTFOLIO_CONFIG.email}`}
              className="group rounded-2xl border border-white/[0.08] bg-[oklch(0.19_0.038_265)] p-8 transition-all hover:border-[color:var(--cyan-glow)]/40"
            >
              <Mail className="h-8 w-8 text-[color:var(--cyan-glow)]" />
              <h3 className="mt-4 text-xl font-bold">Email</h3>
              <p className="mt-2 text-muted-foreground group-hover:text-[color:var(--cyan-glow)]">
                {PORTFOLIO_CONFIG.email}
              </p>
            </a>

            <a
              href={`tel:${PORTFOLIO_CONFIG.phone}`}
              className="group rounded-2xl border border-white/[0.08] bg-[oklch(0.19_0.038_265)] p-8 transition-all hover:border-[color:var(--cyan-glow)]/40"
            >
              <Phone className="h-8 w-8 text-[color:var(--cyan-glow)]" />
              <h3 className="mt-4 text-xl font-bold">Phone</h3>
              <p className="mt-2 text-muted-foreground group-hover:text-[color:var(--cyan-glow)]">
                {PORTFOLIO_CONFIG.phone}
              </p>
            </a>
          </div>

          <div className="reveal mt-12 text-center">
            <a
              href={PORTFOLIO_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-brand px-8 py-4 font-semibold text-[#0a0e1a] shadow-[0_0_50px_-10px_rgba(63,211,232,0.7)] transition-all hover:scale-105"
            >
              <Github className="h-5 w-5" />
              View My GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2026 {PORTFOLIO_CONFIG.name}. Built with React, TypeScript, and TanStack Router.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Designed and developed with passion for AI and innovation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// 3D Tech Field Background Component
function TechField() {
  return (
    <div
      aria-hidden
      className="tech-field pointer-events-none absolute inset-0 overflow-hidden opacity-30"
    >
      <div className="tech-grid absolute inset-0" />
      <div className="tech-beam tech-beam-one" />
      <div className="tech-beam tech-beam-two" />
      <div className="tech-ring tech-ring-one" />
      <div className="tech-ring tech-ring-two" />
      {Array.from({ length: 20 }, (_, index) => (
        <span
          key={index}
          className="tech-node"
          style={{
            left: `${8 + ((index * 29) % 88)}%`,
            top: `${12 + ((index * 47) % 76)}%`,
            animationDelay: `${(index % 7) * 0.7}s`,
          }}
        />
      ))}
    </div>
  );
}
