import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetail from "./pages/ItemDetail/ItemDetail";
import Item from "./pages/Item/Item";
import Layout from "./pages/Layout";
// import Error from "./pages/Error/Error";

function App() {
  return (
    <div>
      <BrowserRouter basename="/ecommerce_cakes_coderhouse">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={<ItemListContainer greeting={"Bienvenidos"} />}
            />
            <Route path="prodcuto" element={<Item />} />
            <Route path="/producto/:productoId" element={<ItemDetail />} />
            {/* <Route path="*" element={<Error />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
