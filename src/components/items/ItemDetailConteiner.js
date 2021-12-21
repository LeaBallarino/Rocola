import react, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const infoDetalladaAlbum = {
    genero : "Rock en Castellano",
    anioLanzamiento : 1999,
    anioFabricacion : 2015,
    estado : "Nuevo, sellado",
};

const ItemDetailConteiner = () => {
    const [album, setAlbum] = useState({});
    const getItem = (infoAlbum) => {
        const promesa = new Promise ((res, rej) => {
            res(infoAlbum)
        })
        promesa
        .then(() => {
            setAlbum(infoAlbum)
        })
        .catch(() => {console.log("Salio mal")})
    }
    useEffect(() => {
        getItem(infoDetalladaAlbum);
    });
    return(
        <ItemDetail infoAlbum={album}/>
    )
}

export default ItemDetailConteiner