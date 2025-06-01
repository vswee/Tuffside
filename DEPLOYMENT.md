# Tuffside Website - Cloudflare Pages Deployment Guide

This guide will help you deploy the Tuffside website to Cloudflare Pages.

## Prerequisites

1. **Cloudflare Account**: Sign up at [cloudflare.com](https://cloudflare.com)
2. **Git Repository**: Your code should be in a Git repository (GitHub, GitLab, etc.)
3. **Domain** (Optional): If you want to use a custom domain

## Deployment Methods

### Method 1: Direct Upload (Recommended for first deployment)

1. **Build the project locally:**
   ```bash
   npm run build
   ```

2. **Upload to Cloudflare Pages:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to "Pages" in the sidebar
   - Click "Create a project"
   - Choose "Upload assets"
   - Upload the `out` folder that was created by the build

### Method 2: Git Integration (Recommended for ongoing deployments)

1. **Connect your repository:**
   - Go to Cloudflare Pages dashboard
   - Click "Create a project"
   - Choose "Connect to Git"
   - Select your repository

2. **Configure build settings:**
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (or leave empty)

3. **Environment variables** (if needed):
   - Add any environment variables from `.env.example`
   - Set `NODE_ENV=production`

## Configuration Details

### Build Settings
- **Build Command**: `npm run build`
- **Output Directory**: `out`
- **Node.js Version**: 18.x or later

### Environment Variables
Copy variables from `.env.example` and set them in Cloudflare Pages:
- `NEXT_PUBLIC_SITE_URL`: Your production domain
- `NEXT_PUBLIC_PHONE`: Business phone number
- `NEXT_PUBLIC_EMAIL`: Business email
- Add others as needed

## Custom Domain Setup

1. **Add your domain:**
   - In Cloudflare Pages, go to your project
   - Click "Custom domains"
   - Add your domain

2. **DNS Configuration:**
   - Add a CNAME record pointing to your Pages domain
   - Or use Cloudflare as your DNS provider for automatic setup

## Performance Optimization

The site is configured with:
- ✅ Static export for fast loading
- ✅ Image optimization disabled (required for static export)
- ✅ Proper caching headers
- ✅ Security headers
- ✅ Gzip compression (automatic with Cloudflare)

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure no server-side features are used
- Verify all images are properly imported

### Images Not Loading
- Make sure `images.unoptimized: true` is set in `next.config.mjs`
- Use relative paths for images in the `public` folder

### Routing Issues
- Ensure `trailingSlash: true` is set in `next.config.mjs`
- Check `_redirects` file for proper routing rules

### Environment Variables Not Working
- Only `NEXT_PUBLIC_*` variables work in static export
- Set variables in Cloudflare Pages dashboard
- Rebuild after adding new variables

## Monitoring and Analytics

1. **Cloudflare Analytics**: Available in your Cloudflare dashboard
2. **Google Analytics**: Add your tracking ID to environment variables
3. **Core Web Vitals**: Monitor in Google Search Console

## Security

The deployment includes:
- Security headers via `_headers` file
- Content Security Policy
- XSS protection
- Frame options protection

## Support

For deployment issues:
1. Check Cloudflare Pages documentation
2. Review build logs in Cloudflare dashboard
3. Verify all configuration files are correct
