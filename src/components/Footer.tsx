import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--espresso)] text-[var(--parchment)] relative">
      <div className="h-px bg-[var(--amber)]/60" />
      <div className="container-x py-16 grid gap-12 md:grid-cols-3">
        <div>
          <div className="text-3xl italic text-[var(--amber)]" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
            Café D Cruzé
          </div>
          <p className="mt-4 text-[var(--fog)] italic" style={{ fontFamily: "var(--font-display)", fontSize: 20 }}>
            Where every sip tells a story.
          </p>
        </div>

        <div>
          <h4 className="caption text-[var(--amber)] mb-4">Quick Links</h4>
          <ul className="space-y-2 text-[var(--parchment)]/80">
            <li><Link to="/" className="hover:text-[var(--amber)]">Home</Link></li>
            <li><Link to="/menu" className="hover:text-[var(--amber)]">Menu</Link></li>
            <li><Link to="/about" className="hover:text-[var(--amber)]">About Us</Link></li>
            <li><Link to="/visit" className="hover:text-[var(--amber)]">Visit Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="caption text-[var(--amber)] mb-4">Find Us</h4>
          <p className="text-[var(--parchment)]/80 leading-relaxed">
            17 Marigold Street, Lilac Park,<br />Fernwood City, Maharashtra 411099
          </p>
          <p className="text-[var(--parchment)]/80 mt-3">Open Daily · 8 AM – 1 AM</p>
          <a
            href="https://www.instagram.com/cafe.dcruze.demo/"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-[var(--amber)] hover:underline"
          >
            <Instagram size={16} /> @cafe.dcruze.demo
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 text-xs text-[var(--parchment)]/60 text-center caption">
          © 2025 Café D Cruzé. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
