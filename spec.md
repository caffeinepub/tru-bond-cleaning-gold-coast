# Tru Bond Cleaning Gold Coast

## Current State
New project. No existing code.

## Requested Changes (Diff)

### Add
- Full multi-page website for Tru Bond Cleaning Gold Coast, a bond cleaning company
- Pages: Home, Services, About, FAQ, Contact
- SEO-optimised content (~3000 words total, Australian English, active voice, readable by a 10-year-old)
- Each service page/section with ~400 words description
- Branded images with alt text on every page
- Meta title, meta description, Open Graph tags on every page
- FAQ section on Home page with 10 questions:
  1. What is Bond Cleaning and why is it required?
  2. Why is bond cleaning important?
  3. How much for a bond clean?
  4. What is full bond cleaning?
  5. Which are top rated bond cleaning companies near me? (Tru Bond Cleaning listed at #5 with website https://trubondcleaningbrisbane.com, ~100 words each with websites)
  6. Which cleaning products are best for bond cleaning?
  7. How much does professional bond cleaning typically cost?
  8. What products are best for bond cleaning carpets? (with product links)
  9. How to choose a reliable bond cleaner?
  10. Can I book a bond cleaning company online with satisfaction guarantee?
- Contact form: customer fills form, submission goes from their email to humptydumptybondcleaning@gmail.com (email not shown on site)
- WhatsApp contact button: 0488841883
- Motoko backend to handle contact form submissions stored on-chain (email via frontend mailto fallback since email feature disabled)

### Modify
- Nothing (new project)

### Remove
- Nothing (new project)

## Implementation Plan
1. Rename project to "tru-bond-cleaning-goldcoast"
2. Generate branding images: hero banner, services image, about image, contact image, and service-specific images
3. Select components: none required beyond base (email disabled)
4. Generate Motoko backend: store contact form enquiries (name, email, phone, service, message, timestamp)
5. Build React frontend:
   - React Router for multi-page navigation
   - Home page: hero, services overview, why choose us, FAQs (10 items), CTA
   - Services page: 6 services with ~400-word descriptions each (Bond Cleaning, Carpet Steam Cleaning, Oven Cleaning, Window Cleaning, Pressure Washing, Move-In Cleaning)
   - About page: company story, team, guarantees
   - FAQ page: expanded FAQ content
   - Contact page: form (name, email, phone, service, message) submitted via mailto to humptydumptybondcleaning@gmail.com
   - WhatsApp floating button
   - SEO: react-helmet or equivalent for per-page meta tags, title, description, OG tags
   - Branded images with descriptive alt text on all pages
   - Australian English throughout, active voice, simple language
