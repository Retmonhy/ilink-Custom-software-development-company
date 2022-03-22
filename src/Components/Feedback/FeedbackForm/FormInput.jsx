import React from 'react';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';
import s from '../feedback.module.css';
import { FlexWrapper } from "../../GeneralComp/SuppComponents"
import svgSprite from "../../../images/svg-sprite.svg"

export const InputWrapper = styled.div`
    margin-bottom: 30px;
    position: relative;
`;
export const InputLabel = styled.label`
    display: block;
    font-family: "Factor-Medium", sans-serif;
    font-size: 16px; line-height: 20px;
    min-width: 395px;

`;
const InputField = styled.input`
    width: 100%;
    height: 52px;
    padding: 0 10px;
    margin-top: 15px;
    font-family: "Gilroy-Regular", sans-serif;
    font-size: 14px; line-height: 22px;
    outline: none;

    border: 1px solid #E0E0E0;
    border-radius: 2px;
    background-color: #fff;
    &::placeholder {
        color: #8A8A8A;
    }
    &:focus {
        border-color: #585CC6;
        outline: none;
    }
`;

export const Small = styled.small`
    position: absolute;
    bottom: -25px; left: 0;
    margin-top: 5px;
    font-family: "Gilroy-Regular", sans-serif;
    font-size: 12px;
    
    span {color: #EB5757; }
    & > div {justify-content: start;}
    & > div svg { margin-right: 6px;}
    & > div svg > use {stroke: #EB5757; transform: scale(1.3)}
`;

export const FormInput = ({ label, name, options, ...props }) => {
    const { register, errors } = useFormContext();
    return (
        <InputWrapper>
            <InputLabel>
                {label}
                <InputField
                    {...props}
                    {...register(name, options ?? {})}
                    className={errors?.[name] ? s.error : '' }
                />
                <Small>{
                    errors?.[name] && 
                    <FlexWrapper>
                        <svg height="15" width="15"><use xlinkHref={svgSprite+"#errorCross"}></use></svg>
                        <span>{errors?.[name]?.message || 'Error'}</span>
                    </FlexWrapper>
                }</Small>
            </InputLabel>
        </InputWrapper>
    );
};
