const request = require("request");
const cheerio = require("cheerio");

request("https://blog.getbootstrap.com/", (error, response, html) => {
  if (!error && response.statusCode === 200) {
    const $ = cheerio.load(html);

    const post = $(".post");

    // console.log(post.html());
    // console.log(post.text());

    // const output = post.find("h1").text();
    // const output = post.children("h1").text();

    // const output = post
    //   .children("h1")
    //   .next()
    //   .text();

    // const output = post
    //   .children("h1")
    //   .parent()
    //   .text();

    $("a").each((i, el) => {
      const item = $(el).text();
      const link = $(el).attr("href");

      console.log(link);
    });
  }
});
