import React, { useContext } from "react";
import { AppContext } from './../../contexts/AppContext';
import { operadoresValidos } from './../../utils/Utils';
import "./Botao.css";

function BotaoOperador(props) {

    const {mDigito, mNumeros, mOperadores} = useContext(AppContext);
    const [digito, setDigito] = mDigito;
    const [numeros, setNumeros] = mNumeros;
    const [operadores, setOperadores] = mOperadores;

    // Captura o operador digitado
    function digitarOperador(event) {
        let tempDigito = digito;

        // se dígito atual ainda não existe ou já é operador, operador não é necessário
        if (tempDigito === '' || operadoresValidos.includes(tempDigito)) {

            // Se digito atual for operador, permitir trocar último operador
            if (operadores.length === numeros.length) {
                const novoOperadores = [...operadores];
                novoOperadores[novoOperadores.length-1] = event.target.innerHTML;
                setOperadores(novoOperadores);
            }

            return;
        }

        // se resultado ainda não foi requerido, formatar/adicionar dígito atual ao array de números
        if (tempDigito !== '=') {
            // formata corretamente números fracionais digitados
            if (tempDigito * 1 === 0 || (tempDigito.length === 1 && tempDigito === '.')) {
                tempDigito = '0';
            } else if (tempDigito[tempDigito.length - 1] === '.') {
                tempDigito += '0';
            }

            // adiciona número ao array de numeros
            setNumeros([...numeros, tempDigito]);
        }
        
        // atualiza o dígito atual
        tempDigito = event.target.innerHTML;

        // adicionar dígito atual atualiado ao array de operadores
        setOperadores([...operadores, tempDigito]);
        setDigito(tempDigito);
    }

    return (
        <div className="botao cinza" onClick={digitarOperador}>{props.operador}</div>
    );
}

export default BotaoOperador;
