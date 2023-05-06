import { useAuthContext } from "./useAuthContext";
// import axios from "axios";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = async (redirect) => {
    // delete the JWT from local storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });

    // redirect base on boolean value passed as argument
    if (redirect) {
      window.location.href = "/login";
    }
  };

  return { logout };
};
