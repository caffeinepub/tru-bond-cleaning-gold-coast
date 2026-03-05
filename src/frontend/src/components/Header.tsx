import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", to: "/", ocid: "nav.home.link" },
  { label: "Services", to: "/services", ocid: "nav.services.link" },
  { label: "About", to: "/about", ocid: "nav.about.link" },
  { label: "FAQ", to: "/faq", ocid: "nav.faq.link" },
  { label: "Contact", to: "/contact", ocid: "nav.contact.link" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="/assets/generated/logo-transparent.dim_300x80.png"
            alt="Tru Bond Cleaning Gold Coast — Professional Bond Cleaners"
            className="h-12 w-auto object-contain"
            loading="eager"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid={link.ocid}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-md hover:bg-secondary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:0488841883"
            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            <Phone className="w-4 h-4" />
            0488 841 883
          </a>
          <Button
            asChild
            size="sm"
            className="hidden md:inline-flex bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold"
          >
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
          <button
            type="button"
            className="md:hidden p-2 rounded-md hover:bg-secondary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <nav className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={link.ocid}
                className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary rounded-md transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-border mt-1">
              <Button
                asChild
                className="w-full bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold"
              >
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  Get a Free Quote
                </Link>
              </Button>
              <a
                href="tel:0488841883"
                className="flex items-center justify-center gap-2 mt-2 text-sm font-semibold text-primary"
              >
                <Phone className="w-4 h-4" />
                0488 841 883
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
