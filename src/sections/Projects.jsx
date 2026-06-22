import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import GitHubIcon from "../components/common/GitHubIcon";
import Reveal from "../components/common/Reveal";
import SectionHeader from "../components/common/SectionHeader";

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
