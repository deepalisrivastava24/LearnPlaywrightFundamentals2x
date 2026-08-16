import mysql from 'mysql2/promise';
import YAML from 'yaml';
import fs from 'fs';
import path from 'path';
import ExcelJS from 'exceljs';
import { dbConfig } from './db-config';

// Load data from YAML file
export async function loadYamlData(filePath: string) {
    const file = fs.readFileSync(filePath, 'utf8');
    const yamlData = YAML.parse(file);
    return yamlData.registrationData || yamlData;
}

// Load data from MySQL database
export async function loadMySQLData() {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.execute('SELECT * FROM registration_test_data');
        await connection.end();
        return rows;
    } catch (error) {
        console.error('Error connecting to MySQL:', error);
        throw error;
    }
}

// Initialize MySQL database (create table and insert data)
export async function initializeMySQLDatabase() {
    try {
        const connection = await mysql.createConnection({
            host: dbConfig.host,
            user: dbConfig.user,
            password: dbConfig.password,
            port: dbConfig.port
        });

        // Create database if not exists
        await connection.execute(`CREATE DATABASE IF NOT EXISTS ${dbConfig.database}`);
        
        // Switch to the database
        await connection.changeUser({ database: dbConfig.database });

        // Create table
        const createTableSQL = `
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
        `;

        await connection.execute(createTableSQL);

        // Clear existing data
        await connection.execute('DELETE FROM registration_test_data');

        // Insert test data
        const insertDataSQL = `
            INSERT INTO registration_test_data (description, name, username, password, confirmPassword, shouldPass, expectedError) 
            VALUES 
                ('valid registration', 'Dev Sharma', 'dev@test.com', 'Strong@123', 'Strong@123', true, 'Email already exists'),
                ('password mismatch', 'Alice', 'alice@test.com', 'Strong@123', 'Different@456', false, 'Passwords do not match'),
                ('weak password', 'Bob', 'bob@test.com', '123', '123', false, 'Password must be at least 8 characters'),
                ('duplicate email', 'Existing User', 'existing@test.com', 'Strong@123', 'Strong@123', false, 'Email already exists'),
                ('invalid email format', 'Charlie', 'not-an-email', 'Strong@123', 'Strong@123', false, 'Please enter a valid email');
        `;

        await connection.execute(insertDataSQL);
        
        console.log('MySQL database initialized successfully');
        await connection.end();
    } catch (error) {
        console.error('Error initializing MySQL database:', error);
        throw error;
    }
}

// Load data from XLSX file
export async function loadExcelData(filePath: string) {
    try {
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(filePath);
        
        const worksheet = workbook.getWorksheet(1);
        if (!worksheet) {
            throw new Error('No worksheet found in Excel file');
        }

        const data: any[] = [];
        const headerRow = worksheet.getRow(1);
        const headers: string[] = [];

        // Get headers from first row
        headerRow.eachCell((cell, colNumber) => {
            headers[colNumber] = cell.value as string;
        });

        // Get data rows
        worksheet.eachRow((row, rowNumber) => {
            if (rowNumber > 1) {
                const rowData: any = {};
                row.eachCell((cell, colNumber) => {
                    const header = headers[colNumber];
                    let value = cell.value;
                    
                    // Convert string 'true'/'false' to boolean for shouldPass
                    if (header === 'shouldPass' && typeof value === 'string') {
                        value = value.toLowerCase() === 'true';
                    }
                    
                    rowData[header] = value;
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

export default {
    loadYamlData,
    loadMySQLData,
    loadExcelData,
    initializeMySQLDatabase
};
