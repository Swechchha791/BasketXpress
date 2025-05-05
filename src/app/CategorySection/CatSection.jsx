import React from "react";
// import { productData } from "../data/productData";
import { productData } from "../../config/product.config";
import ProductCard from "../Home/Products/ProductCart";

const CategorySection = () => {
  return (
    <div className="space-y-12 p-4 container mx-auto">
      {productData.map((section) => (
        <div key={section.id}>
          <h2 className="text-2xl font-bold my-6">{section.category}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {section.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
