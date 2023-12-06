import {
  MDBIcon,
} from "mdb-react-ui-kit";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

const CartItem = ({ id, name, price, quantity }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemoveItem = () => {
    removeItem(id);
  };

  return (
    <>
      <tr>
      <th scope="row">{name}</th>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <MDBIcon
          fas
          icon="times-circle"
          onClick={handleRemoveItem}
          className="btn btn-danger"
        />
      </td>
    </tr>

    </>
  );
};

export default CartItem;
