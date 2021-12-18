import react from "react";

//ESTILOS
import "./items.css"

const Item = ({album}) => {
    
    return (
        <div className="itemAlbum">
            <img className="itemAlbum__imagen" src={album.imagen} alt={album.titulo,album.artista}/>
            <p className="itemAlbum__artista"> <strong> {album.artista.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))} </strong></p>
            <p className="itemAlbum__titulo"> {album.titulo.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))} </p>
            <p className="itemAlbum__precio"><strong>Precio: </strong>{album.precio}</p>
            <div className="itemAlbum__masInfoSpotify">
                <button id="" className="botonMasInfo"><i className="fas fa-plus-circle"></i></button>
                <a href="" className="itemAlbum__masInfoSpotify__boton" target="_blank"><i className="fab fa-spotify"></i></a>
            </div>
            <button id=""  className="boton boton--negro botonCarrito" type="button"><i className="fas fa-shopping-cart boton-agregarAlCarrito--icono"></i></button>
        </div>
    )
}

export default Item