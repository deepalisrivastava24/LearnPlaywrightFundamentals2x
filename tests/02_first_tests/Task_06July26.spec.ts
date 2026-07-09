import{test, expect} from '@playwright/test';

test('Open two urls in different context', async({browser})=> {

let ttacartcontext = await browser.newContext();
let ttacartpage = await ttacartcontext.newPage();
await ttacartpage.goto("https://app.thetestingacademy.com/playwright/ttacart/");
console.log(ttacartpage.url());


let ttabankcontext = await browser.newContext();
let ttabankpage = await ttabankcontext.newPage();
await ttabankpage.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
console.log(ttabankpage.url());

});