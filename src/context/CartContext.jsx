import React, { createContext, useReducer } from "react";

// Initial state
const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

// Reducer to handle actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      let updatedItems;

      if (itemIndex !== -1) {
        updatedItems = [...state.cartItems];
        updatedItems[itemIndex].quantity += 1;
      } else {
        updatedItems = [...state.cartItems, { ...action.payload, quantity: 1 }];
      }

      const updatedTotalQty = updatedItems.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      const updatedTotalPrice = updatedItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      return {
        ...state,
        cartItems: updatedItems,
        totalQuantity: updatedTotalQty,
        totalPrice: updatedTotalPrice,
      };
    }

    case "REMOVE_FROM_CART": {
      const filteredItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      const updatedTotalQty = filteredItems.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      const updatedTotalPrice = filteredItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      return {
        ...state,
        cartItems: filteredItems,
        totalQuantity: updatedTotalQty,
        totalPrice: updatedTotalPrice,
      };
    }

    case "INCREASE_QUANTITY": {
      const updatedItems = state.cartItems.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      const updatedTotalQty = updatedItems.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      const updatedTotalPrice = updatedItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      return {
        ...state,
        cartItems: updatedItems,
        totalQuantity: updatedTotalQty,
        totalPrice: updatedTotalPrice,
      };
    }

    case "DECREASE_QUANTITY": {
      const updatedItems = state.cartItems
        .map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // remove item if quantity is 0

      const updatedTotalQty = updatedItems.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      const updatedTotalPrice = updatedItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      return {
        ...state,
        cartItems: updatedItems,
        totalQuantity: updatedTotalQty,
        totalPrice: updatedTotalPrice,
      };
    }

    default:
      return state;
  }
};

// Create Context
const CartContext = createContext();

// Provider
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Action creators
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const increaseQuantity = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        totalQuantity: state.totalQuantity,
        totalPrice: state.totalPrice,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
