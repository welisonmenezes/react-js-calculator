import React, { useState, createContext, useEffect } from 'react';
import { posicionarScrollbar } from './../utils/Utils';

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [numeros, setNumeros] = useState([]);
    const [operadores, setOperadores] = useState([]);
    const [digito, setDigito] = useState('0');
    const [resultado, setResultado] = useState('0');

    useEffect(() => {
        posicionarScrollbar();
    }, [digito, numeros, operadores, resultado]);

    return (
        <AppContext.Provider
            value={{ 
                mNumeros: [numeros, setNumeros],
                mOperadores: [operadores, setOperadores],
                mDigito: [digito, setDigito],
                mResultado: [resultado, setResultado]
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
