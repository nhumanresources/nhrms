---
name: run-nhrms
description: Run, start, launch, screenshot, or drive the nHRMS web app. Use this skill to start the dev server, take screenshots, verify features, or drive the full LinkedIn Recruiter Automation workflow in a browser.
---

# run-nhrms

nHRMS is a React + Vite + Tailwind app. It is driven headlessly via **puppeteer** (already in `node_modules`) using the driver at `.claude/skills/run-nhrms/driver.cjs`. No system chromium needed — puppeteer bundles its own.

Auth is Supabase. The driver injects a fake `localStorage` session before React mounts so all auth-guarded routes (`/dashboard/*`) are reachable without real credentials.

---

## Prerequisites

None beyond what's already installed. `puppeteer` v25 is in `node_modules`.  
If it's missing: `npm install --save-dev puppeteer`

---

## Start the dev server

```bash
npm run dev -- --host 0.0.0.0 --port 5173 &
sleep 6
curl -s -o /dev/null -w "%{http_code}" http://localhost:5173/
# expect: 200
```

The server starts in ~350 ms. Leave it running in the background for all driver commands.

---

## Run (agent path)

All commands write screenshots to `/tmp/nhrms-ss-*.png`.

**Smoke test** — home, auth, and LinkedIn Recruiter pages:
```bash
node .claude/skills/run-nhrms/driver.cjs smoke
```

**Full LinkedIn Recruiter workflow** (JD search → shortlist → InMail → share JD → schedule):
```bash
node .claude/skills/run-nhrms/driver.cjs workflow
```
Screenshots produced:
- `01-jd-search` — JD selection panel
- `02-jd-selected` — JD detail with Find button
- `03-shortlist` — matched candidates ranked by score
- `04-shortlisted` — candidate shortlisted
- `05-compose` — InMail / Message compose dialog
- `06-conversation` — conversation thread after send
- `07-jd-shared` — JD card rendered in thread
- `08-schedule-dialog` — slot picker dialog
- `09-scheduled` — confirmed meeting, status updated to 📅 Scheduled

**Screenshot any route:**
```bash
node .claude/skills/run-nhrms/driver.cjs screenshot /dashboard/linkedin-recruiter
# output: /tmp/nhrms-ss-dashboard-linkedin-recruiter.png
```

---

## Run (human path)

```bash
npm run dev
# open http://localhost:5173 in a browser
# log in at /auth, then go to /dashboard/linkedin-recruiter
```

---

## Gotchas

- **`page.waitForTimeout` removed in puppeteer v22+** — use `await new Promise(r => setTimeout(r, ms))` instead. The driver already does this.
- **`:has-text()` not supported in `page.$`** — it's a Playwright extension. Use `page.evaluate(() => [...document.querySelectorAll('button')].find(...))` instead.
- **Auth guard redirects to `/auth`** — the fake session must be injected via `evaluateOnNewDocument` (before React mounts), not after navigation. The driver does this.
- **Supabase `localStorage` key** — the app uses `sb-localhost-auth-token` in local dev. In production the key is `sb-<project-ref>-auth-token`.
- **Simulated LinkedIn search takes 2 s** — `sleep(2800)` is needed after clicking "Find Matching Candidates" before the Shortlist tab appears.
- **System chromium install fails** — `apt-get install chromium` fails in this container due to stale Ubuntu package mirrors. Use puppeteer's bundled binary exclusively.

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| `Cannot find package 'puppeteer'` | `npm install --save-dev puppeteer` from repo root |
| `Failed to download Chrome for Testing` | `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm install` — puppeteer handles its own download separately |
| `curl http://localhost:5173` returns non-200 | Dev server not running; start it with `npm run dev -- --host 0.0.0.0 --port 5173 &` and wait 6 s |
| Screenshot shows `/auth` page instead of dashboard | Fake session not injected — confirm `evaluateOnNewDocument` runs before `page.goto` |
| `waitForTimeout is not a function` | Puppeteer v22+ removed it — use `sleep()` helper |
