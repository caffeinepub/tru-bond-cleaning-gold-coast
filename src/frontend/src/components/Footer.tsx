import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone, Shield, Star } from "lucide-react";
import { SiFacebook, SiGoogle, SiWhatsapp } from "react-icons/si";
import { suburbs } from "../data/suburbs";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-foreground text-white">
      {/* Trust Banner */}
      <div className="bg-brand-teal py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-white">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              100% Bond Back Guarantee
            </span>
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              5-Star Rated
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Available 7 Days a Week
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-2">
            <img
              src="/assets/generated/logo-transparent.dim_300x80.png"
              alt="Tru Bond Cleaning Gold Coast logo"
              className="h-12 w-auto object-contain mb-4 brightness-0 invert"
              loading="lazy"
            />
            <p className="text-white/70 text-sm leading-relaxed mb-4 max-w-sm">
              Gold Coast's most trusted bond cleaning specialists. We help
              tenants get their full bond back with our 100% Satisfaction
              Guarantee. Fully insured, police-checked, and eco-friendly.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tru Bond Cleaning on WhatsApp"
                className="w-9 h-9 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center transition-colors"
              >
                <SiWhatsapp className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tru Bond Cleaning on Facebook"
                className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center transition-colors"
              >
                <SiFacebook className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tru Bond Cleaning reviews on Google"
                className="w-9 h-9 rounded-full bg-red-500 hover:bg-red-400 flex items-center justify-center transition-colors"
              >
                <SiGoogle className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", to: "/" },
                { label: "Our Services", to: "/services" },
                { label: "About Us", to: "/about" },
                { label: "FAQ", to: "/faq" },
                { label: "Get a Quote", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Bond Cleaning</li>
              <li>Carpet Steam Cleaning</li>
              <li>Oven & Kitchen Deep Clean</li>
              <li>Window Cleaning</li>
              <li>Pressure Washing</li>
              <li>Move-In Cleaning</li>
            </ul>
          </div>

          {/* Areas We Serve */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Areas We Serve
            </h3>
            <ul className="space-y-2 text-sm">
              {suburbs.map((suburb) => (
                <li key={suburb.slug}>
                  <Link
                    to={suburb.path as "/"}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {suburb.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 text-sm text-white/60">
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            <a
              href="tel:0488841883"
              className="hover:text-white transition-colors"
            >
              0488 841 883
            </a>
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            Gold Coast, Queensland, Australia
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            Mon–Sun: 7:00am – 8:00pm
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>
            &copy; {year} Tru Bond Cleaning Gold Coast. All rights reserved.
          </p>
          <p>
            Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
