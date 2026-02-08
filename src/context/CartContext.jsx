import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState("0");

  const calcularTotal = () => {
    let total = 0;
    const carrito = [...cart];
    carrito.forEach((element) => (total += element.price * element.count));
    setTotal(total);
  };

  const agregarPizza = (pizza) => {
    const nuevaPizza = [...cart];
    const indice = nuevaPizza.findIndex(
      (element) => element.name === pizza.name,
    );
    if (indice === -1) {
      setCart([...cart, { ...pizza, count: 1 }]);
    } else {
      nuevaPizza[indice].count += 1;
      setCart(nuevaPizza);
    }
  };

  const quitarPizza = (pizza) => {
    const restarPizza = [...cart];
    const indice = restarPizza.findIndex(
      (element) => element.name === pizza.name,
    );
    if (restarPizza[indice].count === 1) {
      const quitarPizza = restarPizza.filter(
        (element) => element.name !== pizza.name,
      );
      setCart(quitarPizza);
    } else {
      restarPizza[indice].count -= 1;
      setCart(restarPizza);
    }
  };

  useEffect(() => {
    calcularTotal();
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, total, agregarPizza, quitarPizza }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
