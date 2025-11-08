# Sentra Wallet - Production Deployment Guide

This guide explains how to deploy the Sentra Wallet application to production hosting platforms like Render, Railway, or Heroku.

## Architecture Overview

The application uses:
- **Frontend**: React SPA built with Vite (outputs to `dist/spa`)
- **Backend**: Express.js server that serves the React build as static files (outputs to `dist/server`)
- **Development**: Vite dev server with integrated Express middleware (only during `npm run dev`)
- **Production**: Express.js serves both API routes and static React files

## Build Process

```bash
# Full build (run this before deployment)
npm run build

# This runs:
# 1. npm run build:client  - Builds React SPA to dist/spa
# 2. npm run build:server  - Builds Express server to dist/server
```

## Running Production Server

After building, start the server with:

```bash
npm start
```

The server will:
- Serve the React build from `dist/spa` as static files
- Handle all API routes (`/api/*`)
- Redirect non-API routes to `index.html` for React Router navigation
- Listen on the port specified by `PORT` environment variable (default: 3000)

## Deployment to Render

### Step 1: Connect Your Repository
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository

### Step 2: Configure the Service
- **Name**: `sentra-wallet` (or your preferred name)
- **Environment**: `Node`
- **Region**: Choose closest to your users
- **Branch**: `main` (or your deployment branch)
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`

### Step 3: Environment Variables
Add any required environment variables in the Render dashboard (Settings → Environment):
- `NODE_ENV=production`
- `PORT=3000` (Render will set this automatically)

### Step 4: Deploy
Click "Create Web Service" and Render will automatically:
1. Install dependencies
2. Build the project (client + server)
3. Start the production server

## Deployment to Other Platforms

### Railway
```bash
# railway link (authenticate)
# railway up
```

**railway.json** settings:
```json
{
  "build": "npm install && npm run build",
  "start": "npm start"
}
```

### Heroku (with Heroku CLI)
```bash
heroku create sentra-wallet
git push heroku main
heroku logs --tail
```

### AWS / DigitalOcean / VPS
1. SSH into your server
2. Install Node.js 22+
3. Clone the repository
4. Run:
   ```bash
   npm install
   npm run build
   npm start
   ```
5. Use a process manager like PM2:
   ```bash
   npm install -g pm2
   pm2 start npm --name "sentra-wallet" -- start
   pm2 save
   ```

## Environment Variables

### Required
- `NODE_ENV=production` - Set automatically in most hosting platforms

### Optional
- `PORT=3000` - Server port (default: 3000)

## Important Notes

### Static Files
- React build is in `dist/spa`
- Server is in `dist/server/production.mjs`
- All static assets are served with 1-hour cache headers

### API Routes
- All `/api/*` routes are handled by Express
- Non-API routes automatically serve `index.html` for React Router SPA navigation
- Direct API calls return proper 404 JSON responses

### Development vs Production
- **Development**: Use `npm run dev` - Vite serves the app with hot reload, Express API integrated
- **Production**: Use `npm run build && npm start` - Express serves everything, Vite not used

## Monitoring

After deployment, monitor your application:

### Health Check
```bash
curl https://your-domain.com/api/ping
```

Expected response:
```json
{ "message": "ping" }
```

### Logs
Most hosting platforms provide log viewing in their dashboard. For self-hosted:
```bash
# Using PM2
pm2 logs sentra-wallet
```

## Troubleshooting

### "Cannot find module 'dist/spa/index.html'"
- Ensure you ran `npm run build` before starting
- Check that `dist/` directory exists

### Port Already in Use
- Change the `PORT` environment variable
- Or kill the process using the port:
  ```bash
  lsof -i :3000
  kill -9 <PID>
  ```

### Static Files Not Serving
- Verify `dist/spa` contains `index.html` and other built files
- Check permissions on the `dist/` directory

### API Routes Not Working
- Ensure `server/routes/*` files are properly exported
- Check that routes are registered in `server/index.ts`
- Verify the route path matches the request URL

## Performance Tips

1. **Enable compression** - Express compresses responses automatically with CORS middleware
2. **Use CDN** - Put static files behind a CDN (Render provides this automatically)
3. **Monitor response times** - Use your hosting platform's analytics
4. **Set proper cache headers** - Already configured in `server/node-build.ts`

## Security Considerations

1. **Never commit `.env` files** - Use environment variables in hosting platform
2. **Keep dependencies updated** - Run `npm update` regularly
3. **Monitor API rate limits** - Consider adding rate limiting for `/api/` routes
4. **HTTPS enabled** - Most platforms (Render, Netlify, etc.) provide free HTTPS

## Next Steps

1. Test locally: `npm run build && npm start`
2. Deploy to staging first
3. Monitor logs and performance
4. Set up automatic deployments from your repository
5. Configure custom domain in hosting platform settings
