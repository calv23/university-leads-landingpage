# University Leads Landing Page

A modern, responsive landing page for University Leads Malaysia built with Nuxt.js 3, TailwindCSS, and AnimeJS.

## Tech Stack

- **Framework**: Nuxt.js 3
- **Styling**: TailwindCSS
- **Animations**: AnimeJS
- **Database**: Supabase
- **AI**: OpenAI GPT-3.5-turbo
- **Containerization**: Docker

## Prerequisites

- Node.js 20+
- Docker & Docker Compose
- Supabase account
- OpenAI API key

## Project Structure

```
university-landing/
├── components/
│   ├── sections/          # Page sections (Hero, Programs, etc.)
│   ├── ui/               # UI components (Navigation, ChatBot, etc.)
│   └── animations/       # Animation components
├── composables/          # Vue composables
├── layouts/             # Nuxt layouts
├── pages/               # Nuxt pages
├── server/              # Server-side API routes
├── database/            # Database migrations and seeds
├── docker/              # Docker configurations
└── scripts/             # Deployment scripts
```

## Getting Started

### 1. Clone and Install

```bash
cd university-landing
npm install
```

### 2. Environment Setup

```bash
cp .env.example .env.local
# Edit .env.local with your credentials
```

### 3. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

## Docker Development

### Local Development

```bash
docker-compose -f docker-compose.local.yml up
```

### Staging Deployment

```bash
./scripts/deploy-staging.sh
```

### Production Deployment

```bash
./scripts/deploy-production.sh
```

## Database Setup

1. Create a Supabase project
2. Run migrations in `database/migrations/`
3. Seed data with files in `database/seed/`

## Features

- ✅ Responsive design (mobile-first)
- ✅ Animated sections with AnimeJS
- ✅ Program filtering and search
- ✅ Testimonials carousel
- ✅ Contact form with validation
- ✅ AI-powered chatbot
- ✅ Docker containerization
- ✅ SSL/HTTPS support

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build

## License

Private - University Leads Malaysia
