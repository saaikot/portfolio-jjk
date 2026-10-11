"use client";
import { useEffect, useState } from "react";
import { profile, navLinks } from "@/data/profile";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between border px-5 py-3 transition-all duration-300 ${
          scrolled
            ? "border-line bg-bg/80 backdrop-blur-lg"
            : "border-transparent bg-transparent"
        }`}
        style={{
          clipPath:
            "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
        }}
      >
        {/* ===== Logo ===== */}
        <a href="#home" className="flex items-baseline gap-2">
          <span className="font-display text-lg tracking-wider text-cursed">
            {profile.initials}
          </span>
          <span className="hidden font-jp text-xs text-muted sm:inline whitespace-nowrap">
            呪術師
          </span>
        </a>

        {/* ===== Desktop nav ===== */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative px-4 py-2 text-xs font-medium uppercase tracking-wider text-muted transition-colors duration-200 hover:text-ink"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-cursed transition-all duration-300 group-hover:w-4/5" />
              </a>
            </li>
          ))}
        </ul>

        {/* ===== Right side ===== */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden whitespace-nowrap border border-cursed/60 bg-cursed/10 px-4 py-2 text-xs font-medium uppercase tracking-widest text-cursed transition-all duration-200 hover:bg-cursed hover:text-white md:inline-block"
            style={{
              clipPath:
                "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
            }}
          >
            召喚 · Hire
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="flex h-9 w-9 items-center justify-center border border-line text-ink transition-colors hover:border-cursed hover:text-cursed md:hidden"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {open ? (
                <>
                  <line x1="3" y1="3" x2="13" y2="13" />
                  <line x1="13" y1="3" x2="3" y2="13" />
                </>
              ) : (
                <>
                  <line x1="2" y1="5" x2="14" y2="5" />
                  <line x1="2" y1="11" x2="14" y2="11" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* ===== Mobile menu ===== */}
      {open && (
        <div
          className="mx-auto mt-2 max-w-6xl border border-line bg-bg/95 backdrop-blur-lg md:hidden"
          style={{
            clipPath:
              "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line/50 px-5 py-4 text-sm uppercase tracking-wider text-muted transition-colors hover:bg-surface hover:text-cursed"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block px-5 py-4 text-sm font-medium uppercase tracking-widest text-cursed"
          >
            召喚 · Hire Me
          </a>
        </div>
      )}
    </header>
  );
}