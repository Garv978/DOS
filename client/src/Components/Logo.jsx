function Logo() {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-linear-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
        <span className="text-white font-bold text-lg">H</span>
      </div>
      <h1 className="text-red-500 text-3xl font-bold font-ubuntu tracking-tight">
        HealthAlert
      </h1>
    </div>
  );
}

export default Logo;
