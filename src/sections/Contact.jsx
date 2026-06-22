import { useState } from "react";
import { CircleX, Mail, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import zaloQrImage from "../assets/QRzalo-me.jpg";
import { EMAIL_ADDRESS, GITHUB_URL } from "../constants/site";
import GitHubIcon from "../components/common/GitHubIcon";
import Reveal from "../components/common/Reveal";

export default function Contact({ contactText }) {
  const [showZaloQr, setShowZaloQr] = useState(false);

  return (
    <section id="contact" className="max-w-6xl px-4 py-24 mx-auto">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-[2.5rem] p-8 md:p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-400/20" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 text-sm font-medium border rounded-full border-violet-400/20 bg-violet-400/10 text-violet-100">
                <Mail size={16} />
                {contactText.badge}
              </div>

              <h2 className="text-4xl font-black text-white text-balance md:text-5xl">
                {contactText.title}
              </h2>

              <p className="max-w-2xl mt-5 leading-8 text-slate-300">
                {contactText.description}
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6">
              <div className="space-y-4">
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="flex items-center gap-4 rounded-2xl bg-white/[0.06] p-4 transition hover:bg-white/10"
                >
                  <Mail className="text-cyan-200" />
                  <div>
                    <p className="text-sm text-slate-400">{contactText.email}</p>
                    <p className="font-semibold text-white">{EMAIL_ADDRESS}</p>
                  </div>
                </a>

                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl bg-white/[0.06] p-4 transition hover:bg-white/10"
                >
                  <GitHubIcon className="text-cyan-200" />
                  <div>
                    <p className="text-sm text-slate-400">{contactText.github}</p>
                    <p className="font-semibold text-white">@RTX-5090-Ti</p>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={() => setShowZaloQr(true)}
                  className="flex w-full cursor-pointer items-center gap-4 rounded-2xl bg-white/[0.06] p-4 text-left transition hover:bg-white/10"
                >
                  <MessageCircle className="text-cyan-200" />
                  <div>
                    <p className="text-sm text-slate-400">{contactText.zalo}</p>
                    <p className="font-semibold text-white">{contactText.zaloName}</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {showZaloQr && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center px-4">
          <button
            type="button"
            aria-label={contactText.closeQr}
            onClick={() => setShowZaloQr(false)}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="glass relative z-10 w-full max-w-sm rounded-[2rem] p-5"
          >
            <button
              type="button"
              onClick={() => setShowZaloQr(false)}
              className="absolute p-1 transition rounded-full right-4 top-4 text-slate-300 hover:bg-white/10 hover:text-white"
              aria-label={contactText.closeQr}
            >
              <CircleX size={22} />
            </button>

            <p className="text-sm font-medium text-cyan-200">{contactText.qrTitle}</p>
            <h3 className="mt-2 text-2xl font-black text-white">{contactText.zaloName}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{contactText.qrDescription}</p>

            <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white p-3">
              <img
                src={zaloQrImage}
                alt={`Zalo QR code for ${contactText.zaloName}`}
                className="h-auto w-full rounded-[1rem] object-cover"
              />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
