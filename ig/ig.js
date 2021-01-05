const puppeteer = require("puppeteer");
const config = require("./credential.json");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setUserAgent(
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36"
  );

  await page.setViewport({
    width: 1920,
    height: 1080,
  });

  await page.goto("https://www.instagram.com/");
  await page.waitForTimeout(5000);

  // LogIn
  await page.click("#loginForm > div > div:nth-child(5) > button");
  await page.waitForTimeout(5000);
  await page.keyboard.type(config.email);
  await page.keyboard.press("Tab");
  await page.keyboard.type(config.password);
  await page.keyboard.press("Enter");

  await page.waitForTimeout(10000);

  // sending message
  await page.goto(
    "https://www.instagram.com/direct/t/340282366841710300949128218462817671541"
  );
  await page.waitForTimeout(5000);
  await page.click(
    "#react-root > section > div > div.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div.oNO81 > div.Igw0E.IwRSH.eGOV_._4EzTm.i0EQd > div > div > div > div > div:nth-child(1)"
  );
  await page.keyboard.type("message sent");
  await page.keyboard.press("Enter");

  await page.screenshot({ path: "./img.png" });

  await browser.close();
})();
