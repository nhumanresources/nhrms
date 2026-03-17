

## Implement "Ready for New Labour Codes?" Page

The plan was approved previously but the page was never built. Here's what needs to be created:

### New Files

| File | Purpose |
|------|---------|
| `src/pages/LabourCodesReadiness.tsx` | Page component composing all sections |
| `src/components/labour-codes-readiness/ReadinessHero.tsx` | Hero with headline + CTA |
| `src/components/labour-codes-readiness/TriggerSignalsSection.tsx` | "Does This Sound Like You?" ICP triggers |
| `src/components/labour-codes-readiness/DifferentiatorSection.tsx` | Legal+Finance+HR comparison vs competitors |
| `src/components/labour-codes-readiness/CompetencyPillarsSection.tsx` | Three-pillar accordion (Legal / Financial / HR) |
| `src/components/labour-codes-readiness/TargetSectorsSection.tsx` | Sector urgency grid (Manufacturing, IT, etc.) |
| `src/components/labour-codes-readiness/SizeSegmentsSection.tsx` | Sweet spots: 75-150 and 250-500 employees |
| `src/components/labour-codes-readiness/ReadinessCTASection.tsx` | Bottom CTA with contact details |

### Edits

| File | Change |
|------|--------|
| `src/App.tsx` | Add route `/labour-codes/readiness` → `LabourCodesReadiness` |
| `src/components/navbar/NavItems.tsx` | Add "Labour Code Readiness" under Compliance & Operations |
| `src/components/navbar/MobileNavItems.tsx` | Same for mobile |

### Content Details

All content comes from the approved plan — ICP triggers (funding, multi-state, contractor-heavy, no compliance team, payroll-heavy), the three competency pillars (Legal, Financial & Actuarial, HR & Implementation), seven target sectors, and the nHRMS differentiator positioning (Legal + Finance + HR under one roof). CTAs use `mailto:krishna@nhrms.com` and phone `+91 9052131123`.

