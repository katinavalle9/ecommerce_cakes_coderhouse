// Importaciones necesarias
import { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import ItemCount from "../../components/ItemCount/ItemCount.jsx";
import { getProductById } from "../../AsyncMock";
import { useParams, Link } from "react-router-dom";

const ItemDetail = () => {
  const { productoId } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProductById(productoId);
        setProducto(product);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productoId]);

  if (loading) {
    // Muestra algún indicador de carga si es necesario
    return <div>Cargando producto...</div>;
  }

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  const { image, name, price, description, stock } = producto;

  return (
    <div className="d-flex row row-cols-2 row-cols-md-4 g-4 my-5 px-5 justify-content-center custom-no-gutter-x">
      <div>
        <MDBCard alignment="center">
          <MDBCardImage src={image} alt={name} position="top" />
          <MDBCardBody>
            <MDBCardTitle>{name}</MDBCardTitle>
            <MDBCardText> Descripcion: {description}</MDBCardText>
            <MDBCardText> Precio: ${price}</MDBCardText>
            <MDBCardText> Stock: {stock}</MDBCardText>
            <ItemCount
              initial={1}
              stock={stock}
              onAdd={(quantity) => console.log(`Cantidad agregada ${quantity}`)}
            />
          </MDBCardBody>
          <div className="mb-5">
            <Link to="/">Volver</Link>
          </div>
        </MDBCard>
      </div>
    </div>
  );
};

export default ItemDetail;
