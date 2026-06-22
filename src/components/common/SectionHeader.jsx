import { Sparkles } from "lucide-react";
import Reveal from "./Reveal";

export default function SectionHeader({ eyebrow, title, description }) {
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
