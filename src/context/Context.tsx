import { createContext, ReactNode, useContext, useState } from "react";

type CartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  getQuantity: (id: number) => number;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
};

type CartItem = {
  id: number;
  quantity: number;
};

export const CartContext = createContext({} as ShoppingCartContext);

export function useCart() {
  return useContext(CartContext);
}

export const Context = ({ children }: CartProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function getQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function addToCart(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        getQuantity,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
