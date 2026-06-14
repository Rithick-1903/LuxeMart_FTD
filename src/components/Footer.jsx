import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-indigo-600 text-white">

      <div className="max-w-7xl mx-auto px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LOGO */}
        <div>

          <h2 className="text-3xl font-bold mb-4">
            LuxeMart
          </h2>

          <p className="text-gray-200 leading-7">
            Your trusted ecommerce platform for quality products
            and best shopping experience.
          </p>

        </div>

        {/* QUICK LINKS */}
        <div>

          <h3 className="text-2xl font-semibold mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3">

            <Link to="/" className="hover:text-yellow-300 transition">
              Home
            </Link>

            <Link to="/product" className="hover:text-yellow-300 transition">
              Products
            </Link>

            <Link to="/cart" className="hover:text-yellow-300 transition">
              Cart
            </Link>

            <Link to="/login" className="hover:text-yellow-300 transition">
              Login
            </Link>

          </div>

        </div>

        {/* CONTACT */}
        <div>

          <h3 className="text-2xl font-semibold mb-4">
            Contact
          </h3>

          <p className="mb-3">
            📍 Chennai, India
          </p>

          <p className="mb-3">
            📧 support@luxemart.com
          </p>

          <p>
            📞 +91 0425 456 963 
          </p>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-indigo-400 text-center py-5 text-gray-200">

        © 2026 LuxeMart. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;