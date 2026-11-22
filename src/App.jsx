import React, { useEffect, useState } from "react";

const linkedinUrl = "https://www.linkedin.com/in/afsal-muhammed-5a2242b9/";
const emailAddress = "afsalmtcmd@gmail.com";
const whatsappUrl = "https://wa.me/918714212004";

const projects = [
  {
    number: "01",
    name: "Prosper",
    category: "REAL ESTATE · SAAS",
    description:
      "A Dubai real-estate platform for property discovery, tenant onboarding, and purchase and rental journeys.",
    stack: "Laravel · React · MySQL · Redis",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1100&q=85",
    alt: "Contemporary residential architecture in warm evening light",
    className: "project-image--property",
  },
  {
    number: "02",
    name: "InfinCE Workplace",
    category: "ENTERPRISE · SAAS",
    description:
      "A multi-tenant cloud collaboration platform with role-based workspaces and isolated database tenancy.",
    stack: "Laravel · React · Docker",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85",
    alt: "Bright collaborative modern office space",
    className: "project-image--workspace",
  },
  {
    number: "03",
    name: "InfinCE Calendar",
    category: "SCHEDULING · ENTERPRISE",
    description:
      "A meeting and scheduling platform for global events, time zones, resource bookings, and reminders.",
    stack: "React · NestJS · PostgreSQL",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1100&q=85",
    alt: "Notebook calendar and desk for planning a busy schedule",
    className: "project-image--calendar",
  },
  {
    number: "04",
    name: "ISORobot",
    category: "AUTOMATION · COMPLIANCE",
    description:
      "An enterprise governance suite for audits, task assignments, and modular regulatory checklists.",
    stack: "JavaScript · Node.js · Microservices",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1100&q=85",
    alt: "Team working through documents and planning a project",
    className: "project-image--automation",
  },
  {
    number: "05",
    name: "Kelmac Learning",
    category: "EDUCATION · E-LEARNING",
    description:
      "A learning platform for course delivery, automated assessments, certificates, and learner progress.",
    stack: "Laravel · Angular · MySQL",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1100&q=85",
    alt: "Open books on a desk ready for a study session",
    className: "project-image--learning",
  },
  {
    number: "06",
    name: "Parent Alert System",
    category: "EDUCATION · COMMUNICATION",
    description:
      "A school communications gateway for attendance notifications, exam schedules, and emergency alerts.",
    stack: "Laravel · MySQL · Message Queues",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1100&q=85",
    alt: "A welcoming, sunlit classroom",
    className: "project-image--school",
  },
];

const experience = [
  {
    dates: "JUL 2025 — NOW",
    role: "Full Stack Software Engineer",
    company: "Pixbit Solutions",
    detail:
      "Leading end-to-end development for a real-estate SaaS platform. Building multi-tenant features, APIs, and responsive interfaces; improving performance with MySQL query optimization and Redis; supporting Docker and CI/CD delivery.",
  },
  {
    dates: "OCT 2021 — APR 2025",
    role: "Associate Senior Software Engineer",
    company: "Fingent Global Solutions",
    detail:
      "Built and maintained enterprise SaaS platforms, React interfaces, REST APIs, and background workers. Contributed to secure coding, code reviews, modernization, and mentoring junior engineers.",
  },
  {
    dates: "APR 2020 — OCT 2021",
    role: "Software Engineer",
    company: "Excelledia Ventures",
    detail:
      "Developed Laravel components and MySQL schemas, improved performance through caching and query optimization, and documented integrations and APIs with Swagger.",
  },
  {
    dates: "MAR 2019 — MAR 2020",
    role: "Junior Software Engineer",
    company: "Datastone Solutions",
    detail:
      "Created PHP and Laravel web applications, designed relational data models, and built a proprietary CMS used to deploy more than 100 client websites.",
  },
];

const skills = [
  "Laravel",
  "React",
  "JavaScript",
  "TypeScript",
  "PHP",
  "Node.js",
  "NestJS",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "Jenkins",
  "AWS",
  "API security",
  "Secure coding",
  "Hardware troubleshooting",
  "Computer networking",
];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3 10h13m-5-5 5 5-5 5" />
      )}
    </svg>
  );
}

function BrandMark() {
  return (
    <a className="brand" href="#home" aria-label="Afsal — back to top">
      <span className="brand-monogram">a.</span>
      <span className="brand-caption">AFSAL MT</span>
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <BrandMark />
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span />
          <span />
        </button>
        <nav
          aria-label="Main navigation"
          className={`main-nav${menuOpen ? " main-nav--open" : ""}`}
        >
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#hardware" onClick={closeMenu}>Hardware</a>
          <a href="#story" onClick={closeMenu}>The in-between</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Say hello <ArrowIcon diagonal />
          </a>
        </nav>
      </div>
    </header>
  );
}

function KeralaStamp() {
  return (
    <div className="kerala-stamp" aria-label="Kerala roots, city routes">
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <defs>
          <path
            d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0"
            id="stamp-circle"
          />
        </defs>
        <text>
          <textPath href="#stamp-circle">KERALA ROOTS · CITY ROUTES · </textPath>
        </text>
        <path d="M60 38v25M52 39h16M55 63l-8 12h26l-8-12M45 75h30" />
      </svg>
    </div>
  );
}

function EstateWeather() {
  return (
    <div aria-hidden="true" className="estate-weather">
      <span className="weather-sun" />
      <span className="weather-glow" />
      {Array.from({ length: 20 }, (_, index) => (
        <span
          className="rain-streak"
          key={index}
          style={{
            "--rain-x": `${8 + ((index * 47) % 91)}%`,
            "--rain-delay": `${-((index * 13) % 31) / 2}s`,
            "--rain-duration": `${2.5 + (index % 5) * 0.35}s`,
          }}
        />
      ))}
    </div>
  );
}

function FallingLeaves() {
  return (
    <div aria-hidden="true" className="falling-leaves">
      {[0, 1, 2, 3].map((leaf) => (
        <svg
          className={`falling-leaf falling-leaf--${leaf + 1}`}
          key={leaf}
          viewBox="0 0 32 22"
        >
          <path d="M2 17C8 2 21 1 30 3c-2 12-12 19-28 14Z" />
          <path d="M3 17 25 5M10 13l1-6m4 3 4-6m-2 8 7-1" />
        </svg>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <Header />
      <EstateWeather />
      <FallingLeaves />
      <svg className="filter-definitions" aria-hidden="true" focusable="false">
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            id="prisma-posterize"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
          >
            <feColorMatrix
              type="saturate"
              values="1.16"
              result="saturated"
            />
            <feComponentTransfer in="saturated">
              <feFuncR
                type="discrete"
                tableValues="0.04 0.15 0.27 0.39 0.52 0.65 0.77 0.89 0.98"
              />
              <feFuncG
                type="discrete"
                tableValues="0.035 0.15 0.27 0.39 0.52 0.65 0.77 0.89 0.98"
              />
              <feFuncB
                type="discrete"
                tableValues="0.045 0.16 0.28 0.4 0.53 0.66 0.78 0.9 0.99"
              />
            </feComponentTransfer>
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            id="hand-painted"
            x="-2%"
            y="-2%"
            width="104%"
            height="104%"
          >
            <feTurbulence
              baseFrequency=".018 .028"
              numOctaves="2"
              result="paperGrain"
              seed="12"
              type="fractalNoise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="paperGrain"
              scale="4"
              xChannelSelector="R"
              yChannelSelector="G"
              result="brushEdges"
            />
            <feColorMatrix in="brushEdges" type="saturate" values="1.18" result="paintColor" />
            <feComponentTransfer in="paintColor">
              <feFuncR type="discrete" tableValues="0 .1 .2 .3 .4 .5 .6 .7 .8 .9 1" />
              <feFuncG type="discrete" tableValues="0 .1 .2 .3 .4 .5 .6 .7 .8 .9 1" />
              <feFuncB type="discrete" tableValues="0 .1 .2 .3 .4 .5 .6 .7 .8 .9 1" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>
      <div className="hero-main">
        <div className="hero-copy">
          <div className="hero-location reveal">
            <span className="location-dot" />
            FULL STACK ENGINEER <span className="location-divider">/</span> 7+ YEARS IN
          </div>
          <h1 className="hero-title reveal reveal--delay-1">
            Good code.<br />
            <span>Good coffee.</span>
          </h1>
          <p className="hero-intro reveal reveal--delay-2">
            Hey, I’m <strong>Muhammed Afsal.</strong> I’m passionate about
            coding, building thoughtful software, and exploring how AI can make
            it even more useful. I’m also a hardware and network specialist.
            Off-screen, I’m usually out cycling or looking for a great cup of coffee.
          </p>
          <div className="hero-buttons reveal reveal--delay-3">
            <a className="button button--dark" href="#work">
              Have a look around <ArrowIcon />
            </a>
            <a
              className="button button--text"
              href={linkedinUrl}
              rel="noreferrer"
              target="_blank"
            >
              A little more about me <ArrowIcon diagonal />
            </a>
          </div>
          <div className="hero-footnote reveal reveal--delay-3">
            <span className="footnote-line" />
            KERALA COFFEE COUNTRY. SUNSHINE AFTER THE RAIN.
          </div>
        </div>

        <div className="hero-art reveal reveal--delay-2">
          <div className="photo-frame photo-frame--portrait">
            <img
              alt="Portrait of Muhammed Afsal wearing glasses and a navy hoodie"
              className="hero-photo hero-photo--prisma"
              fetchPriority="high"
              src="/afsal-portrait.png"
            />
            <div aria-hidden="true" className="photo-wash photo-wash--portrait" />
            <div className="frame-label">
              <span>THE HUMAN BEHIND THE CODE</span>
              <span>KERALA · INDIA</span>
            </div>
            <KeralaStamp />
            <div className="photo-caption">
              <span>Growing up green. Going places.</span>
              <span className="caption-squiggle">↗</span>
            </div>
          </div>
          <div aria-hidden="true" className="float-note float-note--coffee">
            <span className="note-icon">C</span>
            <span>Coffee first.<br />Then good code.</span>
          </div>
          <div aria-hidden="true" className="float-note float-note--ride">
            <span className="ride-icon">↗</span>
            <span>ONE MORE<br />QUIET ROAD</span>
          </div>
          <div aria-hidden="true" className="art-coordinate">
            SOFTWARE &nbsp;·&nbsp; HARDWARE &nbsp;·&nbsp; NETWORKS
          </div>
          <div className="ai-orbit" aria-label="Curious about thoughtful, human-centered AI">
            <span aria-hidden="true" className="ai-orbit-spark">✳</span>
            <span>CURIOUS ABOUT AI</span>
            <span className="ai-orbit-note">always human-first</span>
          </div>
        </div>
      </div>
      <div aria-label="Coding, thoughtful AI, security, hardware, networking, cycling, and coffee" className="ticker">
        <div className="ticker-track">
          {[0, 1].map((copy) => (
            <span aria-hidden={copy === 1} className="ticker-set" key={copy}>
              <span>PASSIONATE ABOUT THE CRAFT</span><i>✳</i>
              <span>HUMAN-CENTRED AI</span><i>✳</i>
              <span>HARDWARE &amp; NETWORKS</span><i>✳</i>
              <span>TAKE THE LONG WAY HOME</span><i>✳</i>
              <span>COFFEE, THEN CODE</span><i>✳</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, note, light = false }) {
  return (
    <div className={`section-heading reveal${light ? " section-heading--light" : ""}`}>
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {note && <p className="section-note">{note}</p>}
    </div>
  );
}

function Projects() {
  return (
    <section className="work-section section-pad" id="work">
      <div className="wide-container">
        <SectionHeading
          eyebrow="THE WORK, WITHOUT THE JARGON"
          note="A few of the products I’ve helped bring to life—with thoughtful engineering behind the scenes."
          title={<>Making things<br /><em>work better.</em></>}
        />
        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card reveal reveal--delay-${(index % 3) + 1}`}
              key={project.name}
            >
              <div className={`project-image ${project.className}`}>
                <img alt={project.alt} loading="lazy" src={project.image} />
                <span className="project-number">{project.number}</span>
                <span className="project-category">{project.category}</span>
              </div>
              <div className="project-info">
                <div className="project-heading">
                  <h3>{project.name}</h3>
                  <span aria-hidden="true" className="project-arrow"><ArrowIcon diagonal /></span>
                </div>
                <p>{project.description}</p>
                <div className="project-stack">{project.stack}</div>
              </div>
            </article>
          ))}
        </div>
        <div className="project-note reveal">
          <span className="note-star">✳</span>
          <p>Like a coffee estate after rain, good work grows with time, care, and a little sunshine.</p>
        </div>
        <section aria-labelledby="engineering-values-title" className="engineering-values reveal">
          <div className="engineering-values-heading">
            <span className="eyebrow">HOW I LIKE TO WORK</span>
            <h3 id="engineering-values-title">Good solutions.<br /><em>Made thoughtfully.</em></h3>
            <p>I enjoy turning real needs into useful software—without wasting time or cutting corners.</p>
          </div>
          <div className="engineering-principles">
            <article>
              <span className="principle-number">01</span>
              <h4>Build what matters</h4>
              <p>Find a practical path from idea to a solution people can use, with a focus on delivering efficiently.</p>
            </article>
            <article>
              <span className="principle-number">02</span>
              <h4>Secure by design</h4>
              <p>Keep security in the conversation from the start, with careful coding and thoughtful API design.</p>
            </article>
            <article>
              <span className="principle-number">03</span>
              <h4>Improve continuously</h4>
              <p>Look for ways to make solutions faster, clearer, and easier to maintain as they grow.</p>
            </article>
          </div>
          <div className="opensource-invite">
            <span aria-hidden="true" className="opensource-mark">✳</span>
            <p><strong>Open source is better together.</strong> I’m happy to contribute, share what I learn, and collaborate on useful projects.</p>
            <span className="opensource-stamp">OPEN<br />TO COLLABORATE</span>
          </div>
        </section>
      </div>
    </section>
  );
}

function SchoolPupil({ x, y, scale, shirt, turn = 0 }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${turn}) scale(${scale})`}>
      <path className="school-person-hair" d="M-12 1q-2-15 11-16 15 0 14 16l-5-4-4-6-4 5-7 3z" />
      <circle className="school-person-face" cx="0" cy="0" r="11" />
      <path className="school-person-neck" d="M-4 9h8v9h-8z" />
      <path className="school-person-shirt" d="M-13 16q13-8 26 0l7 34q-20 9-40 0z" style={{ "--shirt-color": shirt }} />
      <path className="school-person-arms" d="M-10 21q-12-9-24-20m44 20q10 8 21-1" />
      <path className="school-person-legs" d="m-9 49-3 28m21-28 4 28" />
      <path className="school-person-shoes" d="M-15 77h8m12 0h8" />
    </g>
  );
}

function SchoolScene({ name, variant, description }) {
  const isCollege = variant === "pptm";
  const pupils = [
    { x: 120, y: 322, scale: 0.9, shirt: "#c94d3b", turn: -8 },
    { x: 195, y: 336, scale: 0.83, shirt: "#417b63", turn: 8 },
    { x: 275, y: 320, scale: 1.02, shirt: "#e5aa3c", turn: -4 },
    { x: 375, y: 331, scale: 0.9, shirt: "#4b6f9a", turn: 7 },
    { x: 468, y: 322, scale: 0.94, shirt: "#b94c5b", turn: -6 },
  ];

  return (
    <div
      className={`school-illustration school-illustration--${variant}`}
      role="img"
      aria-label={description}
    >
      {variant === "oriental" ? (
        <>
          <img
            alt=""
            className="school-illustration-photo"
            src="/oriental-school.png"
          />
          <span aria-label="Oriental School" className="oriental-school-sign">
            <span>ORIENTAL</span>
            <span>SCHOOL</span>
          </span>
        </>
      ) : isCollege ? (
        <>
          <img
            alt=""
            className="school-illustration-photo"
            src="/pptm-college.png"
          />
          <span aria-label="PPTM Arts College" className="pptm-college-sign">
            <span>PPTM</span>
            <span>ARTS COLLEGE</span>
          </span>
        </>
      ) : (
      <svg aria-hidden="true" viewBox="0 0 720 440">
        <defs>
          <linearGradient id={`school-sky-${variant}`} x2="0" y2="1">
            <stop stopColor={isCollege ? "#91c8d0" : "#79c6d0"} />
            <stop offset="1" stopColor={isCollege ? "#f8d48c" : "#ffe09a"} />
          </linearGradient>
          <linearGradient id={`school-wall-${variant}`} x2="0" y2="1">
            <stop stopColor={isCollege ? "#f2d6a1" : "#f6d79a"} />
            <stop offset="1" stopColor={isCollege ? "#d39a61" : "#d8834e"} />
          </linearGradient>
          <linearGradient id={`school-roof-${variant}`} x2="0" y2="1">
            <stop stopColor={isCollege ? "#8f4735" : "#b44f35"} />
            <stop offset="1" stopColor={isCollege ? "#563b36" : "#713a31"} />
          </linearGradient>
        </defs>
        <g className="school-watercolor">
        <path className="school-sky" d="M0 0h720v310H0z" fill={`url(#school-sky-${variant})`} />
        <circle className="school-sun" cx="625" cy="67" r="34" />
        <path className="school-cloud" d="M72 84q14-25 39-9 18-34 47-8 28-2 28 23H72zm425-20q14-20 34-7 18-28 41-6 22-1 24 20h-99z" />
        <path className="school-hill" d="M0 239q88-76 175-23t174 4q98-67 188-8t183-4v111H0z" />
        <path className="school-ground" d="M0 282q130-35 235-6t246-5q125-24 239 12v157H0z" />
        <path className="school-ground-wash" d="M0 369q108-27 220-3t241-4q125-25 259 5v73H0z" />

        <g className="school-palm school-palm--left">
          <path d="M47 292q16-81 17-153" />
          <path d="M61 143q-57-52-54-4 32-7 54 4-33-52-5-57 9 23 5 57 13-65 41-47 8 18-32 48 53-30 59-2-15 16-66 1 61 10 49 37-29 1-51-35Z" />
        </g>
        <g className="school-palm school-palm--right">
          <path d="M665 292q-11-69-5-139" />
          <path d="M660 153q-47-45-52-6 31-4 52 6-30-45-4-51 8 18 5 51 12-57 36-42 7 16-29 42 46-26 52-1-12 14-57 2 50 8 39 31-24 1-43-31Z" />
        </g>

        <g className="school-building">
          <path className="school-building-shadow" d="M95 284h530v16H95z" />
          <path className="school-wall" d="M140 160h440v132H140z" fill={`url(#school-wall-${variant})`} />
          {isCollege ? (
            <>
              <path className="school-roof" d="M112 163 360 89l252 74H112Z" fill={`url(#school-roof-${variant})`} />
              <path className="school-roof-edge" d="M112 163h500" />
              <path className="school-roof-tiles" d="M166 147q194-26 388 0M190 125q170-22 340 0M219 106q141-17 282 0M146 153l-12-9m52 5-9-15m67 9-6-18m63 14-2-20m65 20 2-20m63 24 6-18m61 32 9-15m46 24 12-9" />
              <path className="school-veranda" d="M121 271h478v21H121z" />
              <path className="school-college-arch" d="M296 292v-93h128v93z" />
              <path className="school-college-door" d="M328 291v-67h64v67z" />
              <path className="school-window" d="M172 193h67v49h-67zm309 0h67v49h-67z" />
              <path className="school-window-cross" d="M205 193v49m-33-24h67m276-25v49m-33-24h67" />
              <path className="school-column" d="M267 174h18v97h-18zm169 0h18v97h-18z" />
            </>
          ) : (
            <>
              <path className="school-roof" d="m105 170 58-67h394l58 67H105Z" fill={`url(#school-roof-${variant})`} />
              <path className="school-roof-edge" d="M105 170h510" />
              <path className="school-roof-tiles" d="M147 151q213-25 426 0M164 131q196-22 392 0M181 112q179-15 358 0M153 153l-11-12m55 5-8-16m69 10-5-17m67 13-2-20m67 20 2-20m67 24 5-17m69 31 8-16m46 23 11-12" />
              <path className="school-veranda" d="M119 270h482v22H119z" />
              <path className="school-window" d="M166 194h63v47h-63zm111 0h63v47h-63zm210 0h63v47h-63z" />
              <path className="school-window-cross" d="M197 194v47m-31-23h63m111-24v47m-31-23h63m241-24v47m-31-23h63" />
              <path className="school-pillar" d="M128 174h17v96h-17zm100 0h17v96h-17zm100 0h17v96h-17zm100 0h17v96h-17zm100 0h17v96h-17z" />
              <path className="school-door" d="M344 217h38v75h-38z" />
              <path className="school-steps" d="M326 292h74v10h-74zm-12 10h98v9h-98z" />
            </>
          )}
          <path className="school-sign-frame" d="M163 132h394v58H163z" />
          <path className="school-signboard" d="M172 140h376v42H172z" />
        </g>

        <g className="school-flowerbeds">
          <path d="M38 365q58-19 108 1-44 13-108-1Zm505 1q58-20 128 1-61 13-128-1Z" />
          <circle cx="68" cy="354" r="5" /><circle cx="91" cy="360" r="4" /><circle cx="585" cy="356" r="5" /><circle cx="611" cy="361" r="4" />
        </g>
        <g className="school-children">
          {pupils.map((pupil) => <SchoolPupil key={pupil.x} {...pupil} />)}
        </g>
        <g className="school-teacher" transform="translate(564 302)">
          <path className="teacher-hair" d="M-12 0q-1-16 12-16 14 0 13 17l-5-5-4-7-7 7z" />
          <circle className="school-person-face" cx="0" cy="0" r="12" />
          <path className="school-teacher-clothes" d="M-13 17q14-9 27 0l12 69h-52z" />
          <path className="school-person-arms" d="M-10 24q-15-4-25-19m47 20q12-2 18-16" />
          <path className="school-person-legs" d="m-11 83-2 31m21-31 4 31" />
        </g>
        <circle className="school-play-ball" cx="330" cy="400" r="13" />
        <path className="school-path" d="M0 427q130-32 258 1t235-1q116-20 227 0v13H0z" />
        </g>
        <text className="school-sign-text" x="360" y="168" textAnchor="middle">{name}</text>
      </svg>
      )}
      <span className="school-illustration-caption">{isCollege ? "THE COLLEGE CHAPTER" : "THE SCHOOLYARD YEARS"}</span>
    </div>
  );
}

function HardwareDesk() {
  return (
    <section aria-labelledby="hardware-title" className="hardware-section section-pad" id="hardware">
      <div className="wide-container">
        <SectionHeading
          eyebrow="BEYOND THE SCREEN"
          note="I enjoy finding the cause of a problem, getting a machine back on its feet, and making sure everything works together."
          title={<>Hands-on with<br /><em>hardware.</em></>}
        />
        <div className="hardware-showcase">
          <div className="hardware-gallery">
            <figure className="hardware-photo hardware-photo--board reveal">
              <img
                alt="Close-up of a green motherboard and its electronic components"
                loading="lazy"
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85"
              />
              <figcaption><span>01 / THE BOARD</span><span>Curiosity down to the chip</span></figcaption>
            </figure>
            <figure className="hardware-photo hardware-photo--bench reveal reveal--delay-1">
              <img
                alt="Computer hardware components arranged for a hands-on build"
                loading="lazy"
                src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=900&q=85"
              />
              <figcaption>02 / UNDER THE CASE</figcaption>
            </figure>
            <figure className="hardware-photo hardware-photo--detail reveal reveal--delay-2">
              <img
                alt="Detailed view of computer circuitry and components"
                loading="lazy"
                src="https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=900&q=85"
              />
              <figcaption>03 / TRACE THE FAULT</figcaption>
            </figure>
          </div>
          <div className="hardware-copy reveal reveal--delay-1">
            <span className="hardware-kicker">DIAGNOSE · REPAIR · RESTART</span>
            <h3 id="hardware-title">Not every bug<br />lives in the code.</h3>
            <p>
              I troubleshoot and debug computer hardware, enjoy exploring
              motherboard and chip-level details, and have installed and
              configured a range of operating systems. I like understanding
              what’s happening beneath the screen—not just getting a machine
              running, but figuring out why it stopped.
            </p>
            <ul className="hardware-skills">
              <li><span>01</span><span><strong>Hardware troubleshooting</strong><small>Trace symptoms to their source</small></span></li>
              <li><span>02</span><span><strong>Board-level curiosity</strong><small>Motherboards, chips, and components</small></span></li>
              <li><span>03</span><span><strong>Operating system setup</strong><small>Install, configure, and get back to work</small></span></li>
            </ul>
            <span className="hardware-signoff">A practical mind, from silicon to software.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function LifeNotes() {
  return (
    <section className="life-section section-pad" id="story">
      <div className="wide-container">
        <SectionHeading
          eyebrow="OUTSIDE THE TERMINAL"
          light
          note="Forest air after rain, quiet coffee-shop mornings, and a bright patch of sunshine. Nature is my favourite reset."
          title={<>A few things<br /><em>that feel like me.</em></>}
        />
        <div className="life-grid">
          <article className="life-card life-card--coffee-shop reveal">
            <img
              alt="A welcoming old-school neighbourhood coffee shop"
              loading="lazy"
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=85"
            />
            <div className="life-shade" />
            <div className="life-card-top"><span>01 — THE EVERYDAY RITUAL</span><span>✳</span></div>
            <div className="life-card-copy">
              <span className="life-kicker">OLD-SCHOOL COFFEE SHOP PERSON</span>
              <h3>One good coffee.<br /><em>Take it slow.</em></h3>
              <p>A little neighbourhood café charm, coffee in a proper cup, and unhurried conversations. Nothing fancy. Just right.</p>
            </div>
            <span aria-hidden="true" className="life-card-mark">KAAPI</span>
          </article>

          <article className="life-card life-card--ride reveal reveal--delay-1">
            <img
              alt="A winding forest road through the Anaimalai Hills in India's Western Ghats"
              loading="lazy"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Road_widening_in_Pollachi-Valparai_forest_road_Anaimalai_hills%2C_Southern_Western_Ghats_1_DSC9135.jpg/1280px-Road_widening_in_Pollachi-Valparai_forest_road_Anaimalai_hills%2C_Southern_Western_Ghats_1_DSC9135.jpg"
            />
            <div className="life-shade" />
            <div className="life-card-top"><span>02 — THE LONG WAY ROUND</span><span>↗</span></div>
            <div aria-label="Hand-painted illustrations of a deer, tiger, and Asian elephant in the forest" className="forest-animals" role="img">
              <svg aria-hidden="true" viewBox="0 0 360 150">
                <g className="forest-animal forest-animal--deer" transform="translate(15 43)">
                  <ellipse cx="37" cy="51" rx="25" ry="12" />
                  <path d="M53 48 62 32l10-8 9 4-2 12-10 8-8 6M66 31l-5-7m8 6 2-9m4 10 7-7m-13 9 9-2" />
                  <path d="m22 58-2 25m13-23-1 25m18-27 4 25m-15-26 7 24" />
                  <path d="m20 82-4 2m17-1-4 2m24-2-4 2m9-4-4 2M29 43l-8-7m45-4 7-1" />
                  <circle cx="73" cy="34" r="1.5" className="animal-eye" />
                </g>
                <g className="forest-animal forest-animal--tiger" transform="translate(132 69)">
                  <ellipse cx="40" cy="30" rx="30" ry="13" />
                  <circle cx="70" cy="25" r="10" />
                  <path d="m64 17-2-6 7 3m7 1 5-5 1 8m-67 20-5 26m16-25-2 27m27-27 3 26m14-31 9 24m-71 3-5 1m17 0-5 1m31-1-4 1m31-2-4 1M9 29Q0 21 5 15" />
                  <path d="m22 20-6 9m18-11-6 11m20-11-5 12m17-12-5 12m11 1 8-5" className="tiger-stripe" />
                  <circle cx="73" cy="24" r="1.4" className="animal-eye" />
                </g>
                <g className="forest-animal forest-animal--elephant" transform="translate(251 48)">
                  <ellipse cx="39" cy="43" rx="34" ry="25" />
                  <path d="M62 36q22-7 21 10v17q0 11-8 10-7-1-3-10l1-17M12 48Q0 44 3 33q3-11 13-9m-4 47-2 21m21-18-1 18m27-23 2 23m14-23 5 19m-4 3h7" />
                  <path d="M65 39q-11 15-1 22m-44-13q5 14 14 15" className="elephant-detail" />
                  <circle cx="68" cy="34" r="1.8" className="animal-eye" />
                </g>
              </svg>
            </div>
            <figure className="bullet-photo">
              <img
                alt="Royal Enfield Bullet Classic 500 on a ride in the Ananthagiri Hills"
                loading="lazy"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Sun_shade_capture_on_Royal_Enfield_Bullet_Classic_500.jpg/960px-Sun_shade_capture_on_Royal_Enfield_Bullet_Classic_500.jpg"
              />
              <figcaption>
                <a href="https://commons.wikimedia.org/wiki/File:Sun_shade_capture_on_Royal_Enfield_Bullet_Classic_500.jpg" rel="noreferrer" target="_blank">
                  BULLET CLASSIC · KMURALIMECH · CC BY-SA 4.0
                </a>
              </figcaption>
            </figure>
            <a
              className="life-card-credit"
              href="https://commons.wikimedia.org/wiki/File:Road_widening_in_Pollachi-Valparai_forest_road_Anaimalai_hills,_Southern_Western_Ghats_1_DSC9135.jpg"
              rel="noreferrer"
              target="_blank"
            >
              ANAIMALAI HILLS, INDIA · PJeganathan · CC BY-SA 4.0
            </a>
            <div className="life-card-copy">
              <span className="life-kicker">WESTERN GHATS · INDIA</span>
              <h3>Take the old road.<br /><em>Into the green.</em></h3>
              <p>I love exploring before setting off, then riding the Bullet along India’s forest roads. The Western Ghats are home to deer, elephants, and tigers—always admired from a respectful distance.</p>
            </div>
            <span aria-hidden="true" className="life-card-mark">BULLET</span>
          </article>

          <article className="life-card life-card--coffee reveal reveal--delay-2">
            <img
              alt="Coffee brewing slowly in morning light"
              loading="lazy"
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85"
            />
            <div className="life-shade" />
            <div className="life-card-top"><span>03 — THE OTHER CUP</span><span>✳</span></div>
            <div className="life-card-copy">
              <span className="life-kicker">COFFEE ON SLOW MORNINGS</span>
              <h3>Different cup.<br /><em>Same pause.</em></h3>
              <p>A good brew, a slower start, and five minutes before the tabs open.</p>
            </div>
            <span aria-hidden="true" className="life-card-mark">KAAPI</span>
          </article>

          <article className="city-card reveal reveal--delay-3">
            <div className="city-topline"><span>04 — THE NEXT CHAPTER</span><span>IN PROGRESS</span></div>
            <span aria-hidden="true" className="city-sun" />
            <div aria-hidden="true" className="city-skyline">
              <span /><span /><span /><span /><span /><span /><span />
            </div>
            <div className="city-copy">
              <span className="life-kicker">NEW STREETS, SAME ROOTS</span>
              <h3>Making room<br />for <em>what’s next.</em></h3>
              <p>New city, new routines, familiar things packed along: curiosity, the bike, and a good cup of coffee.</p>
              <span className="city-route">KERALA <i>⟶</i> THE CITY</span>
            </div>
            <span aria-hidden="true" className="city-postmark">ON<br />MY WAY</span>
          </article>
        </div>
        <article className="kerala-coffee-shop reveal" aria-labelledby="coffee-shop-title">
          <div className="coffee-shop-scene" aria-label="Hand-painted illustration of an old Kerala coffee shop" role="img">
            <div aria-hidden="true" className="coffee-shop-sun" />
            <div aria-hidden="true" className="coffee-shop-roof" />
            <div className="coffee-shop-building">
              <div aria-hidden="true" className="coffee-shop-upper-window"><i /><i /><i /></div>
              <div aria-hidden="true" className="coffee-shop-plank"><span>☕</span></div>
              <div aria-hidden="true" className="coffee-shop-awning" />
              <div aria-hidden="true" className="coffee-shop-window">
                <i className="coffee-bean-jar" />
                <i className="coffee-bean-jar" />
                <i className="coffee-cup" />
              </div>
              <div aria-hidden="true" className="coffee-shop-door"><i /></div>
              <div aria-hidden="true" className="coffee-shop-counter">
                <i className="coffee-pot" />
                <i className="coffee-cup coffee-cup--counter" />
                <i className="coffee-cup coffee-cup--counter" />
              </div>
            </div>
            <div aria-hidden="true" className="coffee-shop-stool"><i /></div>
            <span className="coffee-shop-caption">A CUP, A CHAT, A LITTLE SHADE</span>
          </div>
          <div className="coffee-shop-copy">
            <span className="eyebrow">KERALA · A FAMILIAR LITTLE CORNER</span>
            <h3 id="coffee-shop-title">An old coffee shop.<br /><em>Nothing fancy. Just lovely.</em></h3>
            <p>A hand-painted memory of a neighbourhood coffee shop: timber shutters, a steel pot on the counter, the smell of fresh coffee, and time for one more conversation.</p>
            <span className="coffee-shop-note">FRESH COFFEE &nbsp;·&nbsp; EASY COMPANY &nbsp;·&nbsp; NO RUSH</span>
          </div>
        </article>
        <section aria-labelledby="school-days-title" className="school-days">
          <div className="school-days-heading">
            <span className="eyebrow">THE FIRST CHAPTERS</span>
            <h3 id="school-days-title">Before the code,<br /><em>there was the school bell.</em></h3>
            <p>A little nod to the 90s: classroom chatter, games in the yard, and teachers who made those early days matter.</p>
          </div>
          <div className="school-days-gallery">
            <article className="school-memory">
              <SchoolScene
                description="Watercolor-style illustration of a Kerala schoolyard with children playing, tropical greenery, and an Oriental School sign; children have no realistic facial details"
                name="ORIENTAL SCHOOL"
                variant="oriental"
              />
              <div className="school-memory-caption">
                <span>01 · SCHOOL DAYS</span>
                <h4>Oriental School</h4>
                <p>SSLC · Higher Secondary</p>
              </div>
            </article>
            <article className="school-memory">
              <SchoolScene
                description="Pen-and-ink architectural drawing of a college building with a PPTM Arts College sign"
                name="PPTM ARTS COLLEGE"
                variant="pptm"
              />
              <div className="school-memory-caption">
                <span>02 · COLLEGE DAYS</span>
                <h4>PPTM Arts College</h4>
                <p>BCA · University of Calicut</p>
              </div>
            </article>
          </div>
        </section>
        <section aria-labelledby="nature-pause-title" className="nature-pause">
          <div
            aria-label="A hand-painted Kerala landscape at sunset, with green paddy fields, coconut palms, hills, and a tractor"
            className="nature-pause-scene"
            role="img"
          >
            <svg aria-hidden="true" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 480">
              <defs>
                <linearGradient id="nature-sunset-sky" x2="0" y2="1">
                  <stop stopColor="#e9b882" />
                  <stop offset=".58" stopColor="#d78758" />
                  <stop offset="1" stopColor="#8b6949" />
                </linearGradient>
                <linearGradient id="nature-paddy" x2="0" y2="1">
                  <stop stopColor="#718553" />
                  <stop offset="1" stopColor="#344c37" />
                </linearGradient>
                <radialGradient id="nature-sunset-glow">
                  <stop stopColor="#ffe2a0" stopOpacity=".9" />
                  <stop offset="1" stopColor="#ffc877" stopOpacity="0" />
                </radialGradient>
              </defs>
              <path fill="url(#nature-sunset-sky)" d="M0 0h1200v480H0z" />
              <ellipse cx="864" cy="232" fill="url(#nature-sunset-glow)" rx="210" ry="180" />
              <circle className="nature-sunset-disc" cx="864" cy="220" r="52" />
              <path fill="#9d7657" d="M0 258q136-74 267-9 102-94 229-23 120-76 242 1 124-83 253-7 107-67 209-12v131H0z" />
              <path fill="#667a50" d="M0 292q158-64 300-5 138-72 283-9 129-67 271-1 157-66 346-7v104H0z" />
              <path fill="url(#nature-paddy)" d="M0 339q144-41 298-9 151-50 325-1 175-40 331 2 131-39 246-4v153H0z" />
              <path fill="#3c593d" d="M0 398q173-48 351-7 182-47 352-3 241-47 497 2v90H0z" />
              <path d="M0 403q173-48 351-7m0 7q182-47 352-3m0 3q241-47 497 2M0 438q173-48 351-7m0 7q182-47 352-3m0 3q241-47 497 2" fill="none" stroke="#a3a26a" strokeOpacity=".44" strokeWidth="3" />
              <path d="M0 468q150-22 319 0t327 0 330 0 224 0" fill="none" stroke="#d2bc82" strokeOpacity=".55" strokeWidth="4" />
              <g className="nature-coconut nature-coconut--left" fill="#334834" stroke="#334834" strokeLinecap="round" strokeWidth="7">
                <path d="M105 361Q93 190 139 71" fill="none" strokeWidth="11" />
                <path d="M139 76Q61 28 20 57q60 0 113 27-66-62-103-44 42 17 104 48Q103 19 75 13q20 25 61 67 5-73 33-78-11 38-26 80 46-61 80-50-35 19-89 61 64-30 98-5-51-8-106 10Z" stroke="none" />
              </g>
              <g className="nature-coconut nature-coconut--right" fill="#304431" stroke="#304431" strokeLinecap="round">
                <path d="M1080 365Q1086 192 1044 58" fill="none" strokeWidth="13" />
                <path d="M1046 65q-80-41-117-6 59-7 115 18-68-54-101-32 44 14 102 37-34-62-64-66 22 24 61 75-1-76 27-81-8 39-18 83 42-65 77-58-34 22-84 69 62-34 98-12-52-5-103 18Z" stroke="none" />
              </g>
              <g className="nature-tractor" fill="#3e4c35" stroke="#27382c" strokeWidth="5">
                <path d="M730 355h116v42H730z" />
                <path d="M778 311h56l25 44h-89z" />
                <path d="M788 319h34l15 27h-49z" fill="#d7a36d" strokeWidth="3" />
                <path d="M700 345h43v52h-43z" />
                <circle cx="738" cy="401" r="28" fill="#2f352b" />
                <circle cx="738" cy="401" r="11" fill="#b3a17a" strokeWidth="3" />
                <circle cx="841" cy="395" r="19" fill="#2f352b" />
                <circle cx="841" cy="395" r="7" fill="#b3a17a" strokeWidth="3" />
                <path d="M685 355h23v18h-23z" fill="#d29751" strokeWidth="3" />
                <path d="M727 350h-13" fill="none" strokeWidth="7" />
              </g>
              <path d="M0 356q75-28 151 0m909 1q120-40 240 0" fill="none" stroke="#d1bb7d" strokeOpacity=".55" strokeWidth="3" />
            </svg>
            <div className="nature-pause-shade" />
            <div className="nature-pause-copy">
              <span className="eyebrow">A QUIET EVENING IN KERALA</span>
              <h3 id="nature-pause-title">Let the mind settle.<br /><em>Let good work grow.</em></h3>
              <p>A calm mind and a little greenery can restore focus—and make room for more productive, thoughtful work.</p>
            </div>
            <span className="nature-pause-caption">PADDY FIELDS · COCONUT TREES · HOME</span>
          </div>
        </section>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience-section section-pad" id="experience">
      <div className="wide-container">
        <SectionHeading
          eyebrow="A LITTLE CAREER ARCHIVE"
          note="Four chapters, each with its own address. Open the door to see the role, the dates, and a few details from the work."
          title={<>Places I’ve<br /><em>built things.</em></>}
        />
        <figure className="career-journey reveal">
          <img
            alt="Seven-year software engineering journey with project milestones, skills, collaboration, and continued learning"
            src="/afsal-career-journey.png"
          />
          <figcaption>
            <span className="eyebrow">SEVEN YEARS OF BUILDING, LEARNING &amp; GROWING</span>
            <h3>A journey shaped by curiosity,<br /><em>craft, and collaboration.</em></h3>
          </figcaption>
        </figure>
        <div className="experience-list">
          {experience.map((job, index) => (
            <article
              className={`experience-property reveal reveal--delay-${Math.min(index + 1, 3)}`}
              key={job.company}
            >
              <div className={`building-facade building-facade--${index + 1}`}>
                <div aria-hidden="true" className="building-upper-windows"><i /><i /><i /></div>
                <div className="building-topline">
                  <span>CAREER ARCHIVE</span>
                  <span>NO. 0{index + 1}</span>
                </div>
                <div className="building-sign">
                  <h3>{job.company}</h3>
                  <span className="building-sign-label">SOFTWARE &amp; ENGINEERING</span>
                  <span className="building-sign-rule" />
                </div>
                <div aria-hidden="true" className="building-awning" />
                <div aria-hidden="true" className="building-shop-window"><i /><i /><i /></div>
                <div aria-hidden="true" className="building-shop-door"><i /></div>
                <div aria-hidden="true" className="building-stoop" />
                <span className="building-dateline">{job.dates}</span>
              </div>
              <div className="building-details">
                <div className="building-role">
                  <span>THE ROLE</span>
                  <h4>{job.role}</h4>
                </div>
                <p>{job.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-photo">
        <img
          alt="An old lantern hanging beside a quiet rural path at sunset"
          src="/kerala-lantern.jpeg"
        />
        <span className="about-photo-tag">KERALA · A QUIET LIGHT ON THE WAY HOME</span>
      </div>
      <div className="about-content">
        <span className="eyebrow">A LITTLE MORE ABOUT AFSAL</span>
        <h2>Engineer’s head.<br /><em>Explorer’s heart.</em></h2>
        <p className="about-lead">
          I love the craft of coding. I’m a full-stack software engineer with 7+
          years of experience building secure, high-performance web applications
          and multi-tenant SaaS products.
        </p>
        <p>
          From a polished frontend to the database underneath, I enjoy seeing
          how the whole system fits together. I’m also a hardware and network
          specialist, and care about dependable software, well-documented APIs,
          performance that holds up, and the details that make a product easier to use.
        </p>
        <p>
          Outside work: cycling, finding a good neighbourhood coffee shop, and
          exploring where AI can make useful software even better. Kerala roots;
          happiest among forest trails, coffee estates, and the fresh air after
          a rain shower.
        </p>
        <div aria-label="Technical skills" className="skills-list">
          {skills.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
        <div className="security-note">
          <span aria-hidden="true" className="security-mark">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 3 19 6v5c0 4.7-2.9 8.3-7 10-4.1-1.7-7-5.3-7-10V6l7-3Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </span>
          <span>
            <strong>Security-minded by nature.</strong>
            <span>Secure coding, thoughtful API design, and building trust into the software.</span>
          </span>
        </div>
        <div className="ai-note">
          <span aria-hidden="true" className="ai-note-mark">✳</span>
          <span>
            <strong>Curious about what comes next.</strong>
            <span>Exploring human-first AI while staying passionate about the craft of coding.</span>
          </span>
          <span className="ai-note-label">AI · HUMAN FIRST</span>
        </div>
        <div className="about-credentials">
          <div><span>EDUCATION</span><p>Oriental School · PPTM Arts College</p></div>
          <div><span>ALSO SPEAK</span><p>English · Hindi · Arabic</p></div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer className="contact-section" id="contact">
      <div className="wide-container">
        <div className="contact-top">
          <div className="contact-copy reveal">
            <span className="eyebrow">NO FORM. NO FUSS. JUST SAY HI.</span>
            <h2>Got a good idea?<br /><em>Let’s talk it over.</em></h2>
            <p>We can talk software, AI, security, cycling, or where to find genuinely good coffee.</p>
            <a className="button button--cream" href={`mailto:${emailAddress}`}>
              Write me an email <ArrowIcon diagonal />
            </a>
          </div>
          <div className="contact-card reveal reveal--delay-2">
            <span className="contact-stamp">OPEN<br />INVITE</span>
            <span className="contact-card-label">YOUR INBOX, MY INBOX</span>
            <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
            <span className="contact-card-rule" />
            <div className="contact-socials">
              <a
                className="linkedin-link"
                href={linkedinUrl}
                rel="noreferrer"
                target="_blank"
              >
                Find me on LinkedIn <ArrowIcon diagonal />
              </a>
              <a
                className="linkedin-link"
                href={whatsappUrl}
                rel="noreferrer"
                target="_blank"
              >
                WhatsApp +91 87142 12004 <ArrowIcon diagonal />
              </a>
            </div>
            <span className="contact-card-doodle" aria-hidden="true">with care &amp; a little coffee</span>
          </div>
        </div>
        <div className="site-footer">
          <BrandMark />
          <span>© {new Date().getFullYear()} Muhammed Afsal MT</span>
          <a href="#home">BACK TO THE TOP ↑</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" },
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Hero />
      <main id="main">
        <Projects />
        <HardwareDesk />
        <LifeNotes />
        <Experience />
        <About />
      </main>
      <Contact />
    </>
  );
}

export default App;
