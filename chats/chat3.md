# Separating design variants

_Started 2026-10-16 09:31 UTC_

---

## User

Continuing from "Secondary deadline differentiation".

## Assistant

We've been working on deadline display options for the Grinnell College profile page. The core goal is to show Application Deadline alongside Early Decision and Early Action deadlines with clear visual separation and minimal blue saturation.

We started with three variants (1a, 1c, 2b), then explored secondary deadline differentiation in variant 2b by testing four sub-options (3a–3d). Option 3a—an "APPLY EARLY · OPTIONAL" divider that groups and indents early rows with lighter dates—emerged as the strongest approach and was integrated into 2b and then backported to 1a.

Key decisions made:
- Removed ED/EA letter tiles and icon chips (Atlas doesn't support icons on chips) in favor of uppercase title labels with commitment descriptions and icon tiles.
- Used lock and split-arrows icons to instantly distinguish binding vs. non-binding commitment.
- Set early-deadline dates to weight 500 and regular gray to reduce blue visual weight.
- Moved the 3a grouping approach from 2b into 1a for consistency.
- Explored blue reduction in 1a by testing three treatments (4a, 4b, 4c). I recommended 4b: keeping the card border and icon blue but darkening the two large date numbers to reduce blue saturation while preserving the U.S. News stat-card feel.

Current state:
- **Admissions Deadlines Options.dc.html** contains all variants (1a, 1c, 2b/3a) with six frames each (desktop and mobile, one/two/three deadlines).
- **Profile Admissions - 2b-3a.dc.html** shows 2b/3a integrated into full page context.
- **1a Blue Reduction Options.dc.html** proposes three color treatments (4a, 4b, 4c) for the hero card.

Open next steps: decide which blue reduction option (4b recommended) to integrate into 1a; confirm whether your 4b preference aligns; finalize variant choice between 1a, 1c, and 2b for handoff.

## User

Put 1c and 2b variants on separate page

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I moved 1c and 2b onto their own pages: **Deadlines Option 1c.dc.html** and **Deadlines Option 2b.dc.html**. Both still have all their frames, and each page has a link back to the main file.

**Admissions Deadlines Options.dc.html** now holds just 1a and 2a. The links between variants now point to the new pages.

## User

Take description text for secondary deadlines from variant 2b and put it into variant 1c

## Assistant

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

In 1c, the early deadline rows now use 2b's descriptions and styling: "Commit to enroll if admitted" next to a lock icon, and "No commitment to enroll" next to a split-arrows icon, in 14px gray. These replace the old "Binding: …" and "Non-binding: …" lines.

## User

add mobile version for Desktop · Application Deadline only

## Assistant

_[tool: dc_js_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

I added a "Mobile · Application Deadline only" frame to 1c, at the bottom of the mobile column. 1c now has six frames, the same set as 2b.

## User

In mobile versions put 'See full admissions details' at the end of the section

## Assistant

_[tool: dc_js_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

In the 1c mobile frames, "See Full Admissions Details »" now sits at the very end of the section, below the scores disclaimer. The desktop frames keep it under the deadline table.

## User

In mobile versions put 'See full admissions details' at the end of the section

## Assistant

_[tool: dc_js_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

In the 2b mobile frames, "See Full Admissions Details »" now sits at the very end of the section, below the scores disclaimer. The desktop frames keep it under the acceptance-rate card.

## User

remove 'Final deadline' chip from Application Deadline only version

## User

remove 'Final deadline' chip from Application Deadline only version

## User

remove 'Final deadline' chip from Application Deadline only version

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

In 1c, the "Final deadline" chip now shows only when there are early deadlines, so it's gone from both Application Deadline only frames (desktop and mobile). This matches the change in 2b.

## User

Combine pages Deadlines Option 1c and Deadlines Option 2b. Create presentation slide for PO with short explanation of two approahes/design decisions about 3 application deadline. Use requirements from the initial prompt to support reasonings

## Assistant

_[tool: list_files]_

_[tool: grep]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: show_html]_

_[tool: delete_file]_

_[tool: ready_for_verification]_

I combined 1c and 2b into one page, **Deadlines 1c vs 2b.dc.html**, and deleted the two separate pages. A check of the layout is still running. Links in the main options file now point to the new page.

The page starts with a 1920×1080 slide for the PO, followed by all frames of both variants. The slide shows:
- **Requirements**, numbered R1–R4, on the left.
- **One column per variant:** a scaled-down desktop view with all three deadlines, then four short design decisions. Each decision is tagged with the requirement it supports.

I didn't have the original brief, so I wrote the four requirements from what we'd agreed on:
- **R1:** Application Deadline stays the primary date.
- **R2:** Early Decision and Early Action are clearly separate, and binding vs. non-binding is obvious.
- **R3:** It works with one, two or three deadlines, on desktop and mobile.
- **R4:** Less blue, and only Atlas components (no icons on chips).

Please send the original requirements if they're worded differently, and I'll update the slide to match.

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

I tightened the slide so everything fits in 1080px. A layout check is still running.

- **Previews:** they're smaller and no longer cut off, so both mini cards show in full.
- **Title:** shortened to one line: "Showing three admissions deadlines: two approaches".
- **Decisions:** now three per variant instead of four. In 1c, the dark-gray dates point moved into the "Final deadline" bullet, which is now tagged R1 R4. In 2b, I removed the "larger date" bullet, since the indented early rows already make the Application Deadline the main date (R1).

## User

re-organize this page to be more presentable for PO

## Assistant

_[tool: grep]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I reorganized the page so the PO compares Option 1 and Option 2 directly. A layout check is still running.

- **Slide:** still at the top with your wording, unchanged except that I removed the empty last bullet under Option 2.
- **Comparison:** below the slide, the frames are grouped into three numbered scenarios: all three deadlines, Application plus one early deadline, and Application Deadline only.
- **Each scenario:** Option 1 and Option 2 sit side by side under labeled headers, with the desktop view on top and the mobile view below it.

The old frame lists for each option are gone; every frame now appears inside one of the three scenarios.

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Fixed: the divider above each scenario now runs the full width, across both option columns.

## User

prepare this page for PDF download

## Assistant

_[tool: read_skill_prompt]_

_[tool: copy_starter_component]_

_[tool: read_file]_

_[tool: grep]_

_[tool: run_script]_

_[tool: show_html]_

Page 1 renders. Checking the other pages.

_[tool: multi_screenshot]_

All pages fit. Opening the export dialog.

_[tool: show_pdf_export_dialog]_

I made a print version of the page as five 1920×1080 pages, and the export dialog is open now. Nothing has printed yet; click "Print or save as PDF" there to save it.

1. The PO slide.
2. Desktop, all three deadlines: Option 1 and Option 2 side by side.
3. Desktop, Application plus one early deadline.
4. Desktop, Application Deadline only.
5. Mobile: all six mobile frames on one page, scaled down to fit.

The print version is a snapshot. If you edit the main page, ask me to rebuild it before exporting again.

## User

Save as standalone HTML: `Profile Admissions - 1c.dc.html`

## Assistant

_[tool: grep]_

_[tool: run_script]_

_[tool: super_inline_html]_

_[tool: show_html]_

_[tool: multi_screenshot]_

_[tool: get_webview_logs]_

_[tool: delete_file]_

_[tool: present_fs_item_for_download]_

The standalone file, `Grinnell Profile Admissions - 1c.html` (794 KB), is ready to download above and works offline.

This page still shows the old early-deadline text ("Binding: …" / "Non-binding: …"), not the newer lock and split-arrows lines from the option pages.

## User

Save as standalone HTML: `Profile Admissions - 2b.dc.html`

## Assistant

_[tool: grep]_

_[tool: run_script]_

_[tool: super_inline_html]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: delete_file]_

_[tool: present_fs_item_for_download]_

The standalone file, `Grinnell Profile Admissions - 2b.html` (795 KB), is ready to download above and works offline.

## User

Take Grinnell College Profile and provide 2-3 variants on a separate page of After College section based on these requirements:
Enhance the After College section on the overview tab of College Profiles (freemium + premium concepts) and recommend and design a new placement higher on the page for this section. It should be discoverable and feel core to the profile, not an afterthought at the bottom. Keep in mind this isn’t a full After College section filled with a lot of information as this will be placed on the Overview tab.

Product Design themes:

B2B: Schools want a strong, prominent place to showcase ROI and outcomes.

B2C: Students/families use this info heavily to assess whether a school is worth the investment

Goals


Business goals:

Increase perceived value and engagement with the “After College” content on college profile pages.

Create a clear upgrade path for schools (from a freemium experience to a premium, paid experience).

Provide B2B school partners with a stronger, more visible ROI showcase on their profile pages.

User goals:

Help students and families quickly answer: “What happens after graduation at this school?”

Make it easier to compare schools on outcomes (earnings, graduation, career support, etc.).

Provide schools with a flexible, premium area to tell their career outcomes story in richer formats (video, spotlight, links).

Success metrics:

Increased engagement rates on college profile pages (scroll depth and time on page for page views per visit PV/V)

Increased traffic click-through on “After College” modules (expands, hovers, clicks to detail pages, play video, etc.) and contribution to lead-gen/qualified inquiries for Student Connect

User Story


As a prospective student (and their family), I want to quickly understand the career outcomes and ROI for a school directly on its profile page, so I can decide whether the school is worth the investment and belongs on my apply/enroll list.

As a B2B school partner, I want a prominent, compelling “After College” area on my school’s profile where I can showcase outcomes and career support, so I can differentiate my institution and demonstrate ROI to prospective students.

Where?


Page type: US News college profile pages.

Example URL: https://www.usnews.com/best-colleges/grinnell-college-1868 

Current placement: “After College” section is at the very bottom of the page.

Acceptance Criteria


Placement recommendation:

At least one recommended new placement for “After College” content higher on the college profile page is documented and visualized in both desktop and mobile mocks.

The mocks clearly show how users would encounter this content in the overall page flow.

Freemium mock:

A design file showing the freemium “After College” experience for a sample school, using the Grinnell profile as the base reference or a generic school shell.

Includes a clearly defined set of ROI/outcomes metrics (see data to work with in the Resources section of this ticket)

Fits visually with existing typography, colors, and data modules on college profiles.

Premium mock:

A second design showing the premium version with all freemium metrics plus a customizable storytelling layer (video embed, short spotlight story, custom links).

Demonstrates clear visual differentiation between standardized US News data and school-provided content.

Shows flexible layouts for varying content availability.

Resources


ROI/outcomes metrics: 

We have the data in the screenshots below to work with. Also, please include “Firms That Most Frequently Visit Career Fairs” which is not shown in the screenshots below in your list to consider. Please use mock data for now as well if data shows N/A below.

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: grep]_

_[tool: run_script]_

_[tool: grep]_

_[tool: list_files]_

_[tool: grep]_

_[tool: dc_write]_

_[tool: ready_for_verification]_

I built the After College options on a new page, **After College Options.dc.html**. A layout check is still running.

**Placement:** I recommend putting After College directly after Overview, above 2027 Rankings, and adding an "After College" tab to the sticky tab bar. The page shows the page order today and as recommended, for desktop and mobile.

**Variants:** each one has five frames: desktop freemium, desktop premium (video, spotlight and links), desktop premium with less school content (spotlight and links only), mobile freemium and mobile premium.
- **5a, Outcomes snapshot:** four headline numbers (starting salary, midcareer salary, 4-year graduation rate, average debt), then career readiness and where graduates work. This is closest to the existing profile modules.
- **5b, Earnings vs. cost:** debt, four-year cost after aid and both salaries on one bar scale, then three career facts and a row of employers.
- **5c, Tabbed outcomes card:** the most compact option, with four clickable tabs. Premium adds a fifth "From Grinnell" tab.

In all three, U.S. News data stays in the standard white module. School-provided content sits in a gray "From Grinnell College" panel with a Request Info button, which is the lead-gen hook for Student Connect.

Things to check:
- **Mock data:** midcareer salary ($118,600), salaries by major, the career fair firms, and the alumni spotlight and links are made up for now.
- **Derived number:** the $71,088 four-year cost in 5b is the $17,772 annual cost after aid times four.
- **Video image:** the video slot is empty; drop in a poster image and it fills the slot in every frame.

