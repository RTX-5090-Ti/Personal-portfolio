import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, Navigate, Route, Routes, useParams } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronUp,
  CircleX,
  Code2,
  Cloud,
  Database,
  Download,
  ExternalLink,
  Globe2,
  Image,
  Layers,
  Mail,
  MessageCircle,
  Menu,
  Rocket,
  Sparkles,
  Target,
  X,
} from "lucide-react";
import { projects } from "./data/projects";
import avatarImage from "./assets/iconAvatar.jpg";
import heroHelloImage from "./assets/iconSayhi.png";
import zaloQrImage from "./assets/QRzalo-me.jpg";

const IDENTITY_NAME = "Phạm Quốc Vương";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function GitHubIcon({ className = "", size = 24 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 0 0 7.86 10.925c.575.106.785-.25.785-.556 0-.274-.01-1-.016-1.962-3.197.695-3.872-1.54-3.872-1.54-.523-1.328-1.277-1.682-1.277-1.682-1.044-.714.079-.699.079-.699 1.155.08 1.763 1.186 1.763 1.186 1.026 1.758 2.693 1.25 3.35.956.104-.744.402-1.25.73-1.538-2.552-.29-5.236-1.276-5.236-5.682 0-1.255.45-2.282 1.185-3.087-.119-.29-.513-1.46.113-3.044 0 0 .967-.31 3.17 1.179A11.02 11.02 0 0 1 12 6.08c.977.005 1.962.132 2.882.388 2.2-1.49 3.165-1.18 3.165-1.18.628 1.585.234 2.755.115 3.045.738.805 1.184 1.832 1.184 3.087 0 4.417-2.688 5.388-5.25 5.673.413.356.78 1.059.78 2.134 0 1.54-.015 2.782-.015 3.16 0 .31.207.669.79.555A11.503 11.503 0 0 0 23.5 12C23.5 5.648 18.352.5 12 .5Z" />
    </svg>
  );
}

function TypewriterHeroTitle({ line1, name, line2 }) {
  const fullText = `${line1}${name}\n${line2}`;
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const isComplete = visibleCount >= fullText.length;
    const delay = isComplete
      ? 4500
      : fullText[visibleCount] === "\n"
        ? 320
        : 85;

    const timer = window.setTimeout(() => {
      if (!cancelled) {
        setVisibleCount((count) => (isComplete ? 0 : count + 1));
      }
    }, delay);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [fullText, visibleCount]);

  const visibleText = fullText.slice(0, visibleCount);
  const [typedLine1 = "", typedLine2 = ""] = visibleText.split("\n");

  return (
    <motion.h1
      variants={fadeUp}
      className="text-5xl font-black tracking-tight text-white text-balance md:text-7xl"
    >
      <span>{typedLine1.slice(0, line1.length)}</span>
      <span className="text-transparent bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text">
        {typedLine1.slice(line1.length)}
      </span>
      {visibleText.includes("\n") && <br />}
      <span>{typedLine2}</span>
      <span className="type-cursor" aria-hidden="true">
        |
      </span>
    </motion.h1>
  );
}

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 320);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      type="button"
      onClick={handleBackToTop}
      initial={false}
      animate={{
        opacity: showButton ? 1 : 0,
        y: showButton ? 0 : 20,
        pointerEvents: showButton ? "auto" : "none",
      }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-[60] grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-slate-900/80 text-cyan-200 shadow-2xl shadow-black/25 backdrop-blur-md transition hover:-translate-y-1 hover:bg-slate-800/90 hover:text-white"
      aria-label="Back to top"
    >
      <ChevronUp size={22} />
    </motion.button>
  );
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <Reveal className="max-w-3xl mx-auto mb-12 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium border rounded-full border-violet-400/20 bg-violet-400/10 text-violet-200">
        <Sparkles size={16} />
        {eyebrow}
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-white text-balance md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}

function Navbar({ language, setLanguage, navText }) {
  const [open, setOpen] = useState(false);
  const navItems = [
    { label: navText.about, href: "/#about" },
    { label: navText.skills, href: "/#skills" },
    { label: navText.projects, href: "/#projects" },
    { label: navText.contact, href: "/#contact" },
  ];

  const toggleLanguage = () => {
    setLanguage((current) => (current === "en" ? "vi" : "en"));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <div className="flex items-stretch max-w-6xl gap-2 mx-auto">
        <nav className="flex items-center justify-between flex-1 px-4 py-3 glass rounded-2xl">
          <a href="/#home" className="flex items-center gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-xl shadow-lg shadow-violet-500/20 ring-1 ring-white/10">
            <img
              src={avatarImage}
              alt={`Avatar of ${IDENTITY_NAME}`}
              className="h-full w-full object-cover object-center scale-[1.35]"
            />
          </div>
          <div>
            <p className="text-sm font-bold leading-none text-white">
              {IDENTITY_NAME}
            </p>
            <p className="mt-1 text-xs text-slate-400">{navText.portfolio}</p>
          </div>
        </a>

        <div className="items-center hidden gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-sm font-medium transition rounded-xl text-slate-300 hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="items-center hidden gap-3 md:flex">
          <a
            href="https://github.com/RTX-5090-Ti"
            target="_blank"
            rel="noreferrer"
            className="p-2 transition border rounded-xl border-white/10 text-slate-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
            aria-label="GitHub"
          >
            <GitHubIcon size={18} />
          </a>

          <a
            href="/Pham-Quoc-Vuong-CV.pdf"
            className="px-4 py-2 text-sm font-bold transition bg-white rounded-xl text-slate-950 hover:bg-violet-100"
          >
            {navText.downloadCv}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="p-2 text-white border rounded-xl border-white/10"
            aria-label={navText.toggleMenu}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        </nav>

        <button
          type="button"
          onClick={toggleLanguage}
          className="inline-flex shrink-0 items-center gap-2 self-stretch rounded-2xl border border-white/10 bg-slate-900/75 px-4 text-sm font-semibold text-slate-200 backdrop-blur-md transition hover:border-white/20 hover:bg-white/10 hover:text-white"
          aria-label={navText.language}
        >
          <Globe2 size={16} />
          {language.toUpperCase()}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl p-3 mx-auto mt-3 glass rounded-2xl md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm font-medium rounded-xl text-slate-300 hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}

          <a
            href="/Pham-Quoc-Vuong-CV.pdf"
            className="flex items-center justify-center gap-2 px-4 py-3 mt-2 text-sm font-bold bg-white rounded-xl text-slate-950"
          >
            <Download size={16} />
            {navText.downloadCv}
          </a>
        </motion.div>
      )}
    </header>
  );
}

function BackgroundDecor() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute inset-0 hero-grid opacity-30" />

      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-120px] top-32 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-160px] top-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl"
      />

      <motion.div
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-180px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl"
      />
    </div>
  );
}

function Hero({ heroText }) {
  return (
    <section
      id="home"
      className="relative flex items-center max-w-6xl min-h-screen px-4 pt-32 pb-20 mx-auto"
    >
      <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="text-center lg:text-left"
        >
          <TypewriterHeroTitle
            line1={heroText.line1}
            name={heroText.name}
            line2={heroText.line2}
          />

          <motion.p
            variants={fadeUp}
            className="max-w-2xl mx-auto text-lg leading-8 mt-7 text-slate-300 lg:mx-0"
          >
            {heroText.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col justify-center gap-4 mt-9 sm:flex-row lg:justify-start"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-4 font-bold text-white shadow-2xl shadow-violet-500/25 transition hover:scale-[1.02]"
            >
              {heroText.cta}
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-violet-500/30 to-cyan-400/30 blur-3xl" />

          <div className="glass relative w-full max-w-md overflow-hidden rounded-[2rem] p-4">
            <div className="relative rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4">
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-400/10 to-transparent rounded-[1.25rem]" />

              <motion.div
                whileHover={{
                  rotate: [0, -3, 3, -2, 2, 0],
                  y: [0, -4, 0],
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="relative origin-bottom overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.04]"
              >
                <img
                  src={heroHelloImage}
                  alt={`${heroText.name} waving hello`}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About({ aboutText }) {
  const aboutCards = [
    { icon: Layers, ...aboutText.cards[0] },
    { icon: Code2, ...aboutText.cards[1] },
    { icon: Database, ...aboutText.cards[2] },
    { icon: Sparkles, ...aboutText.cards[3] },
  ];

  return (
    <section id="about" className="max-w-6xl px-4 py-24 mx-auto">
      <SectionHeader
        eyebrow={aboutText.eyebrow}
        title={aboutText.title}
        description={aboutText.description}
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="glass h-full rounded-[2rem] p-7">
            <div className="inline-flex p-3 mb-6 rounded-2xl bg-white/10">
              <Target className="text-violet-200" />
            </div>

            <h3 className="text-2xl font-black text-white">{aboutText.focusTitle}</h3>

            <p className="mt-4 leading-8 text-slate-300">{aboutText.focusText}</p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid gap-4 sm:grid-cols-2">
            {aboutCards.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6"
                >
                  <Icon className="text-cyan-200" />
                  <h4 className="mt-4 text-lg font-bold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 leading-7 text-slate-400">{item.text}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Skills({ skillsText }) {
  const skillGroups = [
    { icon: Code2, ...skillsText.groups[0] },
    { icon: Database, ...skillsText.groups[1] },
    { icon: Globe2, ...skillsText.groups[2] },
    { icon: Cloud, ...skillsText.groups[3] },
  ];

  return (
    <section id="skills" className="max-w-6xl px-4 py-24 mx-auto">
      <SectionHeader
        eyebrow={skillsText.eyebrow}
        title={skillsText.title}
        description={skillsText.description}
      />

      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <Reveal key={group.title} delay={index * 0.04}>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass rounded-[2rem] p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-13 w-13 place-items-center rounded-2xl bg-gradient-to-br from-violet-500/30 to-cyan-400/20">
                    <Icon className="text-white" />
                  </div>

                  <h3 className="text-2xl font-black text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Projects({ projectsText }) {
  return (
    <section id="projects" className="max-w-6xl px-4 py-24 mx-auto">
      <SectionHeader
        eyebrow={projectsText.eyebrow}
        title={projectsText.title}
        description=""
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
            projectsText={projectsText}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index, projectsText }) {
  return (
    <Reveal delay={index * 0.08}>
      <motion.article
        whileHover={{ y: -8 }}
        className="glass group flex h-full flex-col overflow-hidden rounded-[2rem]"
      >
        <div className="relative p-5 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-400/20 opacity-70 rounded-[1.5rem]" />

          <div className="relative rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <p className="text-sm font-medium text-cyan-200">
                  {project.subtitle}
                </p>
                <h3 className="mt-2 text-2xl font-black text-white">
                  {project.title}
                </h3>
              </div>

              <div className="px-3 py-2 text-xs font-semibold border rounded-2xl border-white/10 bg-white/10 text-slate-200">
                {project.status}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl bg-white/[0.06] p-4"
                >
                  <p className="text-lg font-black text-white">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 p-6 pt-1">
          <p className="leading-8 text-slate-300">{project.description}</p>

          <div className="flex flex-wrap gap-2 mt-5">
            {project.techs.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-violet-100"
            >
              {projectsText.liveDemo}
              <ExternalLink size={15} />
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-white/15"
            >
              GitHub
              <GitHubIcon size={15} />
            </a>

            <Link
              to={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-2.5 text-sm font-bold text-cyan-100 transition hover:bg-cyan-300/15"
            >
              {projectsText.caseStudy}
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

function LearningJourney({ journeyText }) {
  return (
    <section className="max-w-6xl px-4 py-24 mx-auto">
      <SectionHeader
        eyebrow={journeyText.eyebrow}
        title={journeyText.title}
        description={journeyText.description}
      />

      <div className="grid gap-5 md:grid-cols-3">
        {journeyText.items.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <div className="glass h-full rounded-[2rem] p-6">
              <div className="grid w-12 h-12 mb-6 font-black text-white place-items-center rounded-2xl bg-gradient-to-br from-violet-500/30 to-cyan-400/20">
                0{index + 1}
              </div>

              <h3 className="text-xl font-black text-white">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Contact({ contactText }) {
  const [showZaloQr, setShowZaloQr] = useState(false);

  return (
    <section id="contact" className="max-w-6xl px-4 py-24 mx-auto">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-[2.5rem] p-8 md:p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-400/20" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 text-sm font-medium border rounded-full border-violet-400/20 bg-violet-400/10 text-violet-100">
                <Mail size={16} />
                {contactText.badge}
              </div>

              <h2 className="text-4xl font-black text-white text-balance md:text-5xl">
                {contactText.title}
              </h2>

              <p className="max-w-2xl mt-5 leading-8 text-slate-300">
                {contactText.description}
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6">
              <div className="space-y-4">
                <a
                  href="mailto:quocvuong99er@gmail.com"
                  className="flex items-center gap-4 rounded-2xl bg-white/[0.06] p-4 transition hover:bg-white/10"
                >
                  <Mail className="text-cyan-200" />
                  <div>
                    <p className="text-sm text-slate-400">{contactText.email}</p>
                    <p className="font-semibold text-white">
                      quocvuong99er@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/RTX-5090-Ti"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl bg-white/[0.06] p-4 transition hover:bg-white/10"
                >
                  <GitHubIcon className="text-cyan-200" />
                  <div>
                    <p className="text-sm text-slate-400">{contactText.github}</p>
                    <p className="font-semibold text-white">@RTX-5090-Ti</p>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={() => setShowZaloQr(true)}
                  className="flex w-full items-center gap-4 rounded-2xl bg-white/[0.06] p-4 text-left transition hover:bg-white/10 cursor-pointer"
                >
                  <MessageCircle className="text-cyan-200" />
                  <div>
                    <p className="text-sm text-slate-400">{contactText.zalo}</p>
                    <p className="font-semibold text-white">{contactText.zaloName}</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {showZaloQr && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center px-4">
          <button
            type="button"
            aria-label={contactText.closeQr}
            onClick={() => setShowZaloQr(false)}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="glass relative z-10 w-full max-w-sm rounded-[2rem] p-5"
          >
            <button
              type="button"
              onClick={() => setShowZaloQr(false)}
              className="absolute p-1 transition rounded-full right-4 top-4 text-slate-300 hover:bg-white/10 hover:text-white"
              aria-label={contactText.closeQr}
            >
              <CircleX size={22} />
            </button>

            <p className="text-sm font-medium text-cyan-200">{contactText.qrTitle}</p>
            <h3 className="mt-2 text-2xl font-black text-white">{contactText.zaloName}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{contactText.qrDescription}</p>

            <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white p-3">
              <img
                src={zaloQrImage}
                alt={`Zalo QR code for ${contactText.zaloName}`}
                className="h-auto w-full rounded-[1rem] object-cover"
              />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

function Footer({ footerText }) {
  return (
    <footer className="max-w-6xl px-4 pb-10 mx-auto">
      <div className="flex flex-col items-center justify-between gap-4 pt-8 text-sm border-t border-white/10 text-slate-400 md:flex-row">
        <p>© 2026 {IDENTITY_NAME}. {footerText.builtWith}</p>
      </div>
    </footer>
  );
}

function HomePage({ language, setLanguage, content }) {
  return (
    <>
      <BackgroundDecor />
      <Navbar language={language} setLanguage={setLanguage} navText={content.nav} />
      <main>
        <Hero heroText={content.hero} />
        <About aboutText={content.about} />
        <Skills skillsText={content.skills} />
        <Projects projectsText={content.projects} />
        <LearningJourney journeyText={content.journey} />
        <Contact contactText={content.contact} />
      </main>
      <Footer footerText={content.footer} />
    </>
  );
}

function ProjectDetailPage({ language, setLanguage, content }) {
  const { projectSlug } = useParams();
  const project = projects.find((item) => item.slug === projectSlug);
  const detailText = content.detail;

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <BackgroundDecor />
      <Navbar language={language} setLanguage={setLanguage} navText={content.nav} />

      <main className="max-w-6xl px-4 pt-32 pb-24 mx-auto">
        <Reveal>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-bold text-white transition border rounded-xl border-white/10 bg-white/10 hover:bg-white/15"
          >
            <ChevronLeft size={16} />
            {detailText.backHome}
          </Link>
        </Reveal>

        <section className="grid gap-8 lg:grid-cols-[1fr_0.75fr]">
          <Reveal>
            <div className="glass overflow-hidden rounded-[2.5rem] p-8 md:p-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 text-sm font-medium border rounded-full border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                <Rocket size={16} />
                {detailText.caseStudy}
              </div>

              <h1 className="text-4xl font-black text-white text-balance md:text-6xl">
                {project.title}
              </h1>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold transition bg-white rounded-xl text-slate-950 hover:bg-violet-100"
                >
                  {detailText.liveDemo}
                  <ExternalLink size={16} />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-white transition border rounded-xl border-white/10 bg-white/10 hover:bg-white/15"
                >
                  GitHub
                  <GitHubIcon size={16} />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass rounded-[2.5rem] p-6">
              <h2 className="text-xl font-black text-white">{detailText.projectSummary}</h2>

              <div className="mt-5 space-y-4">
                {[
                  { label: detailText.role, value: project.role },
                  { label: detailText.year, value: project.year },
                  { label: detailText.status, value: project.status },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-2xl bg-white/[0.06] p-4"
                  >
                    <span className="text-sm text-slate-400">{item.label}</span>
                    <span className="font-bold text-white">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section className="grid gap-5 mt-8 md:grid-cols-3">
          {project.metrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 0.05}>
              <div className="glass rounded-[2rem] p-6">
                <p className="text-3xl font-black text-white">{metric.value}</p>
                <p className="mt-2 text-sm text-slate-400">{metric.label}</p>
              </div>
            </Reveal>
          ))}
        </section>

        <section className="mt-20">
          <SectionHeader
            eyebrow={detailText.featuresEyebrow}
            title={detailText.featuresTitle}
            description={detailText.featuresDescription}
          />

          <div className="grid gap-4 md:grid-cols-2">
            {project.features.map((feature, index) => (
              <Reveal key={feature} delay={index * 0.03}>
                <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                  <CheckCircle2 className="mt-1 shrink-0 text-emerald-300" />
                  <p className="leading-7 text-slate-200">{feature}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <SectionHeader
            eyebrow={detailText.screenshotsEyebrow}
            title={detailText.screenshotsTitle}
            description={detailText.screenshotsDescription}
          />

          <div className="grid gap-5 md:grid-cols-2">
            {project.screenshots.map((screen, index) => (
              <Reveal key={screen} delay={index * 0.05}>
                <div className="glass overflow-hidden rounded-[2rem] p-4">
                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-4">
                    <div className="flex gap-2 mb-4">
                      <span className="w-3 h-3 bg-red-400 rounded-full" />
                      <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                      <span className="w-3 h-3 bg-green-400 rounded-full" />
                    </div>

                    <div className="grid min-h-48 place-items-center rounded-2xl bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-cyan-400/20">
                      <div className="text-center">
                        <Image className="mx-auto text-cyan-200" size={34} />
                        <p className="mt-3 text-lg font-black text-white">
                          {screen}
                        </p>
                        <p className="mt-1 text-sm text-slate-400">
                          {detailText.screenshotPlaceholder}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <SectionHeader
            eyebrow={detailText.challengesEyebrow}
            title={detailText.challengesTitle}
            description={detailText.challengesDescription}
          />

          <div className="space-y-5">
            {project.challenges.map((challenge, index) => (
              <Reveal key={challenge.title} delay={index * 0.05}>
                <div className="glass rounded-[2rem] p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start">
                    <div className="grid w-12 h-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet-500/30 to-cyan-400/20">
                      <Target className="text-white" size={22} />
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-white">
                        {challenge.title}
                      </h3>
                      <p className="mt-3 leading-8 text-slate-300">
                        {challenge.content}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <SectionHeader
            eyebrow={detailText.learningsEyebrow}
            title={detailText.learningsTitle}
            description={detailText.learningsDescription}
          />

          <div className="grid gap-4 md:grid-cols-2">
            {project.learnings.map((learning, index) => (
              <Reveal key={learning} delay={index * 0.04}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                  <p className="font-semibold leading-7 text-slate-200">
                    {learning}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <Footer footerText={content.footer} />
    </>
  );
}

export default function App() {
  const { i18n } = useTranslation();
  const language =
    i18n.resolvedLanguage?.toLowerCase().startsWith("vi") ||
    i18n.language?.toLowerCase().startsWith("vi")
      ? "vi"
      : "en";

  const setLanguage = (nextLanguageOrUpdater) => {
    const nextLanguage =
      typeof nextLanguageOrUpdater === "function"
        ? nextLanguageOrUpdater(language)
        : nextLanguageOrUpdater;

    i18n.changeLanguage(nextLanguage);
  };

  useEffect(() => {
    window.localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const content = i18n.getResourceBundle(language, "translation");

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              language={language}
              setLanguage={setLanguage}
              content={content}
            />
          }
        />
        <Route
          path="/projects/:projectSlug"
          element={
            <ProjectDetailPage
              language={language}
              setLanguage={setLanguage}
              content={content}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <BackToTopButton />
    </>
  );
}
