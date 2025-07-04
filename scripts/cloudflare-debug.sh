#!/bin/bash

# Cloudflare Pages Debug Script for Tuffside Website
# This script helps diagnose deployment issues

echo "🔍 Tuffside Cloudflare Pages Debug Script"
echo "=========================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Run this script from the project root directory"
    exit 1
fi

echo "✅ Project directory confirmed"

# Check Node.js version
echo ""
echo "📋 Environment Information:"
echo "Node.js version: $(node --version)"
echo "npm version: $(npm --version)"

# Check package.json
echo ""
echo "📦 Package Information:"
echo "Project name: $(node -p "require('./package.json').name")"
echo "Next.js version: $(node -p "require('./package.json').dependencies.next")"

# Check Next.js configuration
echo ""
echo "⚙️  Next.js Configuration:"
if [ -f "next.config.mjs" ]; then
    echo "✅ next.config.mjs exists"
    echo "Output mode: $(grep -o "output: '[^']*'" next.config.mjs || echo "Not found")"
    echo "Images unoptimized: $(grep -o "unoptimized: [^,]*" next.config.mjs || echo "Not found")"
else
    echo "❌ next.config.mjs not found"
fi

# Check Cloudflare configuration
echo ""
echo "☁️  Cloudflare Configuration:"
if [ -f "wrangler.toml" ]; then
    echo "✅ wrangler.toml exists"
    echo "Compatibility flags: $(grep -o 'compatibility_flags = \[.*\]' wrangler.toml || echo "Not found")"
else
    echo "❌ wrangler.toml not found"
fi

# Check build output
echo ""
echo "🏗️  Build Status:"
if [ -d "out" ]; then
    echo "✅ Build output directory exists"
    echo "Files in out/: $(ls -la out/ | wc -l) items"
    
    if [ -f "out/index.html" ]; then
        echo "✅ index.html exists"
        echo "Size: $(du -h out/index.html | cut -f1)"
    else
        echo "❌ index.html missing"
    fi
    
    if [ -f "out/_headers" ]; then
        echo "✅ _headers file exists"
    else
        echo "❌ _headers file missing"
    fi
    
    if [ -f "out/_redirects" ]; then
        echo "✅ _redirects file exists"
    else
        echo "❌ _redirects file missing"
    fi
else
    echo "❌ Build output directory missing - run 'npm run build' first"
fi

# Test build
echo ""
echo "🧪 Testing Build Process:"
echo "Running 'npm run build'..."

if npm run build > build.log 2>&1; then
    echo "✅ Build successful"
    echo "Build log saved to build.log"
else
    echo "❌ Build failed"
    echo "Last 10 lines of build log:"
    tail -10 build.log
fi

echo ""
echo "🎯 Recommendations:"
echo "1. Ensure nodejs_compat flag is set in Cloudflare Pages dashboard"
echo "2. Verify build command is 'npm run build' and output directory is 'out'"
echo "3. Check that NODE_ENV=production is set in environment variables"
echo "4. If issues persist, try recreating the Cloudflare Pages project"

echo ""
echo "📚 Useful Links:"
echo "- Cloudflare Dashboard: https://dash.cloudflare.com"
echo "- Next.js on Cloudflare: https://developers.cloudflare.com/pages/framework-guides/nextjs/"
echo "- Deployment Guide: ./DEPLOYMENT.md"
echo "- Node.js Fix Guide: ./NODEJS_COMPAT_FIX.md"

echo ""
echo "✨ Debug complete!"
