// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App(){
    return(
        <div>
        <Navbar/>
        <ItemListContainer greeting={"Bienvenidos"}/>
        </div>
       
    )
}

export default App;