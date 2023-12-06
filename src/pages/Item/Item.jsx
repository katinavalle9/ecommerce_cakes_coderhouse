import { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { getProducts, getProductsByCategory } from "../../AsyncMock";
import "../../components/css/style.css";
import { Link, useLocation } from "react-router-dom";

const Item = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoria = queryParams.get("categoria");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let productsData;
        if (categoria) {
          productsData = await getProductsByCategory({ categoria });
        } else {
          productsData = await getProducts();
        }
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [categoria]); 

  // Filtrar productos en función del término de búsqueda
  const filteredProducts = products.filter((product) => 
    product?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="d-flex row row-cols-2 row-cols-md-4 g-4 mt-5 px-5 custom-no-gutter-x">
      {filteredProducts.map((product) => (
        <div key={product.id}>
          <MDBCard>
            {product.image && (
              <MDBCardImage
                fluid
                src={product.image}
                alt="productos"
                position="top"
              />
            )}
            <MDBCardBody>
              <MDBCardTitle>{product.name}</MDBCardTitle>
              <MDBCardText> Precio: ${product.price}</MDBCardText>
              <MDBCardText> Stock: {product.stock}</MDBCardText>
              <Link to={`/producto/${product.id}`}>
                <MDBBtn>Ver detalles</MDBBtn>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </div>
      ))}
    </div>
  );
};

export default Item;
