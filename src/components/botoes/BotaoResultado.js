import React, { useContext } from "react";
import { AppContext } from './../../contexts/AppContext';
import { naoNumeros } from './../../utils/Utils';
import "./Botao.css";

function BotaoResultado() {

    const {mDigito, mNumeros} = useContext(AppContext);
    const [digito, setDigito] = mDigito;
    const [numeros, setNumeros] = mNumeros;

    function mostrarResultado(event) {
        // se resultado ainda não foi requerido
        if (digito !== '=') {
    
            // se é número válido, atualizar array de números
            if (! naoNumeros.includes(digito)) {
                setNumeros([...numeros, digito]);
            }

            setDigito(event.target.innerHTML);
        }
    }

    return (
        <div className="botao azul" onClick={mostrarResultado}>=</div>
    );
}

export default BotaoResultado;
