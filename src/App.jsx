import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import Header from "./components/Layout/Header";
import ProductState from "./contexts/product/ProductState";
import Profile from "./components/Profile/index";
import Register from "./components/Register/index";
import Login from "./components/Login/index";
import UserState from "./contexts/users/UserState";
import PrivateRoute from "./components/Auth/PrivateRoute";
import AuthRoute from "./components/Auth/AuthRoute";

function App() {
  return (
    <UserState>
      <ProductState>
        <Router>
          <Header />
          <Routes>
            <Route path="/perfil" element={<PrivateRoute element={Profile} />} />

            <Route path="/registro" element={<AuthRoute element={Register} />} />
            <Route path="/iniciar-sesion" element={<AuthRoute element={Login} />} />

            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </ProductState>
    </UserState>
  );
}

export default App;
