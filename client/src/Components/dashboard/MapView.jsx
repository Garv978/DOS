// src/components/dashboard/MapView.jsx

function MapView() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-red-600 mb-4">
        Outbreak Map
      </h1>

      <div className="w-full h-125 bg-gray-100 border border-red-200 rounded flex items-center justify-center">
        <p className="text-gray-500">
          Map visualization will appear here 🌍
        </p>
      </div>
    </div>
  );
}

export default MapView;