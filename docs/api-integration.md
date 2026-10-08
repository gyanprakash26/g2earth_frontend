# API Integration Guide

## Base URL

```
Development:  http://localhost:5000/api/v1
Production:   https://api.g2earth.com/api/v1
```

Set via `NEXT_PUBLIC_API_URL` in `.env.local`.

## API Client

`src/lib/api/api-client.ts` — typed fetch wrapper with:
- JSON headers
- `credentials: "include"` for HTTP-only cookie auth
- Error normalization via `AppApiError`

## Connecting Mock Data to Real API

Each feature has a service file. Example for products:

**Current (mock):**
```ts
// src/features/products/shop-content.tsx
import { mockProducts } from "@/lib/mock";
const products = mockProducts;
```

**After backend is live:**
```ts
// src/features/products/shop-content.tsx
import { useQuery } from "@tanstack/react-query";
import { productApi } from "@/features/products/product-api";

const { data, isLoading, error } = useQuery({
  queryKey: ["products", filters],
  queryFn: () => productApi.getProducts(filters),
});
```

## Endpoint Reference

| Method | Endpoint | Description |
|---|---|---|
| GET | `/products` | List products with filters |
| GET | `/products/:slug` | Single product |
| GET | `/categories` | All categories |
| GET | `/categories/:slug` | Single category |
| GET | `/brands` | All brands |
| GET | `/search?q=` | Search products |
| POST | `/auth/login` | Customer login |
| POST | `/auth/register` | Customer register |
| POST | `/auth/send-otp` | Send OTP |
| POST | `/auth/verify-otp` | Verify OTP |
| POST | `/auth/logout` | Logout |
| GET | `/auth/me` | Current user |
| GET | `/cart` | Get cart |
| POST | `/cart/items` | Add to cart |
| PATCH | `/cart/items/:id` | Update quantity |
| DELETE | `/cart/items/:id` | Remove item |
| POST | `/checkout` | Create order |
| GET | `/orders` | Order history |
| GET | `/orders/:orderNumber` | Order detail |
| POST | `/payments/create` | Create payment order |

## Error Handling

All API errors are normalized to `ApiError` type:
```ts
interface ApiError {
  message: string;
  statusCode?: number;
  code?: string;
  errors?: Record<string, string[]>;
}
```

Never expose raw backend errors to customers.
