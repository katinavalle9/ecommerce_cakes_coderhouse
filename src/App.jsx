import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetail from "./pages/ItemDetail/ItemDetail";
import Layout from "./pages/Layout";
import Error from "./pages/Error/Error";
import Contact from "./pages/Contact/Contact.jsx";
import { CartProvider } from "./components/CartContext/CartContext.jsx";
import Cart from "./components/Cart/Cart.jsx";

function App() {
  return (
    <div>
      <BrowserRouter basename="/ecommerce_cakes_coderhouse">
        <CartProvider>
          <Routes>
            {/* Rutas principales */}
            <Route path="/" element={<Layout />}>
              <Route index element={<ItemListContainer />} />
              {/* Ruta para la página de contacto */}
              <Route path="/contact" element={<Contact />} />
              {/* Ruta para los detalles del producto */}
              <Route path="/producto/:productoId" element={<ItemDetail />} />
              <Route path="/cart" element={<Cart/>}/>
            </Route>
            {/* Ruta para errores */}
            <Route path="*" element={<Error />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
