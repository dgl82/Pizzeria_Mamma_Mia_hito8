import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Pizza = () => {
  const [pizza, setPizza] = useState({});
  const { id } = useParams();

  const getData = async () => {
    const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
    const data = await response.json();
    setPizza(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const listaIngredientes = pizza.ingredients;

  return (
    <div className="carro">
      <div className="contenedorPizza" style={{ maxWidth: "60%", gap: "2em" }}>
        <div>
          <img width={300} height={300} src={pizza.img} />
        </div>
        <div className="vertical">
          <div>
            <h6>{pizza.name}</h6>
          </div>
          <div>
            <p>{pizza.desc}</p>
          </div>
          <div className="centrado">
            🍕 Ingredientes:
            <ul>
              {listaIngredientes?.map((ingrediente) => (
                <li key={ingrediente}>{ingrediente}</li>
              ))}
            </ul>
          </div>
          <p className="precio">${pizza.price?.toLocaleString("es-CL")}</p>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
