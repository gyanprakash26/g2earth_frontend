# Frontend Guidelines

## Component Rules

- Default to Server Components
- Add `"use client"` only for: forms, state, event handlers, browser APIs
- One component per file
- No business logic in UI components (`src/components/`)
- Business logic belongs in `src/features/`

## Naming

- Files: `kebab-case.tsx`
- Components: `PascalCase`
- Hooks: `useHookName`
- Stores: `useXxxStore`
- Types: `PascalCase`

## Imports

Always use `@/` alias:
```ts
import { Button } from "@/components/ui/button";  // correct
import { Button } from "../../../components/ui/button";  // wrong
```

## Forms

All forms use React Hook Form + Zod:
```ts
const { register, handleSubmit, formState: { errors } } = useForm<Input>({
  resolver: zodResolver(schema),
});
```

## Styling

- Tailwind CSS only — no inline styles except for dynamic values
- Use `cn()` from `@/lib/utils` for conditional classes
- Design tokens defined in `globals.css` as CSS variables
- Never hardcode colors — use Tailwind's palette or CSS variables

## Do Not

- Use `any` type
- Use `@ts-ignore`
- Fetch data directly in components — use feature API services
- Duplicate components
- Store server state in Zustand
- Trust frontend prices or permissions
- Put secrets in `NEXT_PUBLIC_*` variables
