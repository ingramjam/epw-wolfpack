# Escondido Pop Warner (EPW) - Professional Web Redesign

A modern, professional web platform for Escondido Pop Warner youth football and cheer programs. Built with Next.js, React, and Tailwind CSS with a design inspired by the LA Chargers website.

## 🎯 Project Overview

This is a complete redesign of the EPW Wolfpack website with the following goals:

- **Professional Design**: Modern, clean interface inspired by professional sports organizations
- **User-Friendly Navigation**: Easy to find information and register
- **Mobile Responsive**: Works seamlessly on all devices
- **Fast Performance**: Optimized with Next.js 16 and Turbopack
- **Prominent CTA**: Easy registration and program information at the top
- **Content-First**: Latest announcements and important information always visible

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn installed

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the site.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                 # Home page
│   ├── layout.tsx               # Root layout with Header & Footer
│   ├── globals.css              # Global styles
│   ├── about/page.tsx           # About EPW
│   ├── programs/page.tsx        # Programs page (Flag, Tackle, Cheer)
│   ├── calendar/page.tsx        # Calendar & schedules
│   ├── news/page.tsx            # News & announcements
│   ├── board/page.tsx           # Leadership & board info
│   └── volunteer/page.tsx       # Volunteer opportunities
└── components/                  # Reusable React components
    ├── Header.tsx               # Navigation header
    ├── Footer.tsx               # Site footer
    ├── HeroSection.tsx          # Hero banner
    ├── AnnouncementBanner.tsx  # Urgent announcements
    └── ProgramCard.tsx          # Program cards
```

## 🎨 Key Features

### Pages

1. **Home** - Hero section with urgent announcements, programs overview, registration CTA
2. **Programs** - Detailed descriptions of Flag Football, Tackle Football, and Cheerleading
3. **About** - EPW history, mission, and values
4. **Calendar** - Season schedule and important dates
5. **News** - Latest updates and stories
6. **Leadership** - Board members and volunteer information
7. **Volunteer** - Volunteer opportunities and requirements

### Components

- **Responsive Header** - Mobile-friendly navigation with sticky positioning
- **Hero Banner** - Eye-catching landing section with registration CTA
- **Program Cards** - Beautiful cards showcasing each program
- **Announcement Banner** - Red urgent banner for time-sensitive info
- **Footer** - Links, social media, and contact info

## 🛠 Tech Stack

- **Framework**: Next.js 16.1.6 with TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Linting**: ESLint
- **Package Manager**: npm

## 🔗 Integration

### Registration System

The site integrates with StackSports for registration:
```
https://login.stacksports.com/login?client_id=612b0399b1854a002e427f78&redirect_uri=https://core-api.bluesombrero.com/login/redirect/portal/22184&app_name=Escondido+Pop+Warner&portalid=22184&instancekey=tshq
```

### External Links

- **EPW Store**: https://rebelsportsgroup.com/escondido_pop_warner/shop/home
- **Facebook**: https://www.facebook.com/profile.php?id=61573142541072
- **Instagram**: https://www.instagram.com/escondidopopwarner/
- **West Coast Conference**: https://www.wccpopwarner.com/
- **National Pop Warner**: https://www.popwarner.com/

## 📱 Responsive Design

The site is fully responsive and optimized for:
- Mobile (320px and up)
- Tablet (768px and up)
- Desktop (1024px and up)
- Large Desktop (1280px and up)

## 🎯 Design Inspiration

The design follows professional sports website standards inspired by the LA Chargers website:
- Clean, modern layout
- Strong color scheme (Blue and White)
- Clear hierarchy and navigation
- Prominent calls-to-action
- Professional photography and imagery
- Easy registration flow

## 📝 Content

All content is sourced from the original EPW website and includes:
- Program descriptions
- Historical information
- Team details
- News and announcements
- Links to social media and external resources

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables (if needed)
4. Deploy with one click

### Other Hosting

The site can be deployed to any Node.js hosting provider:

```bash
npm run build
npm start
```

## 📄 License

This project is for Escondido Pop Warner (EPW).

## 👥 Contributing

For questions or improvements, please contact the EPW leadership team.

---

**Built with ❤️ for Escondido Pop Warner**

