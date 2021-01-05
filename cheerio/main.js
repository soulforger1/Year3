const cheerio = require("cheerio");
const firebase = require("firebase");
const fetchHTML = require("./helper/fetchHTML").FetchHTML;
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAFLfv7LjQWtt0fPaq_AisXVOSwvjD75Vs",
  authDomain: "test-11c3c.firebaseapp.com",
  databaseURL: "https://test-11c3c.firebaseio.com",
  projectId: "test-11c3c",
  storageBucket: "test-11c3c.appspot.com",
  messagingSenderId: "509364152086",
  appId: "1:509364152086:web:4d9b28c91bdd9709b6d237",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const url1 =
  "https://www.imdb.com/search/title/?groups=top_100&sort=user_rating,desc&ref_=adv_prv";
const url2 =
  "https://www.imdb.com/search/title/?groups=top_100&sort=user_rating,desc&start=51&ref_=adv_nxt";

(async () => {
  const firsthalf = await fetchHTML(url1);
  const lasthalf = await fetchHTML(url2);
  getData(firsthalf);
  getData(lasthalf);
})();

const getData = (html) => {
  const $ = cheerio.load(html);

  const movies = $("div.lister-item");

  movies.each((i, element) => {
    const title = $(element).find("h3 > a").text();
    const rating = $(element)
      .find("div > div.inline-block.ratings-imdb-rating > strong")
      .text();
    const rank = $(element)
      .find("h3 > span.lister-item-index.unbold.text-primary")
      .text()
      .split(".")[0];

    db.collection("movieRank").doc(rank).set({ title, rating });
  });
};
