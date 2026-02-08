import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [usuario, setUsuario] = useState("");

  const login = async ({ email, password }) => {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    alert(data?.error || "Authentication exitosa!");
    localStorage.setItem("token", data.token);
    setUser(data.email);
  };

  const register = async ({ email, password }) => {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    alert(data?.error || "Registro exitoso!");
    localStorage.setItem("token", data.token);
    setUser(data.email);
  };

  const pedirUsuario = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:5000/api/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const infoUsuario = await response.json();
    setUsuario(infoUsuario);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{ user, logout, login, register, usuario, pedirUsuario }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
