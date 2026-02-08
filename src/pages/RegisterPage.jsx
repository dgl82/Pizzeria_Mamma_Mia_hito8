import { useState } from "react";
import "./RegisterPage.css";

const RegisterPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    repetido: "",
  });

  const [error, setError] = useState({
    campos: false,
    largo: false,
    coinciden: false,
    correcto: false,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validarDatos = (e) => {
    e.preventDefault();

    if (!form.email.trim() || !form.password.trim() || !form.repetido.trim()) {
      setError({ campos: true });
      return;
    }
    if (form.password.length < 6 || form.repetido.length < 6) {
      setError({ largo: true });
      return;
    }
    if (form.password !== form.repetido) {
      setError({ coinciden: true });
      return;
    }
    setError({ correcto: true });
  };

  return (
    <div className="centrado">
      <h3>Registrarse</h3>
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
        <input
          type="password"
          placeholder="Repetir contraseña"
          name="repetido"
          onChange={handleChange}
          value={form.repetido}
        />
        {error.coinciden ? (
          <p className="error">Las contraseñas no coinciden</p>
        ) : null}
        {error.largo ? (
          <p className="error">
            La contraseña debe tener al menos 6 caracteres
          </p>
        ) : null}
        {error.correcto ? (
          <p className="correcto">Usuario creado exitosamente</p>
        ) : null}
        <button className="boton" type="submit">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;

/*const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm({ email: "", password: "", repetido: "" });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetido, setRepetido] = useState("");

  const handleChange = (e) => {
  if (e.target.name === "email") {
       setEmail(e.target.value);
     }
     if (e.target.name === "password") {
       setPassword(e.target.value);
     }
     if (e.target.name === "repetido") {
       setRepetido(e.target.value);
     }
   };

   const handleSubmit = (e) => {
     e.preventDefault();
     setEmail("");
     setPassword("");
     setRepetido("");
   };*/
