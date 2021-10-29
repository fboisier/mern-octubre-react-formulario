import React, { useState } from 'react'

export const Contador = ({valorInicial}) => {

    const [contador, setContador] = useState(valorInicial);


    const handleContador = () => {
        setContador(contador + 1);
    }

    return (
        <>
            <button onClick={handleContador} className="btn btn-vino">El contador es: {contador}</button>
        </>
    )
}
