// eslint-disable-next-line no-unused-vars
import { MDBIcon, MDBNavbarLink, MDBBadge } from "mdb-react-ui-kit";
import { CartContext } from "../CartContext/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
function CartWidget() {
  const { totalQuantity } = useContext(CartContext);
  return (
    <>
        <MDBNavbarLink
          tag="div"
          color="light"
          className="ripple ripple-surface ripple-surface-dark btn btn-light"
        >
          <Link to={`cart`} className="d-flex flex-column w-100 h-100 px-2">
            <MDBBadge pill color="danger">
              {totalQuantity}
            </MDBBadge>
            <span>
              <MDBIcon fas icon="shopping-cart" size="sm"></MDBIcon>
            </span>
          </Link>
        </MDBNavbarLink>
    </>
  );
}

export default CartWidget;
