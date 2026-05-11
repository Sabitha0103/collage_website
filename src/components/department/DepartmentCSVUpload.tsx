import React, { useRef, useState } from 'react';
import { AlertCircle, CheckCircle, FileText, Trash2, Upload } from 'lucide-react';
import { useCSVDepartments } from '../../hooks/useCSVDepartments';
import type { CSVDepartmentRow } from '../../hooks/useCSVDepartments';
import type { DepartmentData } from '../../data/departments';

interface DepartmentCSVUploadProps {
    dept: DepartmentData;
    sectionLabel: 'Program' | 'Students';
}

function formatLabel(key: string): string {
    return key
        .replace(/_/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase());
}

function normalize(value: string): string {
    return value.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
}

function matchesDepartment(row: CSVDepartmentRow, dept: DepartmentData): boolean {
    const rowDepartment = normalize(row.department);
    if (!rowDepartment) return false;

    const candidates = [dept.code, dept.slug, dept.name, dept.fullName];
    return candidates.some(candidate => normalize(candidate) === rowDepartment);
}

const DepartmentCSVUpload: React.FC<DepartmentCSVUploadProps> = ({ dept, sectionLabel }) => {
    const { csvState, error, handleFile, clearData } = useCSVDepartments();
    const inputRef = useRef<HTMLInputElement>(null);
    const [dragging, setDragging] = useState(false);

    const openPicker = () => inputRef.current?.click();

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) handleFile(file);
        e.target.value = '';
    };

    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragging(false);
        const file = e.dataTransfer.files?.[0];
        if (file) handleFile(file);
    };

    const columns = csvState ? csvState.headers.filter(h => h !== 'department') : [];
    const filteredRows = csvState
        ? csvState.rows.filter(row => matchesDepartment(row, dept))
        : [];

    return (
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 lg:p-6">
            <input
                ref={inputRef}
                type="file"
                accept=".csv"
                className="sr-only"
                onChange={onFileChange}
            />

            <div className="mb-4">
                <p className="text-xs uppercase tracking-[0.16em] text-neutral-400 font-bold">
                    {sectionLabel}
                </p>
                <h3 className="font-serif text-2xl mt-2" style={{ color: '#0A0903' }}>
                    Upload Department CSV
                </h3>
                <p className="text-sm text-neutral-500 mt-2">
                    Upload a CSV with a required <code>department</code> column. Data is saved in your browser.
                </p>
            </div>

            {!csvState && (
                <div
                    className={`rounded-xl border-2 border-dashed px-5 py-8 text-center cursor-pointer transition-colors ${
                        dragging
                            ? 'border-primary bg-primary/5'
                            : 'border-neutral-300 hover:border-primary hover:bg-primary/5'
                    }`}
                    onClick={openPicker}
                    onDragOver={(e) => {
                        e.preventDefault();
                        setDragging(true);
                    }}
                    onDragLeave={() => setDragging(false)}
                    onDrop={onDrop}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => e.key === 'Enter' && openPicker()}
                    aria-label={`Upload CSV for ${sectionLabel}`}
                >
                    <Upload className="w-8 h-8 mx-auto mb-3" style={{ color: '#F85E00' }} />
                    <p className="text-sm font-semibold text-neutral-700">
                        {dragging ? 'Drop CSV file here' : 'Click or drag & drop a CSV file'}
                    </p>
                    <p className="text-xs text-neutral-400 mt-1">.csv files only</p>
                </div>
            )}

            {error && (
                <div
                    role="alert"
                    className="mt-4 flex items-start gap-3 rounded-xl px-4 py-3 border"
                    style={{ background: '#FEF2F2', borderColor: '#FCA5A5' }}
                >
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#DC2626' }} />
                    <p className="text-sm text-red-700">{error}</p>
                </div>
            )}

            {csvState && (
                <div className="mt-4 space-y-4">
                    <div
                        className="flex flex-wrap items-center justify-between gap-3 rounded-xl px-4 py-3 border"
                        style={{ background: '#F0FDF4', borderColor: '#86EFAC' }}
                    >
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" style={{ color: '#16A34A' }} />
                            <p className="text-sm text-green-700 font-semibold">
                                <FileText className="inline w-4 h-4 mr-1" />
                                {csvState.fileName}
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={openPicker}
                                className="text-xs font-semibold px-3 py-1.5 rounded-full border"
                                style={{ borderColor: '#F85E00', color: '#F85E00' }}
                            >
                                Replace
                            </button>
                            <button
                                type="button"
                                onClick={clearData}
                                className="text-xs font-semibold px-3 py-1.5 rounded-full border border-red-300 text-red-500"
                            >
                                <Trash2 className="inline w-3.5 h-3.5 mr-1" />
                                Remove
                            </button>
                        </div>
                    </div>

                    {filteredRows.length === 0 ? (
                        <div
                            role="alert"
                            className="rounded-xl px-4 py-3 border text-sm"
                            style={{ background: '#FFF7ED', borderColor: '#FDBA74', color: '#9A3412' }}
                        >
                            No rows found for this department. Add a row where <code>department</code> matches{' '}
                            <strong>{dept.code}</strong>, <strong>{dept.slug}</strong>, or the department name.
                        </div>
                    ) : columns.length === 0 ? (
                        <p className="text-sm text-neutral-500 italic">
                            No additional columns found for this department.
                        </p>
                    ) : (
                        filteredRows.map((row) => (
                            <div
                                key={`${row.department}-${columns.map(column => row[column] ?? '').join('|')}`}
                                className="rounded-xl border border-neutral-200 bg-warm-50 p-4"
                            >
                                <p className="text-xs font-bold uppercase tracking-[0.15em] mb-3" style={{ color: '#F85E00' }}>
                                    {row.department}
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {columns.map(column => (
                                        <div key={column}>
                                            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-neutral-400">
                                                {formatLabel(column)}
                                            </p>
                                            <p className="text-sm text-neutral-700">
                                                {row[column] || <span className="italic text-neutral-400">—</span>}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default DepartmentCSVUpload;
