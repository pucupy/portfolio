SkipLink — a keyboard-only "skip to content" link, first focusable element in the DOM.

```jsx
<SkipLink targetId="main" label="Skip to content" />
```

Renders offscreen (`top: -48px`) until focused, then slides into view. Pair with `id="main"` on the primary landmark. Every page in this system should include one.
