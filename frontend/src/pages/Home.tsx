import { Outlet } from "react-router-dom";
import Navbar from "../components/site/Navbar";

const Home: React.FC = () => {
  return (
    <div>
      <p>Home</p>
      <Navbar />

      <Outlet />
    </div>
  );
};

export default Home;
