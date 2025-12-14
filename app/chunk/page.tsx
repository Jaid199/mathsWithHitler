"use client";

import React, { useState } from "react";
import { Download, Upload, FileSpreadsheet } from "lucide-react";

export default function TableChunker() {
  const [tables, setTables] = useState<
    {
      name: string;
      headers: string[];
      rows: Array<{ [key: string]: string | number }>;
    }[]
  >([]);
  const [outputFormat, setOutputFormat] = useState("json");
  const [chunkingMethod, setChunkingMethod] = useState("full-table");

  const parseCSV = (text: string) => {
    const lines = text.trim().split("\n");
    const headers = lines[0].split(",").map((h) => h.trim());
    const rows = lines.slice(1).map((line) => {
      const values = line.split(",").map((v) => v.trim());
      const row: { [key: string]: string | number } = {};
      headers.forEach((header, i) => {
        const num = parseFloat(values[i]);
        row[header] = isNaN(num) ? values[i] : num;
      });
      return row;
    });
    return { headers, rows };
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const parsedTables = [];

    for (const file of files) {
      const text = await file.text();
      const { headers, rows } = parseCSV(text);
      parsedTables.push({
        name: file.name.replace(".csv", ""),
        headers,
        rows,
      });
    }

    setTables(parsedTables);
  };

  const chunkByRows = (
    table: {
      name: string;
      headers: string[];
      rows: Array<{ [key: string]: string | number }>;
    },
    rowsPerChunk = 10
  ) => {
    const chunks = [];
    for (let i = 0; i < table.rows.length; i += rowsPerChunk) {
      chunks.push({
        chunk_id: chunks.length + 1,
        chunk_name: `${table.name} - Rows ${i + 1} to ${Math.min(
          i + rowsPerChunk,
          table.rows.length
        )}`,
        headers: table.headers,
        rows: table.rows.slice(i, i + rowsPerChunk),
      });
    }
    return chunks;
  };

  const generateChunks = () => {
    return tables.map((table, index) => {
      if (chunkingMethod === "full-table") {
        return {
          chunk_id: index + 1,
          chunk_name: table.name,
          table_name: table.name,
          headers: table.headers,
          rows: table.rows,
          row_count: table.rows.length,
          column_count: table.headers.length,
        };
      } else {
        return {
          table_name: table.name,
          chunks: chunkByRows(table, 10),
        };
      }
    });
  };

  const downloadChunks = () => {
    const chunks = generateChunks();
    const output = {
      generated_at: new Date().toISOString(),
      total_tables: tables.length,
      chunking_method: chunkingMethod,
      chunks: chunks,
    };

    const blob = new Blob([JSON.stringify(output, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `table_chunks_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const generateSampleCSV = () => {
    const samples = [
      `Metric,Category 1,Category 2,Category 3
Metric 1,10,20,30
Metric 2,15,25,35
Metric 3,12,22,32
Metric 4,18,28,38`,
      `Product,Q1 Sales,Q2 Sales,Q3 Sales,Q4 Sales
Product A,1000,1200,1100,1300
Product B,800,900,950,1000
Product C,1500,1600,1550,1700`,
      `Employee,Department,Salary,Years
John Doe,Engineering,75000,5
Jane Smith,Marketing,68000,3
Bob Johnson,Sales,72000,7`,
    ];

    samples.forEach((csv, i) => {
      const blob = new Blob([csv], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `sample_table_${i + 1}.csv`;
      a.click();
      URL.revokeObjectURL(url);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <FileSpreadsheet className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-800">
              Automatic Table Chunker
            </h1>
          </div>

          <p className="text-gray-600 mb-6">
            Upload multiple CSV files and automatically convert each table into
            structured JSON chunks. Perfect for processing hundreds of tables at
            once!
          </p>

          <div className="space-y-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-400 transition">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <label className="cursor-pointer">
                <span className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 inline-block">
                  Select CSV Files
                </span>
                <input
                  type="file"
                  accept=".csv"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
              <p className="text-sm text-gray-500 mt-3">
                Upload multiple CSV files at once
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Chunking Options</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="full-table"
                    checked={chunkingMethod === "full-table"}
                    onChange={(e) => setChunkingMethod(e.target.value)}
                    className="w-4 h-4"
                  />
                  <span>
                    One chunk per table (recommended for 100s of tables)
                  </span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="by-rows"
                    checked={chunkingMethod === "by-rows"}
                    onChange={(e) => setChunkingMethod(e.target.value)}
                    className="w-4 h-4"
                  />
                  <span>Split large tables into chunks of 10 rows each</span>
                </label>
              </div>
            </div>

            {tables.length > 0 && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-2">
                  ✓ {tables.length} table{tables.length > 1 ? "s" : ""} loaded
                </h3>
                <div className="space-y-1 text-sm text-green-700">
                  {tables.map((table, i) => (
                    <div key={i}>
                      • {table.name} ({table.rows.length} rows,{" "}
                      {table.headers.length} columns)
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={downloadChunks}
                disabled={tables.length === 0}
                className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download JSON Chunks
              </button>

              <button
                onClick={generateSampleCSV}
                className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 flex items-center gap-2"
              >
                Get Sample CSVs
              </button>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-800 mb-2">💡 How to use:</h3>
            <ol className="text-sm text-blue-700 space-y-1 list-decimal list-inside">
              <li>Prepare your tables as CSV files (one table per file)</li>
              <li>
                Click "Select CSV Files" and choose all your CSV files at once
              </li>
              <li>
                Choose chunking method (one chunk per table is faster for bulk
                processing)
              </li>
              <li>
                Click "Download JSON Chunks" to get your structured output
              </li>
              <li>Use the JSON file in your application or database</li>
            </ol>
          </div>

          {tables.length > 0 && (
            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold mb-3">Preview of first table:</h3>
              <pre className="bg-white p-4 rounded border overflow-x-auto text-xs">
                {JSON.stringify(generateChunks()[0], null, 2).slice(0, 500)}...
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
