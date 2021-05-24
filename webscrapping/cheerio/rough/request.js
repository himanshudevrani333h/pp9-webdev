const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
request("https://www.espncricinfo.com/series/pakistan-tour-of-south-africa-2021-1251556/south-africa-vs-pakistan-2nd-odi-1251573/full-scorecard", callback);

function callback(err, res, html) {
    if (!err) {
        fs.writeFileSync("ht.html",html);
        let maxwickets = 0;
        let nameofbowler;
        let $ = cheerio.load(html);
        let rows = $(".table.bowler tbody tr");
        for (let i = 0; i < rows.length; i++) {
            let columns = $(rows[i]).find("td");
            let wickets = parseInt($(columns[4]).text());
            if (wickets > maxwickets) {
                maxwickets = wickets;
                nameofbowler = $(columns[0]).text();
            }

        }
        console.log(nameofbowler + "\t" + maxwickets);
    }
}

