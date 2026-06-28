import fs from 'node:fs';
import path from 'node:path';
import { launch } from 'chrome-launcher';
import lighthouse from 'lighthouse';

const baseUrl = process.argv[2] ?? 'http://127.0.0.1:4321';
const pages = ['/', '/video-surveillance/', '/contact/'];
const outDir = path.resolve('lighthouse-reports');

const chromePath =
  process.env.CHROME_PATH ??
  '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser';

fs.mkdirSync(outDir, { recursive: true });

const chrome = await launch({
  chromePath,
  chromeFlags: ['--headless=new', '--disable-gpu', '--no-sandbox'],
});

try {
  for (const pagePath of pages) {
    const url = new URL(pagePath, baseUrl).href;
    const slug = pagePath === '/' ? 'index' : pagePath.replace(/\//g, '');
    const outFile = path.join(outDir, `${slug}-mobile.json`);

    const result = await lighthouse(url, {
      port: chrome.port,
      output: 'json',
      logLevel: 'error',
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      formFactor: 'mobile',
      screenEmulation: { mobile: true, disabled: false },
    });

    fs.writeFileSync(outFile, result.report);
    const scores = Object.fromEntries(
      Object.entries(result.lhr.categories).map(([k, v]) => [k, Math.round(v.score * 100)])
    );
    console.log(`${slug}:`, scores);
  }
} finally {
  await chrome.kill();
}
