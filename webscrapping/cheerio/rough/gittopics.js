const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
request("https://github.com/topics",callback);

function callback(err,res,html)
{
    // fs.writeFileSync("ht.html",html);
    let $ = cheerio.load(html);
    let topic = $(".no-underline.d-flex.flex-column.flex-justify-center");
    for( let i =0; i<topic.length; i++)
    {    //let topicname = $(topic[i]).text();
        let topiclink = "https://github.com/topics"+$(topic[i]).attr("href");
        // console.log(topicname+"\n");
        console.log(topiclink+"\n");
        request("https://github.com"+$(topic[i]).attr("href"),fetch);
    }

}
function fetch(err,res,html)
{   if(!err){
    let $ = cheerio.load(html);
    let repolink = $("a.text-bold");
    for( let i =0; i<repolink.length && i<8; i++)
    {
        console.log("https://github.com"+$(repolink[i]).attr("href"));
    }
  }
}