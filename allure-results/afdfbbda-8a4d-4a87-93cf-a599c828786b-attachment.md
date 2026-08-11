# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 14_FileUpload\Task_File_Upload.spec.ts >> Grouping testcase >> Single File Upload
- Location: tests\14_FileUpload\Task_File_Upload.spec.ts:14:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.setInputFiles: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//input[@id=\'avatar-upload\']')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - button "Dismiss banner" [ref=e4] [cursor=pointer]:
      - img [ref=e5]
    - generic [ref=e8]:
      - generic [ref=e9]: LIVE
      - generic [ref=e11]: 🎭 Playwright + AI Blueprint
      - generic [ref=e12]: New Batch Launching
      - generic [ref=e13]: "|"
      - generic [ref=e14]: New Batch • 29 Apr 2026, 7 AM IST
      - generic [ref=e15]: "|"
      - generic [ref=e16]:
        - generic [ref=e17]: ₹35,000
        - generic [ref=e18]: ₹9,999
        - generic [ref=e19]: 33% OFF
      - generic [ref=e20]:
        - img [ref=e21]
        - text: "Code:"
        - generic [ref=e23]: PLAYWRIGHT
      - generic [ref=e24]:
        - button "Join" [ref=e25] [cursor=pointer]:
          - img [ref=e26]
          - text: Join
        - link "Chat on WhatsApp" [ref=e31] [cursor=pointer]:
          - /url: https://sdet.live/WhatsApp
          - img [ref=e32]
        - generic [ref=e34]:
          - button "View announcement 1" [ref=e35] [cursor=pointer]
          - button "View announcement 2" [ref=e36] [cursor=pointer]
  - generic [ref=e37]:
    - generic [ref=e40]:
      - generic [ref=e42]:
        - heading "Enter your password" [level=1] [ref=e43]
        - paragraph [ref=e44]: Enter the password associated with your account
        - generic [ref=e45]:
          - paragraph [ref=e46]: deepali.srivastava24@gmail.com
          - button "Edit" [ref=e47] [cursor=pointer]:
            - img [ref=e48]
      - generic [ref=e51]:
        - generic [ref=e53]:
          - generic [ref=e54]:
            - generic [ref=e55]:
              - generic [ref=e56]: Password
              - link "Forgot password?" [ref=e57] [cursor=pointer]:
                - /url: ""
            - generic [ref=e58]:
              - textbox "Password" [active] [invalid] [ref=e59]:
                - /placeholder: Enter your password
                - text: LIvelife@24
              - button "Show password" [ref=e60] [cursor=pointer]:
                - img [ref=e61]
          - generic [ref=e64]: Password is incorrect. Try again, or use another method.
          - paragraph [ref=e66]:
            - img [ref=e67]
            - text: Password is incorrect. Try again, or use another method.
        - button "Continue" [ref=e69] [cursor=pointer]:
          - generic [ref=e70]:
            - text: Continue
            - img [ref=e71]
    - link "← Back to Home" [ref=e73] [cursor=pointer]:
      - /url: /
  - button "Chat with support on WhatsApp" [ref=e74] [cursor=pointer]:
    - img
```

# Test source

```ts
  1  | import{test, expect, Locator} from '@playwright/test'
  2  | import path from 'path';
  3  | import os from 'os';
  4  | 
  5  | const URL = 'https://app.thetestingacademy.com/student/settings';
  6  | 
  7  | test.describe('Grouping testcase', ()=>{    
  8  | 
  9  |     test.beforeEach(async ({ page }) => {
  10 |         
  11 |         await page.goto(URL);
  12 |     });
  13 | 
  14 |     test('Single File Upload', async({page})=>{
  15 |         
  16 |         const filePath : string = path.join(os.homedir(),'Downloads','images2.jpg');
  17 |         const fileInput: Locator = await page.locator("//input[@id='avatar-upload']");
> 18 |         await fileInput.setInputFiles(filePath);
     |         ^ Error: locator.setInputFiles: Test timeout of 30000ms exceeded.
  19 | 
  20 | 
  21 |         await page.pause();
  22 | 
  23 |                  
  24 |                
  25 |        
  26 |     });
  27 | 
  28 |     
  29 | 
  30 |     
  31 | });
```