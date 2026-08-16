import mysql from 'mysql2/promise';

export interface TestData {
    [key: string]: string | boolean | number | null;
}

export interface DBConfig {
    host: string;
    user: string;
    password: string;
    database: string;
    port?: number;
    waitForConnections?: boolean;
    connectionLimit?: number;
    queueLimit?: number;
}

/**
 * Default database configuration
 */
const defaultConfig: DBConfig = {
    host: 'localhost',
    user: 'root',
    password: 'your_password_here',
    database: 'playwright_test_db',
    port: 3306
};

/**
 * Create a connection pool to the database
 * @param config - Database configuration
 * @returns MySQL connection pool
 */
export async function createConnectionPool(config: DBConfig = defaultConfig) {
    try {
        const pool = mysql.createPool({
            host: config.host,
            user: config.user,
            password: config.password,
            database: config.database,
            port: config.port || 3306,
            waitForConnections: config.waitForConnections !== false,
            connectionLimit: config.connectionLimit || 10,
            queueLimit: config.queueLimit || 0
        });

        return pool;
    } catch (error) {
        console.error('Error creating connection pool:', error);
        throw error;
    }
}

/**
 * Read test data from MySQL database
 * @param config - Database configuration
 * @param query - SQL query to execute
 * @returns Array of test data objects
 */
export async function readFromDatabase(config: DBConfig = defaultConfig, query: string): Promise<TestData[]> {
    let connection;
    try {
        connection = await mysql.createConnection(config);
        const [rows] = await connection.execute(query);
        
        // Convert RowDataPacket to plain object
        const data = (rows as any[]).map(row => {
            const obj: TestData = {};
            for (const [key, value] of Object.entries(row)) {
                obj[key] = value;
            }
            return obj;
        });

        return data;
    } catch (error) {
        console.error('Error reading from database:', error);
        throw error;
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}

/**
 * Read all data from a table
 * @param config - Database configuration
 * @param tableName - Name of the table
 * @returns Array of test data objects
 */
export async function readTable(config: DBConfig = defaultConfig, tableName: string): Promise<TestData[]> {
    return readFromDatabase(config, `SELECT * FROM ${tableName}`);
}

/**
 * Initialize database with test data
 * @param config - Database configuration
 */
export async function initializeDatabase(config: DBConfig = defaultConfig): Promise<void> {
    let connection;
    try {
        connection = await mysql.createConnection({
            host: config.host,
            user: config.user,
            password: config.password,
            port: config.port || 3306
        });

        // Create database if not exists
        await connection.execute(`CREATE DATABASE IF NOT EXISTS ${config.database}`);
        
        // Switch to the database
        await connection.changeUser({ database: config.database });

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
        
        console.log('✓ Database initialized successfully');
    } catch (error) {
        console.error('✗ Error initializing database:', error);
        throw error;
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}

/**
 * Create a custom table and insert data
 * @param config - Database configuration
 * @param tableName - Name of the table to create
 * @param createTableSQL - SQL to create the table
 * @param insertDataSQL - SQL to insert data
 */
export async function createTableWithData(
    config: DBConfig = defaultConfig,
    tableName: string,
    createTableSQL: string,
    insertDataSQL: string
): Promise<void> {
    let connection;
    try {
        connection = await mysql.createConnection({
            host: config.host,
            user: config.user,
            password: config.password,
            port: config.port || 3306
        });

        // Create database if not exists
        await connection.execute(`CREATE DATABASE IF NOT EXISTS ${config.database}`);
        
        // Switch to the database
        await connection.changeUser({ database: config.database });

        // Create table
        await connection.execute(createTableSQL);

        // Clear existing data
        await connection.execute(`DELETE FROM ${tableName}`);

        // Insert test data
        await connection.execute(insertDataSQL);
        
        console.log(`✓ Table '${tableName}' created and populated successfully`);
    } catch (error) {
        console.error(`✗ Error creating table '${tableName}':`, error);
        throw error;
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}

/**
 * Execute a custom query
 * @param config - Database configuration
 * @param query - SQL query to execute
 * @returns Query result
 */
export async function executeQuery(config: DBConfig = defaultConfig, query: string): Promise<any> {
    let connection;
    try {
        connection = await mysql.createConnection(config);
        const [result] = await connection.execute(query);
        return result;
    } catch (error) {
        console.error('Error executing query:', error);
        throw error;
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}

/**
 * Test database connection
 * @param config - Database configuration
 * @returns true if connection successful, false otherwise
 */
export async function testConnection(config: DBConfig = defaultConfig): Promise<boolean> {
    let connection;
    try {
        connection = await mysql.createConnection(config);
        await connection.ping();
        console.log('✓ Database connection successful');
        return true;
    } catch (error) {
        console.error('✗ Database connection failed:', error);
        return false;
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}
