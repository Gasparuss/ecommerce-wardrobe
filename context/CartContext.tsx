import { createContext, useContext, useState } from "react";
import type { Wardrobe } from "../types";
import {
  addProductToCart,
  calculateTotalCartItemsCost,
  calculateTotalCartItemsQuantity,
  changeProductQuantity,
  removeProductFromCart,
} from "../utils/functions";

type CartContext = {
  cartItems: (Wardrobe & { quantity: number })[];
  handleAddToCart: (product: Wardrobe) => void;
  handleRemoveFromCart: (product: Wardrobe) => void;
  handleChangeProductQuantity: (product: Wardrobe, quantity: number) => void;
  getTotalCost: () => number;
  getTotalQuantity: () => number;
};

const CartContext = createContext<CartContext>({
  cartItems: [],
  handleAddToCart: () => {},
  handleRemoveFromCart: () => {},
  handleChangeProductQuantity: () => {},
  getTotalCost: () => 0,
  getTotalQuantity: () => 0,
});

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("Error while reading cart context!");
  }

  return context;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<
    (Wardrobe & { quantity: number })[]
  >([]);

  const handleAddToCart = (product: Wardrobe) => {
    setCartItems((cartItems) => addProductToCart(cartItems, product));
  };

  const handleRemoveFromCart = (product: Wardrobe) => {
    setCartItems((cartItems) => removeProductFromCart(cartItems, product));
  };

  const handleChangeProductQuantity = (product: Wardrobe, quantity: number) => {
    setCartItems((cartItems) =>
      changeProductQuantity(cartItems, product, quantity),
    );
  };

  const getTotalCost = () => {
    return calculateTotalCartItemsCost(cartItems);
  };

  const getTotalQuantity = () => {
    return calculateTotalCartItemsQuantity(cartItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        handleAddToCart,
        handleRemoveFromCart,
        handleChangeProductQuantity,
        getTotalCost,
        getTotalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
