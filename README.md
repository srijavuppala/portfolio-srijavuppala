# 🚀 Srija Vuppala - Portfolio Website

A modern, interactive portfolio website featuring an AI-powered chatbot that can answer questions about my professional experience, projects, and technical skills.

## ✨ Features

### 🎯 Core Features
- **Interactive Timeline**: Professional experience with hover details
- **Dynamic Roles Animation**: Rotating role titles with smooth transitions
- **AI Chatbot Assistant**: Smart chatbot trained on my background
- **Project Showcase**: Categorized projects with filtering
- **Responsive Design**: Mobile-first, works on all devices
- **Dark/Light Theme**: Theme switching support

### 🤖 AI Chatbot Features
- **Intelligent Responses**: AI assistant trained on my experience
- **Short & Focused**: Concise answers (2-3 sentences)
- **Suggestion Chips**: Quick question prompts
- **Real-time Chat**: Instant responses with loading animations
- **Error Handling**: Graceful error states and retry mechanisms

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Radix UI** - Accessible component primitives

### Backend
- **Express.js** - Lightweight backend server
- **Google Generative AI** - Gemini-1.5-flash model
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### UI Components
- **shadcn/ui** - Beautiful, accessible components
- **Lucide React** - Modern icon library
- **React Vertical Timeline** - Professional timeline display

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Google Generative AI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-srijavuppala-2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file
   echo "GEMINI_API_KEY=your_google_ai_api_key_here" > .env
   ```

4. **Start the development servers**
   
   **Terminal 1 - Frontend:**
   ```bash
   npm run dev
   ```
   
   **Terminal 2 - Backend:**
   ```bash
   node server.js
   ```

5. **Open your browser**
   - Frontend: http://localhost:8080
   - Backend API: http://localhost:3000

## 📁 Project Structure

```
portfolio-srijavuppala-2/
├── src/
│   ├── components/          # React components
│   │   ├── Chatbot.tsx     # AI chatbot component
│   │   ├── Experience.tsx   # Work experience timeline
│   │   ├── Projects.tsx    # Project showcase
│   │   ├── Hero.tsx        # Landing section
│   │   └── ui/             # Reusable UI components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── pages/              # Page components
│   └── main.tsx            # App entry point
├── public/                 # Static assets
├── server.js              # Express backend server
├── .env                   # Environment variables
└── package.json           # Dependencies
```

## 🎨 Key Components

### Experience Timeline
- **Optum (Feb-July 2024)**: AI & Cloud Engineer
- **Ericsson (Feb-Dec 2023)**: Software Engineer
- Interactive hover cards with achievements and technologies

### AI Chatbot
- Powered by Google Generative AI (Gemini-1.5-flash)
- Trained on professional background and experience
- Provides short, focused responses
- Suggestion chips for common questions

### Project Categories
- **AI & ML**: RAG Chatbot, Google Vertex AI integration
- **DevOps**: Infrastructure automation, CI/CD pipelines
- **Web Apps**: Real-time monitoring systems
- **Showcase**: Portfolio and featured work

## 🔧 Development

### Available Scripts
```bash
npm run dev         # Start frontend development server
npm run build       # Build for production
npm run preview     # Preview production build
npm run lint        # Run ESLint
```

### Backend API Endpoints
```bash
POST /api/chat      # Chatbot conversation endpoint
```

### Environment Variables
```bash
GEMINI_API_KEY      # Google Generative AI API key
NODE_ENV           # Environment (development/production)
```

## 🌟 Professional Experience

### Current Focus Areas
- **AI/ML Development**: Building intelligent chatbots and AI solutions
- **DevOps Engineering**: Infrastructure automation and CI/CD pipelines
- **Full-Stack Development**: React, Node.js, cloud technologies
- **Leadership**: Microsoft Student Ambassador, technical workshops

### Technical Skills
- **Languages**: Python, Java, JavaScript, TypeScript
- **Frontend**: React, HTML/CSS, Tailwind CSS
- **Backend**: Node.js, Express, Spring Framework
- **Cloud**: AWS, Docker, Kubernetes
- **AI/ML**: Google Vertex AI, Snowflake, Mistral LLM
- **Databases**: SQL, AlloyDB, Snowflake
- **Tools**: Git, CI/CD, Infrastructure Automation

## 📈 Recent Projects

### RAG Chatbot Application
Built using Snowflake, Cortex Search, and Mistral LLM for intelligent document processing and Q&A capabilities.

### Google Vertex AI Chatbot
Integrated chatbot solution using Google Vertex AI and AlloyDB for enhanced user interactions.

### Real-Time Monitoring System
Web application for monitoring and ensuring compliance in real-time operations.

## 🚀 Deployment

### Production Build
```bash
npm run build
npm run preview
```

### Environment Setup
1. Set up production environment variables
2. Configure domain and SSL certificates
3. Deploy frontend and backend separately or together

## 📱 Contact & Links

- **Portfolio**: [Live Demo](your-live-url)
- **LinkedIn**: [Your LinkedIn](your-linkedin)
- **GitHub**: [Your GitHub](your-github)
- **Email**: your-email@domain.com

## 🤝 Contributing

This is a personal portfolio project. If you'd like to suggest improvements or report issues, feel free to open an issue or reach out directly.

## 📄 License

This project is personal and proprietary. Please contact me for any usage permissions.

---

**Built with ❤️ by Srija Vuppala**
