import {
  createFileRoute,
  Link,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import {
  useReveal,
  PageHero,
  SiteNav,
  SiteFooter,
  FloatingWhatsApp,
} from "@/components/site-layout";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Bot,
  Code2,
  Database,
  Eye,
  FlaskConical,
  Gauge,
  Layers,
  Search,
  Shield,
  Sparkles,
  Wifi,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights — Zohaib Ahmad Khan Sumbal" },
      {
        name: "description",
        content:
          "Practical insights on AI agents, RAG, machine learning, computer vision, Python, analytics, IoT, and production software engineering.",
      },
    ],
  }),
  component: BlogPage,
});

type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  icon: typeof Bot;
  image: string;
  sections: string[];
  takeaways: string[];
};

const ARTICLE_SEEDS = [
  {
    title: "Designing AI Agents That Actually Complete Business Workflows",
    excerpt:
      "A practical framework for moving from chat interfaces to reliable agents with tools, state, guardrails, and human handoffs.",
    category: "AI Engineering",
    date: "Sep 04, 2026",
    readTime: "8 min",
    icon: Bot,
  },
  {
    title: "RAG Systems: The Production Checklist Teams Miss",
    excerpt:
      "Retrieval quality, document boundaries, metadata, evaluation, and access control are what make a knowledge assistant dependable.",
    category: "Generative AI",
    date: "Aug 28, 2026",
    readTime: "7 min",
    icon: Sparkles,
  },
  {
    title: "LangGraph vs. Simple Chains: Choosing the Right Agent Architecture",
    excerpt:
      "When a graph of stateful steps is worth the complexity, and when a focused chain is the better engineering decision.",
    category: "AI Engineering",
    date: "Aug 21, 2026",
    readTime: "6 min",
    icon: Layers,
  },
  {
    title: "CrewAI, LangChain, and Multi-Agent Systems in the Real World",
    excerpt:
      "How to divide responsibilities between agents without creating an expensive swarm that is impossible to observe.",
    category: "AI Engineering",
    date: "Aug 14, 2026",
    readTime: "9 min",
    icon: Brain,
  },
  {
    title: "Python Project Structure for Machine Learning Teams",
    excerpt:
      "A maintainable layout for data, training, evaluation, inference, configuration, and reusable Python services.",
    category: "Python",
    date: "Aug 07, 2026",
    readTime: "7 min",
    icon: Code2,
  },
  {
    title: "FastAPI Patterns for Serving ML Models",
    excerpt:
      "Build predictable inference APIs with validation, versioning, health checks, observability, and clear failure behavior.",
    category: "Python",
    date: "Jul 31, 2026",
    readTime: "8 min",
    icon: Gauge,
  },
  {
    title: "Pandas Workflows for Trustworthy Business Analysis",
    excerpt:
      "The habits that make cleaning, joining, aggregating, and validating business datasets repeatable instead of fragile.",
    category: "Data Analytics",
    date: "Jul 24, 2026",
    readTime: "6 min",
    icon: BarChart3,
  },
  {
    title: "From Raw Tables to an Executive KPI System",
    excerpt:
      "How to define metrics, model dimensions, document business logic, and design dashboards people can act on.",
    category: "Data Analytics",
    date: "Jul 17, 2026",
    readTime: "8 min",
    icon: Database,
  },
  {
    title: "Power BI Dashboards That Drive Better Decisions",
    excerpt:
      "A practical guide to hierarchy, drill-downs, filter design, and the difference between a dashboard and a report.",
    category: "Data Analytics",
    date: "Jul 10, 2026",
    readTime: "5 min",
    icon: BarChart3,
  },
  {
    title: "Customer Churn Modeling: Beyond the Accuracy Score",
    excerpt:
      "Connect churn predictions to retention actions, calibration, segment economics, and measurable business outcomes.",
    category: "Machine Learning",
    date: "Jul 03, 2026",
    readTime: "7 min",
    icon: Brain,
  },
  {
    title: "Demand Forecasting for Inventory and Operations",
    excerpt:
      "What to measure before modeling, how to handle seasonality, and how to turn forecasts into planning decisions.",
    category: "Machine Learning",
    date: "Jun 26, 2026",
    readTime: "8 min",
    icon: Gauge,
  },
  {
    title: "Computer Vision Pipelines from Image to Decision",
    excerpt:
      "The stages behind dependable vision systems: data quality, annotation, inference, evaluation, and deployment constraints.",
    category: "Computer Vision",
    date: "Jun 19, 2026",
    readTime: "8 min",
    icon: Eye,
  },
  {
    title: "YOLO Object Detection: What Matters After the Demo",
    excerpt:
      "Latency, confidence thresholds, class imbalance, edge deployment, and monitoring for a useful detection product.",
    category: "Computer Vision",
    date: "Jun 12, 2026",
    readTime: "7 min",
    icon: Eye,
  },
  {
    title: "Deploying TensorFlow Lite on Raspberry Pi",
    excerpt:
      "A field guide to model conversion, input pipelines, latency profiling, and reliable edge inference.",
    category: "Computer Vision",
    date: "Jun 05, 2026",
    readTime: "6 min",
    icon: FlaskConical,
  },
  {
    title: "OpenCV Techniques for Practical Inspection Systems",
    excerpt:
      "Use image preprocessing, geometry, contours, and calibration to solve focused visual inspection problems.",
    category: "Computer Vision",
    date: "May 29, 2026",
    readTime: "6 min",
    icon: Eye,
  },
  {
    title: "IoT Data Pipelines: Sensors, MQTT, and Cloud Dashboards",
    excerpt:
      "A clean architecture for moving sensor readings from constrained devices to useful operational views.",
    category: "IoT & Embedded",
    date: "May 22, 2026",
    readTime: "8 min",
    icon: Wifi,
  },
  {
    title: "Edge AI: When Inference Belongs on the Device",
    excerpt:
      "Latency, privacy, connectivity, power, and cost tradeoffs for embedded intelligence.",
    category: "IoT & Embedded",
    date: "May 15, 2026",
    readTime: "7 min",
    icon: Wifi,
  },
  {
    title: "Building Secure Multi-Tenant SaaS Analytics",
    excerpt:
      "Organization boundaries, roles, audit trails, and query isolation for business analytics products.",
    category: "Product Engineering",
    date: "May 08, 2026",
    readTime: "9 min",
    icon: Shield,
  },
  {
    title: "Redis and Celery for Reliable Background Work",
    excerpt:
      "How to design jobs, retries, idempotency, and visibility when analytics or AI tasks run asynchronously.",
    category: "Product Engineering",
    date: "May 01, 2026",
    readTime: "7 min",
    icon: Database,
  },
  {
    title: "Evaluating LLM Applications with Real Test Sets",
    excerpt:
      "Create evaluation datasets, trace failures, measure groundedness, and improve prompts without guessing.",
    category: "Generative AI",
    date: "Apr 24, 2026",
    readTime: "8 min",
    icon: Sparkles,
  },
  {
    title: "Vector Databases: Indexes, Metadata, and Retrieval Quality",
    excerpt:
      "The practical decisions behind useful semantic search, including chunking, filters, distance, and relevance checks.",
    category: "Generative AI",
    date: "Apr 17, 2026",
    readTime: "8 min",
    icon: Database,
  },
  {
    title: "MLOps Fundamentals for Small Engineering Teams",
    excerpt:
      "A lean path from notebooks to versioned datasets, reproducible training, monitored inference, and safe releases.",
    category: "Machine Learning",
    date: "Apr 10, 2026",
    readTime: "9 min",
    icon: Code2,
  },
  {
    title: "Data Contracts: The Missing Layer in Analytics",
    excerpt:
      "Prevent silent dashboard failures by defining ownership, schemas, freshness, and quality expectations early.",
    category: "Data Analytics",
    date: "Apr 03, 2026",
    readTime: "6 min",
    icon: Shield,
  },
  {
    title: "How to Scope an AI Project Without Overpromising",
    excerpt:
      "A discovery framework for data readiness, integration effort, risk, milestones, and production success criteria.",
    category: "Product Engineering",
    date: "Mar 27, 2026",
    readTime: "7 min",
    icon: Code2,
  },
];

const CATEGORY_IMAGES: Record<string, string> = {
  "AI Engineering":
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=85",
  "Generative AI":
    "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=1400&q=85",
  Python:
    "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1400&q=85",
  "Data Analytics":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
  "Machine Learning":
    "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1400&q=85",
  "Computer Vision":
    "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1400&q=85",
  "IoT & Embedded":
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
  "Product Engineering":
    "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=85",
};

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function buildSections(article: (typeof ARTICLE_SEEDS)[number]) {
  return [
    `${article.excerpt} In practice, the difficult part is rarely the first working demo. The difficult part is creating a system that behaves consistently when the data is incomplete, the user changes direction, an external service is unavailable, or the business rule is more complicated than the original brief. That is where disciplined product engineering makes the difference.`,
    `The right starting point is a clear operating model. For ${article.category.toLowerCase()} work, we define the user or operator, the decision the system must support, the inputs it can trust, and the action that should happen next. This turns a broad technology request into a measurable workflow. It also exposes missing data, integration constraints, security requirements, and the edge cases that should be designed before implementation begins.`,
    `A dependable implementation separates the core capability from the surrounding product. The model, retrieval layer, dashboard, device, or automation engine should have a focused interface and testable behavior. Around it, the product needs validation, permissions, observability, versioning, and a clear failure path. This separation keeps iteration fast and makes it possible to improve one layer without destabilizing everything else.`,
    `For delivery, we recommend a staged path: prove the riskiest assumption first, connect the capability to a realistic slice of the workflow, measure it with representative data, and only then expand coverage. Teams should track technical metrics such as latency, error rate, data freshness, and evaluation quality alongside business metrics such as time saved, conversion, retention, or operating cost. A feature is ready when both sides are visible.`,
    `The lasting advantage comes from treating this work as a product, not a one-off experiment. Document the decisions, keep ownership of the data and code clear, and give the people using the system a way to report incorrect results. With that foundation, the technology can evolve as the business learns. The goal is not to add more complexity; it is to make the important work clearer, faster, and more reliable.`,
  ];
}

export const ARTICLES: Article[] = ARTICLE_SEEDS.map((article) => ({
  ...article,
  slug: slugify(article.title),
  image: CATEGORY_IMAGES[article.category],
  sections: buildSections(article),
  takeaways: [
    `Start with the business decision behind ${article.title.toLowerCase()}.`,
    "Design evaluation, security, and observability before scaling the feature.",
    "Ship a useful workflow slice, measure it, and improve from real usage.",
  ],
}));

export function getArticleBySlug(slug: string) {
  return ARTICLES.find((article) => article.slug === slug);
}

const CATEGORIES = [
  "All",
  ...Array.from(new Set(ARTICLES.map((article) => article.category))),
];

function BlogPage() {
  useReveal();
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const filteredArticles = ARTICLES.filter((article) => {
    const matchesCategory =
      activeCategory === "All" || article.category === activeCategory;
    const matchesQuery =
      !normalizedQuery ||
      `${article.title} ${article.excerpt} ${article.category}`
        .toLowerCase()
        .includes(normalizedQuery);
    return matchesCategory && matchesQuery;
  });

  if (pathname !== "/blog") return <Outlet />;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <PageHero
          eyebrow="Insights"
          title="Practical ideas for"
          titleGradient="building better software."
          subtitle="Clear notes on product engineering, AI automation, data systems, computer vision, IoT, Python, and the decisions that carry an idea into a dependable product."
        >
          <div className="flex flex-wrap justify-center gap-3 text-xs text-muted-foreground">
            <span className="border border-white/10 px-3 py-2">
              24 practical articles
            </span>
            <span className="border border-white/10 px-3 py-2">
              Updated weekly
            </span>
            <span className="border border-white/10 px-3 py-2">
              Built for practitioners
            </span>
          </div>
        </PageHero>

        <section className="border-y border-[#262626] bg-[#0F0F0F] py-10">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="eyebrow">Explore the library</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Filter by discipline or search for a specific engineering
                  question.
                </p>
              </div>
              <label className="relative block w-full lg:max-w-xs">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search insights"
                  className="w-full border border-[#262626] bg-[#0F0F0F] py-3 pl-10 pr-4 text-sm text-white outline-none transition-colors placeholder:text-neutral-400 focus:border-[#06B6D4]"
                />
              </label>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`border px-4 py-2 text-xs font-semibold transition-colors ${activeCategory === category ? "border-[#06B6D4] bg-[#06B6D4]/10 text-[#06B6D4]" : "border-[#262626] text-neutral-300 hover:border-[#3B82F6]/50 hover:text-white"}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-10 flex items-end justify-between gap-5">
              <div>
                <p className="eyebrow">Latest thinking</p>
                <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                  Useful context for the next build.
                </h2>
              </div>
              <p className="hidden text-sm text-muted-foreground sm:block">
                {filteredArticles.length} articles
              </p>
            </div>
            {filteredArticles.length > 0 ? (
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {filteredArticles.map((article, index) => (
                  <article
                    key={article.title}
                    className="reveal card-3d group flex h-full flex-col rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
                    style={{ animationDelay: `${(index % 6) * 70}ms` }}
                  >
                    <a
                      href={`/blog/${article.slug}`}
                      className="-mx-6 -mt-6 mb-6 block overflow-hidden"
                    >
                      <img
                        src={article.image}
                        alt=""
                        loading="lazy"
                        className="h-44 w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                      />
                    </a>
                    <div className="mb-8 flex items-start justify-between">
                      <div className="grid h-11 w-11 place-items-center border border-[color:var(--cyan-glow)]/25 bg-[color:var(--cyan-glow)]/10 text-[color:var(--cyan-glow)]">
                        <article.icon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground/60">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold leading-snug transition-colors group-hover:text-[color:var(--cyan-glow)]">
                      {article.title}
                    </h3>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {article.excerpt}
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-[#262626] pt-4 text-xs text-neutral-400">
                      <span>{article.date}</span>
                      <a
                        href={`/blog/${article.slug}`}
                        className="font-semibold text-[#06B6D4]"
                      >
                        Read article{" "}
                        <ArrowRight className="ml-1 inline h-3 w-3" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="border border-dashed border-white/15 px-6 py-16 text-center text-muted-foreground">
                No insights match that search.
              </div>
            )}
          </div>
        </section>

        <section className="border-t border-[#262626] bg-[#0F0F0F] py-20">
          <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
            <p className="eyebrow">Keep building</p>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              Have a hard technical problem?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Bring me the messy version. I'll help turn the data, models,
              and integrations into a system your team can actually run.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-gradient-brand px-6 py-3 text-sm font-bold text-[#07111f] transition-transform hover:scale-105"
            >
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
