# Implementation Plan — Solo Portfolio Overhaul

**Owner:** Zohaib Ahmad Khan Sumbal — Data Scientist & AI Engineer  
**Goal:** Transform the agency site ("Vanguard AI", 3-member team) into a world-class solo personal portfolio.  
**Build command:** `vite build` (runs via `npm run build` or `bun run build`)  
**Dev command:** `vite dev`  
**No test runner is configured** — verify each item by running `npm run build` and checking that the build exits with code 0.

---

## What the codebase is right now (ground truth after reading every file)

| File | Problem |
|---|---|
| `src/components/site-layout.tsx` | Contains `VanguardAIMark`, old WhatsApp/email/social constants pointing to Vanguard AI accounts, `WHATSAPP_HREF` with "Hi Vanguard AI" text, footer copyright "© 2026 Vanguard AI", footer tagline "AI SOLUTIONS ENGINEERED FOR TOMORROW", Instagram/TikTok links pointing to `@vanguardai.1` / `@vanguardaillc` |
| `src/routes/index.tsx` | Has a `Team` section with 3 members (ZA, YS, MA), Vanguard-era `INSTAGRAM_URL`/`FACEBOOK_URL`/`TIKTOK_URL` constants re-declared locally, "We"/"Our" agency copy throughout `About`, `Process`, `Portfolio`, `Testimonials`, `Cta`, and `Contact` sections, phone/tel href still pointing to `+923156977277` |
| `src/routes/about.tsx` | Full `TEAM` array with Yasir Saeed and Muneeb Ali, all three rendered as team cards; "Our Mission" section says "We build…"; Timeline final entry says "Full Agency Operations"; mission CTA says "Work with us", "See our work" |
| `src/routes/services.tsx` | `PageHero` subtitle says "one team behind all of them", "We build…", "We take on…"; "Why work with me" section has some solo language but body says "We don't just advise. We build and ship." |
| `src/routes/portfolio.tsx` | `PageHero` says "22+ projects delivered. Every one production-ready." and uses "our portfolio" — acceptable phrasing that can stay or be refined |
| `src/routes/contact.tsx` | Imports `INSTAGRAM_URL`, `TIKTOK_URL`, `FACEBOOK_URL` from `site-layout.tsx` (which still have Vanguard AI values); FAQs and copy say "we"/"our team" throughout |
| `src/routes/blog.tsx` | Testimonials card hard-codes `"Vanguard AI built our AI WhatsApp assistant..."` (in `index.tsx`); blog page copy uses "we" — minor fixes |
| `src/lib/portfolio-config.ts` | Mostly correct — has Zohaib's real data. BUT `portfolio` field points to `zyftora-ai-solutions.pages.dev` (old/wrong). No LinkedIn icon export. No GitHub link used in the nav. |
| `src/styles.css` | Has `.vanguardai-wordmark`, `.vanguardai-bracket`, `.vanguardai-name`, `.prose-vanguardai` classes — must be renamed to personal brand |
| `package.json` | `"name": "vanguardai-website"` — rename to `"zohaib-portfolio"` |
| `public/certificates/` | Has: `internship-certificate.pdf`, `coursera-data-analysis-r.pdf`, `coursera-foundations-data-science.pdf`, `microsoft-discover-data-analysis.pdf`, `microsoft-implement-error-handling-sql.pdf`, `microsoft-intro-analytics-fabric.pdf`, `ssc-certificate.pdf`. The SSC certificate is new and not yet in `PORTFOLIO_CONFIG.certifications`. |

---

## Implementation Plan

- [ ] 1. **Rename CSS wordmark classes from Vanguard to personal brand**

  In `src/styles.css`, rename every CSS class and selector that contains "vanguardai":
  - `.vanguardai-wordmark` → `.brand-wordmark`
  - `.vanguardai-bracket` → `.brand-bracket`
  - `.vanguardai-name` → `.brand-name`
  - `.vanguardai-wordmark:hover .vanguardai-bracket` → `.brand-wordmark:hover .brand-bracket`
  - `.vanguardai-wordmark:hover .vanguardai-bracket:first-child` → `.brand-wordmark:hover .brand-bracket:first-child`
  - `.vanguardai-wordmark:hover .vanguardai-bracket:last-child` → `.brand-wordmark:hover .brand-bracket:last-child`
  - `.prose-vanguardai` → `.prose-zohaib`
  - `.prose-vanguardai h2` → `.prose-zohaib h2`
  - `.prose-vanguardai p` → `.prose-zohaib p`

  Also update the text content inside `.brand-name` display if it currently renders "vanguard ai" literally — the actual text is in the TSX component, not CSS.

  Files: `src/styles.css`  
  Verify: `npm run build` — exits 0.

---

- [ ] 2. **Overhaul `src/components/site-layout.tsx` — constants, wordmark, nav, footer, WhatsApp button**

  **A. Update constants at top of file:**
  ```
  Remove: WHATSAPP_NUMBER = "+92 315 6977277"
  Add:    WHATSAPP_NUMBER = "+92 306 1032323"

  Remove: WHATSAPP_HREF = "https://wa.me/923156977277?text=Hi Vanguard AI..."
  Add:    WHATSAPP_HREF = "https://wa.me/923061032323?text=" + encodeURIComponent("Hi Zohaib! I'd like to discuss a project.")

  Remove: EMAIL = "vanguardai@gmail.com"
  Add:    EMAIL = "zohaibsumbal8@gmail.com"

  Remove: FACEBOOK_URL = (old Vanguard AI FB page URL)
  Keep as-is or replace with PORTFOLIO_CONFIG.linkedin for a LinkedIn link instead.
  Practical decision: replace FACEBOOK_URL with Zohaib's LinkedIn URL
  Add:    FACEBOOK_URL = "https://www.linkedin.com/in/zohaib-ahmad-khan-sumbal"

  Remove: INSTAGRAM_URL = "https://www.instagram.com/vanguardai.1..."
  Replace with a placeholder or omit. Since Zohaib's personal Instagram is not in the brief, 
  set INSTAGRAM_URL = "" and conditionally hide the Instagram social link.

  Remove: TIKTOK_URL = "https://www.tiktok.com/@vanguardaillc"
  Replace with GitHub: GITHUB_URL = "https://github.com/zohaibsumbal786"
  (Remove TIKTOK_URL export, add GITHUB_URL export)
  ```

  **B. Rename `VanguardAIMark` component to `BrandMark` (or `PersonalMark`):**
  - Rename function `VanguardAIMark` → `BrandMark`
  - Change inner HTML from:
    ```
    <span class="vanguardai-wordmark">
      <span class="vanguardai-bracket">&lt;</span>
      <span class="vanguardai-name">vanguard ai</span>
      <span class="vanguardai-bracket">&gt;</span>
    </span>
    ```
    to:
    ```
    <span class="brand-wordmark">
      <span class="brand-bracket">&lt;</span>
      <span class="brand-name">zohaib.ai</span>
      <span class="brand-bracket">&gt;</span>
    </span>
    ```
  - The `aria-label` should become `"Zohaib Ahmad Khan Sumbal"`.

  **C. Update `SiteNav`:**
  - Replace `<VanguardAIMark />` → `<BrandMark />`
  - Change nav label "Start a Project" button to "Hire Me" (solo personal brand language).
  - Remove the WhatsApp button from the desktop nav header; add a GitHub link icon instead:
    ```tsx
    <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub" ...>
      <Github className="h-4 w-4" />
      <span className="hidden sm:inline">GitHub</span>
    </a>
    ```
    Import `Github` from `lucide-react`.
  - In the mobile menu "Start a Project" button, change text to "Hire Me".

  **D. Update footer constants and content:**
  - Replace `FOOTER_QUICK` entry `{ label: "Our Work", to: "/portfolio" }` → `{ label: "My Work", to: "/portfolio" }`
  - Replace `{ label: "About Us", to: "/about" }` → `{ label: "About", to: "/about" }`
  - Footer brand description: replace "AI Solutions Engineered for Tomorrow. We build intelligent agents…" with:
    ```
    Data Scientist & AI Engineer from Pakistan. I build agentic AI systems, ML pipelines, computer vision solutions, IoT embedded devices, and full-stack applications.
    ```
  - Footer social icons: remove Instagram (or point to a real personal one), replace TikTok with GitHub icon using `GITHUB_URL`. Keep WhatsApp. Replace Facebook link with LinkedIn using `FACEBOOK_URL` (which is now LinkedIn).
    Import `Github` and `Linkedin` from `lucide-react`; replace `<Facebook />` with `<Linkedin />`, `<Music2 />` (TikTok) with `<Github />`.
  - Footer copyright: `© 2026 Vanguard AI. All rights reserved.` → `© 2026 Zohaib Ahmad Khan Sumbal. All rights reserved.`
  - Footer tagline: `AI SOLUTIONS ENGINEERED FOR TOMORROW` → `DATA SCIENTIST · AI ENGINEER · PAKISTAN`

  **E. Update `FloatingWhatsApp` aria-label:** "Chat on WhatsApp" is fine — keep.

  Files: `src/components/site-layout.tsx`  
  Verify: `npm run build` — exits 0. Check that TypeScript can resolve `BrandMark` wherever it's imported.

---

- [ ] 3. **Update `src/lib/portfolio-config.ts` — add SSC certificate, fix portfolio URL**

  - Change `portfolio: "https://zyftora-ai-solutions.pages.dev"` to `portfolio: "https://zohaibsumbal786.github.io"` (or leave it if there's no live site — use the GitHub URL as fallback: `"https://github.com/zohaibsumbal786"`).

  - Add the SSC certificate to `certifications` array (it exists in `public/certificates/ssc-certificate.pdf` but is missing from the config):
    ```ts
    {
      title: "Secondary School Certificate (Matriculation)",
      issuer: "Board of Intermediate & Secondary Education",
      date: "2020",
      description: "Secondary School Certificate (SSC/Matric) — foundational academic credential.",
      category: "Education",
      file: "/certificates/ssc-certificate.pdf"
    }
    ```
    Add this entry LAST in the `certifications` array.

  - Update the `stats` array to be more personal and accurate:
    ```ts
    { n: "30+", label: "Projects Completed" },
    { n: "7+", label: "Certifications" },
    { n: "3+", label: "Years of Experience" },
    { n: "3.10", label: "GPA / 4.0" },
    ```

  Files: `src/lib/portfolio-config.ts`  
  Verify: `npm run build` — exits 0.

---

- [ ] 4. **Overhaul `src/routes/about.tsx` — remove team members, rewrite as solo**

  **A. Delete the entire `TEAM` array** (the one with Yasir Saeed and Muneeb Ali, starting at `const TEAM = [`). Keep only Zohaib's data but restructure it into the page directly (not a looped TEAM array).

  **B. Remove the "Team" section entirely** (the `<section>` with eyebrow "The team" and heading "Three experts. One shared standard of quality."). Replace it with a **Solo Profile section** that shows:
  - Zohaib's large initials avatar ("ZA" gradient card, same style as existing team cards)
  - Name: "Zohaib Ahmad Khan Sumbal"
  - Role: "Data Scientist & AI Engineer"
  - Bio from `PORTFOLIO_CONFIG.bio`
  - Skills pulled from `PORTFOLIO_CONFIG.skills` (render each category as a labeled group of pills)
  - GitHub link button: `<a href={PORTFOLIO_CONFIG.github}>View GitHub →</a>`
  - LinkedIn link button: `<a href={PORTFOLIO_CONFIG.linkedin}>LinkedIn →</a>`

  **C. Update "Our Mission" section → "My Mission":**
  - Eyebrow: `"Our Mission"` → `"My Mission"`
  - Heading: `"We build AI that earns its place inside real operations."` → `"I build AI that earns its place inside real operations."`
  - First paragraph: change all "We" → "I", "Our" → "My"
  - Second paragraph: `"Zohaib was built around one principle: every system ship has to work in the real world…"` → `"My work is built around one principle: every system I ship has to work in the real world, not just in a demo. That means proper error handling, monitoring, documentation, and ongoing support as standard — not optional extras."`
  - Checklist items — keep all 6, they are fine.
  - CTA button: `"Work with us"` → `"Work with me"`

  **D. Update "Core Principles" section:**
  - Eyebrow stays: `"Core principles"` is fine.
  - Heading: `"How we think about every project."` → `"How I approach every project."`
  - Each `PILLARS` item: replace `"We design"`, `"We ship"`, `"We don't bolt"` etc. with first-person singular: `"I design"`, `"I ship"`, `"I don't bolt"`.

  **E. Update "Timeline" section:**
  - Eyebrow: `"Our journey"` → `"My journey"`
  - Heading: `"From first project to full agency."` → `"From first project to AI engineer."`
  - Timeline final entry (year 2026): change from `"Full Agency Operations"` / `"Operating as a full AI & software engineering agency..."` to: `title: "AI Engineer in Full Stride"`, `body: "Building and shipping production AI systems across agentic workflows, ML pipelines, computer vision, IoT, and full-stack applications. 30+ projects. Open to freelance and collaboration."`

  **F. Update "Tech stack" section:**
  - No text changes needed — the grid of tech items is fine as-is.

  **G. Update "Certifications" section:**
  - The section already pulls from `PORTFOLIO_CONFIG.certifications` correctly.
  - Add a handler for `category: "Education"` in the `categoryIcon` and `categoryColor` maps:
    ```ts
    "Education": GraduationCap   // color: "text-[#3FD3E8]"
    ```
    so the new SSC certificate renders with the GraduationCap icon.

  **H. Update CTA at bottom:**
  - Heading: keep `"Ready to work together?"` — fine.
  - Button `"See our work"` → `"See my work"`

  Files: `src/routes/about.tsx`  
  Verify: `npm run build` — exits 0 with no TypeScript errors.

---

- [ ] 5. **Overhaul `src/routes/index.tsx` — remove Team section, fix all agency copy, fix constants**

  **A. Fix locally-declared social constants at top of `index.tsx`:**
  - Remove: `const INSTAGRAM_URL = "https://www.instagram.com/vanguardai.1..."` — replace with import or delete (the Contact section in `index.tsx` doesn't render social icons, so just delete it).
  - Remove: `const FACEBOOK_URL = ...` (old Vanguard FB) — delete.
  - Remove: `const TIKTOK_URL = "https://www.tiktok.com/@vanguardaillc"` — delete.
  - The `GITHUB_URL` is already declared using `PORTFOLIO_CONFIG.github` — keep it.
  - `WHATSAPP_HREF` is already re-computed from `PORTFOLIO_CONFIG.whatsapp` with solo text — keep it.

  **B. Delete the `Team` function and the `TEAM` constant array** (lines containing `const TEAM = [` with Yasir Saeed, Muneeb Ali, and the `function Team()` section that loops over them and renders team cards).
  - Also remove `<Team />` from the `IndexPage` component's JSX return.

  **C. Update the `About` section (in `index.tsx`):**
  - Eyebrow: `"About Me"` is already correct — keep.
  - Heading: `"A deliberate team building production-grade AI."` → `"A deliberate engineer building production-grade AI."`
  - Paragraph: change "We combine deep expertise…" → "I combine deep expertise in AI agents, computer vision, IoT, and full-stack development with a startup's speed and a craftsman's attention to detail. I don't do proof-of-concepts — I build and ship software that runs inside real businesses."
  - Link button: `"Learn more about us"` → `"Learn more about me"`
  - Each PILLARS item body: replace "We design / We ship / We own / We don't disappear" → "I design / I ship / I own / I don't disappear".

  **D. Update the `Services` section:**
  - Heading: `"Everything you need to ship intelligent software."` is fine.
  - Paragraph: `"Six deep capabilities. One team behind all of them. Every engagement ends in production code -- not a presentation."` → `"Six deep capabilities. Every engagement ends in production code — not a presentation."`
  - Bottom CTA box paragraph: `"We take on complex builds that don't fit a template."` → `"I take on complex builds that don't fit a template."`

  **E. Update the `Portfolio` section:**
  - Heading: `"22+ projects. Every one production-ready."` is fine — keep.
  - Paragraph: `"A snapshot of what we've built"` → `"A snapshot of what I've built"`
  - Button text: `"View all 22+ projects"` and `"See all 22+ projects"` — keep as-is.

  **F. Update the `Testimonials` section:**
  - The first testimonial quote hard-codes `"Vanguard AI built our AI WhatsApp assistant fast."` → change to `"Zohaib built our AI WhatsApp assistant fast."`
  - Stats bar at bottom: `{ n: "22+", label: "Projects shipped" }` — keep all four stats, they are fine.
  - Heading: `"What clients say."` is fine.

  **G. Update the `Cta` (CTA Banner) section:**
  - Heading: `"Let's build something that actually ships."` is fine.
  - Paragraph: `"No retainer lock-ins. No bloated teams. Just focused engineers who will build your AI system…"` → `"No retainer lock-ins. Just a focused engineer who will build your AI system, deploy it to production, and make sure it works."`

  **H. Update the `Contact` section:**
  - Heading: `"Let's talk about your project."` is fine.
  - Paragraph: `"Describe what you're building. We'll respond with a focused plan…"` → `"Describe what you're building. I'll respond with a focused plan within one business day."`
  - After form submits, success message: `"Message received -- we'll be in touch…"` → `"Message received — I'll be in touch within one business day."`

  **I. Update the `Process` section:**
  - Heading: `"From first call to deployed system."` is fine.
  - Paragraph: `"A transparent, structured process that removes uncertainty at every stage."` is fine.
  - Step bodies: `"We audit…"` → `"I audit…"`, `"We design…"` → `"I design…"`, `"Rigorous engineering…"` stays, `"We launch…"` → `"I launch…"`
  - Bottom strip: `"You always talk to the engineer who built it -- not a project manager."` is already good (first person equivalent). Keep.

  **J. Remove the `RoiCalculator` section and `IndustrySolutions` section** — these are agency sales tools with "we" framing. They make no sense on a solo personal portfolio. Remove:
  - `function RoiCalculator()` and `const INDUSTRIES`
  - `function IndustrySolutions()`
  - Remove `<RoiCalculator />` and `<IndustrySolutions />` from the `IndexPage` JSX.
  - The `TrustBar` can stay (it's a scrolling marquee of tech skills — neutral and impressive).

  Files: `src/routes/index.tsx`  
  Verify: `npm run build` — exits 0 with no TypeScript errors about undefined TEAM, INDUSTRIES, unused imports.

---

- [ ] 6. **Overhaul `src/routes/services.tsx` — solo language**

  **A. Update `PageHero`:**
  - `subtitle`: `"From product strategy and UX to APIs, AI systems, dashboards, and deployment — we build the software your business needs, with the engineers who wrote it on every call."` → `"From product strategy and UX to APIs, AI systems, dashboards, and deployment — I build software that solves real problems, with you on every call."`

  **B. Each service card `body` text:** Do a pass and change `"We engineer"` → `"I engineer"`, `"We build"` → `"I build"`, `"We integrate"` → `"I integrate"`, `"We turn"` → `"I turn"`, `"We design"` → `"I design"`. There are 6 service objects — update all their `body` strings.

  **C. "Why work with me" section:**
  - Heading: `"We don't just advise. We build and ship."` → `"I don't just advise. I build and ship."`
  - The 8 cards are already solo-friendly ("You always talk to the engineer…", "Your data never leaves…"). Keep them as-is.

  **D. CTA section:**
  - Paragraph: `"Tell us your challenge. We'll respond with a focused plan within one business day."` → `"Tell me your challenge. I'll respond with a focused plan within one business day."`

  Files: `src/routes/services.tsx`  
  Verify: `npm run build` — exits 0.

---

- [ ] 7. **Overhaul `src/routes/contact.tsx` — solo language, fix social imports**

  **A. The contact page imports `INSTAGRAM_URL`, `TIKTOK_URL`, `FACEBOOK_URL` from `site-layout.tsx`.**
  After step 2, `site-layout.tsx` will export `GITHUB_URL` instead of `TIKTOK_URL`. Update the imports:
  - Remove: `INSTAGRAM_URL`, `TIKTOK_URL` from the import
  - Add: `GITHUB_URL` to the import (exported in step 2)
  - Keep: `FACEBOOK_URL` (now LinkedIn URL), `INSTAGRAM_URL` can be removed if empty.

  **B. "Follow Me" social block in the sidebar:**
  - Remove `<Social href={INSTAGRAM_URL}>` if `INSTAGRAM_URL` is empty/removed.
  - Replace `<Social href={TIKTOK_URL}><Music2/></Social>` with `<Social href={GITHUB_URL}><Github/></Social>`.
  - Replace `<Social href={FACEBOOK_URL}><Facebook/></Social>` with `<Social href={FACEBOOK_URL}><Linkedin/></Social>` (since `FACEBOOK_URL` is now LinkedIn).
  - Import `Github` and `Linkedin` from `lucide-react`; remove `Facebook`, `Music2` imports if no longer used elsewhere.

  **C. `PageHero` subtitle:** `"Share your product idea, workflow, or technical challenge. We will come back with a clear delivery path…"` → `"Share your product idea, workflow, or technical challenge. I'll come back with a clear delivery path, realistic timeline, and the right approach to build it."`

  **D. Form heading:** `"Send us a message"` → `"Send me a message"`

  **E. Form success message:** `"We'll be in touch within one business day with a focused response."` → `"I'll be in touch within one business day with a focused response."`

  **F. FAQs — update "we" language:**
  - "We reply to all project inquiries within one business day." → "I reply to all project inquiries within one business day."
  - "We're a remote-first team…" → "I'm a remote-first engineer…"
  - "We sign NDAs before any technical discussion begins." → "I sign NDAs before any technical discussion begins."
  - "We review your project details and reply within one business day…" → "I review your project details and reply within one business day…"
  - "We work on projects of all sizes…" → "I work on projects of all sizes…"
  - "Post-launch support, bug fixes, model retraining… are part of how we deliver." → "Post-launch support, bug fixes, model retraining… are part of how I deliver."

  **G. "What happens next" steps:**
  - Step 02: "We review within 24h" body: `"We review your inquiry carefully…"` → `"I review your inquiry carefully…"`
  - Step 04: `"We send a clear proposal…"` → `"I send a clear proposal…"`

  **H. Response time box:** `"We respond to all inquiries within 24 hours on business days."` → `"I respond to all inquiries within 24 hours on business days."`

  Files: `src/routes/contact.tsx`  
  Verify: `npm run build` — exits 0.

---

- [ ] 8. **Update `src/routes/portfolio.tsx` — solo language**

  **A. `PageHero`:**
  - eyebrow: `"Our Portfolio"` → `"My Portfolio"`
  - title: `"22+ projects delivered."` is fine — keep.
  - subtitle: `"A full-spectrum portfolio spanning AI agents, computer vision, IoT systems, ML pipelines, full-stack applications, and business dashboards -- each one solving a concrete problem in a real context."` — keep as-is (already neutral).

  **B. Bottom CTA section:**
  - `"We take on complex builds that don't fit a template. Describe your challenge and we'll tell you how we'd approach it."` → `"I take on complex builds that don't fit a template. Describe your challenge and I'll tell you how I'd approach it."`

  Files: `src/routes/portfolio.tsx`  
  Verify: `npm run build` — exits 0.

---

- [ ] 9. **Update `src/routes/blog.tsx` — solo language in CTA**

  **A. Bottom CTA section:**
  - Heading: `"Have a hard technical problem?"` is fine — keep.
  - Paragraph: `"Bring us the messy version. We will help turn the data, models, and integrations into a system your team can actually run."` → `"Bring me the messy version. I'll help turn the data, models, and integrations into a system your team can actually run."`

  Files: `src/routes/blog.tsx`  
  Verify: `npm run build` — exits 0.

---

- [ ] 10. **Update `package.json` — rename project**

  - Change `"name": "vanguardai-website"` → `"name": "zohaib-portfolio"`

  Files: `package.json`  
  Verify: `npm run build` — exits 0.

---

- [ ] 11. **Final build, scan, and cleanup**

  Run a global search for any remaining "vanguard" (case-insensitive) strings across all `.tsx`, `.ts`, and `.css` files in `src/`. Fix any that were missed. Specific known patterns to catch:
  - `prose-vanguardai` class usage in any route file (check if any route imports or uses it)
  - Any remaining `aria-label="Vanguard AI"` strings
  - Any `tel:+923156977277` links (the old Vanguard number) — must all become `tel:+923061032323`
  - Any `href="https://wa.me/923156977277"` links — must all become `https://wa.me/923061032323`
  - Any `"vanguardai@gmail.com"` email — must all become `"zohaibsumbal8@gmail.com"`

  After fixes, run `npm run build` one final time. Confirm the build output in `dist/` exists and contains `index.html`.

  Files: any remaining files in `src/`  
  Verify: `npm run build` — exits 0. Run `findstr /si "vanguard" src\*.tsx src\*.ts src\styles.css` — zero matches.

---

## Summary of all changes per file

| File | Net change |
|---|---|
| `src/styles.css` | Rename 9 CSS class names from `vanguardai-*` / `prose-vanguardai` to `brand-*` / `prose-zohaib` |
| `src/components/site-layout.tsx` | New constants (phone, email, WhatsApp, social URLs); rename component; update nav (GitHub link, "Hire Me"); overhaul footer (new description, correct socials, copyright, tagline); update class names to `brand-*` |
| `src/lib/portfolio-config.ts` | Fix `portfolio` URL; add SSC certificate; update stats |
| `src/routes/about.tsx` | Delete `TEAM` array (Yasir + Muneeb); replace Team section with solo profile card; convert all "We/Our" to "I/My"; fix timeline; add Education category icon mapping |
| `src/routes/index.tsx` | Remove `TEAM` constant + `Team` function + `<Team />` JSX; remove `IndustrySolutions` + `RoiCalculator`; remove old Vanguard social constants; convert all "we/our" copy to "I/my"; fix testimonial quote |
| `src/routes/services.tsx` | Convert all service body copy + section headings + CTA from "we" to "I"; fix PageHero subtitle |
| `src/routes/contact.tsx` | Fix imports (GitHub replaces TikTok); update social block; convert all "we/our" copy to "I/my" throughout |
| `src/routes/portfolio.tsx` | Update eyebrow + CTA paragraph to solo language |
| `src/routes/blog.tsx` | Fix bottom CTA paragraph to solo language |
| `package.json` | Rename `"name"` field |

## What NOT to change
- The dark premium design system, color palette, animation utilities, and visual layout — keep everything.
- The `PORTFOLIO_CONFIG` skills, projects, education, and certifications data is already Zohaib's real data — keep.
- The `FEATURED_PROJECTS` and `PROJECT_CATEGORIES` in `portfolio-config.ts` — keep.
- The `SERVICES` data in `services.tsx` and `index.tsx` — keep the service names and bullet points, only fix "we/our" language in body text.
- The `blog.tsx` article data — keep all 24 articles.
- The `public/certificates/` files — already correct, no changes needed.
- The `FloatingWhatsApp` component — keep, just ensure it uses the updated `WHATSAPP_HREF` constant.
