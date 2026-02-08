import Button from "react-bootstrap/esm/Button";
import { UserContext } from "../context/UserContext";
import { useContext, useEffect } from "react";

const Profile = () => {
  const { logout, pedirUsuario, usuario } = useContext(UserContext);
  useEffect(() => {
    pedirUsuario();
  }, []);

  return (
    <div className="centrado">
      <h2>Mi perfil</h2>
      <div>
        <p>Email: {usuario.email}</p>
      </div>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default Profile;
