---
name: Webber Hsu, Personal Hub
description: A person as gravity. Everything he builds, writes and learns orbits an unmarked black centre.
colors:
  void: "#000000"
  ink: "#EDEFF5"
  ink-2: "#A9AEBC"
  ink-3: "#7A8091"
  ring-1: "#4A4F5E"
  ring-2: "#30343F"
  ring-3: "#22252E"
  gold: "#E9B949"
  gold-lit: "#F4CD6A"
  ember: "#C2452D"
typography:
  display:
    fontFamily: "Archivo, Noto Sans TC, PingFang TC, Microsoft JhengHei, system-ui, sans-serif"
    fontSize: "clamp(3.4rem, 7.2vw, 6rem)"
    fontWeight: 200
    lineHeight: 0.92
    letterSpacing: "-0.035em"
    fontVariation: "\"wdth\" 125"
  headline:
    fontFamily: "Archivo, Noto Sans TC, PingFang TC, Microsoft JhengHei, system-ui, sans-serif"
    fontSize: "clamp(2.2rem, 4.6vw, 4rem)"
    fontWeight: 200
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontVariation: "\"wdth\" 125"
  title:
    fontFamily: "Archivo, Noto Sans TC, PingFang TC, Microsoft JhengHei, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 3.4vw, 3rem)"
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: "-0.02em"
    fontVariation: "\"wdth\" 112"
  lead:
    fontFamily: "Archivo, Noto Sans TC, PingFang TC, Microsoft JhengHei, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.7vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.35
  body:
    fontFamily: "Archivo, Noto Sans TC, PingFang TC, Microsoft JhengHei, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "lnum, tnum"
  label:
    fontFamily: "Archivo, Noto Sans TC, PingFang TC, Microsoft JhengHei, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.16em"
rounded:
  hairline: "2px"
  pill: "999px"
spacing:
  s1: "8px"
  s2: "16px"
  s3: "24px"
  s4: "40px"
  s5: "64px"
  s6: "104px"
  s7: "168px"
  gutter: "clamp(16px, 4.5vw, 72px)"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.void}"
    rounded: "{rounded.pill}"
    padding: "15px 22px 15px 24px"
  button-primary-hover:
    backgroundColor: "{colors.gold-lit}"
    textColor: "{colors.void}"
  lang-toggle:
    textColor: "{colors.ink-3}"
    rounded: "{rounded.pill}"
    padding: "2px"
  lang-toggle-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.void}"
    rounded: "{rounded.pill}"
    padding: "5px 12px"
  nav-link:
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
  nav-link-hover:
    textColor: "{colors.ink}"
  work-row:
    textColor: "{colors.ink}"
    padding: "64px 0"
  orbit-body-dot:
    backgroundColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "11px"
  orbit-body-dot-brightest:
    backgroundColor: "{colors.gold}"
    rounded: "{rounded.pill}"
    size: "15px"
---

# Design System: Webber Hsu, Personal Hub

## Overview

**Creative North Star: "The Event Horizon"**

The page is a gravity well. An absolute black void holds one unmarked centre, the person, ringed by a single gold photon ring and a hairline ember edge at the horizon. Everything he has made, written or learned is a body on an orbit around it: closer and brighter means it matters more right now. Rank is expressed by radius and brightness, never by boxes, badges or size of card.

The surface is sparse, dark and exact. Display type is Archivo pushed to its expanded width at a whisper weight (200), so the name reads wide and thin like an instrument label rather than a billboard. Reading text returns to normal width. Numbers are tabular lining figures throughout, because orbital data should line up. Below the fold the same logic flattens into hairline-ruled rows, and the footer closes with the horizon rising from the bottom edge.

Motion is restrained to one ignition on load and a slow shared drift. Nothing loops, pulses or glows. With reduced motion the system is perfectly still and loses nothing but the drift.

**Key Characteristics:**
- Pure black ground (no near-black, no gradient wash); depth comes from graded grey hairlines.
- One warm accent, gold, spent on the photon ring, the brightest body, the primary action and live status. Ember appears only as the horizon edge.
- Expanded thin Archivo for display, normal-width Archivo for reading, Noto Sans TC for zh-Hant.
- Rank by radius and brightness; planned things are dashed, dimmer and furthest out.
- Hairlines, pills and circles. No cards, no shadows, no glow.
- Bilingual by construction: every string has en and zh, and zh-Hant gets its own spacing.

## Colors

A cold neutral ramp on absolute black, with exactly one warm light source and its ember edge.

### Primary
- **Photon Gold** (gold): the one warm voice. The photon ring, the most important orbiting body (magnitude 1), the primary action, the "Live" status, link underlines inside work rows and empty states, text selection, the focus outline and the caret. Its rarity is what makes it read as light.
- **Lit Gold** (gold-lit): the hover state of the primary action and the bright stop of the footer horizon gradient. Never used at rest on its own.

### Secondary
- **Horizon Ember** (ember): the thin 1 to 2px edge where the black disc meets the photon ring, in the hole and in the footer horizon-rise. Nowhere else; it is never text, fill or status.

### Neutral
- **Void** (void): page ground, the event horizon fill, text on gold and on the active language pill.
- **Starlight Ink** (ink): primary text, ordinary orbiting bodies, the active language pill.
- **Dust** (ink-2): secondary text, nav links at rest, section intros, planned work titles (9.5:1 on void).
- **Far Dust** (ink-3): tertiary text: metadata, ring labels, readout orbit line, dates, dashed planned dots (5.1:1 on void, the floor for any text).
- **Near Ring** (ring-1): the innermost orbit, predicted (empty) orbits, the language toggle outline, default link underline, scrollbar thumb track.
- **Mid Ring** (ring-2): standard orbit hairlines and the second footer arc.
- **Far Ring** (ring-3): row dividers between works and entries, the outermost footer arc.

### Named Rules
**The One Light Rule.** Gold is the only warm colour that carries meaning, and it marks the single most important thing in any group: one body on the map, one action in the hero, one status ("Live"). If two things are gold at rest in the same view, one of them is wrong.

**The Grey Distance Rule.** Greys encode distance: ring-1 near, ring-2 standard, ring-3 far. A new hairline takes the grey of its distance from the centre, not whichever grey looks nicest.

**The Absolute Black Rule.** The ground is #000000. No near-black, no tinted surface, no raised panel colour.

## Typography

**Display Font:** Archivo variable at width 125 (with Noto Sans TC, PingFang TC, Microsoft JhengHei, system-ui)
**Body Font:** Archivo at normal width (same stack)
**Label Font:** Archivo, uppercase and tracked

**Character:** One family doing three jobs. Expanded and ultra-thin for names and headings so they read as wide, quiet instrument lettering; normal width for anything read in sentences; small tracked capitals for orbital data and metadata. Chinese falls back to Noto Sans TC from the same stack, so both languages sit in one typographic voice.

### Hierarchy
- **Role ramp (dial and lower page):** Section headings (pillar headings, the blog headline, the footer call) are wide-thin display at clamp(2.8rem, 6vw, 5.5rem), weight 200, wdth 125. Item titles (works, essays, notes) are normal width at clamp(1.25rem, 1.8vw, 1.5rem), weight 450 (500 in zh-Hant). Descriptions and summaries are 17px Dust, and metadata is 12–13px tracked caps in Far Dust. The section-to-item gap is about 3.5x in size plus a weight change; never let item titles drift back into wide-thin display, which is what collapsed the hierarchy before.
- **Display** (200, clamp(3.4rem, 7.2vw, 6rem), 0.92, wdth 125): the name only, stacked on two lines. The Chinese name sits beneath at 300, clamp(1.4rem, 2.2vw, 1.9rem), tracked .18em, in Dust.
- **Headline** (200, clamp(2.2rem, 4.6vw, 4rem), 1, wdth 125): section headings and the footer call.
- **Title** (300, clamp(1.9rem, 3.4vw, 3rem), 1.05, wdth 112): work names in the work rows. A deliberate step between expanded display and normal reading width.
- **Lead** (400, clamp(1.25rem, 1.7vw, 1.5rem), 1.35, max 22ch): the hero tagline.
- **Body** (400, 17px, 1.6): reading text; work summaries step up to 19px/1.55, max 52ch. Tabular lining numerals on everything.
- **Label** (400, 13px, .16em, uppercase): nav, orbit body labels, work metadata (.14em), column headings (15px, 500, .18em, Dust). In the SVG, ring labels are 15.5 viewBox units, .14em, Far Dust.

### Named Rules
**The Wide-Thin Rule.** Width expansion is reserved for display and headline type (wdth 125) and work titles (wdth 112). Body, labels and buttons stay at normal width. Thin weights (200 to 300) only at headline size or above.

**The Two-Script Rule.** zh-Hant is not a translation pasted into en metrics. Under `lang="zh-Hant"`: body line-height 1.75 and .02em tracking; headings lose their negative tracking (+.02em) and rise to weight 300; uppercase-label tracking drops to .10 to .12em; measures switch from ch to em (tagline 16em, intro 24em, work summary 30em at 18px).

## Layout

The page is a single column of full-bleed sections inside a fluid gutter (clamp(16px, 4.5vw, 72px)). Every two-part block (the dial and its sections) shares one asymmetric 5fr / 7fr split with an s4 gap, so the left edge of every heading and the left edge of every body column align down the whole page.

The hero is at least max(100svh, 720px): copy on the left 5fr, the hole on the right 7fr, a square capped at the viewport height minus 150px. Sections open with s7 (168px) of air; section heads sit s6 above their content. Work rows breathe at s5 vertical padding.

Spacing is a stepped, roughly 1.6x scale: s1 8, s2 16, s3 24, s4 40, s5 64, s6 104, s7 168. Use the steps; do not interpolate.

Responsive: at 960px the split collapses to one column, the nav links hide (the language toggle stays), the hole moves above the copy at up to 560px wide, section padding drops to s6 and work rows to s4. At 560px the hole shrinks to min(100% - 96px, 420px), body labels drop to 11px, planned bodies, ring labels and readout summaries are hidden so only built work stays on the map.

## Background
The ground stays Absolute Black, rendered with the accretion disc's Doppler colour as a fixed, faint field behind everything: gold-white (#F4CD6A at 17%) bleeding from the top right where matter approaches, ember (#C2452D at 14%) on the right edge where it recedes, and a cold blue (#486EFF at 15%) rising from the bottom left. A 7% fractal-noise film grain sits over it in overlay so it never reads as a flat CSS gradient. As you scroll, the three patches orbit the page centre on ellipses (about 150° from top to bottom), eased at 6% per frame so they glide like the disc turning, in step with the dial. Reduced motion: they stay put. Text contrast is checked against the brightest patch.

## Elevation & Depth

Flat. There are no shadows anywhere and no glows. Depth is conveyed by distance from the centre and by grey value: hairline orbits that fade from ring-1 to ring-3 outward, bodies that shrink and dim with magnitude, and focus that dims everything else to .28 opacity rather than lifting the focused thing. The only gradients are the photon ring and its footer echo, which are light sources, not surfaces.

### Named Rules
**The Rank-by-Radius Rule.** Importance is expressed by how close to the centre and how bright, never by a container, a shadow or a badge.

## Shapes

Three forms only: the hairline (1px rules and orbits, non-scaling), the circle (orbits, bodies, the horizon, the favicon's ring), and the pill (999px on the primary action and the language toggle). Everything else is square-cornered and unboxed. Planned or not-yet-real things use a dashed stroke (dots: 1px dashed Far Dust; empty orbit: dasharray 2 7). The focus outline is the only near-square radius (2px).

## Components

### Buttons
Quiet, warm, singular.
- **Shape:** full pill (999px).
- **Primary:** Photon Gold fill, Void text, 600 weight 16px, 15px 22px 15px 24px, followed by a 16px stroked down-arrow (1.6 stroke). One per view.
- **Hover / Focus:** fill lifts to Lit Gold, the arrow nudges 2px down; transitions .25s on the shared ease-out (cubic-bezier(.16, 1, .3, 1)). Focus is the global 1.5px gold outline at 4px offset.
- **Secondary:** there is no secondary button. Secondary actions are text links in Dust with an 11px stroked out-arrow, brightening to Ink on hover.

### Language toggle
- A 1px Near Ring pill holding two pill buttons (EN / 中). Inactive: Far Dust text, brightens to Ink on hover. Active (aria-pressed): Ink fill, Void text. Switching language never replays the load animation.

### Navigation
- Fixed to the top (20px vertical padding; 14px below 960px). Transparent at the top of the page; once the page scrolls it takes a 66% black veil with a 14px blur and a ring-3 hairline beneath, so links stay legible over the coloured background. Its height is published as --bar-h, which offsets the sticky dial and every anchor landing. Wordmark in Ink, 17px 500, sentence case. Links are the three pillars, then Experience and Blog (Build · Think · Learn · Experience · Blog); there is no About section, because the hero, the timeline and the writing say who he is, 14px tracked .16em uppercase labels in Dust, Ink on hover. The pillar whose part is open on the dial is Ink with a 1px gold rule beneath. Pillar links never scroll to separate sections: they turn the dial. Below 960px the links wrap to a full-width second row at 12px.

### Hero
Centred, and only three things: the name in the page's language (English shows "Webber Hsu" in wide-thin display; Chinese shows only 徐偉博 at weight 200 with .12em tracking, and the header wordmark follows the same rule), then one motto line in Dust ("I build, write and wander to build a deeper understanding of the world :)" / 「做產品、寫文章、流浪，對這個世界建立深度的理解:)」), then one row of hashtags (#Product #Workflow #Exploration #Basketball #TrailRun / #產品 #工作流 #探索 #籃球 #越野跑, from `tags` in content.js) in Dust. No links (they live in the footer only), no tagline, no button. Each hashtag carries one small line icon (cube, three linked nodes, compass, basketball, mountain with a dotted trail): 26px, 1.4 stroke in Dust with round caps, alternating above and below their tag with a small nudge and tilt set in content.js. They bob 3px on a 6s offset loop, and on hover the icon straightens, scales 1.15x and turns gold. Reduced motion: no bob. Below 560px, where the row wraps, every icon sits straight above its own tag with no nudge.

### The Dial (signature: the three pillars)
All content lives in three parts of one dial: Build, Think and Learn. There is no Explore pillar; travel writing such as the Camino essay belongs to Think. Each pillar shows at most three items on the homepage (items flagged `featured`, otherwise the first three); everything else is reached through the pillar's home link.
- **Drawing:** a 640-unit SVG. A tick ring every 6° (longer every 30°) in ring-2; three 108° arcs at r262 with 12° gaps (each part spans 120°); one dot per item at r287 (dashed hollow for planned work); a fixed gold pointer at 12 o'clock. The black core (inset 32%, 1px ember edge) shows the current pillar's name in wide-thin display and its item count. Part labels at r220 stay upright while the rotor turns.
- **Turning is driven by scroll:** the three pillar sections are stacked as one continuous column beside the dial. A reading line sits at 42% of the viewport. While it is inside a section, that part holds at the pointer for the first 62% of the section, then the dial turns on toward the next part (smoothstep), so scrolling down keeps the dial turning. The gap between sections belongs to the section above. The rotor eases toward the scroll angle, 16% per frame.
- **Direct control:** clicking a part, pressing Enter or an arrow key on it, or dragging the dial and letting go all scroll the page to that pillar's section, and the scroll then turns the dial.
- **States:** the active arc is gold at 5 units, and the active dots and label are Ink. Inactive arcs are Near Ring at 2 units, with labels and dots in Far Dust. The header's matching pillar link is current only while the reading line is inside the dial section.
- **Layout:** desktop is 5fr/7fr, with the dial sticky and vertically centred and sections separated by s7. Below 960px the dial shrinks to a 76px sticky strip at the top of the screen, beside the pillar name and item count, and keeps turning; labels, ticks and core are hidden there.
- **Sections:** headed with the same three words as the header and dial, Build / Think / Learn (實作／思考／學習), so each part has exactly one name, set as a wide-thin headline with no description line beneath it, then the list (work rows for Build, entries for Think and Learn), ending with a link to the pillar's home (GitHub, Medium, Substack).

### Work rows
- Single-column rows inside the dial's panel, ruled in ring-3. Dot plus work title, then one tracked metadata line (year, status, stack; "Live" in gold), the summary at 18px, then links underlined in gold with an out-arrow.
- Planned rows dim the title and summary to Dust and use the dashed dot. A row without a public link says so plainly in Far Dust ("Public link coming soon"). A targeted row turns its title and dot gold.

### Entries and empty states
- Essay and note entries: 20px 300 titles on hairline rows, Gold on hover, date beneath in 13px tracked Far Dust.
- Empty state: a dashed 8px hollow dot beside one honest sentence in Dust (max 36ch) and, when the source exists, an inline gold-underlined link to it. Never placeholder titles.

### Footer horizon-rise
Top to bottom: the section heading ("Elsewhere" / 「其他地方」), the external links at 17px, and last the copyright and "Taipei" line in 13px Far Dust, which always stays the final thing on the page. The 1000x260 horizon SVG (ring-3 and ring-2 arcs, a 6-unit gold gradient arc, the black disc with an ember edge) is a layer behind the footer, anchored to the page's bottom edge and centred. The page edge is what cuts the black hole, and the copyright line sits in front of it, outside the outer ring. Never let the horizon sit in the flow where a container edge clips it partway up the page.
### Motion
No load animation. The only continuous motion is the dial turning with scroll (eased 16% per frame). State transitions run .2s to .5s on the shared ease-out. Reduced motion: the dial follows scroll with no easing, and smooth scrolling is off.

## Do's and Don'ts

### Do:
- **Do** express importance by orbit radius and brightness: magnitude-1 bodies are 15px and gold, magnitude 4 are 6px.
- **Do** put planned work on the outer dashed track with a dashed hollow dot, and say "planned" in words.
- **Do** keep every two-part block on the 5fr / 7fr split with an s4 gap.
- **Do** write every string as an { en, zh } pair in content.js, and apply the zh-Hant spacing overrides when adding type styles.
- **Do** show an honest empty state (dashed dot plus one sentence) when an orbit has nothing real on it.
- **Do** let labels yield by fading when they collide; ring labels yield first, then planned labels.
- **Do** keep Far Dust (#7A8091, 5.1:1) as the dimmest colour any text may use.

### Don't:
- **Don't** add cards, boxes, panels, shadows or glows; depth is grey value and distance only.
- **Don't** use gold for more than one thing per group at rest, and never use ember outside the horizon edge.
- **Don't** use a near-black or tinted ground; the void is #000000.
- **Don't** apply expanded width or 200 weight to body text, buttons or labels.
- **Don't** invent essays, notes, metrics or links to fill an orbit.
- **Don't** add looping, pulsing or scroll-triggered motion; the system moves once on load and then only drifts.

## Copy rules
- No leftover space metaphors in the copy ("orbit", "pulled in", "further out"). The black-hole world is visual only.
- No filler that explains the obvious: no hints for the dial, no item counts, and no restating a status that its label already shows.
- English and Chinese say the same thing.
- Every claim must be literally true. If a project has no public link, say "Private for now" / 「目前不公開」, not "coming soon".

## Blog page (blog.html)
- Same header (Build · Think · Learn · Experience · Blog, with Blog current), background and footer as the homepage.
- Head: the wide-thin "Blog" / 「部落格」 headline; one line giving the post count, the sources and the sync date; then an All / Medium / Substack segmented pill filter in the language-toggle style.
- List: grouped by year. The year label sits in a narrow left column (2fr/10fr; stacked below 760px). Rows are item-role titles with an out-arrow, plus month/day and source as tracked metadata, ruled in ring-3. In English mode a title uses its English translation (`title_en` in posts.json, or the homepage title in content.js) when one exists, otherwise the original, marked lang="zh-Hant". Every English title shown is an AI translation and carries a quiet italic "Translated by AI" in Far Dust on its own line beneath the title (blog) or beneath the date (homepage). Proper nouns use their official names, looked up first (The Mentorship, NCCU Consulting Group, Maker In College, NKDA); book titles without an established English edition stay in Chinese.
- Data: posts.json, written by scripts/sync-posts.mjs from the Medium and Substack RSS feeds. It keeps posts that drop out of a feed, skips placeholders, and only bumps its date when the list changes. .github/workflows/sync-posts.yml runs it daily at 06:00 Taipei and commits changes.

## Experience timeline (homepage, after the dial, before the footer)
- Three lines, oldest on the left, with entries evenly spaced in time order (268px slots on desktop, 230px on phones) from `timeline` in content.js. Each entry has a `lane` and prints its own dates. Dates come from the CV, his posts, or him directly; the current employer is not named and no internal metrics appear.
  - **Main line, "School & work" / 「學業與工作」** (BBA, internships, MBA exchange, current role): a 2-unit Dust rail with solid 6px nodes and labels above the line in a larger 112-width display. The rail turns gold (2.5 units) from the current role onward, and only the current role gets the gold node and date.
  - **Side line, "Programmes" / 「計畫與社團」** (clubs, training programmes, The Mentorship): a 1.5-unit ring-1 line with hollow nodes, cards below.
  - **Interest line, "Interests" / 「興趣」** (basketball refereeing since 2021, the Camino, trail running since 2026): a dotted ring-1 line below the tallest side-line card, hollow nodes, cards below. Ongoing interests read "ongoing" / 「持續中」.
- Only the current role shows its one-line description; every other entry is date, type, title, organisation and an optional story link, so the whole map fits a laptop screen while pinned.
- The side line forks off the main line at the far left, and its diagonal lives in an empty fork zone before the first entry, so it never crosses a card. The interest line does not fork: it is its own dotted track running in straight from the left edge. Lane names sit in small tracked caps at the start of each line.
- Desktop (above 760px): the section pins below the header, and page scroll pans the row sideways 1:1. Phones: no pinning; the row swipes, and main-line notes are hidden.

## Sharing and housekeeping
- **Link previews:** both pages carry canonical, Open Graph and `twitter:card summary_large_image` tags pointing at `og.png`. og.png is 1200x630 and drawn in the site's own world: the name in wide-thin display, 徐偉博 and the motto in Dust, the URL in tracked caps, and the horizon ring (gold photon ring, ember edge, ring-2 and ring-3 arcs) rising from the bottom-right corner, kept clear of the text, over the accretion glow and grain. `apple-touch-icon.png` is the favicon mark at 180px.
- **404.html:** the same background with a centred wide-thin "404", one line each in English and Chinese, and one pill link home.
- `robots.txt` and `sitemap.xml` list the homepage and the blog.
- Fonts load Noto Sans TC at 200/300/400/500 only.

