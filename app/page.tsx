import { ArrowDownRight, ArrowUpRight, Code2, Mail, MapPin } from "lucide-react";

const projects = [
  { index: "01", title: "Orbit Finance", description: "A real-time financial workspace that turns complex portfolio data into clear, actionable decisions.", tags: ["React", "TypeScript", "Node.js"], className: "project-blue" },
  { index: "02", title: "Relay Studio", description: "A collaborative design review tool built for fast-moving product teams and async feedback.", tags: ["Next.js", "PostgreSQL", "WebSockets"], className: "project-lime" },
  { index: "03", title: "Signal Cloud", description: "Infrastructure monitoring that helps engineering teams spot issues before their customers do.", tags: ["React", "Go", "AWS"], className: "project-violet" },
];
const experience = [["2023 — NOW", "Senior Software Engineer", "Northstar Labs"], ["2020 — 2023", "Frontend Engineer", "Frame Systems"], ["2018 — 2020", "Software Engineer", "Independent"]];

export default function Home() {
  return <main id="top">
    <header className="site-header">
      <a href="#top" className="brand" aria-label="Alex Morgan, home"><span>AM</span></a>
      <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
      <a className="availability" href="mailto:hello@alexmorgan.dev"><span aria-hidden="true" /> Available for work</a>
    </header>
    <section className="hero" aria-labelledby="hero-title">
      <div className="eyebrow"><Code2 size={16} /> SOFTWARE ENGINEER · PORTFOLIO 2026</div>
      <h1 id="hero-title">I build digital<br />products that <em>work.</em></h1>
      <div className="hero-footer"><p>I&apos;m Alex, a software engineer focused on thoughtful interfaces, reliable systems, and products people enjoy using.</p><a className="circle-link" href="#work" aria-label="Explore selected work"><ArrowDownRight /></a></div>
      <div className="hero-orbit" aria-hidden="true"><div className="core">AM</div></div>
    </section>
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="section-heading"><p>SELECTED WORK</p><h2 id="work-title">Projects with purpose.</h2></div>
      <div className="project-grid">{projects.map((project) => <article className={`project-card ${project.className}`} key={project.title}>
        <div className="project-top"><span>{project.index}</span><ArrowUpRight /></div><div className="project-mark" aria-hidden="true"><span>{project.title[0]}</span></div>
        <div className="project-copy"><h3>{project.title}</h3><p>{project.description}</p><ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div>
      </article>)}</div>
    </section>
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="about-intro"><p className="section-label">ABOUT</p><h2 id="about-title">Engineering with clarity, curiosity, and care.</h2></div>
      <div className="about-copy"><p>I bridge design and engineering to turn ambitious ideas into simple, dependable experiences. My work spans product architecture, frontend systems, APIs, and the small details that make software feel right.</p><div className="skills" aria-label="Core skills"><span>React / Next.js</span><span>TypeScript</span><span>Node.js</span><span>Product systems</span><span>Cloud architecture</span><span>Design engineering</span></div></div>
    </section>
    <section className="section experience" aria-labelledby="experience-title"><p className="section-label" id="experience-title">EXPERIENCE</p><div className="experience-list">{experience.map(([year, role, company]) => <div className="experience-row" key={year}><span>{year}</span><strong>{role}</strong><span>{company}</span></div>)}</div></section>
    <section className="contact" id="contact" aria-labelledby="contact-title"><p>HAVE A PROJECT IN MIND?</p><h2 id="contact-title">Let&apos;s make something<br /><em>remarkable.</em></h2><a href="mailto:hello@alexmorgan.dev">hello@alexmorgan.dev <ArrowUpRight /></a></section>
    <footer><div><MapPin size={15} /> Based in Toronto · Working worldwide</div><p>© 2026 Alex Morgan</p><div className="socials"><a href="https://github.com" aria-label="GitHub">GH</a><a href="https://linkedin.com" aria-label="LinkedIn">IN</a><a href="mailto:hello@alexmorgan.dev" aria-label="Email"><Mail /></a></div></footer>
  </main>;
}
