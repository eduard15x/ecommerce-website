import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useState } from "react";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout(true);
  };

  const [image, setImage] = useState("");
  const convert = (e) => {
    console.log(e);
    const reader = new FileReader();
    console.log(reader);
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result); // base 64 encoded

      setImage(reader.result);
    };

    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
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

      <div>
        Let's upload an image
        <input accept="image/*" type="file" onChange={convert} />
        <img width={0} height={100} alt="img" src={image} />
      </div>
    </div>
  );
};

export default Navbar;
