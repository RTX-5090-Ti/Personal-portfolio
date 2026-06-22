import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ChevronUp } from "lucide-react";

export default function BackToTopButton() {
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

  return (
    <motion.button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
