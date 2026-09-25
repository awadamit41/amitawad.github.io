import { TransitionLink } from "../../components/TransitionLink";
import { SectionHeading } from "../../components/SectionHeading";
import { experience } from "../../data/experience";

export default function Resume() {
  return (
    <main className="inner-page">
      <section className="inner-hero section-shell">
        <span className="eyebrow">RESUME</span>

        <h1>
          BUILDER.
          <br />
          ENGINEER.
          <br />
          ENTREPRENEUR.
        </h1>

        <p>
          An interactive, recruiter-first view of my experience. The
          downloadable PDF remains the original résumé.
        </p>

        <div className="hero-actions">
          <a
            className="button"
            href="/Amit_Awad_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            OPEN PDF ↗
          </a>
        </div>
      </section>

      <section className="section">
        <div className="section-shell resume-grid">
          <div>
            <SectionHeading
              eyebrow="01 / EDUCATION"
              title="EDUCATION."
            />

            <h3>B.Tech in Information Technology</h3>
            <p>MIT-ADT University · 2023–2027 · CGPA 7.5</p>
          </div>

          <div>
            <SectionHeading
              eyebrow="02 / EXPERIENCE"
              title="EXPERIENCE."
            />

            <div className="experience-list">
              {experience.map((item) => (
                <article key={`${item.organization}-${item.role}`}>
                  <p className="eyebrow">{item.period}</p>

                  <h3>{item.role}</h3>

                  <p>{item.organization}</p>

                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-shell">
          <SectionHeading
            eyebrow="03 / CERTIFICATIONS"
            title="SELECTED CERTIFICATIONS."
          />

          <div className="cert-list">
            <p>Linux for Developers - Coursera</p>
            <p>
              Computational Thinking - University of Pennsylvania
            </p>
          </div>

          <TransitionLink className="text-link" href="/contact">
            GET IN TOUCH ↗
          </TransitionLink>
        </div>
      </section>
    </main>
  );
}