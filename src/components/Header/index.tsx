import React, { useState } from 'react'
import Modal from 'react-modal';
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps{
    onOpenNewTransactionModal: () => void; // saying this property is getting a function with no return

}

export function Header({onOpenNewTransactionModal}: HeaderProps){

    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt money"/>
                <button type="button" onClick={onOpenNewTransactionModal}>
                    New Transaction
                </button>
            </Content>
        </Container>
    )
}