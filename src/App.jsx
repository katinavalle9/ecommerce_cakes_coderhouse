// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App(){
    const selectedProductId = 1;

    return(
        <div>
        <Navbar/>
        <ItemListContainer greeting={"Bienvenidos"}/>
        <ItemDetailContainer productId={selectedProductId} />
        </div>
       
    )
}

export default App;