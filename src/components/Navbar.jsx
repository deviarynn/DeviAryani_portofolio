import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { useScrollSpy } from "../hooks/useScrollSpy";

const NAV_ITEMS = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "credentials", label: "credentials" },
  { id: "contact", label: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(NAV_ITEMS.map((n) => n.id));

  const handleNav = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-ink-line bg-ink/80 backdrop-blur-md">
      <nav className="section-shell flex h-16 items-center justify-between">
        <button
          onClick={() => handleNav("home")}
          className="font-mono text-sm font-medium text-paper hover:text-signal transition-colors"
          aria-label="Back to top"
        >
          <span className="text-circuit">~/</span>devi-aryani
          <span className="animate-blink text-signal">_</span>
        </button>

        <ul className="hidden md:flex items-center gap-1 font-mono text-xs">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNav(item.id)}
                className={`relative px-4 py-2 rounded-full transition-colors duration-200 ${
                  activeId === item.id
                    ? "text-ink bg-circuit"
                    : "text-slate hover:text-paper"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleNav("contact")}
          className="hidden md:inline-flex btn-ghost !py-2 !px-4 text-xs"
        >
          Let's talk
        </button>

        <button
          className="md:hidden text-paper text-2xl"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-ink-line bg-ink"
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNav(item.id)}
                  className={`w-full text-left px-6 py-4 font-mono text-sm border-b border-ink-line ${
                    activeId === item.id ? "text-circuit" : "text-slate"
                  }`}
                >
                  ~/{item.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
