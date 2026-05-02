function Smallcard({ value, description }) {
  return (
    <div className="text-center p-8 rounded-xl border-2 border-red-100 hover:border-red-200 transition-all duration-300 card-hover bg-gradient-to-br from-white to-red-50">
      <div className="text-5xl font-bold gradient-text mb-4 pulse-animation">
        {value}
      </div>
      <p className="text-gray-700 font-medium text-lg">
        {description}
      </p>
    </div>
  );
}

export default Smallcard;
