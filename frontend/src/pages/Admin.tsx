import axios from "axios";
import Navbar from "../components/admin/Navbar";
import SideNav from "../components/admin/SideNav";
// components

const Admin: React.FC = () => {
  // const getData = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:4200/products/");
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // getData();

  return (
    <div>
      <Navbar />
      <SideNav />
    </div>
  );
};

export default Admin;
