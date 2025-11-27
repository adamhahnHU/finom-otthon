# Deploying FinomOtthon to Vercel

This project is optimized for Vercel. Follow these steps to deploy it live.

## 1. Prerequisites
- A [Vercel account](https://vercel.com/signup).
- This project pushed to your GitHub repository.

## 2. Deployment Steps
1.  **Log in** to your Vercel dashboard.
2.  Click **"Add New..."** > **"Project"**.
3.  **Import Git Repository**: Find `finom-otthon` in the list and click **Import**.

## 3. Configure Project
Vercel will auto-detect that this is a static site, but verify these settings:

- **Framework Preset**: `Other` (or leave as default, Vercel detects HTML automatically).
- **Root Directory**: `./` (default).
- **Build Command**: *Leave empty*.
- **Output Directory**: *Leave empty* (or `.` if asked, but usually empty is fine for pure HTML).
- **Install Command**: *Leave empty*.

## 4. Deploy
1.  Click **Deploy**.
2.  Wait ~30 seconds.
3.  **Success!** Your site will be live at `https://finom-otthon.vercel.app` (or similar).

## 5. Verification
- **Clean URLs**: Try visiting `/about` instead of `/about.html`. It should work because of the `vercel.json` file I added.
- **Performance**: The `vercel.json` also adds caching headers for your CSS and images to make the site load faster (Core Web Vitals).
