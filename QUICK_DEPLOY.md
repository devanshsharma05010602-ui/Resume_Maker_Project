# 🚀 Quick Deployment Steps

Follow these steps to deploy your Resume Maker application:

## ✅ Prerequisites
- [ ] GitHub account created
- [ ] Vercel account created (sign up at vercel.com)
- [ ] Render account created (sign up at render.com)
- [ ] Code pushed to GitHub repository

---

## 🎯 Step 1: Push to GitHub

```powershell
# Navigate to project root
cd "c:\Users\DEVANSH\BCA 3rd Year\My_Project"

# Initialize and commit
git add .
git commit -m "Ready for deployment"

# Add your GitHub repository and push (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

---

## 🔧 Step 2: Deploy Backend (Render)

1. Visit https://dashboard.render.com/
2. Click **"New +"** → **"Web Service"**
3. Connect GitHub and select your repository
4. **Configuration:**
   - Name: `resumeforge-backend`
   - Root Directory: `server`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Plan: **Free**

5. **Environment Variables** (click "Advanced" → "Add Environment Variable"):
   ```
   PORT = 5000
   MONGO_URI = mongodb+srv://devanshsharma05010602_db_user:12345@clustertester.mjhvk9q.mongodb.net/resumeforge?appName=ClusterTester
   JWT_SECRET = 95bd3011185058242298fb5d266d20d06f32909cfd9dee96de260c0d480
   FRONTEND_URL = https://your-app.vercel.app
   ```
   (You'll update FRONTEND_URL after deploying to Vercel)

6. Click **"Create Web Service"**
7. **Save your backend URL** (e.g., `https://resumeforge-backend.onrender.com`)

---

## 🎨 Step 3: Deploy Frontend (Vercel)

1. Visit https://vercel.com/new
2. Import your GitHub repository
3. **Configuration:**
   - Framework: **Vite**
   - Root Directory: `client`
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. **Environment Variables:**
   ```
   VITE_API_URL = https://resumeforge-backend.onrender.com
   ```
   (Use your backend URL from Step 2)

5. Click **"Deploy"**
6. **Save your frontend URL** (e.g., `https://resumeforge.vercel.app`)

---

## 🔗 Step 4: Connect Frontend & Backend

1. Go back to **Render Dashboard**
2. Open your backend service
3. Go to **Environment** tab
4. Update `FRONTEND_URL` with your Vercel URL
5. Click **"Save Changes"** (this will redeploy)

---

## ✨ Step 5: Test Your Live Site!

Visit your Vercel URL and test:
- [ ] Sign up for a new account
- [ ] Log in
- [ ] Create a resume
- [ ] Save the resume
- [ ] Refresh page (data should persist)
- [ ] Export to PDF

---

## 🎉 Done!

Your Resume Maker is now live and accessible worldwide!

**Need help?** See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions and troubleshooting.
