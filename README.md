# 📝 ResumeForge - Professional Resume Builder

A modern, full-stack MERN application for creating professional resumes with real-time preview and PDF export.

## ✨ Features

- 🎨 **Modern UI** - Beautiful, responsive design with Tailwind CSS
- 🔐 **User Authentication** - Secure signup/login with JWT
- 💾 **Auto-save** - Automatic resume saving every 5 seconds
- 📄 **PDF Export** - Export your resume as a professional PDF
- 🎯 **Real-time Preview** - See changes instantly
- ☁️ **Cloud Storage** - Resumes saved to MongoDB Atlas
- 🌐 **Responsive** - Works on desktop, tablet, and mobile

## 🛠️ Tech Stack

### Frontend
- React 19 - UI library
- Vite - Build tool
- Tailwind CSS - Styling
- Axios - HTTP client
- React Router - Navigation
- Lucide React - Icons
- jsPDF & html2canvas - PDF generation

### Backend
- Node.js - Runtime
- Express - Web framework
- MongoDB + Mongoose - Database
- JWT - Authentication
- bcryptjs - Password hashing

## 🚀 Deployment

This project is configured for easy deployment to:
- **Frontend**: Vercel
- **Backend**: Render
- **Database**: MongoDB Atlas

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 📦 Local Development

### Prerequisites
- Node.js 18+ installed
- MongoDB Atlas account
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
   cd YOUR_REPO
   ```

2. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Configure backend environment**
   
   Create `server/.env`:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_secret_key
   FRONTEND_URL=http://localhost:5173
   ```

4. **Install frontend dependencies**
   ```bash
   cd ../client
   npm install
   ```

5. **Start development servers**

   Terminal 1 (Backend):
   ```bash
   cd server
   npm run dev
   ```

   Terminal 2 (Frontend):
   ```bash
   cd client
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
My_Project/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── context/       # Context providers
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # Entry point
│   ├── vercel.json        # Vercel configuration
│   └── package.json
│
├── server/                # Backend Node.js application
│   ├── config/           # Database configuration
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── index.js          # Server entry point
│   └── package.json
│
├── DEPLOYMENT.md         # Deployment guide
└── README.md            # This file
```

## 🔑 Environment Variables

### Frontend (.env)
- `VITE_API_URL` - Backend API URL

### Backend (.env)
- `PORT` - Server port (default: 5000)
- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT
- `FRONTEND_URL` - Frontend URL for CORS

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Created with ❤️ by Devansh Sharma

---

**Happy Resume Building! 🎉**
