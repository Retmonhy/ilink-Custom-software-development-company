import React from "react"
import styled from "styled-components"
import { useFormContext } from "react-hook-form";
import { InputLabel, InputWrapper, Small } from "./FormInput"
import s from '../feedback.module.css';
import { FlexWrapper } from "../../GeneralComp/SuppComponents"
import svgSprite from "../../../images/svg-sprite.svg"


const TextareaField = styled.textarea`
    resize: none;
    border: 1px solid #E0E0E0;
    border-radius: 2px;
    width: 100%;
    max-height: 105px;
    padding: 12px;
    margin-top: 15px;
    font-family: "Gilroy-Regular", sans-serif;
    font-size: 14px; line-height: 22px;
    &::placeholder {
        color: #8A8A8A;
    }
    &:focus {
        border-color: #585CC6;
        outline: none;
    }
`;
const ShowTextLength = styled.span`
    position: absolute;
    bottom: 10px; right: 5px;
    font-family: "Gilroy-Regular", sans-serif;
    font-size: 10px; line-height: 14px;
    color: #8A8A8A;
`;

export const MultilineField = ({label, name, options, ...props}) => {
    const { register, errors } = useFormContext();
    return (
        <InputWrapper>
            <InputLabel>
                {label}
                <TextareaField
                    {...props}
                    {...register(name, options ?? {})}
                    className={errors?.[name] ? s.error : '' ? s.success : ''}
                />
                <Small>
                    {
                    errors?.[name] && 
                    <FlexWrapper>
                        <svg height="15" width="15"><use xlinkHref={svgSprite+"#errorCross"}></use></svg>
                        <span>{errors?.[name]?.message || 'Error'}</span>
                    </FlexWrapper>
                    }
                </Small>
            </InputLabel>
            <ShowTextLength>
                {(props.textLength ? props.textLength : '0') +"/200"}
            </ShowTextLength>
        </InputWrapper>
    );
}


