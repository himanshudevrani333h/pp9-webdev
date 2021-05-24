const pupeteer = require("puppeteer");
let link = "https://www.youtube.com/watch?v=-bSSTuLyiu4"
async function main() {
    let browser = await pupeteer.launch({
        headless: false,
        defaultViewport: false
    });
    let tabs = await browser.pages();
    let tab = tabs[0];
    let download = link.replace("youtube", "ssyoutube");
    await tab.goto(download);
    await tab.waitForSelector(".link.link-download.subname.ga_track_events.download-icon",{visible:true});
    await tab.click(".link.link-download.subname.ga_track_events.download-icon");

}

main();