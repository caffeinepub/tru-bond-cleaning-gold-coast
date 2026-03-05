# Tru Bond Cleaning Gold Coast

## Current State
- 5 pages: Home, Services, About, Contact, FAQ
- SEO meta tags, Schema.org JSON-LD, FAQ accordion, contact form
- WhatsApp floating button, branded images for each service
- No suburb-specific pages exist on disk

## Requested Changes (Diff)

### Add
- 10 dedicated suburb landing pages for Gold Coast areas:
  - Surfers Paradise (`/bond-cleaning-surfers-paradise`)
  - Broadbeach (`/bond-cleaning-broadbeach`)
  - Southport (`/bond-cleaning-southport`)
  - Robina (`/bond-cleaning-robina`)
  - Burleigh Heads (`/bond-cleaning-burleigh-heads`)
  - Palm Beach (`/bond-cleaning-palm-beach`)
  - Varsity Lakes (`/bond-cleaning-varsity-lakes`)
  - Hope Island (`/bond-cleaning-hope-island`)
  - Coomera (`/bond-cleaning-coomera`)
  - Nerang (`/bond-cleaning-nerang`)
- Each suburb page must include:
  - Unique SEO title, meta description, keywords, canonical, OG/Twitter tags
  - Schema.org LocalBusiness JSON-LD with suburb-specific areaServed
  - Branded hero image with descriptive alt text
  - ~600-word suburb-specific content (h1, rental market profile, cleaning checklist, local tip, pricing table, suburb testimonial, CTA)
  - Internal link back to Home and Contact
- "Bond Cleaning Across Gold Coast" grid section on HomePage linking to all 10 suburb pages
- Suburb images already exist in /assets/generated/ for all 10 suburbs

### Modify
- App.tsx: add 10 new routes for suburb pages
- HomePage.tsx: add "Areas We Serve" suburb grid section with links
- Footer.tsx: add "Areas We Serve" column with suburb links

### Remove
- Nothing removed

## Implementation Plan
1. Create a shared SuburbPage component template to avoid code duplication
2. Create suburb-specific data for all 10 suburbs (content, SEO, image)
3. Register all 10 routes in App.tsx
4. Add suburb grid to HomePage (linked cards with suburb images)
5. Add "Areas We Serve" links to Footer
6. Validate build
