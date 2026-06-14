import { Link } from "react-router-dom";
import { useState } from "react";

import {
  FaShoppingCart,
  FaHome,
  FaUser,
  FaBoxOpen,
  FaBars,
  FaTimes
} from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <div className="sticky top-0 z-50">

      <nav className="bg-indigo-600 shadow-lg sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

          {/* LOGO */}
          <Link to="/home">

            <div className="flex items-center gap-3">

              {/* ICON */}
              <div className="bg-white p-2 rounded-full shadow-md">

                <FaShoppingCart className="text-indigo-600 text-2xl" />

              </div>

              {/* TEXT */}
              <div>

                <h1 className="text-white text-2xl font-bold tracking-wide">

                  LuxeMart

                </h1>

                <p className="text-indigo-100 text-sm">

                  Let's Shop

                </p>

              </div>

            </div>

          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8 text-white text-lg font-medium">

            <Link
              to="/home"
              className="hover:text-yellow-300 transition duration-300 flex items-center gap-2"
            >

              <FaHome />
              Home

            </Link>

            <Link
              to="/product"
              className="hover:text-yellow-300 transition duration-300 flex items-center gap-2"
            >

              <FaBoxOpen />
              Products

            </Link>

            <Link
              to="/cart"
              className="hover:text-yellow-300 transition duration-300 flex items-center gap-2"
            >

              <FaShoppingCart />
              Cart

            </Link>

            <Link
              to="/account"
              className="hover:text-yellow-300 transition duration-300 flex items-center gap-2"
            >

              <FaUser />
              Account

            </Link>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-white text-3xl"
          >

            <FaBars />

          </button>

        </div>

      </nav>

      {/* SIDEBAR OVERLAY */}
      {menuOpen && (

        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setMenuOpen(false)}
        >

        </div>

      )}

      {/* SIDEBAR */}
      <div className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-700 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>

        {/* TOP */}
        <div className="bg-indigo-600 text-white p-5 flex justify-between items-center">

          <h2 className="text-2xl font-bold">

            LuxeMart

          </h2>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl"
          >

            <FaTimes />

          </button>

        </div>

        {/* MENU */}
        <div className="flex flex-col p-6 gap-6 text-lg font-medium">

          <Link
            to="/home"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-4 hover:text-indigo-600"
          >

            <FaHome />
            Home

          </Link>

          <Link
            to="/product"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-4 hover:text-indigo-600"
          >

            <FaBoxOpen />
            Products

          </Link>

          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-4 hover:text-indigo-600"
          >

            <FaShoppingCart />
            Cart

          </Link>

          <Link
            to="/account"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-4 hover:text-indigo-600"
          >

            <FaUser />
            Account

          </Link>

        </div>

      </div>

      {/* MOBILE BOTTOM NAV */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white shadow-2xl border-t z-40">

        <div className="flex justify-around items-center py-3">

          <Link
            to="/home"
            className="flex flex-col items-center text-indigo-600"
          >

            <FaHome className="text-xl" />
            <span className="text-sm">Home</span>

          </Link>

          <Link
            to="/product"
            className="flex flex-col items-center text-indigo-600"
          >

            <FaBoxOpen className="text-xl" />
            <span className="text-sm">Products</span>

          </Link>

          <Link
            to="/cart"
            className="flex flex-col items-center text-indigo-600"
          >

            <FaShoppingCart className="text-xl" />
            <span className="text-sm">Cart</span>

          </Link>

          <Link
            to="/account"
            className="flex flex-col items-center text-indigo-600"
          >

            <FaUser className="text-xl" />
            <span className="text-sm">Account</span>

          </Link>

        </div>

      </div>

    </div>

  );

}

export default Navbar;