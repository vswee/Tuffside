# Tuffside Website - Deployment Checklist

Use this checklist to ensure a successful deployment to Cloudflare Pages.

## Pre-Deployment Checklist

### ✅ Code Preparation
- [ ] All content is finalized and reviewed
- [ ] Images are optimized and properly sized
- [ ] All links are working correctly
- [ ] Contact information is accurate
- [ ] Business hours and services are up to date

### ✅ Environment Configuration
- [ ] Copy `.env.example` to `.env.local`
- [ ] Fill in all required environment variables:
  - [ ] `NEXT_PUBLIC_SITE_URL`
  - [ ] `NEXT_PUBLIC_PHONE`
  - [ ] `NEXT_PUBLIC_EMAIL`
  - [ ] `NEXT_PUBLIC_ADDRESS`
  - [ ] Social media URLs (if applicable)
  - [ ] Analytics tracking IDs (if applicable)

### ✅ Build Testing
- [ ] Run `npm run build` locally
- [ ] Verify build completes without errors
- [ ] Check that `out` directory is created
- [ ] Test the built site locally with `npm run preview`

### ✅ SEO and Meta Tags
- [ ] Page titles are descriptive and unique
- [ ] Meta descriptions are compelling
- [ ] Open Graph tags are configured
- [ ] Favicon is properly set
- [ ] Sitemap is generated (if needed)

## Deployment Steps

### Method 1: Direct Upload
- [ ] Build the project: `npm run build`
- [ ] Go to Cloudflare Pages dashboard
- [ ] Create new project → Upload assets
- [ ] Upload the entire `out` folder
- [ ] Configure custom domain (if applicable)

### Method 2: Git Integration
- [ ] Push code to Git repository
- [ ] Connect repository to Cloudflare Pages
- [ ] Configure build settings:
  - [ ] Build command: `npm run build`
  - [ ] Output directory: `out`
  - [ ] Node.js version: 18.x or later
- [ ] Add environment variables in Cloudflare dashboard
- [ ] Trigger first deployment

## Post-Deployment Checklist

### ✅ Functionality Testing
- [ ] All pages load correctly
- [ ] Navigation works properly
- [ ] Images display correctly
- [ ] Contact forms work (if applicable)
- [ ] Mobile responsiveness is maintained
- [ ] Loading speed is acceptable

### ✅ SEO and Analytics
- [ ] Submit sitemap to Google Search Console
- [ ] Verify Google Analytics tracking (if configured)
- [ ] Test social media sharing
- [ ] Check Core Web Vitals scores

### ✅ Security and Performance
- [ ] Security headers are applied
- [ ] HTTPS is working
- [ ] Caching is configured correctly
- [ ] CDN is distributing content globally

### ✅ Domain and DNS
- [ ] Custom domain is connected (if applicable)
- [ ] SSL certificate is active
- [ ] DNS records are properly configured
- [ ] www redirects work correctly

## Monitoring and Maintenance

### ✅ Ongoing Tasks
- [ ] Set up uptime monitoring
- [ ] Monitor Core Web Vitals
- [ ] Review analytics regularly
- [ ] Keep dependencies updated
- [ ] Regular content updates

## Troubleshooting

### Common Issues
- **Build fails**: Check ESLint errors, ensure all dependencies are installed
- **Images not loading**: Verify `images.unoptimized: true` in `next.config.mjs`
- **Routing issues**: Check `_redirects` file and trailing slash configuration
- **Environment variables not working**: Ensure they start with `NEXT_PUBLIC_`

### Support Resources
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Next.js Static Export Guide](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Deployment Guide](./DEPLOYMENT.md)

---

**Last Updated**: December 2024
**Next Review**: After each major update
