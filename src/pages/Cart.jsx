import Button from "react-bootstrap/esm/Button";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Cart = () => {
  const { cart, total, agregarPizza, quitarPizza } = useContext(CartContext);
  const { token } = useContext(UserContext);

  return (
    <div className="carro">
      <div className="contenedorDetalle">
        <div>
          <p>Detalles del pedido:</p>
        </div>
        <div className="Detalle">
          {cart.map((pizza) => {
            return (
              <div className="pizzaCarrito" key={pizza.id}>
                <div>
                  <img src={pizza.img} width="50" height="50" /> {pizza.name}
                </div>
                <div>
                  ${pizza.price.toLocaleString("es-CL")}{" "}
                  <Button onClick={() => quitarPizza(pizza)}>-</Button>{" "}
                  {pizza.count}{" "}
                  <Button onClick={() => agregarPizza(pizza)}>+</Button>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ margin: "1rem" }}>
          Total: $: {total.toLocaleString("es-CL")}
        </div>
        <div style={{ margin: "1rem" }}>
          <Button disabled={!token}>Pagar</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
