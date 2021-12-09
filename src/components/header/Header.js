import React from "react";

//COMPONENTES
import NavBar from "./NavBar";

//ESTILOS
import "./header.css"

const Header = () => {
    const linksNavBar= ["Inicio", "Ofertas", "Destacados", "Hacenos Tu Consulta"];
    return (
        <>
        <h1 className="header_titulo">Rocola</h1>
        <NavBar links={linksNavBar}/>
        </>
    )
};

export default Header