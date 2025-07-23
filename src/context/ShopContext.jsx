import React, { useState, createContext, useEffect } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [cartItems, setCartItems] = useState({});
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);

  const addToCart = (_id, size) => {
    if (!_id) {
      console.warn("⚠️ addToCart called without _id");
      toast.error("Invalid product selected");
      return;
    }
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    const cartData = structuredClone(cartItems);

    if (!cartData[_id]) {
      cartData[_id] = {};
    }
    cartData[_id][size] = (cartData[_id][size] || 0) + 1;

    setCartItems(cartData);
    toast.success("Added to cart!");
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const _id in cartItems) {
      for (const size in cartItems[_id]) {
        totalCount += cartItems[_id][size];
      }
    }
    return totalCount;
  };

  useEffect(() => {
    console.log("🛒 Cart Items updated:", cartItems);
  }, [cartItems]);

  const value = {
    products,
    currency,
    cartItems,
    addToCart,
    getCartCount,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
