import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../context/AuthContext";
import AuthFormCard from "../../components/auth/AuthFormCard";
import Box from "../../components/auth/Box";
import PasswordField from "../../components/common/PasswordField";
import SignupButton from "../../components/auth/SignUpButton";

function UserSignup() {
  const navigate = useNavigate();
  const { signup, loading, error, user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // 🚦 if already logged in → go dashboard
  useEffect(() => {
    if (user?.role) {
      navigate(`/${user.role}/dashboard`);
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signup(formData, "user");

      // 🚀 go directly to dashboard
      navigate(`/${res.user.role}/dashboard`);
    } catch {}
  };

  return (
    <AuthFormCard title="User Signup" onSubmit={handleSubmit}>
      <Box
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
      />

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
        text={loading ? "Signing up..." : "Create Account"}
        disabled={loading}
      />

      {error && (
        <p className="text-red-500 text-sm text-center">{error}</p>
      )}

      <p className="text-sm text-center mt-4">
        Already have an account?{" "}
        <Link to="/user/login" className="text-blue-500">
          Login
        </Link>
      </p>
    </AuthFormCard>
  );
}

export default UserSignup;