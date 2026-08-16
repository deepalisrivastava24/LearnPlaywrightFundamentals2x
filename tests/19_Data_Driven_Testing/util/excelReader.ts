import ExcelJS from 'exceljs';
import * as path from 'path';

export interface TestData {
    [key: string]: string | boolean | number;
}

/**
 * Read test data from an Excel/XLSX file
 * @param filePath - Path to the Excel file
 * @returns Array of test data objects
 */
export async function readExcel(filePath: string): Promise<TestData[]> {
    try {
        let fullPath = path.resolve(filePath);
        
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(fullPath);
        
        const worksheet = workbook.getWorksheet(1);
        if (!worksheet) {
            throw new Error('No worksheet found in Excel file');
        }

        const data: TestData[] = [];
        const headers: string[] = [];

        // Get headers from first row
        const headerRow = worksheet.getRow(1);
        headerRow.eachCell((cell, colNumber) => {
            headers[colNumber] = (cell.value as string) || '';
        });

        // Get data rows
        worksheet.eachRow((row, rowNumber) => {
            if (rowNumber > 1) {
                const rowData: TestData = {};
                row.eachCell((cell, colNumber) => {
                    const header = headers[colNumber];
                    if (header) {
                        let value = cell.value;
                        
                        // Convert string 'true'/'false' to boolean
                        if (typeof value === 'string') {
                            if (value.toLowerCase() === 'true') {
                                value = true;
                            } else if (value.toLowerCase() === 'false') {
                                value = false;
                            }
                        }
                        
                        rowData[header] = value || '';
                    }
                });
                
                if (Object.keys(rowData).length > 0) {
                    data.push(rowData);
                }
            }
        });

        return data;
    } catch (error) {
        console.error('Error reading Excel file:', error);
        throw error;
    }
}

/**
 * Read specific sheet from Excel file
 * @param filePath - Path to the Excel file
 * @param sheetName - Name of the sheet to read
 * @returns Array of test data objects
 */
export async function readExcelSheet(filePath: string, sheetName: string): Promise<TestData[]> {
    try {
        let fullPath = path.resolve(filePath);
        
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(fullPath);
        
        const worksheet = workbook.getWorksheet(sheetName);
        if (!worksheet) {
            throw new Error(`Worksheet '${sheetName}' not found in Excel file`);
        }

        const data: TestData[] = [];
        const headers: string[] = [];

        // Get headers from first row
        const headerRow = worksheet.getRow(1);
        headerRow.eachCell((cell, colNumber) => {
            headers[colNumber] = (cell.value as string) || '';
        });

        // Get data rows
        worksheet.eachRow((row, rowNumber) => {
            if (rowNumber > 1) {
                const rowData: TestData = {};
                row.eachCell((cell, colNumber) => {
                    const header = headers[colNumber];
                    if (header) {
                        let value = cell.value;
                        
                        // Convert string 'true'/'false' to boolean
                        if (typeof value === 'string') {
                            if (value.toLowerCase() === 'true') {
                                value = true;
                            } else if (value.toLowerCase() === 'false') {
                                value = false;
                            }
                        }
                        
                        rowData[header] = value || '';
                    }
                });
                
                if (Object.keys(rowData).length > 0) {
                    data.push(rowData);
                }
            }
        });

        return data;
    } catch (error) {
        console.error('Error reading Excel sheet:', error);
        throw error;
    }
}

/**
 * Get all sheet names from Excel file
 * @param filePath - Path to the Excel file
 * @returns Array of sheet names
 */
export async function getExcelSheetNames(filePath: string): Promise<string[]> {
    try {
        let fullPath = path.resolve(filePath);
        
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(fullPath);
        
        return workbook.worksheets.map(ws => ws.name);
    } catch (error) {
        console.error('Error reading Excel sheet names:', error);
        throw error;
    }
}
