# EPW Wolfpack - Professional Web Redesign

## Project Overview

Complete redesign of Escondido Pop Warner (EPW) youth football website with a professional sports organization aesthetic inspired by the LA Chargers. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

**Status:** ✅ Production Ready

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Ready for Vercel or Node.js hosting

## Features Implemented

### Pages (8 Total)
- ✅ **Home** - Hero banner, announcement, programs overview, about section, registration CTA
- ✅ **Programs** - Detailed Flag Football, Tackle Football, Cheerleading pages
- ✅ **About** - EPW history, mission, values, statistics
- ✅ **Calendar** - Season schedule and key dates
- ✅ **News** - Latest announcements and updates
- ✅ **Leadership** - Board members and volunteer information
- ✅ **Volunteer** - Volunteer opportunities and requirements
- ✅ **404** - Not found page

### Components
- ✅ Header (responsive navigation with mobile menu)
- ✅ Footer (links, social media, contact info)
- ✅ HeroSection (full-width banner with CTAs)
- ✅ AnnouncementBanner (urgent registration notice)
- ✅ ProgramCard (reusable program cards with animations)

### Design Features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Professional color scheme (Blue/White)
- ✅ Smooth animations and transitions
- ✅ Accessibility-friendly
- ✅ SEO optimized metadata
- ✅ Clean typography and spacing

## Integration Points

- **Registration**: StackSports integration with prominent CTAs
- **Social Media**: Facebook, Instagram links in footer
- **Store**: Link to EPW merchandise store
- **Leagues**: West Coast Conference and National Pop Warner links
- **Content**: All sourced from original epwwolfpack.com

## Getting Started

### Development
```bash
npm install
npm run dev
# Open http://localhost:3000
```

### Production Build
```bash
npm run build
npm start
```

### Deployment to Vercel
1. Push to GitHub
2. Connect to Vercel
3. Deploy (builds automatically)

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   ├── about/page.tsx        # About EPW
│   ├── programs/page.tsx     # Programs details
│   ├── calendar/page.tsx     # Schedule
│   ├── news/page.tsx         # News & announcements
│   ├── board/page.tsx        # Leadership
│   └── volunteer/page.tsx    # Volunteer info
└── components/
    ├── Header.tsx            # Navigation
    ├── Footer.tsx            # Footer
    ├── HeroSection.tsx       # Hero banner
    ├── AnnouncementBanner.tsx # Announcement
    └── ProgramCard.tsx       # Program card
```

## Build Status

✅ **All pages compile successfully** (8/8 pages)
✅ **No TypeScript errors**
✅ **Responsive design verified**
✅ **Production optimized**

## Next Steps (Optional Enhancements)

- [ ] Custom logo image integration
- [ ] Hero section background images
- [ ] Admin dashboard for news/content management
- [ ] Testimonials section
- [ ] Photo gallery
- [ ] Team roster pages
- [ ] Game schedule with live scores
- [ ] Email newsletter integration
- [ ] Google Analytics setup
- [ ] SEO optimization

## Important Links

- **Original Site**: https://www.epwwolfpack.com
- **Registration**: https://login.stacksports.com/...
- **Store**: https://rebelsportsgroup.com/escondido_pop_warner/shop/home
- **Social**: Facebook & Instagram (@escondidopopwarner)

## Documentation

Full documentation available in README.md including:
- Installation instructions
- Project structure
- Tech stack details
- Deployment options
- Design inspiration notes

