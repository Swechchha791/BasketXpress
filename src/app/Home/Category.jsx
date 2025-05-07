import React, { useState } from "react";
import { CATEGORY } from "../../config/app.config";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleClick = (item) => {
    if (item.title === "Paan Corner") {
      setSelectedCategory(item);
      setShowPopup(true);
    } else {
      navigate("/cat-section");
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedCategory(null);
    navigate("/paan-corner");
  };

  return (
    <div className="px-4 py-10 relative">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-6 justify-items-center">
        {CATEGORY.map((item) => (
          <div
            key={item.id}
            className="h-32 w-32 my-10"
            onClick={() => handleClick(item)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="rounded-lg shadow cursor-pointer transform transition duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Popup */}
      {showPopup && selectedCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
            <h2 className="text-2xl text-red-600 font-semibold mb-2">
              Caution!
            </h2>
            <p className="mb-4">
              The <strong>{selectedCategory.title}</strong> is filled with
              harmfull products for your health!
            </p>
            <p className="mb-4 text-sm text-gray-600">
              Would you like to explore something better instead?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  setShowPopup(false);
                  navigate("/cat-section");
                }}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-blue-600"
              >
                Suggest Better
              </button>
              <button
                className="px-4 py-2 bg-lime-100 text-black rounded hover:bg-gray-400"
                onClick={handleClosePopup}
              >
                No Thanks
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
