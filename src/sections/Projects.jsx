import { ArrowRight, ExternalLink, Film, Heart, LayoutDashboard, Play, Search } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import GitHubIcon from "../components/common/GitHubIcon";
import Reveal from "../components/common/Reveal";
import SectionHeader from "../components/common/SectionHeader";

function MovieProjectCard({ project, index, projectsText }) {
  return (
    <Reveal delay={index * 0.08} className="self-start">
      <motion.article
        whileHover={{ y: -6 }}
        className="group relative isolate overflow-hidden rounded-[2rem] border border-violet-400/25 bg-slate-950/80 p-6 shadow-[0_20px_70px_-35px_rgba(139,92,246,0.5)] sm:p-8"
      >
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-400/20 blur-3xl" />

        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-bold tracking-[0.2em] text-violet-300">01 / MOVIE APP</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/5 px-3 py-1.5 text-xs font-medium text-emerald-200">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            {project.status}
          </span>
        </div>

        <div className="mt-8 flex items-start gap-4">
          <div className="min-w-0 flex-1">
            <h3 className="text-3xl font-black tracking-tight text-white sm:text-4xl">{project.title}</h3>
            <p className="mt-3 text-sm leading-6 text-violet-200/80">{project.subtitle}</p>
          </div>
          <div aria-hidden="true" className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-violet-300/25 bg-gradient-to-br from-violet-500/25 to-cyan-400/25 text-cyan-100 shadow-[0_0_30px_-8px_rgba(167,139,250,0.4)] transition-transform duration-300 group-hover:-rotate-6 sm:h-16 sm:w-16">
            <Film size={28} strokeWidth={1.5} />
          </div>
        </div>

        <p className="mt-6 text-sm leading-7 text-slate-300">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-xs font-medium text-slate-200">
          <span className="inline-flex items-center gap-2"><Search size={15} className="text-violet-300" aria-hidden="true" />Tìm & lọc phim</span>
          <span className="inline-flex items-center gap-2"><Heart size={15} className="text-rose-300" aria-hidden="true" />Yêu thích</span>
          <span className="inline-flex items-center gap-2"><LayoutDashboard size={15} className="text-cyan-300" aria-hidden="true" />Quản trị</span>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
          {project.techs.map((tech) => (
            <span key={tech} className="rounded-lg border border-white/5 bg-white/[0.04] px-2.5 py-1 text-xs text-slate-400">{tech}</span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <a href={project.liveDemo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 text-sm font-bold text-white shadow-2xl shadow-violet-500/25 transition hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300">
            <Play size={16} fill="currentColor" aria-hidden="true" />
            {projectsText.liveDemo}
          </a>
          <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300">
            <GitHubIcon size={17} />GitHub<ExternalLink size={14} aria-hidden="true" />
          </a>
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/20 bg-gradient-to-r from-violet-500/10 to-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/50 hover:from-violet-500/20 hover:to-cyan-400/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
          >
            {projectsText.caseStudy}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </motion.article>
    </Reveal>
  );
}

function ProjectCard({ project, index, projectsText }) {
  if (project.slug === "movie-website") {
    return <MovieProjectCard project={project} index={index} projectsText={projectsText} />;
  }

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

            {project.detailAvailable !== false && <Link
              to={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-2.5 text-sm font-bold text-cyan-100 transition hover:bg-cyan-300/15"
            >
              {projectsText.caseStudy}
              <ArrowRight size={15} />
            </Link>}
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

export default function Projects({ projectsText }) {
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
