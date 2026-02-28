# AGENTS.md

Guidelines for AI coding agents working in this codebase.

## Project Overview

Horizon Estate is a Next.js 15 application for real estate listings, built with React 19, TypeScript, and Tailwind CSS 4.

## Commands

```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Production build
npm run lint         # Run ESLint
npm run start        # Start production server
npm run clean        # Clean Next.js cache
```

No test framework is currently configured. If tests are added, document the test command here.

## Environment Setup

1. Copy `.env.example` to `.env.local`
2. Set `GEMINI_API_KEY` for Google AI integration

## Tech Stack

- **Framework**: Next.js 15.4.9 with App Router
- **React**: 19.2.1
- **TypeScript**: 5.9.3 (strict mode enabled)
- **Styling**: Tailwind CSS 4.1.11
- **UI Libraries**: lucide-react (icons), motion (animations)
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## Code Style Guidelines

### File Structure

```
app/
  page.tsx        # Page components
  layout.tsx      # Root layout
  globals.css     # Global styles
lib/
  utils.ts        # Utility functions (cn helper)
hooks/
  use-mobile.ts   # Custom React hooks
```

### Imports

Order imports as follows, separated by blank lines:

1. React/Next.js imports
2. Third-party libraries
3. Local imports using `@/` alias

```tsx
'use client';

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";
```

### TypeScript

- Strict mode is enabled - all types must be explicit
- Use inline types for component props
- Avoid `any` where possible; define proper interfaces for complex objects

```tsx
type PropertyCardProps = {
  property: Property;
  onContactClick: () => void;
  isCompared: boolean;
  onCompareToggle: () => void;
};

function PropertyCard({ property, onContactClick, isCompared, onCompareToggle }: PropertyCardProps) {
```

### Component Structure

- Use function declarations, not arrow functions
- Place `'use client'` directive as the first line for client components
- Export default for page components

```tsx
'use client';

import { useState } from "react";

export default function Home() {
  return <div>...</div>;
}
```

### Styling

- Use Tailwind CSS utility classes exclusively
- Use the `cn()` utility from `@/lib/utils` for conditional class merging
- Follow existing patterns: zinc color palette, rounded-2xl for cards, consistent spacing

```tsx
<div className={cn(
  "base-classes",
  isActive && "active-classes"
)} />
```

### Naming Conventions

- **Components**: PascalCase (e.g., `PropertyCard`)
- **Functions**: camelCase (e.g., `toggleCompare`)
- **Constants**: SCREAMING_SNAKE_CASE for global constants (e.g., `MOBILE_BREAKPOINT`)
- **Files**: kebab-case for utilities/hooks, PascalCase for components

### Event Handlers

- Prefix event handlers with `on` (e.g., `onContactClick`)
- Use arrow functions for inline handlers that need to stop propagation

```tsx
onClick={(e) => { e.stopPropagation(); onContactClick(); }}
```

### State Management

- Use `useState` for local component state
- Define state types explicitly when not inferable

```tsx
const [sortBy, setSortBy] = useState<string>("default");
const [selectedIds, setSelectedIds] = useState<number[]>([]);
```

### Error Handling

- Use early returns for validation
- Provide user feedback via alerts or UI states

```tsx
if (prev.length >= 4) {
  alert("You can compare up to 4 properties at a time.");
  return prev;
}
```

### Do Not

- Do not add comments unless explicitly requested
- Do not introduce new dependencies without checking package.json first
- Do not use barrel exports (index files) - they hurt tree-shaking
- Do not commit secrets or environment files

## Pre-commit Checks

Before committing, always run:

```bash
npm run lint
npm run build
```

Both must pass without errors.
