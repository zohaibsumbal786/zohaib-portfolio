import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportError } from "../lib/error-reporting";
import { AIChatbot } from "@/components/ai-chatbot";
import { ContentProtection } from "@/components/content-protection";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollToTop } from "@/components/page-transition";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. You can try refreshing or head back
          home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "Zohaib Ahmed Khan Sumbal — Data Scientist & AI Engineer | Pakistan" },
        {
          name: "description",
          content:
            "Professional Data Scientist & AI Engineer from Pakistan specializing in agentic AI systems, machine learning, computer vision, RAG, IoT, and full-stack development. BS Data Science graduate from MNSUAM. Building production-ready AI applications worldwide.",
        },
        {
          name: "keywords",
          content: "Data Scientist Pakistan, AI Engineer, Machine Learning Expert, Computer Vision, Agentic AI, RAG Systems, IoT Developer, Full Stack Developer, AI Consultant, Zohaib Ahmed Khan Sumbal, MNSUAM, Multan, Muzaffargarh",
        },
        { name: "author", content: "Zohaib Ahmed Khan Sumbal" },
        { name: "robots", content: "index, follow" },
        { name: "language", content: "English" },
        { name: "revisit-after", content: "7 days" },
        { name: "distribution", content: "global" },
        
        // Open Graph / Facebook
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://zohaibsumbal.com/",
        },
        {
          property: "og:title",
          content: "Zohaib Ahmed Khan Sumbal — Data Scientist & AI Engineer",
        },
        {
          property: "og:description",
          content:
            "Professional Data Scientist & AI Engineer from Pakistan. Building intelligent systems with AI, machine learning, computer vision, and full-stack engineering. 30+ projects delivered worldwide.",
        },
        {
          property: "og:image",
          content: "https://zohaibsumbal.com/og-image.jpg",
        },
        {
          property: "og:site_name",
          content: "Zohaib Ahmed Khan Sumbal Portfolio",
        },
        {
          property: "og:locale",
          content: "en_US",
        },
        
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:url",
          content: "https://zohaibsumbal.com/",
        },
        {
          name: "twitter:title",
          content: "Zohaib Ahmed Khan Sumbal — Data Scientist & AI Engineer",
        },
        {
          name: "twitter:description",
          content:
            "Professional Data Scientist & AI Engineer from Pakistan. 30+ AI/ML projects | RAG Systems | Computer Vision | IoT | Full-Stack Development.",
        },
        {
          name: "twitter:image",
          content: "https://zohaibsumbal.com/og-image.jpg",
        },
        
        // Additional SEO
        { name: "geo.region", content: "PK-MUZ" },
        { name: "geo.placename", content: "Muzaffargarh, Pakistan" },
        { name: "geo.position", content: "30.0704;71.1931" },
        { name: "ICBM", content: "30.0704, 71.1931" },
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
        },
        { rel: "canonical", href: "https://zohaibsumbal.com/" },
        { rel: "alternate", hrefLang: "en", href: "https://zohaibsumbal.com/" },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Security: Content protection against scraping */}
      <ContentProtection />
      
      {/* Custom cursor for premium feel (desktop only) */}
      <CustomCursor />
      
      {/* Scroll to top on route change */}
      <ScrollToTop />
      
      {/* Theme Switcher - Top Right Corner */}
      <ThemeSwitcher />
      
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <div className="page-transition-enter-active">
        <Outlet />
      </div>
      
      {/* AI Chatbot */}
      <AIChatbot />
    </QueryClientProvider>
  );
}
