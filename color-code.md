
# Colors

> **Important** Don't configure colors in uno.config, preset-ui already handled it!


## CSS Variables

> **Note** : you need to provide every color with all shades from 50 to 950, for white color provide it via a `--c-white` variable

```css
:root {
  /* global colors  */

  --c-white: value;
  /* bg colors  */
  --bg: var(--c-white);
  --bg-subtle: var(--c-gray-50);
  --bg-surface: var(--c-gray-100);
  --bg-muted: var(--c-gray-200);
  --bg-surface-elevated: var(--c-gray-300);

  /* text foreground */
  --fg: var(--c-gray-700);
  --fg-muted: var(--c-gray-600);
  --fg-title: var(--c-gray-900);
  --fg-subtitle: var(--c-gray-800);

  /* border colors  */
  --border: var(--c-gray-200);
  --border-subtle: var(--c-gray-50);
  --border-light: var(--c-gray-200);
  --border-strong: var(--c-gray-300);
  --border-emphasis: var(--c-gray-400);

  /* gray colors */
  --c-gray-50: value;
  --c-gray-100: value;
  /* ... other shades */
  --c-gray-950: value;

  /* repeat the same for other colors : primary, secondary, accent, info,.... */
}
```
