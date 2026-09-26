import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "../../components/SectionHeading";

export const metadata: Metadata = {
  title: "Dharmaverse",
  description:
    "Dharmaverse is a gamified IKS platform exploring Indian cultural wisdom, moral values, stories, and thought processes for children aged 5–14.",
};

const mechanics = [
  "CULTURAL JOURNEY",
  "STORIES",
  "QUESTS",
  "POINTS",
  "LEVELS",
  "BADGES",
  "ACHIEVEMENT",
];

export default function Dharmaverse() {
  return (
    <main className="inner-page dharma-page">
      <section className="dharma-hero section-shell">
        <div>
          <span className="eyebrow">RESEARCH PHASE</span>

          <h1>
            CULTURE, REIMAGINED
            <br />
            FOR THE NEXT GENERATION.
          </h1>

          <p>
            A gamified IKS platform designed to make Indian cultural wisdom,
            moral values, stories, and thought processes more discoverable for
            children aged 5–14.
          </p>
        </div>

        <div className="dharma-world" aria-hidden="true">
          <div className="world-core">IKS</div>

          {mechanics.slice(0, 5).map((mechanic) => (
            <span key={mechanic}>{mechanic}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-shell split">
          <SectionHeading
            eyebrow="01 / PROBLEM"
            title="WHY IT MATTERS."
          />

          <div>
            <p className="lead">
              Many children are increasingly disconnected from cultural values
              and traditional learning because conventional formats can feel
              distant from everyday life.
            </p>

            <p>
              Dharmaverse explores a healthier alternative: turn cultural
              learning into something children can discover, play with,
              question, and remember.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-shell">
          <SectionHeading
            eyebrow="02 / EXPERIENCE"
            title="LEARN → PLAY → REMEMBER."
          />

          <div className="dharma-flow">
            {mechanics.map((mechanic, index) => (
              <div key={mechanic}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{mechanic}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-shell split">
          <SectionHeading
            eyebrow="03 / VALUES"
            title="IKS & MORAL THINKING."
          />

          <div>
            <p>
              Content is envisioned around Indian Knowledge Systems, moral
              values, cultural knowledge, and the thought processes behind
              stories and traditions.
            </p>

            <p>
              The product direction is intentionally educational without
              feeling like a conventional classroom.
            </p>
          </div>
        </div>
      </section>

      <section className="section dharma-vision">
        <div className="section-shell">
          <span className="eyebrow">04 / VISION</span>

          <h2>A CULTURAL WORLD CHILDREN WANT TO RETURN TO.</h2>

          <Link className="text-link" href="/contact">
            DISCUSS THE IDEA ↗
          </Link>
        </div>
      </section>
    </main>
  );
}