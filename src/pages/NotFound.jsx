import { Link } from "react-router-dom";
import gif from "../assets/imgs/what-huh.gif";
import Button from "react-bootstrap/Button";

const NotFound = () => {
  return (
    <div className="centrado">
      <h2>La página que buscas no existe.</h2>
      <h2>¿Te has perdido?</h2>
      <img src={gif} alt="loading..." />
      <Link to="/">
        <Button variant="primary">Vuelve al inicio</Button>
      </Link>
    </div>
  );
};

export default NotFound;
