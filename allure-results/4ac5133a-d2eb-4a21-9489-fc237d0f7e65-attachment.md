# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 15_File_Download\Task_File_Download.spec.ts >> Download a file >> Verify download file
- Location: tests\15_File_Download\Task_File_Download.spec.ts:11:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'deepali.sri2406@gmail.com' })

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - generic [ref=e7]:
      - img [ref=e9]
      - heading "QAJobFit" [level=1] [ref=e13]
      - paragraph [ref=e14]: QA/SDET hiring cockpit for resumes, JD tailoring, interview practice, and portfolio proof.
    - generic [ref=e16]:
      - tablist [ref=e17]:
        - tab "Sign In" [selected] [ref=e18] [cursor=pointer]
        - tab "Sign Up" [ref=e19] [cursor=pointer]
      - tabpanel "Sign In" [ref=e20]:
        - generic [ref=e21]:
          - generic [ref=e22]:
            - heading "Welcome back" [level=2] [ref=e23]
            - paragraph [ref=e24]: Please enter your details to sign in.
          - button "Continue with Google" [ref=e26] [cursor=pointer]:
            - img
            - text: Continue with Google
          - generic [ref=e30]: Or continue with
          - generic [ref=e31]:
            - generic [ref=e32]:
              - text: Email
              - textbox "your.email@example.com" [ref=e33]
            - generic [ref=e34]:
              - text: Password
              - textbox "••••••••" [ref=e35]
            - generic [ref=e36]:
              - generic [ref=e37]:
                - checkbox "Remember me" [ref=e38]
                - generic [ref=e39]: Remember me
              - button "Forgot password?" [ref=e40] [cursor=pointer]
            - button "Sign in" [ref=e41] [cursor=pointer]
          - paragraph [ref=e42]:
            - text: Don't have an account?
            - button "Sign Up" [ref=e43] [cursor=pointer]
  - generic [ref=e46]:
    - generic [ref=e47]:
      - generic [ref=e48]:
        - img [ref=e49]
        - text: Launch-ready QA/SDET workflow
      - heading "Build the resume, prove the signal, and prepare for the interview." [level=2] [ref=e51]
      - paragraph [ref=e52]: One workspace for resume building, deep resume roasting, job-description matching, interview scripts, and portfolio proof.
    - img "QAJobFit hiring cockpit dashboard preview" [ref=e54]
    - generic [ref=e55]:
      - generic [ref=e56]:
        - img [ref=e57]
        - paragraph [ref=e62]: Resume Studio
        - paragraph [ref=e63]: Build and export versions
      - generic [ref=e64]:
        - img [ref=e65]
        - paragraph [ref=e69]: JD Tailoring
        - paragraph [ref=e70]: Match role language
      - generic [ref=e71]:
        - img [ref=e72]
        - paragraph [ref=e75]: Interview Prep
        - paragraph [ref=e76]: Practice stronger answers
```

# Test source

```ts
  1  | import{test, expect} from '@playwright/test';
  2  | import path from 'path';
  3  | 
  4  | test.describe('Download a file', ()=>{
  5  | 
  6  |     /* test.beforeEach(async({page})=>{
  7  |         page.goto("https://qajobfit.com/dashboard?tab=builder");
  8  | 
  9  |     });
  10 |  */
  11 |     test('Verify download file', async({page})=>{
  12 |         
  13 |         page.goto("https://qajobfit.com/dashboard?tab=builder");
> 14 |         await page.getByRole('textbox', { name: 'deepali.sri2406@gmail.com' }).click();
     |                                                                                ^ Error: locator.click: Test timeout of 30000ms exceeded.
  15 |         await page.getByRole('textbox', { name: '••••••••' }).fill('Livelife@24');
  16 |         await page.getByRole('button', { name: 'Sign in' }).click();
  17 |         await page.getByRole('button', { name: 'Close', exact: true }).click();
  18 |         console.log("website opened");
  19 |         await page.pause();
  20 | 
  21 |         /* import { test, expect } from '@playwright/test';
  22 | 
  23 | test('test', async ({ page }) => {
  24 |   await page.getByRole('textbox', { name: 'your.email@example.com' }).click();
  25 |   await page.getByRole('textbox', { name: 'your.email@example.com' }).fill('deepali.sri2406@gmail.com');
  26 |   await page.getByRole('textbox', { name: '••••••••' }).click();
  27 |   await page.getByRole('textbox', { name: '••••••••' }).fill('LIvelife@24');
  28 |   await page.getByRole('button', { name: 'Sign in' }).click();
  29 |   await page.getByRole('textbox', { name: '••••••••' }).click();
  30 |   await page.getByRole('textbox', { name: '••••••••' }).fill('Livelife@24');
  31 |   await page.getByRole('button', { name: 'Sign in' }).click();
  32 |   await page.getByRole('button', { name: 'Close', exact: true }).click();
  33 |   await page.getByRole('link', { name: 'Build resume' }).click();
  34 |   const downloadPromise = page.waitForEvent('download');
  35 |   await page.getByRole('button', { name: 'PDF' }).click();
  36 |   const download = await downloadPromise;
  37 | }); */
  38 | 
  39 |     });
  40 | 
  41 | 
  42 | })
```