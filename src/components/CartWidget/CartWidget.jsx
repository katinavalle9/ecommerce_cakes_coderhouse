// eslint-disable-next-line no-unused-vars
import { MDBBtn, MDBIcon, MDBNavbarLink, MDBBadge } from "mdb-react-ui-kit";
import { CartContext } from "../CartContext/CartContext";
import { useContext } from "react";

function CartWidget() {
  const { totalQuantity } = useContext(CartContext);
  return (
    <>
      <div>
        <MDBBtn color="light">
          <MDBNavbarLink href="cart">
            <MDBBadge pill color="danger">
              {totalQuantity}
            </MDBBadge>
            <span>
              <MDBIcon fas icon="shopping-cart"></MDBIcon>
            </span>
          </MDBNavbarLink>
        </MDBBtn>
      </div>
    </>
  );
}

export default CartWidget;
