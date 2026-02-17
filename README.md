# The Loan Lady Club
### Where Lending Meets Education

**Joanna Perry, CEO and Senior Mortgage Broker | NMLS #243348**
Powered by Xpert Home Lending, Inc. | NMLS #2179191

---

## About This Site

This is the production website for The Loan Lady Club, a California-based residential mortgage brokerage. The site is built with Astro and Tailwind CSS and is designed to educate borrowers, drive consultation bookings, and establish Joanna Perry as the authoritative mortgage educator in the Sacramento market.

The site reflects the Buyer's Edge methodology: education first, sequenced process, consumer protection at every step.

---

## Tech Stack

- Framework: Astro 4.x
- Styling: Tailwind CSS 3.x
- Fonts: Playfair Display, Cormorant Garamond, Inter (Google Fonts)
- Deployment: Netlify (recommended) or Vercel
- Forms: Formspree (temporary, GoHighLevel integration planned)
- Scheduling: The Rad CRM booking widget (GoHighLevel)

---

## Project Structure

```
src/
  components/
    Header.astro
    Footer.astro
  layouts/
    Layout.astro
  pages/
    index.astro
    about.astro
    buyers-edge.astro
    first-time-buyers.astro
    heloc.astro
    investment-properties.astro
    va-loans.astro
    contact.astro
    privacy.astro
    terms.astro
    disclaimer.astro

public/
  images/
    loan-lady-logo-white.png
    loan-lady-logo-black.png
    theloanladyclublogocolorgoldtransparent.png
    joanna-headshot.jpg
    joanna-buyers-edge.jpg
    joanna-phone.png
    equal-housing-lender2.png
    equal-housing-opportunity.png
    Homes_for_Heroes_Logo.png
    Homes_For_Heroes_QR_Code_for_Joannas_affiliate_page.png
  robots.txt
  sitemap.xml
```

---

## Color System

```
warm-gold:   #C9A84C   (CTAs, icons, accent)
warm-cream:  #F5F0E8   (section backgrounds, cards)
charcoal:    #2C2C2C   (headings, body text)
white:       #FFFFFF   (primary backgrounds)
warm-taupe:  #D4C5B0   (borders, dividers)
```

---

## Typography

- Headings: Playfair Display (font-heading)
- Subheadings: Cormorant Garamond (font-serif)
- Body: Inter (font-sans)

---

## Pages Live

| Page | URL | Status |
|------|-----|--------|
| Homepage | / | Live |
| About | /about | Live |
| Buyer's Edge | /buyers-edge | Live |
| First-Time Buyers | /first-time-buyers | Live |
| Digital HELOC | /heloc | Live |
| Investment Properties | /investment-properties | Live |
| VA Loans | /va-loans | Live |
| Contact | /contact | Live |
| Privacy Policy | /privacy | Live |
| Terms of Use | /terms | Live |
| Disclaimer | /disclaimer | Live |

---

## Pages Planned (Phase 2)

| Page | URL |
|------|-----|
| Self-Employed / Non-QM | /self-employed |
| USDA Loans | /usda-loans |
| Renovation Loans | /renovation-loans |
| Homes for Heroes | /homes-for-heroes |
| Location pages (10) | /sacramento, /roseville, etc. |

---

## Scheduling CTA

All scheduling buttons point to:
```
https://link.theradcrm.com/widget/booking/3NaG5jwiaAoLvl0W0qNN
```

---

## Contact Form

Currently using Formspree pointed to joanna@loanlady.club. Replace with GoHighLevel embed when ready.

---

## SEO Setup

- sitemap.xml: public/sitemap.xml
- robots.txt: public/robots.txt
- Schema markup: LocalBusiness MortgageBroker JSON-LD in Layout.astro
- FAQ schema: buyers-edge.astro
- Google Search Console: submit sitemap after launch
- Google Business Profile: create or claim at business.google.com

---

## Compliance

All pages carry the following compliance language in the footer:

"The Loan Lady Club is a mortgage brokerage powered by Xpert Home Lending, Inc. NMLS 2179191. All loans subject to credit approval and property appraisal. Rates and terms subject to change. Not a commitment to lend. NMLS #2179191. Equal Housing Opportunity."

NMLS Consumer Access: https://www.nmlsconsumeraccess.org/

---

## Deployment (Netlify)

1. Push to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variable: `PUBLIC_SITE_URL=https://loanladyclub.com`
6. Connect custom domain in Netlify DNS settings

---

## Contact

**The Loan Lady Club**
Joanna Perry, NMLS #243348
9278 Madison Ave, Orangevale, CA 95662
(916) 708-8555
joanna@loanlady.club
https://loanladyclub.com

Powered by Xpert Home Lending, Inc. | NMLS #2179191 | DRE #02166758

---

*Last updated: February 2026*
