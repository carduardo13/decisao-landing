## 2024-06-25 - [Add visible focus styles]
**Learning:** Adding visible focus styles (`focus-visible`) to custom interactive elements (like tabs and dropdown triggers) is critical for keyboard navigation accessibility, as browsers' default focus rings are often stripped out or insufficient on custom styled components.
**Action:** When creating custom interactive elements (buttons acting as tabs, custom selects), always include `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2` (or similar) to ensure keyboard users can track their position.
