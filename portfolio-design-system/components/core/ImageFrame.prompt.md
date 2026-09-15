Every image on the site. Fixed height, 12px radius, ground-coloured letterboxing when `contain`.

```jsx
<ImageFrame src="/images/console.webp" height={560} fit="contain" alt="Console dashboard" />
```

Reserve the height even before a real file exists — never ship a visible "drop image here" placeholder.
