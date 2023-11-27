import { useState, useEffect } from "react";
import ItemDetail from "../../pages/ItemDetail/ItemDetail.jsx";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular una carga de datos con setTimeout
    const loadData = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000); // Simulamos un tiempo de carga de 2 segundos
    };

    loadData();
  }, []);
  
  return <div>{loading ? <p>Cargando...</p> : <ItemDetail />}</div>;
};

export default ItemDetailContainer;
