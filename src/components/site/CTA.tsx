import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden bg-charcoal text-background p-10 md:p-20">
            <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/30 blur-3xl" />
            <div className="relative grid lg:grid-cols-2 gap-10 items-end">
              <h3 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance">
                Where vision meets <em className="text-gold font-light">timeless design</em>.
              </h3>
              <div className="space-y-6">
                <p className="text-background/70 max-w-md">
                  Book a private consultation with our principal architects. We will discuss your site, your aspirations and what becomes possible.
                </p>
                <Link to="/contact" className="group inline-flex items-center gap-3 bg-gold text-charcoal pl-7 pr-3 h-14 rounded-full text-sm tracking-wide hover:bg-background transition">
                  Book Consultation
                  <span className="h-10 w-10 grid place-items-center rounded-full bg-charcoal text-background transition group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}