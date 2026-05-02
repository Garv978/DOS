import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../context/AuthContext";
import AuthFormCard from "../../components/auth/AuthFormCard";
import Box from "../../components/auth/Box";
import PasswordField from "../../components/common/PasswordField";
import SignupButton from "../../components/auth/SignUpButton";

function UserLogin() {
  const navigate = useNavigate();
  const { login, loading, error, user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // 🚦 AUTO REDIRECT if already logged in
  useEffect(() => {
    if (user?.role) {
      navigate(`/${user.role}/dashboard`);
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(formData, "user");

      // 🚀 redirect after login
      navigate(`/${res.user.role}/dashboard`);
    } catch {}
  };

  return (
    <AuthFormCard title="User Login" onSubmit={handleSubmit}>
      <Box
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <PasswordField
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <SignupButton
        text={loading ? "Logging in..." : "Login"}
        disabled={loading}
      />

      {error && (
        <p className="text-red-500 text-sm text-center">{error}</p>
      )}

      <p className="text-sm text-center mt-4">
        New user?{" "}
        <Link to="/user/register" className="text-blue-500">
          Signup
        </Link>
      </p>
    </AuthFormCard>
  );
}

export default UserLogin;