import ExcelJS from 'exceljs';
import path from 'path';

/**
 * Helper script to generate registration-data.xlsx file
 * Run this script once to create the Excel file with test data
 * 
 * Usage: npx ts-node tests/19_Data_Driven_Testing/test-data/generate-excel-data.ts
 */

async function generateExcelData() {
    try {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('RegistrationData');

        // Define columns
        worksheet.columns = [
            { header: 'description', key: 'description', width: 20 },
            { header: 'name', key: 'name', width: 15 },
            { header: 'username', key: 'username', width: 20 },
            { header: 'password', key: 'password', width: 15 },
            { header: 'confirmPassword', key: 'confirmPassword', width: 18 },
            { header: 'shouldPass', key: 'shouldPass', width: 12 },
            { header: 'expectedError', key: 'expectedError', width: 35 }
        ];

        // Add header formatting
        worksheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
        worksheet.getRow(1).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'FF4472C4' }
        };

        // Add test data
        const testData = [
            {
                description: 'valid registration',
                name: 'Dev Sharma',
                username: 'dev@test.com',
                password: 'Strong@123',
                confirmPassword: 'Strong@123',
                shouldPass: true,
                expectedError: 'Email already exists'
            },
            {
                description: 'password mismatch',
                name: 'Alice',
                username: 'alice@test.com',
                password: 'Strong@123',
                confirmPassword: 'Different@456',
                shouldPass: false,
                expectedError: 'Passwords do not match'
            },
            {
                description: 'weak password',
                name: 'Bob',
                username: 'bob@test.com',
                password: '123',
                confirmPassword: '123',
                shouldPass: false,
                expectedError: 'Password must be at least 8 characters'
            },
            {
                description: 'duplicate email',
                name: 'Existing User',
                username: 'existing@test.com',
                password: 'Strong@123',
                confirmPassword: 'Strong@123',
                shouldPass: false,
                expectedError: 'Email already exists'
            },
            {
                description: 'invalid email format',
                name: 'Charlie',
                username: 'not-an-email',
                password: 'Strong@123',
                confirmPassword: 'Strong@123',
                shouldPass: false,
                expectedError: 'Please enter a valid email'
            }
        ];

        // Add rows
        testData.forEach(data => {
            worksheet.addRow(data);
        });

        // Save the file
        const outputPath = path.join(__dirname, 'registration-data.xlsx');
        await workbook.xlsx.writeFile(outputPath);

        console.log(`✓ Excel file generated successfully at: ${outputPath}`);
        console.log(`✓ Total test cases: ${testData.length}`);
    } catch (error) {
        console.error('Error generating Excel file:', error);
        process.exit(1);
    }
}

// Run the function
generateExcelData();
