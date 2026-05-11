import React, { useRef, useState } from 'react';
import { Upload, X, CheckCircle, AlertCircle, Trash2, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { useCSVDepartments } from '../hooks/useCSVDepartments';
import type { CSVDepartmentRow } from '../hooks/useCSVDepartments';

/* ─── helpers ────────────────────────────────────────────── */

/** Pretty-print a column key for display. */
function formatLabel(key: string): string {
    return key
        .replace(/_/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase());
}

/** Return display columns (everything except the department identifier). */
function dataColumns(headers: string[]): string[] {
    return headers.filter(h => h !== 'department');
}

/* ─── sub-components ─────────────────────────────────────── */

interface DeptCardProps {
    row: CSVDepartmentRow;
    columns: string[];
}

const DeptCard: React.FC<DeptCardProps> = ({ row, columns }) => {
    const [expanded, setExpanded] = useState(true);

    return (
        <div
            className="rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
        >
            {/* Card header */}
            <div
                className="flex items-center justify-between px-6 py-4 cursor-pointer select-none"
                style={{ background: 'linear-gradient(135deg, #F85E00 0%, #FFB563 100%)' }}
                onClick={() => setExpanded(v => !v)}
            >
                <h3 className="font-serif text-lg font-bold text-white tracking-wide">
                    {row.department}
                </h3>
                <button
                    aria-label={expanded ? 'Collapse' : 'Expand'}
                    className="text-white/80 hover:text-white transition-colors"
                >
                    {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
            </div>

            {/* Card body */}
            {expanded && (
                <div className="px-6 py-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    {columns.map(col => (
                        <div key={col}>
                            <p
                                className="text-[11px] font-bold tracking-[0.15em] uppercase mb-1"
                                style={{ color: '#F85E00' }}
                            >
                                {formatLabel(col)}
                            </p>
                            <p className="text-neutral-700 text-sm leading-relaxed">
                                {row[col] || <span className="text-neutral-400 italic">—</span>}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

/* ─── main component ─────────────────────────────────────── */

const CSVDepartmentUpload: React.FC = () => {
    const { csvState, error, handleFile, clearData } = useCSVDepartments();
    const inputRef = useRef<HTMLInputElement>(null);
    const [dragging, setDragging] = useState(false);

    const openPicker = () => inputRef.current?.click();

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) handleFile(file);
        // reset so same file can be re-uploaded
        e.target.value = '';
    };

    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragging(false);
        const file = e.dataTransfer.files?.[0];
        if (file) handleFile(file);
    };

    const columns = csvState ? dataColumns(csvState.headers) : [];

    return (
        <section className="section-y-lg bg-warm-50 relative overflow-hidden">
            {/* Single shared hidden file input — always mounted */}
            <input
                ref={inputRef}
                type="file"
                accept=".csv"
                className="sr-only"
                onChange={onFileChange}
            />

            <div className="section-container relative z-10">

                {/* ── Section heading ─────────────────────────── */}
                <div className="text-center mb-12">
                    <p className="label-caps text-primary tracking-[0.25em] mb-5 uppercase text-xs font-bold">
                        Department Data
                    </p>
                    <h2 className="heading-lg text-neutral-dark">
                        Upload Department CSV
                    </h2>
                    <p className="mt-4 text-neutral-500 text-sm max-w-xl mx-auto leading-relaxed">
                        Upload a CSV file to display department-specific data such as students, achievements,
                        placements, and more. The data is saved in your browser and persists across page reloads.
                    </p>
                </div>

                {/* ── Upload zone ──────────────────────────────── */}
                {!csvState && (
                    <div
                        className={`relative max-w-xl mx-auto rounded-2xl border-2 border-dashed transition-colors duration-300 cursor-pointer ${
                            dragging
                                ? 'border-primary bg-primary/5'
                                : 'border-neutral-300 bg-white hover:border-primary hover:bg-primary/5'
                        }`}
                        onClick={openPicker}
                        onDragOver={e => { e.preventDefault(); setDragging(true); }}
                        onDragLeave={() => setDragging(false)}
                        onDrop={onDrop}
                        role="button"
                        tabIndex={0}
                        aria-label="Click or drag a CSV file to upload"
                        onKeyDown={e => e.key === 'Enter' && openPicker()}
                    >
                        <div className="flex flex-col items-center justify-center py-12 px-6 text-center gap-4">
                            <div
                                className="w-16 h-16 rounded-full flex items-center justify-center"
                                style={{ background: 'rgba(248,94,0,0.1)' }}
                            >
                                <Upload className="w-8 h-8" style={{ color: '#F85E00' }} />
                            </div>
                            <div>
                                <p className="text-neutral-dark font-semibold text-base mb-1">
                                    {dragging ? 'Drop your CSV here' : 'Click to browse or drag & drop'}
                                </p>
                                <p className="text-neutral-400 text-sm">
                                    Accepts <span className="font-medium text-neutral-500">.csv</span> files only
                                </p>
                            </div>
                            <button
                                type="button"
                                className="mt-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-colors duration-200"
                                style={{ background: '#F85E00' }}
                                onClick={e => { e.stopPropagation(); openPicker(); }}
                            >
                                Choose File
                            </button>
                        </div>
                    </div>
                )}

                {/* ── Error banner ──────────────────────────────── */}
                {error && (
                    <div
                        role="alert"
                        className="max-w-xl mx-auto mt-6 flex items-start gap-3 rounded-xl px-5 py-4 border"
                        style={{ background: '#FEF2F2', borderColor: '#FCA5A5' }}
                    >
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#DC2626' }} />
                        <div className="flex-1">
                            <p className="text-sm font-semibold text-red-700">Upload Error</p>
                            <p className="text-sm text-red-600 mt-0.5">{error}</p>
                        </div>
                        <button
                            onClick={clearData}
                            aria-label="Dismiss error"
                            className="text-red-400 hover:text-red-600 transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                )}

                {/* ── Uploaded data ─────────────────────────────── */}
                {csvState && (
                    <div className="mt-4">

                        {/* Success banner */}
                        <div
                            className="flex flex-wrap items-center justify-between gap-4 rounded-xl px-5 py-3 mb-8 border max-w-2xl mx-auto"
                            style={{ background: '#F0FDF4', borderColor: '#86EFAC' }}
                        >
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 shrink-0" style={{ color: '#16A34A' }} />
                                <div>
                                    <p className="text-sm font-semibold text-green-700">
                                        <FileText className="inline w-4 h-4 mr-1" />
                                        {csvState.fileName}
                                    </p>
                                    <p className="text-xs text-green-600">
                                        {csvState.rows.length} department{csvState.rows.length !== 1 ? 's' : ''} loaded
                                        &nbsp;·&nbsp;
                                        Uploaded {new Date(csvState.uploadedAt).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    onClick={openPicker}
                                    className="flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-full border transition-colors duration-200"
                                    style={{ borderColor: '#F85E00', color: '#F85E00' }}
                                >
                                    <Upload className="w-3.5 h-3.5" /> Replace
                                </button>
                                <button
                                    type="button"
                                    onClick={clearData}
                                    className="flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-full border border-red-300 text-red-500 hover:bg-red-50 transition-colors duration-200"
                                >
                                    <Trash2 className="w-3.5 h-3.5" /> Remove
                                </button>
                            </div>
                        </div>

                        {/* Department cards */}
                        {columns.length === 0 ? (
                            <p className="text-center text-neutral-400 text-sm py-8">
                                No additional columns found. Add columns like <code>students</code>,&nbsp;
                                <code>achievements</code>, or <code>placements</code> to your CSV.
                            </p>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {csvState.rows.map((row) => (
                                    <DeptCard key={row.department} row={row} columns={columns} />
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* ── CSV format hint (always shown if no data) ── */}
                {!csvState && (
                    <div className="max-w-xl mx-auto mt-8 rounded-xl px-6 py-5 border border-neutral-200 bg-white">
                        <p className="text-xs font-bold tracking-[0.15em] uppercase text-neutral-400 mb-3">
                            Expected CSV Format
                        </p>
                        <pre className="text-xs text-neutral-600 bg-neutral-50 rounded-lg px-4 py-3 overflow-x-auto leading-relaxed">
{`department,students,achievements,placements
CSE,750+,15 national awards,96%
ECE,600+,10 awards,88%
MEC,400+,5 awards,80%`}
                        </pre>
                        <p className="text-xs text-neutral-400 mt-3 leading-relaxed">
                            The <strong>department</strong> column is required (or <strong>name</strong> as a
                            fallback). All other columns are optional and will be rendered automatically.
                        </p>
                    </div>
                )}

            </div>
        </section>
    );
};

export default CSVDepartmentUpload;
