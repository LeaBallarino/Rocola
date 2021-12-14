import react from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
    return (
        <>
            <div>
                <p>Hola {props.nombre}</p>
            </div>
            <ItemCount stock={10} initial={0}/>
        </>
    )
}
export default ItemListContainer;