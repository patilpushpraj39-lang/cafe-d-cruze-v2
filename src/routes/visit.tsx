import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MapPin, Clock, Instagram, Star, ArrowRight } from "lucide-react";
import ig1 from "@/assets/ig-1.jpg";
import ig2 from "@/assets/ig-2.jpg";
import ig3 from "@/assets/ig-3.jpg";
import ig4 from "@/assets/ig-4.jpg";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Café D Cruzé",
  address: {
    "@type": "PostalAddress",
    streetAddress: "17 Marigold Street, Lilac Park",
    addressLocality: "Fernwood City",
    addressRegion: "Maharashtra",
    postalCode: "411099",
    addressCountry: "IN",
  },
  openingHours: "Mo-Su 08:00-01:00",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "312" },
  sameAs: "https://www.instagram.com/cafe.dcruze.demo/",
};

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit Us | Café D Cruzé | Location, Hours & Directions" },
      { name: "description", content: "Find Café D Cruzé at 17 Marigold Street, Lilac Park, Fernwood City. Open daily 8 AM – 1 AM. Get directions and hours." },
      { property: "og:title", content: "Visit Café D Cruzé" },
      { property: "og:description", content: "Open every day. The coffee's always on." },
      { property: "og:url", content: "/visit" },
    ],
    links: [{ rel: "canonical", href: "/visit" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: VisitPage,
});

function useOpenNow() {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    const check = () => {
      const h = new Date().getHours();
      // open 8 AM (8) to 1 AM (1). Open if h >= 8 or h < 1
      setOpen(h >= 8 || h < 1);
    };
    check();
    const id = setInterval(check, 60000);
    return () => clearInterval(id);
  }, []);
  return open;
}

const igCells = [ig1, ig2, ig3, ig4];

function VisitPage() {
  const openNow = useOpenNow();

  return (
    <>
      <section className="relative bg-[var(--espresso)] text-[var(--parchment)] pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="amber-glow opacity-50" />
        <div className="container-x relative text-center">
          <span className="caption text-[var(--amber)]">Visit Us</span>
          <h1 className="display-text mt-3">Come Find Us</h1>
          <p className="mt-5 text-[var(--fog)] text-lg">Open every day. The coffee's always on.</p>
        </div>
      </section>

      <section className="section-y bg-[var(--parchment)]">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="bg-[var(--cream)] border-l-4 border-[var(--amber)] p-8 md:p-10 rounded-sm">
            <div className="flex items-center gap-3">
              <span className={`caption inline-flex items-center gap-2 px-3 py-1 rounded-full ${openNow ? "bg-[var(--amber)] text-[var(--ink)]" : "bg-[var(--ink)]/10 text-[var(--ink)]"}`}>
                <span className={`w-2 h-2 rounded-full ${openNow ? "bg-[var(--ink)]" : "bg-[var(--fog)]"}`} />
                {openNow ? "Open Now" : "Closed"}
              </span>
              <span className="caption text-[var(--fog)]">8 AM – 1 AM</span>
            </div>

            <h2 className="h2-text mt-6 text-[var(--espresso)]">The Details</h2>

            <ul className="mt-6 space-y-5 text-[var(--ink)]/85">
              <li className="flex gap-3">
                <MapPin className="text-[var(--amber)] mt-0.5 shrink-0" size={20} />
                <div>
                  <div className="font-medium">17 Marigold Street, Lilac Park</div>
                  <div className="text-[var(--fog)] text-sm">Fernwood City, Maharashtra 411099 · Plus Code: DEMO+00</div>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="text-[var(--amber)] mt-0.5 shrink-0" size={20} />
                <div>
                  <div className="font-medium">Open Daily</div>
                  <div className="text-[var(--fog)] text-sm">8:00 AM – 1:00 AM</div>
                </div>
              </li>
              <li className="flex gap-3">
                <Instagram className="text-[var(--amber)] mt-0.5 shrink-0" size={20} />
                <a href="https://www.instagram.com/cafe.dcruze.demo/" target="_blank" rel="noreferrer" className="hover:text-[var(--amber)]">@cafe.dcruze.demo</a>
              </li>
              <li className="flex gap-3">
                <Star className="text-[var(--amber)] mt-0.5 shrink-0" size={20} fill="currentColor" />
                <div className="font-medium">4.8 Stars on Google</div>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://maps.google.com/?q=17+Marigold+Street+Fernwood+City+Maharashtra" target="_blank" rel="noreferrer" className="btn-amber">
                Get Directions <ArrowRight size={16} />
              </a>
              <a href="https://www.instagram.com/cafe.dcruze.demo/" target="_blank" rel="noreferrer" className="btn-ghost !text-[var(--ink)] !border-[var(--ink)] hover:!bg-[var(--ink)] hover:!text-[var(--parchment)]">
                <Instagram size={16} /> Follow Us
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(200,131,42,0.4)] border border-[var(--amber)]/30 min-h-[400px]">
            <iframe
              title="Café D Cruzé location"
              src="https://www.google.com/maps?q=17%20Marigold%20Street%2C%20Fernwood%20City%2C%20Maharashtra&output=embed"
              width="100%"
              height="100%"
              style={{ minHeight: 400, border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--espresso)] text-[var(--parchment)] py-20">
        <div className="container-x max-w-2xl">
          <h2 className="h2-text text-center">Hours</h2>
          <div className="mt-10 divide-y divide-[var(--parchment)]/10">
            {["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map((d) => (
              <div key={d} className="flex justify-between py-4">
                <span>{d}</span>
                <span className="text-[var(--fog)] font-mono text-sm">8:00 AM – 1:00 AM</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-[var(--parchment)]">
        <div className="container-x text-center">
          <h2 className="h2-text text-[var(--espresso)]">See You There</h2>
          <p className="caption mt-3 text-[var(--fog)]">Tag us when you visit — @cafe.dcruze.demo</p>
        </div>
        <div className="container-x mt-10 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {igCells.map((src, i) => (
            <a key={i} href="https://www.instagram.com/cafe.dcruze.demo/" target="_blank" rel="noreferrer" className="relative aspect-square overflow-hidden group">
              <img src={src} alt="Café moment" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-[var(--espresso)]/0 group-hover:bg-[var(--espresso)]/70 transition-colors flex items-center justify-center gap-2 text-[var(--parchment)] opacity-0 group-hover:opacity-100">
                <Instagram size={20} /> <span className="caption text-xs">View</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="relative bg-[var(--espresso)] text-[var(--parchment)] py-24 overflow-hidden">
        <div className="amber-glow opacity-40" />
        <div className="container-x relative text-center">
          <h2 className="display-text">The Night is Long.<br />We're Open 'Til 1 AM.</h2>
          <p className="mt-5 text-[var(--fog)] text-lg">Dine in. Unwind. We'll take care of the rest.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/menu" className="btn-amber">View Menu</Link>
            <a href="https://maps.google.com/?q=17+Marigold+Street+Fernwood+City+Maharashtra" target="_blank" rel="noreferrer" className="btn-ghost">Get Directions</a>
          </div>
        </div>
      </section>
    </>
  );
}
