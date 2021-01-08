const axios = require("axios");

exports.FetchHTML = async (url) => {
  const data = await axios.get(url);
  return data.data;
};
