import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <div>
      <h1>Navbar</h1>

      {user && (
        <div>
          <button onClick={handleClick}>Logout</button>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
