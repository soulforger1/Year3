const axios = require("axios");
// const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const admin = require("firebase-admin");
const link1 = "https://myanimelist.net/topanime.php";
const link2 = "https://myanimelist.net/topanime.php?limit=50";

const serviceAccount = require("./admin-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://test-11c3c.firebaseio.com",
});
const db = admin.firestore();

const htmlGenerator = async (link) => {
  const data = await axios.get(link);
  return data.data;
  //   const browser = await puppeteer.launch();
  //   const page = await browser.newPage();

  //   await page.goto(link);
  //   await page.waitForTimeout(200);

  //   const html = await page.content();
  //   const before$ = cheerio.load(html);

  //   await page.screenshot({ path: `./${link.lenght}.png` });
  //   if (before$("body").find("#reform > button")) return html;
  //   else await page.click("#reform > button");
  //   await page.waitForTimeout(2000);

  //   const htmlafter = await page.content();
  //   await browser.close();
  //   return htmlafter;
};

const imageResizer = (url) => {
  if (url === undefined) return "";
  const array = url.split("/");
  var string = "";

  array.map((cur, i) => {
    string = string + (i === 3 ? "" : i === 4 ? "" : cur + "/");
  });

  return string;
};

const reader = async (link) => {
  const html = await htmlGenerator(link);
  const $ = cheerio.load(html);

  const animes = $(".ranking-list");

  for (e of animes) {
    const animeLink = $(e)
      .find("td.title.al.va-t.word-break > div > div.di-ib.clearfix > h3 > a")
      .attr("href");

    const animeHTML = await htmlGenerator(animeLink);
    const anime$ = cheerio.load(animeHTML);

    const title = anime$(
      "#contentWrapper > div:nth-child(1) > div > div.h1-title > div > h1"
    ).text();
    const rate = anime$(
      "#content > table > tbody > tr > td:nth-child(2) > div.js-scrollfix-bottom-rel > table > tbody > tr:nth-child(1) > td > div.pb16 > div.di-t.w100 > div.anime-detail-header-stats > div.stats-block > div.fl-l > div"
    ).text();
    const poster = anime$(
      "#content > table > tbody > tr > td.borderClass > div > div:nth-child(1) > a > img"
    ).attr("data-src");
    var rank = anime$(
      "#content > table > tbody > tr > td:nth-child(2) > div.js-scrollfix-bottom-rel > table > tbody > tr:nth-child(1) > td > div.pb16 > div.di-t.w100 > div.anime-detail-header-stats > div.stats-block > div.di-ib > span.ranked"
    )
      .text()
      .split("#")[1];
    rank = rank < 100 ? (rank < 10 ? "00" + rank : "0" + rank) : rank;
    const characters1 = anime$(
      "#content > table > tbody > tr > td:nth-child(2) > div.js-scrollfix-bottom-rel > table > tbody > tr:nth-child(2) > td > div:nth-child(6) > div.left-column > table"
    );
    const characters2 = anime$(
      "#content > table > tbody > tr > td:nth-child(2) > div.js-scrollfix-bottom-rel > table > tbody > tr:nth-child(2) > td > div:nth-child(6) > div.left-right > table"
    );
    const genres = [];
    anime$(
      "#content > table > tbody > tr > td.borderClass > div > div:nth-child(23) > span"
    ).map((index, current) => {
      if (index !== 0) genres.push(anime$(current).text());
    });
    const episodes = anime$(
      "#content > table > tbody > tr > td.borderClass > div > div:nth-child(14)"
    )
      .text()
      .split(":")[1];
    const description = anime$(
      "#content > table > tbody > tr > td:nth-child(2) > div.js-scrollfix-bottom-rel > table > tbody > tr:nth-child(1) > td > p"
    ).text();

    db.collection("animeRank")
      .doc(rank)
      .set({ title, rate, poster, genres, episodes, description });
    //   console.log(title + " " + rate + " " + poster + " " + rank);

    characters1.each((i, res) => {
      const characterName = anime$(res)
        .find("tbody > tr > td:nth-child(2) > h3")
        .text();
      const voiceActor = anime$(res)
        .find(
          "tbody > tr > td:nth-child(3) > table > tbody > tr > td.va-t.ar.pl4.pr4 > a"
        )
        .text();
      const characterImage = anime$(res)
        .find("tbody > tr > td.ac.borderClass > div > a > img")
        .attr("data-src");
      const actorImage = anime$(res)
        .find(
          "tbody > tr > td:nth-child(3) > table > tbody > tr > td:nth-child(2) > div > a > img"
        )
        .attr("data-src");
      const role = anime$(res)
        .find("tbody > tr > td:nth-child(2) > div")
        .text();

      db.collection(`animeRank/${rank}/characters`).add({
        name: characterName,
        image: imageResizer(characterImage),
        voiceActor,
        role,
        actorImage: imageResizer(actorImage),
      });
    });
    characters2.each((i, res) => {
      const characterName = anime$(res)
        .find("tbody > tr > td:nth-child(2) > h3")
        .text();
      const voiceActor = anime$(res)
        .find(
          "tbody > tr > td:nth-child(3) > table > tbody > tr > td.va-t.ar.pl4.pr4 > a"
        )
        .text();
      const characterImage = anime$(res)
        .find("tbody > tr > td.ac.borderClass > div > a > img")
        .attr("data-src");
      const actorImage = anime$(res)
        .find(
          "tbody > tr > td:nth-child(3) > table > tbody > tr > td:nth-child(2) > div > a > img"
        )
        .attr("data-src");
      const role = anime$(res)
        .find("tbody > tr > td:nth-child(2) > div")
        .text();

      db.collection(`animeRank/${rank}/characters`).add({
        name: characterName,
        image: imageResizer(characterImage),
        voiceActor,
        role,
        actorImage: imageResizer(actorImage),
      });
    });
  }
};

(async () => {
  await reader(link1);
  await reader(link2);
})();
