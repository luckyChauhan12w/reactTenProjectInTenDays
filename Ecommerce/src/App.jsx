import { Routes, Route, useNavigate, NavLink } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Cart from "./components/Cart";
import CartDetails from "./components/CartDetails";

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md mb-8">
        <div className="text-2xl font-bold text-blue-600">FlifKart</div>
        <div className="flex gap-8">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold border-b-2 border-blue-500 pb-1"
                : "text-gray-700 hover:text-blue-500 transition-colors"
            }
            to="/"
            end
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold border-b-2 border-blue-500 pb-1"
                : "text-gray-700 hover:text-blue-500 transition-colors"
            }
            to="/products"
          >
            Products
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold border-b-2 border-blue-500 pb-1"
                : "text-gray-700 hover:text-blue-500 transition-colors"
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold border-b-2 border-blue-500 pb-1"
                : "text-gray-700 hover:text-blue-500 transition-colors"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
        <div>
          <button
            onClick={() => navigate("/cart")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Cart
          </button>
        </div>
      </nav>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/CartDetails/:id" element={<CartDetails />} />
      </Routes>
    </div>
  );
}

export default App;
