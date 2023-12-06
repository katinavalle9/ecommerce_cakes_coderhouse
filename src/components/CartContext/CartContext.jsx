import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      // Si el producto no está en el carrito, lo agregamos normalmente
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      // Si el producto ya está en el carrito, actualizamos la cantidad
      setCart((prev) =>
        prev.map((prod) =>
          prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
        )
      );
    }

    // Actualizamos la cantidad total
    setTotalQuantity((prev) => prev + quantity);
  };

  const removeItem = (itemId) => {
    const removedProduct = cart.find((prod) => prod.id === itemId);
    if (removedProduct) {
      // Restamos la cantidad del producto eliminado de la cantidad total
      setTotalQuantity((prev) => prev - removedProduct.quantity);
    }

    const cartUpdate = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdate);
  };

  const clearCart = () => {
    // Reseteamos la cantidad total
    setTotalQuantity(0);
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  return (
    <CartContext.Provider value={{ cart, totalQuantity, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
