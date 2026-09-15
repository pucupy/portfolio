The shared page header. Sticky, translucent over a 14px blur, hairline bottom rule — no shrink, no shadow, no scroll state.

```jsx
<SiteHeader nav={[
  { href: '/#work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/cv/cv.pdf', label: 'CV' },
]} />
```

Nav wraps on narrow screens rather than collapsing into a menu button — keep it that way.
