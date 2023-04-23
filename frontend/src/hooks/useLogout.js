import { useAuthContext } from "./useAuthContext";
// import axios from "axios";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = async () => {
    // delete the JWT from local storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};
