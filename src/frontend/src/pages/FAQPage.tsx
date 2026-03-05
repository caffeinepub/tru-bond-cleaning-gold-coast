import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { SiWhatsapp } from "react-icons/si";

const topCompanies = [
  {
    name: "Pristine Home Cleaning",
    url: "https://www.pristinehomecleaning.com.au",
    desc: "Pristine Home Cleaning has been serving Gold Coast renters for over 10 years. They offer end-of-lease cleaning with a bond-back guarantee. Their team is thorough and professional, covering all rooms including carpets and windows. They are well-reviewed on Google and known for their attention to detail. Prices are competitive and they offer flexible scheduling including weekends. A reliable choice for Gold Coast tenants needing a stress-free bond clean experience.",
  },
  {
    name: "Whiz Cleaning",
    url: "https://www.whizcleaning.com.au",
    desc: "Whiz Cleaning operates across Gold Coast and offers affordable bond cleaning packages. Their cleaners are police-checked and insured. They provide a detailed cleaning checklist and follow real estate standards to help tenants pass final inspections. Whiz Cleaning is popular for apartment cleans in Surfers Paradise, Broadbeach, and Southport. They have strong reviews for punctuality and communication. Their online booking system makes it easy to schedule your clean quickly and get a same-week appointment.",
  },
  {
    name: "Jim's Cleaning Gold Coast",
    url: "https://www.jimscleaning.com.au",
    desc: "Jim's Cleaning is one of Australia's most recognised cleaning brands. Their Gold Coast franchise offers bond cleaning, carpet cleaning, window cleaning, and pressure washing. All Jim's cleaners are trained to the same national standard and carry full insurance. Customers trust the Jim's brand for consistency and accountability. They offer a satisfaction guarantee and will re-clean if the property manager is not happy. A well-known and dependable choice for Gold Coast bond cleans.",
  },
  {
    name: "Fantastic Cleaners Gold Coast",
    url: "https://www.fantasticcleaners.com.au",
    desc: "Fantastic Cleaners provides a wide range of cleaning services including end-of-lease cleaning across Gold Coast. They use a detailed REIQ-approved checklist to ensure your property meets inspection standards. Their teams are experienced, uniformed, and equipped with professional-grade tools and eco-friendly products. Fantastic Cleaners offer online booking with transparent pricing. They are known for reliability and quality service. A great option for tenants who want a stress-free, well-organised bond clean from a large and established company.",
  },
  {
    name: "Tru Bond Cleaning Gold Coast",
    url: "https://trubondcleaningbrisbane.com",
    desc: "Tru Bond Cleaning is Gold Coast's most trusted local bond cleaning specialist. We offer a 100% bond-back guarantee on all our cleans. Our friendly, police-checked team follows a thorough REIQ-approved checklist covering every corner of your property. We clean kitchens, bathrooms, carpets, windows, and outdoor areas. We use eco-friendly products safe for kids and pets. We're available 7 days a week and offer free re-cleans if your property manager is not satisfied. Call us today for a free, no-obligation quote.",
    highlight: true,
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

const faqs = [
  {
    q: "What is Bond Cleaning and why is it required?",
    a: `Bond cleaning (also called end-of-lease cleaning) is a thorough clean of your rental property before you move out. When you rent a home in Gold Coast, you pay a bond — a security deposit — to your landlord or property manager. To get your bond money back, you need to return the property in the same clean condition as when you moved in.

The property manager does a final inspection and checks everything carefully. If the property isn't clean enough, they can take money from your bond to pay for cleaning. Bond cleaning covers every part of your home — from the kitchen and bathrooms to bedrooms, windows, and carpets.

Think of bond cleaning as giving the property a complete reset — making it look exactly the way it did when you first moved in. Property managers in Gold Coast use detailed REIQ checklists during the exit inspection, and they know what to look for. A professional bond clean by Tru Bond Cleaning makes sure every item on that checklist is ticked off.`,
  },
  {
    q: "Why is bond cleaning important?",
    a: `Bond cleaning is important because it helps you get your full bond back — that's usually 4 weeks of rent! In Gold Coast, bonds can be thousands of dollars. Losing even a portion of your bond because of cleaning is entirely avoidable with the right professional help.

A proper bond clean means the property looks as good as it did when you first moved in. Property managers use detailed inspection checklists, and they check everything closely. If something is missed — a dirty oven, grimy window tracks, dusty skirting boards — it goes on the inspection report and money comes out of your bond.

Professional bond cleaners like Tru Bond Cleaning know exactly what property managers look for. We follow the same REIQ-approved checklists they use, so nothing gets missed and you get every dollar back.`,
  },
  {
    q: "How much for a bond clean?",
    a: `The cost of a bond clean in Gold Coast depends on the size of your property:

• Studio / 1 bedroom unit: $200–$300
• 2 bedroom unit: $300–$400
• 3 bedroom house: $400–$600
• 4+ bedroom house: $600–$800+

If you add carpet steam cleaning, the price increases by $80–$150 per room. Window cleaning adds $50–$150. Pressure washing for outdoor areas adds $100–$200.

At Tru Bond Cleaning, we give you a clear, honest quote upfront — no hidden fees, no surprises. Call or WhatsApp us on 0488 841 883 for a free quote and we'll give you the best price for your property.`,
  },
  {
    q: "What is full bond cleaning?",
    a: `Full bond cleaning means we clean absolutely everything in your rental property from top to bottom. Here's what's included:

Kitchen: Oven (inside and out), stovetop, rangehood and filters, all cupboards (inside and outside), bench tops, splashback, sink and tapware.

Bathrooms & Toilets: Shower screens, tiles, taps, mirrors, toilet bowl and cistern, floors, vanity and cabinets.

Bedrooms & Living Areas: All floors (vacuumed and mopped), built-in wardrobes (inside and outside), window sills, light switches, power points, skirting boards.

Windows: Interior and exterior glass, tracks, frames, fly screens.

Additional: Ceiling fans, light fittings, exhaust fans, walls (spot cleaning), laundry, and garage if applicable.

Full bond cleaning gives you the best possible chance of passing your final inspection and getting 100% of your bond back. Think of it as a complete reset — making your home look brand new again.`,
  },
  {
    q: "Which are the top rated bond cleaning companies near me (Gold Coast)?",
    a: "",
    isCompanies: true,
  },
  {
    q: "Which cleaning products are best for bond cleaning?",
    a: `Professional bond cleaners use a mix of powerful but safe cleaning products. Here's what works best for each area:

Bathrooms: Exit Mould (tile and grout mould removal), Domestos Thick Bleach (toilet bowl disinfection), Selleys Shower Power (soap scum and grime on shower screens and tiles).

Kitchens & Ovens: Oven Pride or Easy-Off BAM (baked-on oven grease), Jif Cream Cleaner (stovetops and benches), Goo Gone (sticky residues and labels).

Floors & General Surfaces: Pine O Cleen (floors and hard surfaces), Method All-Purpose Cleaner (eco-friendly option for benches and furniture).

Tools: Professional microfibre cloths, non-scratch scourers, squeegees, and steam mops make a significant difference in results.

At Tru Bond Cleaning, we bring all our own products and equipment — you don't need to supply a thing. We only use products that are safe for kids and pets.`,
  },
  {
    q: "How much does professional bond cleaning typically cost?",
    a: `Professional bond cleaning in Gold Coast typically costs:

• Studio / 1 bedroom: $200–$300
• 2 bedrooms: $300–$450
• 3 bedrooms: $450–$600
• 4 bedrooms: $550–$750+

Add-ons:
• Carpet steam cleaning: +$80–$150 per room
• Window cleaning: +$50–$150
• Pressure washing: +$100–$200

These are estimates — actual prices depend on the size and condition of your property. Properties that haven't been regularly cleaned may require additional time and cost more.

Tru Bond Cleaning offers transparent, upfront pricing with no hidden surprises. We beat most competitors on price while delivering a higher quality clean. Contact us today for a free, no-obligation quote.`,
  },
  {
    q: "What products are best for bond cleaning carpets?",
    a: "",
    isCarpetProducts: true,
  },
  {
    q: "How to choose a reliable bond cleaner?",
    a: `Choosing the right bond cleaner is one of the most important decisions you make when moving out. Here's exactly what to look for:

✅ Bond-Back Guarantee — The company should guarantee to re-clean for free if the property manager is not satisfied. No quality bond cleaner will refuse this.

✅ Experience with Real Estate Standards — They must use an REIQ-approved checklist, not just a generic cleaning list.

✅ Full Insurance — Make sure they carry public liability insurance in case of any accidental damage to the property.

✅ Police-Checked Staff — Your home should only be entered by trusted, vetted cleaners. Ask for proof.

✅ Clear, Written Pricing — No hidden fees. Get a quote in writing before booking.

✅ Strong Reviews — Check Google and Facebook reviews. Look for consistent 4.8+ star ratings with detailed reviews.

✅ Availability — They should work 7 days a week to fit your move-out date.

✅ Local Gold Coast Knowledge — A Gold Coast-based company understands exactly what local property managers expect.

Tru Bond Cleaning ticks every single one of these boxes. That's why Gold Coast tenants trust us — call 0488 841 883 to book.`,
  },
  {
    q: "Can I book a bond cleaning company online with Satisfaction Guarantee?",
    a: `Yes! You can book Tru Bond Cleaning online right here on our website. Just fill out the contact form with your name, phone number, property address, and service type — and we'll call you back within 2 hours with a free quote.

Every booking comes with our 100% Satisfaction Guarantee. That means:
• If your property manager finds anything we missed, we come back and re-clean it for free
• No call-out fee for the re-clean
• Re-clean completed within 72 hours of notification
• Valid for 7 days from the original clean date

You can also WhatsApp us directly on 0488 841 883 for an even faster response. Booking is easy, fast, and gives you complete peace of mind. Don't risk your bond — let Tru Bond Cleaning handle it for you!`,
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs
    .filter((f) => !f.isCompanies && !f.isCarpetProducts)
    .map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
};

export default function FAQPage() {
  return (
    <>
      <Helmet>
        <title>Bond Cleaning FAQ Gold Coast | Tru Bond Cleaning</title>
        <meta
          name="description"
          content="Answers to the most common bond cleaning questions in Gold Coast. What is bond cleaning, how much does it cost, top cleaning companies, best products, and how to choose a reliable cleaner."
        />
        <meta
          name="keywords"
          content="bond cleaning FAQ Gold Coast, how much is bond cleaning Gold Coast, what is bond cleaning, bond cleaning cost Australia, end of lease cleaning questions Gold Coast"
        />
        <meta
          property="og:title"
          content="Bond Cleaning FAQ Gold Coast | Common Questions Answered"
        />
        <meta
          property="og:description"
          content="Everything you need to know about bond cleaning in Gold Coast. Costs, top companies, best products, and how to get your full bond back."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://trubondcleaningbrisbane.com/faq"
        />
        <meta
          property="og:image"
          content="https://trubondcleaningbrisbane.com/assets/generated/hero-banner.dim_1200x500.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Bond Cleaning FAQ Gold Coast | Tru Bond Cleaning"
        />
        <meta
          name="twitter:description"
          content="Answers to the top 10 bond cleaning questions for Gold Coast tenants. Costs, tips, top companies, and how to get your full bond back."
        />
        <link rel="canonical" href="https://trubondcleaningbrisbane.com/faq" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className="hero-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-white/70 text-sm font-medium uppercase tracking-wider">
              Expert Answers
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              Bond Cleaning FAQ
            </h1>
            <p className="text-white/80 max-w-xl mx-auto text-lg">
              Everything Gold Coast tenants need to know about bond cleaning —
              answered clearly, honestly, and in plain English.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.q}
                  value={`item-${i}`}
                  data-ocid={`faq.item.${i + 1}`}
                  className="border border-border rounded-xl px-5 shadow-xs"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground py-5 hover:no-underline hover:text-primary transition-colors text-base">
                    <span className="flex items-center gap-3">
                      <span className="text-primary font-bold text-lg leading-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    {faq.isCompanies ? (
                      <div className="space-y-4 mt-2">
                        <p className="text-muted-foreground text-sm mb-4">
                          Here are five top-rated bond cleaning companies on the
                          Gold Coast, with honest, unbiased descriptions:
                        </p>
                        {topCompanies.map((c, ci) => (
                          <div
                            key={c.name}
                            className={`p-5 rounded-xl border ${
                              c.highlight
                                ? "border-primary bg-secondary"
                                : "border-border bg-muted/20"
                            }`}
                          >
                            <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                              <h3 className="font-bold text-foreground">
                                {ci + 1}. {c.name}
                                {c.highlight && (
                                  <span className="ml-2 text-xs bg-primary text-white px-2 py-0.5 rounded-full">
                                    ⭐ Our Recommendation
                                  </span>
                                )}
                              </h3>
                              <a
                                href={c.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-xs text-primary hover:underline"
                              >
                                Visit website{" "}
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {c.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : faq.isCarpetProducts ? (
                      <div className="mt-2">
                        <p className="text-muted-foreground text-sm mb-4">
                          For bond cleaning carpets, these products work really
                          well:
                        </p>
                        <ul className="space-y-3 mb-5">
                          {carpetProducts.map((p) => (
                            <li key={p.name} className="flex items-start gap-3">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <div>
                                <a
                                  href={p.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary font-semibold hover:underline text-sm"
                                >
                                  {p.name}
                                </a>
                                <span className="text-muted-foreground text-sm">
                                  {" "}
                                  — {p.desc}
                                </span>
                              </div>
                            </li>
                          ))}
                        </ul>
                        <div className="p-4 bg-secondary rounded-lg border border-border text-sm text-foreground/80">
                          <strong>Important:</strong> For rental properties, we
                          always recommend professional carpet steam cleaning.
                          Property managers expect carpets to look and smell
                          fresh. Tru Bond Cleaning uses industrial-grade steam
                          cleaners that penetrate deep into carpet fibres to
                          remove dirt, allergens, and stains that regular
                          vacuuming and DIY products can't reach. This gives you
                          the best chance of passing your final inspection.
                        </div>
                      </div>
                    ) : (
                      <div className="whitespace-pre-line text-sm text-muted-foreground leading-relaxed mt-2">
                        {faq.a}
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Still Have Questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 text-center p-8 rounded-2xl hero-gradient"
          >
            <h2 className="text-2xl font-bold text-white mb-3">
              Still Have Questions?
            </h2>
            <p className="text-white/80 mb-6 max-w-md mx-auto">
              Our friendly team is here to help. WhatsApp us for the fastest
              response, or get a free quote online.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-bold"
              >
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiWhatsapp className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
