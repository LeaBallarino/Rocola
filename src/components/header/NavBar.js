import React from "react";


//COMPONENTES
import IconoCarrito from "./CartWidget";

const NavBar = (props) => {
    return (
        <nav className="header_navBar">  
            {props.links.map((link) => {
                return <a href="#" className="header_navBar_links">{link}</a>
            })}
            <IconoCarrito/>
        </nav>
    )
};

export default NavBar;