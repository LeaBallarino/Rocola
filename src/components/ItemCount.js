import react, { useState } from "react";

const ItemCount = ({stock,initial}) => {
    const [cuentaActual, contador] = useState(initial);
    const sumar = () => {
        if(cuentaActual == stock){
            contador(cuentaActual);
        } else{
            contador(cuentaActual + 1);
        }

    }
    const restar = () => {
        if(cuentaActual == 0){
            contador(0);
        } else {
            contador(cuentaActual - 1);
        }

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