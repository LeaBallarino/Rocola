import React from "react";

const NavBar = () => {
    const linksNavBar = ["Inicio", "Ofertas", "Destacados", "Hacenos Tu Consulta"]
    return (
        <nav className="header_navBar">  
            {linksNavBar.map((link) => {
                return <a href="#" className="header_navBar_links">{link}</a>
            })}
        </nav>
    )
};

export default NavBar;