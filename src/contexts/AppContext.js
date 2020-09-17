import React, { useState, createContext, useEffect } from 'react';
import { posicionarScrollbar, retornarResultadoGeral } from './../utils/Utils';

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [numeros, setNumeros] = useState([]);
    const [operadores, setOperadores] = useState([]);
    const [digito, setDigito] = useState('0');
    const [resultado, setResultado] = useState('0');
    const [historico, setHistorico] = useState('');

    useEffect(() => {
        posicionarScrollbar();
    }, [digito, numeros, operadores, resultado]);

    
    useEffect(() => {
        let numeroMostrado = '';

        numeros.forEach((numero, index) => {
            numeroMostrado += numero;

            if (operadores[index]) {
                numeroMostrado += operadores[index];
            }
        });

        setHistorico(numeroMostrado);

        let resultadoCalculado = retornarResultadoGeral(numeros, operadores);

        if (resultadoCalculado === undefined) {
            setResultado('0');
        } else {
            setResultado(resultadoCalculado);
        }

    }, [numeros, operadores, setResultado]);

    return (
        <AppContext.Provider
            value={{ 
                mNumeros: [numeros, setNumeros],
                mOperadores: [operadores, setOperadores],
                mDigito: [digito, setDigito],
                mResultado: [resultado, setResultado],
                mHistorico: [historico, setHistorico]
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
