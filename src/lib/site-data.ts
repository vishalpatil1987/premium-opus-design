import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

export const services = [
  { num: "01", title: "Luxury Interior Design", desc: "Bespoke interiors composed from natural materials, custom millwork, and atmospheric light." },
  { num: "02", title: "Residential Architecture", desc: "Private villas and homes designed around how you actually live, move, and entertain." },
  { num: "03", title: "Commercial Architecture", desc: "Workplaces, hospitality and retail that translate your brand into a refined spatial language." },
  { num: "04", title: "Turnkey Construction", desc: "A single, accountable team from groundbreak to handover — schedule, budget and craft." },
  { num: "05", title: "Renovation & Remodeling", desc: "Heritage-aware renovations that elevate proportion, light, and finish to contemporary standards." },
  { num: "06", title: "Landscape Design", desc: "Gardens, courtyards and pools designed as the natural extension of the architecture itself." },
  { num: "07", title: "Smart Home Solutions", desc: "Invisible technology — lighting, climate, audio — choreographed for effortless daily living." },
  { num: "08", title: "3D Visualization & Planning", desc: "Photoreal renders and immersive walkthroughs so you experience the home before it exists." },
];

export const projects = [
  { id: "casa-lume", title: "Casa Lume", category: "Luxury Villa", location: "Lake Como, IT", year: 2024, image: p1, span: "lg:row-span-2" },
  { id: "noir-penthouse", title: "Noir Penthouse", category: "Residential", location: "Milan, IT", year: 2024, image: p2, span: "" },
  { id: "atrium-hq", title: "Atrium HQ", category: "Commercial", location: "Zurich, CH", year: 2023, image: p3, span: "" },
  { id: "hotel-vetro", title: "Hotel Vetro", category: "Hospitality", location: "Florence, IT", year: 2023, image: p4, span: "lg:row-span-2" },
];

export const filters = ["All", "Luxury Villa", "Residential", "Commercial", "Hospitality"] as const;

export const testimonials = [
  { name: "Eleonora Bianchi", role: "Private Client, Casa Lume", quote: "They listened with the patience of a tailor and delivered a home that feels like it was always meant to be ours. Every detail is considered, nothing shouts." },
  { name: "Marco Conti", role: "CEO, Vetro Group", quote: "Atelier Nove translated a complex brief into architecture that is calm, precise, and genuinely useful. Our team's productivity reflects the quality of the space." },
  { name: "Sofia Rinaldi", role: "Hotelier", quote: "From the first sketch to the final lamp, an obsession with proportion. The guest reviews started writing themselves the week we opened." },
];

export const process = [
  { step: "01", title: "Discovery", desc: "We listen — to your life, your site, your aspirations. The brief is co-authored." },
  { step: "02", title: "Concept", desc: "Sketches, moodboards and material studies define the architectural and emotional direction." },
  { step: "03", title: "Design Development", desc: "Plans, sections, 3D walkthroughs, finish samples — every decision documented." },
  { step: "04", title: "Construction", desc: "Our in-house build team executes with one schedule, one budget, and uncompromising craft." },
  { step: "05", title: "Handover", desc: "We furnish, style and commission — you simply unlock the door and move in." },
];

export const faqs = [
  { q: "How are your projects priced?", a: "Each engagement is bespoke. We begin with a fixed-fee discovery, then propose a transparent fee structure that scales with scope, materials, and craft level." },
  { q: "Do you handle international projects?", a: "Yes — we work across Europe and selectively worldwide, partnering with trusted local contractors when required." },
  { q: "What is your typical project timeline?", a: "Interiors range from 4–9 months; full architecture and construction from 12–24 months depending on scale, permits, and finishes." },
  { q: "Can you renovate a property I haven't bought yet?", a: "Absolutely. A pre-purchase consultation is one of the most valuable investments — we assess potential, risks, and realistic budgets before you commit." },
  { q: "Do you offer 3D visualizations?", a: "Every project includes photoreal renders and, where useful, VR walkthroughs so you experience the space long before construction begins." },
];