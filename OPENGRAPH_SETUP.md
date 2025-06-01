# OpenGraph Image Setup Documentation

## Overview
The Tuffside website now has a comprehensive OpenGraph (OG) image setup using the custom image located at `/public/images/og.png` (194,586 bytes). This ensures consistent, professional social media sharing across all platforms.

## OpenGraph Image Details

### Source Image
- **Location**: `/public/images/og.png`
- **Size**: 194,586 bytes
- **Recommended Dimensions**: 1200x630 pixels (Facebook/LinkedIn standard)
- **Format**: PNG (high quality, supports transparency)
- **Aspect Ratio**: 1.91:1 (optimal for most social platforms)

## Implementation

### 1. Next.js App Router Method
The OG image is configured using multiple approaches for maximum compatibility:

```javascript
// In src/app/layout.js
export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://tuffside.com'),
  openGraph: {
    title: "Tuffside Automotive Garage - Built to Last. Tuned to Perform.",
    description: "Professional automotive repair and maintenance services in Trinidad...",
    type: "website",
    locale: "en_US",
    siteName: "Tuffside Automotive Garage",
    images: [
      {
        url: '/images/og.png',
        width: 1200,
        height: 630,
        alt: 'Tuffside Automotive Garage - Professional automotive services in Trinidad',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tuffside Automotive Garage - Built to Last. Tuned to Perform.",
    description: "Professional automotive repair and maintenance services in Trinidad...",
    images: [
      {
        url: '/images/og.png',
        alt: 'Tuffside Automotive Garage - Professional automotive services in Trinidad',
      },
    ],
    creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || '@tuffside',
    site: process.env.NEXT_PUBLIC_TWITTER_HANDLE || '@tuffside',
  },
};
```

### 2. File-based Images (Next.js 13+ App Router)
- `src/app/opengraph-image.png` - Automatically served at `/opengraph-image.png`
- `src/app/twitter-image.png` - Automatically served at `/twitter-image.png`

### 3. Additional Meta Tags
```html
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:type" content="image/png" />
<meta name="twitter:image:alt" content="Tuffside Automotive Garage - Professional automotive services in Trinidad" />
```

## Platform Support

### Social Media Platforms
- ✅ **Facebook**: Uses OG image (1200x630 optimal)
- ✅ **LinkedIn**: Uses OG image (1200x627 optimal)
- ✅ **Twitter/X**: Uses Twitter card with large image
- ✅ **WhatsApp**: Uses OG image for link previews
- ✅ **Telegram**: Uses OG image for link previews
- ✅ **Discord**: Uses OG image for embeds
- ✅ **Slack**: Uses OG image for unfurls

### Search Engines
- ✅ **Google**: Uses OG image in search results and Knowledge Graph
- ✅ **Bing**: Uses OG image in search previews
- ✅ **DuckDuckGo**: Uses OG image in instant answers

## Build Output

After running `npm run build`, the following OG-related files are generated:
```
out/
├── opengraph-image.png    # App Router OG image (194,586 bytes)
├── twitter-image.png      # App Router Twitter image (194,586 bytes)
└── images/
    └── og.png            # Source OG image (194,586 bytes)
```

## Testing & Validation

### Social Media Debuggers
1. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
4. **WhatsApp Link Preview**: Share link in WhatsApp to test

### Testing Commands
```bash
# Build and test locally
npm run build
npm run preview

# Test specific URL
curl -I https://your-domain.com/opengraph-image.png
```

### Validation Checklist
- [ ] OG image loads correctly (200 status)
- [ ] Image dimensions are 1200x630
- [ ] Alt text is descriptive
- [ ] Image file size is reasonable (<500KB)
- [ ] Image displays correctly on Facebook
- [ ] Image displays correctly on Twitter
- [ ] Image displays correctly on LinkedIn

## SEO Benefits

### Social Media Marketing
- ✅ **Professional Appearance**: Consistent branding across all platforms
- ✅ **Higher Engagement**: Visual content increases click-through rates
- ✅ **Brand Recognition**: Custom image reinforces brand identity
- ✅ **Trust Building**: Professional images build credibility

### Search Engine Optimization
- ✅ **Rich Snippets**: Enhanced search result appearance
- ✅ **Knowledge Graph**: Better representation in Google's Knowledge Graph
- ✅ **Social Signals**: Social sharing contributes to SEO rankings

## Environment Variables

Configure these in your deployment:
```bash
NEXT_PUBLIC_SITE_URL=https://tuffside.com
NEXT_PUBLIC_TWITTER_HANDLE=@tuffside
```

## Troubleshooting

### Common Issues

1. **Image not showing on social media**:
   - Clear social media cache using platform debuggers
   - Verify image URL is accessible
   - Check image file size (should be <8MB for most platforms)

2. **Wrong image displaying**:
   - Social media platforms cache images for 24-48 hours
   - Use platform-specific debuggers to force refresh
   - Verify metadata is correctly set

3. **Image appears blurry**:
   - Ensure image is at least 1200x630 pixels
   - Use PNG format for better quality
   - Optimize image without losing quality

### Cache Clearing
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build

# Force social media cache refresh
# Use platform debuggers listed above
```

## Best Practices

### Image Design
- ✅ **High Contrast**: Ensure text is readable on all backgrounds
- ✅ **Brand Consistency**: Use brand colors and fonts
- ✅ **Mobile Friendly**: Consider how image looks on mobile devices
- ✅ **Text Overlay**: Keep important text away from edges (safe zone)

### Technical
- ✅ **File Size**: Keep under 500KB for fast loading
- ✅ **Format**: PNG for quality, JPG for smaller file size
- ✅ **Dimensions**: 1200x630 pixels (1.91:1 aspect ratio)
- ✅ **Alt Text**: Descriptive alternative text for accessibility

## Future Enhancements

### Potential Improvements
- [ ] Dynamic OG images per page/service
- [ ] A/B testing different OG images
- [ ] Seasonal or promotional OG images
- [ ] Video OG content for supported platforms

### Tools for OG Image Creation
- [Canva](https://www.canva.com/) - Easy drag-and-drop design
- [Figma](https://www.figma.com/) - Professional design tool
- [OG Image Generator](https://og-image.vercel.app/) - Programmatic generation
- [Social Image Generator](https://www.bannerbear.com/) - API-based generation

---

**Status**: ✅ Fully Configured
**Last Updated**: December 2024
**Next Review**: After any branding changes
