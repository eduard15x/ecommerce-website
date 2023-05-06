import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
// import axios from "axios";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password, redirect) => {
    setError(null);
    setIsLoading(true);

    const response = await fetch("http://localhost:4200/eduard/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      const userInfo = await fetch(
        `http://localhost:4200/eduard/user/${email}`
      );
      const data = await userInfo.json();

      if (userInfo.ok) {
        // add the role for current user
        const userCompleteInfo = {
          ...json,
          role: data.role,
        };
        // save json web token to local storage
        localStorage.setItem("user", JSON.stringify(userCompleteInfo));
      }

      // update authContext
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);

      // redirect or reload base on redirect boolean value
      if (redirect) {
        window.location.href = "/";
      } else {
        window.location.reload();
      }
    }
  };

  return { login, isLoading, error };
};
