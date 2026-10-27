# U.S. News & World Report — Design System

A brand-accurate design system for **U.S. News & World Report (U.S. News)**, derived from the U.S. News Material UI (MUI v5) Design System Guide and Atlas Spacing System.

> **Mission:** Empower every person to make their best decisions.

## Sources
This system was built from a single provided source:
- **U.S. News & World Report — Material UI (v5) Design System Guide** (pasted brand/theme documentation: palette hex values, MUI typography scales, Atlas 8pt spacing, shape radii, and MUI component overrides).

No codebase, Figma file, or webfont binaries were provided. The **official logo** was later supplied (`assets/usnews-logo.png`). Remaining substitutions and gaps are flagged below and in **Caveats**.

---

## Product context
U.S. News is a digital media brand best known for its authoritative **rankings** (Best Colleges, Best Hospitals, Best Cars, Best Diets, Best Places to Live) plus editorial coverage across Education, Health, Money, Travel, Cars, News, and Real Estate. The visual system is **clean, methodical, and trustworthy** — heavy whitespace, minimal visual noise, and clear hierarchy in service of a solutions-oriented reader.

The recreated product surface here is the **marketing/editorial website** (`ui_kits/website/`).

---

## Content fundamentals
How U.S. News writes:
- **Tone:** Helpful, Methodical, Balanced, Straightforward, Trustworthy. Never hype; claims are backed by method.
- **Voice:** Speaks *to* the reader ("make **your** best decisions", "in **your** inbox"). Institutional but plain-spoken.
- **Casing:** Sentence case for body and most UI. Headline case for editorial article titles ("The Best Diets Overall for 2026"). Kickers/overlines are UPPERCASE in blue50.
- **Numbers & rankings:** Precise and prominent ("more than 1,500 schools", "#1", scores 0–100). Ordinal ranks and scores are core content — display them boldly in Montserrat.
- **Disclaimers:** Set in 12px italic gray50 (methodology, data vintage). Always present where data is ranked.
- **Emoji:** Not used. The brand relies on type, color, and iconography instead.
- **Example copy:** *"Compare more than 1,500 schools on academics, cost, and outcomes."* / *"Rankings, analysis, and advice you can trust — in your inbox each morning."*

---

## Visual foundations
- **Color:** Primary **blue50 #1263D3** for interactive/links; secondary **red50 #CE2927** reserved for lead-gen CTAs and emphasis. Roughly 60% of any page is **white00 #FFFFFF**; **gray05 #F4F7F9** is the only off-white surface (cards, section bands). Text is **black80 #2C303C** (body) and **gray50 #515767** (secondary, the lightest allowable text). Borders/dividers are **gray15 #D3D7DC**. Semantic: success #248880, info #358CE7, warning #E89A00, error #B92523, and a dedicated **metric-good green #068448** for positive scores/stats.
- **Type:** **Montserrat** (600 semi-bold) for all headings/impact; **Roboto** (400/500) for body and links. Six-step heading scale (42→14px) and two body sizes (18px "Para 0", 16px "Para 1"). No text-transform on buttons — readability first.
- **Spacing:** Atlas **8pt grid** — `spacing(n) = n × 8px`. Standard grouping padding is 16px; lower-header separation 32px; major section separation 64px.
- **Shape / radii:** Three tiers by interactivity — **4px** static containers, tags & **buttons** (buttons are squared, per the Figma spec), **8px** cards/dialogs/surfaces, **16px** highly-rounded inputs. (Note: the source MUI doc specified 16px buttons, but the Figma ground truth uses 4px — Figma wins.)
- **Backgrounds:** Flat solid color. No textures, patterns, or heavy gradients. One accent gradient (blue50→#0C489B) is used sparingly for a featured-tool promo panel; otherwise avoid gradients.
- **Elevation / shadows:** Minimal. Cards are **flat with a 1px divider border and no shadow** by default; a soft shadow (`--shadow-2`) appears only on hover for interactive cards. Dialogs get one soft shadow.
- **Borders:** 1px gray15 is the workhorse — dividers, card outlines, input rests. Focus rings use a 3px blue50 glow.
- **Animation:** Subtle and functional — 0.15s ease transitions on color/border/shadow/toggle position. No bounces, no decorative or infinite motion.
- **Hover states:** Buttons darken (blue50→#0F55B5); text/outlined buttons get a faint blue tint surface; interactive cards raise a shadow and turn the border blue.
- **Press/active:** Deeper shade (e.g. #0C489B). No scale/shrink transforms.
- **Transparency & blur:** Used sparingly — low-alpha blue/red tints for chip fills and hover surfaces; a 50% black80 scrim behind dialogs. No backdrop blur.
- **Imagery:** Editorial/photographic (neutral, journalistic — not stylized/warm/graded). Thumbnails sit in cards at 8px radius; placeholders are shown here since no imagery was provided.
- **Cards:** Flat, 8px radius, 1px gray15 border, no shadow — the signature "quiet" U.S. News surface.

---

## Accessibility (WCAG 2.1 AA)
The source guide mandates WCAG 2.1 AA. This system bakes the following in:
- **Keyboard focus (2.4.7).** All interactive components render a visible **3px blue50 focus ring** on keyboard focus (`:focus-visible`), suppressed for pointer focus. Implemented in `tokens/a11y.css` via the `.usn-focusable` class (buttons, icon buttons, tabs, chip-delete, dialog close, inputs, selects) and the `.usn-control` / `.usn-control-visual` pattern (checkbox, radio, switch — the ring is mirrored onto the painted control since the native input is visually hidden). Never re-add `outline: none` without a replacement.
- **Forms (1.3.1, 3.3.1).** `Input`/`Select` associate `<label htmlFor>` with the control; helper text is linked via `aria-describedby`; error state sets `aria-invalid` and the helper gets `role="alert"` so screen readers announce it.
- **Icon-only controls (4.1.2).** `IconButton` requires `aria-label`; `Chip` delete and `Dialog` close buttons ship built-in labels.
- **Dialog (2.1.2, 2.4.3).** `role="dialog"` + `aria-modal`, labelled by its title (`aria-labelledby`), moves focus in on open, **traps Tab**, closes on **Escape**, and restores focus to the trigger on close.
- **Motion (2.3.3).** `@media (prefers-reduced-motion: reduce)` neutralizes all transitions/animations globally.
- **Utilities.** `.usn-sr-only` for visually-hidden-but-announced text.

---

## Iconography
- **Approach:** Line/stroke icons at ~2px weight, monochrome, inheriting text color — consistent with MUI's outlined icon idiom the source theme is built on.
- **Source note:** No icon font or SVG set was provided in the source material. Icons in this system are drawn as inline stroke SVGs matching the Lucide/Material-outlined style (2px round-cap strokes). **Recommended CDN substitute: [Lucide](https://lucide.dev)** — closest match to the stroke weight and outlined style used here. Flag: substitution, pending confirmation of the brand's actual icon library (likely Material Icons given the MUI foundation).
- **Emoji:** Never used.
- **Unicode:** Only typographic characters (—, &, ", ") — not as functional icons.
- **Icon-only controls** must carry an `aria-label` (see `IconButton`).

---

## Components
Reusable primitives, aligned to the MUI overrides in the source guide. Grouped by concern under `components/`:

**Forms** (`components/forms/`)
- **Button** — contained/outlined/text × primary/secondary; radius 4 (Figma spec); no text-transform.
- **IconButton** — square icon-only control; requires `aria-label`.
- **Input** — labelled text field with helper/error; rounded (16); blue focus ring.
- **Select** — native select styled to match Input.
- **Checkbox** — square (radius 4), fills blue when checked.
- **Radio** — circular single-select; group by `name`.
- **Switch** — on/off toggle.

**Data display** (`components/data-display/`)
- **Card** — flat, radius 8, 1px divider border, no shadow; optional interactive hover.
- **Chip** — static tag, radius 4; filled/outlined; semantic colors.
- **Badge** — count/status indicator, standalone or anchored.

**Feedback** (`components/feedback/`)
- **Alert** — inline status message (success/info/warning/error).
- **Dialog** — modal surface, radius 8, with scrim + action row.
- **Tooltip** — hover/focus label, dark surface, radius 4.

**Navigation** (`components/navigation/`)
- **Tabs** — underline section navigation; active tab bold + blue.

### Intentional additions
- **Alert** and **Tooltip** were added beyond the three components explicitly overridden in the source (Button, Card, Chip). They're standard MUI primitives the brand's product surfaces need and follow the same token rules. Remove if out of scope.

---

## UI kits
- **`ui_kits/website/`** — U.S. News editorial homepage (SiteHeader, Hero, ArticleGrid, RankingsPanel, NewsletterFooter). `index.html` is a self-contained interactive recreation.

---

## Foundation cards (Design System tab)
Specimen cards live in `guidelines/` (Colors, Type, Spacing, Brand) and each component directory (Components group).

---

## Repository index
- `styles.css` — global entry point (imports only). **Consumers link this one file.**
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`, `base.css`.
- `components/` — `forms/`, `data-display/`, `feedback/`, `navigation/` (each: `.jsx` + `.d.ts` + `.prompt.md` + card html).
- `guidelines/` — foundation specimen cards.
- `ui_kits/website/` — website UI kit + README.
- `SKILL.md` — Agent Skills manifest.
- `readme.md` — this file.

---

## Caveats
- **Logo provided.** The official U.S. News & World Report wordmark is at `assets/usnews-logo.png` (445×113, opaque white background) and is used in the website header, footer (on a white container), and the Brand logo card. It has a solid white background — for dark surfaces it's placed on a white container. **Ask:** if you have a transparent-PNG or reversed (white) version for dark backgrounds, send it and I'll swap it in.
- **Fonts via Google Fonts CDN.** Montserrat & Roboto are loaded from Google Fonts (`tokens/fonts.css`) rather than local binaries — so the compiler reports 0 `@font-face` declarations. If you have licensed brand webfont files, drop them in and I'll add `@font-face` rules.
- **Icons are style-matched substitutes** (Lucide-style inline SVG). Confirm the brand's actual icon library.
- **Component scope** was inferred from the MUI overrides (Button/Card/Chip explicit) plus a standard MUI set. Tell me which components are in/out of scope for your product.
