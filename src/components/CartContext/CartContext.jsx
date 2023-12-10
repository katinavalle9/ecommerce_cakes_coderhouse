import { createContext, useState, useEffect } from "react";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    cargarCarritoDesdeFirestore();
  }, []);

  const cargarCarritoDesdeFirestore = async () => {
    try {
      const cartDocRef = doc(db, "carritos", "idDelUsuario");
      const cartDocSnap = await getDoc(cartDocRef);

      if (cartDocSnap.exists()) {
        const cartData = cartDocSnap.data().cart;
        setCart(cartData);
        recalcularTotal(cartData);
      }
    } catch (error) {
      console.error("Error al cargar el carrito desde Firestore:", error);
    }
  };

  const recalcularTotal = (cartData) => {
    let newTotalQuantity = 0;
    let newTotal = 0;

    cartData.forEach((item) => {
      newTotalQuantity += item.quantity;
      newTotal += item.price * item.quantity;
    });

    setTotalQuantity(newTotalQuantity);
    setTotal(newTotal);
  };

  const saveCartToFirestore = async () => {
    try {
      const cartDocRef = doc(db, "carritos", "idDelUsuario");
      await setDoc(cartDocRef, { cart: [] });

      console.log("Carrito guardado en Firestore");
    } catch (error) {
      console.error("Error al guardar el carrito en Firestore:", error);
    }
  };

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      setCart((prev) =>
        prev.map((prod) =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        )
      );
    }
    setTotalQuantity((prev) => prev + quantity);
    setTotal((prev) => prev + item.price * quantity);

    saveCartToFirestore();
  };

  const removeItem = (itemId) => {
    const removedProduct = cart.find((prod) => prod.id === itemId);
    if (removedProduct) {
      setTotalQuantity((prev) => prev - removedProduct.quantity);
      setTotal((prev) => prev - removedProduct.price * removedProduct.quantity);
    }

    const cartUpdate = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdate);

    saveCartToFirestore();
  };

  const clearCart = () => {
    setTotalQuantity(0);
    setTotal(0);
    setCart([]);
    saveCartToFirestore();
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{ cart, totalQuantity, total, addItem, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
