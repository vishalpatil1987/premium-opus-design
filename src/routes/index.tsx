import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { ServicesSection } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesSection />
      <Portfolio />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
