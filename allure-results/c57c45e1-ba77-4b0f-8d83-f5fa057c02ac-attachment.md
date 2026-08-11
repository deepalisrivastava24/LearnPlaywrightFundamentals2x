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
  - waiting for getByRole('button', { name: 'Close', exact: true })

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
              - textbox "your.email@example.com" [active] [invalid] [ref=e33]
              - paragraph [ref=e34]: Invalid email address
            - generic [ref=e35]:
              - text: Password
              - textbox "••••••••" [ref=e36]: Livelife@24
            - generic [ref=e37]:
              - generic [ref=e38]:
                - checkbox "Remember me" [ref=e39]
                - generic [ref=e40]: Remember me
              - button "Forgot password?" [ref=e41] [cursor=pointer]
            - button "Sign in" [ref=e42] [cursor=pointer]
          - paragraph [ref=e43]:
            - text: Don't have an account?
            - button "Sign Up" [ref=e44] [cursor=pointer]
  - generic [ref=e47]:
    - generic [ref=e48]:
      - generic [ref=e49]:
        - img [ref=e50]
        - text: Launch-ready QA/SDET workflow
      - heading "Build the resume, prove the signal, and prepare for the interview." [level=2] [ref=e52]
      - paragraph [ref=e53]: One workspace for resume building, deep resume roasting, job-description matching, interview scripts, and portfolio proof.
    - img "QAJobFit hiring cockpit dashboard preview" [ref=e55]
    - generic [ref=e56]:
      - generic [ref=e57]:
        - img [ref=e58]
        - paragraph [ref=e63]: Resume Studio
        - paragraph [ref=e64]: Build and export versions
      - generic [ref=e65]:
        - img [ref=e66]
        - paragraph [ref=e70]: JD Tailoring
        - paragraph [ref=e71]: Match role language
      - generic [ref=e72]:
        - img [ref=e73]
        - paragraph [ref=e76]: Interview Prep
        - paragraph [ref=e77]: Practice stronger answers
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
  14 |         await page.getByRole('textbox', { name: 'your.email@example.com' }).click();
  15 |         await page.getByRole('textbox', { name: '••••••••' }).fill('Livelife@24');
  16 |         await page.getByRole('button', { name: 'Sign in' }).click();
> 17 |         await page.getByRole('button', { name: 'Close', exact: true }).click();
     |                                                                        ^ Error: locator.click: Test timeout of 30000ms exceeded.
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