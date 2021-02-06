// init cheerio and axios
const axios = require("axios").default;
const cheerio = require("cheerio");

// Base url
const url = "https://www.bing.com/covid/local/indonesia?vert=vaccineTracker";

async function getData() {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const divhead = $(".verticalContent").contents(0);

    // $(divhead).each((index, element) => {
    //   const title = $(".vaccineTrackerSegmentTitle").children().html();
    //   console.log(title);
    // });
    console.log(divhead.html());
  } catch (error) {
    console.error(error);
  }
}

getData();
