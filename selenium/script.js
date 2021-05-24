const wb = require("selenium-webdriver");
const chr = require("chromedriver");
const By = wb.By;
const untill = wb.untill;
const driver = new wb.Builder()
    .forBrowser('chrome')
    .build();

driver.get("https://www.cricbuzz.com/live-cricket-scores/35712/mi-vs-csk-27th-match-indian-premier-league-2021").then(function () {
    return driver.findElements(By.className("cb-nav-tab"));
}).then(function (data) {
    return data[1].click();
}).then(function () {
    return driver.wait(untill.elementLocated(By.css(".cb-col.cb-col-100.cb-scrd-sub-hdr.cb-bg-gray")));
}).then(function () {
    return driver.findElements(By.css(".cb-col.cb-col-100.cb-scrd-sub-hdr.cb-bg-gray"));
}).then(function (tables) {
    let Promises = [];
    for (let i = 1; i < 8; i += 2) {
        Promises.push(tables[i].findElements(By.css(".cb-col.cb-col-100.cb-scrd-itms")));
    }

    return Promise.all(Promises);
}).then(function (prom) {
    let promises = [];
    for (let i = 0; i < prom.length; i++) {

    }
})
