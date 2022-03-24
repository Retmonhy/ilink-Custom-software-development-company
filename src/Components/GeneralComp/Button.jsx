import React from "react"
import styled from "styled-components"
export const GeneralButton = styled.button`
    font-family: 'Gilroy-Semibold', sans-serif;
    font-size: 18px;
    line-height: 18px;
    padding: 17px 28px;
    background: #585CC6;
    border: none;
    color: #fff;
    border-radius: 2px;
    @media screen and (max-width: 530px) {
        u { display: none;}
        padding: 15px;
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