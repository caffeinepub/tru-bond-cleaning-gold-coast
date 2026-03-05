import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  CheckCircle,
  ChevronRight,
  Clock,
  ExternalLink,
  Leaf,
  MapPin,
  RotateCcw,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { type Variants, motion } from "motion/react";
import { SiWhatsapp } from "react-icons/si";
import MetaTags from "../components/MetaTags";
import { suburbs } from "../data/suburbs";

const SCHEMA_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tru Bond Cleaning Gold Coast",
  description:
    "Professional bond cleaning, end-of-lease cleaning, carpet steam cleaning, oven cleaning, window cleaning and pressure washing in Gold Coast. 100% Bond Back Guarantee.",
  url: "https://trubondcleaningbrisbane.com",
  telephone: "+61488841883",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gold Coast",
    addressRegion: "QLD",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -28.0167,
    longitude: 153.4,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "07:00",
      closes: "20:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
  },
  priceRange: "$$",
  areaServed: "Gold Coast",
  serviceType: [
    "Bond Cleaning",
    "End of Lease Cleaning",
    "Carpet Steam Cleaning",
    "Oven Cleaning",
    "Window Cleaning",
    "Pressure Washing",
    "Move-In Cleaning",
  ],
};

const features = [
  {
    icon: Shield,
    title: "100% Bond Back Guarantee",
    desc: "If the property manager finds anything wrong, we come back and re-clean for free.",
  },
  {
    icon: Users,
    title: "Fully Insured & Police Checked",
    desc: "Every cleaner on our team is vetted, trained, and covered by full insurance.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    desc: "We use plant-based, non-toxic cleaners that are safe for kids, pets, and the planet.",
  },
  {
    icon: Star,
    title: "5-Star Rated on Google",
    desc: "Over 127 Gold Coast tenants have given us a 5-star review. We never cut corners.",
  },
  {
    icon: Clock,
    title: "Available 7 Days a Week",
    desc: "Even on weekends and public holidays — because your move-out date won't wait.",
  },
  {
    icon: RotateCcw,
    title: "Free Re-Clean if Needed",
    desc: "Not happy? We'll return within 72 hours and fix anything your property manager flags.",
  },
];

const services = [
  {
    title: "Bond Cleaning",
    img: "/assets/generated/bond-cleaning-service.dim_800x500.jpg",
    alt: "Professional bond cleaning service in Gold Coast rental property bathroom",
    desc: "Full end-of-lease clean covering every room, inside and out. We follow the exact checklist your property manager uses.",
    to: "/services#bond-cleaning",
  },
  {
    title: "Carpet Steam Cleaning",
    img: "/assets/generated/carpet-cleaning-service.dim_800x500.jpg",
    alt: "Professional carpet steam cleaning service in Gold Coast rental home",
    desc: "Hot water extraction removes deep-set dirt, allergens, stains, and odours from all carpet types.",
    to: "/services#carpet-cleaning",
  },
  {
    title: "Oven & Kitchen Deep Clean",
    img: "/assets/generated/oven-cleaning-service.dim_800x500.jpg",
    alt: "Oven and kitchen deep cleaning service for bond return in Gold Coast",
    desc: "Ovens, stovetops, rangehoods, benches, and cupboards — spotlessly clean inside and out.",
    to: "/services#oven-cleaning",
  },
  {
    title: "Window Cleaning",
    img: "/assets/generated/window-cleaning-service.dim_800x500.jpg",
    alt: "Professional window cleaning service Gold Coast — streak-free inside and out",
    desc: "Streak-free glass, clean tracks, frames, and fly screens. Perfect for final inspection.",
    to: "/services#window-cleaning",
  },
  {
    title: "Pressure Washing",
    img: "/assets/generated/pressure-washing-service.dim_800x500.jpg",
    alt: "Commercial pressure washing for driveways, patios and balconies in Gold Coast",
    desc: "Driveways, patios, balconies, and paths blasted clean with commercial-grade equipment.",
    to: "/services#pressure-washing",
  },
  {
    title: "Move-In Cleaning",
    img: "/assets/generated/movein-cleaning-service.dim_800x500.jpg",
    alt: "Move-in cleaning service for new homes and apartments in Gold Coast",
    desc: "Start your new home fresh with a deep sanitise of every room, kitchen, and bathroom.",
    to: "/services#movein-cleaning",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    suburb: "Surfers Paradise",
    rating: 5,
    text: "Absolutely brilliant service! I was so worried about getting my bond back after 3 years in my unit. The Tru Bond team arrived right on time, worked super hard for 6 hours, and I got my full $2,400 bond back the very next week. Couldn't be happier!",
  },
  {
    name: "Jake T.",
    suburb: "Broadbeach",
    rating: 5,
    text: "The oven cleaning alone was worth every cent. I hadn't cleaned it properly in two years and honestly thought I'd lose bond money over it. They made it look brand new. The property manager was genuinely shocked at how good everything looked.",
  },
  {
    name: "Priya K.",
    suburb: "Southport",
    rating: 5,
    text: "Professional, polite, and incredibly thorough. They arrived exactly when they said, sent a checklist before and after, and even sent me photos proving everything was done. Got 100% bond back. Highly recommend to anyone in Gold Coast!",
  },
];

const topCompanies = [
  {
    name: "Pristine Home Cleaning",
    url: "https://www.pristinehomecleaning.com.au",
    desc: "Pristine Home Cleaning has been serving Gold Coast renters for over 10 years. They offer end-of-lease cleaning with a bond-back guarantee. Their team is thorough and professional, covering all rooms including carpets and windows. They are well-reviewed on Google and known for their attention to detail. Prices are competitive and they offer flexible scheduling including weekends. A reliable choice for Gold Coast tenants needing a stress-free bond clean.",
  },
  {
    name: "Whiz Cleaning",
    url: "https://www.whizcleaning.com.au",
    desc: "Whiz Cleaning operates across Gold Coast and offers affordable bond cleaning packages. Their cleaners are police-checked and insured. They provide a detailed cleaning checklist and follow real estate standards to help tenants pass final inspections. Whiz Cleaning is popular for apartment cleans in Surfers Paradise, Broadbeach, and Southport. They have strong reviews for punctuality and communication. Their online booking system makes it easy to get a same-week appointment.",
  },
  {
    name: "Jim's Cleaning Gold Coast",
    url: "https://www.jimscleaning.com.au",
    desc: "Jim's Cleaning is one of Australia's most recognised cleaning brands. Their Gold Coast franchise offers bond cleaning, carpet cleaning, window cleaning, and pressure washing. All Jim's cleaners are trained to the same national standard and carry full insurance. Customers trust the Jim's brand for consistency and accountability. They offer a satisfaction guarantee and will re-clean if the property manager is not happy. A well-known and dependable choice for Gold Coast bond cleans.",
  },
  {
    name: "Fantastic Cleaners Gold Coast",
    url: "https://www.fantasticcleaners.com.au",
    desc: "Fantastic Cleaners provides a wide range of cleaning services including end-of-lease cleaning across Gold Coast. They use a detailed REIQ-approved checklist to ensure your property meets inspection standards. Their teams are experienced, uniformed, and equipped with professional-grade tools and eco-friendly products. Fantastic Cleaners offer online booking with transparent pricing. They are known for reliability and quality service. A great option for tenants who want a well-organised bond clean.",
  },
  {
    name: "Tru Bond Cleaning Gold Coast",
    url: "https://trubondcleaningbrisbane.com",
    desc: "Tru Bond Cleaning is Gold Coast's most trusted local bond cleaning specialist. We offer a 100% bond-back guarantee on all our cleans. Our friendly, police-checked team follows a thorough REIQ-approved checklist covering every corner of your property. We clean kitchens, bathrooms, carpets, windows, and outdoor areas. We use eco-friendly products safe for kids and pets. We're available 7 days a week and offer free re-cleans if your property manager is not satisfied.",
    highlight: true,
  },
];

const faqs = [
  {
    q: "What is Bond Cleaning and why is it required?",
    a: "Bond cleaning (also called end-of-lease cleaning) is a thorough clean of your rental property before you move out. When you rent a home in Gold Coast, you pay a bond — a security deposit — to your landlord or property manager. To get your bond money back, you need to return the property in the same clean condition as when you moved in. The property manager does a final inspection and checks everything carefully. If the property isn't clean enough, they can take money from your bond to pay for cleaning. Bond cleaning covers every part of your home — from the kitchen and bathrooms to bedrooms, windows, and carpets.",
  },
  {
    q: "Why is bond cleaning important?",
    a: "Bond cleaning is important because it helps you get your full bond back — that's usually 4 weeks of rent! In Gold Coast, bonds can be thousands of dollars. A proper bond clean means the property looks as good as it did when you first moved in. Property managers use detailed inspection checklists, and they check everything closely. If something is missed, you might lose part or all of your bond. Professional bond cleaners like Tru Bond Cleaning know exactly what property managers look for. We follow the same checklists they use, so nothing gets missed and you get every dollar back.",
  },
  {
    q: "How much for a bond clean?",
    a: "The cost of a bond clean in Gold Coast depends on the size of your property. A studio or 1-bedroom unit typically costs $200–$300. A 2-bedroom unit usually costs $300–$400. A 3-bedroom house can cost $400–$600 or more. If you add carpet steam cleaning or pressure washing, the price goes up a bit. At Tru Bond Cleaning, we give you a clear, honest quote upfront — no hidden fees. Call or WhatsApp us for a free quote and we'll give you the best price for your property.",
  },
  {
    q: "What is full bond cleaning?",
    a: "Full bond cleaning means we clean absolutely everything in your rental property from top to bottom. That includes the kitchen (oven, stovetop, rangehood, cupboards, benches), all bathrooms and toilets, all bedrooms and living areas, windows (inside and out), walls (spot cleaning), skirting boards, light fittings, ceiling fans, blinds, and more. We also clean the laundry, garage, and outdoor areas if needed. Full bond cleaning gives you the best chance of passing your final inspection and getting 100% of your bond back. Think of it as a complete reset — making your home look brand new again.",
  },
  {
    q: "Which are the top rated bond cleaning companies near me?",
    a: "See our curated list of top 5 Gold Coast bond cleaning companies below.",
    isCompanies: true,
  },
  {
    q: "Which cleaning products are best for bond cleaning?",
    a: "Professional bond cleaners use a mix of powerful but safe cleaning products. For bathrooms, products like Exit Mould, Domestos Thick Bleach, and Selleys Shower Power work great on soap scum and mildew. For kitchens and ovens, Oven Pride, Easy-Off BAM, and Jif Cream Cleaner cut through grease and baked-on grime. For floors and surfaces, Pine O Cleen and Method All-Purpose Cleaner are popular. Microfibre cloths and non-scratch scourers protect surfaces. At Tru Bond Cleaning, we bring all our own products and equipment — you don't need to supply a thing. We only use products that are safe for kids and pets.",
  },
  {
    q: "How much does professional bond cleaning typically cost?",
    a: "Professional bond cleaning in Gold Coast typically costs:\n• Studio / 1 bedroom: $200–$300\n• 2 bedrooms: $300–$450\n• 3 bedrooms: $450–$600\n• 4 bedrooms: $550–$750+\n• Carpet steam cleaning adds $80–$150 per room\n• Window cleaning adds $50–$150\n• Pressure washing adds $100–$200\n\nThese are estimates — actual prices depend on the size and condition of your property. Tru Bond Cleaning offers transparent, upfront pricing with no hidden surprises. Contact us for a free quote today.",
  },
  {
    q: "What products are best for Bond Cleaning carpets?",
    a: "For carpet bond cleaning, these products work really well:",
    isCarpetProducts: true,
  },
  {
    q: "How to choose a reliable bond cleaner?",
    a: "Choosing the right bond cleaner is important. Here's what to look for:\n\n✅ Bond-Back Guarantee — the company should re-clean for free if the property manager is not satisfied.\n✅ Experience with Real Estate Standards — they should use an REIQ-approved checklist.\n✅ Insurance — make sure they are fully insured in case of damage.\n✅ Police-Checked Staff — your home should only be entered by trusted, vetted cleaners.\n✅ Clear Pricing — no hidden fees; get a written quote.\n✅ Good Reviews — check Google and Facebook reviews.\n✅ Availability — they should work 7 days a week to fit your move-out date.\n✅ Local Knowledge — a Gold Coast-based company understands local property managers' standards.\n\nTru Bond Cleaning ticks every single one of these boxes. That's why Gold Coast tenants trust us.",
  },
  {
    q: "Can I book a bond cleaning company online with Satisfaction Guarantee?",
    a: "Yes! You can book Tru Bond Cleaning online right here on our website. Just fill out the contact form on this page with your name, phone number, address, and service type — and we'll call you back within 2 hours with a free quote. Every booking comes with our 100% Satisfaction Guarantee. That means if your property manager finds anything we missed, we'll come back and re-clean it for free — no questions asked. You can also WhatsApp us directly on 0488 841 883 for a quick response. Booking is easy, fast, and gives you complete peace of mind.",
  },
];

const carpetProducts = [
  {
    name: "Bissell Professional Pet Urine Eliminator",
    url: "https://www.amazon.com.au/s?k=bissell+pet+urine+eliminator",
    desc: "Great for stains and pet odours",
  },
  {
    name: "Rug Doctor Carpet Detergent",
    url: "https://www.amazon.com.au/s?k=rug+doctor+carpet+detergent",
    desc: "Professional-grade carpet shampoo",
  },
  {
    name: "Spray Nine Heavy Duty Cleaner",
    url: "https://www.amazon.com.au/s?k=spray+nine+heavy+duty+cleaner",
    desc: "Multipurpose, works on carpet stains",
  },
  {
    name: "Woolite Carpet & Upholstery Cleaner",
    url: "https://www.amazon.com.au/s?k=woolite+carpet+cleaner",
    desc: "Gentle on carpet fibres",
  },
  {
    name: "Stanley Steemer Carpet Fresh",
    url: "https://www.amazon.com.au/s?k=carpet+freshener+spray",
    desc: "Deodorises and freshens carpets",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function HomePage() {
  return (
    <>
      <MetaTags
        title="Bond Cleaning Gold Coast | 100% Bond Back Guarantee | Tru Bond Cleaning"
        description="Tru Bond Cleaning Gold Coast — professional end-of-lease cleaning with a 100% Bond Back Guarantee. Fully insured, police-checked, eco-friendly. Call 0488 841 883 for a free quote."
        keywords="bond cleaning Gold Coast, end of lease cleaning Gold Coast, vacate cleaning Gold Coast, bond cleaners Gold Coast, carpet cleaning Gold Coast, oven cleaning Gold Coast, window cleaning Gold Coast, exit cleaning Gold Coast"
        canonical="https://trubondcleaningbrisbane.com/"
        ogTitle="Bond Cleaning Gold Coast | 100% Bond Back Guarantee | Tru Bond Cleaning"
        ogDescription="Professional bond cleaning in Gold Coast. 100% Bond Back Guarantee, fully insured team, eco-friendly products. Get your full bond back today!"
        ogType="website"
        ogUrl="https://trubondcleaningbrisbane.com/"
        ogImage="https://trubondcleaningbrisbane.com/assets/generated/hero-banner.dim_1200x500.jpg"
        twitterCard="summary_large_image"
        twitterTitle="Bond Cleaning Gold Coast | Tru Bond Cleaning"
        twitterDescription="Professional end-of-lease cleaning Gold Coast. 100% Bond Back Guarantee. Free quote — call 0488 841 883."
        twitterImage="https://trubondcleaningbrisbane.com/assets/generated/hero-banner.dim_1200x500.jpg"
        schemaLD={SCHEMA_LD}
      />

      {/* HERO */}
      <section className="relative overflow-hidden hero-gradient min-h-[560px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-banner.dim_1200x500.jpg')",
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-2xl">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm">
                  <Star className="w-3.5 h-3.5 fill-yellow-300 text-yellow-300" />
                  Gold Coast's Most Trusted Bond Cleaners
                </span>
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
              >
                100% Bond Back{" "}
                <span className="text-yellow-300">Guarantee</span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-lg text-white/85 leading-relaxed mb-8 max-w-xl"
              >
                Professional end-of-lease cleaning you can count on. We help
                Gold Coast tenants get their full bond back, every time. Fully
                insured, eco-friendly, and available 7 days a week.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  data-ocid="hero.primary_button"
                  className="bg-white text-primary hover:bg-white/90 font-bold text-base shadow-xl"
                >
                  <Link to="/contact">Get a Free Quote</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  data-ocid="hero.secondary_button"
                  variant="outline"
                  className="border-white text-white hover:bg-white/15 font-semibold text-base"
                >
                  <a
                    href="https://wa.me/61488841883"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiWhatsapp className="w-5 h-5 mr-2" />
                    WhatsApp Us Now
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
        {/* Hero image — visible on large screens */}
        <div className="hidden lg:block absolute right-0 bottom-0 w-[45%] h-full">
          <img
            src="/assets/generated/hero-banner.dim_1200x500.jpg"
            alt="Professional bond cleaners working in a Gold Coast apartment — Tru Bond Cleaning"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-700/90 via-teal-600/50 to-transparent" />
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="bg-white py-6 border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-foreground/70">
            {[
              "✅ 100% Bond Back Guarantee",
              "🛡 Fully Insured",
              "👮 Police Checked",
              "🌿 Eco-Friendly Products",
              "⭐ 5-Star Rated",
              "📅 7 Days a Week",
            ].map((item) => (
              <span key={item} className="whitespace-nowrap">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.span
              variants={fadeUp}
              className="text-primary font-semibold text-sm uppercase tracking-wider"
            >
              Why Gold Coast Tenants Choose Us
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4"
            >
              The Tru Bond Difference
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground max-w-xl mx-auto"
            >
              We don't just clean — we make sure you pass your final inspection
              and get every dollar of your bond back.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((f) => (
              <motion.div key={f.title} variants={fadeUp}>
                <Card className="card-hover h-full border-border">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                      <f.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">
                      {f.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {f.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 section-alt">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.span
              variants={fadeUp}
              className="text-primary font-semibold text-sm uppercase tracking-wider"
            >
              Our Services
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4"
            >
              Everything Your Property Manager Expects
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground max-w-xl mx-auto"
            >
              From the oven to the driveway, we cover every inch of your
              property so you don't have to worry about a thing.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                data-ocid={`services.item.${i + 1}`}
              >
                <Card className="card-hover overflow-hidden h-full border-border group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-white font-bold text-lg drop-shadow-lg">
                      {s.title}
                    </h3>
                  </div>
                  <CardContent className="p-5">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {s.desc}
                    </p>
                    <Link
                      to={s.to}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      Learn more <ChevronRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mt-10"
          >
            <Button
              asChild
              size="lg"
              className="bg-brand-teal hover:bg-brand-teal-dark text-white font-bold"
            >
              <Link to="/services">See All Services</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* SUBURBS GRID */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.span
              variants={fadeUp}
              className="text-primary font-semibold text-sm uppercase tracking-wider"
            >
              Service Areas
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4"
            >
              Bond Cleaning Across Gold Coast
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground max-w-xl mx-auto"
            >
              We serve all Gold Coast suburbs. Click your area for local
              pricing, checklists, and suburb-specific tips.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {suburbs.map((suburb, i) => (
              <motion.div
                key={suburb.slug}
                variants={fadeUp}
                data-ocid={`suburbs.item.${i + 1}`}
              >
                <Link
                  to={suburb.path as "/"}
                  className="group block rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1 bg-white"
                  aria-label={`Bond cleaning ${suburb.name} Gold Coast`}
                >
                  <div className="relative h-28 overflow-hidden">
                    <img
                      src={suburb.image}
                      alt={suburb.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-0 right-0 px-3">
                      <p className="text-white text-xs font-bold leading-tight line-clamp-2 drop-shadow">
                        {suburb.name}
                      </p>
                    </div>
                  </div>
                  <div className="p-3 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-primary" />
                      Gold Coast
                    </span>
                    <span className="text-xs font-semibold text-primary flex items-center gap-0.5 group-hover:gap-1 transition-all">
                      Book <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.span
              variants={fadeUp}
              className="text-primary font-semibold text-sm uppercase tracking-wider"
            >
              Customer Reviews
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4"
            >
              What Gold Coast Tenants Say
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeUp}>
                <Card className="h-full border-border p-6">
                  <CardContent className="p-0">
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: t.rating }, (_, i) => (
                        <Star
                          key={`star-${t.name}-${i}`}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-foreground/80 leading-relaxed mb-4 italic">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-sm">
                        {t.name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {t.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {t.suburb}, Gold Coast
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PRICING OVERVIEW */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Transparent Bond Cleaning Prices
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            No hidden fees. No surprises. Just honest pricing for a thorough
            clean.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            {[
              { size: "Studio / 1 Bed", price: "$200–$300" },
              { size: "2 Bedrooms", price: "$300–$450" },
              { size: "3 Bedrooms", price: "$450–$600" },
              { size: "4 Bedrooms", price: "$550–$750+" },
            ].map((p) => (
              <div
                key={p.size}
                className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              >
                <p className="text-white/80 text-xs font-medium mb-1">
                  {p.size}
                </p>
                <p className="text-white text-xl font-bold">{p.price}</p>
              </div>
            ))}
          </div>
          <p className="text-white/70 text-sm mb-6">
            * Carpet cleaning, window cleaning & pressure washing available as
            add-ons
          </p>
          <Button
            asChild
            size="lg"
            data-ocid="hero.primary_button"
            className="bg-white text-primary hover:bg-white/90 font-bold"
          >
            <Link to="/contact">Get Your Free Quote Now</Link>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.span
              variants={fadeUp}
              className="text-primary font-semibold text-sm uppercase tracking-wider"
            >
              Common Questions
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4"
            >
              Bond Cleaning FAQ — Gold Coast
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground max-w-xl mx-auto"
            >
              Everything you need to know about bond cleaning in Gold Coast,
              answered clearly and honestly.
            </motion.p>
          </motion.div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`item-${i}`}
                data-ocid={`faq.item.${i + 1}`}
                className="border border-border rounded-xl px-5 shadow-xs"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground py-4 hover:no-underline hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.isCompanies ? (
                    <div className="space-y-4 mt-2">
                      <p className="mb-4">
                        Here are five top-rated bond cleaning companies on the
                        Gold Coast:
                      </p>
                      {topCompanies.map((c, ci) => (
                        <div
                          key={c.name}
                          className={`p-4 rounded-lg border ${
                            c.highlight
                              ? "border-primary bg-secondary"
                              : "border-border bg-muted/30"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h4 className="font-semibold text-foreground">
                              {ci + 1}. {c.name}
                              {c.highlight && (
                                <span className="ml-2 text-xs bg-primary text-white px-2 py-0.5 rounded-full">
                                  Our Pick
                                </span>
                              )}
                            </h4>
                            <a
                              href={c.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary/80 flex items-center gap-1 text-xs whitespace-nowrap"
                            >
                              Visit website
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {c.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : faq.isCarpetProducts ? (
                    <div className="mt-2">
                      <p className="mb-4">{faq.a}</p>
                      <ul className="space-y-2 mb-4">
                        {carpetProducts.map((p) => (
                          <li key={p.name} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>
                              <a
                                href={p.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary font-medium hover:underline"
                              >
                                {p.name}
                              </a>{" "}
                              — {p.desc}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <p>
                        However, for rental properties, we always recommend
                        professional carpet steam cleaning. Property managers
                        expect carpets to look and smell fresh. Tru Bond
                        Cleaning uses industrial-grade steam cleaners that
                        penetrate deep into carpet fibres to remove dirt,
                        allergens, and stains that regular vacuuming and DIY
                        products can't reach.
                      </p>
                    </div>
                  ) : (
                    <div className="whitespace-pre-line">{faq.a}</div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 section-alt">
        <div className="container mx-auto px-4 text-center">
          <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Ready to Get Your Full Bond Back?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Book online in 60 seconds. Get a free quote within 2 hours. Move out
            stress-free with Tru Bond Cleaning Gold Coast.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-brand-teal hover:bg-brand-teal-dark text-white font-bold"
            >
              <Link to="/contact">Book Now — Get a Free Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-secondary"
            >
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiWhatsapp className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
