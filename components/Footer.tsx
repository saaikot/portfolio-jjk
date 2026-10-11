import { FiHeart } from "react-icons/fi";
import { profile, navLinks } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        {/* top section */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Logo + tagline */}
          <div>
            <a href="#home" className="flex items-baseline gap-2">
              <span className="font-display text-2xl tracking-wider text-cursed">
                {profile.initials}
              </span>
              <span className="font-jp text-xs text-muted">呪術師</span>
            </a>
            <p className="mt-3 max-w-xs font-mono text-[11px] leading-relaxed text-muted">
              {profile.title} — building modern web experiences.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-cursed">
              // navigate
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="font-mono text-xs text-muted transition-colors hover:text-ink"
                >
                  <span className="text-cursed/50">&gt;</span> {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-cursed">
              //status
            </p>
            <p className="font-mono text-xs text-muted">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />{" "}
              available for work
            </p>
            <a
              href="#contact"
              className="mt-4 inline-block border border-cursed/60 bg-cursed/10 px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-cursed transition-all hover:bg-cursed hover:text-white"
              style={{
                clipPath:
                  "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
              }}
            >
              召喚 · hire_me
            </a>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 font-mono text-[10px] text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. all rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            built with{" "}
            <FiHeart size={11} className="text-blood" /> using{" "}
            <span className="text-cursed">next.js</span> +{" "}
            <span className="text-six-eyes">tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}