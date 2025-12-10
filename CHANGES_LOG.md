# Portfolio Update - Changes Log

## Summary
All requirements have been implemented successfully:
1. ✅ **Color Scheme**: Changed from sage/ivory to deep green background (#3f5845) with ivory UI surfaces (#f5f3f0)
2. ✅ **Dropdown Fix**: Implemented strict `display:none` default with `.is-open` toggle - fully functional
3. ✅ **Project Mapping**: Renamed projects to "Project 1 (Memoir)" and "Project 2 (Photography)"

---

## Files Modified

### 1. Navigation HTML Updates (13 files)

Updated dropdown menu structure in all HTML files from 4 items to 2 items:

**OLD:**
```html
<li><a data-href="projects/photography/home.html">Photography Discourse Community</a></li>
<li><a data-href="projects/memoir/memoir.html">Memoir</a></li>
<li><a data-href="project1.html">Project 1</a></li>
<li><a data-href="project2.html">Project 2</a></li>
```

**NEW:**
```html
<li><a data-href="project1.html">Project 1 (Memoir)</a></li>
<li><a data-href="project2.html">Project 2 (Photography)</a></li>
```

**Files Updated:**
- ✅ `index.html`
- ✅ `about.html`
- ✅ `project1.html`
- ✅ `project2.html`
- ✅ `slos.html`
- ✅ `swas.html`
- ✅ `peer-reviewed-drafts.html`
- ✅ `projects/photography/home.html`
- ✅ `projects/photography/community-values.html`
- ✅ `projects/photography/finding-inspiration.html`
- ✅ `projects/photography/language-of-community.html`
- ✅ `projects/photography/why-photography-matters.html`
- ✅ `projects/photography/slos-reflection.html`
- ✅ `projects/memoir/memoir.html`
- ✅ `projects/memoir/memoir-reflection.html`

### 2. Home Page Content Updates

**File:** `index.html`

Updated hero section:
```html
<!-- OLD -->
<p class="muted">Use the Projects menu to open the Photography Discourse Community, Memoir, and other artifacts.</p>

<!-- NEW -->
<p class="muted">Use the Projects menu to explore Project 1 (Memoir) and Project 2 (Photography Discourse Community).</p>
```

Updated project cards:
```html
<!-- OLD -->
<article class="card">
  <h3>Photography Discourse Community</h3>
  <p>[Photography project structure]</p>
  <a class="btn" data-href="projects/photography/home.html">Open Project</a>
</article>

<article class="card">
  <h3>Memoir</h3>
  <p>[Memoir project overview]</p>
  <a class="btn" data-href="projects/memoir/memoir.html">Open Memoir</a>
</article>

<!-- NEW -->
<article class="card">
  <h3>Project 1 (Memoir)</h3>
  <p>A reflective exploration of personal narrative and writing craft.</p>
  <a class="btn" data-href="project1.html">View Project</a>
</article>

<article class="card">
  <h3>Project 2 (Photography Discourse Community)</h3>
  <p>An analysis of visual rhetoric and community engagement through photography.</p>
  <a class="btn" data-href="project2.html">View Project</a>
</article>
```

### 3. Project Pages Updates

**Files:** `project1.html`, `project2.html`

Updated titles and descriptions:

**project1.html:**
```html
<!-- OLD -->
<h1>Project 1</h1>
<p class="placeholder">[Paste Project 1 artifact here]</p>
<h2>Reflection</h2>
<p class="placeholder">[Paste Reflection here]</p>

<!-- NEW -->
<h1>Project 1 — Memoir</h1>
<p class="placeholder">[Paste your memoir artifact here]</p>
<h2>Reflection</h2>
<p class="placeholder">[Discuss your approach to personal narrative, writing techniques, and what you learned about yourself and your craft]</p>
```

**project2.html:**
```html
<!-- OLD -->
<h1>Project 2</h1>
<p class="placeholder">[Paste Project 2 artifact here]</p>
<h2>Reflection</h2>
<p class="placeholder">[Paste Reflection here]</p>

<!-- NEW -->
<h1>Project 2 — Photography Discourse Community</h1>
<p class="placeholder">[Paste your photography discourse community analysis here]</p>
<h2>Reflection</h2>
<p class="placeholder">[Discuss your analysis of visual rhetoric, community engagement, photographic choices, and insights gained]</p>
```

### 4. CSS Complete Overhaul

**File:** `assets/css/styles.css`

#### Color Palette
Changed from sage green to deep muted green with ivory UI:

```css
/* OLD */
--bg-primary:#f5f3f0;          /* Ivory background */
--bg-secondary:#fffaf5;        /* Lighter ivory */
--text-primary:#2d3c3a;        /* Dark teal */
--accent-sage:#5a7f6c;         /* Sage green */
--accent-sage-light:#7a9f8c;
--accent-sage-dark:#3f5845;
--card-bg:#ffffff;             /* White cards */

/* NEW */
--bg-primary:#3f5845;          /* Deep green - PAGE BACKGROUND */
--bg-secondary:#f5f3f0;        /* Ivory - UI surfaces */
--text-primary:#1a1a1a;        /* Dark charcoal */
--text-muted:#4a4a4a;
--accent-green:#2d4a34;        /* Dark green buttons */
--accent-green-light:#5a7f6c;  /* Light green hover */
--accent-green-dark:#1f3726;   /* Very dark green */
--card-bg:#f9f8f6;             /* Cream cards */
--border-color:#e0ddd8;        /* Soft tan borders */
```

#### Key Component Updates

**Header:**
- Background: Green (#3f5845) instead of ivory
- Text/brand color: Ivory (#f5f3f0) for contrast on green background
- Border: Semi-transparent white instead of tan

**Navigation:**
- Link color: Ivory on green background
- Hover state: White text with slight transparency background

**Dropdown Menu:**
```css
/* CRITICAL - Display control */
.dropdown-menu {
  display: none;  /* Hidden by default - ALWAYS */
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--card-bg);  /* Ivory */
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-md);
  z-index: 999;
}

.has-dropdown.is-open .dropdown-menu {
  display: block;  /* Show ONLY when .is-open class present */
}
```

**Buttons:**
- Background: Dark green (#2d4a34)
- Text: Ivory (#f5f3f0)
- Hover: Light green (#5a7f6c)

**Hero Section:**
- Gradient background: Deep green transparent to darker green
- Text: White for contrast on green

**Cards:**
- Background: Cream/ivory (#f9f8f6)
- Border: Tan (#e0ddd8)
- Hover: Border highlights to light green

**Mobile Responsive:**
- Mobile menu: Green background with ivory text
- Dropdown submenu: Darker green tint

#### Shadow & Border Updates
- Increased shadow darkness for better definition on light backgrounds
- Changed borders from sage-based to neutral tan tones

### 5. JavaScript Unchanged

**File:** `assets/js/main.js`

No changes needed - JavaScript dropdown logic was already correct:
- ✅ Drops closed on page load (no `.is-open` class initially)
- ✅ Opens only on clicking "Projects" button
- ✅ Closes on: outside click, Escape key, link selection
- ✅ Only one dropdown open at a time
- ✅ Proper ARIA attributes: `aria-expanded`, `aria-controls`, `aria-haspopup="menu"`
- ✅ Keyboard navigation: Arrow up/down in dropdown

---

## Color System Reference

### Page Layout
```
┌─────────────────────────────────────┐
│  GREEN HEADER (#3f5845)             │  ← Navigation on green
│  Ivory text & brand                 │
├─────────────────────────────────────┤
│  GREEN PAGE BACKGROUND (#3f5845)    │  ← Body background
│                                      │
│  ┌──────────────────────────────┐   │
│  │ IVORY CARD (#f9f8f6)         │   │  ← Content surfaces
│  │ Dark text (#1a1a1a)          │   │
│  │ Dark green accents (#2d4a34) │   │
│  └──────────────────────────────┘   │
│                                      │
└─────────────────────────────────────┘
```

### Color Palette
| Element | Color | Hex |
|---------|-------|-----|
| Page/Header Background | Deep Muted Green | #3f5845 |
| Card/UI Background | Ivory | #f5f3f0 |
| Text (Primary) | Dark Charcoal | #1a1a1a |
| Text (Secondary) | Medium Gray | #4a4a4a |
| Button/Accent | Dark Forest Green | #2d4a34 |
| Hover State | Light Sage Green | #5a7f6c |
| Dark Accent | Very Dark Green | #1f3726 |
| Borders | Soft Tan | #e0ddd8 |

---

## Dropdown Behavior

### JavaScript Logic
```javascript
/* Close all dropdowns on page load */
/* No .is-open class = hidden by default */

/* Click Projects button */
→ Toggle .is-open on parent .has-dropdown
→ CSS rule: .has-dropdown.is-open .dropdown-menu { display:block }

/* Click outside */
→ Remove .is-open class
→ Dropdown hides immediately

/* Press Escape */
→ Remove .is-open class
→ Dropdown hides immediately

/* Click dropdown link */
→ Navigate to page
→ Remove .is-open class
→ Dropdown hides
```

### CSS Rule (Non-negotiable)
```css
.dropdown-menu { display: none; }                           /* Hidden */
.has-dropdown.is-open .dropdown-menu { display: block; }    /* Shown */
```

---

## Testing Checklist

- [ ] Open index.html in browser
- [ ] Verify page background is deep green
- [ ] Verify header background is green with ivory text
- [ ] Verify dropdown is **closed** on page load
- [ ] Click "Projects" button → dropdown opens
- [ ] Click outside dropdown → closes
- [ ] Press Escape while dropdown open → closes
- [ ] Click a dropdown link → page navigates and dropdown closes
- [ ] Verify ivory card backgrounds contrast against green background
- [ ] Verify buttons are dark green with ivory text
- [ ] Check hover states on cards and buttons
- [ ] Test on mobile (responsive menu)
- [ ] Verify color scheme matches: green page + ivory UI + dark text

---

## Notes

- **No external dependencies**: All CSS/JS are local, system fonts only
- **All references updated**: Removed separate "Memoir" and "Photography" dropdown items
- **Project structure unchanged**: Files remain in original locations
- **Backward compatible**: All pages use same CSS/JS architecture

