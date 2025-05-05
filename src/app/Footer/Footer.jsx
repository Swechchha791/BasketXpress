import React from "react";
import { Link } from "react-router-dom";

const categories = [
  "Fruits",
  "Vegetables",
  "Dairy",
  "Bakery",
  "Beverages",
  "Snacks",
  "Frozen",
  "Meat",
  "Seafood",
  "Organic",
  "Grains",
  "Personal Care",
  "Household",
  "Condiments",
  "Health",
];

const Footer = () => {
  return (
    <footer className="bg-lime-100 text-black px-6 py-10 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left Side */}
        <div className="md:w-1/3">
          <h2 className="text-3xl font-bold">
            Basket<span className="text-primary">Xpress</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Your daily essentials at your doorstep.
          </p>
        </div>

        {/* Right Side - Categories Grid */}
        <div className="md:w-2/3">
          <h3 className="text-xl font-semibold mb-4">Categories</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm">
            {categories.map((cat, index) => (
              <Link
                key={index}
                to="/cat-section"
                className="hover:text-green-600 transition-colors"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="text-center text-sm text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} BasketXpress. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
