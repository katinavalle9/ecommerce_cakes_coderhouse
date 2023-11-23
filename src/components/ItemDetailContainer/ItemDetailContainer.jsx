/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import axios from "axios";

const ItemDetailContainer = ({ productId }) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`../../src/AsyncMock.json`);
        const products = response.data;
        const selectedProduct = products.find((p) => p.id === productId);
        setProduct(selectedProduct);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los detalles del producto:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
