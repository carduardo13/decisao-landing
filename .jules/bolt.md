## 2026-10-21 - [Large Initial Bundle via Static Imports in Client Components]
**Learning:** Found a specific anti-pattern where a Next.js parent component (`src/app/page.tsx`) is marked as `'use client'`, causing all child sections (even those deep below the fold) to be statically bundled into the initial JS payload, heavily inflating initial load time.
**Action:** Use `next/dynamic` to lazily load heavy below-the-fold sections and floating components, significantly reducing the initial bundle size and improving Time To Interactive (TTI) on long scrolling landing pages.
## 2024-10-27 - Optimize Render Performance in Loops

**Learning:** When mapping over items to render interactive elements (like a list of language buttons), using inline arrow functions in event handlers (e.g., `onClick={() => handle(l)}`) allocates a new function instance for every item on every render. This creates unnecessary memory allocations and garbage collection pressure, which can slightly degrade performance over time, especially in components that re-render often or have many items.

**Action:** Extract the handler into a shared, memoized callback (e.g., using `useCallback`). Pass item-specific data to the element using `data-*` attributes (e.g., `data-lang={l}`) and retrieve it in the shared handler using `e.currentTarget.getAttribute('data-*')`. This ensures only a single function reference is created and passed to all children, optimizing rendering performance.
