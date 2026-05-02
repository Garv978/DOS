import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2">Page not found</p>
      <Link to="/" className="mt-4 text-blue-500">
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;