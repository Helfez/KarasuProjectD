# KarasuProjectD 🎨💍

AI-powered ring design and 3D generation e-commerce platform. Create personalized rings with artificial intelligence and visualize them in stunning 3D before ordering.

## ✨ Features

- 🤖 **AI-Powered Design**: Generate unique ring designs using advanced AI models
- 🎨 **3D Visualization**: Real-time 3D preview with materials and lighting
- 🛒 **E-commerce Platform**: Complete ordering and payment system
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile
- ⚡ **Modern Tech Stack**: Next.js, FastAPI, PostgreSQL, Redis

## 🏗️ Project Structure

```
KarasuProjectD/
├── apps/
│   ├── frontend/          # Next.js React application
│   └── backend/           # FastAPI Python backend
├── packages/
│   ├── shared/            # Shared types and utilities
│   └── ai-service/        # AI design generation service
├── zeabur.json           # Zeabur deployment configuration
├── docker-compose.yml    # Local development environment
└── package.json          # Root workspace configuration
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Python 3.11+
- Docker & Docker Compose (for local development)

### Local Development

1. **Clone and install dependencies**
```bash
git clone https://github.com/Helfez/KarasuProjectD.git
cd KarasuProjectD
npm run install:all
```

2. **Start with Docker Compose**
```bash
docker-compose up -d
```

3. **Or start services manually**
```bash
# Start backend
cd apps/backend
pip install -r requirements.txt
uvicorn main:app --reload

# Start frontend (in another terminal)
cd apps/frontend
npm run dev
```

4. **Access the application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Documentation: http://localhost:8000/docs

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Three.js** - 3D graphics and visualization
- **React Three Fiber** - React renderer for Three.js
- **Zustand** - State management

### Backend
- **FastAPI** - Modern Python web framework
- **SQLAlchemy** - Database ORM
- **PostgreSQL** - Primary database
- **Redis** - Caching and sessions
- **OpenAI API** - AI design generation
- **Stripe** - Payment processing

### Infrastructure
- **Zeabur** - Deployment platform
- **Docker** - Containerization
- **GitHub Actions** - CI/CD pipeline

## 🔧 Environment Variables

### Backend (.env)
```bash
DATABASE_URL=postgresql://postgres:password@localhost:5432/karasu_rings
REDIS_URL=redis://localhost:6379
OPENAI_API_KEY=your_openai_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### Frontend (.env.local)
```bash
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

## 📚 Development

### Available Scripts
```bash
npm run dev              # Start both frontend and backend
npm run dev:frontend     # Start only frontend
npm run dev:backend      # Start only backend
npm run build            # Build both applications
npm run install:all      # Install all dependencies
```

### API Documentation
Visit http://localhost:8000/docs for interactive API documentation.

## 🚢 Deployment

This project is configured for automatic deployment on Zeabur:

1. Push to GitHub repository
2. Connect repository to Zeabur
3. Configure environment variables
4. Deploy automatically

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🙋‍♂️ Support

For questions or support, please open an issue on GitHub.
