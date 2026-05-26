import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-6",
      )}
    >
      <div className={cn(
        "mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between",
        scrolled && "glass rounded-2xl shadow-luxe",
      )} style={scrolled ? { marginInline: "1rem" } : undefined}>
        <Link to="/" className="flex items-center gap-2 group">
          <span className="h-9 w-9 rounded-full bg-charcoal text-background grid place-items-center font-display text-lg">A</span>
          <span className="font-display text-xl tracking-tight">Atelier <span className="text-gold">Nove</span></span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="text-sm tracking-wide hover:text-foreground transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(d => !d)}
            aria-label="Toggle theme"
            className="h-10 w-10 grid place-items-center rounded-full hairline border hover:bg-secondary transition"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link to="/contact" className="hidden md:inline-flex items-center gap-2 px-5 h-10 rounded-full bg-foreground text-background text-sm tracking-wide hover:bg-charcoal transition">
            Book Consultation
          </Link>
          <button onClick={() => setOpen(o => !o)} className="lg:hidden h-10 w-10 grid place-items-center rounded-full hairline border">
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-4 mt-3 glass rounded-2xl p-6 flex flex-col gap-4"
          >
            {links.map(l => (
              <Link key={l.to} to={l.to} className="text-lg font-display">{l.label}</Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}