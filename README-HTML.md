# Preferred Roofing & Exteriors - HTML Website

A modern, responsive HTML website for Preferred Roofing & Exteriors, LLC - Atlanta's trusted roofing contractor.

## 📁 File Structure

```
├── index.html              # Homepage
├── contact.html            # Contact page with form
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── main.js           # JavaScript for mobile menu and interactions
└── services/             # Service pages (to be created)
    ├── roof-replacement.html
    ├── roof-repair.html
    ├── roof-inspection.html
    ├── gutters.html
    ├── siding.html
    └── emergency.html
```

## 🎨 Features

- ✅ Fully responsive design (mobile-first)
- ✅ Modern, clean UI with smooth animations
- ✅ Mobile-friendly navigation menu
- ✅ Contact form with validation
- ✅ SEO optimized with proper meta tags
- ✅ Fast loading with optimized CSS
- ✅ Accessible design

## 📄 Pages Created

1. **index.html** - Complete homepage with:
   - Hero section
   - Trust signals
   - Services overview
   - Why choose us section
   - Testimonials
   - CTA section

2. **contact.html** - Contact page with:
   - Contact information cards
   - Contact form
   - Business hours
   - Service areas

## 📄 Pages To Create

The following pages need to be created following the same structure:

- `about.html` - About page
- `services.html` - Services index page
- `services/roof-replacement.html` - Roof replacement service page
- `services/roof-repair.html` - Roof repair service page
- `services/roof-inspection.html` - Roof inspection service page
- `services/gutters.html` - Gutter services page
- `services/siding.html` - Siding services page
- `services/emergency.html` - Emergency roofing page
- `gallery.html` - Project gallery
- `testimonials.html` - Customer testimonials
- `insurance-claims.html` - Insurance claims assistance

## 🚀 Usage

Simply open `index.html` in a web browser. No build process required!

For local development, you can use a simple HTTP server:
```bash
# Python 3
python -m http.server 8000

# Node.js (with http-server)
npx http-server

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 🎯 Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-600: #0284c7;
    --primary-700: #0369a1;
    /* ... */
}
```

### Content
All content is in the HTML files. Simply edit the HTML to update text, images, and links.

### Images
Replace placeholder Unsplash URLs with your actual images:
- Update `background-image` URLs in HTML
- Or add images to an `images/` folder and reference them

## 📞 Contact Information

Update these throughout the site:
- Phone: (706) 346-9577
- Email: info@preferredexteriors.com
- Location: Atlanta, Georgia

## 🔧 Form Submission

The contact form currently shows an alert on submission. To make it functional:

1. Set up a form handler (e.g., Formspree, Netlify Forms, or your own backend)
2. Update the form action in `contact.html`:
```html
<form action="https://your-form-handler.com/submit" method="POST">
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 Notes

- All pages use the same header and footer structure
- CSS is in a single file for easy maintenance
- JavaScript handles mobile menu and scroll effects
- No external dependencies except Google Fonts
