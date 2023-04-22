import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Content from "./components/admin/Content";
import Dashboard from "./components/admin/Dashboard";
import InfoPanel from "./components/admin/InfoPanel";
import Catalogs from "./components/admin/Catalogs";
import Sales from "./components/admin/Sales";
import Settings from "./components/admin/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/admin" Component={Admin}>
          {/* nest inside InfoPanel */}
          <Route path="" Component={InfoPanel} />
          <Route path="dashboard" Component={Dashboard} />
          <Route path="content" Component={Content} />
          <Route path="catalogs" Component={Catalogs} />
          <Route path="sales" Component={Sales} />
          <Route path="settings" Component={Settings} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
