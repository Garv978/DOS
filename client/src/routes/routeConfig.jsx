import { AuthContext } from "../context/AuthContext";
import Dashboard from "../views/dashboard/UserDashboard";
import HospitalDashboard from "../views/dashboard/HospitalDashboard";
import HospitalLogin from "../views/auth/HospitalLogin";
import HospitalSignup from "../views/auth/HospitalSignup";
import LandingPage from "../views/LandingPage";
import LoginPage from "../views/auth/UserLogin";
import { Navigate } from "react-router-dom";
import NotFound from "../views/NotFound";
import ProtectedRoute from "../Components/ProtectedRoute";
import SignupPage from "../views/auth/UserSignup";
import UserDashboard from "../views/dashboard/UserDashboard";
import { useContext } from "react";

const routes = [
  { path: "/", element: <LandingPage /> },

  { path: "/user/register", element: <SignupPage /> },
  { path: "/user/login", element: <LoginPage /> },

  { path: "/hospital/register", element: <HospitalSignup /> },
  { path: "/hospital/login", element: <HospitalLogin /> },

  {
    path: "/user/dashboard",
    element: (
      <ProtectedRoute role="user">
        <UserDashboard />
      </ProtectedRoute>
    ),
  },

  {
    path: "/hospital/dashboard",
    element: (
      <ProtectedRoute role="hospital">
        <HospitalDashboard />
      </ProtectedRoute>
    ),
  },

  { path: "*", element: <NotFound /> },
];

export default routes;
