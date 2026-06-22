import { Code2, Database, Layers, Sparkles, Target } from "lucide-react";
import Reveal from "../components/common/Reveal";
import SectionHeader from "../components/common/SectionHeader";

export default function About({ aboutText }) {
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
