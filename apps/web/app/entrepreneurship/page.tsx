import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "../../components/SectionHeading";

export const metadata: Metadata = {
  title: "Entrepreneurship",
  description:
    "Explore Amit Awad's approach to entrepreneurship, design thinking, experimentation, technology, and building products around real problems.",
};

const framework = [
  "EMPATHISE",
  "THINK",
  "BUILD",
  "LEARN",
  "EMPOWER",
];

export default function Entrepreneurship() {
  return (
    <main className="inner-page entrepreneurship-page">
      <section className="inner-hero section-shell">
        <span className="eyebrow">ENTREPRENEURSHIP</span>

        <h1>
          THE PERSPECTIVE TO SEE
          <br />
          PROBLEMS AS OPPORTUNITIES.
        </h1>

        <p>
          I explore problems from the human side first, then move through
          design thinking, technology, experimentation, and execution.
        </p>
      </section>

      <section className="section">
        <div className="section-shell">
          <SectionHeading
            eyebrow="01 / FRAMEWORK"
            title="EMPATHISE → THINK → BUILD → LEARN → EMPOWER"
          />

          <div className="framework">
            {framework.map((step, index) => (
              <div key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-shell split">
          <SectionHeading
            eyebrow="02 / CURRENT DIRECTION"
            title="DHARMAVERSE."
          />

          <div>
            <p className="lead">
              A mission-driven product exploration at the intersection of
              technology, culture, education, and child-focused engagement.
            </p>

            <Link className="text-link" href="/dharmaverse">
              EXPLORE DHARMAVERSE ↗
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-shell split">
          <SectionHeading
            eyebrow="03 / EARLIER EXPERIMENT"
            title="SOY BEVERAGE."
          />

          <div>
            <p>
              An earlier startup concept exploring affordable protein-rich
              beverages for health-conscious consumers in tier-2 and tier-3
              Indian cities.
            </p>

            <Link className="text-link" href="/projects/soy-beverage">
              VIEW CONCEPT ↗
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}