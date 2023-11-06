// eslint-disable-next-line no-unused-vars
import React from "react";
import { MDBBtn, MDBIcon, MDBNavbarLink, MDBBadge } from "mdb-react-ui-kit";

function CartWidget() {
  return (
    <>
      <MDBBtn color="light">
        <MDBNavbarLink href="#">
          <MDBBadge pill color="danger">
            0
          </MDBBadge>
          <span>
            <MDBIcon fas icon="shopping-cart"></MDBIcon>
          </span>
        </MDBNavbarLink>
      </MDBBtn>
    </>
  );
}

export default CartWidget;
