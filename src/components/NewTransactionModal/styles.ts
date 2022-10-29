import styled from'styled-components';
import { darken, transparentize } from 'polished';


export const Container = styled.form`
    h2{
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem; // 16px on desktop

        &::placeholder{
            color: var(--text-body);
        }

        // if you have anything before you
        &+input{
            margin-top: 1rem;
        }
    }
    button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin: 1.5rem 0;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }

    }
`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;

// creating an element so it can have properties and we can style it respecting the state of these proeprties
interface RadioBoxProps{
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors ={
    green:'#33cc95',
    red: '#b52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>` // how to pass the property when we are not dealing with a function
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: ${(props) => props.isActive 
    ? transparentize(0.9,colors[props.activeColor])
    : 'transparent'}; // JavaScript

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;

    &:hover{
        // border-color: #aaa;
        border-color: ${darken(0.1, '#d7d7d7')}; // using javascript
    }

    img{
        height: 20px;
        height: 20px;
    }

    span{
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        columns: var(--text-title);

    }

`;