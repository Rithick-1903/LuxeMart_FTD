import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CategoryProducts from "./pages/CategoryProducts";
import Account from "./pages/Account";




function App() {
  return (
    <div>

    <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/home" element={<Home />} />

      <Route path="/product" element={<Product />} />

      <Route
        path="/product/:category"
        element={<CategoryProducts />}
      />

      <Route path="/cart" element={<Cart />} />

      <Route path="/Checkout" element={<Checkout />} />
      <Route path="/account" element={<Account />} />

    </Routes>
  
    </div>
  );
}

export default App;