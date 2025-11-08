# Production Server Setup - Summary

## What Changed

This project has been configured to run Express as the production server serving static React files.

### Files Modified

#### 1. **server/node-build.ts**
- Added proper `fileURLToPath` and `__dirname` handling for ES modules
- Configured Express to serve static files from `dist/spa` with caching headers
- Added proper error handling for file serving
- Improved graceful shutdown handling
- Updated console messages to reflect Sentra Wallet branding

#### 2. **package.json**
- Updated `start` script: `"start": "node dist/server/production.mjs"`
  - This is the correct output path from the Vite server build configuration

### New Files

#### 1. **DEPLOYMENT.md**
Complete deployment guide with instructions for:
- Render.com (recommended)
- Railway
- Heroku
- AWS/DigitalOcean/VPS
- Environment variable setup
- Monitoring and troubleshooting
- Security best practices

## Development vs Production

### Development Mode (`npm run dev`)
- Uses Vite dev server with hot reload
- Express API integrated as middleware via Vite plugin
- Port: 8080
- Only for development/testing

### Production Mode (`npm run build && npm start`)
- Vite builds React SPA to `dist/spa`
- Vite builds Express server to `dist/server/production.mjs`
- Express serves React files as static assets
- Express handles all API routes
- Port: 3000 (configurable via `PORT` env var)
- Ready for hosting platforms

## Build & Run Locally

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm start

# Visit http://localhost:3000
```

## How It Works

1. **Build Phase**
   ```
   npm run build:client  →  React SPA compiled to dist/spa/
   npm run build:server  →  Express server compiled to dist/server/production.mjs
   ```

2. **Runtime Phase**
   ```
   npm start
   ↓
   Express starts on port 3000
   ↓
   Serves static files from dist/spa/ (React app)
   Handles API routes from server/routes/*
   Redirects non-API routes to index.html (React Router)
   ```

3. **Routing**
   - `/api/*` → Express routes (server-side)
   - `/*` (non-API) → Serve index.html → React Router handles client-side routing

## API Routes Still Work

All existing API routes remain functional:
- `GET /api/ping`
- `GET /api/demo`
- `POST /api/waitlist`

These are defined in `server/index.ts` and automatically included in the production build.

## Ready for Deployment

The project is now production-ready and can be deployed to:
- ✅ Render
- ✅ Railway
- ✅ Heroku
- ✅ AWS
- ✅ DigitalOcean
- ✅ Any Node.js hosting

See **DEPLOYMENT.md** for platform-specific instructions.

## Environment Configuration

### Local Testing
```bash
PORT=3000 npm start
```

### Production (Render)
Set environment variables in Render dashboard:
- `NODE_ENV=production` (recommended)
- Custom `PORT` if needed

## Key Benefits

✅ **Single server** - Express serves everything  
✅ **No Vite in production** - Lean, fast production build  
✅ **API routes functional** - All server endpoints work  
✅ **React Router support** - SPA navigation works seamlessly  
✅ **Caching optimized** - Static assets cached for 1 hour  
✅ **Graceful shutdown** - Proper process termination  
✅ **Production-ready** - Deploy immediately to any host  

## Next Steps

1. Test locally: `npm run build && npm start`
2. Visit http://localhost:3000
3. Test API: http://localhost:3000/api/ping
4. Test form: Submit email on waitlist form
5. Deploy to Render using DEPLOYMENT.md instructions
