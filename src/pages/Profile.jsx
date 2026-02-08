import Button from "react-bootstrap/esm/Button";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const Profile = () => {
  const { Logout } = useContext(UserContext);

  return (
    <div className="centrado">
      <h2>Mi perfil</h2>
      <p>name@example.com</p>
      <Button onClick={Logout}>Logout</Button>
    </div>
  );
};

export default Profile;
