// const request = require("request");
// const cheerio = require("cheerio");
// const fs = require("fs");

// request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results", callback1);

// let finalipldata = [];
// function callback1(err, res, html) {
//     if (!err) {
//         //   fs.writeFileSync("ipl.html",html);
//         let $ = cheerio.load(html);
//         let matches = $(".match-info-link-FIXTURES");
//         // console.log(matches.length);
//         for (let i = 0; i <1; i++) {
//             let permatchlink = $(matches[i]).attr("href");
//             // console.log(permatchlink);
//             request("https://www.espncricinfo.com" + permatchlink, fetch);
//         }

//     }
// }

// function fetch(err, res, html) {
//     if (!err) {
//         // fs.writeFileSync("dt.html",html);
//         let $ = cheerio.load(html);
//         let batsmentable = $(".Collapsible__contentInner table.table.batsman tbody tr");
//         // console.log(batsmentable.length);
//         let team = $(".name-link");
//         let team1 = $(team[0]).text();
//         let team2 = $(team[1]).text();
//         // console.log(team1);
//         for(let i = 0; i < batsmentable.length;i+=2){
            
//             let batsmencol = $(batsmentable[i]).find("td");
//             let bname = $(batsmencol[0]).text();
//             //   console.log(bname);
//             if( bname == "Extras" ){
//                  i -=1;
//                  continue;
//             }
            
//             let run = $(batsmencol[2]).text();
//             let b = $(batsmencol[3]).text();
//             let four = $(batsmencol[4]).text();
//             let six = $(batsmencol[5]).text();
//             let sr = $(batsmencol[6]).text();
//             finalipldata.push({
//                 "Team Name": team2,
//                 "batsmen name": bname,
//                 "Run": run,
//                 "four": four,
//                 "Sixes": six,
//                 "Strike Rate": sr,
//             });
//             // console.log("run " + run + ",  ball  " + b  + ",  four  "+four+",  six  "+six+",  sr  " + sr);

//         }
        

        
        
        
//         let bowlertable = $(".Collapsible__contentInner table.table.bowler tbody tr");

//         for (let i = 0; i < bowlertable.length; i++) {
//             let bowlercol = $(bowlertable[i]).find("td");
//             let bowlername = $(bowlercol[0]).text();
//             // console.log(bowlername);
//             let over = $(bowlercol[1]).text();
//             let Maiden = $(bowlercol[2]).text();
//             let Run = $(bowlercol[3]).text();
//             let Wicket = $(bowlercol[4]).text();
//             let Economy = $(bowlercol[5]).text();
//             finalipldata.push({
//                 "Team Name": team1,
//                 "Bowler name": bowlername,
//                 "Over": over,
//                 "Maiden":Maiden,
//                 "RUN": Run,
//                 "EConomy": Economy,
//             });
//             // console.log(over + " " + Maidin + " " + Run + " " + Wicket + " " + Economy);
//         }
//         fs.writeFileSync("finalipl.json", JSON.stringify(finalipldata));
//     }
// }


const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results",callback);
let finalData = [];
let count = 0;
let totalMatches;
function callback(err,res,html) {
    if(!err) {
        let $ = cheerio.load(html);
        let scorecards = $('a[data-hover="Scorecard"]');
        // console.log(scorecards.length);
        totalMatches = scorecards.length;
        for(let i = 0; i < scorecards.length; i++) {
            finalData.push({})
            let url = $(scorecards[i]).attr("href");
            // console.log(url);
            request("https://www.espncricinfo.com" + url,getMatchInfo.bind(this,i));
        }

    }
}

function getMatchInfo(idx,err,res,html) {
    if(!err) {
        let $ = cheerio.load(html);
        let teamNamesDiv = $(".name-link");
        // console.log(teamNamesDiv.length);
        let team1 = $(teamNamesDiv[0]).text();
        let team2 = $(teamNamesDiv[1]).text();
        finalData[idx][team1] = { "batting" : {"players" : []}, "bowling" : {"players" : []}};
        finalData[idx][team2] = { "batting" : {"players" : []}, "bowling" : {"players" : []}};
        let tables = $(".table.batsman");
        let keysArray = ["playerName","","runs","balls","","4's","6's","SR"];
        for(let i = 0; i < tables.length; i++) {
            let rows = $(tables[i]).find("tbody tr");
            for(let j = 0; j < rows.length; j+=2) {
                let columns = $(rows[j]).find("td");
                let playerInfo = {};
                for(let k = 0; k < columns.length; k++) {
                    if(k != 1 && k != 4 ) {
                        playerInfo[keysArray[k]] = $(columns[k]).text();
                    }
                }
                if(i == 0) {
                    finalData[idx][team1]["batting"]["players"].push(playerInfo);
                } else if(i == 1) {
                    finalData[idx][team2]["batting"]["players"].push(playerInfo);
                }
            }
        }
        tables = $(".table.bowler");
        keysArray = ["playerName","o","m","r","w","econ","0's","4's","6's","wd","nb"];
        for(let i = 0; i < tables.length; i++) {
            let rows = $(tables[i]).find("tbody tr");
            for(let j = 0; j < rows.length; j++) {
                let columns = $(rows[j]).find("td");
                let playerInfo = {};
                for(let k = 0; k < columns.length; k++) {
                    playerInfo[keysArray[k]] = $(columns[k]).text();
                }
                if(i == 0) {
                    finalData[idx][team1]["bowling"]["players"].push(playerInfo);
                } else if(i == 1) {
                    finalData[idx][team2]["bowling"]["players"].push(playerInfo);
                }
            }
        }
        count += 1;
        if(count == totalMatches) {
            fs.writeFileSync("finalData.json", JSON.stringify(finalData));
        }
        
    }
}