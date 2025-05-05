import { useRef } from "react";
import ProductCard from "./ProductCart";
import { Link } from "react-router-dom";

const ProductCarousel = ({ category, products }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    scrollRef.current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="px-6 py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{category}</h2>
        <Link to="/cat-section" className="text-green-600 font-semibold">
          see all
        </Link>
      </div>

      <div className="relative text-black">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-4"
        >
          ❮
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 no-scrollbar px-10"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-4"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
