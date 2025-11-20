# BrightSpine Chiropractic - Demo Website

A conversion-focused one-page demo website for a local chiropractor clinic, built with Next.js, React, and Tailwind CSS.

## Purpose

This is a **demo site** created by Keyturn Studio to showcase website makeover capabilities for chiropractic clinics. It demonstrates modern web design principles with a focus on conversion optimization and user experience.

## Features

### 🎯 Conversion-Optimized Design
- Multiple strategically placed CTAs throughout the page
- Clear "Book appointment" and "Call clinic" buttons
- Data tracking attributes for analytics (`data-kt-event`)
- Smooth scroll navigation between sections

### 📱 Responsive & Mobile-First
- Optimized for mobile devices first
- Adapts beautifully to tablets and desktops
- Sticky header for easy navigation on all screen sizes

### 📄 Comprehensive Page Sections

1. **Sticky Header** - Persistent navigation with quick access to all sections
2. **Hero Section** - Compelling headline with clear value propositions
3. **Conditions Section** - 6 common pain conditions addressed
4. **Treatments Section** - 4 treatment approaches explained
5. **Why Choose Us** - Trust blocks and treatment journey timeline
6. **Testimonials** - 3 patient reviews with star ratings
7. **Pricing Section** - Transparent pricing for first visit and follow-ups
8. **Booking Form** - Complete appointment request form
9. **Location & Contact** - Address, hours, and map placeholder
10. **Footer** - Contact info and legal links

### 🎨 Design Philosophy
- Calm, professional, and reassuring tone
- Focus on benefits and outcomes over technical jargon
- Clean, modern aesthetic without being flashy
- High contrast CTAs for maximum visibility
- Suitable for mid- to upper-income demographic

## Tech Stack

- **Next.js 16** - React framework with app router
- **React 19** - Latest React version
- **TypeScript** - Type safety throughout
- **Tailwind CSS v4** - Utility-first CSS framework
- **PostCSS** - CSS processing

## Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm 10.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/badguy157/chiropractic-demo-site.git
cd chiropractic-demo-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
chiropractic-demo-site/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main demo page component
│   └── globals.css         # Global styles with Tailwind
├── public/                 # Static assets (currently none needed)
├── next.config.mjs         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── postcss.config.mjs     # PostCSS configuration
└── package.json           # Dependencies and scripts
```

## Customization

This demo site can be easily customized for actual clinic use:

1. **Branding**: Update clinic name, colors, and logo
2. **Content**: Replace placeholder text with real clinic information
3. **Images**: Add actual clinic photos and staff images
4. **Form**: Connect booking form to backend/CRM
5. **Map**: Replace map placeholder with Google Maps embed
6. **Contact**: Update phone numbers, email, and address
7. **Analytics**: Add Google Analytics or other tracking

## Key Components

### Interactive Features
- Smooth scroll navigation
- Working form with state management
- Responsive navigation menu
- Click tracking on CTAs

### Data Tracking
All major CTAs include tracking attributes:
- `data-kt-event="book_appointment_click"` - Booking buttons
- `data-kt-event="call_click"` - Call buttons/links

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Static site generation for optimal performance
- Minimal JavaScript bundle size
- CSS optimized with Tailwind's JIT compiler
- Fast page loads and smooth interactions

## License

This is a demo project created for showcase purposes.

## Contact

Created by **Keyturn Studio** for clinic website makeovers.

For inquiries about website makeovers for your clinic, please contact Keyturn Studio.
