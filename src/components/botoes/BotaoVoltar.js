import React, { useContext } from "react";
import { AppContext } from './../../contexts/AppContext';
import { operadoresValidos } from './../../utils/Utils';
import "./Botao.css";

function BotaoVoltar() {

    const {mDigito, mResultado} = useContext(AppContext);
    const [digito, setDigito] = mDigito;
    const setResultado = mResultado[1];

    function voltarDigito() {
        let tempDigito = digito;

        // se resultado já foi requerido, faça nada
        if (tempDigito === '=') {
            return;
        }
    
        // se dígito atual não for um operador
        if (! operadoresValidos.includes(tempDigito)) {
            tempDigito = tempDigito.slice(0, -1);
    
            if (tempDigito.length < 1) {
                tempDigito = '0';
            }
    
            setDigito(tempDigito);
            setResultado(tempDigito);
        }
    }

    return (
        <div className="botao cinza" onClick={voltarDigito}>&larr;</div>
    );
}

export default BotaoVoltar;
