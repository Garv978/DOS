import { AuthContext } from "../context/AuthContext";
import Dashboard from "../views/Dashboard";
import HospitalLogin from "../views/auth/HospitalLogin";
import HospitalSignup from "../views/auth/HospitalSignup";
import LandingPage from "../views/LandingPage";
import LoginPage from "../views/auth/UserLogin";
import { Navigate } from "react-router-dom";
import NotFound from "../views/NotFound";
import SignupPage from "../views/auth/UserSignup";
import { useContext } from "react";

// 🔐 Protected Route Wrapper
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;

  return user ? children : <Navigate to="/user/login" />;
};

const routes = [
  { path: "/", element: <LandingPage /> },

  { path: "/user/register", element: <SignupPage /> },
  { path: "/user/login", element: <LoginPage /> },

  { path: "/hospital/register", element: <HospitalSignup /> },
  { path: "/hospital/login", element: <HospitalLogin /> },

  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },

  { path: "*", element: <NotFound /> },
];

export default routes;