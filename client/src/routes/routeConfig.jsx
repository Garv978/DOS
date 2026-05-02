import Dashboard from "../views/Dashboard";
import HospitalLogin from "../views/auth/HospitalLogin";
import HospitalSignup from "../views/auth/HospitalSignup";
import LandingPage from "../views/LandingPage";
import LoginPage from "../views/auth/UserLogin";
import NotFound from "../views/NotFound";
import SignupPage from "../views/auth/UserSignup";

const routes = [
  { path: "/", element: <LandingPage /> },

  { path: "/user/register", element: <SignupPage /> },
  { path: "/user/login", element: <LoginPage /> },

  { path: "/hospital/register", element: <HospitalSignup /> },
  { path: "/hospital/login", element: <HospitalLogin /> },

  { path: "/dashboard", element: <Dashboard /> },

  // 404 catch-all
  { path: "*", element: <NotFound /> },
];

export default routes;
