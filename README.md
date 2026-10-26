# Cybereye Intelitech

A modern cybersecurity company website built with React, TypeScript, Vite, Tailwind CSS, and an Express API backend.

## Project structure

- `apps/web` — public marketing website and admin panel frontend
- `apps/api` — Express API with Prisma and PostgreSQL support
- `packages` — shared project packages

## Tech stack

- React + TypeScript + Vite
- Tailwind CSS
- React Router
- Express + TypeScript
- Prisma + PostgreSQL
- Docker Compose for local PostgreSQL

## Local development

```bash
npm install
npm run dev
```

This starts the frontend and API together.

## Production build

```bash
npm run build
```

The frontend build output is generated in `apps/web/dist`.

## Admin login

Open:

```text
http://localhost:5173/admin/login
```

Default development credentials:

- Email: `admin@cybereyeintelitech.com`
- Password: `ChangeMe123!`

## Notes

This project is structured for a production-grade cybersecurity marketing website and includes admin sections for inquiries, services, article management, and settings.
