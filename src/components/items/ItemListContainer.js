import react, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import ItemCount from "./ItemCount";

//PRODUCTOS

const albumes = [
    {
        id : 1, 
        artista :"Gustavo Cerati",
        titulo :"Bocanada",
        precio :6500,
        imagen :"./Imagenes/Catalogo-losMasBuscados/bocanada.jpg",
        URLSpotify :"https://open.spotify.com/album/2rIdWbXPjcq8K7BCccBhhC?si=5e5b6aa17cb5499c",
        genero : "Rock en Castellano",
        anioLanzamiento : 1999,
        anioFabricacion : 2015,
        estado : "Nuevo, sellado",
        canciones : ["Tabú","Engaña","Bocanada","Puente","Río Babel","Beautiful","Perdonar Es Divino","Verbo Carne","Raíz","Y Si El Humo Está En Foco...","Paseo Inmoral","Aquí & Ahora (Los Primeros Tres Minutos)","Aquí & Ahora (Y Después)","Alma","Balsa"]
    },
    {
        id : 2, 
        artista :"David Bowie",
        titulo :"Space Oddity",
        precio :3500,
        imagen :"./Imagenes/Catalogo-losMasBuscados/spaceOddity.jpg",
        URLSpotify :"https://open.spotify.com/album/1ay9Z4R5ZYI2TY7WiDhNYQ?si=2237124663054a5b",
        genero : "Rock Internacional",
        anioLanzamiento : 1969,
        anioFabricacion: 2011,
        estado : "Nuevo, sellado",
        canciones : ["Space Oddity","Unwashed And Somewhat Slightly Dazed","Letter To Hermione","Cygnet Committee","Janine","An Occasional Dream","The Wild Eyed Boy From Freecloud","God Knows I'm Good","Memory Of A Free Festival"]
    },
    {
        id : 3, 
        artista :"Los Espiritus",
        titulo :"Agua Ardiente",
        precio :2000,
        imagen :"./Imagenes/Catalogo-losMasBuscados/agua-ardiente.jpg",
        URLSpotify :"https://open.spotify.com/album/1ahdp3YzkgsUZZl3gJPYgL?si=3b188ccb6178466e",
        genero : "Rock en Castellano",
        anioLanzamiento: 2017,
        anioFabricacion : 2017,
        estado : "Nuevo, sellado",
        canciones : ["Huracanes","Jugo","Perdida En El Fuego","La Rueda Que Mueve El Mundo","Esa Luz","La Mirada","Mapa Vacío","Las Armas Las Carga El Diablo","Luna Llena","El Viento"]
    },
    {
        id : 4, 
        artista :"Hernan Cattaneo",
        titulo :"Balance Sunsetstrip",
        precio :4900,
        imagen :"./Imagenes/Catalogo-losMasBuscados/balance-sunsetstrip.jpg",
        URLSpotify :"https://open.spotify.com/album/3NntuAMKnUhdtciw8mYw9n?si=ef3f8b4d81654427",
        genero : "Electrónica/Dance",
        anioLanzamiento: 2019,
        anioFabricacion : 2019,
        estado : "Nuevo, sellado",
        canciones : ["Dream On Wheels","Glide","Hiding Sun","Evol","4 Meditation","Stimulation","Headspace","April Storm","The Old Seawolf (Hernan Cattaneo & Graziano Raffa Remix)","Enterprise","A Forest","Wind Down - Outro"]
    },
    {
        id : 5, 
        artista :"Pink Floyd",
        titulo :"The Dark Side Of The Moon",
        precio :8500,
        imagen :"./Imagenes/Catalogo-losMasBuscados/the-dark-side-of-the-moon.jpg",
        URLSpotify :"https://open.spotify.com/album/4LH4d3cOWNNsVw41Gqt2kv?si=bde9255448224f4d",
        genero : "Rock Internacional",
        anioLanzamiento: 1973,
        anioFabricacion : 1986,
        estado : "Usado, excelente",
        canciones : ["Speak To Me","Breathe","On The Run","Time","The Great Gig In The Sky","Money","Us And Them","Any Colour You Like","Brain Damage","Eclipse"]
    },
    {
        id : 6, 
        artista :"Charly Garcia",
        titulo :"Yendo de la Cama al Living",
        precio :15500,
        imagen :"./Imagenes/Catalogo-losMasBuscados/PubisAngelicalYendoDeLaCamaAlLiving.jpg",
        URLSpotify :"https://open.spotify.com/album/1oZU9a9rdlLV2AB0OCocTZ?si=c34ed2666607471d",
        genero : "Rock en Castellano",
        anioLanzamiento: 1982,
        anioFabricacion : 1982,
        estado : "Usado, excelente",
        canciones : ["Yendo De La Cama Al Living","Superhéroes","No Bombardeen Buenos Aires","Vos También Estabas Verde","Yo No Quiero Volverme Tan Loco","Canción De 2 X 3","Peluca Telefónica","Inconciente Colectivo"]
    },
    {
        id : 7, 
        artista :"Gustavo Cerati",
        titulo :"Amor Amarillo",
        precio :5500,
        imagen :"./Imagenes/catalogo-destacados/AmorAmarillo.jpg",
        URLSpotify :"https://open.spotify.com/album/75onhE4ne52iMHlVcpHUKR?si=3b3ab17432424116",
        genero : "Rock en Castellano",
        anioLanzamiento: 1993,
        anioFabricacion : 2015,
        estado : "Nuevo, sellado",
        canciones : ["Amor Amarillo","Lisa","Te Llevo Para Que Me Lleves","Pulsar","Cabeza De Medusa","Av. Alcorta","Bajan","Rombos","Ahora Es Nunca","A Merced"]
    }
  ];

const ItemListContainer = () => {
    const [productos, setAlbumes] = useState([]);
    useEffect(() => {
        const promesa = new Promise ((res, rej) => {
            setTimeout(() => {
               res(albumes)
            },2000)
       });
       promesa
       .then((catalogo) => {setAlbumes(catalogo)})
       .catch((mensaje) => {console.log(mensaje)});
    },[])
    const onAdd = (cantidad) => {
        console.log(`Agregaste ${cantidad} al carrito`)
    }
    return (
        <>   
            <ItemCount initial={1} stock={10} onAdd={onAdd}/> 
            <ItemList productos={productos}/>
        </>
    ) 
}

export default ItemListContainer;