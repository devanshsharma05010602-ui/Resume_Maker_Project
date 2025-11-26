# Deployment Guide: Resume Maker Application

This guide will help you deploy your MERN stack Resume Maker application to production.

## 🌐 Deployment Architecture

- **Frontend**: Vercel (React + Vite)
- **Backend**: Render (Node.js + Express)
- **Database**: MongoDB Atlas (already configured)

---

## 📋 Prerequisites

Before deploying, ensure you have:
- GitHub account with your project pushed to a repository
- [Vercel](https://vercel.com) account (free tier available)
- [Render](https://render.com) account (free tier available)
- MongoDB Atlas cluster (you already have this configured)

---

## 🚀 Part 1: Deploy Backend to Render

### Step 1: Push Your Code to GitHub

```powershell
# Navigate to your project root
cd "c:\Users\DEVANSH\BCA 3rd Year\My_Project"

# Initialize git if not already (skip if already done)
git init
git add .
git commit -m "Prepare for deployment"

# Push to GitHub (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### Step 2: Create New Web Service on Render

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `resumeforge-backend` (or your preferred name)
   - **Root Directory**: `server`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

### Step 3: Set Environment Variables on Render

In the Render dashboard, go to **Environment** tab and add:

| Key | Value |
|-----|-------|
| `PORT` | `5000` |
| `MONGO_URI` | `mongodb+srv://devanshsharma05010602_db_user:12345@clustertester.mjhvk9q.mongodb.net/resumeforge?appName=ClusterTester` |
| `JWT_SECRET` | `95bd3011185058242298fb5d266d20d06f32909cfd9dee96de260c0d480` |
| `FRONTEND_URL` | `https://your-app.vercel.app` (you'll update this after deploying frontend) |

### Step 4: Deploy

Click **"Create Web Service"** and wait for the deployment to complete. Note your backend URL (e.g., `https://resumeforge-backend.onrender.com`).

> [!NOTE]
> Free tier Render services sleep after 15 minutes of inactivity. First request may take 30-60 seconds to wake up.

---

## 🎨 Part 2: Deploy Frontend to Vercel

### Step 1: Create Production Environment File

The `.env` file should already exist in your client folder with the local development URL. You'll configure the production URL in Vercel's dashboard.

### Step 2: Deploy to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Vite
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### Step 3: Set Environment Variables on Vercel

In the **Environment Variables** section, add:

| Name | Value |
|------|-------|
| `VITE_API_URL` | `https://resumeforge-backend.onrender.com` (your Render backend URL) |

> [!IMPORTANT]
> Make sure to add this environment variable for **Production**, **Preview**, and **Development** environments.

### Step 4: Deploy

Click **"Deploy"** and wait for the build to complete. Note your frontend URL (e.g., `https://resumeforge.vercel.app`).

---

## 🔗 Part 3: Connect Frontend and Backend

### Update Backend FRONTEND_URL

1. Go back to your Render dashboard
2. Navigate to your backend service → **Environment** tab
3. Update the `FRONTEND_URL` variable with your Vercel URL (e.g., `https://resumeforge.vercel.app`)
4. Save changes (this will redeploy your backend)

---

## ✅ Part 4: Verification

Test your deployed application:

1. **Visit your Vercel URL** (e.g., `https://resumeforge.vercel.app`)
2. **Sign up** for a new account
3. **Log in** with your credentials
4. **Create a resume** and add some information
5. **Save the resume** (should auto-save)
6. **Refresh the page** to verify data persists
7. **Export to PDF** to test the PDF generation feature

---

## 🔧 Troubleshooting

### CORS Errors
If you see CORS errors in the browser console:
- Verify `FRONTEND_URL` on Render matches your Vercel URL exactly (no trailing slash)
- Check that CORS is properly configured in `server/index.js`

### API Connection Failed
If frontend can't connect to backend:
- Verify `VITE_API_URL` on Vercel is set correctly
- Check Render backend logs for errors
- Ensure backend service is running (free tier may sleep)

### MongoDB Connection Issues
If you see database connection errors:
- Verify `MONGO_URI` is correct in Render environment variables
- Check MongoDB Atlas → Network Access → allow `0.0.0.0/0` for Render

### Backend Not Responding
- Free tier Render services sleep after inactivity
- First request may take 30-60 seconds
- Consider upgrading to paid tier for always-on service

---

## 📝 Post-Deployment Updates

### To Update Frontend
1. Push changes to GitHub
2. Vercel will automatically rebuild and deploy

### To Update Backend
1. Push changes to GitHub
2. Render will automatically rebuild and deploy

### Manual Redeployment
- **Vercel**: Go to your project → Deployments → click "..." → Redeploy
- **Render**: Go to your service → Manual Deploy → Deploy latest commit

---

## 🎉 Your Application is Live!

Congratulations! Your Resume Maker application is now deployed and accessible worldwide.

**Frontend URL**: Your Vercel URL  
**Backend URL**: Your Render URL  
**Database**: MongoDB Atlas

Share your frontend URL with users to let them create professional resumes!

---

## 💡 Tips for Production

1. **Custom Domain**: Both Vercel and Render support custom domains
2. **Analytics**: Add Google Analytics or Vercel Analytics
3. **Monitoring**: Set up Render alerts for service health
4. **Backups**: Regularly backup your MongoDB Atlas database
5. **Environment Secrets**: Never commit `.env` files to GitHub
