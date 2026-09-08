export const dynamic = "force-static";
import type { MetadataRoute } from "next";

const base = "https://amitawad.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/projects",
    "/projects/timemanagement",
    "/projects/weatherviewer",
    "/projects/qa-automation",
    "/projects/soy-beverage",
    "/dharmaverse",
    "/entrepreneurship",
    "/resume",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
