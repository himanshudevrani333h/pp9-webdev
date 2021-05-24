const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

request("https://www.espncricinfo.com/series/pakistan-tour-of-south-africa-2021-1251556/south-africa-vs-pakistan-2nd-odi-1251573/full-scorecard", callback);

function callback(err,res,html)
{
    let $ = cheerio.load(html);
    let data = $(".best-player-name");
    let playername = data.text();
    console.log(playername);

}