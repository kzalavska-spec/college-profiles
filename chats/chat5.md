# 1a Stacked variant integration

_Started 2026-10-26 12:05 UTC_

---

## User

Continuing from "School data analysis".

## Assistant

We've been working on a Student Connect college profile design system, starting with application deadlines UI and expanding to social media components.

**Work completed:**
- Built and refined the Application Deadlines section (Variant 2) with support for Early Decision, Early Action, Regular Decision and Rolling admission. The design handles four data states: no deadlines (39.4% of profiles), one deadline (34.3%), two deadlines (17.3%), and rolling (25.1%). A tweaks menu lets you toggle between states.
- Added "What's the difference?" tooltip (200px width) explaining deadline types. Removed "reply by May 1" from Regular Decision description.
- Integrated four profile sections: Campus Life, Instagram block with real images from Grinnell screenshot, After College with stats, and Reviews & Ratings.
- Built TikTok social component design as a premium feature. Created four layout options: (1) combined Instagram | TikTok switcher (recommended), (2) stacked equal-weight sections, (3) stacked with compact TikTok, (4) side-by-side two-card layout.
- Generated a 10-slide deck for PO comparing all TikTok variants with pros/cons and answering the four design questions.

**Key decisions:**
- TikTok component mirrors Instagram structure exactly (cards, captions, Follow button) to keep it cohesive. Uses custom cards via TikTok Display API, not embeds, to protect page speed.
- Combined switcher is the recommended option because it keeps section height short and doesn't feel chunky, meeting both user and business goals—though it may reduce TikTok's click-through if discoverability is critical.
- All social cards cropped to 4:5 aspect ratio to handle portrait video covers without distortion.
- Mobile: horizontal carousel (peek-scroll) with dots for both networks.

**Current state:**
- Profile Admissions - TikTok.dc.html: main profile page with combined switcher, three states shown at bottom.
- Socials - Separate Sections Options.dc.html: the three separate-layout variants (1a, 1b, 1c / Options 2, 3, 4 in deck).
- TikTok Options Deck for PO.dc.html: 10-slide comparison deck. Images enlarged on slides 6 and 7.
- SocialFeed.dc.html: reusable component with compact mode and card count settings.
- Assets: ig-logo.png, ig-post-1/2/3.png, ig-avatar.png in assets/ folder.

**Open next steps:**
- PO to answer 12 questions (rephrased for clarity) to confirm which variant. Priority: Is TikTok's goal clicks or visual richness? Is height constraint hard? Does TikTok have separate pricing?
- Swap TikTok logo in designs for official one.
- Add real TikTok cover images and captions.
- Decide on default tab behavior if both networks present (Instagram first vs. most recent post).
- Clarify brand/legal rules on TikTok branding and view counts.
- Plan A/B test approach if needed.

**Project files:** Profile Admissions - TikTok.dc.html, Socials - Separate Sections Options.dc.html, TikTok Options Deck for PO.dc.html, Profile Admissions - Final.dc.html, SocialFeed.dc.html.

## User

We will move further with 1a Stacked, equal weight variant, integrate it into existing College profile page

## Assistant

_[tool: read_file]_

_[tool: read_file]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I added option 1a to the college profile page as a new file, **Profile Admissions - TikTok Stacked.dc.html**. The page now opens scrolled to the social section. The switcher version is still in its own file and hasn't changed.

- **Placement:** Instagram stays in its current spot under Campus Life. When a school has both networks, the same TikTok component sits directly below it, with a thin divider line between them.
- **One network only:** that network shows by itself with no divider. You can switch between both, Instagram only and TikTok only in the Socials tweak.
- **Notes section at the bottom of the page:** the intro, design-question answers, the three state examples (desktop and mobile) and the handoff specs now describe the stacked layout. I removed the tab-select tracking event and rewrote the hide rule, since there's no switcher anymore.

## User

remove section with variants at the bottom of the page

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

I removed the notes section at the bottom of the page: design questions, the three state examples and handoff specs. The page now ends after the profile content and loads with no errors. The Socials tweak still switches between both networks, Instagram only and TikTok only.

## User

replace placeholders in Toktok section with random media

## Assistant

_[tool: grep]_

_[tool: list_files]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

I replaced the empty TikTok placeholders with random stock photos. They're not Grinnell images, so the content won't match the captions.

The change is in the shared TikTok/Instagram component, so the TikTok cards in the other social layout files also show these photos now. The view-count badges stay on each cover.

Send me real TikTok cover images when you have them and I'll swap them in.

## User

it should be still be related to university life

## Assistant

_[tool: run_script]_

Need to see them to pick relevant ones.

_[tool: run_script]_

_[tool: view_image]_

Mapping to captions: dorm tour → 5, day in the life → 9, dining hall → 6, study spots → 10.

_[tool: dc_js_str_replace]_

_[tool: delete_file]_

_[tool: ready_for_verification]_

I swapped the TikTok covers for college-life stock photos (Unsplash), one per caption:

- **Dorm room tour:** a dorm room with bunk beds
- **Day in the life:** students in a classroom
- **Dining hall tier list:** a dining or common hall
- **Study spots:** a student walking through library stacks

The page loads with no errors. These are still generic photos, not Grinnell's, and they also show in the other social layout files.

## User

show both desktop and mobile views in the best format which will suit for hand off to developer

## Assistant

_[tool: read_file]_

_[tool: grep]_

_[tool: dc_write]_

_[tool: ready_for_verification]_

I built the developer handoff as a new file, **Socials Stacked - Dev Handoff.dc.html**. It's an open canvas you can pan and zoom, with the components drawn in place so the specs match the profile page.

- **Both networks:** a full-width desktop frame in the page layout (main column, gutter and right-rail ad) next to a 375px mobile frame. Pink bars mark the spacing in pixels, and numbered pins point to rows in the spec table.
- **One network:** Instagram only and TikTok only, each shown on desktop and mobile.
- **Specs table:** Instagram and TikTok side by side. It covers the header, cards, image crop, overlay, captions, carousel, image sources and analytics events.
- **Display logic:** what shows when both networks, one or neither are available, and when a network hides.
- **Accessibility notes:** labels for cards and buttons, image alt text, the mobile carousel and focus rings.

Please confirm the mobile spacing, because I chose it rather than taking it from an existing design: 48px between sections, and 24px above and below the divider. The live profile page has no separate mobile spacing to copy.

