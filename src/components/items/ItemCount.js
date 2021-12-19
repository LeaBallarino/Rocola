import react, { useState, useEffect } from "react";

const ItemCount = ({stock,initial, onAdd}) => {
    const [cuentaActual, contador] = useState(initial);
    const sumar = () => {
        cuentaActual == stock? contador(cuentaActual):contador(cuentaActual + 1);
    };
    const restar = () => {
        cuentaActual == 0? contador(0):contador(cuentaActual - 1);
    };
    const resetear = () => {
        contador(0)
    };
    const agregarAlCarrito = () => {onAdd(cuentaActual)}
    return (
        <>
            <p>{cuentaActual}</p>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={resetear}>Reset</button>
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount