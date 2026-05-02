// src/pages/UserDashboard.jsx

import Analytics from "../../Components/dashboard/Analytics";
import MapView from "../../Components/dashboard/MapView";
import Navbar from "../../Components/Navbar";
import { useState } from "react";

function UserDashboard() {
  const [activeTab, setActiveTab] = useState("analytics");

  return (<>
      <Navbar />
<div className="flex min-h-screen bg-white">

      {/* Sidebar */}
      <div className="w-64 bg-red-600 text-white flex flex-col p-5">
        <h2 className="text-xl font-bold mb-6">User Dashboard</h2>

        <button
          onClick={() => setActiveTab("analytics")}
          className={`text-left p-3 rounded mb-2 transition ${
            activeTab === "analytics"
              ? "bg-white text-red-600 font-semibold"
              : "hover:bg-red-500"
          }`}
        >
          📊 Analytics
        </button>

        <button
          onClick={() => setActiveTab("map")}
          className={`text-left p-3 rounded transition ${
            activeTab === "map"
              ? "bg-white text-red-600 font-semibold"
              : "hover:bg-red-500"
          }`}
        >
          🗺️ Map
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">

        {activeTab === "analytics" && <Analytics />}
        {activeTab === "map" && <MapView />}

      </div>
    </div>
    </>
  );
}

export default UserDashboard;