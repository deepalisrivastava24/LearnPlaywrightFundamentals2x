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
- generic [ref=e1]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - generic [ref=e6]:
        - generic [ref=e7]: Loading
        - progressbar [ref=e8]
      - main [ref=e15]:
        - generic [ref=e16]:
          - generic [ref=e19]:
            - img [ref=e21]
            - generic [ref=e22]: Sign in with Google
          - generic [ref=e23]:
            - heading "Sign in" [level=1] [ref=e24]
            - generic [ref=e26]:
              - text: to continue to
              - button "thetestingacademy.com" [ref=e27] [cursor=pointer]
        - generic [ref=e35]:
          - generic [ref=e40]:
            - textbox "Email or phone" [active] [ref=e41]: deepali.srivastava24@
            - generic: Email or phone
          - button "Forgot email?" [ref=e45] [cursor=pointer]
        - generic [ref=e47]:
          - button "Next" [ref=e51]:
            - generic [ref=e54]: Next
          - button "Create account" [ref=e59]:
            - generic [ref=e62]: Create account
    - contentinfo [ref=e66]:
      - combobox "Change language English (United States)" [ref=e70] [cursor=pointer]:
        - generic:
          - generic: English (United States)
        - generic:
          - img
      - list [ref=e72]:
        - listitem [ref=e73]:
          - link "Open Google Account Help Center (external, opens in a new window)" [ref=e74] [cursor=pointer]:
            - /url: https://support.google.com/accounts?hl=en-US&p=account_iph
            - text: Help
        - listitem [ref=e75]:
          - link "Privacy Policy (external, opens in a new window)" [ref=e76] [cursor=pointer]:
            - /url: https://accounts.google.com/TOS?loc=IN&hl=en-US&privacy=true
            - text: Privacy
        - listitem [ref=e77]:
          - link "Google Terms of Service (external, opens in a new window)" [ref=e78] [cursor=pointer]:
            - /url: https://accounts.google.com/TOS?loc=IN&hl=en-US
            - text: Terms
  - iframe [ref=e79]:
    
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
  16 |         const filePath : string = path.join(os.homedir(),'Downloads','images.jpg');
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