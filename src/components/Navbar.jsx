import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { total } = useContext(CartContext);
  const { token, Logout } = useContext(UserContext);
  const setActiveClass = ({ isActive }) =>
    `botonesBarra espaciado ${isActive ? "activo" : ""}`;
  return (
    <div className="barra navbar">
      <div className="barra">
        Pizzería Mamma Mía!
        <NavLink to="/" className={setActiveClass}>
          🍕 Home
        </NavLink>
        {token ? (
          <NavLink to="/login" className={setActiveClass} onClick={Logout}>
            🔒 Logout
          </NavLink>
        ) : (
          <NavLink to="/login" className={setActiveClass}>
            🔒 Login
          </NavLink>
        )}
        {token ? (
          <NavLink to="/profile" className={setActiveClass}>
            🔓 Profile
          </NavLink>
        ) : (
          <NavLink to="/register" className={setActiveClass}>
            🔐 Register
          </NavLink>
        )}
      </div>
      <div>
        <Link to="/cart">
          <button className="botonTotal">
            🛒 Total:${total.toLocaleString("es-CL")}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
