import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PageHeader } from "@/components/site/PageHeader";
import { CTA } from "@/components/site/CTA";
import { projects, filters } from "@/lib/site-data";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Atelier Nove" },
      { name: "description", content: "A selected portfolio of luxury villas, residences, commercial architecture and hospitality projects." },
      { property: "og:title", content: "Projects — Atelier Nove" },
      { property: "og:description", content: "A selected portfolio of villas, residences, workspaces and hospitality." },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const list = projects.filter(p => filter === "All" || p.category === filter);

  return (
    <>
      <PageHeader
        kicker="Portfolio"
        title={<>Selected <em className="text-gold font-light">work</em>, 2018–2024.</>}
        subtitle="A small, curated body of homes, workplaces and hospitality spaces — every one built by our own team."
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 h-10 rounded-full text-sm border hairline border transition ${filter === f ? "bg-foreground text-background border-transparent" : "hover:bg-secondary"}`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {list.map((p, i) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative overflow-hidden rounded-2xl bg-card shadow-luxe ${i % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                >
                  <div className="relative h-[420px] md:h-[480px] overflow-hidden">
                    <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 p-6 lg:p-8 text-background flex items-end justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-gold mb-2">{p.category}</p>
                        <h3 className="font-display text-3xl">{p.title}</h3>
                        <p className="text-xs uppercase tracking-widest text-background/70 mt-1">{p.location} · {p.year}</p>
                      </div>
                      <span className="h-11 w-11 grid place-items-center rounded-full bg-background text-foreground">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}