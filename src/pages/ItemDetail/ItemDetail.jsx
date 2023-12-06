import { useContext, useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import ItemCount from "../../components/ItemCount/ItemCount.jsx";
import { getProductById } from "../../AsyncMock";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../../components/CartContext/CartContext.jsx";

const ItemDetail = () => {
  const { productoId } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id: producto.id,
      name: producto.name,
      price: producto.price,
    };

    addItem(item, quantity);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProductById(parseInt(productoId));
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
    <>
      <h3 className="text-center pt-3">Detalle del producto</h3>
      <div className="d-flex row row-cols-2 row-cols-md-4 g-4 my-3 px-5 justify-content-center custom-no-gutter-x">
        <div>
          <MDBCard alignment="center">
            <MDBCardImage src={image} alt={name} position="top" />
            <MDBCardBody>
              <MDBCardTitle>{name}</MDBCardTitle>
              <MDBCardText> Descripcion: {description}</MDBCardText>
              <MDBCardText> Precio: ${price}</MDBCardText>
              <MDBCardText> Stock: {stock}</MDBCardText>
              {quantityAdded > 0 ? (
                <MDBBtn className="me-1" color="warning">
                  <Link to="/cart" className="color-link">
                    Terminar compra
                  </Link>
                </MDBBtn>
              ) : (
                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
              )}
            </MDBCardBody>
            <div className="mb-5">
              <Link to="/">Volver</Link>
            </div>
          </MDBCard>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
