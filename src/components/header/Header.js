import React from "react";

//COMPONENTES
import NavBar from "./NavBar";

//ESTILOS
import "./header.css"

const Header = () => {
    return (
        <>
        <h1 className="header_titulo">Rocola</h1>
        <NavBar/> 
        </>
    )
};

export default Header