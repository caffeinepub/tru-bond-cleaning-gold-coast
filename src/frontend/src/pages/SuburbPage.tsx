import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "@tanstack/react-router";
import {
  CheckCircle,
  ChevronRight,
  Home,
  Leaf,
  MapPin,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { type Variants, motion } from "motion/react";
import { SiWhatsapp } from "react-icons/si";
import MetaTags from "../components/MetaTags";
import type { SuburbData } from "../data/suburbs";

interface SuburbPageProps {
  suburb: SuburbData;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const checklist = [
  "Kitchen — benches, cupboards (inside & out), sink, taps, rangehood filter",
  "Oven & Stovetop — oven racks, grill, stovetop burners and drip trays",
  "Bathrooms & Toilets — tiles, shower screen, taps, toilet bowl and cistern",
  "Bedrooms — wardrobes (inside & out), skirting boards, ceiling fans, light fittings",
  "Living Areas — walls (spot clean), skirting boards, air conditioning filters",
  "Windows — inside glass, frames, tracks, fly screens and external sills",
  "Carpets — professional steam clean to remove stains, odours, and allergens",
  "Outdoor & Garage — sweep, mop, cobwebs removed, bins emptied",
];

const pricing = [
  { size: "Studio / 1 Bedroom", range: "$200 – $300" },
  { size: "2 Bedrooms", range: "$300 – $450" },
  { size: "3 Bedrooms", range: "$450 – $600" },
  { size: "4 Bedrooms", range: "$550 – $750+" },
];

const trustPoints = [
  {
    icon: Shield,
    title: "Bond Back Guarantee",
    desc: "If your property manager isn't happy, we come back and re-clean for free. No questions asked.",
  },
  {
    icon: Users,
    title: "Police Checked Team",
    desc: "Every cleaner is fully vetted, police-checked, and covered by comprehensive insurance.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    desc: "We use plant-based, non-toxic cleaners that are safe for children, pets, and the environment.",
  },
];

export default function SuburbPage({ suburb }: SuburbPageProps) {
  const schemaLD = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Tru Bond Cleaning Gold Coast",
    description: `Professional bond cleaning and end-of-lease cleaning in ${suburb.name}, Gold Coast. 100% Bond Back Guarantee. Fully insured and police-checked team.`,
    url: suburb.canonical,
    telephone: "+61488841883",
    address: {
      "@type": "PostalAddress",
      addressLocality: suburb.name,
      addressRegion: "QLD",
      addressCountry: "AU",
    },
    areaServed: suburb.name,
    serviceType: [
      "Bond Cleaning",
      "End of Lease Cleaning",
      "Carpet Steam Cleaning",
      "Oven Cleaning",
      "Window Cleaning",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
    },
  };

  return (
    <>
      <MetaTags
        title={suburb.seoTitle}
        description={suburb.seoDesc}
        keywords={suburb.seoKeywords}
        canonical={suburb.canonical}
        ogTitle={suburb.seoTitle}
        ogDescription={suburb.seoDesc}
        ogType="website"
        ogUrl={suburb.canonical}
        ogImage={`https://trubondcleaningbrisbane.com${suburb.image}`}
        ogSiteName="Tru Bond Cleaning Gold Coast"
        twitterCard="summary_large_image"
        twitterTitle={suburb.seoTitle}
        twitterDescription={suburb.seoDesc}
        twitterImage={`https://trubondcleaningbrisbane.com${suburb.image}`}
        schemaLD={schemaLD}
      />

      {/* BREADCRUMB */}
      <nav
        aria-label="Breadcrumb"
        className="bg-white border-b border-border py-3"
        data-ocid="suburb.section"
      >
        <div className="container mx-auto px-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Link
            to="/"
            className="hover:text-primary transition-colors flex items-center gap-1"
            data-ocid="breadcrumb.home.link"
          >
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-medium">
            Bond Cleaning {suburb.name}
          </span>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden min-h-[480px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${suburb.image}')` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-800/90 via-teal-700/75 to-teal-600/50" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm">
                <MapPin className="w-3.5 h-3.5" />
                Gold Coast, Queensland
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4"
            >
              {suburb.h1}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg text-white/85 leading-relaxed mb-8 max-w-xl"
            >
              Professional end-of-lease cleaning with a{" "}
              <strong className="text-yellow-300">
                100% Bond Back Guarantee
              </strong>
              . Fully insured, police-checked, and eco-friendly team ready to
              help you get your full bond returned.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-3"
              data-ocid="suburb.section"
            >
              <Button
                asChild
                size="lg"
                data-ocid="suburb.primary_button"
                className="bg-white text-primary hover:bg-white/90 font-bold shadow-xl"
              >
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                data-ocid="suburb.secondary_button"
                className="border-white text-white hover:bg-white/15 font-semibold"
              >
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp Tru Bond Cleaning for a bond clean quote in ${suburb.name}`}
                >
                  <SiWhatsapp className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Branded image overlay — desktop */}
        <div className="hidden lg:block absolute right-0 top-0 w-[42%] h-full overflow-hidden">
          <img
            src={suburb.image}
            alt={suburb.imageAlt}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-800/80 to-transparent" />
          {/* Branding badge */}
          <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-2 shadow-lg">
            <img
              src="/assets/generated/logo-transparent.dim_300x80.png"
              alt="Tru Bond Cleaning Gold Coast"
              className="h-7 w-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-white py-5 border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-foreground/70">
            {[
              "✅ 100% Bond Back Guarantee",
              "🛡 Fully Insured",
              "👮 Police Checked",
              "🌿 Eco-Friendly Products",
              "⭐ 5-Star Rated",
              "📅 Available 7 Days",
            ].map((item) => (
              <span key={item} className="whitespace-nowrap">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SUBURB INTRO */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.span
              variants={fadeUp}
              className="text-primary font-semibold text-sm uppercase tracking-wider"
            >
              Bond Cleaning in {suburb.name}
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-5"
            >
              Why {suburb.name} Tenants Choose Tru Bond Cleaning
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-foreground/80 leading-relaxed mb-4 text-base"
            >
              {suburb.introParagraph1}
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-foreground/80 leading-relaxed text-base"
            >
              {suburb.introParagraph2}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US — 3 TRUST POINTS */}
      <section className="py-14 section-alt">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10"
            >
              The Tru Bond Difference in {suburb.name}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {trustPoints.map((point) => (
                <motion.div key={point.title} variants={fadeUp}>
                  <Card className="card-hover h-full border-border text-center">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 mx-auto">
                        <point.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-foreground mb-2">
                        {point.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {point.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT'S INCLUDED — CLEANING CHECKLIST */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.span
              variants={fadeUp}
              className="text-primary font-semibold text-sm uppercase tracking-wider"
            >
              What's Included
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-2"
            >
              Full Bond Cleaning Checklist for {suburb.name}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground mb-8">
              We follow the same checklist that property managers use during
              final inspections. Nothing gets missed.
            </motion.p>
            <motion.ul variants={stagger} className="space-y-3">
              {checklist.map((item, i) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl border border-border"
                  data-ocid={`checklist.item.${i + 1}`}
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground/85 leading-relaxed">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* PRICING TABLE */}
      <section className="py-16 section-alt">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.span
              variants={fadeUp}
              className="text-primary font-semibold text-sm uppercase tracking-wider"
            >
              Pricing Guide
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-2"
            >
              Bond Cleaning Prices in {suburb.name}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground mb-6">
              Transparent pricing with no hidden fees. Get an exact quote for
              your property by calling or messaging us.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Card className="border-border overflow-hidden">
                <Table data-ocid="pricing.table">
                  <TableHeader>
                    <TableRow className="bg-primary/10">
                      <TableHead className="font-bold text-foreground">
                        Property Size
                      </TableHead>
                      <TableHead className="font-bold text-foreground text-right">
                        Estimated Price
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pricing.map((row, i) => (
                      <TableRow
                        key={row.size}
                        data-ocid={`pricing.row.${i + 1}`}
                        className="hover:bg-secondary/50"
                      >
                        <TableCell className="font-medium text-foreground">
                          {row.size}
                        </TableCell>
                        <TableCell className="text-right font-bold text-primary">
                          {row.range}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-xs text-muted-foreground mt-3"
            >
              * Add-ons available: carpet steam cleaning (+$80–$150/room),
              window cleaning (+$50–$150), pressure washing (+$100–$200). All
              prices are estimates — contact us for an exact quote for your{" "}
              {suburb.name} property.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* LOCAL TIP */}
      <section className="py-10 bg-primary/5 border-y border-primary/15">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-primary/20 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-bold text-primary mb-1 uppercase tracking-wide">
                Local Tip for {suburb.name} Renters
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {suburb.localTip}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.span
              variants={fadeUp}
              className="text-primary font-semibold text-sm uppercase tracking-wider"
            >
              From a {suburb.name} Customer
            </motion.span>
            <motion.div
              variants={fadeUp}
              className="mt-6 p-8 bg-secondary/40 rounded-2xl border border-border relative"
            >
              <div className="flex justify-center gap-1 mb-4">
                {["s1", "s2", "s3", "s4", "s5"].map((k) => (
                  <Star
                    key={k}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <blockquote className="text-foreground/80 leading-relaxed italic text-base mb-6">
                "{suburb.testimonialText}"
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {suburb.testimonialName[0]}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground text-sm">
                    {suburb.testimonialName}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {suburb.testimonialSuburb}, Gold Coast
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <CheckCircle className="w-12 h-12 text-white/80 mx-auto mb-4" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-white mb-3"
            >
              Ready to Get Your Bond Back in {suburb.name}?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-white/80 max-w-lg mx-auto mb-8"
            >
              Book online in 60 seconds or WhatsApp us for a free, no-obligation
              quote. We service all areas of {suburb.name} and nearby suburbs.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Button
                asChild
                size="lg"
                data-ocid="suburb.cta.primary_button"
                className="bg-white text-primary hover:bg-white/90 font-bold shadow-xl"
              >
                <Link to="/contact">Book Now — Get a Free Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                data-ocid="suburb.cta.secondary_button"
                className="border-white text-white hover:bg-white/15 font-semibold"
              >
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Chat with Tru Bond Cleaning on WhatsApp about bond cleaning in ${suburb.name}`}
                >
                  <SiWhatsapp className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* AREA SERVED NEARBY SUBURBS */}
      <section className="py-12 bg-white border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground mb-3">
            Also serving nearby areas:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Surfers Paradise",
              "Broadbeach",
              "Southport",
              "Robina",
              "Burleigh Heads",
              "Palm Beach",
              "Varsity Lakes",
              "Hope Island",
              "Coomera",
              "Nerang",
            ]
              .filter((s) => s !== suburb.name)
              .slice(0, 6)
              .map((s) => (
                <span
                  key={s}
                  className="text-xs bg-secondary text-foreground/70 px-3 py-1 rounded-full border border-border"
                >
                  {s}
                </span>
              ))}
            <Link
              to="/"
              className="text-xs text-primary font-medium hover:underline px-3 py-1 rounded-full border border-primary/30 hover:bg-secondary transition-colors"
              data-ocid="suburb.areas.link"
            >
              See all areas →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
