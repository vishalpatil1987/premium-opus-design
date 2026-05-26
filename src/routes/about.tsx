import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Stats } from "@/components/site/Stats";
import { Process } from "@/components/site/Process";
import { CTA } from "@/components/site/CTA";
import { Reveal } from "@/components/site/Reveal";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Atelier Nove" },
      { name: "description", content: "Founded on craft and quiet rigor, Atelier Nove is a studio of architects, designers and builders dedicated to timeless residential and commercial work." },
      { property: "og:title", content: "About — Atelier Nove" },
      { property: "og:description", content: "A studio founded on craft, quiet rigor and a commitment to timeless design." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { t: "Considered, not loud", d: "We design rooms that reveal themselves slowly. Detail rewards a second look." },
  { t: "One accountable team", d: "Architects, interior designers and our own construction team — one contract, one promise." },
  { t: "Materials as memory", d: "Stone, oak, brass, linen. We specify finishes that age into the home." },
];

function About() {
  return (
    <>
      <PageHeader
        kicker="The Studio"
        title={<>A studio where <em className="text-gold font-light">architecture, interiors</em> and construction speak one language.</>}
        subtitle="Atelier Nove was founded in Milan in 2010 by a small group of architects who believed the best homes are made when designer and builder share the same table — and the same standards."
      />

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img src={heroImg} alt="Studio interior" loading="lazy" className="rounded-3xl shadow-luxe w-full h-[560px] object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs tracking-[0.35em] uppercase text-gold mb-5">— Our story</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6 text-balance">Fifteen years of quiet, careful work.</h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>What began as a two-person practice now stretches across a forty-strong team of architects, interior designers, project managers and site supervisors — yet our principle has not moved an inch.</p>
              <p>We take on a small number of projects each year. We listen first. We sketch by hand. We build models. We test materials in the actual light of the actual site. And we do not hand over the keys until the home feels exactly the way we promised.</p>
              <p className="font-display text-2xl text-foreground italic">— Lorenzo Marchetti, Founding Partner</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-gold mb-5">— What we believe</p>
            <h2 className="font-display text-4xl md:text-5xl mb-14 max-w-3xl text-balance">Three convictions that shape every drawing we produce.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.1}>
                <div className="bg-background rounded-2xl p-10 h-full shadow-luxe">
                  <p className="font-display text-gold text-sm">0{i + 1}</p>
                  <h3 className="font-display text-2xl mt-4 mb-3">{v.t}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <Process />
      <CTA />
    </>
  );
}