// src/pages/Dashboard.jsx

import { useContext, useState } from "react";

import { AuthContext } from "../context/AuthContext";
import CSVUpload from "../components/dashboard/CSVUpload.jsx";

function Dashboard() {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("upload");

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex flex-col p-5">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>

        {/* Only CSV for now */}
        {user?.role === "hospital" && (
          <button
            onClick={() => setActiveTab("upload")}
            className="text-left p-2 rounded bg-gray-700"
          >
            📂 Upload CSV
          </button>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">
          CSV Upload
        </h1>

        {user?.role === "hospital" ? (
          <CSVUpload />
        ) : (
          <p className="text-red-500">
            Access denied. Only hospitals can upload data.
          </p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;