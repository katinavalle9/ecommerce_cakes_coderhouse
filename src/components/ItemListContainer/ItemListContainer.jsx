import Item from "../../pages/Item/Item";
import Carousel from "../Carousel/Carousel";
import SearchComponent from "../SearchComponent/SearchComponent";
import { useState } from "react";

function ItemListContainer() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Carousel greeting={"Bienvenidos"} />
      <div>
        <SearchComponent onSearch={handleSearch}/>
      </div>
      <div>
        <Item searchTerm={searchTerm}/>
      </div>
    </>
  );
}

export default ItemListContainer;
