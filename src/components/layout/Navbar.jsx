import { useState } from "react";
import { Download, Globe2, Menu, X } from "lucide-react";
import { motion } from "motion/react";
import avatarImage from "../../assets/iconAvatar.jpg";
import { CV_FILE_PATH, GITHUB_URL, IDENTITY_NAME } from "../../constants/site";
import GitHubIcon from "../common/GitHubIcon";

export default function Navbar({ language, setLanguage, navText }) {
  const [open, setOpen] = useState(false);
  const navItems = [
    { label: navText.about, href: "/#about" },
    { label: navText.skills, href: "/#skills" },
    { label: navText.projects, href: "/#projects" },
    { label: navText.contact, href: "/#contact" },
  ];

  const toggleLanguage = () => {
    setLanguage((current) => (current === "en" ? "vi" : "en"));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <div className="flex items-stretch max-w-6xl gap-2 mx-auto">
        <nav className="flex items-center justify-between flex-1 px-4 py-3 glass rounded-2xl">
          <a href="/#home" className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-xl shadow-lg shadow-violet-500/20 ring-1 ring-white/10">
              <img
                src={avatarImage}
                alt={`Avatar of ${IDENTITY_NAME}`}
                className="h-full w-full object-cover object-center scale-[1.35]"
              />
            </div>
            <div>
              <p className="text-sm font-bold leading-none text-white">
                {IDENTITY_NAME}
              </p>
              <p className="mt-1 text-xs text-slate-400">{navText.portfolio}</p>
            </div>
          </a>

          <div className="items-center hidden gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium transition rounded-xl text-slate-300 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="items-center hidden gap-3 md:flex">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="p-2 transition border rounded-xl border-white/10 text-slate-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
              aria-label="GitHub"
            >
              <GitHubIcon size={18} />
            </a>

            <a
              href={CV_FILE_PATH}
              className="px-4 py-2 text-sm font-bold transition bg-white rounded-xl text-slate-950 hover:bg-violet-100"
            >
              {navText.downloadCv}
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="p-2 text-white border rounded-xl border-white/10"
              aria-label={navText.toggleMenu}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        <button
          type="button"
          onClick={toggleLanguage}
          className="inline-flex shrink-0 items-center gap-2 self-stretch rounded-2xl border border-white/10 bg-slate-900/75 px-4 text-sm font-semibold text-slate-200 backdrop-blur-md transition hover:border-white/20 hover:bg-white/10 hover:text-white"
          aria-label={navText.language}
        >
          <Globe2 size={16} />
          {language.toUpperCase()}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl p-3 mx-auto mt-3 glass rounded-2xl md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm font-medium rounded-xl text-slate-300 hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}

          <a
            href={CV_FILE_PATH}
            className="flex items-center justify-center gap-2 px-4 py-3 mt-2 text-sm font-bold bg-white rounded-xl text-slate-950"
          >
            <Download size={16} />
            {navText.downloadCv}
          </a>
        </motion.div>
      )}
    </header>
  );
}
