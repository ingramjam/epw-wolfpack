# EPW Wolfpack - Deployment Guide

## Overview

Your EPW Wolfpack website is now a **pure static HTML/CSS/JavaScript site**. This means you can deploy it to ANY web hosting provider without any build process, npm, or Node.js required.

## What You Have

### File Structure
```
index.html          - Home page
programs.html       - Programs details
about.html          - Organization info
calendar.html       - Season schedule
news.html           - News & announcements
community.html      - Community & volunteers
404.html            - Not found page

css/style.css       - Professional stylesheet (700+ lines)
js/main.js          - Vanilla JavaScript (no dependencies)
images/             - Image folder (optional)
```

### No Build Process
- ✅ No npm install needed
- ✅ No build step required
- ✅ No Node.js required
- ✅ Upload files directly and they work

## Deployment Options

### Option 1: Bluehost (Recommended for Beginners)

1. **Login to Bluehost**
   - Go to https://www.bluehost.com
   - Log in to your account

2. **Access File Manager**
   - Go to your cPanel
   - Click "File Manager"
   - Open the `public_html` folder

3. **Upload Files**
   - Click "Upload" or use drag-and-drop
   - Upload ALL files and folders (index.html, programs.html, css/, js/, etc.)
   - Maintain the folder structure

4. **Your Site is Live**
   - Visit your domain
   - All pages accessible immediately
   - No build process needed

### Option 2: GoDaddy

1. **Login to GoDaddy**
   - Go to https://www.godaddy.com
   - Log in and go to "My Products"

2. **File Manager or FTP**
   - Click your domain
   - Use File Manager or FTP tool
   - Navigate to domain root folder

3. **Upload Files**
   - Upload all HTML files to root
   - Upload css/ and js/ folders to root
   - Maintain folder structure

4. **Set Default Page**
   - If needed, set `index.html` as default

5. **Your Site is Live**
   - Visit your domain

### Option 3: GitHub Pages (Free)

1. **Create GitHub Repo**
   ```bash
   cd /Users/James/EPW\ Wolcpack
   git remote set-url origin https://github.com/yourusername/epw-wolfpack.git
   git push origin main
   ```

2. **Enable Pages**
   - Go to Settings → Pages
   - Set source to "main branch"
   - Save

3. **Your Site is Live**
   - Available at: https://yourusername.github.io/epw-wolfpack

### Option 4: Netlify (Easiest for GitHub)

1. **Connect GitHub**
   - Go to https://www.netlify.com
   - Click "Connect to Git"
   - Authorize GitHub

2. **Select Repository**
   - Choose epw-wolfpack repo
   - Netlify detects the static site automatically

3. **Deploy**
   - Just click Deploy
   - Site goes live in seconds
   - No build configuration needed

4. **Custom Domain**
   - Go to Settings
   - Add your custom domain
   - Update DNS records

### Option 5: AWS S3

1. **Create S3 Bucket**
   - AWS Console → S3
   - Create new bucket with domain name

2. **Upload Files**
   - Upload all files maintaining structure
   - All files set to public

3. **Enable Static Website Hosting**
   - Bucket → Properties
   - Static website hosting
   - Index document: `index.html`
   - Error document: `404.html`

4. **Make Public**
   - Bucket Policy → Allow public read

5. **Your Site is Live**
   - Use S3 endpoint or connect custom domain

### Option 6: Vercel (Same as GitHub Pages)

1. **Import Project**
   - https://vercel.com/import
   - Select GitHub repo

2. **Configure**
   - Framework: Static Site
   - Vercel auto-detects

3. **Deploy**
   - Click Deploy
   - Live in seconds

## For Your Bluehost Account

### If You Already Have Bluehost

1. **SSH/FTP Access**
   ```bash
   ftp your-domain.com
   # Or use SSH if available
   ```

2. **Upload to public_html**
   ```
   public_html/
   ├── index.html
   ├── programs.html
   ├── about.html
   ├── calendar.html
   ├── news.html
   ├── community.html
   ├── 404.html
   ├── css/
   │   └── style.css
   └── js/
       └── main.js
   ```

3. **Verify Domain**
   - Visit your domain
   - All pages should work
   - Links navigate correctly

## Testing Locally Before Upload

### Test on Your Computer

#### Option 1: Simple HTTP Server
```bash
# Python 3
cd /Users/James/EPW\ Wolcpack
python -m http.server 8000

# Then open http://localhost:8000
```

#### Option 2: Node.js
```bash
# Install http-server globally (once)
npm install -g http-server

# Run from project folder
cd /Users/James/EPW\ Wolcpack
http-server

# Visit http://localhost:8080
```

#### Option 3: Just Open in Browser
```bash
# Simply double-click index.html or:
open /Users/James/EPW\ Wolcpack/index.html
```

## What Gets Deployed

### HTML Files
- `index.html` - Home page with hero, programs, about, CTA
- `programs.html` - Detailed program information with divisions
- `about.html` - Organization history and values
- `calendar.html` - Season schedule timeline
- `news.html` - News articles and updates
- `community.html` - Volunteer and leadership info
- `404.html` - Error page

### CSS
- `css/style.css` - Complete professional stylesheet
  - Responsive design
  - Chargers-inspired colors
  - Mobile-first approach
  - No dependencies

### JavaScript
- `js/main.js` - Lightweight interactivity
  - Mobile menu toggle
  - Smooth scrolling
  - Header effects
  - 50 lines, no dependencies

## Domain Setup

### Using Your Existing Domain

1. **Update DNS Records**
   - Login to your domain provider
   - Point nameservers to host (Bluehost, GoDaddy, etc.)
   - Or update A records to host's IP

2. **Wait for Propagation**
   - Usually 24-48 hours
   - Check: https://www.whatsmydns.net

3. **Visit Your Domain**
   - Site should load immediately
   - No build step on the server

## Hosting Comparisons

| Provider | Cost | Ease | Speed | Best For |
|----------|------|------|-------|----------|
| Bluehost | $3-5/mo | ⭐⭐⭐ | ⭐⭐⭐ | Beginners |
| GoDaddy | $5-7/mo | ⭐⭐⭐ | ⭐⭐⭐ | Domain owners |
| Netlify | Free - $19/mo | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Developers |
| GitHub Pages | Free | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Developers |
| AWS S3 | $1-3/mo | ⭐⭐ | ⭐⭐⭐⭐ | Scalable |
| Vercel | Free - $20/mo | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Best performance |

## Important Notes

### No Build Process
- Upload files as-is
- They work immediately
- No `npm run build` needed
- No waiting for builds

### Folder Structure Matters
- `css/style.css` must be in css folder
- `js/main.js` must be in js folder
- Keep same structure everywhere

### All Links Work
- Navigation links point to other HTML files
- Social media links to Facebook, Instagram, YouTube
- Registration link to StackSports
- All embedded in the HTML

### SEO Ready
- Meta descriptions for each page
- Proper heading hierarchy
- Semantic HTML
- Mobile responsive
- Fast loading (no framework overhead)

## Troubleshooting

### Pages Not Loading
- Check file names (case-sensitive on Linux)
- Verify all files uploaded
- Check folder structure

### Styles Not Appearing
- Check css/ folder exists
- Verify css/style.css is uploaded
- Check file permissions (should be 644)

### Links Not Working
- Use relative paths (e.g., `programs.html`)
- Don't use absolute paths on test server
- Check spelling of filenames

### Mobile Menu Not Working
- Verify js/ folder exists
- Check js/main.js is uploaded
- JavaScript should be enabled in browser

## Need Help?

### Bluehost Support
- Live chat in cPanel
- Phone support included
- Email support

### Your Contacts
- Email: ingramjam@gmail.com
- GitHub: https://github.com/ingramjam

---

**That's it!** Your site is ready to go live. Just pick a hosting provider and upload the files. No build process, no npm, no complexity. Pure HTML/CSS/JavaScript that works everywhere.
