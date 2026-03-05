import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Loader2,
  MapPin,
  Phone,
} from "lucide-react";
import { type Variants, motion } from "motion/react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { SiWhatsapp } from "react-icons/si";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

// Hidden — never rendered in UI
const HIDDEN_DEST = ["humpty", "dumpty", "bond", "cleaning", "@gmail.com"].join(
  "",
);

const SERVICES = [
  "Bond Cleaning (End of Lease)",
  "Carpet Steam Cleaning",
  "Oven & Kitchen Deep Clean",
  "Window Cleaning",
  "Pressure Washing",
  "Move-In Cleaning",
  "Full Package (Bond + Carpet + Windows)",
  "Other / Not Sure",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ContactPage() {
  const { actor } = useActor();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleServiceChange = (value: string) => {
    setForm((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.service) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setStatus("loading");

    try {
      // Store enquiry on-chain
      if (actor) {
        await actor.submitEnquiry(
          form.name,
          form.email,
          form.phone,
          form.service,
          form.message,
        );
      }

      // Open customer's email client — FROM their account, TO hidden dest
      const subject = encodeURIComponent(
        `Bond Cleaning Enquiry — ${form.name}`,
      );
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`,
      );
      const mailtoLink = `mailto:${HIDDEN_DEST}?subject=${subject}&body=${body}`;
      window.open(mailtoLink, "_blank");

      setStatus("success");
      toast.success(
        "Enquiry submitted! Your email client will open to send your details.",
      );
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      setStatus("error");
      toast.error("Something went wrong. Please try again or WhatsApp us.");
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Contact Tru Bond Cleaning Gold Coast | Free Quote | 0488 841 883
        </title>
        <meta
          name="description"
          content="Get a free bond cleaning quote from Tru Bond Cleaning Gold Coast. Call 0488 841 883 or WhatsApp us for a fast response. Available 7 days a week across Gold Coast."
        />
        <meta
          name="keywords"
          content="contact bond cleaning Gold Coast, free bond cleaning quote Gold Coast, book bond cleaner Gold Coast, WhatsApp bond cleaning Gold Coast"
        />
        <meta
          property="og:title"
          content="Contact Tru Bond Cleaning Gold Coast | Free Quote"
        />
        <meta
          property="og:description"
          content="Get a free bond cleaning quote in Gold Coast. Call or WhatsApp 0488 841 883. Available 7 days a week. 100% Bond Back Guarantee."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://trubondcleaningbrisbane.com/contact"
        />
        <meta
          property="og:image"
          content="https://trubondcleaningbrisbane.com/assets/generated/contact-banner.dim_1200x400.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Tru Bond Cleaning Gold Coast"
        />
        <meta
          name="twitter:description"
          content="Free bond cleaning quote Gold Coast. Call 0488 841 883 or WhatsApp us. Available 7 days."
        />
        <link
          rel="canonical"
          href="https://trubondcleaningbrisbane.com/contact"
        />
      </Helmet>

      {/* HERO with banner image */}
      <section className="relative overflow-hidden">
        <img
          src="/assets/generated/contact-banner.dim_1200x400.jpg"
          alt="Contact Tru Bond Cleaning Gold Coast — get a free bond cleaning quote today"
          className="w-full h-56 md:h-72 object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 hero-gradient opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
              Get a Free Quote
            </h1>
            <p className="text-white/80 text-lg max-w-lg">
              Fill out the form below and we'll call you back within 2 hours
              with a clear, honest price.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 section-alt">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* FORM */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-border p-8"
            >
              <motion.h2
                variants={fadeUp}
                className="text-2xl font-bold text-foreground mb-2"
              >
                Book Your Bond Clean
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-muted-foreground text-sm mb-6"
              >
                All fields marked * are required. We'll respond within 2 hours.
              </motion.p>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  data-ocid="contact.success_state"
                  className="flex flex-col items-center text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Enquiry Sent!
                  </h3>
                  <p className="text-muted-foreground max-w-md mb-6">
                    Your email client should have opened to send your details.
                    We'll call you back within 2 hours with a free quote. If you
                    need a faster response, WhatsApp us directly.
                  </p>
                  <div className="flex gap-3">
                    <Button
                      onClick={() => setStatus("idle")}
                      variant="outline"
                      className="border-primary text-primary"
                    >
                      Submit Another Enquiry
                    </Button>
                    <Button
                      asChild
                      className="bg-green-500 hover:bg-green-600 text-white"
                    >
                      <a
                        href="https://wa.me/61488841883"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SiWhatsapp className="w-4 h-4 mr-2" />
                        WhatsApp Us Now
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <motion.div variants={fadeUp} className="space-y-1.5">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        data-ocid="contact.name.input"
                        placeholder="e.g. Sarah Mitchell"
                        value={form.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        className="border-input focus:border-primary"
                      />
                    </motion.div>
                    <motion.div variants={fadeUp} className="space-y-1.5">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        data-ocid="contact.email.input"
                        placeholder="e.g. sarah@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        className="border-input focus:border-primary"
                      />
                    </motion.div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <motion.div variants={fadeUp} className="space-y-1.5">
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        data-ocid="contact.phone.input"
                        placeholder="e.g. 0412 345 678"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        autoComplete="tel"
                        className="border-input focus:border-primary"
                      />
                    </motion.div>
                    <motion.div variants={fadeUp} className="space-y-1.5">
                      <Label className="text-sm font-medium">
                        Service Required *
                      </Label>
                      <Select
                        value={form.service}
                        onValueChange={handleServiceChange}
                      >
                        <SelectTrigger
                          data-ocid="contact.service.select"
                          className="border-input focus:border-primary"
                        >
                          <SelectValue placeholder="Select a service..." />
                        </SelectTrigger>
                        <SelectContent>
                          {SERVICES.map((svc) => (
                            <SelectItem key={svc} value={svc}>
                              {svc}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </motion.div>
                  </div>
                  <motion.div variants={fadeUp} className="space-y-1.5">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Additional Details
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      data-ocid="contact.message.textarea"
                      placeholder="Tell us about your property: number of bedrooms, bathrooms, any special requirements, your preferred date..."
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className="border-input focus:border-primary resize-none"
                    />
                  </motion.div>

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      data-ocid="contact.error_state"
                      className="flex items-center gap-2 text-destructive text-sm p-3 bg-destructive/10 rounded-lg"
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      Something went wrong. Please try again or WhatsApp us on
                      0488 841 883.
                    </motion.div>
                  )}

                  <motion.div variants={fadeUp}>
                    <Button
                      type="submit"
                      size="lg"
                      data-ocid="contact.submit_button"
                      disabled={status === "loading"}
                      className="w-full bg-brand-teal hover:bg-brand-teal-dark text-white font-bold text-base"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2
                            className="mr-2 h-5 w-5 animate-spin"
                            data-ocid="contact.loading_state"
                          />
                          Sending your enquiry...
                        </>
                      ) : (
                        "Submit — Get My Free Quote"
                      )}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-2">
                      Your email client will open to send your details. We'll
                      call you back within 2 hours.
                    </p>
                  </motion.div>
                </form>
              )}
            </motion.div>

            {/* CONTACT INFO */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="space-y-5"
            >
              {/* WhatsApp CTA */}
              <motion.div
                variants={fadeUp}
                className="bg-green-500 text-white rounded-2xl p-6 shadow-sm"
              >
                <SiWhatsapp className="w-8 h-8 mb-3" />
                <h3 className="font-bold text-lg mb-2">
                  Prefer to Chat on WhatsApp?
                </h3>
                <p className="text-green-100 text-sm mb-4">
                  Get a faster response by messaging us directly. We reply
                  within minutes during business hours.
                </p>
                <Button
                  asChild
                  className="w-full bg-white text-green-600 hover:bg-green-50 font-bold"
                >
                  <a
                    href="https://wa.me/61488841883"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Message Us on WhatsApp
                  </a>
                </Button>
              </motion.div>

              {/* Contact details */}
              <motion.div
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 border border-border shadow-sm space-y-4"
              >
                <h3 className="font-bold text-foreground mb-2">
                  Contact Details
                </h3>
                <div className="flex items-start gap-3 text-sm">
                  <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a
                      href="tel:0488841883"
                      className="text-primary hover:underline"
                    >
                      0488 841 883
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Service Area</p>
                    <p className="text-muted-foreground">
                      Gold Coast, Queensland, Australia
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Hours</p>
                    <p className="text-muted-foreground">
                      Monday – Sunday: 7:00am – 8:00pm
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Including public holidays
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Pricing Guide */}
              <motion.div
                variants={fadeUp}
                className="bg-secondary rounded-2xl p-6 border border-border"
              >
                <h3 className="font-bold text-foreground mb-3">
                  Pricing Guide
                </h3>
                <ul className="space-y-2 text-sm">
                  {[
                    ["Studio / 1 Bed", "$200–$300"],
                    ["2 Bedrooms", "$300–$450"],
                    ["3 Bedrooms", "$450–$600"],
                    ["4 Bedrooms", "$550–$750+"],
                    ["+ Carpet Clean", "+$80–$150/room"],
                    ["+ Windows", "+$50–$150"],
                  ].map(([size, price]) => (
                    <li
                      key={size}
                      className="flex justify-between items-center"
                    >
                      <span className="text-muted-foreground">{size}</span>
                      <span className="font-semibold text-foreground">
                        {price}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground mt-3">
                  * Final price depends on property size and condition.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
