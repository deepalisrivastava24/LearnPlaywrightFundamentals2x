import{test, expect, Locator} from '@playwright/test'

const mapURL = 'https://simplemaps.com/svg/country/in';

test.describe('Grouping testcase', ()=>{    

    test.beforeEach(async ({ page }) => {
        
        await page.goto(mapURL);
    });

    test('To find the states in svg map', async({page})=>{

        const data= {
            INAN: "Andaman and Nicobar",
            INAP: "Andhra Pradesh",
            INAR: "Arunachal Pradesh",
            INAS: "Assam",
            INBR: "Bihar",
            INCH: "Chandigarh",
            INCT: "Chhattisgarh",
            INDH: "Dādra and Nagar Haveli and Damān and Diu",
            INDL: "Delhi",
            INGA: "Goa",
            INGJ: "Gujarat",
            INHP: "Himachal Pradesh",
            INHR: "Haryana",
            INJH: "Jharkhand",
            INJK: "Jammu and Kashmir",
            INKA: "Karnataka",
            INKL: "Kerala",
            INLA: "Ladakh",
            INLD: "Lakshadweep",
            INMH: "Maharashtra",
            INML: "Meghalaya",
            INMN: "Manipur",
            INMP: "Madhya Pradesh",
            INMZ: "Mizoram",
            INNL: "Nagaland",
            INOR: "Orissa",
            INPB: "Punjab",
            INPY: "Puducherry",
            INRJ: "Rajasthan",
            INSK: "Sikkim",
            INTG: "Telangana",
            INTN: "Tamil Nadu",
            INTR: "Tripura",
            INUP: "Uttar Pradesh",
            INUT: "Uttaranchal",
            INWB: "West Bengal",
        };

        const mapPath = "//div[@id='admin1_map_inner']//*[name()='svg']//*[name()='path'and contains(@class,'sm_state')]";
        
        const states = await page.locator(mapPath).all();
        const targetName = "Sikkim";
        for(const state of states){
            const classState = await state.getAttribute('class');
            console.log(classState);

            if(classState){
                for(const code in data){
                    if(classState.includes(code) && data[code] === targetName){
                        console.log(`Clicking ${targetName}`);
                        await state.click();
                        break;
                    }
                    
                }
            }
                   

        }

        
        
    });

    
});