import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "../../data/projects";
import { SectionHeading } from "../../components/SectionHeading";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected engineering, open-source, automation, entrepreneurship, and research projects by Amit Awad.",
};

const cats = [
  "All",
  "Engineering",
  "Open Source",
  "Automation",
  "Entrepreneurship",
  "Research",
] as const;

export default function Projects() {
  return (
    <main className="inner-page">
      <section className="inner-hero section-shell">
        <span className="eyebrow">PROJECTS</span>

        <h1>
          WHERE IDEAS
          <br />
          TAKE FORM.
        </h1>

        <p>
          Selected work across engineering, open source, automation,
          entrepreneurship, and research.
        </p>
      </section>

      <section className="section">
        <div className="section-shell">
          <SectionHeading
            eyebrow="01 / SELECTED WORK"
            title="BUILT TO BE USED."
          />

          <div
            className="filter-row"
            role="tablist"
            aria-label="Project categories"
          >
            {cats.map((category) => (
              <Link
                key={category}
                className="filter-chip"
                href={
                  category === "All"
                    ? "/projects"
                    : `/projects?category=${encodeURIComponent(category)}`
                }
                role="tab"
                aria-selected={category === "All"}
              >
                {category}
              </Link>
            ))}
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <Link
                className="project-card"
                href={`/projects/${project.slug}`}
                key={project.slug}
              >
                <span className="project-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="project-category">
                  {project.category.join(" / ")}
                </span>

                <div className="project-art" aria-hidden="true">
                  <span />
                </div>

                <h2>{project.title}</h2>

                <p>{project.problem}</p>

                <span className="project-arrow">VIEW ↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}