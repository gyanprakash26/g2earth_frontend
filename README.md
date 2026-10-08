# G2Earth Frontend

Production-grade Next.js frontend for G2Earth e-commerce platform.

## Requirements

- Node.js 20+
- npm 10+

## Setup

```bash
# 1. Clone and install
npm install

# 2. Configure environment
cp .env.example .env.local
# Edit .env.local with your values

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

| Variable | Description | Example |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Public site URL | `https://g2earth.com` |
| `NEXT_PUBLIC_API_URL` | Backend API base URL | `https://api.g2earth.com/api/v1` |
| `NEXT_PUBLIC_APP_NAME` | App name | `G2Earth` |
| `NEXT_PUBLIC_ENABLE_ANALYTICS` | Enable analytics | `false` |
| `NEXT_PUBLIC_ENABLE_MOCK_DATA` | Use mock data | `true` |

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format with Prettier
npm run typecheck    # TypeScript type check
npm run test         # Run tests (configure Jest/Vitest)
```

## Folder Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── (store)/      # Public store routes
│   ├── (auth)/       # Auth routes
│   └── admin/        # Admin panel
├── components/       # Reusable UI components
├── features/         # Feature-specific components & logic
├── lib/
│   ├── api/          # API client & endpoints
│   ├── auth/         # Auth utilities & permissions
│   ├── constants/    # Site config, routes, labels
│   ├── mock/         # Mock data (remove when backend is live)
│   ├── seo/          # Metadata & structured data utilities
│   ├── utils/        # Formatting, cn(), slugify()
│   └── validation/   # Zod schemas
├── providers/        # React context providers
├── store/            # Zustand stores (cart, wishlist, UI)
└── types/            # TypeScript domain types
```

## Mock Data

All mock data lives in `src/lib/mock/`. It is used only during development before the backend is connected.

To connect the real backend:
1. Set `NEXT_PUBLIC_API_URL` in `.env.local`
2. Replace mock imports in feature files with real API calls using `productApi`, `cartApi`, etc.
3. Remove `src/lib/mock/` once all endpoints are live

## Backend Integration

See `docs/api-integration.md` for the full API contract.

The API client is at `src/lib/api/api-client.ts`. All service modules are in `src/features/*/`.

## Authentication

- Customer auth: HTTP-only cookie `g2earth_session` set by backend
- Admin auth: HTTP-only cookie `g2earth_admin_session` set by backend
- Route protection: `src/middleware.ts`
- Permissions: `src/lib/auth/permissions.ts`

## Deployment

```bash
npm run build
npm run start
```

For production, set environment variables on your hosting platform. Never commit `.env.local`.
