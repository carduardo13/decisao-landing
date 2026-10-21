## 2026-10-21 - [Large Initial Bundle via Static Imports in Client Components]
**Learning:** Found a specific anti-pattern where a Next.js parent component (`src/app/page.tsx`) is marked as `'use client'`, causing all child sections (even those deep below the fold) to be statically bundled into the initial JS payload, heavily inflating initial load time.
**Action:** Use `next/dynamic` to lazily load heavy below-the-fold sections and floating components, significantly reducing the initial bundle size and improving Time To Interactive (TTI) on long scrolling landing pages.
