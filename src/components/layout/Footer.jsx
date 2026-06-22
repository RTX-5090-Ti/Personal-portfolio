import { IDENTITY_NAME } from "../../constants/site";

export default function Footer({ footerText }) {
  return (
    <footer className="max-w-6xl px-4 pb-10 mx-auto">
      <div className="flex flex-col items-center justify-between gap-4 pt-8 text-sm border-t border-white/10 text-slate-400 md:flex-row">
        <p>© 2026 {IDENTITY_NAME}. {footerText.builtWith}</p>
      </div>
    </footer>
  );
}
