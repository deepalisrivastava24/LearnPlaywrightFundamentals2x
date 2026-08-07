import{test, expect} from '@playwright/test';

test("Verify keyboard hover and drag and drop", async({page})=>{

    await page.goto("https://www.spicejet.com/");
    await page.getByText("Add-ons",{exact:true}).hover();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        page.getByText("FlyEarly",{exact:true}).click()
    ]);

    await newPage.waitForLoadState('domcontentloaded');

    const expectedUrl = "https://corporate.spicejet.com/FLYEarlyProductatAirports.aspx";

    await expect(newPage).toHaveURL(expectedUrl);
    await expect(newPage).toHaveTitle(/SpiceJet/i);

});