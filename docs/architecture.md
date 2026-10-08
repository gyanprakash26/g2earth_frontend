# Architecture

## Principles

- **Server Components by default** — only use `"use client"` when required (forms, state, browser APIs)
- **Feature-oriented** — business logic lives in `src/features/`, not scattered in pages
- **Centralized API layer** — all HTTP calls go through `src/lib/api/api-client.ts`
- **Mock data isolated** — `src/lib/mock/` is the only place mock data lives
- **URL as state** — filters, sort, pagination use URL search params (shareable, SEO-friendly)
- **Backend is authoritative** — frontend never trusts its own prices, stock, or permissions

## State Management

| State type | Tool |
|---|---|
| Server/async data | TanStack Query |
| Cart (optimistic) | Zustand + localStorage |
| Wishlist | Zustand + localStorage |
| UI state (menus, drawers) | Zustand |
| Form state | React Hook Form |
| Filter/sort/pagination | URL search params |

## Component Hierarchy

```
Page (Server Component)
  └── Feature Component (Server or Client)
        └── UI Components (always reusable, no business logic)
```

## Route Groups

- `(store)` — public store with Header + Footer layout
- `(auth)` — auth pages with minimal layout
- `admin/(dashboard)` — admin panel with sidebar layout

## Security

- No secrets in `NEXT_PUBLIC_*` variables
- Auth via HTTP-only cookies (set by backend)
- Admin routes protected by middleware + separate cookie
- Frontend permission checks are UX only
- Backend validates all prices, stock, coupons, and permissions
