import React from "react";


//COMPONENTES
import IconoCarrito from "./CartWidget";

const NavBar = ({links}) => {
    return (
        <nav className="header_navBar">  
            {links.map((link) => {
                return <a href="#" className="header_navBar_links">{link}</a>
            })}
            <IconoCarrito/>
        </nav>
    )
};

export default NavBar;