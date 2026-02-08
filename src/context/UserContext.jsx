import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true);

  const Login = () => {
    setToken(true);
  };

  const Logout = () => {
    setToken(false);
  };

  return (
    <UserContext.Provider value={{ token, Logout, Login }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
