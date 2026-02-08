import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const Login = async ({ email, password }) => {
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

  const Register = async ({ email, password }) => {
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

  const Logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, Logout, Login, Register }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
