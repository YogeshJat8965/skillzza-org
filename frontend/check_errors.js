import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  
  try {
    await page.goto('http://127.0.0.1:3000/insights/ai-talent-research-hub/global-compensation', { waitUntil: 'networkidle0' });
    const content = await page.content();
    console.log("HTML length:", content.length);
    console.log("HTML start:", content.substring(0, 500));
  } catch (e) {
    console.error("Navigation failed", e);
  } finally {
    await browser.close();
  }
})();
