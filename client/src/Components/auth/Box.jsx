function Box({ heading, placeholder, id, name, type = "text", icon, value, onChange }) {
  const inputId = id || name;

  return (
    <div>
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {heading}
      </label>

      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className={`fas ${icon} text-red-500`}></i>
          </div>
        )}

        <input
          id={inputId}
          name={name}
          type={type}
          required
          value={value}
          onChange={onChange}
          className={`w-full py-3 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-red-500 focus:border-red-500 ${
            icon ? "pl-10" : "pl-3"
          }`}
          placeholder={placeholder || heading}
        />
      </div>
    </div>
  );
}

export default Box;
