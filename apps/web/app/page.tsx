import { TransitionLink } from "../components/TransitionLink";
import { HeroVisual } from "../components/HeroVisual";
import { MagneticButton } from "../components/MagneticButton";
import { SectionHeading } from "../components/SectionHeading";
import { experience } from "../data/experience";
import { projects } from "../data/projects";
import { site } from "../data/site";
import { ScrollMotion } from "../components/ScrollMotion";

const skills = ["QML", "Python", "Java", "Git", "GitHub", "Linux", "Selenium"];
const principles = ["Empathy", "Curiosity", "Problem Solving", "Ownership", "Learning", "Leadership", "Open Source", "Impact"];

export default function Home() {
  return <main>
    <ScrollMotion />
    <section className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero-copy"><span className="eyebrow">BUILDER · ENGINEER · ENTREPRENEUR</span><h1 id="hero-title">{site.hero}</h1><p>{site.description}</p><div className="hero-actions"><MagneticButton href="#projects">EXPLORE MY WORK</MagneticButton><MagneticButton href="/Amit_Awad_Resume.pdf">GET MY RESUME</MagneticButton></div></div>
      <HeroVisual />
      <div className="hero-scroll" aria-hidden="true">SCROLL TO EXPLORE ↓</div>
    </section>

    <section id="about" className="section section--about" aria-labelledby="about-title"><div className="section-shell split"><SectionHeading eyebrow="01 / ABOUT" title="FROM CURIOSITY TO CREATION." /><div><p className="statement" id="about-title">THE WAY I THINK.</p><p>I started with curiosity about PCs, components, and how things work. Engineering gave that curiosity structure: design thinking, problem solving, and the discipline to turn ideas into working things.</p><p>Today I build software, contribute to open source, explore entrepreneurship, and develop ideas that connect technology with meaningful problems.</p><div className="principles">{principles.map((item) => <span key={item}>{item}</span>)}</div><TransitionLink className="text-link" href="/about">DISCOVER THE JOURNEY ↗</TransitionLink></div></div></section>

    <section id="engineering" className="section section--engineering" aria-labelledby="engineering-title"><div className="section-shell"><SectionHeading eyebrow="02 / ENGINEERING" title="THINK. DESIGN. BUILD." /><div className="engineering-lab" id="engineering-title">{skills.map((skill, i) => <span key={skill} style={{ "--i": i } as React.CSSProperties}>{skill}</span>)}<div className="lab-core">SYSTEM<br /><b>→</b><br />PROJECT</div></div><p className="section-note">Technology is most useful when it is connected to a real problem, a real system, or meaningful work.</p></div></section>

    <section id="projects" className="section section--projects" aria-labelledby="projects-title"><div className="section-shell"><SectionHeading eyebrow="03 / PROJECTS" title="WHERE IDEAS TAKE FORM." accent="violet" /><p className="statement" id="projects-title">WHAT I BUILD.</p><div className="project-grid">{projects.slice(0, 3).map((project, index) => <TransitionLink className="project-card" href={`/projects/${project.slug}`} key={project.slug}><span className="project-index">0{index + 1}</span><span className="project-category">{project.category.join(" / ")}</span><div className="project-art" aria-hidden="true"><span /></div><h3>{project.title}</h3><p>{project.problem}</p><span className="project-arrow">VIEW ↗</span></TransitionLink>)}</div><TransitionLink className="text-link" href="/projects">EXPLORE ALL PROJECTS ↗</TransitionLink></div></section>

    <section
  id="experience"
  className="section section--experience"
  aria-labelledby="experience-title"
>
  <div className="section-shell">
    <SectionHeading
      eyebrow="04 / EXPERIENCE"
      title="WHERE I PUT IT INTO PRACTICE."
    />

    <div className="timeline" id="experience-title">
      {experience.map((item) => (
        <article
          className="timeline-item"
          key={`${item.period}-${item.role}`}
        >
          <span>{item.period}</span>

          <div>
            <h3>{item.role}</h3>
            <p>{item.organization}</p>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

    <section id="entrepreneurship" className="section section--entrepreneurship" aria-labelledby="entrepreneurship-title"><div className="section-shell split"><SectionHeading eyebrow="05 / ENTREPRENEURSHIP" title="THE PERSPECTIVE TO SEE PROBLEMS AS OPPORTUNITIES." accent="gold" /><div><p className="statement" id="entrepreneurship-title">EMPATHISE → THINK → BUILD → LEARN → EMPOWER</p><p>I explore problems from the human side first, then move through technology, experimentation, and execution.</p><TransitionLink className="text-link" href="/entrepreneurship">EXPLORE THE PERSPECTIVE ↗</TransitionLink></div></div></section>

    <section id="dharma" className="section section--dharma" aria-labelledby="dharma-title"><div className="section-shell dharma-panel"><div><span className="eyebrow">RESEARCH PHASE</span><SectionHeading eyebrow="06 / DHARMAVERSE" title="CULTURE, REIMAGINED FOR THE NEXT GENERATION." accent="saffron" /></div><div><div className="dharma-orbit" aria-hidden="true"><span>IKS</span><span>VALUES</span><span>STORIES</span><span>PLAY</span></div><p id="dharma-title">A gamified IKS platform designed to bring India's cultural wisdom, moral values, and stories into a form children can explore.</p><TransitionLink className="text-link" href="/dharmaverse">ENTER DHARMAVERSE ↗</TransitionLink></div></div></section>

    <section id="achievement" className="section section--achievement" aria-labelledby="achievement-title"><div className="section-shell achievement"><SectionHeading eyebrow="07 / ACHIEVEMENT" title="THE FIRST STEP TOWARDS EXECUTION." /><div className="achievement-card" id="achievement-title"><strong>7th / 792</strong><span>Internal Smart India Hackathon 2025</span><span>Heritage &amp; Culture / Open Innovation</span></div></div></section>

    <section id="contact" className="section section--contact" aria-labelledby="contact-title"><div className="section-shell contact-block"><span className="eyebrow">08 / CONTACT</span><h2 id="contact-title">EVERYTHING STARTS WITH A FIRST STEP.</h2><p>Have an idea, opportunity, or problem worth discussing?</p><div className="contact-actions"><MagneticButton href={`mailto:${site.email}`}>EMAIL ME</MagneticButton><MagneticButton copy>COPY EMAIL</MagneticButton></div><div className="socials"><a href={site.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={site.socials.github} target="_blank" rel="noreferrer">GitHub</a><a href={site.socials.instagram} target="_blank" rel="noreferrer">Instagram</a></div></div></section>

    <footer className="site-footer"><div><span>AMIT</span><span>© {new Date().getFullYear()} Amit Awad</span><span>BUILDER · ENGINEER · ENTREPRENEUR</span></div><p>{site.philosophy}</p></footer>
  </main>;
}
