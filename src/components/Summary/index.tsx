import React from "react";
import { Container } from "./styles";

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg'

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas"/>
                </header>

                <strong>R$1.000</strong>
            </div>

            <div>
                <header>
                    <p>Expense</p>
                    <img src={outcomeImg} alt="Saídas"/>
                </header>

                <strong>- R$500</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Income</p>
                    <img src={totalImg} alt="Total"/>
                </header>

                <strong>R$5.000</strong>
            </div>
        </Container>
    )
}