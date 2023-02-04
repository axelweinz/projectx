import { createContext, useState } from "react";
import { CartItem } from "../models/CartItem";
import { products } from "../statics/Products";

export type CartContextType = {
  items: CartItem[];
  getItemQuantity: (id: number) => number;
  addItem: (id: number) => void;
  subtractItem: (id: number) => void;
  getTotalCost: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider = (props: { children: JSX.Element }) => {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 1,
      quantity: 1,
      imgSrc: "hej123",
    },
    {
      id: 1,
      quantity: 1,
      imgSrc: "hej123",
    },
    {
      id: 1,
      quantity: 1,
      imgSrc: "hej123",
    },
  ]);

  const getItemQuantity = (id: number) => {
    const quantity = items.find((product) => product.id === id)?.quantity;

    return quantity ? quantity : 0;
  };

  const addItem = (id: number) => {
    const quantity = getItemQuantity(id);

    if (quantity === 0) {
      setItems([
        ...items,
        {
          id: id,
          quantity: 1,
          imgSrc: "soup2.jpg",
        },
      ]);
    } else {
      setItems(
        items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
  };

  const subtractItem = (id: number) => {
    const quantity = getItemQuantity(id);

    if (quantity === 1) {
      setItems((cartItems) =>
        cartItems.filter((item) => {
          return item.id !== id;
        })
      );
    } else {
      setItems(
        items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  const getTotalCost = () => {
    let totalCost = 0;
    items.map((cartItem) => {
      const product = products.find((product) => product.id === cartItem.id);

      return product ? (totalCost += product.price) : (totalCost += 0);
    });
    return totalCost;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        getItemQuantity,
        addItem,
        subtractItem,
        getTotalCost,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
