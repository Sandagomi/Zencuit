# Zencuit Website

Official website for **Zencuit Group** - Crafting AI-Enhanced Digital Solutions.

## 🚀 About Zencuit

Zencuit is a technology company specializing in AI-enhanced web and mobile applications. We empower innovation through technology with our three specialized divisions:

- **Zencuit Knowledge** - Tech education and training
- **Zencuit AI & Labs** - AI solutions and research
- **Zencuit AutoTech** - Automotive technology integration

## ✨ Features

- 🎨 Modern, responsive design
- 📱 Mobile-first approach
- 🎠 Interactive project carousel
- 📧 Contact form with email integration
- 🌐 Social media integration
- ⚡ Fast and optimized performance
- 🎯 SEO-friendly structure

## 🛠️ Technologies Used

### Frontend
- **React** - UI library
- **TypeScript** - Type-safe development
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **Lucide React** - Icon library
- **Embla Carousel** - Carousel functionality

### Backend (Email Server)
- **Node.js** - Runtime environment
- **Express** - Web framework
- **Nodemailer** - Email sending
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or bun package manager

### Clone the Repository

```sh
git clone https://github.com/Sandagomi/Zencuit.git
cd Zencuit
```

### Install Frontend Dependencies

```sh
npm install
```

### Install Backend Dependencies

```sh
cd server
npm install
```

## 🚀 Running the Project

### Frontend Development Server

```sh
npm run dev
```

The website will be available at `http://localhost:8080`

### Backend Email Server

1. Configure environment variables in `server/.env`:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-16-character-app-password
COMPANY_EMAIL=sandagomi@zencuit.com
PORT=3001
```

2. Start the server:

```sh
cd server
npm start
```

The backend will run on `http://localhost:3001`

### Running Both Servers

You'll need two terminal windows:

**Terminal 1 - Frontend:**
```sh
npm run dev
```

**Terminal 2 - Backend:**
```sh
cd server
npm start
```

## 📧 Email Setup

The contact form uses Gmail SMTP. To set this up:

1. Enable 2-Step Verification on your Google account
2. Generate an App Password at https://myaccount.google.com/apppasswords
3. Add credentials to `server/.env` file

See `server/README.md` for detailed email setup instructions.

## 📁 Project Structure

```
├── src/
│   ├── components/        # React components
│   │   ├── Contact.tsx   # Contact form
│   │   ├── Hero.tsx      # Hero section
│   │   ├── Projects.tsx  # Projects carousel
│   │   ├── Services.tsx  # Services section
│   │   └── ...
│   ├── assets/           # Images and static files
│   ├── lib/              # Utility functions
│   └── pages/            # Page components
├── server/
│   ├── index.js          # Express server
│   ├── package.json      # Server dependencies
│   └── README.md         # Server documentation
├── public/               # Static assets
└── package.json          # Frontend dependencies
```

## 🏗️ Building for Production

```sh
npm run build
```

The production-ready files will be in the `dist` directory.

## 🌐 Deployment

The website can be deployed to various platforms:

- **Vercel** (Recommended for frontend)
- **Netlify**
- **GitHub Pages**
- **AWS / Azure / Google Cloud**

For the backend email server, consider:
- **Heroku**
- **Railway**
- **Render**
- **DigitalOcean**

## 📝 License

© 2025 Zencuit Group. All rights reserved.

## 🤝 Contributing

This is a private project for Zencuit Group. For inquiries, please contact us at sandagomi@zencuit.com

## 📞 Contact

- **Website:** Coming Soon
- **Email:** sandagomi@zencuit.com
- **Phone:** +94 766 15 7067
- **LinkedIn:** [Zencuit](https://www.linkedin.com/company/zencuit/)
- **Instagram:** [@zencuit_group](https://www.instagram.com/zencuit_group/)

---

**Designed for Purpose, Built for Excellence** ⚡
