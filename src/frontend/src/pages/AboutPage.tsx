import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  CheckCircle,
  Clock,
  Heart,
  Leaf,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { type Variants, motion } from "motion/react";
import { SiWhatsapp } from "react-icons/si";
import MetaTags from "../components/MetaTags";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const values = [
  {
    icon: Shield,
    title: "100% Bond Back Guarantee",
    desc: "If your property manager finds anything wrong, we come back and re-clean it for free within 72 hours. No questions asked.",
  },
  {
    icon: Users,
    title: "Trained, Police-Checked Team",
    desc: "Every cleaner who enters your home is fully trained, police-checked, and covered by our comprehensive insurance policy.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Safe",
    desc: "We only use plant-based, biodegradable cleaning products that are safe for your children, pets, and the Gold Coast environment.",
  },
  {
    icon: Star,
    title: "REIQ Checklist Standards",
    desc: "We follow the same Real Estate Institute of Queensland checklist that your property manager uses — so nothing gets missed.",
  },
  {
    icon: Clock,
    title: "Available Every Day",
    desc: "We work 7 days a week, including public holidays, because your bond return date won't wait for a weekday.",
  },
  {
    icon: Heart,
    title: "We Treat Your Home With Care",
    desc: "We treat every property like it's our own home. Careful, respectful, and thorough — every single time.",
  },
];

const stats = [
  { number: "1,000+", label: "Happy Customers" },
  { number: "4.9 / 5", label: "Average Google Rating" },
  { number: "100%", label: "Bond Back Success Rate" },
  { number: "7 Days", label: "Available Every Week" },
];

export default function AboutPage() {
  return (
    <>
      <MetaTags
        title="About Tru Bond Cleaning Gold Coast | Our Story & Guarantee"
        description="Learn about Tru Bond Cleaning Gold Coast — Gold Coast's most trusted bond cleaning company. Police-checked team, 100% Bond Back Guarantee, eco-friendly products. Over 1,000 happy Gold Coast tenants served."
        keywords="about Tru Bond Cleaning Gold Coast, bond cleaning company Gold Coast, trusted bond cleaners Gold Coast, insured bond cleaners Gold Coast"
        canonical="https://trubondcleaningbrisbane.com/about"
        ogTitle="About Tru Bond Cleaning Gold Coast | Our Story & Guarantee"
        ogDescription="Tru Bond Cleaning Gold Coast — locally owned, fully insured, police-checked. We've helped 1,000+ Gold Coast tenants get their full bond back."
        ogType="website"
        ogUrl="https://trubondcleaningbrisbane.com/about"
        ogImage="https://trubondcleaningbrisbane.com/assets/generated/about-team.dim_800x500.jpg"
        twitterCard="summary_large_image"
        twitterTitle="About Tru Bond Cleaning Gold Coast"
        twitterDescription="Gold Coast's most trusted bond cleaners. 1,000+ happy tenants. 100% Bond Back Guarantee. Fully insured & police-checked team."
      />

      {/* HERO */}
      <section className="hero-gradient py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="text-white/70 text-sm font-medium uppercase tracking-wider">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              About Tru Bond Cleaning Gold Coast
            </h1>
            <p className="text-white/80 max-w-xl mx-auto text-lg">
              Gold Coast locals helping Gold Coast tenants get their full bond
              back — one spotless clean at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.span
                variants={fadeUp}
                className="text-primary font-semibold text-sm uppercase tracking-wider"
              >
                How It All Started
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-5"
              >
                Born Right Here in Gold Coast
              </motion.h2>
              <motion.div
                variants={fadeUp}
                className="space-y-4 text-foreground/80 leading-relaxed"
              >
                <p>
                  Tru Bond Cleaning started as a small operation run by a local
                  Gold Coast family who'd had a bad experience of their own with
                  bond cleaning. Like many renters, they lost part of their bond
                  because a cleaner they hired didn't do the job properly. They
                  couldn't get their money back, and they couldn't get answers.
                </p>
                <p>
                  They decided to do something about it. They spent months
                  learning exactly what property managers in Gold Coast look for
                  during final inspections. They trained in professional
                  cleaning techniques, invested in commercial-grade equipment,
                  and built a detailed checklist based on the REIQ tenancy exit
                  standards. Then they started helping friends and family — and
                  word spread fast.
                </p>
                <p>
                  Today, Tru Bond Cleaning has helped over{" "}
                  <strong>1,000 Gold Coast tenants</strong> get their full bond
                  back. We've grown into a trusted local team of trained,
                  police-checked professionals who work 7 days a week across the
                  entire Gold Coast region — from Coolangatta to Coomera,
                  Surfers Paradise to Robina.
                </p>
                <p>
                  Our motto is simple:{" "}
                  <em>"We treat every property like it's our own home."</em>{" "}
                  That means careful, thorough, respectful cleaning every single
                  time. No shortcuts. No rushed jobs. Just a brilliant clean
                  that gets your bond back.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="/assets/generated/about-team.dim_800x500.jpg"
                alt="Tru Bond Cleaning Gold Coast team — professional, police-checked bond cleaners serving Gold Coast"
                className="rounded-2xl shadow-lg w-full object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-5 -right-5 bg-primary text-white p-5 rounded-xl shadow-lg hidden md:block">
                <p className="text-3xl font-bold">1,000+</p>
                <p className="text-sm text-white/80">Happy Customers</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 section-alt">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="text-center"
              >
                <p className="text-4xl font-bold text-primary mb-1">
                  {stat.number}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
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
              Our Commitment
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4"
            >
              What We Stand For
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp}>
                <Card className="card-hover h-full border-border">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                      <v.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">
                      {v.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {v.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-16 bg-foreground text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-14 h-14 text-primary mx-auto mb-5" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our 100% Bond Back Guarantee
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Every bond clean we complete comes with a full guarantee. If your
              property manager flags anything during the final inspection that
              falls within the scope of our clean, we return within 72 hours and
              re-clean it for free. No call-out fees. No arguments. No stress.
            </p>
            <ul className="text-left max-w-lg mx-auto space-y-3 mb-8">
              {[
                "Free re-clean within 72 hours if needed",
                "Covers all areas cleaned in the original service",
                "No extra call-out fees",
                "Valid for 7 days after the original clean",
                "Applies to all bond clean packages",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-white/80"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold"
              >
                <Link to="/contact">Book With Confidence</Link>
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
          </div>
        </div>
      </section>

      {/* AREAS WE SERVE */}
      <section className="py-16 section-alt">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Gold Coast Areas We Serve
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            We cover the entire Gold Coast region, from the northern suburbs all
            the way down to the Tweed border.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Surfers Paradise",
              "Broadbeach",
              "Southport",
              "Robina",
              "Burleigh Heads",
              "Coolangatta",
              "Coomera",
              "Helensvale",
              "Varsity Lakes",
              "Mudgeeraba",
              "Nerang",
              "Labrador",
              "Runaway Bay",
              "Hope Island",
              "Palm Beach",
              "Tugun",
              "Tallebudgera",
              "Currumbin",
              "Mermaid Beach",
              "Bundall",
            ].map((area) => (
              <span
                key={area}
                className="px-3 py-1.5 bg-white text-sm text-foreground/80 rounded-full border border-border shadow-xs"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
