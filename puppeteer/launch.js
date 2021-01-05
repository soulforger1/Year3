const puppeteer = require("puppeteer");
const config = require("./credential.json");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({
    width: 1920,
    height: 1080,
  });

  await page.goto("https://www.facebook.com/");

  await page.waitForTimeout(5000);

  // logIn
  await page.type("#email", config.email, { delay: 30 });
  await page.type("#pass ", config.password, { delay: 30 });
  await page.click("#u_0_b");

  //   await page.waitForNavigation({ waitUntil: "networkidle0" });
  await page.waitForTimeout(5000);

  await page.screenshot({ path: "./face1.png" });

  // messeging
  // https://www.facebook.com/messages/t/100008798945248
  await page.goto("https://www.facebook.com/messages/t/100008798945248");
  await page.waitForTimeout(5000);

  await page.keyboard.type("hello from js lmao");
  await page.keyboard.press("Enter");

  await page.screenshot({ path: "./face2.png" });

  await page.close();
})();
