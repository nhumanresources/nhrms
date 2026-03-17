

## Restructure "Our Focus" Menu and Fix Go-to-Market / BOT Pages

### Problem
1. **Go-to-Market (GTM)** is listed under "Strategic Advisory" but its focus is HR-Tech product launches -- it belongs under **HR Technology**
2. **Fractional HR Solutions (BOT)** is listed in the "Our Focus" dropdown but shouldn't be -- remove it from the menu
3. **Executive Search** is a standalone featured item but should move under **Talent Solutions** category
4. **BOT HR Teams page** (`/services/bot-hr-teams`) never mentions nHRMS branding -- needs to reference "nHRMS" as the service provider

### Changes

#### 1. Desktop Nav (`src/components/navbar/NavItems.tsx`)

Restructure the "Our Focus" dropdown:

- **Remove** the standalone featured Executive Search block at the top
- **Add** Executive Search as first item under **Talent Solutions** (with "NPA Worldwide Partner" subtitle)
- **Remove** Fractional HR Solutions (BOT) from **Talent Solutions**
- **Move** Go to Market from **Strategic Advisory** to **HR Technology** (renamed to "Go-to-Market for Tech Products")
- Keep All Services link at top

Final structure:
```text
All Services
---
TALENT SOLUTIONS
  Executive Search (NPA Worldwide Partner)
  Talent Acquisition
  Performance Management
---
STRATEGIC ADVISORY
  HR Advisory
  Organization Strategy
---
HR TECHNOLOGY
  HR Tech Solutions
  Go-to-Market for Tech Products
---
COMPLIANCE & OPERATIONS
  Labour Codes
  Work Study & Manpower Productivity
```

#### 2. Mobile Nav (`src/components/navbar/MobileNavItems.tsx`)

Mirror the same restructuring:
- Move Executive Search under Talent Solutions (keep the highlighted style)
- Remove Fractional HR Solutions (BOT)
- Move Go to Market under HR Technology

#### 3. BOT HR Teams Page (`src/pages/services/BOTHRTeams.tsx`)

Add nHRMS branding throughout:
- Hero subtitle: "by nHRMS" or "nHRMS Fractional HR Solutions"
- Reference nHRMS in section descriptions (e.g., "nHRMS designs and establishes your HR function...")
- Add nHRMS mention in CTA section

---

### Technical Details

| File | Change |
|------|--------|
| `src/components/navbar/NavItems.tsx` (lines 68-112) | Remove standalone Executive Search, add it under Talent Solutions, remove BOT, move GTM to HR Technology |
| `src/components/navbar/MobileNavItems.tsx` (lines 29-75) | Same restructuring for mobile menu |
| `src/pages/services/BOTHRTeams.tsx` | Add nHRMS branding in hero, process section, and CTA |

