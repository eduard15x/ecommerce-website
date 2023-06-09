import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
// import axios from "axios";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, role) => {
    setError(null);
    setIsLoading(true);

    const response = await fetch("http://localhost:4200/eduard/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, role }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      // save json web token to local storage
      localStorage.setItem("user", JSON.stringify(json));

      // update authContext
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
