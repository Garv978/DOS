import Box from "../auth/Box";
import { useState } from "react";

function PasswordField({ placeholder, value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Box
        heading="Password"
        placeholder={placeholder}
        id="password"
        name="password"
        type={showPassword ? "text" : "password"}
        icon="fa-lock"
        value={value}
        onChange={onChange}
      />
      <button
        type="button"
        className="absolute inset-y-0 right-0 pr-3 flex items-center"
        onClick={() => setShowPassword(!showPassword)}
      >
        <i
          className={`fas ${
            showPassword ? "fa-eye-slash" : "fa-eye"
          } text-gray-400 hover:text-red-500`}
        ></i>
      </button>
    </div>
  );
}

export default PasswordField;
