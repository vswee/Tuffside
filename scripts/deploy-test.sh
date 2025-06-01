#!/bin/bash

# Tuffside Website - Local Deployment Test Script
# This script builds the project and serves it locally for testing

echo "🚗 Tuffside Website - Deployment Test"
echo "======================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "🔧 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

echo "✅ Build successful!"
echo "📁 Static files generated in 'out' directory"

# Check if serve is available globally
if command -v serve &> /dev/null; then
    echo "🌐 Starting local server..."
    echo "📍 Your site will be available at: http://localhost:3000"
    echo "🛑 Press Ctrl+C to stop the server"
    serve out -p 3000
else
    echo "📋 To test the built site locally, install 'serve' globally:"
    echo "   npm install -g serve"
    echo "   serve out -p 3000"
    echo ""
    echo "📁 Or upload the 'out' directory to Cloudflare Pages"
fi

echo ""
echo "🚀 Ready for deployment!"
echo "📖 See DEPLOYMENT.md for detailed deployment instructions"
