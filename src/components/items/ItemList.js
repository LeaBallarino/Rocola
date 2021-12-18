import react from "react";
import Item from "./Item";

const ItemList = ({productos}) => {
    return (  
        <div>
            {productos.map((album) => {
                return <Item album={album}/>
            })}
        </div>
    )
}

export default ItemList