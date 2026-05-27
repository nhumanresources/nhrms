/**
 * nHRMS browser driver — uses puppeteer (bundled in node_modules).
 * Run from the repo root: node .claude/skills/run-nhrms/driver.cjs [command]
 *
 * Commands:
 *   smoke          — screenshot home, auth, and linkedin-recruiter pages
 *   workflow       — drive the full LinkedIn Recruiter workflow end-to-end
 *   screenshot <url_path>  — screenshot any app route, e.g. screenshot /dashboard
 *
 * Screenshots are written to /tmp/nhrms-ss-*.png
 */

const path = require('path');
const PUPPETEER = path.resolve(__dirname, '../../../node_modules/puppeteer');
const fs = require('fs');
const sleep = ms => new Promise(r => setTimeout(r, ms));
const BASE = 'http://localhost:5174';

async function launch() {
  const p = require(PUPPETEER);
  const browser = await p.launch({
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
    headless: true,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  // Inject a fake Supabase auth session so auth-guard passes without real credentials.
  // The guard only reads localStorage on mount; this runs before React initialises.
  await page.evaluateOnNewDocument(() => {
    const fakeSession = {
      user: { id: 'smoke-user', email: 'test@nhrms.com', role: 'authenticated' },
      access_token: 'smoke-token',
      expires_at: 9999999999,
    };
    localStorage.setItem('sb-localhost-auth-token', JSON.stringify(fakeSession));
  });

  return { browser, page };
}

const click = (page, text) => page.evaluate((t) => {
  const btn = [...document.querySelectorAll('button')].find(b => b.textContent.includes(t));
  if (btn) { btn.click(); return true; }
  return false;
}, text);

const clickExact = (page, text) => page.evaluate((t) => {
  const btn = [...document.querySelectorAll('button')].find(b => b.textContent.trim() === t);
  if (btn) { btn.click(); return true; }
  return false;
}, text);

async function smoke() {
  const { browser, page } = await launch();
  const ss = (name) => page.screenshot().then(b => { fs.writeFileSync(`/tmp/nhrms-ss-${name}.png`, b); console.log(`  /tmp/nhrms-ss-${name}.png`); });

  await page.goto(`${BASE}/`, { waitUntil: 'networkidle0' });
  await ss('home');
  console.log('HOME:', await page.title());

  await page.goto(`${BASE}/auth`, { waitUntil: 'networkidle0' });
  await ss('auth');

  await page.goto(`${BASE}/dashboard/linkedin-recruiter`, { waitUntil: 'networkidle0' });
  await ss('linkedin-recruiter');
  console.log('LINKEDIN page body preview:', (await page.evaluate(() => document.body.innerText.slice(0, 120))));

  await browser.close();
  console.log('smoke DONE');
}

async function workflow() {
  const { browser, page } = await launch();
  const ss = (name) => page.screenshot().then(b => { fs.writeFileSync(`/tmp/nhrms-ss-${name}.png`, b); console.log(`  /tmp/nhrms-ss-${name}.png`); });

  await page.goto(`${BASE}/dashboard/linkedin-recruiter`, { waitUntil: 'networkidle0' });
  await ss('01-jd-search');

  // Select JD
  await click(page, 'Senior HR Business Partner'); await sleep(400);
  await ss('02-jd-selected');

  // Find candidates (2s simulated search)
  await click(page, 'Find Matching Candidates'); await sleep(2800);
  await ss('03-shortlist');

  // Shortlist first candidate
  await clickExact(page, 'Shortlist'); await sleep(400);
  await ss('04-shortlisted');

  // Open compose dialog
  await clickExact(page, 'Message'); await sleep(500);
  await ss('05-compose');

  // Send InMail → lands on Conversations tab
  await click(page, 'Send InMail'); await sleep(600);
  await ss('06-conversation');

  // Share JD in thread
  await click(page, 'Share JD'); await sleep(400);
  await ss('07-jd-shared');

  // Open schedule dialog
  await page.evaluate(() => {
    [...document.querySelectorAll('button')].filter(b => b.textContent.trim() === 'Schedule')[0]?.click();
  }); await sleep(400);
  await ss('08-schedule-dialog');

  // Pick Tomorrow 10:00 AM slot
  await page.evaluate(() => {
    [...document.querySelectorAll('button')].find(b => b.textContent.includes('Tomorrow') && b.textContent.includes('10:00'))?.click();
  }); await sleep(300);

  // Confirm
  await click(page, 'Confirm & Block Slot'); await sleep(600);
  await ss('09-scheduled');

  await browser.close();
  console.log('workflow DONE');
}

async function screenshot(urlPath) {
  const { browser, page } = await launch();
  await page.goto(`${BASE}${urlPath}`, { waitUntil: 'networkidle0' });
  const name = urlPath.replace(/\//g, '-').replace(/^-/, '') || 'root';
  const file = `/tmp/nhrms-ss-${name}.png`;
  fs.writeFileSync(file, await page.screenshot({ fullPage: true }));
  console.log(file);
  await browser.close();
}

const [,, cmd, ...args] = process.argv;
if (cmd === 'workflow') workflow().catch(e => { console.error(e); process.exit(1); });
else if (cmd === 'screenshot') screenshot(args[0] || '/').catch(e => { console.error(e); process.exit(1); });
else smoke().catch(e => { console.error(e); process.exit(1); });
