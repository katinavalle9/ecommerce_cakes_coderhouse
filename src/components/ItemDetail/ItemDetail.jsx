/* eslint-disable react/prop-types */
import {
    MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  return (
    <div className="d-flex row row-cols-2 row-cols-md-4 g-4 mt-5 px-5">
      {product && (
        <div key={product.id}>
          <MDBCard>
            {product.img && (
              <MDBCardImage fluid src={product.img} alt="productos" position="top" />
            )}
            <MDBCardBody>
              <MDBCardTitle>{product.name}</MDBCardTitle>
              <MDBCardText> Descripcion: {product.description}</MDBCardText>
              <MDBCardText> Precio: ${product.price}</MDBCardText>
              <MDBCardText> Stock: {product.stock}</MDBCardText>
              <ItemCount
                initial={1}
                stock={product.stock}
                onAdd={(quantity) => console.log(`Cantidad agregada ${quantity}`)}
              />
            </MDBCardBody>
          </MDBCard>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;