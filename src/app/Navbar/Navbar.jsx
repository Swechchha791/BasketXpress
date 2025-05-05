import React from "react";
import { LogOut, Search } from "lucide-react";
import { useCart } from "../../context/useCart.js";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  const { totalQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 p-4 flex bg-lime-100 justify-between items-center text-black shadow-lg">
      <Link to="/" className="text-md sm:text-3xl font-bold">
        Basket<span className="text-primary">Xpress</span>
      </Link>

      {/* Search Box */}
      <div className="relative w-full max-w-xl mx-4 hidden md:flex">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full py-2 pl-10 pr-4 rounded-full border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-lime-500 transition duration-300"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400 dark:text-gray-300 h-5 w-5" />
      </div>

      <div className="flex flex-row justify-center items-center text-center">
        {/* Show user's name if logged in */}
        {user ? (
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium">👋 {user.name}</span>
            <button
              onClick={() => {
                localStorage.removeItem("user");
                setUser(null);
                navigate("/");
              }}
              className="text-red-600 px-3 py-1 rounded"
            >
              <LogOut />
            </button>
          </div>
        ) : (
          <button
            className="px-4 py-2 text-lg font-semibold rounded-md transition duration-300"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}

        <button
          className="bg-green-600 text-white text-sm p-2 rounded shadow font-semibold cursor-pointer ml-4"
          onClick={() => navigate("/cart")}
        >
          <p>Items: {totalQuantity}</p>
          <p>₹ {totalPrice}</p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
