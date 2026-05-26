import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { z } from "zod";
import { toast, Toaster } from "sonner";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Atelier Nove" },
      { name: "description", content: "Begin a private consultation with our principal architects. We respond to every enquiry within two working days." },
      { property: "og:title", content: "Contact — Atelier Nove" },
      { property: "og:description", content: "Begin a private consultation with our principal architects." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please share your name").max(100),
  email: z.string().trim().email("A valid email, please").max(255),
  service: z.string().min(1, "Choose a service"),
  message: z.string().trim().min(10, "Tell us a little about your project").max(2000),
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: "Interior Design", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = schema.safeParse(form);
    if (!res.success) {
      const f: Record<string, string> = {};
      res.error.issues.forEach(i => { f[String(i.path[0])] = i.message; });
      setErrors(f); return;
    }
    setErrors({}); setSubmitting(true);
    await new Promise(r => setTimeout(r, 900));
    setSubmitting(false);
    toast.success("Thank you — we'll be in touch within two working days.");
    setForm({ name: "", email: "", service: "Interior Design", message: "" });
  };

  return (
    <>
      <Toaster position="top-center" richColors />
      <PageHeader
        kicker="Contact"
        title={<>Begin a <em className="text-gold font-light">private</em> consultation.</>}
        subtitle="Tell us a little about your project. A principal architect will personally respond within two working days."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5 space-y-10">
            <div>
              <p className="text-xs tracking-[0.35em] uppercase text-gold mb-5">— Studio</p>
              <h3 className="font-display text-3xl mb-2">Milano · Headquarters</h3>
              <p className="text-muted-foreground">Via della Spiga 18, 20121 Milano, Italy</p>
            </div>
            <div className="space-y-5">
              <a href="mailto:hello@ateliernove.studio" className="flex items-center gap-4 group">
                <span className="h-12 w-12 grid place-items-center rounded-full bg-secondary group-hover:bg-gold transition"><Mail className="h-4 w-4" /></span>
                <span>hello@ateliernove.studio</span>
              </a>
              <a href="tel:+390240001180" className="flex items-center gap-4 group">
                <span className="h-12 w-12 grid place-items-center rounded-full bg-secondary group-hover:bg-gold transition"><Phone className="h-4 w-4" /></span>
                <span>+39 02 4000 1180</span>
              </a>
              <div className="flex items-center gap-4">
                <span className="h-12 w-12 grid place-items-center rounded-full bg-secondary"><MapPin className="h-4 w-4" /></span>
                <span>Studios in Milan · Zurich · Dubai</span>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden h-64 hairline border">
              <iframe
                title="Studio location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=9.18%2C45.46%2C9.21%2C45.48&layer=mapnik"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <form onSubmit={onSubmit} className="bg-card rounded-3xl p-8 lg:p-12 shadow-luxe space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Your name" error={errors.name}>
                  <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="input-luxe" placeholder="Eleonora Bianchi" />
                </Field>
                <Field label="Email" error={errors.email}>
                  <input value={form.email} onChange={e => setForm({...form, email: e.target.value})} type="email" className="input-luxe" placeholder="you@domain.com" />
                </Field>
              </div>
              <Field label="What can we help with?" error={errors.service}>
                <select value={form.service} onChange={e => setForm({...form, service: e.target.value})} className="input-luxe">
                  {["Interior Design","Architecture","Construction","Renovation","Landscape","Smart Homes","Other"].map(s => <option key={s}>{s}</option>)}
                </select>
              </Field>
              <Field label="Tell us about your project" error={errors.message}>
                <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={6} className="input-luxe resize-none" placeholder="Site, scope, timeline, anything that inspires you…" />
              </Field>
              <button disabled={submitting} type="submit" className="group inline-flex items-center gap-3 bg-foreground text-background pl-7 pr-3 h-14 rounded-full text-sm tracking-wide hover:bg-gold hover:text-charcoal transition disabled:opacity-60">
                {submitting ? "Sending…" : "Send enquiry"}
                <span className="h-10 w-10 grid place-items-center rounded-full bg-background text-foreground transition group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <div className="mt-2">{children}</div>
      {error && <span className="text-xs text-destructive mt-1 inline-block">{error}</span>}
    </label>
  );
}