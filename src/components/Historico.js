import React, { useContext, useState, useEffect } from "react";
import { AppContext } from './../contexts/AppContext';
import { retornarResultadoGeral } from './../utils/Utils';
import "./Historico.css";

function Historico() {
    const {mNumeros, mOperadores, mResultado} = useContext(AppContext);
    const [numeros] = mNumeros;
    const [operadores] = mOperadores;
    const setResultado = mResultado[1];
    const [historico, setHistorico] = useState('');

    useEffect(() => {

        let numeroMostrado = '';

        numeros.forEach((numero, index) => {
            numeroMostrado += numero;

            if (operadores[index]) {
                numeroMostrado += operadores[index];
            }
        });

        setHistorico(numeroMostrado);

        setResultado(retornarResultadoGeral(numeros, operadores));

    }, [numeros, operadores, setResultado]);

    return (
        <div className="historico">{historico}</div>
    );
}

export default Historico;
