import { createContext, useEffect, useState } from "react";
import {
  getMe,
  loginHospital,
  loginUser,
  logoutUser,
  registerHospital,
  registerUser,
} from "../services/authService";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔍 Check auth on app load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await getMe();
        setUser(res.user);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // 🔐 LOGIN
  const login = async (data, type = "user") => {
    setLoading(true);
    setError(null);

    try {
      const res =
        type === "hospital"
          ? await loginHospital(data)
          : await loginUser(data);

      setUser(res.user); // ✅ no localStorage
      return res;
    } catch (err) {
      setError(err.message || "Login failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // 📝 SIGNUP
  const signup = async (data, type = "user") => {
    setLoading(true);
    setError(null);

    try {
      const res =
        type === "hospital"
          ? await registerHospital(data)
          : await registerUser(data);

      setUser(res.user); // auto-login after register
      return res;
    } catch (err) {
      setError(err.message || "Signup failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // 🚪 LOGOUT
  const logout = async () => {
    await logoutUser();
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