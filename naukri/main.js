const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({
    width: 1920,
    height: 1080,
  });

  await page.goto("https://www.naukri.com/sotware-engineer-jobs");
  await page.waitForTimeout(2000);

  const html = await page.content();

  const $ = cheerio.load(html);

  //   const posts = $("div.list > article");
  const posts = $("a.title");

  posts.each(async (i, e) => {
    // const title = $(e).find("div.jobTupleHeader > div.info.fleft > a");
    const title = $(e).text();
    console.log(title);
  });
  await browser.close();
})();
