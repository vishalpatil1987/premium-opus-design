import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ServicesSection } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Atelier Nove" },
      { name: "description", content: "Luxury interior design, residential and commercial architecture, turnkey construction, renovation, landscape, smart homes and 3D visualization." },
      { property: "og:title", content: "Services — Atelier Nove" },
      { property: "og:description", content: "Eight disciplines, one accountable studio." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHeader
        kicker="Services"
        title={<>Crafting <em className="text-gold font-light">architectural excellence</em>, end to end.</>}
        subtitle="Eight disciplines, delivered by one studio so that nothing is lost in translation between drawing, finish and construction."
      />
      <ServicesSection />
      <Process />
      <CTA />
    </>
  );
}