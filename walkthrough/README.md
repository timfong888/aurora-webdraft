# Aurora Portal Walkthrough

Recorded walkthrough of the standard Aurora flow: homepage → registration → login → inference.

## Video

**`aurora_walkthrough.mp4`** — 40-second slideshow covering 8 steps (see below).

## Steps Covered

| Step | Screenshot | Description |
|------|-----------|-------------|
| 1 | `step01_homepage.png` | Aurora marketing site — [aurorainfra.ai](https://aurorainfra.ai) |
| 2 | `step02_register.png` | Registration page — "Start your Free Trial" |
| 3 | `step03_login.png` | Login page (Auth0 flow at auth.aur.lu) |
| 4 | `step04_enter_email.png` | Enter email: timfong888+prod1@gmail.com |
| 5 | `step05_password.png` | Password step |
| 6 | `step06_inference_product.png` | Inference product marketing page |
| 7 | `step07_inference_docs.png` | Inference API documentation |
| 8 | `step08_quickstart.png` | Inference quickstart guide |

## Authenticated Console (Blocked — Credentials Required)

Steps 6–8 above show the **marketing and docs pages** because the portal dashboard requires login. To capture the authenticated console (dashboard → inference console → fire a request), you need:

- **Email:** `timfong888+prod1@gmail.com`
- **Password:** from [1Password](https://start.1password.com/open/i?a=455JHXUMEZDUREU4X3UURCEC2M&v=3nufjgckb5nfmplru52jn5ubpe&i=n6hwqc4fupljkmnoggdzjxafpe&h=my.1password.com)

Once credentials are available, run the automation script (see below) to regenerate the video with authenticated steps 6–8 replacing the marketing screenshots.

## Automation Script

`record-walkthrough.js` — fully automated Playwright script that produces the complete video.

```bash
# Prerequisites
npm install playwright
npx playwright install chrome
# Linux: sudo apt-get install ffmpeg  |  macOS: brew install ffmpeg

# Run
AURORA_PORTAL_EMAIL=timfong888+prod1@gmail.com \
AURORA_PORTAL_PASSWORD=<from_1password> \
node record-walkthrough.js
```

Output: `./screenshots/` (one PNG per step) + `aurora_walkthrough.mp4`

## Tools Used

| Tool | Purpose |
|------|---------|
| [Playwright](https://playwright.dev) | Browser automation + screenshots |
| [ffmpeg](https://ffmpeg.org) | Stitch screenshots into MP4 video |
| Chrome (headless) | Browser engine |
