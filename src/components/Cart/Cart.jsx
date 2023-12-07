import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, clearCart, total } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="text-center py-5">
        <h1 className="mb-5">No hay productos en el carrito</h1>
        <MDBBtn>
          <Link to="/" className="color-link">
            Ver productos
          </Link>
        </MDBBtn>
      </div>
    );
  }

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className="container pt-5">
      <div className="row ">
        <div>
          <MDBBtn>
            <Link to="/" className="color-link">
              Agregar Producto
            </Link>
          </MDBBtn>
        </div>
        <MDBTable style={{ minWidth: "22rem" }}>
          <MDBTableHead>
            <tr>
              <th scope="col" className="fw-bold">
                Producto
              </th>
              <th scope="col" className="fw-bold">
                Precio
              </th>
              <th scope="col" className="fw-bold">
                Cantidad
              </th>
              <th scope="col" className="fw-bold">
                Acción
              </th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {cart.map((product) => (
              <CartItem key={product.id} {...product} />
            ))}
          </MDBTableBody>
        </MDBTable>
        <div className="d-flex justify-content-center">
          <p className="mb-5">Total : ${total}</p>
        </div>
        <div className="col-12 col-sm-6 mb-3 d-flex flex-column justify-content-center align-items-center mx-auto">
          <MDBBtn block color="info" size="md" onClick={handleClearCart}>
            Limpiar carrito
          </MDBBtn>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6 mb-3 d-flex flex-column justify-content-center mx-auto">
          <MDBBtn color="success" size="md">
            <Link className="color-link" to="checkout">
              CheckOut
            </Link>
          </MDBBtn>
        </div>
      </div>
    </div>
  );
};

export default Cart;
