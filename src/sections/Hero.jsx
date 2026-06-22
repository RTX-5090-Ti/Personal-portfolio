import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import heroHelloImage from "../assets/iconSayhi.png";
import { stagger, fadeUp } from "../components/common/animations";
import TypewriterHeroTitle from "../components/common/TypewriterHeroTitle";

export default function Hero({ heroText }) {
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
              <div className="absolute inset-x-0 top-0 h-24 rounded-[1.25rem] bg-gradient-to-b from-cyan-400/10 to-transparent" />

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
