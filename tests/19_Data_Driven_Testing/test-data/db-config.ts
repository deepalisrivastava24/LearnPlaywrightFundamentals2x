// MySQL Database Configuration
// Note: Install mysql2 package with: npm install mysql2

export const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'your_password_here', // Update with your MySQL password
    database: 'playwright_test_db',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

export const createTableSQL = `
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

export const insertDataSQL = `
    INSERT INTO registration_test_data (description, name, username, password, confirmPassword, shouldPass, expectedError) 
    VALUES 
        ('valid registration', 'Dev Sharma', 'dev@test.com', 'Strong@123', 'Strong@123', true, 'Email already exists'),
        ('password mismatch', 'Alice', 'alice@test.com', 'Strong@123', 'Different@456', false, 'Passwords do not match'),
        ('weak password', 'Bob', 'bob@test.com', '123', '123', false, 'Password must be at least 8 characters'),
        ('duplicate email', 'Existing User', 'existing@test.com', 'Strong@123', 'Strong@123', false, 'Email already exists'),
        ('invalid email format', 'Charlie', 'not-an-email', 'Strong@123', 'Strong@123', false, 'Please enter a valid email');
`;
