import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import Navbar from "../components/Navbar";
import Cart from "../views/products/DetailProduct";
import Guest from "../middleware/Guest";
import Authenticated from "../middleware/Authenticated";

export default function Router() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Authenticated>
              <Home />
            </Authenticated>
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/login"
          element={
            <Guest>
              <Login />
            </Guest>
          }
        />
        <Route
          path="/register"
          element={
            <Guest>
              <Register />
            </Guest>
          }
        />
        <Route
          path="/cart"
          element={
            <Authenticated>
              <Cart />
            </Authenticated>
          }
        />
      </Routes>
    </div>
  );
}
