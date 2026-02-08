import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const LoginPage = () => {
  const { Login } = useContext(UserContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    campos: false,
    largo: false,
    correcto: false,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validarDatos = (e) => {
    e.preventDefault();

    if (!form.email.trim() || !form.password.trim()) {
      setError({ campos: true });
      return;
    }
    if (form.password.length < 6) {
      setError({ largo: true });
      return;
    }

    setError({ correcto: true });
  };

  return (
    <div className="centrado">
      <h3>Login</h3>
      <form className="formulario" onSubmit={validarDatos}>
        {error.campos ? (
          <p className="error">Todos los campos son obligatorios</p>
        ) : null}
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
          value={form.email}
        />
        <input
          type="password"
          placeholder="contraseña"
          name="password"
          onChange={handleChange}
          value={form.password}
        />

        {error.largo ? (
          <p className="error">
            La contraseña debe tener al menos 6 caracteres
          </p>
        ) : null}
        {error.correcto ? (
          <p className="correcto">Inicio de sesión exitoso</p>
        ) : null}
        <button className="boton" type="submit" onClick={Login}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
