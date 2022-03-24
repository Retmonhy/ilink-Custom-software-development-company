import React from "react"
import styled from "styled-components"
const GeneralButton = styled.button`
    font-family: 'Gilroy-Semibold', sans-serif;
    font-size: 18px;
    line-height: 18px;
    padding: 17px 28px;
    background: #585CC6;
    border: none;
    color: #fff;
    border-radius: 2px;
    /* transition: 1s;
    position: relative;
    u { z-index: 10;}
    z-index: 10; */
    /* &::before {
        transition: 1s;
        content: '';
        z-index: 1;
        position: absolute;
        top: 0; left: 0;
        width: 0; height: 100%;
        background: #696DC8;
    }
    &:hover::before {
        content: '';
        width: 100%;
    } */
    @media screen and (max-width: 530px) {
        u { display: none;}
    }
`;

const Button = ({buttonChild, onClick }) => {
    return (
        <GeneralButton onClick={onClick || (()=>{}) }>
                {buttonChild}
        </GeneralButton>

    )
}

export default Button