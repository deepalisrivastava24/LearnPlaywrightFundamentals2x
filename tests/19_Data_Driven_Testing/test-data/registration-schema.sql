-- Playwright Test Database Schema
-- Use this file if you want to manually setup MySQL database

-- Create database
CREATE DATABASE IF NOT EXISTS playwright_test_db;

-- Use the database
USE playwright_test_db;

-- Create registration test data table
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

-- Insert test data
INSERT INTO registration_test_data (description, name, username, password, confirmPassword, shouldPass, expectedError) 
VALUES 
    ('valid registration', 'Dev Sharma', 'dev@test.com', 'Strong@123', 'Strong@123', true, 'Email already exists'),
    ('password mismatch', 'Alice', 'alice@test.com', 'Strong@123', 'Different@456', false, 'Passwords do not match'),
    ('weak password', 'Bob', 'bob@test.com', '123', '123', false, 'Password must be at least 8 characters'),
    ('duplicate email', 'Existing User', 'existing@test.com', 'Strong@123', 'Strong@123', false, 'Email already exists'),
    ('invalid email format', 'Charlie', 'not-an-email', 'Strong@123', 'Strong@123', false, 'Please enter a valid email');

-- Verify data was inserted
SELECT * FROM registration_test_data;

-- Optional: Create index on username for faster lookups
CREATE INDEX idx_username ON registration_test_data(username);
