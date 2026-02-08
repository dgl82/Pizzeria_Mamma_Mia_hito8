import CardPizza from "../components/CardPizza";
import Header from "../components/Header";
import "./Home.css";
// import { pizzas } from "../assets/pizzas";
import { useEffect, useState } from "react";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  const getData = async () => {
    const response = await fetch("http://localhost:5000/api/pizzas");
    const data = await response.json();
    setPizzas(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header></Header>
      <div className="contenedor">
        {pizzas.map((pizza) => {
          return <CardPizza key={pizza.id} detalles={pizza} />;
        })}
      </div>
    </div>
  );
};

export default Home;
