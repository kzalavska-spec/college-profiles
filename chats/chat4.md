# School data analysis

_Started 2026-10-16 13:08 UTC_

---

## User

Continuing from "Separating design variants".

## Assistant

We've been working on the After College section for Grinnell College profile pages, aiming to move it higher and make it more discoverable while serving both B2B (schools showcasing ROI) and B2C (students assessing value) needs.

Key decisions made:
- Recommended placement: directly after Overview tab, before 2027 Rankings, with "After College" added to sticky tab bar for navigation. This makes it core to the profile rather than an afterthought at the bottom.
- Separated U.S. News standardized data (white module) from school-provided premium content (gray "From Grinnell College" panel) to show visual differentiation and create a clear freemium-to-premium upgrade path.
- Included "Request Info" button in the premium gray panel to hook into Student Connect lead-gen.
- Built three variant approaches: 5a (outcomes snapshot with four headline numbers), 5b (earnings vs. cost comparison with bar scales), and 5c (tabbed outcomes card, most compact).
- Each variant has five frames: desktop freemium, desktop premium with video/spotlight/links, desktop premium with spotlight/links only, mobile freemium, mobile premium.

Current state:
- **After College Options.dc.html** contains all three variants with placement comparison frames showing current vs. recommended page order.
- Mock data used: midcareer salary ($118,600), career fair firms, alumni spotlight, and custom links are placeholders.
- Four-year cost ($71,088) derived from annual cost after aid ($17,772 × 4).
- Video slot is empty; ready for poster image to be dropped in.

Open next steps: confirm placement recommendation and preferred variant (5a, 5b, or 5c); provide real mock data for salaries by major, career fair firms, and alumni spotlight; add video poster image; finalize premium feature set for handoff.

Project files: After College Options.dc.html, Deadlines 1c vs 2b.dc.html, Admissions Deadlines Options.dc.html, Grinnell Profile Admissions - 1c.html, Grinnell Profile Admissions - 2b.html.

## User

Got some additional data from PO. Analyse it and suggest changes in both variants (if you think there is some changes required). Do it on a separate page:
I can only see that about 60-65% of schools have provided an early decision or early action date, and most schools should have the final application date
[3:52 PM]Note we have about 2,000 school profiles, but those that we survey for the rankings are around 400 which is where I got the 60-65%. However, the rankings/data team also use other government data sources to supply data for our profiles so it's a bit difficult to trace down how often these values will populate

## Assistant

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: dc_write]_

_[tool: ready_for_verification]_

I put the analysis on a new page, **Deadlines Data Coverage.dc.html**. I haven't changed either variant file yet.

**What the data means:** Grinnell, with all three deadlines, is the exception. Over a third of surveyed schools (~150 of 400) only have a final deadline. That's probably true for most of the other ~1,600 profiles too. Some profiles will have no deadline at all.

**Changes for both variants:**
- Design the final-deadline-only version first, since it's the common case.
- Only show the "Final deadline" chip when there are early deadlines above it. On its own it just repeats the row title.
- When a school has no deadline data, show one line and a link to its admissions website instead of an empty box.
- Add a small source line under the deadlines, and hide the countdown for dates outside the current application year. Older dates from outside sources could otherwise show as "Passed."

**Variant 1:** If a school has no deadlines, the deadlines column next to the stats would disappear and leave the stats on their own. The no-data message needs to stay in that column.

**Variant 2:** It handles all three cases with no special layout work, so I recommend it.

The page also mocks up each variant in all three cases and lists four questions for the PO and data team, including a deadline count for the profiles that aren't surveyed and how rolling admissions shows up in the data. Tell me which variant you're going with and I'll apply these changes to it.

## User

can you shape the reply to my PO on her statement: I can have James pull a more accurate data point from the database, but I think we should include all 3 dates since it's valuable info users want to know and schools have asked for it to be presented.

I think she misunderstood me, thinking that I was questioning putting 3 deadlines themselves, but I wanted just to know how many profiles will have only 1 deadline (for variant 1 it will then have a lot of empty space on the left)

## Assistant

Here's a draft:

---

Agreed, we should show all three dates whenever we have them. I'm not questioning that.

My question was about layout. In Variant 1 the deadlines sit in a column next to the acceptance rate and test scores. When a school only has the final deadline, that column is a single row, and the space below it is left empty next to the taller stats column. Variant 2 doesn't have this problem because the deadlines run full width above the stats.

So the number I'm after is how many of the ~2,000 profiles will only have a final deadline (and how many will have none). If that's a large share, Variant 2 is the safer choice, or Variant 1 needs a fix for the single-deadline case.

It would be great if James could pull that number. A rough breakdown is enough: all three dates, final plus one early date, final only, and no dates.

---

## User

can you create more general reply, I don't wanna talk about the solution itself

## Assistant

---

Agreed, we should show all three dates whenever we have them. I'm not questioning that.

My question was about how the module looks when a school has fewer dates. I want to make sure the design still works for profiles with only one deadline or none at all.

It would help if James could pull a rough breakdown across all profiles: how many have all three dates, how many have the final date plus one early date, how many have the final date only, and how many have no dates. That way we can design for the cases that come up most often.

---

## User

Got new data for deadlines UI. Analyse it and propose updates of current UI solutions:
Across 1,700 college profiles, each school is in one group. A date counts when the field is filled in. "Rolling" counts as an application deadline.

All three dates (application deadline, early decision, and early action): 7.7% (131)
Application deadline plus an early action date: 13.1% (223)
Application deadline plus an early decision date: 4.2% (72)
Application deadline only: 34.3% (583)
No dates: 39.4% (670)
Another 1.2% (21 profiles) have an early date and no application deadline.
427 profiles list the application deadline as "rolling" rather than a calendar date (25.1% of all profiles). If we only count calendar dates, "no dates" is 58.0% and "all three" is 6.5%.

## Assistant

_[tool: dc_write]_

_[tool: ready_for_verification]_

The analysis is in **Deadlines Data Coverage v2.dc.html**. The first page is kept as it was.

**What the data shows:**
- 73.7% of profiles have one deadline or none. The biggest group (39.4%) has no dates at all.
- Only 7.7% have all three dates.
- 25.1% list their application deadline as "Rolling." That's a real value, not missing data, so it needs its own display.
- 21 profiles have an early date but no application deadline.

**Proposed changes:** the layout depends on how many dates a school has.
- **No dates:** one line with a link to the school's admissions website. This replaces the gray fallback box I suggested last time, since it would now appear on 39% of profiles.
- **One date:** a single gray strip above the stats, without the "Final deadline" chip. Rolling deadlines show "Rolling" with "No fixed date" in place of the countdown.
- **Two or more dates (25%):** the existing table from Variant 1 or Variant 2.

So for about 75% of profiles both variants would look the same, and Variant 1's mostly empty side column goes away. I still recommend Variant 2 as the simpler option.

The page ends with three questions for the data team: how often "Rolling" appears alongside early dates, whether we have admissions website links for the no-date profiles, and whether any dates are from past application cycles.

## User

provide more simple explanation for PO on why Variant 2 will work better

## Assistant

_[tool: dc_html_str_replace]_

I rewrote the Recommendation paragraph in plain language for your PO. It now says that Variant 2 puts the deadlines above the stats, so the section looks complete whether a school has three dates, one, or none. In Variant 1 the deadlines sit next to the stats, so on the 3 in 4 profiles with one date or none, that side would usually look half empty.

## User

let's proceed with variant 2. Here is additional data from PO. Will it influence current UI somehow?

# Types of College Application Dates in the United States
College application deadlines in the U.S. generally fall into distinct categories based on timeline, binding commitments, and review schedules. Below is a comprehensive overview of each application type, when materials are due, when decisions are released, and why these dates matter to prospective students.

## Chronological Overview of Application Deadlines

## Detailed Breakdown of Application Types
### 1. Early Action (EA)
- When it's due: Early to mid-November (usually November 1 or November 15).
- When you find out: Mid-December.
- What it means: You submit your application early and receive a decision early. It is non-binding, meaning you are under no obligation to attend if accepted, and you can still apply early to other colleges.
- Why students care: It lets you get admissions decisions out of the way before winter break without committing to a school, giving you peace of mind early in senior year without losing your freedom to compare financial aid offers.

### 2. Early Decision I (ED I)
- When it's due: Early to mid-November (usually November 1 or November 15).
- When you find out: Mid-December.
- What it means: This option is binding. You can only apply to one school via Early Decision. If you are accepted, you must enroll at that college and immediately withdraw all applications to other schools.
- Why students care: Acceptance rates are often noticeably higher in ED rounds because it demonstrates top-tier interest, but you lose the ability to compare financial aid packages from other schools before committing.

### 3. Early Decision II (ED II) / Early Action II (EA II)
- When it's due: Early to mid-January (usually January 1 or January 15).
- When you find out: Mid-February.
- What it means: A second round for students who were not ready to apply by November or were deferred from an earlier round. ED II is binding (you must attend if accepted), while EA II is non-binding.
- Why students care: It serves as a strong backup option—if you get deferred or rejected from your top choice in December, ED II gives you a second chance to show maximum commitment to your runner-up dream school.

### 4. Regular Decision (RD)
- When it's due: Early January (usually January 1 to January 15).
- When you find out: Late March to early April.
- What it means: The standard, most common application path. It is non-binding, allows you to apply to as many schools as you like, and gives you until the national reply date (May 1) to compare financial aid packages and accept an offer.
- Why students care: It gives you the maximum time to polish essays, highlight strong first-semester senior year grades, and keep all your options open to compare acceptances and financial aid packages side by side.

### 5. Rolling Admission
- When it's due: Windows usually open in the fall (around September/October) and stay open until all spots are filled.
- When you find out: Continuously, typically 4–8 weeks after you submit.
- What it means: Instead of waiting for a single deadline, colleges evaluate applications as they arrive on a first-come, first-served basis.
- Why students care: Applying early in the window significantly boosts your admission and scholarship chances before available spots and financial aid funds fill up.

## Assistant

_[tool: read_file]_

Yes, it affects the module a little, mostly labels and descriptions. The layout stays the same. Here's what I'd change in Variant 2:

**Change now (no new data needed)**
1. **Rename "Application Deadline" to "Regular Decision."** The PO's document calls it Regular Decision, and that's the term students know. "Application Deadline" is our database field name. Keep the "Final deadline" chip when early dates are present.
2. **Make the row descriptions more specific**, using the document's definitions:
   - Early Decision: "Binding · apply to only one school ED"
   - Early Action: "Non-binding · apply early to other schools too"
   - Regular Decision: "Non-binding · reply by May 1"
3. **Add a rolling treatment.** Show "Rolling" in the date slot with "Reviewed as received · decisions in ~4–8 weeks" instead of a countdown. Since applying early helps at rolling schools, a short "Apply early for best chances" note fits there.
4. **Update the "What's the difference?" tooltip** so it covers all of the types, including rolling. It should only list the types that school actually has.

**Depends on data (questions for the PO)**
5. **When decisions are released.** This is the second date in each section of the document and is useful to students. Do we store decision release dates? If so, each row could add a line like "Decision by mid-Dec." If not, leave it out. Generic estimates per type could be wrong for a given school.
6. **ED II / EA II.** The document lists them, and Grinnell's own events list an ED II deadline of Jan. 5. Our data only has three fields. If we add them, the table would grow to 4–5 rows, and I'd sort the rows by date so ED II appears next to Regular Decision.

**Not adding:** the "Why students care" text. It's editorial content and would make the module too long. A "Learn more about application types" link to a U.S. News article would cover it.

Want me to apply items 1–4 to Variant 2?

## User

Yes

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

I've applied items 1–4 to Variant 2. A background check of the page is still running.

1. **Rename:** the "Application Deadline" row is now "Regular Decision Deadline."
2. **Row descriptions:**
   - Early Decision: "Binding · apply to only one school ED"
   - Early Action: "Non-binding · apply early to other schools too"
   - Regular Decision: "Non-binding · reply by May 1." This row didn't show a description before; now every row does.
3. **Rolling admission:** there's a new **rolling** toggle in Tweaks. When it's on, the Regular Decision row becomes "Rolling Admission" with "Rolling" in place of the date. The countdown becomes "No fixed date," and the row adds "Reviewed as received · decisions in about 4–8 weeks" and "Apply early for the best chances at admission and aid."
4. **Tooltip:** the "What's the difference?" tooltip now only explains the deadline types that school has. It also appears for rolling schools.

I also changed the "Final deadline" chip so it only shows when there are early deadlines above it, and never on rolling schools.

## User

Move 'See full admissions details' to the bottom of Admissions section

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

"See Full Admissions Details »" now sits at the bottom of the Admissions section, below the Application Deadlines table. Before, it was under the acceptance rate badge.

## User

add in the end of this page cases with no deadline, 1,2, rolling deadline available

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

I added a "Deadline states" section to the bottom of the Variant 2 page. It shows the Application Deadlines module in four cases, each labeled with its share of profiles from the PO's data:

- **No deadlines** (39.4%): the line "Application deadlines not reported" with a link to the admissions website.
- **1 deadline** (34.3%): only the Regular Decision row, without the "Final deadline" chip.
- **2 deadlines** (17.3%): Regular Decision and Early Action, with the chip and the "What's the difference?" tooltip.
- **Rolling** (25.1%): "Rolling" in place of the date and "No fixed date" instead of a countdown.

The **showCountdown** toggle in Tweaks also applies to these four cases. A background check of the page is still running.

## User

out the cases one per row

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

The four deadline cases now stack one per row instead of sitting side by side. I capped the column at 760px so each module stays close to the width it has in the Admissions section.

## User

remove reply by may 1 and the dot

## Assistant

_[tool: dc_js_str_replace]_

The Regular Decision description now just says "Non-binding." The change shows in the Admissions section and in the deadline cases at the bottom of the page.

## User

make tooltip which appears by hover on 'What's the difference' more narrow, around 200px width

## Assistant

_[tool: grep]_

_[tool: grep]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: grep]_

The design-system Tooltip doesn't take a width prop, so I'll override its popup width in the page's helmet.

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

The "What's the difference?" tooltip is now 200px wide, with the text wrapping onto several lines and aligned left. The page loads without errors, but I haven't hovered it to check the result.

The design system's tooltip has no width setting, so I fixed the width with a style rule on this page. If developers reuse the tooltip elsewhere, they'll need a width option added to the component itself.

The tooltip is centered on the link, and the link sits at the right edge of the module. At 200px it may stick out past the module's right edge.

## User

remove ED

## Assistant

_[tool: dc_js_str_replace]_

The Early Decision description now reads "Binding · apply to only one school," without "ED."

## User

Add 'Whats the difference' component to this case

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

I added the "What's the difference?" link back to the 2-deadlines case. The link had dropped out of the deadline cases at the bottom of the page, though the hover text was still set. Restoring it also brings the link back on the Rolling admission case. If you don't want it on Rolling, I can take it off there.

## User

move 'No Application Deadlines' section under Application Deadlines by data availability as a tab in dropdown

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I read "dropdown" as the **deadlines** menu in Tweaks. "No deadlines" is now an option there, and the "No deadlines reported" case is gone from the "Application Deadlines by data availability" section at the bottom. That section now shows three cases: 1 deadline, 2 deadlines and rolling.

With "No deadlines" picked, the main Admissions section shows "Application deadlines not reported." in a gray box. The "What's the difference?" link is hidden there, since there are no deadline types to explain. A background check of the page is still running.

If you meant a dropdown on the page itself, such as a selector in the bottom section for switching between cases, tell me and I'll build that instead.

## User

Add-replicate these missing block to this page as you did earlier for this page https://www.usnews.com/best-colleges/grinnell-college-1868 : Campus Life, Instagram block, After college, Reviews and Ratings

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I added the four blocks to the Final page after Upcoming Events, matching your screenshots: Campus Life, the Instagram block, After College and the Reviews & Ratings featured review. A background check of the page is still running.

- **Instagram block:** the school logo and the three post images are empty placeholders you can drop images into. I removed the emoji from the post captions to follow the design system's no-emoji rule.
- **After College:** it uses the numbers from your screenshot, with the 728×90 ad shown as a placeholder.
- **Reviews & Ratings:** this stops at the featured review, like your screenshot. The ratings breakdown and review list from the full profile mockup aren't included.

## User

Add Rolling admissions to the dropdown tabs as well

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

"Rolling admission" is now an option in the **deadlines** menu, between "Application only" and "No deadlines." Picking it shows a single "Rolling" row, the same as "Application only" with the separate **rolling** toggle on.

Two things I left alone that you may want removed:
- The **rolling** toggle is still in Tweaks, so there are now two ways to get the same view.
- The bottom "Application Deadlines by data availability" section still shows its own Rolling admission case.

## User

can you use exact images for Instagram section for the screenshot provided

## Assistant

_[tool: image_metadata]_

_[tool: run_script]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: ready_for_verification]_

The three Instagram posts and the Grinnell logo now use images cut from your screenshot (saved in `assets/`). I checked the second post and the logo. They match, but because they come from a screenshot they're low resolution and a bit soft at full size.

The second post's caption overlay is cut off at the bottom, just as it is in your screenshot.

The page showed one image load error on open. I think it fires once while the page is still loading and the images show after that, but I haven't checked the rendered posts on the page. If you have the original post images, send them and I'll swap them in.

## User

And also use Instagram logo

## Assistant

_[tool: run_script]_

_[tool: view_image]_

_[tool: ready_for_verification]_

The gray placeholder icon in the top-left of the Instagram block is now the gradient Instagram logo from your screenshot (`assets/ig-logo.png`), at 72px. Because it's cut from a screenshot, its edge picked up a little background on one side.

The small icons next to each post's date are still simple outline icons. I can switch those to the logo too if you'd like.

## User

Here is task description:
Design the UI and layout for adding a TikTok social media component to Student Connect college profiles as a premium feature, expanding from the existing Instagram implementation.

Design questions:

Should TikTok appear above or below Instagram?

Is it too visually heavy to stack two separate social components?

Should we instead create a combined “Socials” section that houses both Instagram and TikTok?

How should this behave and scale on mobile?

Goals


Business goal  
Increase engagement with premium Student Connect college profiles by showcasing schools’ TikTok presence alongside existing Instagram content, making premium profiles feel richer and more current for prospective students.

User goal  
Prospective students can easily discover and view a school’s TikTok content directly on the Student Connect profile, in a way that feels cohesive with Instagram and not visually overwhelming.

Success metric

Increase in clicks/engagement with social media components on Student Connect profiles

User Story


As a prospective student browsing a Student Connect college profile,  
I want to see the school’s TikTok content presented clearly alongside Instagram,  
so that I can quickly get a sense of campus life and student culture through familiar social platforms without the page feeling cluttered.

Where?


Product area: Student Connect

Page: College Profile

Section: Near Existing Instagram social component area 

Platforms: Desktop + Mobile web (ensure mobile considerations are explicitly designed)

Acceptance Criteria


Key requirements

TikTok component should visually mirror the existing Instagram component (layout, spacing, typography, content structure)

Replace Instagram-specific branding with TikTok branding where appropriate (icons/logos), while keeping overall Student Connect styling consistent

Explore and recommend placement and layout options

Provide mobile and desktop designs, ensuring the experience does not feel overly “chunky” or repetitive when both social platforms are enabled

Consider states:

Only Instagram present

Only TikTok present

Both Instagram and TikTok present

Prework:
Technical Findings & Constraints (from Spike BC-5785: Integrated TikTok feature on Student Connect Profiles (College) 
In Review
)
From the dev spike completed by BC-5785: Integrated TikTok feature on Student Connect Profiles (College) 
In Review
:

Rendering Approach:

Engineering is using custom cards via the TikTok Display API (video.list), mirroring the Instagram architecture. They are not using heavy third-party TikTok embed scripts on initial page load to protect Core Web Vitals and load speed.

Clicks on cards or the account header link out directly to TikTok (share_url).

Cover Images & Aspect Ratio:

TikTok provides static cover image thumbnails (cover_image_url). James explored animated GIF/WebP previews on hover, but static cover images with link-outs are the primary baseline for launch.

TikTok videos are vertical (9:16 aspect ratio), whereas Instagram feeds often use 1:1 square or 4:5 portraits. Ensure your card layout accommodates portrait crops gracefully without distortion.

Available Data Fields:

Account display name, handle, and avatar (user.info.basic)

Video thumbnail/cover image

Video caption/title (up to 150 characters)

Video creation timestamp

Public engagement counts (views, likes, comments, shares)

Fallback Behavior:

If a school has fewer than 3 posts, an expired token, or an API error, the component silently hides (no broken/empty placeholder boxes).

Rollout Scope:

College profiles are Phase 1; Graduate and K-12 profiles will follow later using the same component pattern (EDU-1754: Duplicate College Instagram Setup into Grad/K12
In Production
).

3. Key Design Decisions to Address
The ticket asks for recommendations on four core UX questions:

Question

Options to Consider

UX Recommendation

Combined vs. Stacked

• Stacked independent sections
• Unified "Campus Life / Socials" container with tabs (Instagram | TikTok)

Unified container with tab switcher / toggle: Stacking two full rows of 3 cards each creates heavy visual clutter and pushes key profile data down. A tabbed or segmented control lets students toggle between platforms within the same vertical footprint.

Placement

• Above Instagram
• Below Instagram

If kept separate, placing TikTok below Instagram maintains historical hierarchy for schools that have had Instagram active for years; if unified, the default tab can prioritize whichever has newer posts or default to Instagram.

Component States

Instagram only
2. TikTok only
3. Both enabled

If unified with tabs, hide the tab bar entirely when only one network is connected and display the single network header seamlessly.

Mobile Scaling

• Vertical stack of cards
• Horizontal swipe / carousel

A horizontal carousel (peek-scroll) on mobile prevents the page height from expanding excessively while matching standard mobile feed patterns.



Create designs based on this input

## Assistant

_[tool: list_files]_

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: dc_write]_

_[tool: dc_js_str_replace]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I built the TikTok designs in **Profile Admissions - TikTok.dc.html**. A background check of the page is still running.

**On the profile page:** one social component replaces the Instagram block under Campus Life. A new **socials** option in Tweaks switches it between Both, Instagram only and TikTok only.

**At the bottom of the page:** a section for the ticket with:
- short answers to the four design questions;
- each of the three states shown on desktop and on a 375px mobile frame;
- a handoff table comparing Instagram and TikTok specs.

To make room for it, I removed the "Deadline states" section from this copy. The Final page still has it.

**Design calls:**
- **One combined component, not two stacked ones.** When a school has both networks, an Instagram | TikTok switcher takes the place of the platform logo. Switching fades the account row and the cards over 150ms, and Instagram is selected first.
- **No switcher when a school has only one network.** Instagram only looks like today's block, and TikTok only uses the same layout with TikTok branding.
- **TikTok cards** show a play icon with the view count in the bottom-left corner of the cover.
- **Mobile:** the switcher spans the full width, with the account row below it. The cards scroll sideways at 80% width so the next one peeks in, with dots underneath.
- **All cards are now cropped to 4:5,** Instagram included, so the section doesn't change height when switching tabs. This is the one change to the existing Instagram look.

**Placeholders:**
- The TikTok covers are empty slots you can drop images into.
- The TikTok captions, view counts and handle are made up.
- I drew the TikTok logo for the mock, so it should be swapped for the official logo before build.

The component lives in its own file, `SocialFeed.dc.html`, because it appears seven times on the page.

## User

answer this design questions and provide the view where Insta and Tiktok are not stacked into one section (propose variants on this) Should TikTok appear above or below Instagram?

Is it too visually heavy to stack two separate social components?

Should we instead create a combined “Socials” section that houses both Instagram and TikTok?

How should this behave and scale on mobile?

## Assistant

_[tool: run_script]_

_[tool: dc_set_props]_

_[tool: dc_write]_

_[tool: ready_for_verification]_

I put the answers and three separate-section variants on a new page, **Socials - Separate Sections Options.dc.html**. A background check of the page is still running.

**Answers**
1. **Above or below:** TikTok goes below Instagram. Instagram is the established component, and profiles with only Instagram stay exactly as they are today.
2. **Too heavy?** Yes, if both are full size. Two full rows of three cards, each with its own header, roughly doubles the section's height and pushes After College further down. Stacking works only if one of them is made smaller.
3. **Combined "Socials" section?** Yes, I'd make the Instagram | TikTok switcher the default. If product wants both visible without a click, option 1c is the best of the separate layouts.
4. **Mobile:** each network gets its own sideways-swiping row of cards. Six cards should never stack vertically. On mobile all three options end up the same: Instagram's row, then TikTok's.

**Variants** (each shown on desktop and a 375px mobile frame, with pros and cons)
- **1a: Stacked, equal weight.** Two identical full components, Instagram first. The simplest to build and the heaviest.
- **1b: Stacked, smaller TikTok.** Instagram is unchanged. TikTok sits below as a lighter row: a compact account row and four covers with view counts, no captions.
- **1c: Side by side.** Instagram and TikTok are two columns with two cards each. Both are visible at once, and the section is shorter than today's Instagram block.

To build these, I added two settings to the shared `SocialFeed` component: a compact mode with a small header and no captions, and a card count. The main TikTok page doesn't use them, so it's unchanged.

## User

which variant fit the best ticket requirements?

## Assistant

The combined switcher on the TikTok page fits the ticket best. If you need a separate-sections option, use 1c.

**Combined switcher (Profile Admissions - TikTok)**
- **TikTok mirrors Instagram:** yes. The TikTok view is the Instagram component with TikTok branding.
- **Not chunky or repetitive with both networks:** yes. It's one account header and one row of cards, the same height as today's Instagram block.
- **The three states:** all clean. Instagram only looks as it does today, TikTok only looks the same, and the switcher appears only when both are connected.
- **Mobile:** one sideways-swiping row of cards.

**The separate-section variants against the same requirements**
- **1a** mirrors Instagram exactly, but it's the stacked, repetitive layout the ticket asks us to avoid.
- **1b** is lighter, but it fails the mirror requirement. TikTok gets a different structure, with no captions and a smaller header.
- **1c** isn't chunky and gives both networks equal weight. But it only partly mirrors Instagram: two cards instead of three, a compact header, and no captions.

If product prefers 1c, I'd bring the captions back on its cards so it matches Instagram's card structure.

## User

how combined view answer these goals: Business goal  
Increase engagement with premium Student Connect college profiles by showcasing schools’ TikTok presence alongside existing Instagram content, making premium profiles feel richer and more current for prospective students.

User goal  
Prospective students can easily discover and view a school’s TikTok content directly on the Student Connect profile, in a way that feels cohesive with Instagram and not visually overwhelming.

## Assistant

The combined view meets both goals well. Its weak spot is discoverability, because TikTok sits behind a tab.

**Business goal: more engagement, richer and more current profiles**
- Premium profiles get a second content source in the same space, so they gain content without the page getting longer.
- The TikTok cards show view counts and recent dates, which makes the profile feel active and current.
- Every card and the Follow button link out, and each is tracked separately (`school_tiktok` vs. `school_instagram`, plus `tab-select`). That lets us measure the success metric directly and see which network drives clicks.
- **Risk:** TikTok isn't visible until someone clicks the tab, so its engagement may come in lower than if it were always on screen.

**User goal: easy to discover, cohesive with Instagram, not overwhelming**
- **Cohesive:** yes. The TikTok view uses the same cards, type, spacing and Follow button as Instagram, with only the branding swapped.
- **Not overwhelming:** yes. There's one header and three cards at a time, on desktop and mobile.
- **Easy to discover:** only partly. The switcher shows the TikTok logo and label, but students have to choose to click it.

**Ways to improve discoverability, if needed:**
1. Open on whichever network posted most recently, instead of always Instagram.
2. Show a hint on the inactive tab, such as "TikTok · 3 new videos."
3. Compare clicks with TikTok as the default tab against Instagram as the default.

## User

create a slide deck for PO with all variants with short explanation of pros and cons

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: copy_starter_component]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: delete_file]_

_[tool: ready_for_verification]_

The deck is in **TikTok Options Deck for PO.dc.html**: 10 slides, each with short speaker notes. A background check of the deck is still running.

1. Title
2. Goals and requirements
3. Short answers to the four design questions
4. Option 1, combined with switcher (marked as recommended)
5. Option 1 in its three states: Instagram only, TikTok only, both
6. Option 2, stacked at equal weight
7. Option 3, stacked with TikTok as a compact strip
8. Option 4, side by side with two cards each
9. Comparison of all four options against the requirements
10. Recommendation, ways to make TikTok easier to discover, and option 4 as the fallback

Each option slide shows the real component at reduced size on desktop and mobile, with pros and cons beside it.

I renumbered the variants 1–4 for this deck. The earlier options page calls the separate-section variants 1a, 1b and 1c, and they're Options 2, 3 and 4 here.

The TikTok covers are still empty, and the switcher works on the slides. If you drop cover images into the TikTok slots on any page, I can't tell yet whether they'll also show up in the deck, since it uses the same component.

## User

which questions should I ask PO to help define the right variant

## Assistant

These are the PO answers most likely to change which variant wins. I've put them in order of impact.

**Priorities**
1. Is TikTok's main job to get clicks of its own, or to make the profile feel richer overall? If it needs its own clicks, Option 1's switcher works against it, and Options 4 or 3 fit better.
2. Is keeping section height (how far After College sits from the top) a hard constraint? If it isn't, Option 2 becomes acceptable.
3. Do schools pay for TikTok as a separate premium add-on? If they do, they may expect it to be visible without a click.

**Data**
4. How many premium schools are likely to connect TikTok, Instagram or both? If "both" is rare, the switcher matters less.
5. How active are schools on each network? Should the default tab follow the most recent post?
6. Do we have current click rates for the Instagram component, to use as a baseline for the success metric?

**Scope and build**
7. Is a switcher an acceptable new pattern for Student Connect, or should it reuse existing components only?
8. Must TikTok mirror Instagram exactly, captions and three cards included? Or is a lighter TikTok row (Option 3) acceptable?
9. Can we run an A/B test, for example Option 1 against Option 4, or Instagram against TikTok as the default tab?
10. The design has to carry over to Grad and K-12 profiles. Does that favor the simplest option to reuse?

**Content and compliance**
11. Are there brand or legal rules on showing TikTok logos and view counts on a U.S. News page?
12. Should the cards link out to TikTok as planned, or would product want an in-page video player later? If a player is coming, the card design may need to change.

## User

rephrase these questions in a less official way, like I myself created them,not native speaker

## Assistant

1. What is more important for us with TikTok: to get clicks on TikTok itself, or just to make the profile look richer?
2. Is it a problem if the section becomes taller and After College moves down? Or we are ok with it?
3. Do schools pay for TikTok separately? If yes, maybe they expect to see it right away, without clicking a tab.
4. Do we know how many schools will have TikTok, Instagram or both? If both is rare, maybe the switcher is not so important.
5. How often do schools post on each network? Should we open the tab with the newest post first?
6. Do we have click data for the current Instagram block? It would help to compare later.
7. Is it ok to add a new switcher element, or should we use only existing components?
8. Should TikTok look exactly like Instagram (captions, 3 cards), or a lighter version is also fine?
9. Can we do an A/B test, for example Option 1 vs Option 4?
10. Later we need the same for Grad and K-12 profiles. Should we choose the simplest option because of this?
11. Are there any brand or legal rules about showing the TikTok logo and view counts on our page?
12. Cards will open TikTok in a new page. Do we plan to play videos on our page later? If yes, it can change the design.

## User

here make images bigger

## Assistant

_[tool: grep]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I made the desktop and mobile frames on slide 6 about 27% bigger. I sized them from your screenshot to fill the slide height, but haven't looked at the slide since, so a background check is confirming the frames fit and aren't cut off at the bottom.

## User

here also makes bigger images

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

I made the desktop and mobile frames on slide 7 about 12% bigger, the same size as slide 6. That's as big as I could go while keeping the taller mobile frame on the slide, but I haven't looked at it since the change. If it still looks small, I can stretch the desktop frame wider instead.

## User

make desktop version even bigger

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

On slide 7, the desktop frame is now about 25% bigger, and the mobile frame stays the same size. I worked out that it still fits on the slide and leaves the text column enough room, but I haven't looked at the slide since the change. A background check is confirming nothing is cut off.

