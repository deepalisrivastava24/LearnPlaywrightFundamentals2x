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

Locator:  locator('.footer-strip').filter({ hasText: 'Privacy Policy' })
Expected: "#Privacy Policy"
Received: ""
Timeout:  5000ms

Call log:
  - Expect "toHaveAttribute" with timeout 5000ms
  - waiting for locator('.footer-strip').filter({ hasText: 'Privacy Policy' })
    13 × locator resolved to <footer id="footer-links" class="footer-strip">…</footer>
       - unexpected value "null"

```

```yaml
- heading "The Testing Academy" [level=3]
- paragraph:
  - text: A public practice page from
  - strong: The Testing Academy
  - text: for learning multiple element filtering, link collection, footer-link traversal, and targeted clicks.
- heading "Information" [level=4]
- link "About Us":
  - /url: "#about-us"
- link "Delivery Information":
  - /url: "#delivery-information"
- link "Privacy Policy":
  - /url: "#privacy-policy"
- link "Terms & Conditions":
  - /url: "#terms-conditions"
- heading "Customer Service" [level=4]
- link "Contact Us":
  - /url: "#contact-us"
- link "Returns":
  - /url: "#returns-footer"
- link "Site Map":
  - /url: "#site-map"
- link "Brands":
  - /url: "#brands"
- heading "Extras" [level=4]
- link "Gift Certificates":
  - /url: "#gift-certificates"
- link "Affiliate":
  - /url: "#affiliate"
- link "Specials":
  - /url: "#specials"
- link "Support Center":
  - /url: "#support-center"
- heading "My Account" [level=4]
- link "My Account":
  - /url: "#footer-my-account"
- link "Order History":
  - /url: "#footer-order-history"
- link "Wish List":
  - /url: "#footer-wish-list"
- link "Newsletter":
  - /url: "#footer-newsletter"
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
  14 | const privacyLink = page.locator(".footer-strip").filter({hasText: "Privacy Policy"});
> 15 | await expect(privacyLink).toHaveAttribute("href", "#Privacy Policy");
     |                           ^ Error: expect(locator).toHaveAttribute(expected) failed
  16 | 
  17 | 
  18 | });
```