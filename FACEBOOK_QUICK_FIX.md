# Facebook Posts Widget - Quick Fix Guide

## Problem
The Facebook posts widget is showing "Visit our Facebook page for the latest updates" instead of actual posts.

## Root Cause
Facebook Page Plugin doesn't work with `profile.php?id=` URLs. It requires a custom username.

## Quick Fix (5 minutes)

### 1. Set Up Facebook Page Username
1. Go to: https://www.facebook.com/profile.php?id=61576809067752
2. Click **Settings** → **Page Info**
3. Find **Username** section → Click **Edit**
4. Choose a username like: `tuffside` or `tuffsidegarage`
5. Save changes

### 2. Update Website Code
Once you have a username, edit `src/components/FacebookBentobox.js`:

**Find this section (around line 100):**
```javascript
{/* 
UNCOMMENT THIS SECTION ONCE YOU HAVE A CUSTOM USERNAME:

<div 
  className="fb-page" 
  data-href="https://www.facebook.com/YOUR_CUSTOM_USERNAME"
  ...
```

**Replace with:**
```javascript
<div 
  className="fb-page" 
  data-href="https://www.facebook.com/tuffside"  // Use your actual username
  data-tabs="timeline"
  data-width="500"
  data-height="600"
  data-small-header="true"
  data-adapt-container-width="true"
  data-hide-cover="false"
  data-show-facepile="false"
>
  <blockquote 
    cite="https://www.facebook.com/tuffside" 
    className="fb-xfbml-parse-ignore"
  >
    <a href="https://www.facebook.com/tuffside">
      Visit our Facebook page for the latest updates
    </a>
  </blockquote>
</div>
```

**And comment out or remove the setup instructions section (lines 40-97).**

### 3. Deploy
```bash
npm run build
npm run export
```

## Result
✅ Facebook posts will load automatically  
✅ Latest posts display in real-time  
✅ No more setup instructions shown  

## Alternative: Use a Third-Party Service

If you can't create a custom username, consider using:
- **SociableKIT** (free tier available)
- **EmbedSocial** 
- **Tagembed**

These services can work with numeric Facebook page IDs.

## Need Help?
The current implementation shows clear setup instructions to users, so the website is functional even without the fix. The Facebook integration will work perfectly once the username is set up.
