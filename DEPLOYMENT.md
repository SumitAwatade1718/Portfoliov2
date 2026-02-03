# 🚀 Deploy Your Portfolio to Live

Your portfolio is ready to deploy! Choose one of these platforms:

---

## Option 1: Netlify (Recommended - Easiest)

### Step 1: Build Locally (Test First)
```bash
cd "c:\Portfolio\Sumit_Portfolio"
npm install
npm run build
```

### Step 2: Deploy to Netlify

**Method A: Via Netlify Website (Easiest)**
1. Go to **https://app.netlify.com** and sign in with GitHub
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** → Select **"SumitAwatade1718/Portfoliov2"**
4. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
5. Click **"Show advanced"** → **"New variable"** and add these 3 environment variables:
   - `VITE_EMAILJS_SERVICE_ID` = (your EmailJS service ID)
   - `VITE_EMAILJS_TEMPLATE_ID` = (your EmailJS template ID)
   - `VITE_EMAILJS_PUBLIC_KEY` = (your EmailJS public key)
6. Click **"Deploy site"**

**Method B: Via Netlify CLI**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Step 3: Get Your Live URL
After deployment, Netlify will give you a URL like:
`https://your-site-name.netlify.app`

You can customize it in **Site settings** → **Change site name**

---

## Option 2: Vercel (Also Great)

### Step 1: Deploy via Vercel Website
1. Go to **https://vercel.com** and sign in with GitHub
2. Click **"Add New Project"**
3. Import **"SumitAwatade1718/Portfoliov2"**
4. Configure:
   - **Framework Preset:** Vite
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
5. Add Environment Variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
6. Click **"Deploy"**

### Step 2: Get Your Live URL
Vercel will give you: `https://your-site-name.vercel.app`

---

## Option 3: GitHub Pages (Free but More Setup)

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "npm run build && gh-pages -d build"
   ```
3. Run: `npm run deploy`
4. Enable GitHub Pages in repo settings → Pages → Source: `gh-pages` branch

---

## 📝 Important: Environment Variables

Your contact form needs EmailJS credentials. Get them from:
- **https://www.emailjs.com/** (sign up/login)
- Go to **Email Services** → Create service
- Go to **Email Templates** → Create template
- Copy your **Service ID**, **Template ID**, and **Public Key**

Add these in your deployment platform's environment variables section.

---

## ✅ After Deployment

1. Update your README.md with your live URL
2. Add the URL to your GitHub repo description
3. Test your contact form on the live site
4. Share your portfolio! 🎉
