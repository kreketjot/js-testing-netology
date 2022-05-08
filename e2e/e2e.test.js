import puppetteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:8888';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 250,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('open site', async () => {
    await page.goto(baseUrl);
  });

  test('type valid card', async () => {
    await page.goto(baseUrl);
    const input = await page.$('#card-input');
    await input.type('4556604062228431');
    const button = await page.$('#card-validate-btn');
    button.click();
    await page.waitForSelector('.valid-input-value');
  });

  test('type invalid card', async () => {
    await page.goto(baseUrl);
    const input = await page.$('#card-input');
    await input.type('4556604062228432');
    const button = await page.$('#card-validate-btn');
    button.click();
    await page.waitForSelector('.invalid-input-value');
  });
});