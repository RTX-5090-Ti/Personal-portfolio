import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { fadeUp } from "./animations";

export default function TypewriterHeroTitle({ line1, name, line2 }) {
  const fullText = `${line1}${name}\n${line2}`;
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const isComplete = visibleCount >= fullText.length;
    const delay = isComplete ? 4500 : fullText[visibleCount] === "\n" ? 320 : 85;

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
