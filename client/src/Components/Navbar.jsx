import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="bg-white sticky top-0 z-50 nav-shadow backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          <div className="hidden md:flex items-center space-x-1">
            <a
              href="/"
              className="px-6 py-3 text-gray-700 hover:text-red-500 font-medium rounded-lg hover:bg-red-50"
            >
              Home
            </a>

            {/* ✅ SAME DASHBOARD FOR ALL */}
            <a
              href="/dashboard"
              className="px-6 py-3 text-gray-700 hover:text-red-500 font-medium rounded-lg hover:bg-red-50"
            >
              Dashboard
            </a>

            <a
              href="/how-it-works"
              className="px-6 py-3 text-gray-700 hover:text-red-500 font-medium rounded-lg hover:bg-red-50"
            >
              How it Works
            </a>

            <a
              href="/about"
              className="px-6 py-3 text-gray-700 hover:text-red-500 font-medium rounded-lg hover:bg-red-50"
            >
              About
            </a>

            <a
              href="/user/login"
              className="bg-red-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-600 ml-4"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;