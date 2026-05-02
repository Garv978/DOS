import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { AuthContext } from "../../context/AuthContext";
import AuthFormCard from "../../components/auth/AuthFormCard";
import Box from "../../components/auth/Box";
import PasswordField from "../../components/common/PasswordField";
import SignupButton from "../../components/auth/SignUpButton";

function HospitalLogin() {
  const navigate = useNavigate();
  const { login, loading, error } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData, "hospital");
      navigate("/dashboard"); // or "/hospital/dashboard" if you create separate
    } catch {}
  };

  return (
    <AuthFormCard title="Hospital Login" onSubmit={handleSubmit}>
      <Box type="email" name="email" placeholder="Hospital Email" value={formData.email} onChange={handleChange} />

      <PasswordField name="password" placeholder="Password" value={formData.password} onChange={handleChange} />

      <SignupButton text={loading ? "Logging in..." : "Access Portal"} disabled={loading} />

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <p className="text-sm text-center mt-4">
        New hospital?{" "}
        <Link to="/hospital/register" className="text-blue-500">
          Register here
        </Link>
      </p>
    </AuthFormCard>
  );
}

export default HospitalLogin;