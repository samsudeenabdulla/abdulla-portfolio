 "use client";

import { useState } from "react";

const projects = [
  {
    number: "01",
    category: "ANDROID DEVELOPMENT",
    title: "MyBlog",
    description:
      "An offline-first Android blogging application concept focused on creating, managing and viewing posts, with local storage and synchronisation when connectivity returns.",
    stack: ["Android", "Java", "Firebase"],
    accent: "violet",
    status: "Academic project",
    highlights: [
      "Designed an offline-first mobile blogging application.",
      "Implemented creating, viewing, editing, searching and deleting posts.",
      "Applied local database concepts using SQLite.",
      "Designed interfaces and prototypes using Figma.",
      "Created use-case, activity and class diagrams using UML.",
    ],
  },
  {
    number: "02",
    category: "ANDROID DEVELOPMENT",
    title: "Android Firebase Chat Application",
    description:
      "A mobile chat application developed with Java and Android Studio, using Firebase services for application functionality and data handling, with interfaces for authentication and messaging.",
    stack: ["Java", "Android Studio", "Firebase"],
    accent: "blue",
    status: "Academic project",
    highlights: [
      "Developed a mobile chat application using Java and Android Studio.",
      "Integrated Firebase services for application functionality and data handling.",
      "Designed interfaces for authentication, messaging and user interaction.",
      "Practised Android development, Gradle configuration and debugging.",
    ],
  },
  {
    number: "03",
    category: "ARTIFICIAL INTELLIGENCE",
    title: "Customer Churn Prediction",
    description:
      "A research project exploring machine-learning methods to identify customers who may leave an e-commerce service and support better retention decisions.",
    stack: ["Python", "Machine Learning", "XAI"],
    accent: "cyan",
    status: "Research project",
    highlights: [
      "Explores customer churn prediction in e-commerce environments.",
      "Uses Logistic Regression, Decision Tree, Random Forest and XGBoost models.",
      "Includes customer data preprocessing, feature preparation and model evaluation.",
      "Uses SHAP explainability to identify factors influencing predictions.",
      "Plans dashboard functionality to present churn risk and support retention decisions.",
    ],
  },
];

const skills = [
  { group: "PROGRAMMING LANGUAGES", items: ["Python", "Java", "C / C++", "JavaScript"] },
  { group: "WEB DEVELOPMENT", items: ["HTML", "CSS", "JavaScript", "PHP"] },
  { group: "MOBILE DEVELOPMENT", items: ["Android Studio", "Java", "Firebase", "Flutter"] },
  { group: "AI & MACHINE LEARNING", items: ["Pandas", "NumPy", "SHAP"] },
  { group: "DATABASES", items: ["MySQL", "SQLite", "Firebase"] },
  { group: "TOOLS", items: ["VS Code", "Jupyter", "Figma", "GitHub", "Canva"] },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Replace this with your real email address before publishing.
  const email = "0929abdulla@gmail.com";
  const whatsappNumber = "94764110935";
  const whatsappMessage = "Hi Abdulla, I visited your portfolio and would like to connect with you.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  const closeMenu = () => setMenuOpen(false);

  function handleContactSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const senderName = formData.get("name");
    const senderEmail = formData.get("senderEmail");
    const subject = formData.get("subject");
    const message = formData.get("message");
    const body = `Name: ${senderName}\\nEmail: ${senderEmail}\\n\\n${message}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">A.</span>
          <span>ABDULLA<span className="brand-muted">.DEV</span></span>
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {[
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Projects", "#projects"],
            ["Education", "#education"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <span>↗</span></a>
        </nav>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</div>
          <p className="hero-kicker">HELLO, I'M</p>
          <h1>Mohamed Samsudeen <span>Abdulla.</span></h1>
          <h2>Software Engineer <i>in the making.</i></h2>
          <p className="hero-description">
            I enjoy turning ideas into practical digital experiences — from mobile
            applications to intelligent, data-driven solutions.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <span>↗</span></a>
            <a className="button button-quiet" href="/resume.pdf" download>Download CV <span>↓</span></a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/samsudeenabdulla" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/samsudeenabdulla/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <span>Based in Sri Lanka</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Decorative portfolio graphic">
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
          <div className="profile-card">
            <div className="profile-top"><span>PROFILE / 001</span><span className="profile-live">● ONLINE</span></div>
            <div className="avatar-photo-wrap">
              <img
                className="avatar-photo"
                src="/profile.jpg"
                alt="Professional portrait of Mohamed Samsudeen Abdulla"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                  event.currentTarget.nextElementSibling.style.display = "grid";
                }}
              />
              <div className="avatar-placeholder avatar-fallback">A<span>.</span></div>
            </div>
            <div className="profile-name">Mohamed S. Abdulla</div>
            <div className="profile-role">SOFTWARE ENGINEERING</div>
            <div className="profile-divider" />
            <div className="profile-stats">
              <div><strong>03+</strong><span>PROJECTS</span></div>
              <div><strong>05+</strong><span>TECH AREAS</span></div>
              <div><strong>∞</strong><span>CURIOSITY</span></div>
            </div>
          </div>
          <div className="floating-chip chip-one"><span className="chip-icon">{"</>"}</span> Build · Learn · Improve</div>
          <div className="floating-chip chip-two"><span className="chip-spark">✳</span> Always exploring</div>
        </div>
        <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
      </section>

      <section className="section-wrap about-section" id="about">
        <div className="section-heading">
          <p className="eyebrow">01 / A LITTLE INTRODUCTION</p>
          <h2>Curious mind.<br /><span>Builder's mindset.</span></h2>
        </div>
        <div className="about-content">
          <p className="large-copy">
            I'm a Computer Science student with a passion for software development,
            mobile applications and artificial intelligence.
          </p>
          <p className="body-copy">
            I like understanding how technology works and using that knowledge to
            solve real problems. Through academic and personal projects, I continue
            developing my skills in application development, programming and
            machine learning.
          </p>
          <div className="about-note"><span>✳</span> Focused on learning, building and getting better with every project.</div>
        </div>
      </section>

      <section className="section-wrap skills-section" id="skills">
        <div className="section-heading section-heading-row">
          <div><p className="eyebrow">02 / MY TOOLKIT</p><h2>Skills & <span>technologies.</span></h2></div>
          <p className="section-side-note">Tools I have worked with<br />and continue to explore.</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <article className="skill-card" key={skill.group}>
              <div className="skill-card-top"><span>0{index + 1}</span><span>✳</span></div>
              <h3>{skill.group}</h3>
              <div className="skill-tags">{skill.items.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
        <p className="small-note">Skills are based on the technologies listed in my CV. I continue to develop them through coursework and projects.</p>
      </section>

      <section className="section-wrap projects-section" id="projects">
        <div className="section-heading section-heading-row">
          <div><p className="eyebrow">03 / SELECTED WORK</p><h2>Things I've <span>worked on.</span></h2></div>
          <p className="section-side-note">A selection of academic<br />and development projects.</p>
        </div>
        <div className="projects-list">
          {projects.map((project) => (
            <article className={`project-card ${project.accent}`} key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <p className="eyebrow">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
              <div className="project-aside">
                <span className="project-status">{project.status}</span>
                <button
                  className="project-details-button"
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`View details for ${project.title}`}
                >
                  View details <span>↗</span>
                </button>
              </div>
            </article>
          ))}
        </div>
        <div className="github-callout">
          <div><span className="eyebrow">MORE CODE, MORE EXPERIMENTS</span><h3>Explore my GitHub.</h3></div>
          <a className="button button-outline" href="https://github.com/samsudeenabdulla" target="_blank" rel="noreferrer">Visit GitHub ↗</a>
        </div>
      </section>

      <section className="section-wrap education-section" id="education">
        <div className="section-heading">
          <p className="eyebrow">04 / MY LEARNING PATH</p>
          <h2>Education & <span>growth.</span></h2>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <span className="timeline-dot" />
            <div><span className="timeline-label">CURRENTLY READING</span><h3>BSc (Hons) Computer Science (Software Engineering)</h3><p>Undergraduate degree · Reading</p></div>
          </div>
          <div className="timeline-item">
            <span className="timeline-dot" />
            <div><span className="timeline-label">COMPLETED</span><h3>Higher National Diploma in Computing</h3><p>HND in Computing</p></div>
          </div>
          <div className="timeline-item">
            <span className="timeline-dot" />
            <div><span className="timeline-label">COMPLETED</span><h3>Diploma in Information Technology</h3><p>Diploma in IT</p></div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-inner">
          <p className="eyebrow">05 / HAVE A PROJECT IN MIND?</p>
          <h2>Let's build something<br /><span>meaningful together.</span></h2>
          <p className="contact-description">I'm always open to connecting, learning about opportunities and discussing ideas.</p>
          <div className="contact-actions">
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Chat on WhatsApp ↗</a>
            <a className="button button-outline" href={`mailto:${email}`}>Send me an email ↗</a>
            <a className="button button-outline" href="/resume.pdf" download>Download my CV ↓</a>
            <button className="button button-outline" onClick={copyEmail}>{copied ? "Email copied ✓" : "Copy email address"}</button>
          </div>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="contact-form-row">
              <label>
                Your name
                <input name="name" type="text" placeholder="Enter your name" required />
              </label>
              <label>
                Your email
                <input name="senderEmail" type="email" placeholder="you@example.com" required />
              </label>
            </div>
            <label>
              Subject
              <input name="subject" type="text" placeholder="What would you like to discuss?" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="4" placeholder="Write your message here..." required />
            </label>
            <button className="button button-primary contact-submit" type="submit">Prepare email <span>↗</span></button>
            <p className="form-note">This form opens your default email app with your message prepared. It does not store or send messages through this website.</p>
          </form>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/samsudeenabdulla/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/samsudeenabdulla" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setSelectedProject(null);
        }}>
          <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
            <button className="modal-close" type="button" onClick={() => setSelectedProject(null)} aria-label="Close project details">×</button>
            <p className="eyebrow">{selectedProject.category} / {selectedProject.number}</p>
            <h2 id="project-modal-title">{selectedProject.title}</h2>
            <p className="modal-description">{selectedProject.description}</p>
            <h3>Project highlights</h3>
            <ul>
              {selectedProject.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
            <div className="project-stack modal-stack">
              {selectedProject.stack.map((item) => <span key={item}>{item}</span>)}
            </div>
            <a className="button button-outline modal-github" href="https://github.com/samsudeenabdulla" target="_blank" rel="noreferrer">Explore GitHub profile ↗</a>
          </section>
        </div>
      )}

      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat with me on WhatsApp">
        <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16.04 3C8.9 3 3.1 8.75 3.1 15.84c0 2.27.6 4.48 1.74 6.43L3 29l6.93-1.8a13.1 13.1 0 0 0 6.1 1.5h.01c7.14 0 12.94-5.76 12.94-12.85 0-3.44-1.35-6.67-3.8-9.1A12.86 12.86 0 0 0 16.04 3Zm0 23.52h-.01c-1.9 0-3.76-.51-5.38-1.48l-.39-.23-4.11 1.07 1.1-4-.25-.41a10.63 10.63 0 0 1-1.63-5.63c0-5.88 4.81-10.66 10.68-10.66 2.84 0 5.52 1.1 7.53 3.12a10.55 10.55 0 0 1 3.13 7.54c0 5.88-4.8 10.68-10.67 10.68Zm5.86-7.99c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.52-.16-.74.16-.22.32-.84 1.05-1.03 1.27-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.85-1.61-1.9-1.8-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.73-1.75-1-2.4-.26-.62-.53-.54-.73-.55h-.62c-.22 0-.57.08-.87.4-.3.32-1.14 1.11-1.14 2.7 0 1.59 1.17 3.12 1.33 3.34.16.21 2.3 3.5 5.57 4.9.78.34 1.39.54 1.86.69.78.25 1.49.21 2.05.13.63-.1 1.9-.78 2.17-1.54.27-.75.27-1.4.19-1.53-.08-.14-.3-.22-.62-.38Z"/></svg>
        <span>Chat on WhatsApp</span>
      </a>

      <footer className="site-footer">
        <a className="brand" href="#home"><span className="brand-mark">A.</span><span>ABDULLA<span className="brand-muted">.DEV</span></span></a>
        <p>Designed & built with curiosity. © {new Date().getFullYear()} Mohamed Samsudeen Abdulla.</p>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
