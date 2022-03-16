import React from "react"
import styled from "styled-components"
import { Wrapper, FlexWrapper } from "./GeneralComp/SuppComponents";

const ImageWrapper = styled(Wrapper)``;
const Name = styled(Wrapper)`
    h2 {
        color: #585CC6;
        font-family: "Factor-Bold", sans-serif;
        font-size: 32px;
        line-height: 32px;
    }
`;
const Description = styled(Wrapper)`
    width: 60%;
    background: #fff;
    border-radius: 2px;
    padding: 40px;
`;
const BirthDate = styled(Wrapper)`
    span {
        font-family: "Gilroy-Regular", sans-serif;
        color: #8A8A8A;
    }
`;
const Ul = styled(FlexWrapper)`
    justify-content: start;
    margin: 20px 0;
    li {
        margin-right: 40px;
        strong {
            font-family: "Gilroy-Bold", sans-serif;
        }
    }
`;
const Li = ({ label, text }) => {
    return (
        <li>
            <strong>{label}</strong>: {text}
        </li>
    )
}

const About = () => {
    return (
        <Wrapper>
            <FlexWrapper>
                <ImageWrapper>
                    <img/>
                </ImageWrapper>
                <Description>
                    <Wrapper>
                        
                        <FlexWrapper>
                            <Name>
                                <h2>Дмитрий Кулешов</h2>
                            </Name>
                            <BirthDate>
                                <span>25.10.2000</span>
                            </BirthDate>
                        </FlexWrapper>

                        <Ul as="ul">
                            <Li label="Город" text="Томск"/>
                            <Li label="Пол" text="мужчина"/>
                            <Li label="Возраст" text="21"/>
                        </Ul>
                    </Wrapper>
                </Description>
            </FlexWrapper>
        </Wrapper>
    );
}

export default About