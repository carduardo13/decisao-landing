## 2026-10-21 - [Large Initial Bundle via Static Imports in Client Components]
**Learning:** Found a specific anti-pattern where a Next.js parent component (`src/app/page.tsx`) is marked as `'use client'`, causing all child sections (even those deep below the fold) to be statically bundled into the initial JS payload, heavily inflating initial load time.
**Action:** Use `next/dynamic` to lazily load heavy below-the-fold sections and floating components, significantly reducing the initial bundle size and improving Time To Interactive (TTI) on long scrolling landing pages.

## 2023-11-21 - [Unnecessary DOM manipulation in useEffect]
**Learning:** Manually manipulating the DOM (like creating `meta` tags) inside a `useEffect` triggers an extra render commit phase and can cause layout thrashing. In React 19, this is completely unnecessary since React natively hoists `<title>` and `<meta>` tags to the document head when rendered in standard component JSX.
**Action:** Always render document metadata (title, description) declaratively directly in the JSX using `<title>` and `<meta>` tags rather than utilizing imperative `document.createElement` manipulations inside `useEffect`.
