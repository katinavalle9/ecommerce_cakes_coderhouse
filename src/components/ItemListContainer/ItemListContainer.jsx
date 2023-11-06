// eslint-disable-next-line no-unused-vars
import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import Img1 from "../../assets/ImagesItem/chispas.jpg";
import Img2 from "../../assets/ImagesItem/cake_white.webp";
import Img3 from "../../assets/ImagesItem/cook_chocolate.jpg";

// eslint-disable-next-line react/prop-types
function ItemListContainer({ greeting }) {
  return (
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
  );
}

export default ItemListContainer;
