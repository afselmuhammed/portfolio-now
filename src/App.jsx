import React, { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import HoverField from "./HoverField.jsx";
import { initMagneticHover } from "./magnetic.js";
import moodLibrary from "./mood-library.json";
import {
  FaAws,
  FaBicycle,
  FaCloudMoon,
  FaDocker,
  FaEnvelope,
  FaGithub,
  FaHandshake,
  FaLeaf,
  FaLinkedin,
  FaMapMarkedAlt,
  FaMicrochip,
  FaMusic,
  FaRoad,
  FaNetworkWired,
  FaPause,
  FaPhp,
  FaPlay,
  FaReact,
  FaShieldAlt,
  FaSmile,
  FaStepBackward,
  FaStepForward,
  FaTools,
  FaWhatsapp,
} from "react-icons/fa";
import {
  SiBurpsuite,
  SiJavascript,
  SiJenkins,
  SiJira,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiTypescript,
} from "react-icons/si";
import {
  HiCodeBracketSquare,
  HiCpuChip,
  HiServerStack,
  HiShieldCheck,
  HiSparkles,
  HiUserGroup,
  HiViewColumns,
} from "react-icons/hi2";

const linkedinUrl = "https://www.linkedin.com/in/afsal-muhammed-5a2242b9/";
const emailAddress = "afsalmtcmd@gmail.com";
const whatsappUrl = "https://wa.me/918714212004";

const moods = [
  { id: "all", label: "All moods", Icon: FaMusic },
  { id: "calm", label: "Calm", Icon: FaCloudMoon },
  { id: "happy", label: "Happy", Icon: FaSmile },
  { id: "soothing", label: "Soothing", Icon: FaLeaf },
];

const languages = [
  { id: "all", label: "All" },
  { id: "ml", label: "ML" },
  { id: "en", label: "EN" },
];

const experience = [
  {
    title: "Full Stack Software Engineer",
    company: "Pixbit Solutions",
    dates: "2025 — Now",
    note: "Shipping secure full stack products with AppSec baked in.",
    sketch: "laptop",
  },
  {
    title: "Associate Senior Software Engineer",
    company: "Fingent",
    dates: "2021 — 2025",
    note: "Enterprise SaaS, multi-tenant systems, and client delivery.",
    sketch: "building",
  },
  {
    title: "Software Engineer",
    company: "Excelledia Ventures",
    dates: "2020 — 2021",
    note: "Product engineering across web platforms and integrations.",
    sketch: "rocket",
  },
  {
    title: "Junior Software Engineer",
    company: "Datastone Solutions",
    dates: "2019 — 2020",
    note: "Custom CMS craft — 50+ client websites launched.",
    sketch: "sites",
  },
];

const works = [
  {
    name: "Qure & Cure",
    subtitle: "Hospital Management System",
    year: "2026",
    tags: ["HEALTHCARE", "SAAS"],
    badge: "Self-Developed Product",
    role: "Founder & Full Stack Developer",
    tech: "React, TypeScript, Laravel, PHP, MySQL, REST APIs",
    ownership: "Independently conceptualized and self-developed.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80",
    description:
      "An integrated hospital management platform designed to simplify hospital operations and improve patient experiences.",
    features: [
      "Hospital, doctor and patient management",
      "Appointment and token management",
      "Live token status and patient tracking",
      "Digital prescriptions and medical history",
      "Role-based access control and secure portals",
      "API-driven architecture for future mobile applications",
    ],
  },
  {
    name: "AutoSphere",
    subtitle: "Automotive Business Management System",
    year: "2026",
    tags: ["AUTOMOTIVE", "SAAS"],
    badge: "Self-Developed Product",
    role: "Founder & Full Stack Developer",
    tech: "React, TypeScript, Laravel, PHP, MySQL, REST APIs",
    ownership: "Independently conceptualized and self-developed.",
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1400&q=80",
    description:
      "An all-in-one automotive business management platform designed for car workshops, accessories shops, spare parts stores and car wash businesses.",
    features: [
      "Car wash and repair workshop management",
      "Accessories and spare parts inventory",
      "POS, billing and invoice management",
      "Customer and vehicle management",
      "Live car wash status tracking",
      "WhatsApp notifications and invoice sharing",
      "Multi-tenant SaaS architecture",
      "Subscription-based access with a 30-day free trial and module-wise billing",
    ],
  },
  {
    name: "Prosper",
    subtitle: "Real Estate SaaS",
    year: "2025",
    tags: ["SAAS", "LARAVEL"],
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
    description:
      "Dubai real-estate SaaS for property discovery, tenant onboarding, and purchase and rental journeys. Built full stack features used by agents and end customers in production.",
  },
  {
    name: "InfinCE",
    subtitle: "Workplace Suite",
    year: "2024",
    tags: ["ENTERPRISE", "REACT"],
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
    description:
      "Multi-tenant cloud collaboration with role-based workspaces and isolated database tenancy. Shipped enterprise workplace modules used across client organizations.",
  },
  {
    name: "ISORobot",
    subtitle: "Compliance Automation",
    year: "2023",
    tags: ["AUTOMATION", "NODE"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    description:
      "Enterprise governance suite for audits, task assignments, and modular regulatory checklists. Helped teams run compliance workflows at scale.",
  },
  {
    name: "Kelmac Learning",
    subtitle: "Learning Platform",
    year: "2022",
    tags: ["EDTECH", "LARAVEL"],
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1400&q=80",
    description:
      "Learning platform for course delivery, automated assessments, certificates, and learner progress tracking for training programs.",
  },
  {
    name: "Parent Alert",
    subtitle: "School Comms",
    year: "2021",
    tags: ["MESSAGING", "LARAVEL"],
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80",
    description:
      "School communications gateway for attendance notifications, exam schedules, and emergency alerts to parents in real time.",
  },
  {
    name: "Custom CMS Sites",
    subtitle: "50+ Client Websites",
    year: "2019",
    tags: ["CMS", "PHP"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    description:
      "Designed and launched 50+ custom client websites on a proprietary CMS with reusable modules, content workflows, and fast business deployments.",
  },
];

const skillGroups = [
  {
    title: "Frontend Development",
    detail: "Building polished, responsive interfaces people enjoy using.",
    Icon: HiCodeBracketSquare,
    items: [
      { name: "React", Icon: FaReact, color: "#61DAFB" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    title: "Backend Development",
    detail: "APIs, multi-tenant systems, and reliable server-side craft.",
    Icon: HiServerStack,
    items: [
      { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
      { name: "PHP", Icon: FaPhp, color: "#777BB4" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
      { name: "NestJS", Icon: SiNestjs, color: "#E0234E" },
    ],
  },
  {
    title: "Application Security",
    detail:
      "Building apps with secured measures end to end—testing with Burp Suite, reCAPTCHA, custom rate limiters, WAF, and layered defenses.",
    Icon: HiShieldCheck,
    items: [
      { name: "Burp Suite", Icon: SiBurpsuite, color: "#FF6633" },
      { name: "reCAPTCHA", Icon: FaShieldAlt, color: "#4285F4" },
      { name: "Rate limiter", Icon: HiCpuChip, color: "#60A5FA" },
      { name: "WAF", Icon: HiShieldCheck, color: "#60A5FA" },
      { name: "Secure coding", Icon: FaShieldAlt, color: "#60A5FA" },
    ],
  },
  {
    title: "Hardware Troubleshooting",
    detail:
      "Diagnosing PC and board-level issues, OS setup, networking, and getting systems back online.",
    Icon: FaTools,
    items: [
      { name: "Hardware diagnostics", Icon: FaMicrochip, color: "#60A5FA" },
      { name: "Networking", Icon: FaNetworkWired, color: "#60A5FA" },
      { name: "OS setup", Icon: FaGithub, color: "#60A5FA" },
      { name: "Secure repair", Icon: FaShieldAlt, color: "#60A5FA" },
    ],
  },
  {
    title: "AI Learning",
    detail:
      "Actively learning AI tools and applying them carefully to speed up coding, docs, and delivery.",
    Icon: HiSparkles,
    items: [
      { name: "AI-assisted coding", Icon: HiSparkles, color: "#60A5FA" },
      { name: "Prompt craft", Icon: HiCodeBracketSquare, color: "#60A5FA" },
      { name: "LLM tooling", Icon: HiCpuChip, color: "#60A5FA" },
    ],
  },
  {
    title: "Client Handling",
    detail:
      "Clear communication, requirement gathering, demos, and keeping stakeholders aligned end to end.",
    Icon: HiUserGroup,
    items: [
      { name: "Requirement gathering", Icon: FaHandshake, color: "#60A5FA" },
      { name: "Stakeholder updates", Icon: HiUserGroup, color: "#60A5FA" },
      { name: "Demo & handover", Icon: FaHandshake, color: "#60A5FA" },
    ],
  },
  {
    title: "Project Tracking",
    detail:
      "Planning and tracking delivery with Jira and OpenProject across sprints, bugs, and releases.",
    Icon: HiViewColumns,
    items: [
      { name: "Jira", Icon: SiJira, color: "#0052CC" },
      { name: "OpenProject", Icon: HiViewColumns, color: "#1F76C2" },
      { name: "Sprint planning", Icon: HiCpuChip, color: "#60A5FA" },
    ],
  },
];

const techStack = [
  { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
  { name: "React", Icon: FaReact, color: "#61DAFB" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "PHP", Icon: FaPhp, color: "#777BB4" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "NestJS", Icon: SiNestjs, color: "#E0234E" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Redis", Icon: SiRedis, color: "#DC382D" },
  { name: "Docker", Icon: FaDocker, color: "#2496ED" },
  { name: "Jenkins", Icon: SiJenkins, color: "#D24939" },
  { name: "AWS", Icon: FaAws, color: "#FF9900" },
  { name: "Jira", Icon: SiJira, color: "#0052CC" },
  { name: "OpenProject", Icon: HiViewColumns, color: "#1F76C2" },
  { name: "Burp Suite", Icon: SiBurpsuite, color: "#FF6633" },
  { name: "reCAPTCHA", Icon: FaShieldAlt, color: "#4285F4" },
  { name: "WAF", Icon: HiShieldCheck, color: "#60A5FA" },
  { name: "Rate Limiter", Icon: HiCpuChip, color: "#60A5FA" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

function MotionBlock({ children, className = "", delay = 0, ...props }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -40px 0px" }}
      variants={{
        hidden: fadeUp.hidden,
        show: {
          ...fadeUp.show,
          transition: { ...fadeUp.show.transition, delay },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

function SunriseSection({
  children,
  className = "",
  id,
  ariaLabel,
  glow = true,
}) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.16, 0.7, 0.95],
    [0, 1, 1, 0.12],
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.2, 0.72, 1],
    [96, 0, 0, -48],
  );
  const glowOpacity = useTransform(
    scrollYProgress,
    [0.02, 0.16, 0.32, 0.55],
    [0, 0.95, 0.4, 0],
  );
  const glowY = useTransform(scrollYProgress, [0.02, 0.28], [60, 0]);

  return (
    <motion.section
      aria-label={ariaLabel}
      className={`sunrise-section section ${className}`.trim()}
      id={id}
      ref={ref}
      style={reduceMotion ? undefined : { opacity, y }}
    >
      {glow && !reduceMotion && (
        <motion.div
          aria-hidden="true"
          className="sunrise-section-glow"
          style={{ opacity: glowOpacity, y: glowY }}
        />
      )}
      <div className="sunrise-section-inner">{children}</div>
    </motion.section>
  );
}

function PenSketch({ type }) {
  const paths = {
    laptop: (
      <>
        <path d="M8 18h48l3 6H5l3-6Z" />
        <path d="M12 18V8.5c0-1.2.8-2 2-2h36c1.2 0 2 .8 2 2V18" />
        <path d="M22 12h6M22 15h10" />
        <path d="M48 11c2.2 0 4 1.8 4 4" />
        <circle cx="50" cy="9" r="1.2" fill="currentColor" stroke="none" />
      </>
    ),
    building: (
      <>
        <path d="M14 50V14c0-1.5 1-2.5 2.5-2.5H47c1.5 0 2.5 1 2.5 2.5v36" />
        <path d="M10 50h44" />
        <path d="M22 50V36h12v14" />
        <path d="M20 20h6M30 20h6M40 20h6M20 28h6M30 28h6M40 28h6" />
        <path d="M34 8v3.5" />
      </>
    ),
    rocket: (
      <>
        <path d="M32 8c8 6 12 16 12 28H20c0-12 4-22 12-28Z" />
        <path d="M20 30c-4 2-7 7-8 12 5-1 10-4 12-8" />
        <path d="M44 30c4 2 7 7 8 12-5-1-10-4-12-8" />
        <circle cx="32" cy="22" r="3.2" />
        <path d="M28 44c1.2 4 2.8 7 4 10 1.2-3 2.8-6 4-10" />
      </>
    ),
    sites: (
      <>
        <path d="M10 16h28v28H10Z" />
        <path d="M10 22h28" />
        <circle cx="14" cy="19" r="1.1" fill="currentColor" stroke="none" />
        <circle cx="18" cy="19" r="1.1" fill="currentColor" stroke="none" />
        <path d="M22 14l18-4v28l-18 4" />
        <path d="M22 20h18M28 30h8M28 35h10" />
        <path d="M48 42c4-1 8 1 10 5" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className="pen-sketch"
      fill="none"
      viewBox="0 0 64 64"
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      >
        {paths[type] || paths.laptop}
      </g>
    </svg>
  );
}

function GearIcon() {
  return (
    <motion.svg
      aria-hidden="true"
      className="gear-icon"
      viewBox="0 0 24 24"
      fill="none"
      animate={{ rotate: 360 }}
      transition={{ duration: 14, ease: "linear", repeat: Infinity }}
    >
      <path
        d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M19.4 13.5a7.8 7.8 0 0 0 .06-1.5 7.8 7.8 0 0 0-.06-1.5l2-1.55-1.9-3.3-2.4.8a7.3 7.3 0 0 0-2.6-1.5L13.1 2h-2.2L10.5 4.95a7.3 7.3 0 0 0-2.6 1.5l-2.4-.8-1.9 3.3 2 1.55a7.8 7.8 0 0 0-.06 1.5c0 .5.02 1 .06 1.5l-2 1.55 1.9 3.3 2.4-.8a7.3 7.3 0 0 0 2.6 1.5L10.9 22h2.2l.4-2.95a7.3 7.3 0 0 0 2.6-1.5l2.4.8 1.9-3.3-2-1.55Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

function SpaceField({ dense = false }) {
  const stars = dense
    ? [
        [8, 12], [18, 40], [28, 18], [36, 62], [48, 28], [58, 72], [68, 22],
        [76, 48], [84, 14], [92, 58], [12, 78], [42, 88], [62, 8], [88, 82],
        [22, 54], [52, 16], [72, 66], [14, 32], [44, 44], [80, 36],
      ]
    : [
        [10, 18], [22, 48], [38, 24], [55, 66], [70, 20], [84, 42],
        [16, 72], [46, 12], [64, 54], [90, 76], [30, 36], [78, 14],
      ];

  return (
    <div aria-hidden="true" className={`space-field${dense ? " space-field--dense" : ""}`}>
      <div className="space-nebula space-nebula--a" />
      <div className="space-nebula space-nebula--b" />
      <div className="space-dust" />
      {stars.map(([x, y], index) => (
        <span
          className={`space-star space-star--${(index % 3) + 1}`}
          key={`${x}-${y}`}
          style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${(index % 7) * 0.45}s` }}
        />
      ))}
    </div>
  );
}

function NeonLines({ variant = "hero" }) {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className={`neon-lines neon-lines--${variant}`}>
      <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        {(variant === "hero"
          ? [
              "M 0 900 Q 500 600, 1000 500 Q 1500 400, 1920 300",
              "M 100 1000 Q 600 700, 1100 600 Q 1600 500, 1920 400",
              "M 200 950 Q 700 650, 1200 550 Q 1700 450, 1920 350",
            ]
          : ["M 1920 0 Q 1400 300, 1000 500 Q 600 700, 0 900"]
        ).map((d, index) => (
          <motion.path
            key={d}
            className={`neon-path neon-path--${index === 0 ? "strong" : index === 1 ? "mid" : "soft"}`}
            d={d}
            fill="none"
            initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: index === 0 ? 0.8 : index === 1 ? 0.5 : 0.3 }}
            transition={{ duration: 2.4, delay: index * 0.22, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
        {Array.from({ length: 8 }, (_, i) => {
          const x = 100 + i * 220;
          return (
            <motion.line
              className="neon-grid"
              key={x}
              x1={x}
              y1="0"
              x2={x}
              y2="1080"
              initial={{ opacity: 0.05 }}
              animate={reduceMotion ? undefined : { opacity: [0.05, 0.18, 0.05] }}
              transition={{ duration: 4.5, delay: i * 0.35, repeat: Infinity, ease: "easeInOut" }}
            />
          );
        })}
      </svg>
    </div>
  );
}

const DEFAULT_LOCATION = {
  city: "Kochi",
  region: "Kerala",
  latitude: 9.9312,
  longitude: 76.2673,
};

function weatherLabel(code) {
  if (code === 0) return "Clear";
  if ([1, 2, 3].includes(code)) return "Partly cloudy";
  if ([45, 48].includes(code)) return "Foggy";
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "Rain";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "Snow";
  if ([95, 96, 99].includes(code)) return "Storm";
  return "Live weather";
}

function WeatherIcon({ code }) {
  const isRain = [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99].includes(code);
  const isCloud = [1, 2, 3, 45, 48].includes(code);

  return (
    <svg aria-hidden="true" className="weather-icon" viewBox="0 0 24 24" fill="none">
      {isRain ? (
        <>
          <path d="M7 15a5 5 0 1 1 1.2-9.8A6 6 0 0 1 20 10.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="m9 17-1 3m4-3-1 3m4-3-1 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </>
      ) : isCloud ? (
        <path d="M7 17a5 5 0 1 1 1.2-9.8A6 6 0 0 1 20 12.5 3.5 3.5 0 0 1 18 19H7Z" stroke="currentColor" strokeWidth="1.6" />
      ) : (
        <>
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

function getBrowserCoords() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation unsupported"));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      reject,
      {
        enableHighAccuracy: true,
        timeout: 12000,
        maximumAge: 5 * 60 * 1000,
      },
    );
  });
}

async function reverseGeocode(latitude, longitude) {
  const url =
    `https://api.bigdatacloud.net/data/reverse-geocode-client` +
    `?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Reverse geocode failed");
  const data = await res.json();

  return {
    city:
      data.city ||
      data.locality ||
      data.localityInfo?.administrative?.[2]?.name ||
      data.localityInfo?.administrative?.[1]?.name ||
      "Nearby",
    region: data.principalSubdivision || data.countryName || "",
  };
}

async function resolveIpLocation() {
  const ipRes = await fetch("https://ipapi.co/json/");
  if (!ipRes.ok) throw new Error("IP lookup failed");
  const ipData = await ipRes.json();
  if (!ipData?.latitude || !ipData?.longitude) throw new Error("IP coords missing");

  return {
    latitude: ipData.latitude,
    longitude: ipData.longitude,
    city: ipData.city || DEFAULT_LOCATION.city,
    region: ipData.region || ipData.country_name || DEFAULT_LOCATION.region,
  };
}

function useLocalWeather() {
  const [weather, setWeather] = useState({
    city: "Locating…",
    region: "",
    temp: null,
    code: 1,
    loading: true,
  });

  useEffect(() => {
    let cancelled = false;

    async function loadWeather(latitude, longitude, city, region) {
      const weatherUrl =
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}` +
        `&longitude=${longitude}&current=temperature_2m,weather_code`;
      const weatherRes = await fetch(weatherUrl);
      const weatherData = await weatherRes.json();
      if (cancelled) return;

      setWeather({
        city,
        region,
        temp: Math.round(weatherData?.current?.temperature_2m ?? 0),
        code: weatherData?.current?.weather_code ?? 1,
        loading: false,
      });
    }

    async function resolveLocation() {
      try {
        const coords = await getBrowserCoords();
        let place = { city: "Nearby", region: "" };
        try {
          place = await reverseGeocode(coords.latitude, coords.longitude);
        } catch {
          // keep Nearby if reverse geocode fails; weather still uses exact coords
        }
        await loadWeather(coords.latitude, coords.longitude, place.city, place.region);
        return;
      } catch {
        // permission denied / timeout — try IP, then default
      }

      try {
        const ipPlace = await resolveIpLocation();
        await loadWeather(
          ipPlace.latitude,
          ipPlace.longitude,
          ipPlace.city,
          ipPlace.region,
        );
        return;
      } catch {
        // fall through to default
      }

      if (!cancelled) {
        try {
          await loadWeather(
            DEFAULT_LOCATION.latitude,
            DEFAULT_LOCATION.longitude,
            DEFAULT_LOCATION.city,
            DEFAULT_LOCATION.region,
          );
        } catch {
          setWeather((current) => ({
            ...current,
            city: DEFAULT_LOCATION.city,
            region: DEFAULT_LOCATION.region,
            loading: false,
            temp: 29,
            code: 1,
          }));
        }
      }
    }

    resolveLocation();
    return () => {
      cancelled = true;
    };
  }, []);

  return weather;
}

function useLocalClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const time = new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(now);

  const date = new Intl.DateTimeFormat(undefined, {
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(now);

  const timeZone =
    new Intl.DateTimeFormat(undefined, { timeZoneName: "short" })
      .formatToParts(now)
      .find((part) => part.type === "timeZoneName")?.value || "Local";

  return { time, date, timeZone };
}

function TopStatus({ weather }) {
  const clock = useLocalClock();

  return (
    <motion.div
      className="top-status"
      aria-live="polite"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="status-pill status-pill--weather">
        <WeatherIcon code={weather.code} />
        <div className="status-pill-copy">
          <strong>
            {weather.loading || weather.temp === null ? "…" : `${weather.temp}°C`}
            <span>{weatherLabel(weather.code)}</span>
          </strong>
          <span>
            {weather.city}
            {weather.region ? `, ${weather.region}` : ""}
          </span>
        </div>
      </div>

      <div className="status-divider" aria-hidden="true" />

      <div className="status-pill status-pill--time">
        <svg aria-hidden="true" className="clock-icon" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 8v4.2l2.6 1.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <div className="status-pill-copy">
          <strong>
            {clock.time}
            <span>{clock.timeZone}</span>
          </strong>
          <span>{clock.date}</span>
        </div>
      </div>

      <div className="status-divider" aria-hidden="true" />

      <div className="status-pill status-pill--open">
        <span className="status-open-dot" />
        <div className="status-pill-copy">
          <strong>Open to work</strong>
          <span>Remote · Freelance</span>
        </div>
      </div>
    </motion.div>
  );
}

function Header({ menuOpen, setMenuOpen, weather }) {
  function close() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <a className="brand-mark" href="#home" aria-label="Afsal home">
        A
      </a>
      <nav aria-label="Primary" className={`primary-nav${menuOpen ? " is-open" : ""}`}>
        <a href="#works" onClick={close}>
          01 / WORKS
        </a>
        <a href="#experience" onClick={close}>
          02 / EXPERIENCE
        </a>
        <a href="#about" onClick={close}>
          03 / ABOUT
        </a>
        <a href="#contact" onClick={close}>
          04 / CONTACT
        </a>
      </nav>
      <div className="header-right">
        <TopStatus weather={weather} />
      </div>
      <button
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        className="menu-btn"
        onClick={() => setMenuOpen((open) => !open)}
        type="button"
      >
        MENU
      </button>
    </header>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section aria-label="Hero Section" className="hero space-zone" id="home">
      <SpaceField dense />
      <NeonLines variant="hero" />
      <div className="hero-shell">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : "hidden"}
          animate="show"
          variants={stagger}
        >
          <motion.p className="hero-kicker" variants={fadeUp}>
            Full Stack Software Engineer | Application Security | Hardware Enthusiast
          </motion.p>
          <motion.h1 className="hero-name" variants={fadeUp}>
            Muhammed Afsal
            <motion.span
              className="hero-underline"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.55, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ originX: 0 }}
            />
          </motion.h1>
          <motion.p className="hero-tagline" variants={fadeUp}>
            Full stack engineer, application security specialist, and AI learner. I
            ship products with secured measures—Burp Suite testing, reCAPTCHA, custom
            rate limiters, WAF, and layered defenses—plus clear client handling via
            Jira and OpenProject.
          </motion.p>
          <motion.div className="hero-actions" variants={fadeUp}>
            <motion.a
              className="btn-outline"
              href="#contact"
              whileTap={{ scale: 0.98 }}
            >
              START A PROJECT
            </motion.a>
            <div className="availability">
              <span className="availability-dot" />
              AVAILABLE FOR WORK
            </div>
          </motion.div>
          <motion.span className="hero-year" variants={fadeUp}>
            © {new Date().getFullYear()}
          </motion.span>
        </motion.div>

        <motion.div
          className="hero-photo-wrap"
          initial={reduceMotion ? false : { opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-photo-card">
            <img
              alt="Portrait of Muhammed Afsal"
              className="hero-photo"
              src="/afsal-portrait.png"
            />
            <div className="hero-photo-fade" />
            <span className="hero-signature">afsal</span>
            <motion.div
              className="hero-stamp"
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span>SINCE 2019</span>
              <span>APPSEC</span>
              <span>PRODUCT DELIVERY</span>
              <i />
            </motion.div>
          </div>
          <aside aria-hidden="true" className="hero-rail">
            <GearIcon />
            <span>FULL STACK</span>
            <span>APPSEC</span>
            <span>CLIENT CARE</span>
          </aside>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <SunriseSection ariaLabel="About Me Section" className="about" id="about">
      <NeonLines variant="about" />
      <div className="section-shell about-copy about-copy--solo">
        <MotionBlock>
          <h2 className="section-kicker">ABOUT ME</h2>
        </MotionBlock>
        <MotionBlock delay={0.08}>
          <p className="about-lead">
            I&apos;m a <em>Full Stack Software Engineer</em> and{" "}
            <em>application security specialist</em> with 7+ years building
            secure web apps, multi-tenant SaaS, and enterprise platforms. I design
            apps with <em>secured measures</em>—testing with <em>Burp Suite</em>,
            protecting forms with <em>reCAPTCHA</em>, shipping{" "}
            <em>custom rate limiters</em>, and putting <em>WAF</em> and other
            defenses in place. Early in my career I developed{" "}
            <em>50+ custom websites</em> on a <em>proprietary CMS</em>. I handle{" "}
            <em>clients clearly</em>, track work in <em>Jira</em> and{" "}
            <em>OpenProject</em>, and I keep growing as an <em>AI learner</em>.
            I&apos;m a lifelong <em>Melomaniac</em> and a dedicated{" "}
            <em>Cyclist</em>—exploring new roads and completing{" "}
            <em>1000+ km</em> of cycling. You may play a track from LESFA PLAYER
            while browsing the portfolio.
          </p>
        </MotionBlock>
        <MotionBlock delay={0.1} className="career-highlights">
          <div>
            <strong>50+</strong>
            <span>Custom CMS websites</span>
          </div>
          <div>
            <strong>7+</strong>
            <span>Years building products</span>
          </div>
          <div>
            <strong>1000+</strong>
            <span>Km explored by cycle</span>
          </div>
        </MotionBlock>
      </div>
    </SunriseSection>
  );
}

function CyclingPassion() {
  const reduceMotion = useReducedMotion();

  return (
    <SunriseSection
      ariaLabel="Cycling Passion Section"
      className="cycling space-zone"
      id="cycling"
    >
      <SpaceField />
      <div className="section-shell">
        <motion.div
          className="cycling-card magnetic hover-glow"
          initial={reduceMotion ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="cycling-glow" aria-hidden="true" />
          <FaBicycle aria-hidden="true" className="cycling-watermark" />
          <div className="cycling-route" aria-hidden="true">
            <svg viewBox="0 0 640 120" preserveAspectRatio="none">
              <motion.path
                d="M0 78 C 80 78, 110 30, 180 42 C 260 56, 300 96, 380 70 C 450 48, 500 22, 560 38 C 600 48, 620 70, 640 70"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2.5"
                initial={reduceMotion ? false : { pathLength: 0, opacity: 0.2 }}
                whileInView={{ pathLength: 1, opacity: 0.85 }}
                viewport={{ once: true }}
                transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.circle
                cx="560"
                cy="38"
                r="5"
                fill="currentColor"
                initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4, duration: 0.4 }}
              />
            </svg>
          </div>

          <div className="cycling-layout">
            <div className="cycling-content">
              <div className="cycling-badge">
                <FaBicycle />
                <span>CYCLIST</span>
              </div>
              <h2 className="cycling-title">
                1000+ km
                <span>cycling distance</span>
              </h2>
              <p className="cycling-copy">
                Outside of professional work, I maintain an active cycling routine,
                having completed <strong>1000+ kilometers</strong>. It reflects
                consistency, discipline, and a commitment to continuous progress.
              </p>
              <div className="cycling-stats">
                <div>
                  <FaRoad />
                  <strong>1000+</strong>
                  <span>Kilometers ridden</span>
                </div>
                <div>
                  <FaMapMarkedAlt />
                  <strong>Explore</strong>
                  <span>Consistent exploration</span>
                </div>
                <div>
                  <FaBicycle />
                  <strong>Endurance</strong>
                  <span>Built through consistency</span>
                </div>
              </div>
            </div>
            <figure className="cycling-photo">
              <img
                src="/cycle-ride.jpg"
                alt="Afsal taking a break during a cycle ride"
                width="1200"
                height="900"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </motion.div>
      </div>
    </SunriseSection>
  );
}
function Experience() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (!lightboxOpen) return undefined;
    function onKey(event) {
      if (event.key === "Escape") setLightboxOpen(false);
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxOpen]);

  return (
    <SunriseSection
      ariaLabel="Work Experience Section"
      className="experience experience-rise"
      id="experience"
    >
      <div className="section-shell experience-shell">
        <div className="experience-layout">
          <MotionBlock className="experience-visual-wrap">
            <button
              aria-label="View full career journey image"
              className="experience-visual magnetic hover-glow"
              onClick={() => setLightboxOpen(true)}
              type="button"
            >
              <img
                alt="Career journey collage for Muhammed Afsal"
                className="experience-visual-image"
                src="/afsal-career-journey.jpg"
              />
              <span className="about-journey-label">7 YEARS · STILL LEARNING</span>
              <span className="experience-visual-hint">View full size</span>
            </button>
          </MotionBlock>

          <div className="experience-main">
            <MotionBlock>
              <h2 className="section-title">EXPERIENCE</h2>
              <p className="experience-lead">
                A sketched timeline of roles that shaped how I build.
              </p>
            </MotionBlock>

            <motion.ul
              className="experience-list"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
            >
              {experience.map((job) => (
                <motion.li
                  className="experience-card hover-glow"
                  key={`${job.company}-${job.dates}`}
                  variants={fadeUp}
                >
                  <div className="experience-sketch" aria-hidden="true">
                    <PenSketch type={job.sketch} />
                  </div>
                  <div className="experience-body">
                    <div className="experience-top">
                      <strong>{job.title}</strong>
                      <span className="experience-dates">{job.dates}</span>
                    </div>
                    <span className="experience-company">{job.company}</span>
                    <p>{job.note}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            aria-modal="true"
            className="experience-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
            role="dialog"
          >
            <motion.img
              alt="Full career journey collage for Muhammed Afsal"
              className="experience-lightbox-image"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              onClick={(event) => event.stopPropagation()}
              src="/afsal-career-journey.jpg"
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            />
            <button
              aria-label="Close full size image"
              className="experience-lightbox-close"
              onClick={() => setLightboxOpen(false)}
              type="button"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </SunriseSection>
  );
}

function SelectedWorks() {
  const [index, setIndex] = useState(0);
  const active = works[index];
  const reduceMotion = useReducedMotion();

  function prev() {
    setIndex((current) => (current - 1 + works.length) % works.length);
  }

  function next() {
    setIndex((current) => (current + 1) % works.length);
  }

  return (
    <SunriseSection ariaLabel="Selected Works Section" className="works" id="works">
      <div className="section-shell">
        <MotionBlock className="works-intro">
          <h2 className="section-title">PROJECTS &amp; PRODUCTS</h2>
          <p>Self-developed products and selected work across healthcare, automotive, SaaS, enterprise, edtech, and CMS.</p>
        </MotionBlock>

        <MotionBlock className="works-head">
          <div>
            {works.map((work, workIndex) => (
              <button
                className={`works-tab${index === workIndex ? " is-active" : ""}`}
                key={work.name}
                onClick={() => setIndex(workIndex)}
                type="button"
              >
                {work.name}
              </button>
            ))}
          </div>
        </MotionBlock>

        <AnimatePresence mode="wait">
          <motion.div
            className="works-stage"
            key={active.name}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="works-titles">
              <h2>{active.name}</h2>
              <p className="works-subtitle">{active.subtitle}</p>
              <span className="works-badge">
                <GearIcon /> {active.badge || "Project"}
              </span>
            </div>

            <div className="works-desc">
              <p>{active.description}</p>
              {active.role && (
                <p className="works-meta">
                  <strong>Role:</strong> {active.role}
                </p>
              )}
              {active.features && (
                <div className="works-features">
                  <p className="works-meta"><strong>Key Features:</strong></p>
                  <ul>
                    {active.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              {active.tech && (
                <p className="works-meta">
                  <strong>Technology:</strong> {active.tech}
                </p>
              )}
              {active.ownership && (
                <p className="works-meta">
                  <strong>Project Ownership:</strong> {active.ownership}
                </p>
              )}
            </div>

            <div className="works-frame">
              <motion.img
                alt={active.name}
                src={active.image}
                initial={{ scale: 1.06 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="works-frame-ui">
                <div className="works-tags">
                  {active.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="works-controls">
                  <button onClick={prev} type="button">
                    ← PREV
                  </button>
                  <button onClick={next} type="button">
                    NEXT →
                  </button>
                </div>
                <span className="works-year">{active.year}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </SunriseSection>
  );
}

function Services() {
  return (
    <SunriseSection
      ariaLabel="Skills & Expertise Section"
      className="services"
      id="services"
    >
      <div className="section-shell">
        <MotionBlock className="services-intro">
          <h2>SKILLS &amp; EXPERTISE</h2>
          <p>
            Full stack delivery, application security, hardware troubleshooting, client
            handling, and project tracking with Jira and OpenProject—plus an active AI
            learning practice. Each skill is backed by real projects and years of shipping.
          </p>
        </MotionBlock>
        <motion.div
          className="services-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          {skillGroups.map((group) => {
            const GroupIcon = group.Icon;
            return (
              <motion.article
                className="service-card hover-glow"
                key={group.title}
                variants={fadeUp}
              >
                <span className="service-icon">
                  <GroupIcon />
                </span>
                <h3>{group.title}</h3>
                <p>{group.detail}</p>
                <div className="service-tags">
                  {group.items.map((item) => {
                    const ItemIcon = item.Icon;
                    return (
                      <span key={item.name}>
                        <ItemIcon style={{ color: item.color }} />
                        {item.name}
                      </span>
                    );
                  })}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </SunriseSection>
  );
}

function TechStack() {
  return (
    <SunriseSection ariaLabel="Tech Stack Section" className="tech" id="tech">
      <div className="section-shell">
        <MotionBlock>
          <h2 className="section-title">TECH STACK</h2>
        </MotionBlock>
        <motion.div
          className="tech-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={stagger}
        >
          {techStack.map((tech) => {
            const Icon = tech.Icon;
            return (
              <motion.div
                className="tech-chip hover-glow"
                key={tech.name}
                variants={fadeUp}
              >
                <span className="tech-icon" style={{ color: tech.color }}>
                  <Icon />
                </span>
                <span>{tech.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SunriseSection>
  );
}

function Equalizer({ active = false, bars = 18, className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`equalizer${active ? " is-active" : ""}${className ? ` ${className}` : ""}`}
    >
      {Array.from({ length: bars }, (_, index) => (
        <span
          key={index}
          style={{
            "--eq-delay": `${(index % 7) * 0.09}s`,
            "--eq-duration": `${0.55 + ((index * 17) % 9) * 0.07}s`,
            "--eq-peak": `${28 + ((index * 37) % 72)}%`,
          }}
        />
      ))}
    </div>
  );
}

function MoodPlayer() {
  const [mood, setMood] = useState("all");
  const [language, setLanguage] = useState("all");
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const playlist = moodLibrary.filter((song) => {
    const moodMatch = mood === "all" || song.mood === mood;
    const languageMatch = language === "all" || song.language === language;
    return moodMatch && languageMatch;
  });

  const safeIndex = playlist.length ? index % playlist.length : 0;
  const track = playlist[safeIndex];

  useEffect(() => {
    setIndex(0);
  }, [mood, language]);

  function playAt(nextIndex) {
    if (!playlist.length) return;
    setIndex(nextIndex);
    setPlaying(true);
  }

  function prevTrack() {
    if (!playlist.length) return;
    playAt((safeIndex - 1 + playlist.length) % playlist.length);
  }

  function nextTrack() {
    if (!playlist.length) return;
    playAt((safeIndex + 1) % playlist.length);
  }

  return (
    <div className="mood-player" aria-label="Mood music player">
      <div
        className="mood-player-card"
        title="Melomaniac here — press play and pick a mood while you explore."
      >
        <div className="mood-player-row">
          <div className="mood-player-brand">
            <FaMusic />
            <strong>LESFA PLAYER</strong>
          </div>

          <div className="mood-filters" role="group" aria-label="Choose mood">
            {moods.map((item) => {
              const Icon = item.Icon;
              return (
                <button
                  aria-label={item.label}
                  className={mood === item.id ? "is-active" : undefined}
                  key={item.id}
                  onClick={() => setMood(item.id)}
                  title={item.label}
                  type="button"
                >
                  <Icon />
                </button>
              );
            })}
          </div>

          <div className="mood-filters mood-filters--lang" role="group" aria-label="Choose language">
            {languages.map((item) => (
              <button
                className={language === item.id ? "is-active" : undefined}
                key={item.id}
                onClick={() => setLanguage(item.id)}
                type="button"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mood-now">
            {track ? (
              <>
                <strong>{track.title}</strong>
                <span>
                  {track.meta} · {track.language === "ml" ? "ML" : "EN"} ·{" "}
                  {safeIndex + 1}/{playlist.length}
                </span>
              </>
            ) : (
              <strong>No songs for this filter</strong>
            )}
          </div>

          <Equalizer active={playing} bars={16} className="equalizer--player" />

          <div className="mood-controls">
            <button aria-label="Previous song" disabled={!track} onClick={prevTrack} type="button">
              <FaStepBackward />
            </button>
            <button
              aria-label={playing ? "Pause" : "Play"}
              className="mood-play"
              disabled={!track}
              onClick={() => setPlaying((value) => !value)}
              type="button"
            >
              {playing ? <FaPause /> : <FaPlay />}
            </button>
            <button aria-label="Next song" disabled={!track} onClick={nextTrack} type="button">
              <FaStepForward />
            </button>
          </div>
        </div>
      </div>

      {playing && track && (
        <iframe
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="mood-audio-frame"
          key={`${track.youtubeId}-${safeIndex}`}
          src={`https://www.youtube.com/embed/${track.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
          title={`Audio: ${track.title}`}
        />
      )}
    </div>
  );
}

function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    setStatus("Opening your email client…");
  }

  return (
    <SunriseSection ariaLabel="Contact Section" className="contact space-zone" id="contact">
      <SpaceField />
      <div className="section-shell contact-grid">
        <MotionBlock className="contact-copy">
          <h2>Get In Touch</h2>
          <p>
            Building a web app, dashboard, SaaS product, or platform? I ship full
            stack engineering—from idea to deploy.
          </p>
          <motion.a
            className="btn-fill"
            href={`mailto:${emailAddress}`}
            whileTap={{ scale: 0.98 }}
          >
            Start Building
          </motion.a>
          <div className="contact-links">
            <a href={linkedinUrl} rel="noreferrer" target="_blank">
              <FaLinkedin /> LinkedIn
            </a>
            <a href={whatsappUrl} rel="noreferrer" target="_blank">
              <FaWhatsapp /> WhatsApp
            </a>
            <a href={`mailto:${emailAddress}`}>
              <FaEnvelope /> {emailAddress}
            </a>
          </div>
        </MotionBlock>

        <MotionBlock delay={0.12}>
          <form className="contact-form hover-glow" onSubmit={handleSubmit}>
            <label>
              <span className="sr-only">Your Name</span>
              <input name="name" placeholder="Your Name" required type="text" />
            </label>
            <label>
              <span className="sr-only">Your Email</span>
              <input name="email" placeholder="Your Email" required type="email" />
            </label>
            <label>
              <span className="sr-only">Your Message</span>
              <textarea name="message" placeholder="Your Message" required rows={5} />
            </label>
            <button type="submit">Send Message</button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </MotionBlock>
      </div>
      <p className="site-credit">
        © {new Date().getFullYear()} Muhammed Afsal MT
      </p>
    </SunriseSection>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const weather = useLocalWeather();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => initMagneticHover(), []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <HoverField />
      <div className="sticky-top">
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} weather={weather} />
        <MoodPlayer />
      </div>
      <main id="main">
        <Hero />
        <About />
        <CyclingPassion />
        <Experience />
        <SelectedWorks />
        <Services />
        <TechStack />
        <Contact />
      </main>
    </>
  );
}

export default App;
