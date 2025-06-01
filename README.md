# Tuffside Website

A professional automotive services website built with Next.js, featuring a modern design with black background and white text aesthetic.

## Features

- 🚗 Professional automotive business website
- 🎨 Black background with white text design
- 📱 Responsive design with greedy navigation
- ⚡ Optimized for Cloudflare Pages deployment
- 🔒 Security headers and performance optimization
- 📊 Analytics ready (Google Analytics support)

## Tech Stack

- **Framework**: Next.js 15.3.3 with App Router
- **Styling**: CSS Modules
- **Fonts**: Mr Dafoe (brand), Inter (body text)
- **Deployment**: Cloudflare Pages (static export)
- **Performance**: Optimized for Core Web Vitals

## Getting Started

### Development

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd tuffside-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your actual values
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.**

### Building for Production

```bash
npm run build
```

This creates an optimized static export in the `out` directory, ready for deployment to Cloudflare Pages.

## Deployment

This website is optimized for deployment on **Cloudflare Pages**. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Cloudflare Pages:**
   - Upload the `out` folder to Cloudflare Pages
   - Or connect your Git repository for automatic deployments

### Environment Variables

Copy `.env.example` to `.env.local` and configure:
- `NEXT_PUBLIC_SITE_URL`: Your production domain
- `NEXT_PUBLIC_PHONE`: Business phone number
- `NEXT_PUBLIC_EMAIL`: Business email
- Other business and analytics variables

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── about/          # About page
│   ├── services/       # Services page
│   ├── bookings/       # Bookings page
│   ├── contact/        # Contact page
│   ├── testimonials/   # Testimonials page
│   ├── layout.js       # Root layout
│   └── page.js         # Home page
├── components/         # Reusable components
│   ├── Header.js       # Navigation header
│   ├── Footer.js       # Site footer
│   ├── CTAButtons.js   # Call-to-action buttons
│   └── BookingCard.js  # Booking card component
public/
├── images/             # Static images
├── _headers            # Cloudflare Pages headers
└── _redirects          # Cloudflare Pages redirects
```

## Design System

- **Brand Font**: Mr Dafoe (for "Tuffside" brand name)
- **Body Font**: Inter (for all other text)
- **Color Scheme**: Black background with white text
- **Navigation**: Greedy navigation with dynamic collapsing

## Performance

- ✅ Static export for optimal loading speed
- ✅ Optimized images and assets
- ✅ Proper caching headers
- ✅ Security headers included
- ✅ Core Web Vitals optimized

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
