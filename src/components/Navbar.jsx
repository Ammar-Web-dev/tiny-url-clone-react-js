import { Link } from "react-router";
import {
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link to="/home">
          <h1 className="text-3xl font-extrabold text-blue-700">
            TinyURL
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
          <Link to="/features" className="transition hover:text-blue-700">
            FEATURES
          </Link>

          <Link to="/pricing" className="transition hover:text-blue-700">
            PRICING
          </Link>

          <Link to="/faq" className="transition hover:text-blue-700">
            FAQ
          </Link>
        </nav>

        {/* Right Side */}
        {/* <div className="flex items-center gap-4">

          <SignedIn>
            <Link
              to="/dashboard"
              className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Dashboard
            </Link>

            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          <SignedOut>
            <Link
              to="/login"
              className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Login
            </Link>
          </SignedOut>

        </div> */}

      </div>
    </header>
  );
}

export default Navbar;