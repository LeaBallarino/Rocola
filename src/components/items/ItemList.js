import react from "react";
import Item from "./Item";

const ItemList = ({productos}) => {
    return (  
        <div className="contenedorAlbumes">
            {productos.map((album) => {
                return <Item album={album}/>
            })}
        </div>
    )
}

export default ItemList