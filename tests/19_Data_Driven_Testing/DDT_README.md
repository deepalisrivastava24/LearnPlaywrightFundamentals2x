# Data-Driven Testing with Playwright

This folder contains examples of data-driven testing using different data sources:
- JSON (08_JSON_DDT.spec.ts)
- YAML (09_YAML_DDT.spec.ts)
- MySQL Database (10_MYSQL_DDT.spec.ts)
- Excel/XLSX (11_XLSX_DDT.spec.ts)

## Setup Instructions

### 1. Install Required Dependencies

```bash
npm install yaml exceljs mysql2
```

For TypeScript support, ensure these are also installed:
```bash
npm install --save-dev @types/node
```

### 2. Setup for YAML DDT (09_YAML_DDT.spec.ts)

The YAML test data is already provided in `registration-data.yaml`. No additional setup needed.

**Run the test:**
```bash
npx playwright test 09_YAML_DDT.spec.ts
```

### 3. Setup for MySQL DDT (10_MYSQL_DDT.spec.ts)

**Prerequisites:**
- MySQL Server installed and running
- Create a user and password for the test database

**Steps:**

1. Update the database configuration in `db-config.ts`:
   ```typescript
   export const dbConfig = {
       host: 'localhost',
       user: 'your_mysql_user',
       password: 'your_mysql_password',
       database: 'playwright_test_db',
       port: 3306,
       // ... other config
   };
   ```

2. The test will automatically:
   - Create the database `playwright_test_db`
   - Create the `registration_test_data` table
   - Insert test data

3. Run the test:
   ```bash
   npx playwright test 10_MYSQL_DDT.spec.ts
   ```

**Manual Setup (Optional):**
If you want to setup MySQL manually:

```sql
CREATE DATABASE IF NOT EXISTS playwright_test_db;

USE playwright_test_db;

CREATE TABLE IF NOT EXISTS registration_test_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    confirmPassword VARCHAR(100) NOT NULL,
    shouldPass BOOLEAN NOT NULL,
    expectedError VARCHAR(200) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO registration_test_data (description, name, username, password, confirmPassword, shouldPass, expectedError) 
VALUES 
    ('valid registration', 'Dev Sharma', 'dev@test.com', 'Strong@123', 'Strong@123', true, 'Email already exists'),
    ('password mismatch', 'Alice', 'alice@test.com', 'Strong@123', 'Different@456', false, 'Passwords do not match'),
    ('weak password', 'Bob', 'bob@test.com', '123', '123', false, 'Password must be at least 8 characters'),
    ('duplicate email', 'Existing User', 'existing@test.com', 'Strong@123', 'Strong@123', false, 'Email already exists'),
    ('invalid email format', 'Charlie', 'not-an-email', 'Strong@123', 'Strong@123', false, 'Please enter a valid email');
```

### 4. Setup for Excel DDT (11_XLSX_DDT.spec.ts)

**Steps:**

1. Generate the Excel file using the helper script:
   ```bash
   npx ts-node tests/19_Data_Driven_Testing/test-data/generate-excel-data.ts
   ```

   This will create `registration-data.xlsx` with all test data.

2. Alternatively, create the file manually:
   - Create `registration-data.xlsx` in the `test-data` folder
   - Add columns: description, name, username, password, confirmPassword, shouldPass, expectedError
   - Add the test data rows (see registration-data.yaml for reference)

3. Run the test:
   ```bash
   npx playwright test 11_XLSX_DDT.spec.ts
   ```

## File Structure

```
test-data/
├── registration-data.json      # JSON test data (existing)
├── registration-data.yaml      # YAML test data
├── registration-data.xlsx      # Excel test data (auto-generated)
├── db-config.ts                # MySQL database configuration
├── data-loader.ts              # Utility functions for loading data from all sources
└── generate-excel-data.ts      # Helper script to generate Excel file

Tests:
├── 08_JSON_DDT.spec.ts         # JSON data-driven tests
├── 09_YAML_DDT.spec.ts         # YAML data-driven tests
├── 10_MYSQL_DDT.spec.ts        # MySQL data-driven tests
└── 11_XLSX_DDT.spec.ts         # Excel data-driven tests
```

## Data Loader Functions

The `data-loader.ts` file provides these functions:

### loadYamlData(filePath: string)
Loads test data from a YAML file.

```typescript
const data = await loadYamlData('./tests/19_Data_Driven_Testing/test-data/registration-data.yaml');
```

### loadMySQLData()
Loads test data from MySQL database.

```typescript
const data = await loadMySQLData();
```

### loadExcelData(filePath: string)
Loads test data from an Excel/XLSX file.

```typescript
const data = await loadExcelData('./tests/19_Data_Driven_Testing/test-data/registration-data.xlsx');
```

### initializeMySQLDatabase()
Creates the database, table, and inserts test data into MySQL.

```typescript
await initializeMySQLDatabase();
```

## Test Data Format

All tests use the same data structure:

```typescript
{
    description: string;      // Description of the test case
    name: string;             // User name
    username: string;         // Email address
    password: string;         // Password
    confirmPassword: string;  // Confirm password
    shouldPass: boolean;      // Whether the test should pass
    expectedError: string;    // Expected error message if test fails
}
```

## Running Tests

Run all DDT tests:
```bash
npx playwright test 08_JSON_DDT.spec.ts 09_YAML_DDT.spec.ts 10_MYSQL_DDT.spec.ts 11_XLSX_DDT.spec.ts
```

Run a specific test:
```bash
npx playwright test 09_YAML_DDT.spec.ts
```

Run with more verbosity:
```bash
npx playwright test 09_YAML_DDT.spec.ts --reporter=list
```

## Troubleshooting

### MySQL Connection Error
- Ensure MySQL server is running
- Verify credentials in `db-config.ts`
- Check that the MySQL user has sufficient privileges to create databases and tables

### YAML Parse Error
- Ensure the YAML file has proper indentation
- Validate YAML syntax using an online YAML validator

### Excel File Not Found
- Run the `generate-excel-data.ts` script first
- Ensure the file path is correct and relative to the project root

### Package Not Found Errors
- Run `npm install` to install all dependencies
- Ensure versions are compatible with your Node.js version

## Notes

- All tests connect to the same test application at `https://app.thetestingacademy.com/playwright/multiple_element_filter`
- Each test case is run as a separate Playwright test
- The `shouldPass` field determines whether the test expects success or an error message
- For MySQL tests, ensure your database credentials are kept secure and not committed to version control
