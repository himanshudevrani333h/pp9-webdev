const pupeteer = require("puppeteer");
const id = "yoyolag894@shzsedu.com";
const password = "hd123456@";

async function main() {
    let browser = await pupeteer.launch({
        headless: false,
        defaultViewport: false
    });
    let tabs = await browser.pages();
    let tab = tabs[0];
    await tab.goto("https://www.hackerrank.com/auth/login");
    await tab.type("#input-1", id);
    await tab.type("#input-2", password);
    await tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    await tab.waitForSelector("#base-card-1-link", { visible: true });
    await tab.click("#base-card-1-link");
    await tab.waitForSelector('a[data-attr1="warmup"]', { visible: true });
    await tab.click('a[data-attr1="warmup"]');
    await tab.waitForSelector(".js-track-click.challenge-list-item");
    let problem = await tab.$$(".js-track-click.challenge-list-item");
    let problemUrl = [];
    for (let i = 0; i < problem.length; i++) {
        let url = await tab.evaluate(function (ele) {
            return ele.getAttribute("href");
        }, problem[i]);
        problemUrl.push(url);
    }

    for (let i = 0; i < problemUrl.length; i++) {
        await editorialpage("https://www.hackerrank.com" + problemUrl[i], tab);
    }
    await browser.close();
}

async function editorialpage(url, tab) {
    let editorial = url.replace("?", "/editorial?");
    let problem = url.replace("?","/problem?");
    await tab.goto(editorial);
    let lang = await tab.$$(".hackdown-content h3");
    for( let i =0; i<lang.length; i++)
    {
        let langcontent = await tab.evaluate(function(ele){
        return ele.innerText;
        },lang[i]);

        if( langcontent == "C++")
        {
            let code = await tab.$$(".hackdown-content .highlight");
            let codecontent = await tab.evaluate(function(ele){
                return ele.innerText;
            },code[i]);
            
            await tab.goto(problem);
            await tab.waitForSelector(".checkbox-input",{visible:true});
            await tab.click(".checkbox-input");
            await tab.type("#input-1",codecontent);
            await tab.keyboard.down("Control");
            await tab.keyboard.press("A");
            await tab.keyboard.press("X");
            await tab.click(".monaco-scrollable-element.editor-scrollable.vs");
            await tab.keyboard.press("A");
            await tab.keyboard.press("V");
            await tab.keyboard.up("Control");
            await tab.click(".ui-btn.ui-btn-normal.ui-btn-secondary.pull-right.msR.hr-monaco-compile.hr-monaco__run-code.ui-btn-styled");
            await tab.waitForSelector(".status.compile-success",{visible:true});
            return;
        }
    }
}

main();
