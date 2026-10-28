## 2024-10-28 - Optimizing Un-debounced Scroll Event Listener
 **Learning:** Running JavaScript logic on every scroll frame (e.g. for inactivity tracking or popup visibility) can lead to layout thrashing and lower FPS. A custom throttle utility can be added without relying on external dependencies like lodash.
 **Action:** For scroll or resize events, implement or reuse a lightweight throttle utility (`src/lib/utils.ts`) with an appropriate threshold (e.g., 200ms) to ensure JS doesn't block the main thread excessively.
