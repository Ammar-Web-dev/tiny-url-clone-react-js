import { Link } from "react-router";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <Link to="/home" className="text-3xl font-extrabold text-blue-400">
              TinyURL
            </Link>

            <p className="mt-4 leading-7 text-slate-400">
              Simplify your links, track every click and manage everything from
              one modern dashboard.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Product</h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <Link to="/features" className="hover:text-white transition">
                  Features
                </Link>
              </li>

              <li>
                <Link to="/analytics" className="hover:text-white transition">
                  Analytics
                </Link>
              </li>

              <li>
                <Link to="/pricing" className="hover:text-white transition">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>

              <li>
                <Link to="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Support</h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <Link to="/help-center" className="hover:text-white transition">
                  Help Center
                </Link>
              </li>

              <li>
                <Link to="/privacy" className="hover:text-white transition">
                  Privacy
                </Link>
              </li>

              <li>
                <Link to="/terms" className="hover:text-white transition">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
          © 2026 TinyURL Clone. Built with React, Tailwind CSS & Clerk.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
