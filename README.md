# Todo App - Next.js 14 with TypeScript

A production-ready todo application built with Next.js 14, TypeScript, SQLite, and TypeORM. Designed for deployment on Coolify.

## Features

- Full-stack todo management (create, read, update, delete)
- SQLite database with TypeORM for data persistence
- Responsive and modern UI with Tailwind CSS
- Type-safe TypeScript implementation
- Error handling and loading states
- Docker-ready for deployment

## Project Structure

- `/src/app` - Next.js App Router pages and layouts
- `/src/components` - React components
- `/src/lib` - Database configuration and utility functions
- `/src/entities` - TypeORM entities
- `/public` - Static assets

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables (copy `.env` to `.env.local` for local development)
4. Run database migrations:
   ```bash
   npm run migration:run
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run migration:generate` - Generate new migration
- `npm run migration:run` - Run pending migrations
- `npm run migration:revert` - Revert last migration

## Deployment on Coolify

This application is ready for deployment on Coolify with the following features:

- Dockerfile included for containerization
- Environment variables configured in `.env`
- SQLite database persistence
- Production-optimized Next.js configuration

### Deployment Steps

1. Push code to your Git repository
2. Connect repository to Coolify
3. Coolify will automatically detect the Dockerfile and deploy
4. Ensure environment variables are set in Coolify dashboard

## Environment Variables

- `DB_TYPE` - Database type (set to `sqlite`)
- `DB_DATABASE` - Path to SQLite database file
- `NODE_ENV` - Node environment (`development` or `production`)

## License

MIT