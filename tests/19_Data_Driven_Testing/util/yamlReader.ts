import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

export interface TestDataRow {
    [key: string]: any;
}

export function loadYAMLTestData(filePath: string): TestDataRow[] {
    const fullPath = path.resolve(filePath);
    const content = fs.readFileSync(fullPath, 'utf-8');
    const parsed = yaml.load(content) as { registrationData: TestDataRow[] };
    return parsed.registrationData;
}