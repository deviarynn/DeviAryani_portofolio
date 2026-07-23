import { profile } from "../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-line">
      <div className="section-shell flex flex-col items-center justify-between gap-4 py-8 font-mono text-xs text-slate sm:flex-row">
        <p>
          © {year} {profile.name}. Built with React &amp; a lot of coffee.
        </p>
        <button
          onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
          className="hover:text-circuit transition-colors"
        >
          back to top ↑
        </button>
      </div>
    </footer>
  );
}
