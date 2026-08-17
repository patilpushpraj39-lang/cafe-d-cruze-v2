import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Clock, Utensils, Star, Instagram } from "lucide-react";
import heroImg from "@/assets/hero-cafe.jpg";
import ig1 from "@/assets/ig-1.jpg";
import ig2 from "@/assets/ig-2.jpg";
import ig3 from "@/assets/ig-3.jpg";
import ig4 from "@/assets/ig-4.jpg";
import ig5 from "@/assets/ig-5.jpg";
import ig6 from "@/assets/ig-6.jpg";
import aboutImg from "@/assets/about-coffee.jpg";

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
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.5", reviewCount: "2" },
  sameAs: "https://www.instagram.com/cafe.dcruze.demo/",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Café D Cruzé | Premium Café in Fernwood City | Open 8 AM – 1 AM" },
      { name: "description", content: "A warm dine-in café in Fernwood City. Open every day, 8 AM to 1 AM. Crafted food, artisan beverages, and unhurried evenings." },
      { property: "og:title", content: "Café D Cruzé — Fernwood City" },
      { property: "og:description", content: "A cup warmer than the night. Open daily 8 AM – 1 AM." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Home,
});

const igCells = [ig1, ig2, ig3, ig4, ig5, ig6];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[var(--espresso)]/55" />
        <div className="amber-glow" />

        <div className="absolute top-24 right-5 md:right-10 z-10">
          <span className="caption inline-flex items-center gap-1.5 bg-[var(--amber)] text-[var(--ink)] px-3 py-1.5 rounded-full">
            <Star size={12} fill="currentColor" /> 4.5 Rated
          </span>
        </div>

        <div className="container-x relative z-10 text-center pt-20">
          <h1 className="display-text text-[var(--parchment)] reveal">
            A Cup Warmer<br />Than the Night.
          </h1>
          <p className="mt-6 text-[var(--fog)] text-lg md:text-xl reveal" style={{ animationDelay: "0.1s" }}>
            Dine-in café. Open 8 AM to 1 AM, every day.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 reveal" style={{ animationDelay: "0.2s" }}>
            <Link to="/menu" className="btn-amber">Explore Our Menu <ArrowRight size={16} /></Link>
            <Link to="/visit" className="btn-ghost">Find Us</Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
          <div className="w-px h-12 bg-[var(--parchment)]/60 scroll-pulse" />
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="section-y bg-[var(--parchment)]">
        <div className="container-x grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 order-2 md:order-1">
            <blockquote className="h2-text text-[var(--espresso)]">
              "We built this place to feel like home — only with better coffee."
            </blockquote>
            <p className="mt-8 text-[var(--ink)]/80 leading-relaxed max-w-xl">
              Café D Cruzé was born from a simple belief: that great food and great company deserve a great setting. Nestled in the heart of Fernwood City, we're a place where conversations linger as long as the coffee does. Come for a quick bite or stay until midnight — we're open every day, morning to night.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 mt-8 text-[var(--amber)] font-medium hover:gap-3 transition-all">
              Our Story <ArrowRight size={16} />
            </Link>
          </div>
          <div className="md:col-span-2 order-1 md:order-2 relative">
            <img src={aboutImg} alt="Latte art" className="w-full aspect-[4/5] object-cover rounded-sm" loading="lazy" />
            <div className="absolute -bottom-3 -right-3 w-20 h-20 border-r-2 border-b-2 border-[var(--amber)]" />
          </div>
        </div>
      </section>

      {/* MENU TEASER */}
      <section className="section-y bg-[var(--cream)]">
        <div className="container-x text-center">
          <span className="caption text-[var(--amber)]">The Menu</span>
          <h2 className="h2-text mt-3 text-[var(--espresso)]">Something for Every Craving</h2>
          <p className="mt-4 text-[var(--fog)] max-w-xl mx-auto">
            From hearty meals to artisan beverages — crafted with care.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {[
              { icon: "🥗", title: "Veg Starters", desc: "Crispy, smoky, fresh from the kitchen." },
              { icon: "🍕", title: "Mains & Pizzas", desc: "Comfort classics with a handcrafted twist." },
              { icon: "☕", title: "Hot Beverages", desc: "From filter coffee to a midnight latte." },
              { icon: "🥤", title: "Cold Drinks & Shakes", desc: "Iced, creamy, and just the right amount of sweet." },

            ].map((c) => (
              <div key={c.title} className="bg-[var(--espresso)] text-left p-7 rounded-sm group hover:-translate-y-1 transition-transform">
                <div className="text-3xl">{c.icon}</div>
                <div className="caption text-[var(--amber)] mt-4">{c.title}</div>
                <p className="mt-2 text-[var(--parchment)]/80 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <Link to="/menu" className="btn-amber mt-12">View Full Menu <ArrowRight size={16} /></Link>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-[var(--espresso)] text-[var(--parchment)]">
        <div className="container-x py-20 grid md:grid-cols-3 gap-10 md:gap-0">
          {[
            { Icon: Clock, title: "Open Daily", desc: "8 AM to 1 AM, every single day." },
            { Icon: Utensils, title: "Dine-In Comfort", desc: "A warm, inviting space for every occasion." },
            { Icon: MapPin, title: "Find Us in Lilac Park", desc: "17 Marigold Street, Fernwood City, Maharashtra 411099." },
          ].map(({ Icon, title, desc }, i) => (
            <div key={title} className={`text-center px-6 ${i > 0 ? "md:border-l border-[var(--amber)]/30" : ""}`}>
              <Icon className="mx-auto text-[var(--amber)]" size={28} />
              <h3 className="mt-4 text-xl" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>{title}</h3>
              <p className="mt-2 text-[var(--parchment)]/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="section-y bg-[var(--parchment)]">
        <div className="container-x text-center">
          <h2 className="h2-text text-[var(--espresso)]">Follow Our Story</h2>
          <p className="caption mt-3 text-[var(--fog)]">@cafe.dcruze.demo · Daily specials, café moods, and more</p>
        </div>
        <div className="container-x mt-10 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {igCells.map((src, i) => (
            <a
              key={i}
              href="https://www.instagram.com/cafe.dcruze.demo/"
              target="_blank" rel="noreferrer"
              className="relative aspect-square overflow-hidden group"
            >
              <img src={src} alt="Café moment" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-[var(--espresso)]/0 group-hover:bg-[var(--espresso)]/70 transition-colors flex items-center justify-center gap-2 text-[var(--parchment)] opacity-0 group-hover:opacity-100">
                <Instagram size={20} /> <span className="caption text-xs">View on Instagram</span>
              </div>
            </a>
          ))}
        </div>
        <div className="container-x mt-10 text-center">
          <a href="https://www.instagram.com/cafe.dcruze.demo/" target="_blank" rel="noreferrer" className="btn-ghost !text-[var(--ink)] !border-[var(--ink)] hover:!bg-[var(--ink)] hover:!text-[var(--parchment)]">
            <Instagram size={16} /> Follow @cafe.dcruze.demo
          </a>
        </div>
      </section>
    </>
  );
}
