import { MDBBtn } from "mdb-react-ui-kit";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ItemCount = ({ stock, initial, onAdd }) => {
  const maxQuantity = 25; // Número máximo permitido
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock && quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="">
        <div className="d-flex justify-content-evenly mb-3">
          <MDBBtn onClick={decrement}>-</MDBBtn>

          <h4>{quantity}</h4>
          <MDBBtn onClick={increment}>+</MDBBtn>
        </div>
      </div>
      <div>
        <MDBBtn onClick={() => onAdd(quantity)} disabled={!stock}>
          Agregar al carrito
        </MDBBtn>
      </div>
    </>
  );
};

export default ItemCount;
