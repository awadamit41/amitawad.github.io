import type { Metadata } from "next";
import { MagneticButton } from "../../components/MagneticButton";
import { site } from "../../data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Amit Awad about ideas, opportunities, projects, and problems worth discussing.",
};

export default function Contact() {
  return (
    <main className="inner-page">
      <section className="contact-page section-shell">
        <span className="eyebrow">CONTACT</span>

        <h1>
          EVERYTHING STARTS
          <br />
          WITH A FIRST STEP.
        </h1>

        <p>Have an idea, opportunity, or problem worth discussing?</p>

        <div className="contact-actions">
          <MagneticButton href={`mailto:${site.email}`}>
            EMAIL ME
          </MagneticButton>

          <MagneticButton copy>
            COPY EMAIL
          </MagneticButton>
        </div>

        <div className="socials">
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn — opens in a new tab"
          >
            LinkedIn ↗
          </a>

          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub — opens in a new tab"
          >
            GitHub ↗
          </a>

          <a
            href={site.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram — opens in a new tab"
          >
            Instagram ↗
          </a>

          <a
            href={site.socials.era}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Infinit Era Instagram — opens in a new tab"
          >
            Infinit Era ↗
          </a>
        </div>
      </section>
    </main>
  );
}