# Educent Pro Public Portal

![Educent Pro Banner](https://imgix.cosmicjs.com/94367d80-baa3-11f0-99a9-bf79458e5b2e-photo-1509062522246-3755977927d7-1762394432219.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A sophisticated, enterprise-grade public portal for Educent Pro - a nationwide institute management platform built for schools and colleges. This application showcases real-time attendance tracking, comprehensive audits, and deterministic rewards systems while maintaining strict security boundaries.

## ✨ Features

- 🎯 **Dynamic Content Management** - All content managed through Cosmic CMS
- 🎓 **Role-Based Portals** - Dedicated interfaces for Students, Lecturers, Parents, and Principals
- 💰 **Flexible Pricing Tiers** - Student count-based pricing with monthly, yearly, and permanent options
- 📰 **Time-Based Announcements** - Automatic visibility based on date ranges
- 🧠 **Feature Showcase** - Rich markdown content with image support
- 💬 **Verified Testimonials** - Authenticated feedback from real institutions
- ❓ **Categorized FAQs** - Organized help content by category
- 📱 **Fully Responsive** - Optimized for all devices
- ♿ **Accessibility Compliant** - WCAG standards with keyboard navigation
- 🔒 **Security-First** - No admin panel exposure, strict content boundaries

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=690be3fdfb7423bbdde4b569&clone_repository=690be691fb7423bbdde4b5bf)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create the complete content control system for Educent Pro — a nationwide, multi-tenant institute management platform built for schools and colleges.
The goal is to establish a public-facing marketing and communication portal in Cosmic that is elegant, secure, accessible, and free of any admin-panel exposure.
This portal will act as the brand and information layer, while the separate Educent HQ backend handles secure institute logic, users, and rewards.

🌐 1. Cosmic Workspace Overview

Name the workspace "Educent Pro – Public Portal".
Generate two environments:

Staging (for preview and QA)

Production (for live public site)

Set environment variables:
BACKEND_API=https://api.eduentpro.in
STAGING_BADGE=true
HQ_DOMAIN=https://hq.eduentpro.in (for internal reference only; never display publicly).

🎯 2. Core Purpose

Design a polished, CEO-grade landing and content system that:

Represents Educent Pro as an institutional-scale brand.

Lets non-technical editors manage text, media, pricing, and updates safely.

Enforces workflow approvals, accessibility, and compliance.

Triggers backend webhooks for caching and audit logs.

Never exposes any admin or HQ access links to the public site.

🧩 3. Object Types to Generate

Create these structured content models with the exact fields and relations:

🏠 Site Settings (singleton)

siteTitle (text)

tagline (text)

primaryGradientStart (#3B82F6)

primaryGradientEnd (#7C3AED)

contactEmail (email)

socialLinks (array {platform, url})

metaDescription (text, 160 char max)

seoImage (media)

disableCosmicBranding (boolean)

canonicalDomain (text, required)

publishingControls { requirePublisherApproval = true }

💡 Hero Block (singleton)

headline ("Educent Pro — Run your Institute like a CEO")

subline ("Realtime attendance, audits & deterministic rewards in one platform.")

primaryCTA { label, type = openModal, target = createInstitute }

secondaryCTA { label = "See Demo", type = external, url = /demo }

heroImage (media + altText)

trustLogos (media array + licenseProof file per logo)

🎓 Panel Cards (collection)

role (enum: Student | Lecturer | Parent | Principal)

icon (media + altText)

roleColor (hex)

title (text)

subtitle (text)

loginAction (enum: openModal:student | openModal:lecturer | openModal:parent | openModal:principal)

priority (integer)

💰 Pricing Plans (collection)

planName (text)

monthlyBelow700 (currency)

monthlyAbove1200 (currency)

yearlyBelow700 (currency)

yearlyAbove1200 (currency)

permanentBelow700 (currency)

permanentAbove1200 (currency)

effectiveDate (date)

requiresAdminAck (boolean = true)

changeReason (text)

📰 Announcements (collection)

title (text)

body (rich text)

startDate (date)

endDate (date)

displayTarget (enum: public | students | parents | lecturers)

isActive (auto: true when today ∈ range)

🧠 Features (collection)

title (text)

summary (text)

body (rich text / markdown)

image (media + altText)

💬 Testimonials (collection)

authorName

authorRole

quote

instituteName

logo (media + altText)

verified (boolean = true required for publish)

❓ FAQs (collection)

question

answer

category

order (int)

📚 Docs / Resources (collection)

title

body (markdown)

file (media optional)

version

tags (array)

🔐 4. Security & Governance

No field may contain or generate links to Admin HQ.

All roles follow a Draft → Review → Publish workflow.

Only the Publisher role can publish to Production.

Accessibility validator runs automatically on publish (contrast / alt / heading order).

"Pricing Plan" and "Policy" objects require Admin acknowledgement before Production push.

Each publish/unpublish triggers webhook → ${BACKEND_API}/webhooks/cosmic.

Webhook payload: { objectType, objectId, revision, actor, timestamp, checksum, diff }.

Retries on failure (max 5, exponential backoff).

🧭 5. User Roles
Role	Capabilities
CEO (Admin)	Full access, can override Admin Ack gates
Publisher	Review + Publish
Editor	Create + Edit Drafts
Marketing	Manage Hero, Panel Cards, Pricing drafts
Media Manager	Upload media, add altText, verify licenses

All images require alt text and attribution before save.

🛰 6. Workflow & Preview

Draft preview tokens valid 24 hours.

Staging site must display a "STAGING PREVIEW — NOT LIVE" badge.

Publisher cannot publish if preview not validated.

Scheduled publishes align to Asia/Kolkata TZ.

Revision history kept 365 days; rollback enabled.

⚙️ 7. Automation & Integrations

On publish/unpublish, Cosmic → Backend webhook triggers:

CDN cache purge

Audit log record

Optional Slack notification to HQ Ops channel

On new media upload, Cosmic → Moderation Queue (webhook).

All metrics displayed on public pages must either:

originate from backend analytics (flag source = backend), or

display the "Sample Data" badge if source = editorial.

🎨 8. Design System Tokens

Colors:
Primary Gradient = #3B82F6 → #7C3AED
Student Blue #2563EB | Lecturer Green #10B981
Parent Orange #F97316 | Principal Purple #7C3AED
Danger #DC2626 | Surface #FFFFFF

Typography:
Inter Font Family
Headline XL 32/700
Headline L 24/600
Body 16/400
Small 12/400

Grid:
12-column responsive
Container widths 720 / 960 / 1140 px
Spacing 4 | 8 | 16 | 24 | 32 px
Motion curve cubic-bezier(.16,.84,.33,1)

📜 9. Landing Page Layout Definition

Sticky top nav: logo left → menu center → Sign In + Request Demo right.

Two-column hero:

Left 7/12 → headline + subline + CTAs + trust logos row.

Right 5/12 → 2×2 Panel Cards grid (hover lift effect).

Footer: legal links, social icons, copyright text, no Cosmic brand if disabled.

All buttons keyboard navigable and focus-ring visible.

🧩 10. Quality Checklist (before production)

✅ No Admin link present on public nav.
✅ All images have alt text and contrast ≥ 4.5:1.
✅ SEO meta + OG tags present.
✅ Publish workflow requires Publisher approval.
✅ Accessibility audit passes (no critical violations).
✅ Webhook logs show 200 ACK from backend.
✅ Pricing requires Admin ack if flag true.
✅ Homepage Lighthouse score > 90 performance / > 95 accessibility.
✅ "Built with Cosmic" hidden if flag true and terms allow.

🧾 11. Acceptance Condition

When the workspace generates successfully:

Staging preview renders all content and badges correctly.

Publish event creates a backend audit entry.

Public homepage is consistent, accurate, and admin-free.
Then mark build status = "Educent Pro Public Portal — Production Ready ✅".

🏁 Final Command

"Generate the full Educent Pro Public Portal in Cosmic exactly as described above.
Build every object, workflow, role, and integration.
Apply the design tokens, enforce validations, enable staging preview, trigger webhooks, and guarantee that the public site never exposes Admin HQ.
Deliver a compliant, accessible, high-trust content workspace ready for nationwide launch.""

### Code Generation Prompt

> "Based on the content model I created for Educent Pro, now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠 Technologies

- **Framework:** [Next.js 16](https://nextjs.org/) with App Router
- **CMS:** [Cosmic](https://www.cosmicjs.com/docs) for content management
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with custom design tokens
- **Typography:** Inter font family
- **Icons:** Custom SVG icons
- **Deployment:** Optimized for Vercel/Netlify

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun runtime
- Cosmic account with configured bucket
- Environment variables configured

### Installation

1. Clone the repository
2. Install dependencies:
```bash
bun install
```

3. Configure environment variables:
```bash
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## 📚 Cosmic SDK Examples

### Fetching Content
```typescript
const { objects: settings } = await cosmic.objects
  .find({ type: 'site-settings' })
  .props(['title', 'metadata'])
  .depth(1)
```

### Filtering with Metadata
```typescript
const { objects: announcements } = await cosmic.objects
  .find({ 
    type: 'announcements',
    'metadata.display_target': 'public'
  })
  .props(['title', 'slug', 'metadata'])
```

## 🔗 Cosmic CMS Integration

This application is fully integrated with [Cosmic](https://www.cosmicjs.com) for content management. All content types, including Site Settings, Hero Blocks, Panel Cards, Pricing Plans, Announcements, Features, Testimonials, FAQs, and Documentation are managed through the Cosmic dashboard.

## 🚢 Deployment

### Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

Configure the same environment variables in your deployment platform's dashboard.

---

Built with 💜 using [Cosmic](https://www.cosmicjs.com)
<!-- README_END -->