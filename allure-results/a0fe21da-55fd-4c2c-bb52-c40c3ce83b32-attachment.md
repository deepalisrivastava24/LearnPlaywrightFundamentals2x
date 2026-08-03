# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\03_FilterPageLoc.spec.ts >> Verify Element by filter
- Location: tests\07_WebTables\03_FilterPageLoc.spec.ts:3:5

# Error details

```
Error: expect(locator).toHaveAttribute(expected) failed

Locator:  locator('footer a').filter({ hasText: 'Privacy Policy' })
Expected: "#Privacy Policy"
Received: "#privacy-policy"
Timeout:  5000ms

Call log:
  - Expect "toHaveAttribute" with timeout 5000ms
  - waiting for locator('footer a').filter({ hasText: 'Privacy Policy' })
    13 × locator resolved to <a href="#privacy-policy">Privacy Policy</a>
       - unexpected value "#privacy-policy"

```

```yaml
- link "Privacy Policy":
  - /url: "#privacy-policy"
```

# Test source

```ts
  1  | import {test , expect} from '@playwright/test';
  2  | 
  3  | test("Verify Element by filter", async({page}) => {
  4  | 
  5  | await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
  6  | 
  7  | const forgottonPasswordLInk = page.locator("a.list-group-item").filter({hasText: "Forgotten Password"});
  8  | await forgottonPasswordLInk.click();
  9  | 
  10 | const accountLinks = await page.locator("a.list-group-item").count();
  11 | console.log("Total Account Links are - " + accountLinks);
  12 | expect(accountLinks).toBe(13);
  13 | 
  14 | const privacyLink = page.locator("footer a").filter({hasText: "Privacy Policy"});
> 15 | await expect(privacyLink).toHaveAttribute("href", "#Privacy Policy");
     |                           ^ Error: expect(locator).toHaveAttribute(expected) failed
  16 | 
  17 | 
  18 | });
```