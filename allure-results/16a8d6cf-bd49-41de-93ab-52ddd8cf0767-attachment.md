# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\02_WebTable_Dynamic.spec.ts >> Verify Webtable dynamic
- Location: tests\07_WebTables\02_WebTable_Dynamic.spec.ts:3:5

# Error details

```
Error: locator.innerText: Error: strict mode violation: locator('table[summary="Sample Table"] tbody tr').first().locator('td') resolved to 6 elements:
    1) <td>UAE</td> aka getByRole('cell', { name: 'UAE' })
    2) <td>Dubai</td> aka getByRole('cell', { name: 'Dubai' })
    3) <td>829m</td> aka getByRole('cell', { name: '829m' })
    4) <td>2010</td> aka getByRole('cell', { name: '2010' })
    5) <td>1</td> aka getByRole('cell', { name: '1', exact: true })
    6) <td>…</td> aka getByRole('cell').filter({ hasText: /^$/ }).first()

Call log:
  - waiting for locator('table[summary="Sample Table"] tbody tr').first().locator('td')

```

# Page snapshot

```yaml
- table "Sample Table" [ref=e2]:
  - rowgroup [ref=e3]:
    - row "Structure Country City Height Built Rank â€¦" [ref=e4]:
      - columnheader "Structure" [ref=e5]
      - columnheader "Country" [ref=e6]
      - columnheader "City" [ref=e7]
      - columnheader "Height" [ref=e8]
      - columnheader "Built" [ref=e9]
      - columnheader "Rank" [ref=e10]
      - columnheader "â€¦" [ref=e11]
  - rowgroup [ref=e12]:
    - row "Total 4 buildings" [ref=e13]:
      - rowheader "Total" [ref=e14]
      - cell "4 buildings" [ref=e15]
  - rowgroup [ref=e16]:
    - row "Burj Khalifa UAE Dubai 829m 2010 1" [ref=e17]:
      - rowheader "Burj Khalifa" [ref=e18]
      - cell "UAE" [ref=e19]
      - cell "Dubai" [ref=e20]
      - cell "829m" [ref=e21]
      - cell "2010" [ref=e22]
      - cell "1" [ref=e23]
      - cell [ref=e24]
    - row "Clock Tower Hotel Saudi Arabia Mecca 601m 2012 2" [ref=e25]:
      - rowheader "Clock Tower Hotel" [ref=e26]
      - cell "Saudi Arabia" [ref=e27]
      - cell "Mecca" [ref=e28]
      - cell "601m" [ref=e29]
      - cell "2012" [ref=e30]
      - cell "2" [ref=e31]
      - cell [ref=e32]
    - row "Taipei 101 Taiwan Taipei 509m 2004 3" [ref=e33]:
      - rowheader "Taipei 101" [ref=e34]
      - cell "Taiwan" [ref=e35]
      - cell "Taipei" [ref=e36]
      - cell "509m" [ref=e37]
      - cell "2004" [ref=e38]
      - cell "3" [ref=e39]
      - cell [ref=e40]
    - row "Financial Center China Shanghai 492m 2008 4" [ref=e41]:
      - rowheader "Financial Center" [ref=e42]
      - cell "China" [ref=e43]
      - cell "Shanghai" [ref=e44]
      - cell "492m" [ref=e45]
      - cell "2008" [ref=e46]
      - cell "4" [ref=e47]
      - cell [ref=e48]
```

# Test source

```ts
  1  | import{test , expect} from '@playwright/test';
  2  | 
  3  | test("Verify Webtable dynamic", async({page})=>{
  4  | 
  5  |     await page.goto("https://awesomeqa.com/webtable1.html");
  6  | 
  7  |     const rows = page.locator('table[summary="Sample Table"] tbody tr');
  8  |     const rowsCount = await rows.count();
  9  |     console.log(rows);
  10 | 
  11 |     for( let i = 0 ; i <= rowsCount; i++){
> 12 |         const rowData = await rows.nth(i).locator('td').innerText();
     |                                                         ^ Error: locator.innerText: Error: strict mode violation: locator('table[summary="Sample Table"] tbody tr').first().locator('td') resolved to 6 elements:
  13 |         console.log(rowData);
  14 |     }
  15 | 
  16 | });
```