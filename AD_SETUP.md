# Google AdSense Setup Guide for FinomOtthon

This guide explains how to connect your FinomOtthon website to Google AdSense to start earning revenue.

## 1. Sign Up for AdSense
1.  Go to [Google AdSense](https://adsense.google.com/).
2.  Click **Get started** and sign in with your Google account.
3.  Enter your website URL (e.g., `finomotthon.hu` or your GitHub Pages URL if applicable, though custom domains are preferred).
4.  Follow the on-screen instructions to create your account.

## 2. Get Your Publisher ID
1.  Once logged in, go to **Account** > **Settings** > **Account information**.
2.  Copy your **Publisher ID** (e.g., `pub-1234567890123456`).

## 3. Connect Your Site
I have already added the necessary script code to your `index.html` and `recipe-template.html` files. You just need to update the placeholder with your actual ID.

1.  Open `index.html` and `recipe-template.html`.
2.  Look for this comment in the `<head>` section:
    ```html
    <!-- Google AdSense -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ID_HERE"
     crossorigin="anonymous"></script>
    ```
3.  Replace `ca-pub-YOUR_ID_HERE` with your actual Publisher ID (e.g., `ca-pub-1234567890123456`).

## 4. Place Ads
I have created specific "Ad Slots" in the design where ads will appear.
- **Auto Ads**: Google can automatically place ads for you. You can enable this in your AdSense dashboard under **Ads** > **By site**.
- **Manual Units**: If you want to use the specific slots I designed (sidebar, header, etc.), you need to create "Display ad units" in AdSense:
    1.  Go to **Ads** > **By ad unit**.
    2.  Select **Display ads**.
    3.  Name your ad unit (e.g., "Homepage Header").
    4.  Select **Responsive** size.
    5.  Click **Create** and copy the code.
    6.  Paste this code inside the `<div class="ad-slot">...</div>` containers in your HTML files.

## 5. Verification
After adding the code, go back to AdSense and click **Let's go** to verify your site. Google will check your site (this can take a few days to 2 weeks).

**Important**: Ensure your site has content (recipes) and the legal pages (Privacy, About, Contact) before applying, or you might get rejected.
