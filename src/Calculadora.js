import React from "react";
import "./Calculadora.css";
import { AppProvider } from './contexts/AppContext';
import Header from "./components/Header";
import Display from "./components/Display";
import Historico from "./components/Historico";
import Botoes from "./components/botoes/Botoes";

function Calculadora() {
    return (
        <AppProvider>
            <div className="calculadora">
                <Header />
                <Historico />
                <Display />
                <Botoes />
            </div>
        </AppProvider>
    );
}

export default Calculadora;
