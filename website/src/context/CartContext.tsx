import { createContext, useState } from "react";
import { products } from "../models/Products";

interface CartItem {
  id: number;
  quantity: number;
}

const CartContext = createContext({
  items: [{}],
  getItemQuantity: (id: number) => {},
  addItem: (id: number) => {},
  subtractItem: (id: number) => {},
  getTotalCost: () => {},
});

const CartProvider = (children: JSX.Element) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getItemQuantity = (id: number) => {
    const quantity = cartItems.find((product) => product.id === id)?.quantity;

    return quantity ? quantity : 0;
  };

  const addItem = (id: number) => {
    const quantity = getItemQuantity(id);

    if (quantity === 0) {
      setCartItems([
        ...cartItems,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
  };

  const subtractItem = (id: number) => {
    const quantity = getItemQuantity(id);

    if (quantity === 1) {
      setCartItems((cartItems) =>
        cartItems.filter((item) => {
          return item.id !== id;
        })
      );
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  const getTotalCost = () => {
    let totalCost = 0;
    cartItems.map((cartItem) => {
      const product = products.find((product) => product.id === cartItem.id);

      return product ? (totalCost += product.price) : (totalCost += 0);
    });
    return totalCost;
  };

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        getItemQuantity,
        addItem,
        subtractItem,
        getTotalCost,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
