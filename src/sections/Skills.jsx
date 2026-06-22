import { Cloud, Code2, Database, Globe2 } from "lucide-react";
import { motion } from "motion/react";
import Reveal from "../components/common/Reveal";
import SectionHeader from "../components/common/SectionHeader";

export default function Skills({ skillsText }) {
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
