## 2026-10-21 - [Large Initial Bundle via Static Imports in Client Components]
**Learning:** Found a specific anti-pattern where a Next.js parent component (`src/app/page.tsx`) is marked as `'use client'`, causing all child sections (even those deep below the fold) to be statically bundled into the initial JS payload, heavily inflating initial load time.
**Action:** Use `next/dynamic` to lazily load heavy below-the-fold sections and floating components, significantly reducing the initial bundle size and improving Time To Interactive (TTI) on long scrolling landing pages.

## 2026-10-21 - [Scroll Event Layout Thrashing with getBoundingClientRect]
**Learning:** Attaching a `scroll` event listener that queries `getBoundingClientRect()` forces synchronous layout calculations on every scroll frame, leading to high CPU usage and potential main-thread blocking, which decreases scrolling performance.
**Action:** Replace `scroll` event visibility tracking with `IntersectionObserver`. It calculates intersections asynchronously off the main thread, drastically improving scroll performance and battery life.
