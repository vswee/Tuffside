# Facebook Integration Documentation

## Overview
The Tuffside website now includes a Facebook posts bentobox that automatically displays the latest posts from the Tuffside Facebook page. This integration uses Facebook's official Page Plugin for reliable, automatic updates.

## Implementation Details

### Facebook Page
- **Page URL**: https://www.facebook.com/profile.php?id=61576809067752
- **Integration Method**: Facebook Page Plugin (official)
- **Auto-updates**: Yes, posts update automatically

### Components Added

#### 1. FacebookBentobox Component
- **Location**: `src/components/FacebookBentobox.js`
- **Type**: Client component (uses `'use client'` directive)
- **Features**:
  - Displays latest Facebook posts in timeline format
  - Responsive design matching site aesthetic
  - Sidebar with connection info and quick actions
  - Hover effects and animations consistent with site design

#### 2. Styling
- **Location**: `src/components/FacebookBentobox.module.css`
- **Design**: Black background with white text, red accents
- **Layout**: Grid layout with Facebook widget and sidebar
- **Responsive**: Mobile-friendly with stacked layout on smaller screens

### Integration Points

#### Home Page
- **Location**: Between "Services Preview" and "Why Choose Us" sections
- **File**: `src/app/page.js`
- **Import**: Added FacebookBentobox component import and usage

#### Root Layout
- **File**: `src/app/layout.js`
- **Addition**: Added `<div id="fb-root"></div>` for Facebook SDK

### Technical Implementation

#### Facebook SDK Loading
```javascript
useEffect(() => {
  if (window.FB) {
    window.FB.XFBML.parse();
  } else {
    const script = document.createElement('script');
    script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);
  }
}, []);
```

#### Facebook Page Plugin Configuration
```html
<div 
  className="fb-page" 
  data-href="https://www.facebook.com/profile.php?id=61576809067752"
  data-tabs="timeline"
  data-width="500"
  data-height="600"
  data-small-header="true"
  data-adapt-container-width="true"
  data-hide-cover="false"
  data-show-facepile="false"
>
```

### Features

#### Bentobox Layout
1. **Main Facebook Widget**:
   - Shows latest posts from Tuffside Facebook page
   - Responsive width adaptation
   - Timeline view with posts, images, and videos

2. **Sidebar Elements**:
   - **Stay Connected Card**: Information about following the page
   - **Quick Actions**: Direct links to call, WhatsApp, and booking

#### Responsive Design
- **Desktop**: Side-by-side layout with Facebook widget and sidebar
- **Tablet**: Adjusted spacing and smaller sidebar
- **Mobile**: Stacked layout with full-width components

#### Visual Effects
- Hover animations with red accent color
- Sliding gradient effects on hover
- Consistent with existing site design patterns

### Benefits

1. **Automatic Updates**: Posts appear automatically without manual intervention
2. **Social Proof**: Shows active social media presence
3. **Engagement**: Encourages visitors to follow and interact
4. **Content Freshness**: Keeps website content dynamic and current
5. **Brand Consistency**: Matches site's black/white/red color scheme

### Maintenance

#### No Manual Updates Required
- Posts automatically sync from Facebook
- No API keys or tokens needed
- Uses Facebook's official plugin for reliability

#### Monitoring
- Check Facebook page regularly for appropriate content
- Ensure posts align with business messaging
- Monitor loading performance

### Performance Considerations

1. **Lazy Loading**: Facebook SDK loads only when needed
2. **Async Loading**: Script loads asynchronously to avoid blocking
3. **Responsive Images**: Facebook handles image optimization
4. **Caching**: Facebook manages content caching

### Troubleshooting

#### Common Issues
1. **Widget Not Loading**: Check internet connection and Facebook page privacy
2. **Styling Issues**: Verify CSS modules are loading correctly
3. **Mobile Display**: Test responsive breakpoints

#### Facebook Page Requirements
- Page must be public for widget to display
- Page should have recent posts for content to show
- Page URL must be correct and accessible

### Future Enhancements

#### Potential Improvements
1. Add loading states for better UX
2. Implement error handling for failed loads
3. Add analytics tracking for widget interactions
4. Consider adding Instagram feed integration

#### Customization Options
- Adjust widget height/width as needed
- Modify sidebar content based on business needs
- Update color scheme if brand guidelines change

## Testing

### Development Testing
```bash
npm run dev
```
Visit `http://localhost:3000` and scroll to the Facebook bentobox section.

### Production Testing
After deployment, verify:
1. Facebook widget loads correctly
2. Latest posts are displayed
3. Responsive design works on all devices
4. Links in sidebar function properly

## Deployment Notes

### Static Export Compatibility
- Facebook Page Plugin works with static exports
- No server-side rendering required for Facebook content
- Compatible with Cloudflare Pages deployment

### Environment Variables
No additional environment variables required for basic functionality.

### Build Process
Standard Next.js build process handles the integration:
```bash
npm run build
npm run export
```

The Facebook integration is now fully functional and will automatically display the latest posts from the Tuffside Facebook page in an attractive, responsive bentobox layout.
