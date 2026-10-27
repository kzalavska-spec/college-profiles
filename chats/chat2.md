# Secondary deadline differentiation

_Started 2026-10-15 14:17 UTC_

---

## User

Continuing from "Grinnell College Profile Recreation".

## Assistant

We've been building out deadline display options for the Grinnell College profile page in the U.S. News design system. The goal is to show Application Deadline alongside Early Decision and Early Action deadlines, each clearly labeled and easy to tell apart at a glance.

We explored three main directions: 1a (grouped cards with main deadline in blue), 1c (compact table layout), and 2b (full-width deadline list). After testing, we settled on 2b as the best option and integrated it into the profile page alongside 1c for comparison.

Key decisions made:
- Removed ED/EA letter tiles (too generic) in favor of uppercase title labels like "APPLICATION DEADLINE" paired with commitment descriptions.
- Used a lock icon for "Commit to enroll if admitted" and split-arrows icon for "No commitment to enroll" so the two lines are instantly different.
- Built a neutral chip for "Final deadline" (white background, dark text, thin border) and changed the Application Deadline date to dark gray to reduce blue saturation on the page.
- Made the layout responsive: on mobile with a single deadline, it avoids the empty-space problem that plagued 1c.
- Added a Tweaks panel to toggle between one, two or three deadline scenarios and show/hide countdown days.

Current state:
- **Admissions Deadlines Options.dc.html** contains variants 1a (cards), 1c (compact table) and 2b (full-width list) with all deadline combinations and mobile views.
- **Profile Admissions - 2b.dc.html** and **Profile Admissions - 1c.dc.html** show each variant in page context with "From the School", "2027 Rankings", Admissions, and "Will You Get Into Grinnell?" sections.
- All use the Atlas Chip component for "Final deadline" and match the design system's link styling (deep blue on hover, no underline).

Open next steps: confirm whether the neutral chip style is allowed in Atlas (we matched production's solid blue chip, then switched to neutral to balance page colors); finalize which variant (2b or 1c) moves forward; check with editorial that commitment descriptions are accurate for all schools in the data.

## User

let's work on more differentiation for Secondary deadlines in variant 2b. Suggest a few options on separate page

## User

Found issues — fixing…

## User

Found issues — fixing…

## Assistant

_[tool: grep]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I fixed 3c: the Atlas Chip has no icon support, so I removed the lock and split-arrow icons from the Binding / Non-binding chips and updated the description to match. The page loads with no console errors.

The chips now tell Early Decision and Early Action apart only by filled vs. outlined style. If you want the lock back, 3b already carries it in the icon tile.

## User

Integrate 3a version into 2b variant on another page

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: copy_files]_

_[tool: run_script]_

_[tool: copy_files]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I built 3a into a copy of the 2b profile page, saved as **Profile Admissions - 2b-3a.dc.html**. The original 2b page is unchanged. It's out for review now; I haven't looked at the rendered page myself yet.

- **Early deadlines:** they now sit under an "APPLY EARLY · OPTIONAL" divider, indented, with their dates in regular weight. The "What's the difference?" link moved onto that divider.
- **Single deadline:** when there's no early deadline, the divider and early rows are hidden.
- **Tweaks:** the deadline-scenario and countdown toggles still work.

The parentheses in the name I'd planned, "2b (3a)", aren't allowed in file names, hence the hyphen.

## User

Update this component on Admissions Deadline Options page

## Assistant

_[tool: grep]_

_[tool: run_script]_

_[tool: ready_for_verification]_

The 2b variant on the Admissions Deadlines Options page now uses the 3a deadline list. That includes your edit setting the early-deadline dates to weight 500. It applies to all six frames (desktop and mobile with three, two and one deadline). I also updated the 2b description and linked it to 3a. A background check is reviewing the page; I haven't looked at the result myself yet.

## User

let's add more differentiation to secondary deadlines on 1a version

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

I edited 1a directly on the page so it uses the same cues as 2b/3a; I didn't keep a copy of the old 1a. A background check is reviewing it now.

- **Heading:** an "APPLY EARLY · OPTIONAL" label now sits above the early cards, with the "What's the difference?" tooltip beside it.
- **Dates:** early dates are 22px dark gray at weight 500, so they no longer compete with the blue Application Deadline date in the hero card.
- **Commitment line:** each early card ends with a divider and the lock ("Commit to enroll if admitted") or split-arrows ("No commitment to enroll") line.
- **Countdown:** each early card shows its days-left count, which follows the countdown tweak.
- **Footnote removed:** I dropped the italic Early Decision / Early Action footnote at the bottom of the section, because each card now says the same thing.

## User

Can you also check 1a variant and propose how to decrease the usage of blue color

## Assistant

_[tool: dc_write]_

_[tool: ready_for_verification]_

I put three ways to cut blue from 1a on a new page, **1a Blue Reduction Options.dc.html**, each at desktop and mobile size. A background check is still reviewing the page.

Most of the blue in 1a comes from the hero card: its 2px border, the person icon and the two large numbers (Jan. 15 and 16%). All three options keep the links and the Apply Now button blue, so blue still marks what's clickable.

- **4a:** the card border becomes the standard 1px gray line and the icon turns gray. The numbers stay blue.
- **4b:** the blue border and icon stay, so the card still looks like the familiar U.S. News stat card. The numbers turn dark gray and semi-bold. This takes out the two largest blue areas.
- **4c:** the card becomes a flat light-gray panel with a dark icon and dark numbers, with no blue at all. This matches the shaded Application Deadline row in 2b.

I'd go with 4b: it removes the most visible blue and the card still reads as a U.S. News stat card. 4c is the quietest, but the stat card stops looking like U.S. News.

