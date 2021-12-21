import react from "react";

const ItemDetail = ({infoAlbum}) => {
    console.log(infoAlbum)
    return (
        <div>
            <p>{infoAlbum.genero}</p>
            <p>{infoAlbum.anioLanzamiento}</p>
            <p>{infoAlbum.anioFabricacion}</p>
            <p>{infoAlbum.estado}</p>
        </div>
        
    )
}

export default ItemDetail

{/* <p>{album.genero}</p>
<p>{album.anioLanzamiento}</p>
<p>{album.anioFabricacion}</p>
<p>{album.estado}</p> */}