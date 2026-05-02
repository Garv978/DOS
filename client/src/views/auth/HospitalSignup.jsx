import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { AuthContext } from "../../context/AuthContext";
import AuthFormCard from "../../components/auth/AuthFormCard";
import Box from "../../components/auth/Box";
import PasswordField from "../../components/common/PasswordField";
import SignupButton from "../../components/auth/SignUpButton";

function HospitalSignup() {
  const navigate = useNavigate();
  const { signup, loading, error } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(formData, "hospital");
      navigate("/hospital/login"); // ✅
    } catch {}
  };

  return (
    <AuthFormCard title="Hospital Signup" onSubmit={handleSubmit}>
      <Box type="text" name="name" placeholder="Hospital Name" value={formData.name} onChange={handleChange} />

      <Box type="email" name="email" placeholder="Hospital Email" value={formData.email} onChange={handleChange} />

      <PasswordField name="password" placeholder="Password" value={formData.password} onChange={handleChange} />

      <SignupButton text={loading ? "Signing up..." : "Register Hospital"} disabled={loading} />

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <p className="text-sm text-center mt-4">
        Already registered?{" "}
        <Link to="/hospital/login" className="text-blue-500">
          Login
        </Link>
      </p>
    </AuthFormCard>
  );
}

export default HospitalSignup;