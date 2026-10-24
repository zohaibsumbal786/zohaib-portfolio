import { Outlet, createRootRoute } from "@tanstack/react-router";
import "@/styles.css";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Zohaib Ahmad Khan Sumbal - Data Scientist & AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Zohaib Ahmad Khan Sumbal - Data Scientist & AI Engineer specializing in Machine Learning, Deep Learning, Generative AI, and Agentic AI Systems.",
      },
      { name: "author", content: "Zohaib Ahmad Khan Sumbal" },
      {
        property: "og:title",
        content: "Zohaib Ahmad Khan Sumbal - Data Scientist & AI Engineer",
      },
      {
        property: "og:description",
        content:
          "BS Data Science graduate specializing in AI, ML, and full-stack development. Building intelligent systems with cutting-edge technology.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "icon", href: "/favicon.ico" }],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Outlet />
    </>
  );
}
