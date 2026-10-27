# TikTok logo source inquiry

_Started 2026-10-26 14:16 UTC_

---

## User

Continuing from "1a Stacked variant integration".

## Assistant

We've been building out the TikTok integration into the college profile using the 1a stacked, equal-weight layout variant. You chose this approach over the combined switcher to give both Instagram and TikTok equal visual presence on the page.

**Work completed:**
- Integrated 1a stacked layout into the main college profile page (Profile Admissions - TikTok Stacked.dc.html). Instagram stays under Campus Life; TikTok sits directly below with a divider line between them when both are present. Single-network display works with no divider.
- Replaced empty TikTok placeholders with college-life stock photos (Unsplash): dorm tour, classroom scene, dining hall, library stacks—matching the captions thematically.
- Built a developer handoff file (Socials Stacked - Dev Handoff.dc.html) showing desktop and mobile side by side with the full-page layout context (main column, gutter, right-rail ad). Includes a comprehensive specs table covering header, cards, image crop, captions, carousel, analytics events, display logic and accessibility.

**Key decisions:**
- Mobile spacing chosen as 48px between sections and 24px above/below divider (not copied from existing design—needs your confirmation).
- Stock photos used pending real TikTok covers from Grinnell; swap will be quick once you provide them.
- The shared SocialFeed component means updates to TikTok also affect other social layout files.

**Current state:**
- Profile Admissions - TikTok Stacked.dc.html: live profile page with stacked networks, Socials tweak toggles both/Instagram-only/TikTok-only states.
- Socials Stacked - Dev Handoff.dc.html: developer handoff with desktop/mobile frames, pink spacing markers, numbered pins and full specs table.
- SocialFeed.dc.html: shared component with college-life stock photos.

**Open next steps:**
- Confirm mobile spacing (48px sections, 24px divider margins).
- Provide real TikTok cover images and captions.
- Review spec table completeness and handoff format with dev team.

## User

where did you get small Tiktok logo on each card from? Can you provide a resource of it?

## Assistant

_[tool: grep]_

_[tool: run_script]_

_[tool: grep]_

_[tool: grep]_

_[tool: write_file]_

_[tool: present_fs_item_for_download]_

I hand-drew that icon as a simple placeholder in the shared SocialFeed component. It isn't TikTok's official logo, so I've saved it as `assets/tiktok-glyph-placeholder.svg` and it's ready to download above.

For production, the official TikTok logo files and the rules for using them come from TikTok's brand guidelines on its developer and partner sites. If you get the official SVG, send it to me and I'll put it in place everywhere the placeholder is used.

## User

We got addiitonal info from PO that there could be up to 10 different deadlines for some schools. We need to come up with UI solution for this case. We wanna limit the number of deadlines shown in Overview tab (btw, change the active tab on a mock to Overview) to 3, and still to give a possibility to see all deadlines. Provide 2-3 variants for this

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I switched the mock's active tab to Overview. I also added a "Schools with up to 10 deadlines" section to the Final file, just above Deadline States, with 3 variants side by side. Each one shows 3 deadlines on Overview:

- **2a: Expand in place.** "Show all 10 deadlines" opens the rest of the list inline, and "Show fewer" closes it again.
- **2b: Open in a dialog.** A "View all 10 deadlines" button opens a pop-up with every deadline grouped into three categories: application, financial aid and scholarships, and transfer and international. The page length doesn't change.
- **2c: Link to the Admissions tab.** Below the 3 deadlines is a short summary ("+7 more deadlines, including…") and a link to the full table on the Admissions tab.

**Which 3 show on Overview:** Regular Decision, still marked as the final deadline, plus the next 2 upcoming early deadlines. Deadlines that have already passed drop off. Please check this rule with the PO.

The example school's 10 deadlines are made up for the mock, so they'll need replacing with real data.

## User

Important note: new UI should not interfere existing See full admissions details CTA. We have Apply Now CTA which is main, then See full admissions details CTA. And we don't wanna make See all deadlines look like them

## Assistant

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I reworked all 3 variants so the "see all" control looks like part of the deadlines table rather than another CTA. None of them use blue links, », red, or outlined buttons any more. Each variant now shows the real "See Full Admissions Details »" link underneath, so you can see the two side by side.

- **2a:** A gray row inside the table's bottom edge reads "Show 7 more deadlines" in dark text with a small arrow. Clicking it opens the rest of the list in place.
- **2b:** A small dark text control, "All 10 deadlines" with a list icon, sits in the section header and opens the pop-up. It's at the top, away from the CTAs at the bottom.
- **2c:** I replaced the Admissions-tab link with a "Key dates | All 10" switch in the header that swaps what the table shows, like a filter. Linking to Admissions overlapped with "See Full Admissions Details", so it's gone.

The changes are still being checked.

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

I renamed 2c to "Key dates / All switch", since it no longer links to the Admissions tab. The page reloaded with no errors.

## User

let's integrate 2a variant into mock

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

I built 2a into the mock's Application Deadlines section. The table shows the 3 key deadlines, with a gray "Show 7 more deadlines" row at the bottom that opens the rest in place. "See Full Admissions Details »" sits underneath, unchanged.

The Deadlines tweak now has a "10 deadlines" option, and I made it the default. The other options (3 deadlines, 2, rolling, none) look the same as before. The comparison section with 2a, 2b and 2c is still further down the page. The change is still being checked.

## User

provide this deadlines UI together with mobile version at the bottom of the page, previously removing provided variants

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I removed the 2a/2b/2c comparison and put a "Schools with up to 10 deadlines" section at the bottom of the page instead, with desktop and mobile side by side:

- **Desktop:** a working copy of the deadlines block as it appears in the page, including the white "Show 7 more deadlines" row you set.
- **Mobile (375px):** each deadline's date sits under its title instead of on the right. The "show more" row is full-width and at least 48px tall, so it's easy to tap. It expands separately from the desktop version.

The Deadline States section is still below it. The change is still being checked.

## User

Add 8px padding between the table and See Full Admissions Details » CTA

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

I added 8px of space between the table and "See Full Admissions Details »" in the desktop example at the bottom of the page, where the link was touching the table.

I left two other spots alone because they already had space there: the mock page (32px) and the mobile example (16px). Tell me if you want either of those set to 8px too.

## User

Save as standalone HTML: `Socials Stacked - Dev Handoff.dc.html`

## Assistant

_[tool: grep]_

_[tool: grep]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: super_inline_html]_

_[tool: show_html]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: save_screenshot]_

Images load in the bundled file.

_[tool: present_fs_item_for_download]_

The offline handoff file is ready to download above (2.7 MB). It includes the width change you made. I opened it and the Instagram posts load, but I didn't scroll down to confirm the TikTok covers.

To make this work, I changed the shared SocialFeed component so it can use the embedded images. In the normal files it still shows the same images as before. There's also a new working copy, `Socials Stacked - Dev Handoff - export.dc.html`, which you can delete if you don't need it.

