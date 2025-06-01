# Fix: Node.js Compatibility Error on Cloudflare Pages

## Error Message
```
Node.JS Compatibility Error
no nodejs_compat compatibility flag set

The page you've requested has been built using @cloudflare/next-on-pages, 
but hasn't been properly configured.
```

## Quick Fix

### Method 1: Set Compatibility Flag in Cloudflare Dashboard (Recommended)

1. **Go to your Cloudflare Pages project:**
   - Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to "Pages" in the sidebar
   - Select your Tuffside website project

2. **Access Functions settings:**
   - Click on "Settings" tab
   - Scroll down to "Functions" section
   - Look for "Compatibility flags"

3. **Add the nodejs_compat flag:**
   - **For Production environment:**
     - Click "Add flag" under Production
     - Type: `nodejs_compat`
     - Click "Save"
   
   - **For Preview environment:**
     - Click "Add flag" under Preview  
     - Type: `nodejs_compat`
     - Click "Save"

4. **Redeploy your site:**
   - Go to "Deployments" tab
   - Click "Retry deployment" on the latest deployment
   - Or trigger a new deployment by pushing code changes

### Method 2: Use Wrangler Configuration (Already Done)

The `wrangler.toml` file has been updated to include:
```toml
compatibility_flags = ["nodejs_compat"]
```

This should automatically set the flag, but sometimes manual configuration is needed.

## Verification

After applying the fix:

1. **Check the deployment:**
   - Wait for the deployment to complete
   - Visit your site URL
   - The error should be resolved

2. **Verify in dashboard:**
   - Go to Settings → Functions
   - Confirm `nodejs_compat` appears in both environments

## Why This Happens

- **Next.js Requirements**: Next.js applications on Cloudflare Pages require Node.js compatibility
- **Static Export**: Even with static export, some Next.js features need Node.js runtime compatibility
- **Cloudflare Pages**: The platform needs to know to enable Node.js compatibility for your project

## Prevention

To avoid this error in future deployments:

1. **Always include in wrangler.toml:**
   ```toml
   compatibility_flags = ["nodejs_compat"]
   ```

2. **Set flags during initial setup:**
   - Configure compatibility flags when first creating the project
   - Include in deployment checklist

3. **Document for team:**
   - Include in deployment documentation
   - Add to project setup instructions

## Alternative Solutions

If the above doesn't work:

### Option 1: Recreate the Project
1. Delete the current Cloudflare Pages project
2. Create a new one with proper configuration
3. Set compatibility flags during initial setup

### Option 2: Contact Support
- If the issue persists, contact Cloudflare Pages support
- Provide project details and error screenshots

## Related Documentation

- [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/functions/)
- [Next.js on Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [Compatibility Flags](https://developers.cloudflare.com/workers/configuration/compatibility-dates/)

---

**Status**: ✅ Fixed in project configuration
**Last Updated**: December 2024
