import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal text-background mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="font-display text-4xl md:text-5xl leading-[1.05] text-balance">
            Let&apos;s craft a space that <span className="text-gold italic">tells your story</span>.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-3 text-lg group">
            <span className="border-b border-gold/40 pb-1 group-hover:border-gold transition">Start a project</span>
            <ArrowUpRight className="h-5 w-5 text-gold transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
        <div className="lg:col-span-2">
          <h4 className="text-xs uppercase tracking-widest text-gold mb-4">Studio</h4>
          <ul className="space-y-3 text-sm text-background/70">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="lg:col-span-2">
          <h4 className="text-xs uppercase tracking-widest text-gold mb-4">Services</h4>
          <ul className="space-y-3 text-sm text-background/70">
            <li>Interior Design</li>
            <li>Architecture</li>
            <li>Construction</li>
            <li>Landscape</li>
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h4 className="text-xs uppercase tracking-widest text-gold mb-4">Studio Milan</h4>
          <p className="text-sm text-background/70 leading-relaxed">
            Via della Spiga 18<br/>20121 Milano, Italy<br/>
            hello@ateliernove.studio<br/>+39 02 4000 1180
          </p>
          <div className="flex gap-3 mt-6">
            {[Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="h-10 w-10 grid place-items-center rounded-full border border-background/15 hover:bg-gold hover:text-charcoal hover:border-gold transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-background/50">
          <p>© {new Date().getFullYear()} Atelier Nove — All rights reserved.</p>
          <p>Designed with precision. Built with passion.</p>
        </div>
      </div>
    </footer>
  );
}