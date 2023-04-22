import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Admin from "./pages/Admin";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/admin" Component={Admin} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
