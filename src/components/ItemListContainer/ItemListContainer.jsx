// eslint-disable-next-line no-unused-vars
import { MDBCarousel, MDBCarouselItem, MDBBtn } from "mdb-react-ui-kit";
import Img1 from "../../assets/ImagesItem/chispas.jpg";
import Img2 from "../../assets/ImagesItem/cake_white.webp";
import Img3 from "../../assets/ImagesItem/cook_chocolate.jpg";
import Item from "../../pages/Item/Item";

// eslint-disable-next-line react/prop-types
function ItemListContainer({ greeting }) {
  return (
    <>
      <MDBCarousel showControls showIndicators touch={true}>
        <MDBCarouselItem itemId={1}>
          <h3 className="text-center mt-3">{greeting}</h3>
          <img src={Img1} className="d-block w-100 active" alt="img1" />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <h3 className="text-center mt-3">{greeting}</h3>
          <img src={Img2} className="d-block w-100" alt="img2" />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <h3 className="text-center mt-3">{greeting}</h3>
          <img src={Img3} className="d-block w-100" alt="img3" />
        </MDBCarouselItem>
      </MDBCarousel>

      <div>
        <form className="d-flex input-group w-auto mt-5 px-5">
          <input
            type="search"
            className="form-control"
            placeholder="Buscar producto..."
            aria-label="Search"
          />
          <MDBBtn color="primary">Buscar</MDBBtn>
        </form>
      </div>

      <div>
        <Item />
      </div>
    </>
  );
}

export default ItemListContainer;
