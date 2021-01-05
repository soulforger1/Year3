const cheerio = require("cheerio");
const fetchHTML = require("./helper/fetchHTML").FetchHTML;

const url =
  "https://www.imdb.com/search/title/?groups=top_100&sort=user_rating,desc&ref_=adv_prv";

(async () => {
  const html = await fetchHTML(url);

  const $ = cheerio.load(html);

  const movies = $("div.lister-item");

  movies.each((i, element) => {
    const title = $(element).find("h3 > a").text();

    const rating = $(element)
      .find("div > div.inline-block.ratings-imdb-rating > strong")
      .text();

    console.log(title + "    " + rating);
  });
})();
