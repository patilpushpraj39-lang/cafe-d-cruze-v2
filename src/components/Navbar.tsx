import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Instagram, Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About Us" },
  { to: "/visit", label: "Visit Us" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open ? "bg-[var(--espresso)]/95 backdrop-blur shadow-[0_4px_30px_rgba(0,0,0,0.2)]" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-4 md:py-5">
        <Link to="/" className="text-2xl md:text-3xl italic font-display text-[var(--amber)] leading-none" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 600 }}>
          Café D Cruzé
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative text-sm tracking-wide transition-colors ${
                  active ? "text-[var(--amber)]" : "text-[var(--parchment)] hover:text-[var(--amber)]"
                }`}
              >
                {l.label}
                <span
                  className={`absolute left-0 -bottom-1 h-px bg-[var(--amber)] transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/cafe.dcruze.demo/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-[var(--parchment)] hover:text-[var(--amber)] transition-colors"
          >
            <Instagram size={20} />
          </a>
          <button
            className="md:hidden text-[var(--parchment)] p-2 -mr-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden bg-[var(--espresso)] transition-[max-height] duration-500 ease-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="container-x flex flex-col gap-1 pb-6 pt-2">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`py-4 text-lg border-b border-white/10 ${
                  active ? "text-[var(--amber)]" : "text-[var(--parchment)]"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
