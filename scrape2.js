const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const writeStream = fs.createWriteStream("post.csv");

// Write the headers
writeStream.write(`Title, Date, Link \n`);

request("https://sarah.dev/writing", (error, response, html) => {
  if (!error && response.statusCode === 200) {
    const $ = cheerio.load(html);

    $(".post").each((i, el) => {
      const title = $(el)
        .find("h3")
        .text();
      const link = $(el)
        .find("a")
        .attr("href");
      const date = $(el)
        .find("p")
        .text();

      // Write row to csv
      writeStream.write(`${title}, ${date}, ${link} \n`);
    });

    console.log("Scraping done");
  }
});
