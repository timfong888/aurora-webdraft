/**
 * Aurora Portal Walkthrough — Playwright automation script
 *
 * Records a full walkthrough: registration page → login → console → inference call.
 *
 * Usage:
 *   AURORA_PORTAL_EMAIL=your@email.com \
 *   AURORA_PORTAL_PASSWORD=yourpassword \
 *   node record-walkthrough.js
 *
 * Output: ./screenshots/  (PNG per step) + aurora_walkthrough.mp4
 *
 * Requirements:
 *   npm install playwright
 *   npx playwright install chrome
 *   apt-get install ffmpeg  (or brew install ffmpeg on macOS)
 */

const { chromium } = require('playwright');
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const EMAIL    = process.env.AURORA_PORTAL_EMAIL    || '';
const PASSWORD = process.env.AURORA_PORTAL_PASSWORD || '';
const OUT_DIR  = path.join(__dirname, 'screenshots');

if (!EMAIL || !PASSWORD) {
  console.error('Set AURORA_PORTAL_EMAIL and AURORA_PORTAL_PASSWORD env vars.');
  process.exit(1);
}

fs.mkdirSync(OUT_DIR, { recursive: true });

async function shot(page, name) {
  const file = path.join(OUT_DIR, `${name}.png`);
  await page.screenshot({ path: file, fullPage: false });
  console.log(`  ✓ ${name}`);
  return file;
}

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
  const page    = await context.newPage();

  console.log('\n=== Aurora Portal Walkthrough ===\n');

  // 1 — Marketing homepage
  console.log('Step 1: Homepage');
  await page.goto('https://aurorainfra.ai/');
  await page.waitForLoadState('networkidle');
  // Dismiss cookie banner if present
  const acceptBtn = page.getByRole('button', { name: 'Accept' });
  if (await acceptBtn.isVisible().catch(() => false)) await acceptBtn.click();
  await shot(page, '01_homepage');

  // 2 — Registration page
  console.log('Step 2: Registration');
  await page.goto('https://portal.aur.lu/register');
  await page.waitForLoadState('networkidle');
  await shot(page, '02_register');

  // 3 — Login page
  console.log('Step 3: Login');
  await page.goto('https://portal.aur.lu/login');
  await page.waitForLoadState('networkidle');
  await shot(page, '03_login');

  // 4 — Enter email
  console.log('Step 4: Enter email');
  await page.getByRole('textbox', { name: /email/i }).fill(EMAIL);
  await shot(page, '04_email_entered');
  await page.getByRole('button', { name: /continue/i }).click();
  await page.waitForURL(/\/password/);

  // 5 — Enter password
  console.log('Step 5: Enter password');
  await shot(page, '05_password_step');
  await page.getByLabel(/password/i).fill(PASSWORD);
  await page.getByRole('button', { name: /continue|log in|sign in/i }).click();

  // 6 — Dashboard
  console.log('Step 6: Dashboard');
  await page.waitForURL(/portal\.aur\.lu\/(?!login|register)/, { timeout: 15000 });
  await page.waitForLoadState('networkidle');
  await shot(page, '06_dashboard');

  // 7 — Navigate to Inference section
  console.log('Step 7: Inference section');
  const inferenceLink = page.getByRole('link', { name: /inference/i }).first();
  if (await inferenceLink.isVisible().catch(() => false)) {
    await inferenceLink.click();
    await page.waitForLoadState('networkidle');
  }
  await shot(page, '07_inference_console');

  // 8 — Fire an inference call (via the Aurora API)
  console.log('Step 8: API call demo');
  await page.goto('https://docs.aur.lu/docs/inference/quickstart');
  await page.waitForLoadState('networkidle');
  await shot(page, '08_inference_quickstart');

  await browser.close();

  // Stitch screenshots into video
  console.log('\nBuilding video…');
  const concatFile = path.join(OUT_DIR, 'concat.txt');
  const screenshots = fs.readdirSync(OUT_DIR)
    .filter(f => f.endsWith('.png'))
    .sort()
    .map(f => `file '${path.join(OUT_DIR, f)}'\nduration 5`);
  screenshots.push(`file '${path.join(OUT_DIR, screenshots[screenshots.length - 1].split("'")[1])}'`);
  fs.writeFileSync(concatFile, screenshots.join('\n'));

  const outputVideo = path.join(__dirname, 'aurora_walkthrough.mp4');
  execSync(
    `ffmpeg -y -f concat -safe 0 -i "${concatFile}" ` +
    `-vf "scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2:black,format=yuv420p" ` +
    `-c:v libx264 -preset medium -crf 22 -r 30 "${outputVideo}"`,
    { stdio: 'inherit' }
  );

  console.log(`\n✅ Video saved: ${outputVideo}`);
})();
