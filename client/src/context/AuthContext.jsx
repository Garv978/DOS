import { createContext, useState } from "react";
import {
  loginHospital,
  loginUser,
  registerHospital,
  registerUser,
} from "../services/authService";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || null;
    } catch {
      localStorage.removeItem("user");
      return null;
    }
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

const login = async (data, type = "user") => {
  setLoading(true);
  setError(null);

  try {
    const res =
      type === "hospital"
        ? await loginHospital(data)
        : await loginUser(data);

    const userWithRole = {
      ...res.user,
      role: res.user.role, // ✅ FIXED
    };

    localStorage.setItem("token", res.token);
    localStorage.setItem("user", JSON.stringify(userWithRole));

    setUser(userWithRole);
    return res;
  } catch (err) {
    setError(err.message || "Login failed");
    throw err;
  } finally {
    setLoading(false);
  }
};
// inside AuthProvider

const signup = async (data, type = "user") => {
  setLoading(true);
  setError(null);

  try {
    const res =
      type === "hospital"
        ? await registerHospital(data)
        : await registerUser(data);

    return res;
  } catch (err) {
    setError(err.message || "Signup failed");
    throw err;
  } finally {
    setLoading(false);
  }
};
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, signup, logout, loading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};