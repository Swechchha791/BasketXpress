import React from "react";
import { useCart } from "../../context/useCart";
import { MinusIcon, PlusIcon, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalQuantity,
    totalPrice,
  } = useCart();

  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-40 space-y-10">
        <div className="text-3xl">🛒 Cart is empty</div>
        <button
          className="bg-green-500 rounded-md shadow-md px-4 py-2 font-semibold text-white hover:scale-105 transition-transform duration-300"
          onClick={() => navigate("/")}
        >
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 mx-auto">
      <h2 className="text-4xl font-bold my-4 text-center">🛒 Your Cart</h2>

      {/* Responsive Flex Container */}
      <div className="flex flex-col md:flex-row justify-around items-start gap-10 mt-10">
        {/* Cart Items List */}
        <ul className="space-y-4 w-full md:w-2/3">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b px-6 py-4 bg-white shadow-md rounded-md"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">₹{item.price}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      <MinusIcon />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      <PlusIcon />
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                <Trash2 />
              </button>
            </li>
          ))}
        </ul>

        {/* Checkout Section */}
        <div className="bg-lime-100 w-full md:w-1/3 rounded shadow text-lg font-medium py-10 px-6 md:px-10">
          <h2 className="text-4xl my-4 font-bold">Checkout</h2>
          <hr className="my-2" />
          <p className="my-2">
            <span className="text-xl font-semibold">Total Items:</span>{" "}
            {totalQuantity}
          </p>
          <hr className="my-2" />
          <p className="my-2">
            <span className="text-xl font-semibold">Total Price:</span> ₹
            {totalPrice}
          </p>
          <button className="bg-green-500 w-full rounded-md shadow-md px-4 py-2 font-semibold text-white mt-5 hover:scale-105 transition-transform duration-300">
            Proceed to pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
