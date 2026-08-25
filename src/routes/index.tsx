import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Layers,
  Target,
  Sparkles,
  ShieldCheck,
  Boxes,
  Thermometer,
  Ruler,
  CircleDot,
  Waves,
  Grid3x3,
  Zap,
  CheckCircle2,
  Beaker,
  FlaskConical,
  Microscope,
  Hand,
  MapPin,
  ClipboardList,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

import evologicsLogo from "@/assets/evologics-logo-wide.png.asset.json";
import amatrxMark from "@/assets/amatrx-mark.png.asset.json";
import bgTexture from "@/assets/bg-texture.png.asset.json";
import boxFront from "@/assets/box-front.png.asset.json";
import jar01 from "@/assets/jar-01.png.asset.json";
import jar02 from "@/assets/jar-02.png.asset.json";
import jar03 from "@/assets/jar-03.png.asset.json";
import jarFlakes01 from "@/assets/jar-flakes-01.png.asset.json";
import jarFlakes02 from "@/assets/jar-flakes-02.png.asset.json";
import flakes02 from "@/assets/flakes-02.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: jarFlakes01.url },
      { name: "twitter:image", content: jarFlakes01.url },
    ],
    links: [{ rel: "canonical", href: "https://a-matrx.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://a-matrx.com/",
          name: "A-MATRX Micrograft — Human Placental Tissue Matrix | Evologics",
          description:
            "Human placental tissue matrix in a conformable micrograft format for targeted structural tissue coverage in surgical and wound management settings.",
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: `https://a-matrx.com${jarFlakes01.url}`,
          },
          publisher: {
            "@type": "Organization",
            name: "Evologics",
            url: "https://www.evologicsamerica.com/",
          },
        }),
      },
    ],
  }),
  component: LandingPage,
});

const NAV = [
  { href: "#overview", label: "Overview" },
  { href: "#why-micrograft", label: "Why Micrograft" },
  { href: "#attributes", label: "Product Attributes" },
  { href: "#sizes", label: "Sizes" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const SPECIALTIES = [
  "Wound Care",
  "Podiatry",
  "General Surgery",
  "Plastic & Reconstructive Surgery",
  "Orthopedic Surgery",
  "Spine Surgery",
  "Neurosurgery",
  "Vascular Surgery",
  "Cardiothoracic Surgery",
  "Colorectal Surgery",
  "Trauma Surgery",
  "Burn Care",
  "Dermatology",
  "Obstetrics & Gynecology",
  "Urology",
  "ENT / Otolaryngology",
  "Oral & Maxillofacial Surgery",
  "Pain Management",
  "Sports Medicine",
  "Family Medicine",
  "Internal Medicine",
  "Emergency Medicine",
  "Long-Term Care",
  "Other",
];

const CONTACT_EMAIL = "theresa@evologicsamerica.com";

function LandingPage() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-center" richColors />
      <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
      <main>
        <Hero />
        <TrustStrip />
        <Differentiation />
        <WhatIs />
        <WhyMicrograft />
        <EvoPatchPlatform />
        <CategoryEducation />
        <ClinicalUtility />
        <Attributes />
        <Sizes />
        <Handling />
        <StorageWorkflow />
        <FAQ />
        <Compliance />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav({ navOpen, setNavOpen }: { navOpen: boolean; setNavOpen: (v: boolean) => void }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2">
          <img src={evologicsLogo.url} alt="Evologics" className="h-8 w-auto sm:h-9" />
          <span className="sr-only">Evologics</span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button
            asChild
            size="sm"
            className="rounded-full bg-primary px-5 text-primary-foreground hover:opacity-90"
          >
            <a href="#contact">Request Information</a>
          </Button>
        </div>
        <button
          className="rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle menu"
        >
          {navOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {navOpen && (
        <div className="border-t border-hairline bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setNavOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-foreground hover:bg-primary-soft"
              >
                {item.label}
              </a>
            ))}
            <Button asChild size="sm" className="mt-2 rounded-full">
              <a href="#contact" onClick={() => setNavOpen(false)}>
                Request Information
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 sm:pt-28">
      <div className="pointer-events-none absolute inset-0 matrix-grid opacity-60" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-multiply"
        style={{
          backgroundImage: `url(${bgTexture.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="pointer-events-none absolute -top-40 right-[-20%] h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.36 0.075 148 / 0.10), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full"
        style={{
          background: "radial-gradient(closest-side, oklch(0.66 0.09 65 / 0.10), transparent 70%)",
        }}
      />

      <div
        id="overview"
        className="relative mx-auto max-w-7xl px-5 pb-20 pt-12 sm:px-8 sm:pt-16 lg:pb-28"
      >
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 fade-in-up">
            <img src={amatrxMark.url} alt="A-MATRX mark" className="mb-5 h-14 w-auto sm:h-16" />
            <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-card px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-xs font-semibold tracking-wider text-primary uppercase">
                Evologics · Human Placental Tissue Matrix
              </span>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              A-MATRX Micrograft
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Human Placental Tissue Matrix in a Conformable Micrograft Format
            </p>
            <div className="mt-8 max-w-2xl space-y-4 text-[15px] leading-relaxed text-foreground/80 sm:text-base">
              <p>
                A-MATRX Micrograft is a dehydrated human placental tissue matrix designed for
                targeted placement, implantation, adaptable handling, and site-specific tissue coverage in
                surgical and wound management settings.
              </p>
              <p>
                Supplied in a dry micrograft configuration, A-MATRX gives clinicians a familiar
                particulate-style workflow while preserving the clinical purpose of a human tissue
                matrix: to provide structural tissue coverage where the clinician determines
                additional coverage is appropriate.
              </p>
            </div>
            <p className="mt-6 max-w-2xl border-l-2 border-primary pl-4 text-[15px] italic text-foreground/70">
              Same trusted tissue platform. More precise placement. A new matrix identity.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-primary px-6 text-primary-foreground hover:opacity-90"
              >
                <a href="#contact">
                  Request Product Information
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary/30 px-6 text-primary hover:bg-primary-soft"
              >
                <a href="#contact">Speak With Evologics</a>
              </Button>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-hairline bg-gradient-to-b from-primary-soft/60 to-background shadow-[0_30px_80px_-30px_oklch(0.36_0.075_148_/_0.35)]">
              <img
                src={jarFlakes01.url}
                alt="A-MATRX Micrograft jar with dehydrated human placental tissue matrix"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-hairline bg-card/90 p-4 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
                    <Layers className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Micrograft Format
                    </div>
                    <div className="truncate text-sm text-foreground/80">
                      Dehydrated · Ready to use · Ambient storage
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRUST STRIP ---------------- */
function TrustStrip() {
  const items = [
    { icon: Layers, label: "Human Placental Tissue Matrix" },
    { icon: Target, label: "Targeted Placement" },
    { icon: Thermometer, label: "Ambient Storage" },
    { icon: ShieldCheck, label: "361 HCT/P · Homologous Use" },
  ];
  return (
    <section className="border-y border-hairline bg-canvas">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-5 px-5 py-6 sm:grid-cols-4 sm:px-8">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex min-w-0 items-center gap-3">
            <Icon className="h-4 w-4 shrink-0 text-primary" />
            <span className="truncate text-xs font-medium uppercase tracking-wider text-muted-foreground sm:text-[13px]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- SECTION HEADER ---------------- */
function SectionHeader({
  eyebrow,
  title,
  intro,
  centered = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          {intro}
        </p>
      )}
    </div>
  );
}

/* ---------------- CATEGORY EDUCATION ---------------- */
function CategoryEducation() {
  const cards = [
    {
      icon: Zap,
      title: "Hemostatic powders",
      body: "Designed for bleeding control.",
      tone: "muted",
    },
    {
      icon: Waves,
      title: "Collagen powders",
      body: "Commonly used as collagen-based wound dressings.",
      tone: "muted",
    },
    {
      icon: Grid3x3,
      title: "Animal-derived ECM particulates",
      body: "Often selected for complex wound-bed contact.",
      tone: "muted",
    },
    {
      icon: Sparkles,
      title: "A-MATRX Micrograft",
      body: "Human placental tissue matrix for targeted structural tissue coverage.",
      tone: "brand",
    },
  ];
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Category Context"
          title="Surgical Teams Already Understand Particulate Formats"
          intro="Across the operating room and wound care environment, clinicians are familiar with powder, particulate, and matrix-based products. Some are used as adjunctive hemostats. Some are collagen-based wound products. Others are extracellular matrix particulates designed to improve contact with complex or irregular wound beds."
        />
        <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-foreground/80 sm:text-base">
          A-MATRX enters this familiar handling universe with a distinct identity: a human placental
          tissue matrix supplied in a micrograft format for targeted coverage.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, body, tone }) => (
            <Card
              key={title}
              className={
                tone === "brand"
                  ? "relative overflow-hidden border-primary/30 bg-primary text-primary-foreground p-6 shadow-[0_20px_60px_-20px_oklch(0.36_0.075_148_/_0.5)]"
                  : "border-hairline bg-card p-6 transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
              }
            >
              <div
                className={
                  tone === "brand"
                    ? "grid h-10 w-10 place-items-center rounded-lg bg-primary-foreground/15"
                    : "grid h-10 w-10 place-items-center rounded-lg bg-primary-soft text-primary"
                }
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3
                className={
                  tone === "brand"
                    ? "mt-5 text-lg font-semibold"
                    : "mt-5 text-lg font-semibold text-foreground"
                }
              >
                {title}
              </h3>
              <p
                className={
                  tone === "brand"
                    ? "mt-2 text-sm leading-relaxed text-primary-foreground/85"
                    : "mt-2 text-sm leading-relaxed text-muted-foreground"
                }
              >
                {body}
              </p>
            </Card>
          ))}
        </div>

        <p className="mt-8 max-w-3xl rounded-xl border border-accent/30 bg-accent-soft/60 px-5 py-4 text-sm text-foreground/80">
          <span className="font-semibold text-foreground">Note:</span> A-MATRX is not intended for
          use as a hemostatic agent.
        </p>
      </div>
    </section>
  );
}

/* ---------------- WHAT IS ---------------- */
function WhatIs() {
  return (
    <section className="relative border-y border-hairline bg-canvas py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeader
            eyebrow="What is A-MATRX"
            title="Placental Tissue Matrix, Refined for Targeted Placement"
          />
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-foreground/80 sm:text-base">
            <p>
              A-MATRX Micrograft is produced from dehydrated human placental tissue and supplied in
              a dry, particulate micrograft format. It is designed to support targeted,
              clinician-directed placement and implantation across complex, irregular, or
              anatomically nuanced sites where flat sheet placement may not be ideal.
            </p>
            <p>
              The micrograft configuration allows clinicians to distribute, layer, and contour the
              tissue matrix according to the needs of the site and the procedural plan.
            </p>
          </div>
          <blockquote className="mt-8 rounded-2xl border border-primary/20 bg-primary-soft/60 p-6">
            <p className="text-lg font-medium leading-snug text-foreground sm:text-xl">
              “Where a sheet provides broad coverage,{" "}
              <span className="text-primary">A-MATRX provides targeted matrix placement.</span>”
            </p>
          </blockquote>
        </div>
        <div className="relative lg:col-span-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 overflow-hidden rounded-2xl border border-hairline bg-card">
              <img
                src={jar02.url}
                alt="A-MATRX Micrograft open jar"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-hairline bg-card">
              <img
                src={boxFront.url}
                alt="A-MATRX Micrograft product box"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-hairline bg-card">
              <img
                src={flakes02.url}
                alt="A-MATRX micrograft flakes translucent"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY MICROGRAFT ---------------- */
function WhyMicrograft() {
  const items = [
    { icon: Waves, label: "Complex contours" },
    { icon: Grid3x3, label: "Irregular tissue planes" },
    { icon: CircleDot, label: "Small or focused areas of coverage" },
    { icon: Ruler, label: "Sites where sheet trimming may be inefficient" },
    { icon: Target, label: "Procedures requiring targeted tissue matrix placement" },
    { icon: Zap, label: "Clinical workflows that benefit from ready-to-use handling" },
  ];
  return (
    <section id="why-micrograft" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Why Micrograft"
          title="Because Surgical Sites Are Rarely Flat"
          intro="Anatomy does not always present as a clean rectangle. Surgical and wound sites can be curved, uneven, deep, narrow, irregular, or difficult to cover with a traditional sheet configuration."
        />
        <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-foreground/80 sm:text-base">
          A-MATRX Micrograft was developed for these moments. Its dry micrograft format supports
          controlled placement into areas where contour, contact, and coverage are important.
          Clinicians can apply the matrix in a way that works with the site instead of forcing the
          site to work around the product.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group flex min-w-0 items-start gap-4 rounded-2xl border border-hairline bg-card p-6 transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 pt-1">
                <p className="text-[15px] font-medium leading-snug text-foreground">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- EVOPATCH PLATFORM ---------------- */
function EvoPatchPlatform() {
  return (
    <section className="relative border-y border-hairline bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Platform Continuity"
          title="Built From the EvoPatch Platform"
          intro="Same tissue platform. New geometry."
          centered
        />
        <div className="mx-auto mt-6 max-w-3xl space-y-4 text-center text-[15px] leading-relaxed text-foreground/80 sm:text-base">
          <p>
            A-MATRX Micrograft is built from the same tissue platform as EvoPatch, now presented in
            a micrograft configuration for more targeted placement.
          </p>
          <p>
            The result is a product that maintains the identity of a human placental tissue matrix
            while giving clinicians a more flexible format for complex sites.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Card className="group relative overflow-hidden border-hairline bg-card p-8">
            <div className="eyebrow">EvoPatch</div>
            <h3 className="mt-3 text-2xl font-semibold text-foreground">Sheet Format</h3>
            <p className="mt-3 text-sm text-muted-foreground">Broad tissue coverage.</p>
            <div className="mt-8 flex h-40 items-center justify-center rounded-xl border border-dashed border-hairline bg-background">
              <div className="h-24 w-40 rounded-md border-2 border-primary/40 bg-primary-soft/60" />
            </div>
            <ul className="mt-6 space-y-2 text-sm text-foreground/80">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" /> Broad coverage areas
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" /> Uniform sheet geometry
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" /> Familiar sheet handling
              </li>
            </ul>
          </Card>

          <Card className="relative overflow-hidden border-primary/30 bg-primary text-primary-foreground p-8 shadow-[0_30px_80px_-30px_oklch(0.36_0.075_148_/_0.45)]">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/80">
              A-MATRX
            </div>
            <h3 className="mt-3 text-2xl font-semibold">Micrograft Format</h3>
            <p className="mt-3 text-sm text-primary-foreground/85">
              Targeted, conformable placement.
            </p>
            <div className="mt-8 flex h-40 items-center justify-center rounded-xl border border-dashed border-primary-foreground/25 bg-primary-foreground/5">
              <div className="relative h-24 w-44 opacity-90">
                {[
                  [18, 20],
                  [28, 16],
                  [42, 14],
                  [58, 18],
                  [74, 22],
                  [90, 28],
                  [104, 36],
                  [116, 48],
                  [12, 34],
                  [24, 30],
                  [38, 26],
                  [54, 28],
                  [70, 32],
                  [86, 38],
                  [100, 46],
                  [112, 58],
                  [14, 48],
                  [28, 44],
                  [44, 40],
                  [60, 42],
                  [76, 46],
                  [92, 52],
                  [106, 62],
                  [118, 72],
                  [22, 64],
                  [36, 58],
                  [52, 54],
                  [68, 56],
                  [84, 62],
                  [98, 70],
                  [110, 80],
                  [104, 88],
                ].map(([left, top], i) => (
                  <span
                    key={i}
                    className="absolute h-2 w-2 rounded-sm bg-primary-foreground/70"
                    style={{
                      left: `${left}px`,
                      top: `${top}px`,
                      transform: `rotate(${(i * 37) % 90}deg)`,
                    }}
                  />
                ))}
              </div>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-primary-foreground/90">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4" /> Complex or irregular anatomy
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4" /> Distribute, layer, contour
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4" /> Targeted matrix placement
              </li>
            </ul>
          </Card>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm italic text-muted-foreground">
          When broad coverage is needed, a sheet format may be appropriate. When targeted placement
          and contouring are the priority, A-MATRX gives clinicians another option.
        </p>
      </div>
    </section>
  );
}

/* ---------------- DIFFERENTIATION ---------------- */
function Differentiation() {
  const features = [
    "Familiarity of particulate-style application",
    "Clinical utility of conformable placement",
    "Structural value of human placental tissue matrix",
    "Workflow advantages of a dry, ready-to-use format",
  ];
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.28] mix-blend-multiply"
        style={{
          backgroundImage: `url(${bgTexture.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="sticky top-24">
            <SectionHeader
              eyebrow="Differentiation"
              title="Not Just a Powder. A Placental Tissue Matrix."
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-foreground/80 sm:text-base">
              <p>
                Many particulate products used in surgical and wound care environments are based on
                collagen, animal-derived extracellular matrix, synthetic materials, or hemostatic
                agents. These products have helped establish clinician familiarity with powder and
                particulate workflows.
              </p>
              <p className="font-semibold text-foreground">A-MATRX is different.</p>
              <p>
                A-MATRX is derived from human placental tissue and supplied as a dehydrated tissue
                matrix micrograft. Its purpose is not to control bleeding or act as a collagen-only
                dressing. Its purpose is to provide targeted human tissue matrix coverage,
                consistent with the Instructions for Use and clinician judgment.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-3xl border border-hairline bg-card shadow-[var(--shadow-card)]">
            <img
              src={jar03.url}
              alt="A-MATRX Micrograft jar"
              className="h-96 w-full object-contain p-4 sm:h-[28rem]"
            />
          </div>
          <ul className="mt-6 divide-y divide-hairline overflow-hidden rounded-2xl border border-hairline bg-card">
            {features.map((f, i) => (
              <li key={f} className="flex items-start gap-4 p-5">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-primary/20 bg-primary-soft text-xs font-semibold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="min-w-0 pt-1 text-[15px] font-medium text-foreground">{f}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CLINICAL UTILITY ---------------- */
function ClinicalUtility() {
  const settings = [
    "Surgical wound management",
    "General wound management",
    "Obstetric and gynecologic procedures",
    "Plastic and reconstructive surgery",
    "Podiatric surgical and wound care settings",
    "Other procedures where tissue matrix coverage may be appropriate according to the Instructions for Use",
  ];
  return (
    <section className="relative border-y border-hairline bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Clinical Utility"
          title="A Format Designed Around the Site"
          intro="A-MATRX Micrograft may be considered when the clinician determines that additional tissue matrix coverage is appropriate and when the site may benefit from a conformable, targeted format."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {settings.map((s) => (
            <div
              key={s}
              className="flex min-w-0 items-start gap-3 rounded-2xl border border-hairline bg-card p-5"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="min-w-0 text-[15px] leading-snug text-foreground">{s}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm italic text-muted-foreground">
          Use of A-MATRX should always be based on clinician judgment, patient presentation,
          procedural goals, and the product Instructions for Use.
        </p>
      </div>
    </section>
  );
}

/* ---------------- ATTRIBUTES ---------------- */
function Attributes() {
  const items = [
    {
      icon: Microscope,
      title: "Human placental tissue matrix",
      body: "Derived from donated human placental tissue and processed into a dehydrated matrix format.",
    },
    {
      icon: Sparkles,
      title: "Micrograft configuration",
      body: "Designed for targeted placement and implantation, with distribution, layering, and contouring according to the site.",
    },
    {
      icon: FlaskConical,
      title: "Dry application",
      body: "Supplied in a dry format to support efficient surgical and wound management workflows.",
    },
    {
      icon: Hand,
      title: "Conformable handling",
      body: "Can be applied across complex or irregular sites where sheet placement may be less practical.",
    },
    {
      icon: Zap,
      title: "Ready to use",
      body: "Designed for straightforward clinical handling according to the Instructions for Use.",
    },
    {
      icon: Thermometer,
      title: "Ambient storage",
      body: "No refrigeration required.",
    },
    {
      icon: Boxes,
      title: "Multiple configurations",
      body: "Available in multiple sizes to support different site requirements and procedural preferences.",
    },
  ];
  return (
    <section id="attributes" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Product Attributes"
          title="Precision Matrix Coverage, Ready When Needed"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, body }, idx) => (
            <Card
              key={title}
              className={
                idx === 0
                  ? "border-primary/30 bg-primary-soft/40 p-7"
                  : "border-hairline bg-card p-7 transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
              }
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SIZES ---------------- */
function Sizes() {
  const sizes = ["40 mg", "80 mg", "160 mg", "250 mg"];
  return (
    <section id="sizes" className="relative border-y border-hairline bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionHeader eyebrow="Product Sizes" title="Available Configurations" />
          </div>
          <div className="lg:col-span-4">
            <div className="overflow-hidden rounded-2xl border border-hairline bg-card">
              <img
                src={boxFront.url}
                alt="A-MATRX Micrograft box packaging"
                className="h-40 w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sizes.map((size) => (
            <Card
              key={size}
              className="group flex flex-col items-start justify-between border-hairline bg-card p-7 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="flex w-full items-center justify-between">
                <span className="eyebrow">Size</span>
                <div className="h-2 w-2 rounded-full bg-primary/40 transition group-hover:bg-primary" />
              </div>
              <div className="mt-6 text-5xl font-extrabold tracking-tight text-primary">{size}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- HANDLING ---------------- */
function Handling() {
  const steps = [
    {
      icon: ClipboardList,
      title: "Prepare",
      body: "Open and prepare the product according to sterile technique and the Instructions for Use.",
    },
    {
      icon: MapPin,
      title: "Place",
      body: "Apply the micrograft matrix for implantation at the intended wound or surgical site, as determined by the clinician.",
    },
    {
      icon: Hand,
      title: "Contour",
      body: "Distribute, layer, or contour the micrograft based on the surgical site, wound geometry, and clinician technique.",
    },
    {
      icon: ArrowRight,
      title: "Proceed",
      body: "Continue with the planned surgical or wound management protocol.",
    },
  ];
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Handling Overview" title="Simple. Targeted. Controlled." />

        <div className="relative mt-14">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, body }, i) => (
              <div key={title} className="relative">
                <div className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-primary/30 bg-background text-primary shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Step {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- STORAGE / WORKFLOW ---------------- */
function StorageWorkflow() {
  const bullets = [
    "No refrigeration required",
    "Ambient temperature storage",
    "Three-year shelf life",
    "Compact packaging",
    "Ready-to-use format",
    "Multiple size options",
    "Efficient product selection for different site needs",
  ];
  return (
    <section className="relative border-y border-hairline bg-canvas py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeader
            eyebrow="Storage & Workflow"
            title="Designed for Real Clinical Logistics"
            intro="A-MATRX Micrograft supports practical inventory and procedural readiness."
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex min-w-0 items-start gap-3 rounded-xl border border-hairline bg-card px-4 py-3"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="min-w-0 text-sm font-medium text-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-hairline bg-card">
              <img
                src={boxFront.url}
                alt="A-MATRX packaging front"
                className="h-64 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-hairline bg-card">
              <img src={jar01.url} alt="A-MATRX jar" className="h-64 w-full object-cover" />
            </div>
            <div className="col-span-2 overflow-hidden rounded-2xl border border-hairline bg-card">
              <img
                src={jarFlakes02.url}
                alt="A-MATRX jar and flakes on surface"
                className="h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const items = [
    {
      q: "What is A-MATRX Micrograft?",
      a: "A-MATRX Micrograft is a dehydrated human placental tissue matrix supplied in a conformable micrograft format for targeted tissue coverage in surgical and wound management settings.",
    },
    {
      q: "Is A-MATRX a hemostat?",
      a: "No. A-MATRX is not intended for use as a hemostatic agent and should not be used as a substitute for conventional methods of hemostasis.",
    },
    {
      q: "How is A-MATRX different from collagen powder?",
      a: "Collagen powders are commonly collagen-based wound products. A-MATRX is a human placental tissue matrix micrograft designed for targeted structural tissue coverage.",
    },
    {
      q: "When might clinicians consider A-MATRX?",
      a: "Clinicians may consider A-MATRX when a case calls for targeted tissue matrix coverage, conformable placement across irregular anatomy, or a dry human placental tissue matrix format.",
    },
    {
      q: "What sizes are available?",
      a: "A-MATRX Micrograft is available in 40 mg, 80 mg, 160 mg, and 250 mg configurations.",
    },
    {
      q: "Does A-MATRX require refrigeration?",
      a: "No. A-MATRX does not require refrigeration and may be stored at ambient temperature.",
    },
    {
      q: "How should A-MATRX be used?",
      a: "Use should be consistent with the product Instructions for Use, applicable labeling, clinician judgment, and institutional protocol.",
    },
  ];
  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" centered />
        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {items.map((it, i) => (
            <AccordionItem
              key={it.q}
              value={`item-${i}`}
              className="rounded-2xl border border-hairline bg-card px-5 data-[state=open]:border-primary/30 data-[state=open]:bg-primary-soft/30"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline sm:text-lg">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[15px] leading-relaxed text-foreground/75">
                {it.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------------- COMPLIANCE ---------------- */
function Compliance() {
  return (
    <section className="relative border-y border-hairline bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeader eyebrow="Regulatory Information" title="Regulatory and Use Information" />
        <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-foreground/80 sm:text-base">
          <p>
            A-MATRX Micrograft is a human cells, tissues, and cellular and tissue-based product, or
            HCT/P, regulated under Section 361 of the Public Health Service Act and 21 CFR Part
            1271.
          </p>
          <p>
            Use is limited to homologous use and should be consistent with the product Instructions
            for Use, applicable labeling, clinician judgment, and institutional protocol.
          </p>
          <p>
            A-MATRX Micrograft is not intended for use as a hemostatic agent and should not be used
            as a substitute for meticulous surgical technique or conventional methods of hemostasis.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-primary p-10 text-primary-foreground shadow-[0_40px_100px_-30px_oklch(0.36_0.075_148_/_0.5)] sm:p-16">
          <div className="pointer-events-none absolute inset-0 matrix-grid opacity-[0.12]" />
          <div className="relative max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/80">
              Get in touch
            </div>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
              Bring Placental Matrix Coverage Into Focus
            </h2>
            <p className="mt-5 max-w-2xl text-primary-foreground/85 sm:text-lg">
              A-MATRX Micrograft gives clinicians a human placental tissue matrix option in a dry,
              conformable micrograft format.
            </p>
            <p className="mt-3 max-w-2xl text-primary-foreground/75">
              For complex sites, irregular anatomy, and targeted coverage needs, A-MATRX offers a
              refined alternative to sheet-only placement.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <a href="#contact">Request Product Sheet</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href="#contact">Contact Evologics</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href="#contact">Schedule a Product Overview</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [contactMe, setContactMe] = useState(true);

  const buildMailtoHref = (data: FormData) => {
    const value = (field: string) => String(data.get(field) ?? "").trim();
    const subjectName = value("name") || "Website visitor";
    const lines = [
      "A-MATRX product information request",
      "",
      `Name: ${value("name")}`,
      `Email: ${value("email")}`,
      `Phone: ${value("phone") || "Not provided"}`,
      `Facility: ${value("facility") || "Not provided"}`,
      `Specialty: ${value("specialty") || "Not provided"}`,
      `Would like representative contact: ${contactMe ? "Yes" : "No"}`,
      "",
      "Message:",
      value("message"),
    ];

    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `A-MATRX product information request from ${subjectName}`,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || name.length > 120) {
      toast.error("Please enter your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!message || message.length > 2000) {
      toast.error("Please add a short message.");
      return;
    }
    setSubmitting(true);
    try {
      data.set("contact_me", contactMe ? "yes" : "no");
      const mailtoHref = buildMailtoHref(data);
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });

      if (!response.ok) {
        throw new Error(`Netlify form submission failed with status ${response.status}`);
      }

      window.location.href = mailtoHref;
      toast.success("Thanks — opening an email draft to Evologics.");
      form.reset();
      setContactMe(true);
    } catch (error) {
      console.error(error);
      toast.error("We could not submit the request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative border-t border-hairline bg-canvas py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Contact"
            title="Request Product Information"
            intro="Complete the form and an Evologics representative will follow up with product materials, sizing details, and next steps."
          />
          <div className="mt-8 space-y-4 rounded-2xl border border-hairline bg-card p-6">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div className="min-w-0">
                <div className="text-sm font-semibold text-foreground">
                  361 HCT/P · Homologous Use
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Regulated under Section 361 of the Public Health Service Act and 21 CFR Part 1271.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Beaker className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div className="min-w-0">
                <div className="text-sm font-semibold text-foreground">
                  EvoPatch Tissue Platform
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Same trusted platform. New micrograft geometry.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            name="a-matrx-contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="grid gap-5 rounded-2xl border border-hairline bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
          >
            <input type="hidden" name="form-name" value="a-matrx-contact" />
            <p className="hidden">
              <label>
                Do not fill this out:
                <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" required maxLength={120} />
              <Field label="Email" name="email" type="email" required maxLength={254} />
              <Field label="Phone" name="phone" type="tel" maxLength={40} />
              <Field label="Facility" name="facility" maxLength={160} />
              <div className="sm:col-span-2">
                <SpecialtyField />
              </div>
            </div>
            <div>
              <Label htmlFor="message" className="text-sm font-medium text-foreground">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                maxLength={2000}
                rows={5}
                placeholder="Tell us about your practice, procedures, or product interest."
                className="mt-2 rounded-xl border-hairline bg-background focus-visible:ring-primary"
              />
            </div>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-hairline bg-background p-4">
              <Checkbox
                id="contactMe"
                checked={contactMe}
                onCheckedChange={(v) => setContactMe(Boolean(v))}
                className="mt-0.5"
              />
              <span className="text-sm text-foreground/85">
                I would like an Evologics representative to contact me.
              </span>
            </label>
            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              className="w-full rounded-full bg-primary text-primary-foreground hover:opacity-90 sm:w-auto"
            >
              {submitting ? "Sending…" : "Submit Request"}
              {!submitting && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
            <p className="text-xs text-muted-foreground">
              By submitting, you consent to Evologics contacting you about A-MATRX Micrograft. Your
              information is used to respond to your inquiry. Please do not include patient health
              information.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function SpecialtyField() {
  return (
    <div>
      <Label htmlFor="specialty" className="text-sm font-medium text-foreground">
        Specialty
      </Label>
      <div className="relative mt-2">
        <select
          id="specialty"
          name="specialty"
          className="h-10 w-full appearance-none rounded-xl border border-hairline bg-background px-3 pr-10 text-sm text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-primary/20"
          defaultValue=""
        >
          <option value="">Select a specialty</option>
          {SPECIALTIES.map((specialty) => (
            <option key={specialty} value={specialty}>
              {specialty}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  maxLength,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <div>
      <Label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="ml-0.5 text-accent">*</span>}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={maxLength}
        className="mt-2 rounded-xl border-hairline bg-background focus-visible:ring-primary"
      />
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-hairline bg-background">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img src={evologicsLogo.url} alt="Evologics" className="h-20 w-auto" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              A-MATRX Micrograft is a dehydrated human placental tissue matrix in a conformable
              micrograft format, built on the EvoPatch tissue platform for targeted structural
              tissue coverage.
            </p>
          </div>
          <div className="lg:col-span-4">
            <div className="eyebrow">Explore</div>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-foreground/80 hover:text-primary">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <div className="eyebrow">Company</div>
            <div className="mt-4 text-sm text-foreground/80">Evologics</div>
            <p className="mt-2 text-xs text-muted-foreground">Human placental tissue platform.</p>
          </div>
        </div>

        <div className="mt-10 border-t border-hairline pt-6">
          <p className="text-xs leading-relaxed text-muted-foreground">
            A-MATRX Micrograft is a human cells, tissues, and cellular and tissue-based product
            (HCT/P), regulated under Section 361 of the Public Health Service Act and 21 CFR Part
            1271. Use is limited to homologous use and should be consistent with the product
            Instructions for Use, applicable labeling, clinician judgment, and institutional
            protocol. A-MATRX is not intended for use as a hemostatic agent.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Evologics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
