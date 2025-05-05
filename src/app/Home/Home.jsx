import React from "react";
import ImageSlider from "./ImageSlider";
import Category from "./Category";
import { productData } from "../../config/product.config";
import ProductCarousel from "./Products/ProductCarousel";

import img1 from "../../assets/Web/babycare-WEB.avif";
import img2 from "../../assets/Web/Pet-Care_WEB.avif";
import img3 from "../../assets/Web/pharmacy-WEB.avif";

const Home = () => {
  const images = [img1, img2, img3];
  return (
    <div className="container mx-auto w-full py-8">
      <ImageSlider />
      <Category />

      <div className="flex flex-wrap gap-6 px-4 my-28 w-full">
        {images.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[300px] md:w-[400px] lg:w-[450px] h-[250px] rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img src={item} alt="card" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <div className="space-y-12">
        {productData.map(({ category, products, id }) => (
          <ProductCarousel key={id} category={category} products={products} />
        ))}
      </div>
    </div>
  );
};

export default Home;
