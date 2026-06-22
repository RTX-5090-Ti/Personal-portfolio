import Reveal from "../components/common/Reveal";
import SectionHeader from "../components/common/SectionHeader";

export default function LearningJourney({ journeyText }) {
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
