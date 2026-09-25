import type { MetadataRoute } from "next";
import { projects } from "../data/projects";

const base = "https://amitawad.github.io";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/projects",
    ...projects.map((project) => `/projects/${project.slug}`),
    "/dharmaverse",
    "/entrepreneurship",
    "/resume",
    "/contact",
  ];

  return routes.map((route) => ({
    url: route ? `${base}${route}/` : `${base}/`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}