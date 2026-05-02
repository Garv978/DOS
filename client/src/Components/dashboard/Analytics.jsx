// src/components/dashboard/Analytics.jsx

function Analytics() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-red-600 mb-4">
        Analytics Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="bg-white border border-red-200 p-4 rounded shadow">
          <h2 className="text-lg font-semibold text-gray-700">
            Total Reports
          </h2>
          <p className="text-3xl font-bold text-red-600 mt-2">1,245</p>
        </div>

        <div className="bg-white border border-red-200 p-4 rounded shadow">
          <h2 className="text-lg font-semibold text-gray-700">
            Active Cases
          </h2>
          <p className="text-3xl font-bold text-red-600 mt-2">342</p>
        </div>

        <div className="bg-white border border-red-200 p-4 rounded shadow">
          <h2 className="text-lg font-semibold text-gray-700">
            Regions Affected
          </h2>
          <p className="text-3xl font-bold text-red-600 mt-2">18</p>
        </div>

      </div>
    </div>
  );
}

export default Analytics;