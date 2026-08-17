import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu | Café D Cruzé | Pure Veg Food & Beverages — Fernwood City" },
      { name: "description", content: "Explore the pure vegetarian menu at Café D Cruzé — fresh veg dishes, artisan coffees, shakes, mocktails and more." },
      { property: "og:title", content: "Menu — Café D Cruzé" },
      { property: "og:description", content: "Fresh ingredients. Bold flavours. Made with love." },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

type Section = { title: string; items: string[] };

const VEG: Section[] = [
  { title: "Starters & Snacks", items: ["Veg Puff", "Samosa (2 pcs)", "Paneer Tikka", "Crispy Corn", "Loaded Nachos (Veg)", "Cheese Garlic Bread", "Veg Spring Rolls", "French Fries", "Peri Peri Fries", "Cheesy Fries"] },
  { title: "Mains & Rice", items: ["Veg Fried Rice", "Schezwan Fried Rice", "Veg Hakka Noodles", "Schezwan Noodles", "Paneer Butter Masala with Butter Naan", "Dal Tadka with Jeera Rice", "Veg Biryani", "Veg Manchurian (Dry / Gravy)", "Chilli Paneer (Dry / Gravy)"] },
  { title: "Sandwiches & Burgers", items: ["Classic Veg Sandwich (Toasted)", "Grilled Veg Cheese Sandwich", "Veg Club Sandwich", "Crispy Veg Burger", "Paneer Tikka Burger", "Aloo Tikki Burger"] },
  { title: "Pizza", items: ["Margherita Pizza", "Paneer Tikka Pizza", "Farm Fresh Veg Pizza", "Classic Cheese Pizza"] },
  { title: "Pasta & Wraps", items: ["Penne Arrabbiata", "White Sauce Pasta", "Veg Pasta (Red Sauce)", "Paneer Kathi Roll / Wrap"] },
  { title: "Desserts", items: ["Chocolate Brownie with Ice Cream", "Gulab Jamun (2 pcs)", "Ice Cream (Single Scoop)", "Chocolate Lava Cake"] },
];

const BEV: Section[] = [
  { title: "Hot Beverages ☕", items: ["Espresso", "Americano", "Cappuccino", "Café Latte", "Filter Coffee", "Masala Chai", "Ginger Lemon Tea", "Green Tea", "Hot Chocolate", "Irish Coffee (Non-Alcoholic)"] },
  { title: "Cold Coffee & Shakes 🥤", items: ["Cold Coffee (Classic)", "Cold Coffee with Ice Cream", "Hazelnut Cold Coffee", "Caramel Cold Coffee", "Mocha Frappe", "Vanilla Shake", "Chocolate Shake", "Strawberry Shake", "Oreo Shake", "Kitkat Shake", "Mango Shake (Seasonal)"] },
  { title: "Fresh Juices & Coolers 🍋", items: ["Fresh Lime Soda (Sweet / Salt / Masala)", "Lemonade", "Watermelon Juice", "Mixed Fruit Juice", "Mint Cooler", "Jaljeera"] },
  { title: "Mocktails 🍹", items: ["Virgin Mojito", "Blue Lagoon", "Sunset Paradise", "Kiwi Cooler", "Passion Fruit Punch"] },
];

function Dot() {
  return (
    <span
      aria-label="Vegetarian"
      className="inline-block w-3 h-3 border shrink-0"
      style={{ borderColor: "#2D8A3E" }}
    >
      <span className="block w-1.5 h-1.5 m-[3px] rounded-full" style={{ backgroundColor: "#2D8A3E" }} />
    </span>
  );
}

function SectionBlock({ section, showDot }: { section: Section; showDot?: boolean }) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-6">
        <h3 className="text-2xl italic text-[var(--espresso)]" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
          {section.title}
        </h3>
        <div className="flex-1 h-px bg-[var(--amber)]/40" />
      </div>
      <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
        {section.items.map((item) => (
          <li key={item} className="flex items-start gap-3 py-2 border-b border-[var(--ink)]/5">
            {showDot && <span className="mt-1.5"><Dot /></span>}
            <span className="text-[var(--ink)]/90">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MenuPage() {
  const [tab, setTab] = useState<"food" | "bev">("food");

  return (
    <>
      {/* HERO */}
      <section className="relative bg-[var(--espresso)] text-[var(--parchment)] pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="amber-glow opacity-50" />
        <div className="container-x relative text-center">
          <span className="caption text-[var(--amber)]">The Menu</span>
          <h1 className="display-text mt-3">Our Menu</h1>
          <p className="mt-5 text-[var(--fog)] text-lg">Pure vegetarian. Fresh ingredients. Made with love.</p>
          <div className="w-16 h-px bg-[var(--amber)] mx-auto mt-8" />
        </div>
      </section>

      {/* TAB BAR */}
      <div className="sticky top-[68px] md:top-[76px] z-40 bg-[var(--parchment)]/95 backdrop-blur border-b border-[var(--ink)]/10">
        <div className="container-x flex items-center justify-center gap-10 py-4">
          {(["food", "bev"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`relative caption transition-colors ${tab === t ? "text-[var(--amber)]" : "text-[var(--fog)] hover:text-[var(--ink)]"}`}
            >
              {t === "food" ? "Food" : "Beverages"}
              <span className={`absolute left-0 right-0 -bottom-2 h-0.5 bg-[var(--amber)] transition-transform duration-300 ${tab === t ? "scale-x-100" : "scale-x-0"}`} />
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <section className="section-y bg-[var(--parchment)]">
        <div className="container-x max-w-4xl">
          {tab === "food" && VEG.map((s) => <SectionBlock key={s.title} section={s} showDot />)}
          {tab === "bev" && BEV.map((s) => <SectionBlock key={s.title} section={s} />)}
        </div>
      </section>
    </>
  );
}
