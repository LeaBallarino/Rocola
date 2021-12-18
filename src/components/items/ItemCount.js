import react, { useState, useEffect } from "react";

const ItemCount = ({stock,initial}) => {
    const [cuentaActual, contador] = useState(initial);
    const sumar = () => {
        cuentaActual == stock? contador(cuentaActual):contador(cuentaActual + 1);
    }
    const restar = () => {
        cuentaActual == 0? contador(0):contador(cuentaActual - 1);
    }
    return (
        <>
            <button onClick={() => sumar()}>+</button>
            <p>{cuentaActual}</p>
            <button onClick={() => restar()}>-</button>
        </>
    )
}

export default ItemCount