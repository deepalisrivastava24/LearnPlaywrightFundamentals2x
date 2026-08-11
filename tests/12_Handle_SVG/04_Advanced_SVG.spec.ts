import{test, expect, Locator} from '@playwright/test'

const mapURL = 'https://simplemaps.com/svg/country/in';

test.describe('Grouping testcase', ()=>{    

    test.beforeEach(async ({ page }) => {
        
        await page.goto(mapURL);
    });

    test('To find the states in svg map', async({page})=>{

        
        const mapPath = "//div[@id='admin1_map_inner']//*[name()='svg']//*[name()='path'and contains(@class,'sm_state')]";
        
        const states = await page.locator(mapPath).all();
        for(const state of states){
            const classState = await state.getAttribute('class');
            console.log(classState); 
            
            if (classState?.includes("INUP")) {
                state.click();
            }

        }        
        
    });

    
});