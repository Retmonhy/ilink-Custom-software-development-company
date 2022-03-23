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
    &:hover {
    }
`;

const Button = ({buttonChild, onClick }) => {
    return (
        <GeneralButton onClick={onClick || (()=>{}) }>
            <u>
                {buttonChild}
            </u>
        </GeneralButton>

    )
}

export default Button