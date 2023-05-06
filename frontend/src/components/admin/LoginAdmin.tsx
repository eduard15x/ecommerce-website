import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

const LoginAdmin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await login(email, password, false);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Admin Panel Account</h3>
      <label>Admin Email:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label>Admin Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button type="submit" disabled={isLoading}>
        Log in
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default LoginAdmin;
