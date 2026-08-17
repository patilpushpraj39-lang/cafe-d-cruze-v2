import { createFileRoute } from "@tanstack/react-router";
import { Coffee, Moon, Heart } from "lucide-react";
import interior from "@/assets/about-interior.jpg";
import coffee from "@/assets/about-coffee.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story | Café D Cruzé | About Our Café" },
      { name: "description", content: "Café D Cruzé is a warm, family-run dine-in café on Marigold Street, Fernwood City — built for community, conversation, and unhurried evenings." },
      { property: "og:title", content: "Our Story — Café D Cruzé" },
      { property: "og:description", content: "A café born from passion. Built for community." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative bg-[var(--espresso)] text-[var(--parchment)] pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="amber-glow opacity-50" />
        <div className="container-x relative text-center">
          <span className="caption text-[var(--amber)]">About Us</span>
          <h1 className="display-text mt-3">Our Story</h1>
          <p className="mt-5 text-[var(--fog)] text-lg">A café born from passion. Built for community.</p>
        </div>
      </section>

      <section className="section-y bg-[var(--parchment)]">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <img src={interior} alt="Café D Cruzé interior" loading="lazy" className="w-full aspect-[4/5] object-cover rounded-sm" />
          <div>
            <span className="caption text-[var(--amber)]">Our Roots</span>
            <h2 className="h2-text mt-3 text-[var(--espresso)]">More Than a Café.</h2>
            <div className="mt-6 space-y-5 text-[var(--ink)]/80 leading-relaxed">
              <p>Café D Cruzé isn't just a place to eat — it's a place to exhale. Tucked away on Marigold Street in the leafy neighbourhood of Lilac Park, we opened our doors in 2019 with one purpose: to create a space where people feel genuinely welcomed.</p>
              <p>From the first cup of morning coffee to the last bite at midnight, every moment here is crafted with care. Our menu spans the familiar and the adventurous — from comfort food classics to bold flavours that linger long after the plate is cleared.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-[var(--cream)]">
        <div className="container-x grid md:grid-cols-3 gap-8">
          {[
            { Icon: Coffee, title: "Crafted with Care", desc: "Every dish and every drink is made fresh, with quality ingredients and honest flavour." },
            { Icon: Moon, title: "Open Late, Always", desc: "Whether it's an early breakfast or a midnight craving, we're here — 8 AM to 1 AM, 7 days a week." },
            { Icon: Heart, title: "Community First", desc: "Fernwood City is our home. We're proud to serve the people and families who make this place special." },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="bg-[var(--parchment)] p-8 rounded-sm">
              <Icon className="text-[var(--amber)]" size={28} />
              <h3 className="mt-5 text-2xl italic text-[var(--espresso)]" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>{title}</h3>
              <p className="mt-3 text-[var(--ink)]/75 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y bg-[var(--parchment)] relative overflow-hidden">
        <div className="container-x grid md:grid-cols-12 gap-6 items-center">
          <img src={coffee} alt="Coffee cup" loading="lazy" className="md:col-span-4 w-full aspect-square object-cover rounded-sm" />
          <div className="md:col-span-8 relative">
            <span className="absolute -top-12 -left-2 text-[200px] leading-none text-[var(--amber)]/15 font-display select-none" aria-hidden>"</span>
            <blockquote className="relative h2-text text-[var(--espresso)]">
              Pull up a chair. You're staying a while.
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-[var(--espresso)] text-[var(--parchment)] py-20">
        <div className="container-x text-center max-w-2xl">
          <div className="w-24 h-24 mx-auto rounded-full border-2 border-[var(--amber)] bg-[var(--parchment)]/5" />
          <h2 className="h2-text mt-8">The Heart Behind the Cup</h2>
          <p className="mt-5 text-[var(--parchment)]/80 leading-relaxed">
            Café D Cruzé is a family venture rooted in a love of food, hospitality, and community. We're here every day — and we'd love to see you here too.
          </p>
        </div>
      </section>
    </>
  );
}
