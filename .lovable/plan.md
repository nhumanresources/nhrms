

## Re-align "Our Focus" Menu and "What We Do" Section

### Problem
The three places that list services are inconsistent:
- **"Our Focus" desktop dropdown** only shows 5 items (Executive Search, Performance Mgmt, Talent Acquisition, Labour Codes, Work Study) -- missing HR Advisory, HR Tech, BOT, Go to Market, Leadership Dev
- **"What We Do" homepage section** shows 6 different items (Talent Acquisition, HR Advisory, Leadership Dev, HR Tech, Org Strategy, Fractional HR) -- missing Executive Search, Work Study, Compliance, Performance Mgmt
- **Mobile menu** has a completely different grouping (Build/Operate/Talent/Growth/Advisory/Compliance/Consulting) with duplicated Executive Search entry

### Unified Service Categories
Align all three around these **5 consistent categories**, matching `serviceCategories.ts`:

| Category | Services |
|----------|----------|
| **Executive Search** (featured) | NPA Worldwide Partner -- stays elevated |
| **Talent Solutions** | Talent Acquisition, Fractional HR (BOT), Performance Management, Total Rewards |
| **Strategic Advisory** | HR Advisory, Organization Strategy, Go to Market |
| **HR Technology** | HR Tech Advisory, HR Tech Solutions |
| **Compliance & Operations** | Labour Codes, Compliance Services, Work Study & Manpower Productivity |

---

### Changes

#### 1. Desktop "Our Focus" Dropdown (`src/components/navbar/NavItems.tsx`)

Restructure the dropdown to show all key services organized by category:

```
Executive Search (featured, NPA badge) -- stays as-is
---
All Services link
---
TALENT SOLUTIONS
  Talent Acquisition
  Fractional HR Solutions (BOT)
  Performance Management
---
STRATEGIC ADVISORY
  HR Advisory
  Organization Strategy
  Go to Market
---
HR TECHNOLOGY
  HR Tech Solutions
---
COMPLIANCE & OPERATIONS
  Labour Codes
  Work Study & Manpower Productivity
```

#### 2. Mobile "Our Focus" Section (`src/components/navbar/MobileNavItems.tsx`)

Restructure to match the same categories as desktop. Remove duplicate Executive Search entry. Use consistent category headers: Talent Solutions, Strategic Advisory, HR Technology, Compliance & Operations.

#### 3. "What We Do" Homepage Section (`src/components/home/WhatWeOfferSection.tsx`)

Update the 6 service cards to represent the key offerings consistently with the nav:

1. **Executive Search** -- "NPA Worldwide Partner. Find exceptional leaders globally." (links to `/services/executive-search`)
2. **Talent Acquisition** -- keep existing (links to `/services/talent-acquisition`)
3. **HR Advisory & Consulting** -- keep existing (links to `/services/hr-advisory`)
4. **HR Technology Solutions** -- keep existing (links to `/services/hr-tech`)
5. **Compliance & Labour Codes** -- replace "Organizational Strategy" card with compliance focus (links to `/labour-codes`)
6. **Work Study & Manpower Productivity** -- replace "Fractional HR Solutions" card (links to `/services/work-study-manpower`)

This ensures every highlighted homepage service has a matching prominent entry in the nav menu.

---

### Technical Details

| File | Change |
|------|--------|
| `src/components/navbar/NavItems.tsx` (lines 68-95) | Restructure "Our Focus" dropdown with all 4 categories + services |
| `src/components/navbar/MobileNavItems.tsx` (lines 29-86) | Restructure mobile "Our Focus" with matching categories, remove duplicate Executive Search |
| `src/components/home/WhatWeOfferSection.tsx` (lines 15-58) | Update service cards array to feature Executive Search, Compliance, and Work Study |

