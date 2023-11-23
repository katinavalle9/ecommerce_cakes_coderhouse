import {
  MDBCollapse,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import axios from "axios";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "../css/style.css";


const Item = () => {
  const [products, setProducts] = useState([]);
  const [openProduct, setOpenProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const url = "../../src/AsyncMock.json";
    axios
      .get(url)
      .then((response) => {
        const responseData = response.data;
        setProducts(responseData);
      })
      .catch((error) => {
        console.error("Error al realizar la solicitud:", error);
      });
  }, []);

  const toggleOpen = (productId) => {
    const product = products.find((p) => p.id === productId);
    setOpenProduct(openProduct === productId ? null : productId);
    setSelectedProduct(product);
  };

  



  return (
    <div className="d-flex row row-cols-2 row-cols-md-4 g-4 mt-5 px-5 custom-no-gutter-x">
    {products.map((product) => (
      <div key={product.id}>
        <MDBCard>
          {product.img && (
            <MDBCardImage fluid src={product.img} alt="productos" position="top" />
          )}
          <MDBCardBody>
            <MDBCardTitle>{product.name}</MDBCardTitle>
            <MDBCardText> Precio: ${product.price}</MDBCardText>
            <MDBCardText> Stock: {product.stock}</MDBCardText>
            <MDBBtn onClick={() => toggleOpen(product.id)}>Ver detalles</MDBBtn>
            <MDBCollapse open={openProduct === product.id}>
              <ItemDetail product={selectedProduct} />
            </MDBCollapse>
          </MDBCardBody>
        </MDBCard>
      </div>
    ))}
  </div>
  );
};

export default Item;
