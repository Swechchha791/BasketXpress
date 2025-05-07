import React from "react";
import { productData } from "../../config/product.config";
import CatSectionCards from "./CatSectionCards";

const CategorySection = () => {
  return (
    <div className="flex-grow w-full py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        {productData.map((section) => (
          <div key={section.id} className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">
              {section.category}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-col-4 gap-6 justify-items-center">
              {section.products.map((product) => (
                <CatSectionCards key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
