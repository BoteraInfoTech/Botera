import { Link } from "react-router-dom";

export default function Footer() {
  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // or "smooth"
    });
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4" onClick={handleNavClick}>
              <img
                src="https://res.cloudinary.com/dxbbwahzi/image/upload/v1767369135/Botera_Logo_e5bsin.png"
                alt=""
                className="w-26 h-23"
              />
            </Link>
            <p className="text-gray-600 max-w-md leading-relaxed">
              Botera is a unified customer communication platform built for
              modern businesses. Manage, respond, and convert conversations
              across social channels all from one inbox.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              Secure by design · Privacy-first · No ads
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-gray-900 font-medium">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  onClick={handleNavClick}
                  to="/features"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleNavClick}
                  to="/pricing"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleNavClick}
                  to="/how-it-works"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-gray-900 font-medium">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  onClick={handleNavClick}
                  to="/about"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleNavClick}
                  to="/privacy"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleNavClick}
                  to="/terms"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleNavClick}
                  to="/data-deletion"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Data Deletion
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-center text-sm">
            © {new Date().getFullYear()} Botera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
