import Papa from "papaparse";
import axios from "axios";
import { useState } from "react";

function CSVUpload() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    if (!selected.name.endsWith(".csv")) {
      alert("Only CSV files allowed");
      return;
    }

    setFile(selected);

    // Preview first few rows
    Papa.parse(selected, {
      header: true,
      preview: 5,
      skipEmptyLines: true,
      complete: (results) => {
        setPreview(results.data);
      },
    });
  };

  const handleUpload = async () => {
    if (!file) return alert("Select a file first");

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("/api/upload-csv", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Upload successful 🚀");
      setFile(null);
      setPreview([]);
    } catch (err) {
      console.error(err);
      alert("Upload failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-3xl">
      <h2 className="text-xl font-bold mb-4">Upload CSV Data</h2>

      <input type="file" accept=".csv" onChange={handleFileChange} />

      {file && (
        <p className="mt-2 text-sm text-gray-600">
          Selected: {file.name}
        </p>
      )}

      {/* Preview Table */}
      {preview.length > 0 && (
        <div className="mt-4 overflow-x-auto">
          <table className="table-auto border w-full text-sm">
            <thead>
              <tr>
                {Object.keys(preview[0]).map((key) => (
                  <th key={key} className="border px-2 py-1">
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {preview.map((row, i) => (
                <tr key={i}>
                  {Object.values(row).map((val, j) => (
                    <td key={j} className="border px-2 py-1">
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={loading}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}

export default CSVUpload;