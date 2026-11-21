import {
  CheckCircle2,
  ChevronLeft,
  ExternalLink,
  Image,
  Rocket,
  Target,
} from "lucide-react";
import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import BackgroundDecor from "../components/common/BackgroundDecor";
import GitHubIcon from "../components/common/GitHubIcon";
import Reveal from "../components/common/Reveal";
import SectionHeader from "../components/common/SectionHeader";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { projects } from "../data/projects";

export default function ProjectDetailPage({ language, setLanguage, content }) {
  const { projectSlug } = useParams();
  const project = projects.find((item) => item.slug === projectSlug);
  const detailText = content.detail;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [projectSlug]);

  if (!project || project.detailAvailable === false) {
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
                {project.overview || project.description}
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
            description={project.sectionDescriptions?.features || detailText.featuresDescription}
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
            description={project.sectionDescriptions?.screenshots || detailText.screenshotsDescription}
          />

          <div className="grid gap-5 md:grid-cols-2">
            {project.screenshots.map((screen, index) => (
              <Reveal key={screen.src || screen} delay={index * 0.05}>
                <div className="glass overflow-hidden rounded-[2rem] p-4">
                  {screen.src ? (
                    <figure>
                      <a href={screen.src} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-[1.5rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
                        <img src={screen.src} alt={`${screen.label} — ${screen.description}`} loading="lazy" className="h-auto w-full transition duration-300 hover:scale-[1.02]" />
                      </a>
                      <figcaption className="px-2 pb-2 pt-5">
                        <h3 className="text-lg font-bold text-white">{screen.label}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-400">{screen.description}</p>
                      </figcaption>
                    </figure>
                  ) : (
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
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <SectionHeader
            eyebrow={detailText.challengesEyebrow}
            title={detailText.challengesTitle}
            description={project.sectionDescriptions?.challenges || detailText.challengesDescription}
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
            description={project.sectionDescriptions?.learnings || detailText.learningsDescription}
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
