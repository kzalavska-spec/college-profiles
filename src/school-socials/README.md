# School socials: Instagram + TikTok, stacked (BC-5787)

College profile, Campus Life tab. A single feed component renders once per network. Instagram keeps its slot below Campus Life, and TikTok renders directly below it. A divider appears only when both networks are shown.

This is plain ES module + CSS with no build step and no dependencies. It reads U.S. News design-system tokens when they're on the page and falls back to literal values when they aren't.

Design source: `project/Socials Stacked - Dev Handoff.dc.html` and `project/SocialFeed.dc.html`.

## Files

| File | Purpose |
|---|---|
| `school-socials.js` | `mountSchoolSocials()`, `renderSocialFeed()`, display logic, formatters |
| `school-socials.css` | Desktop grid, mobile carousel (≤767px), cards, focus rings |
| `assets/ig-logo.png` | Instagram logo, 72px desktop / 40px mobile |
| `demo/` | Demo page with a state switcher: both, one network, token expired, fewer than 3 posts, neither |
| `school-socials.test.mjs` | Unit tests: `node --test src/school-socials/school-socials.test.mjs` |

Run the demo: `python3 -m http.server` from the repo root, then open `/src/school-socials/demo/`.

## Usage

```html
<link rel="stylesheet" href="school-socials.css">
<div id="school-socials"></div>
<script type="module">
  import { mountSchoolSocials } from './school-socials.js';
  mountSchoolSocials(document.getElementById('school-socials'), data, {
    track: (category, action) => gtag('event', action, { event_category: category }),
  });
</script>
```

The page owns the spacing around the slot: 64px desktop / 48px mobile from Campus Life and to After College. When neither network is available, the slot is emptied and set `hidden`, so After College follows Campus Life with the standard gap.

### Data contract

```js
{
  schoolName: 'Grinnell College',
  instagram: {
    connected: true,
    status: 'ok',                 // anything else ('token_expired', 'error') hides it
    account: { handle: 'grinnellcollege', profileUrl, avatarUrl },
    posts: [{ url, imageUrl, caption, timestamp }]           // CDN permanent URL
  },
  tiktok: {
    connected: true,
    status: 'ok',
    account: { handle: '@grinnellcollege', profileUrl, avatarUrl },
    posts: [{ url /* share_url */, imageUrl /* cover_image_url */, caption, timestamp, views }]
  }
}
```

`timestamp` can be epoch ms or an ISO string. TikTok `cover_image_url` values expire, so refresh them server-side before rendering.

## Behaviour implemented

- **Order:** Instagram first, then TikTok.
- **Hide a network** when it isn't connected, its `status` isn't `ok`, or it has fewer than 3 posts with a URL and image. The other network still renders, without the divider.
- **Posts:** the 3 most recent, newest first. TikTok captions are capped at 150 characters, and all captions are clamped to 2 lines.
- **Desktop:** 72px logo; 64px avatar; handle in Montserrat 600 15px; name in Roboto 14px gray50; Follow is a secondary medium button. 20px from header to cards, then a 3-column grid with 16px gaps. Cards have an 8px radius, a 1px gray15 border and no shadow. Media is 4:5 with `object-fit: cover`. On hover the image scales to 1.02 over 150ms.
- **TikTok overlay:** play icon and view count (`8.9K`, `1.2M`) 12px from the bottom-left, Roboto 500 12px, white on rgba(44,48,60,.8), radius 4px.
- **Meta row:** relative date (`Less than a day ago`, `5 days ago`, `2 weeks ago`, …) in 13px gray50, plus a 20px network icon on desktop.
- **Mobile (≤767px):** 40px logo and avatar; the handle truncates with an ellipsis; Follow is the small button. The carousel bleeds to the screen edge (`--ss-gutter`, default 16px); cards are 80% wide with 12px gaps and snap to the start. 16px from header to carousel, 20px from carousel to dots. Dots are 8px: blue50 for active, gray15 for the rest.
- **Divider:** 1px gray15 with 32px above and below on desktop, 24px on mobile (`--ss-divider-gap`).
- **Click targets:** the whole card opens the post or `share_url` in a new tab. Follow opens the profile.
- **GA:** category `school_instagram` / `school_tiktok`; actions `follow`, `card-1` to `card-3`. Pass `track`; by default it pushes to `window.dataLayer` when present.
- **Accessibility:**
  - Each block is a `<section>` labelled "{School} on Instagram/TikTok".
  - Cards are labelled "Open Instagram post: {caption}" or "Watch on TikTok: {caption}".
  - The Follow label includes the network and handle.
  - Cover images use `alt=""`.
  - Dots are `aria-hidden`. Cards are focusable in order, and focusing a card scrolls it into view.
  - Focus rings are 3px blue50 via `:focus-visible`, not clipped by the carousel.
  - Reduced motion is honoured through the DS `a11y.css`.
- A cover image that fails to load (for example, an expired URL) falls back to the gray05 media box.
- All text from the API is written with `textContent`, and URLs that aren't http(s) are replaced with `about:blank`.

## Open items

1. **TikTok logo:** the mark is the design's hand-drawn placeholder. Replace `TT_LOGO_SVG` and the TikTok icon in `NETWORKS.tiktok` with the official assets from TikTok's brand guidelines.
2. **Breakpoint:** the handoff shows only 1180px and 375px frames. The 767px switch is an assumption; please confirm it with design.
3. **Divider spacing:** the handoff spec says 32/24px *above and below*, but the drawn frames show a bar on only one side. I followed the spec text.
4. **Mobile spacing (48px between sections, 24px at the divider)** was chosen by the design assistant and confirmed for this build.
5. The TikTok covers in the demo are Unsplash stock photos until real Grinnell covers are supplied.
