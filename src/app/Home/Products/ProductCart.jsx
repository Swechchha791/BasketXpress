import { useCart } from "../../../context/useCart.js";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  //   const handleAddToCart = () => {
  //     dispatch({ type: "ADD_TO_CART", payload: product });
  //   };

  return (
    <div className="min-w-[200px] max-w-[200px] flex-shrink-0 border rounded-xl p-3 sm:p-4 shadow-sm bg-white cursor-pointer max-h-[320px]">
      <img
        src={product.image}
        alt={product.name}
        className="h-28 w-full object-contain mb-2"
      />
      <p className="text-sm text-gray-500">⏱ {product.time}</p>
      <h3 className="text-md font-semibold mt-1">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.quantity}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="font-bold">₹{product.price}</span>
        <button
          className="bg-green-600 text-white px-4 py-1 rounded-md text-sm"
          onClick={() => addToCart(product)}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
