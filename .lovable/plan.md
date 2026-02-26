

## Highlight Executive Search in Navigation

### Overview
Make Executive Search stand out as a premium service in the "Our Focus" dropdown and mobile menu, with NPA Worldwide partner branding.

---

### Changes

#### 1. Desktop Nav - "Our Focus" Dropdown (`src/components/navbar/NavItems.tsx`)

Add Executive Search as a **featured item** at the top of the dropdown, before "All Services", with a subtle highlight style and NPA Worldwide partner badge.

**Structure inside the dropdown (lines 68-86):**
```
Executive Search (featured, with gold/primary accent bg + "NPA Worldwide Partner" badge)
---separator---
All Services
---separator---
Talent Solutions section (existing)
---separator---
Compliance section (existing)
```

The Executive Search link will use a distinct background (`bg-primary/5 border border-primary/20`) and include a small "NPA Worldwide Partner" tag in muted text to differentiate it from regular menu items.

#### 2. Mobile Nav - "Our Focus" Section (`src/components/navbar/MobileNavItems.tsx`)

Add Executive Search as the **first item** under "Our Focus" with a highlighted style (`bg-primary/5 rounded-md font-medium`) and a small "NPA Worldwide Partner" subtext, placed before the "Build" category.

#### 3. Executive Search Page - NPA Badge (`src/pages/services/ExecutiveSearch.tsx`)

Add an "NPA Worldwide Partner" badge in the hero section to reinforce the partnership. A small inline badge near the hero subtitle area using a subtle pill style.

---

### Technical Details

| File | Change |
|------|--------|
| `src/components/navbar/NavItems.tsx` | Add featured Executive Search link with NPA badge at top of "Our Focus" dropdown (lines 68-86) |
| `src/components/navbar/MobileNavItems.tsx` | Add highlighted Executive Search entry at top of "Our Focus" section (around line 33) |
| `src/pages/services/ExecutiveSearch.tsx` | Add NPA Worldwide Partner badge in hero section |

### Design Approach
- Executive Search gets a visually distinct card-like treatment in the dropdown (light primary background, border)
- "NPA Worldwide Partner" shown as a small muted-text tag beneath the link name
- Mobile follows same pattern with highlighted background
- No structural changes to existing menu items - Executive Search is simply elevated above them
