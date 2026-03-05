import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle, ChevronRight } from "lucide-react";
import { type Variants, motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { SiWhatsapp } from "react-icons/si";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const services = [
  {
    id: "bond-cleaning",
    number: "01",
    title: "Bond Cleaning Gold Coast",
    subtitle: "End of Lease Cleaning | Vacate Cleaning",
    img: "/assets/generated/bond-cleaning-service.dim_800x500.jpg",
    alt: "Professional bond cleaning Gold Coast — end of lease cleaning service in a Gold Coast rental bathroom",
    keywords: [
      "bond cleaning Gold Coast",
      "end of lease cleaning",
      "vacate cleaning",
      "exit cleaning",
    ],
    checklist: [
      "All bedrooms, living areas & hallways",
      "Kitchen — oven, stovetop, rangehood, cupboards",
      "Bathrooms & toilets — scrubbed and sanitised",
      "Windows (inside & out) and fly screens",
      "Skirting boards, light switches & power points",
      "Ceiling fans, light fittings & exhaust fans",
      "Walls — spot cleaning & fingerprint removal",
      "Laundry — tub, cabinets & appliances",
    ],
    content: [
      "Moving out of a Gold Coast rental is exciting — but the bond clean? That's the part most people dread. At Tru Bond Cleaning, we take that stress completely off your plate. Our professional end-of-lease cleaning service covers every single part of your property, top to bottom, so you walk away with 100% of your bond money back.",
      "Gold Coast's rental market is competitive, and property managers here hold high standards. They walk through your property with a detailed checklist — and they check everything. The oven rack. The bathroom grout. The inside of the wardrobe. The tracks on the windows. Our team knows exactly what they look for because we've done thousands of bond cleans across the Gold Coast, from Surfers Paradise to Southport, Broadbeach to Burleigh Heads.",
      "Our bond cleaning checklist follows the Real Estate Institute of Queensland (REIQ) standards — the same document your property manager uses during the final inspection. We clean every room methodically, room by room, surface by surface. Nothing gets skipped. Our cleaners don't rush — they work until the job is done right.",
      "When we clean your kitchen, we remove grease and grime from the stovetop, degrease the rangehood and filters, clean inside and outside every cupboard, wipe down all bench tops, and scrub the oven until it looks brand new. In your bathrooms, we remove soap scum, descale shower screens and taps, scrub the toilet bowl, clean mirrors, and mop floors to a sparkling finish.",
      "Our service also covers the often-forgotten details that trip people up at inspection: skirting boards, light switches, power points, exhaust fans, ceiling fans, and window tracks. These are the places property managers check closely — and the spots many DIY cleaners miss.",
      "We bring all our own professional-grade eco-friendly cleaning products and equipment. You don't need to supply anything. Our products are safe for children and pets, and they're powerful enough to tackle even the toughest built-up grime. When we leave, your property looks and smells immaculate.",
      "And here's our guarantee: if your property manager finds anything during the final inspection that doesn't meet the standard, we come back and re-clean it for free — no questions asked. We call it our Bond Back Guarantee, and it's our promise to every customer. With Tru Bond Cleaning, you're not just hiring a cleaning service — you're hiring peace of mind.",
      "Ready to book? Call us on 0488 841 883 or WhatsApp us for a fast, free, no-obligation quote. We respond within 2 hours and can often accommodate same-week bookings.",
    ],
  },
  {
    id: "carpet-cleaning",
    number: "02",
    title: "Carpet Steam Cleaning Gold Coast",
    subtitle: "Hot Water Extraction | Stain Removal | Allergen Reduction",
    img: "/assets/generated/carpet-cleaning-service.dim_800x500.jpg",
    alt: "Professional carpet steam cleaning Gold Coast — hot water extraction removing stains from rental property carpet",
    keywords: [
      "carpet steam cleaning Gold Coast",
      "carpet cleaning rental property",
      "hot water extraction Gold Coast",
    ],
    checklist: [
      "Hot water extraction (steam cleaning)",
      "Pre-treatment of stains and high-traffic areas",
      "Deep extraction of allergens and dust mites",
      "Pet odour and stain treatment",
      "Deodoriser application",
      "Quick-dry process — carpet ready within hours",
      "Safe for all carpet types including wool",
      "Full rooms, hallways and stairs",
    ],
    content: [
      "Gold Coast rental properties almost always require professional carpet steam cleaning at the end of a lease. It's written into most tenancy agreements — and for good reason. Carpets collect years of dust, allergens, skin cells, pet dander, and microscopic bacteria that regular vacuuming simply cannot remove. Our professional hot water extraction service gets deep into the carpet fibres and pulls all of that out.",
      "We use industrial-grade steam cleaning equipment — the same machines used by professional cleaning companies across Australia. Hot water is injected deep into the carpet pile at high pressure, loosening dirt, bacteria, stains, and allergens. The machine then extracts it all out, along with the water, leaving your carpets clean, fresh, and almost dry within hours. This is a dramatically more effective result than any rental machine from the hardware store.",
      "Gold Coast's humid subtropical climate creates the perfect conditions for mould and mildew to develop in carpets — especially in ground-floor units and houses with poor ventilation. Our pre-treatment process targets these areas and eliminates the spores before they spread further. If you have a pet, we apply a special enzyme-based treatment that breaks down pet odour molecules at the source, not just masks them with a fragrance.",
      "Stains are another common issue. Red wine, coffee, mud, grease, crayon, nail polish — we've seen it all. Our technicians pre-treat each stain individually with the appropriate product before steam cleaning. While not every stain can be 100% removed (especially old, set-in ones), our success rate is extremely high. We're honest with you about what's possible, and we always do our absolute best.",
      "Property managers in Gold Coast are experienced at identifying carpets that haven't been professionally cleaned. They can tell the difference between a vacuumed carpet and a steam-cleaned one — and they record it at the ingoing inspection. If your carpets were professionally cleaned when you moved in, you're required to return them in the same condition. Our service ensures you meet that standard.",
      "Our carpet cleaning is available as a standalone service or as an add-on to your bond clean. We clean all room types including bedrooms, living areas, hallways, and stairs. We work around your schedule and aim to cause minimum disruption. Carpets are typically walk-on-ready within 2–4 hours of cleaning.",
      "We protect your investment and give you the best possible chance of passing your final inspection with flying colours. Call us on 0488 841 883 or WhatsApp us for a free carpet cleaning quote today.",
    ],
  },
  {
    id: "oven-cleaning",
    number: "03",
    title: "Oven & Kitchen Deep Cleaning Gold Coast",
    subtitle: "Bond Kitchen Clean | Oven Degreasing | Rangehood Cleaning",
    img: "/assets/generated/oven-cleaning-service.dim_800x500.jpg",
    alt: "Professional oven and kitchen deep cleaning Gold Coast — bond clean kitchen with sparkling oven and stovetop",
    keywords: [
      "oven cleaning Gold Coast",
      "kitchen cleaning bond",
      "deep kitchen clean Gold Coast",
    ],
    checklist: [
      "Oven interior — racks, glass door, walls, floor",
      "Stovetop — burners, grates, drip trays",
      "Rangehood — filters, fan, exterior surfaces",
      "Cupboards — inside and outside every door",
      "Bench tops and splashback",
      "Sink and tapware — descaled and polished",
      "Dishwasher interior",
      "Fridge interior and exterior (if left behind)",
    ],
    content: [
      "Ask any professional bond cleaner what the most time-consuming and difficult room to clean is, and they'll tell you the same thing: the kitchen. And within the kitchen, the oven is almost always the hardest part. Years of baked-on grease, carbon deposits, and food splatter turn the inside of an oven into a challenge that household spray-on oven cleaner simply can't handle. That's where Tru Bond Cleaning's deep kitchen cleaning service steps in.",
      "Our kitchen cleaning technicians use professional-grade alkaline degreasers and biodegradable solvents that break down even the most stubborn baked-on grease and grime. We disassemble the oven racks, soak them in a degreasing solution, and clean every surface of the oven cavity — top, bottom, sides, and the glass door — until the interior is completely clean. We then re-assemble and polish the outside. The result looks like a brand-new oven.",
      "Property managers pay close attention to the kitchen during the final inspection. It's the room with the most working parts, the most cooking residue, and the most opportunity for a tenant to lose bond money. Common failure points include: greasy rangehood filters, dirty burners and grates, grimy cupboard interiors, stained benchtops, and limescale-covered tapware. We address every single one of these.",
      "Our rangehood cleaning is particularly thorough. We remove the filters and soak them in a degreasing solution until clean, wipe down the interior cavity of the rangehood, and polish the exterior surfaces. Rangehood filters collect enormous amounts of grease over time — they're one of the most commonly missed items in DIY bond cleans.",
      "Every cupboard, drawer, and pantry door gets cleaned inside and out. We remove grease marks, food stains, and fingerprints from all surfaces. Bench tops and the splashback get a full clean with appropriate products that remove stains without damaging the surface. The sink and tapware are descaled, polished, and left gleaming.",
      "If there's a dishwasher, we clean the interior including the filter, door seal, and spray arms. If the fridge has been left behind (common in furnished rentals), we clean the interior thoroughly including shelves, drawers, and the door seals.",
      "Our kitchen deep clean gives you complete confidence going into your final inspection. The Gold Coast rental market moves fast — don't risk losing your bond over a kitchen that needed more attention. Let Tru Bond Cleaning handle it for you.",
    ],
  },
  {
    id: "window-cleaning",
    number: "04",
    title: "Window Cleaning Gold Coast",
    subtitle: "Interior & Exterior | Tracks & Frames | Fly Screens",
    img: "/assets/generated/window-cleaning-service.dim_800x500.jpg",
    alt: "Professional window cleaning Gold Coast — streak-free interior and exterior windows cleaned for bond inspection",
    keywords: [
      "window cleaning Gold Coast",
      "bond window cleaning",
      "streak-free window cleaning",
    ],
    checklist: [
      "Interior window glass — streak-free clean",
      "Exterior window glass — all accessible windows",
      "Window tracks — vacuum and wipe down",
      "Window frames — all surfaces cleaned",
      "Fly screens — removed, cleaned, and reinstalled",
      "Sliding door tracks and glass",
      "High windows using professional equipment",
      "Salt air and grime removal",
    ],
    content: [
      "Gold Coast is one of Australia's most beautiful coastal destinations — but that salt-laden sea air? It's brutal on windows. Salt particles, dust, and general grime build up rapidly on window glass, frames, and tracks. If you've been living in a Gold Coast apartment or house for even six months, your windows are probably showing it. And during a bond inspection, dirty windows stick out like a sore thumb.",
      "Tru Bond Cleaning's professional window cleaning service covers every window in your property, inside and out. We use the right tools for the job — professional squeegees, microfibre cloths, and streak-free cleaning solutions that produce crystal-clear results every time. No smears, no streaks, no water marks.",
      "Window tracks are one of the most frequently failed items in Gold Coast bond inspections. Those narrow grooves fill up with dust, dead insects, mould, and debris over time. Property managers run their finger along the tracks — and if it comes away dirty, it goes on the report. Our team vacuums out all debris and then wipes every track until it's spotless.",
      "Fly screens are another overlooked detail. We remove all fly screens, clean them thoroughly with a brush and water spray to remove dust and grime, and re-install them correctly. This small step makes a noticeable difference to the overall impression of the property during inspection.",
      "For high-rise apartments and multi-level homes, we bring the right equipment to reach all accessible windows safely. We're experienced in working at heights and prioritise safety at all times. For windows that can only be accessed externally from height, we assess on-site and advise the safest and most practical approach.",
      "Window frames also get a thorough wipe-down. Aluminium frames in coastal environments are particularly prone to salt build-up and oxidation. We clean all frame surfaces with appropriate products that remove grime without damaging the material.",
      "Clean windows do more than just pass the inspection — they transform the look and feel of a property. Light floods in, rooms look bigger, and the whole property feels fresh and well-maintained. Whether you're getting a bond clean or just want your windows sparkling, Tru Bond Cleaning delivers a streak-free result every time.",
    ],
  },
  {
    id: "pressure-washing",
    number: "05",
    title: "Pressure Washing Gold Coast",
    subtitle: "Driveways | Patios | Balconies | Paths",
    img: "/assets/generated/pressure-washing-service.dim_800x500.jpg",
    alt: "Commercial pressure washing Gold Coast — cleaning driveway and patio for end of lease inspection",
    keywords: [
      "pressure washing Gold Coast",
      "exterior cleaning bond",
      "driveway cleaning Gold Coast",
    ],
    checklist: [
      "Driveways — concrete, pavers, asphalt",
      "Patios and entertainment areas",
      "Balconies and decking",
      "Pathways and garden edging",
      "Pool surrounds and courtyards",
      "Garage floors and carports",
      "Mould and mildew removal",
      "Algae and moss treatment",
    ],
    content: [
      "When Gold Coast tenants focus on their bond clean, they often spend all their energy on the inside of the house — and completely forget about the outside. But property managers don't forget. They walk around the exterior of your property during the final inspection, and they notice driveways caked in oil and grime, patios green with algae, and balconies stained with mould. These outdoor areas are part of your bond obligation, and they need to look as good as the interior.",
      "Gold Coast's subtropical climate creates perfect conditions for mould, mildew, and algae to thrive on outdoor surfaces. The high humidity, warm temperatures, and regular rainfall mean that driveways, patios, and balconies can develop significant biological growth over a 12-month lease period. This isn't your fault — it's just the Gold Coast climate. But it is your responsibility to return the property in a clean condition.",
      "Our commercial-grade pressure washing equipment operates at significantly higher pressures and water flow rates than any machine you can hire from a hardware store. This makes a dramatic difference to the results. We can remove years of built-up grime, algae, oil stains, and biological growth in a fraction of the time it would take with a consumer machine — and the result is noticeably better.",
      "We treat different surfaces with the right technique. Concrete driveways can handle high-pressure washing. Timber decking requires lower pressure and specific cleaning angles to avoid damaging the grain. Pavers need careful attention to avoid disturbing the joint sand. Our technicians know the difference and adjust their approach accordingly.",
      "For surfaces with heavy mould or algae growth, we pre-treat with a commercial-grade biocide that kills the biological material before pressure washing. This makes the removal significantly more effective and also treats the underlying spores, reducing the speed of regrowth. Your landlord or property manager will notice the difference.",
      "We clean all accessible outdoor areas including driveways, carports, paths, patios, balconies, pool surrounds, courtyards, and garden edges. We work quickly and efficiently, and we clean up our water and any displaced debris before we leave.",
      "Pressure washing is available as a standalone service or as an add-on to your full bond clean package. It's one of the best investments you can make to ensure your property passes the outdoor portion of the final inspection. Call Tru Bond Cleaning on 0488 841 883 for a free quote.",
    ],
  },
  {
    id: "movein-cleaning",
    number: "06",
    title: "Move-In Cleaning Gold Coast",
    subtitle: "New Home Deep Clean | Sanitisation | Fresh Start",
    img: "/assets/generated/movein-cleaning-service.dim_800x500.jpg",
    alt: "Professional move-in cleaning service Gold Coast — new home deep clean and sanitisation for Gold Coast apartments",
    keywords: [
      "move in cleaning Gold Coast",
      "new home cleaning",
      "deep clean Gold Coast",
    ],
    checklist: [
      "Full kitchen deep clean and sanitisation",
      "All bathrooms and toilets disinfected",
      "All bedrooms and living areas",
      "Inside all cupboards and wardrobes",
      "Windows, tracks, and fly screens",
      "Skirting boards and light fittings",
      "Floors — vacuum, mop, sanitise",
      "Laundry appliances and areas",
    ],
    content: [
      "Moving into a new home in Gold Coast is exciting. Whether it's a beachside apartment in Surfers Paradise, a family home in Robina, or a riverside unit in Southport — you deserve to start fresh. But even a property that looks clean on the surface can harbour hidden grime, bacteria, and allergens from the previous occupants. Our move-in cleaning service gives you a genuinely clean, sanitised home from day one.",
      "Think about what a deep clean actually involves. The previous tenants cooked in that kitchen, showered in that bathroom, and lived in those rooms for months or years. Even after a professional bond clean, there are often areas that need additional attention — and in many cases, properties aren't professionally cleaned between tenancies at all. Our move-in clean ensures that every surface you and your family touch is genuinely clean and sanitary.",
      "Our move-in cleaning checklist is designed for Gold Coast apartments and houses of all sizes. We start from the top of each room and work down — light fittings, ceiling fans, blinds, walls, then furniture, surfaces, and finally floors. This methodical approach ensures that any dust or debris displaced from high surfaces is caught during the floor clean, rather than being left behind.",
      "The kitchen gets a complete deep clean including inside every cupboard and drawer. You don't want to be storing your food and dishes in cupboards that someone else's crumbs and grease have been sitting in. We clean all shelf surfaces, door hinges, and drawer runners. The oven gets a full interior clean, the stovetop gets degreased, and the rangehood filters get soaked and scrubbed.",
      "Every bathroom and toilet gets disinfected with hospital-grade products. We scrub the shower recess, clean the toilet thoroughly including under the rim and behind the bowl, descale taps and showerheads, and wipe down all surfaces. Bathrooms harbour the most bacteria of any room in the house, and a proper disinfection clean gives you complete peace of mind.",
      "We also offer tailored move-in cleaning packages for Gold Coast properties of all sizes — from compact 1-bedroom units to large 4-bedroom family homes. Every package includes our standard deep clean checklist, and we can add carpet steam cleaning, window cleaning, and pressure washing as needed. We work around your moving schedule and can often accommodate short-notice bookings.",
      "Start your life in your new Gold Coast home the right way. Book Tru Bond Cleaning's move-in service and enjoy the peace of mind that comes from knowing every surface has been professionally cleaned and sanitised. WhatsApp us on 0488 841 883 or fill out our online form for a free quote.",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Bond Cleaning Services Gold Coast | Tru Bond Cleaning</title>
        <meta
          name="description"
          content="Explore all Tru Bond Cleaning Gold Coast services: bond cleaning, carpet steam cleaning, oven deep cleaning, window cleaning, pressure washing, and move-in cleaning. 100% Bond Back Guarantee."
        />
        <meta
          name="keywords"
          content="bond cleaning services Gold Coast, carpet steam cleaning Gold Coast, oven cleaning Gold Coast, window cleaning Gold Coast, pressure washing Gold Coast, move in cleaning Gold Coast, end of lease cleaning"
        />
        <meta
          property="og:title"
          content="Bond Cleaning Services Gold Coast | Tru Bond Cleaning"
        />
        <meta
          property="og:description"
          content="Professional bond cleaning services in Gold Coast — carpet steam cleaning, oven cleaning, window cleaning, pressure washing, and move-in cleaning. Get a free quote today."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://trubondcleaningbrisbane.com/services"
        />
        <meta
          property="og:image"
          content="https://trubondcleaningbrisbane.com/assets/generated/bond-cleaning-service.dim_800x500.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Bond Cleaning Services Gold Coast | Tru Bond Cleaning"
        />
        <meta
          name="twitter:description"
          content="Professional bond cleaning, carpet cleaning, oven cleaning & more in Gold Coast. 100% Bond Back Guarantee. Free quote: 0488 841 883."
        />
        <link
          rel="canonical"
          href="https://trubondcleaningbrisbane.com/services"
        />
      </Helmet>

      {/* PAGE HERO */}
      <section className="hero-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-white/70 text-sm font-medium uppercase tracking-wider">
              What We Do
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              Our Cleaning Services
            </h1>
            <p className="text-white/80 max-w-xl mx-auto text-lg">
              Professional, thorough, guaranteed. Every service we offer is
              designed to help Gold Coast tenants get their full bond back.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICE NAV */}
      <div className="bg-white border-b border-border sticky top-[65px] z-40 shadow-xs">
        <div className="container mx-auto px-4 overflow-x-auto">
          <div className="flex gap-1 py-2 min-w-max">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors whitespace-nowrap"
              >
                {s.title.split(" ").slice(0, 2).join(" ")}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div className="container mx-auto px-4 py-16 space-y-24">
        {services.map((s, i) => (
          <motion.article
            key={s.id}
            id={s.id}
            data-ocid={`services.item.${i + 1}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="scroll-mt-32"
          >
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                variants={fadeUp}
                className={i % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-md aspect-video">
                  <img
                    src={s.img}
                    alt={s.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    {s.number}
                  </div>
                </div>
                {/* Checklist */}
                <div className="mt-6 p-5 rounded-xl bg-secondary border border-border">
                  <h3 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wide">
                    What's Included
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {s.checklist.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                variants={fadeUp}
                className={i % 2 === 1 ? "lg:order-1" : ""}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {s.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-md font-medium"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {s.title}
                </h2>
                <p className="text-primary font-medium mb-5 text-sm">
                  {s.subtitle}
                </p>
                <div className="space-y-4">
                  {s.content.map((para) => (
                    <p
                      key={para.slice(0, 40)}
                      className="text-foreground/80 leading-relaxed text-sm"
                    >
                      {para}
                    </p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 mt-6">
                  <Button
                    asChild
                    className="bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold"
                  >
                    <Link to="/contact">
                      Get a Free Quote <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary text-primary hover:bg-secondary"
                  >
                    <a
                      href="https://wa.me/61488841883"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiWhatsapp className="w-4 h-4 mr-2" />
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* CTA */}
      <section className="hero-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Need More Than One Service?
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Bundle your bond clean with carpet steam cleaning, window cleaning,
            or pressure washing and save money. Ask us about our package deals.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-bold"
          >
            <Link to="/contact">Get a Bundle Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
