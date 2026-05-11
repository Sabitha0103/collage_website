import { useState } from 'react';

const STORAGE_KEY = 'csv_department_data';

export interface CSVDepartmentRow {
    department: string;
    [key: string]: string;
}

export interface CSVState {
    headers: string[];
    rows: CSVDepartmentRow[];
    fileName: string;
    uploadedAt: string;
}

interface UseCSVDepartmentsReturn {
    csvState: CSVState | null;
    error: string | null;
    handleFile: (file: File) => void;
    clearData: () => void;
}

/**
 * Parse a CSV string into headers and rows.
 * Handles quoted fields with embedded commas/newlines.
 */
function parseCSVLine(line: string): string[] {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (ch === '"') {
            if (inQuotes && line[i + 1] === '"') {
                current += '"';
                i++;
            } else {
                inQuotes = !inQuotes;
            }
        } else if (ch === ',' && !inQuotes) {
            result.push(current.trim());
            current = '';
        } else {
            current += ch;
        }
    }
    result.push(current.trim());
    return result;
}

function parseCSV(text: string): { headers: string[]; rows: Record<string, string>[] } {
    const lines = text.split(/\r?\n/).filter(l => l.trim());
    if (lines.length < 2) {
        throw new Error('CSV must have a header row and at least one data row.');
    }

    const headers = parseCSVLine(lines[0]).map(h => h.toLowerCase().replace(/\s+/g, '_'));
    const rows = lines.slice(1).map(line => {
        const values = parseCSVLine(line);
        return Object.fromEntries(headers.map((h, i) => [h, values[i] ?? '']));
    });

    return { headers, rows };
}

function loadFromStorage(): CSVState | null {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? (JSON.parse(stored) as CSVState) : null;
    } catch {
        return null;
    }
}

export function useCSVDepartments(): UseCSVDepartmentsReturn {
    const [csvState, setCSVState] = useState<CSVState | null>(loadFromStorage);
    const [error, setError] = useState<string | null>(null);

    const handleFile = (file: File) => {
        setError(null);

        if (!file.name.toLowerCase().endsWith('.csv')) {
            setError('Invalid file type. Please upload a .csv file.');
            return;
        }

        const reader = new FileReader();

        reader.onload = (e) => {
            const text = e.target?.result as string;
            if (!text || !text.trim()) {
                setError('The uploaded file is empty.');
                return;
            }

            try {
                const { headers, rows } = parseCSV(text);

                // Determine which column identifies the department
                const deptColumn = headers.includes('department')
                    ? 'department'
                    : headers.includes('name')
                    ? 'name'
                    : null;

                if (!deptColumn) {
                    setError(
                        'CSV must contain a "department" column (or "name" as a fallback) to identify each department.'
                    );
                    return;
                }

                // Normalise: ensure every row exposes key "department"
                const normalizedHeaders = headers.map(h => (h === 'name' ? 'department' : h));

                const normalizedRows: CSVDepartmentRow[] = rows
                    .map(row => {
                        const dept = row[deptColumn] ?? '';
                        const rest: Record<string, string> = {};
                        for (const k of Object.keys(row)) {
                            if (k !== deptColumn) rest[k] = row[k];
                        }
                        return { department: dept, ...rest };
                    })
                    .filter(row => row.department.trim() !== '');

                if (normalizedRows.length === 0) {
                    setError('No valid department rows found in the CSV. Ensure the "department" column has values.');
                    return;
                }

                const state: CSVState = {
                    headers: normalizedHeaders,
                    rows: normalizedRows,
                    fileName: file.name,
                    uploadedAt: new Date().toISOString(),
                };

                localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
                setCSVState(state);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to parse the CSV file.');
            }
        };

        reader.onerror = () => setError('Could not read the file. Please try again.');
        reader.readAsText(file);
    };

    const clearData = () => {
        localStorage.removeItem(STORAGE_KEY);
        setCSVState(null);
        setError(null);
    };

    return { csvState, error, handleFile, clearData };
}
