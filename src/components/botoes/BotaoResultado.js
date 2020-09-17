import React, { useContext } from "react";
import { AppContext } from './../../contexts/AppContext';
import "./Botao.css";

function BotaoResultado() {

    const {mDigito, mNumeros} = useContext(AppContext);
    const [digito, setDigito] = mDigito;
    const [numeros, setNumeros] = mNumeros;

    function mostrarResultado(event) {
        const naoNumeros = ['+', '-', '×', '÷','.', '=', 'C', 'CE', '=/-'];
        let tempDigito = digito;

        // se resultado ainda não foi requerido
        if (tempDigito !== '=') {
    
            // se é número válido, atualizar array de números
            if (! naoNumeros.includes(tempDigito)) {
                setNumeros([...numeros, tempDigito]);
            }

            setDigito(event.target.innerHTML);
        }
    }

    return (
        <div className="botao azul" onClick={mostrarResultado}>=</div>
    );
}

export default BotaoResultado;
