const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

request("https://www.espncricinfo.com/series/pakistan-tour-of-south-africa-2021-1251556/south-africa-vs-pakistan-2nd-odi-1251573/full-scorecard", callback);

let palyercolumn;
let finaldata=[];
function callback(err,res,html)
{
  if(!err)
  {
    //   fs.writeFileSync("ht.html", html);
   
    let $ = cheerio.load(html);
    palyercolumn = $(".batsman-cell");
    for( let i =0; i<palyercolumn.length; i++)
    {
        let playerurl = $(palyercolumn[i]).find("a").attr("href");
        request("https://www.espncricinfo.com"+playerurl,playercallback);
    }
  }
}

function playercallback(err,res,html)
{
    if(!err)
    {
        // fs.writeFileSync("dt.html",html);
        let $ = cheerio.load(html);
        let data = $(".player_overview-grid h5");
        let playername = $(data[0]).text();
        let playerbirthday = $(data[1]).text();
        finaldata.push({
            "name":playername,
            "birthdate":playerbirthday
        });
      if(finaldata.length == palyercolumn.length)
      {
          fs.writeFileSync("finaldata.json",JSON.stringify(finaldata));
      }

    }
}