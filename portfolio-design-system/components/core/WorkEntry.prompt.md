One entry in the numbered work list. Text stays at 700px; `media` is allowed the full 1160px container.

```jsx
<WorkEntry index="01" title="Yapily Hosted Pages" href="/hosted-pages"
  media={<ImageFrame src="/images/hosted-pages.webp" height={460} alt="" />}>
  <p style={{ margin: '0 0 16px' }}>What the project was.</p>
</WorkEntry>
```

When work is under NDA, drop `media` and put an italic `--ink-3` note in its place.
