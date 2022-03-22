import React from "react";
import styled from "styled-components";
import { Wrapper, FlexWrapper } from "./GeneralComp/SuppComponents";
import socialSprite from "../images/social-sprite.svg"


const CopyWrapper = styled(Wrapper)` height: 65px; display: inline-block; line-height: 65px; width: 100%;`;
const SocialWrapper = styled(FlexWrapper)``;
const TextWrapper = styled(Wrapper)`
    font-family: "Gilroy-Medium", sans-serif;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    color: #8a8a8a;
`;
const SocialLink = styled.a`
    margin-left: 20px;
    svg > use {fill: #585CC6;}
    &:hover {
        svg > use {fill: #797ddf;}
    }
`;



const Copyright = () => {
    return (
        <CopyWrapper>
            <Wrapper>
            <FlexWrapper className="container">
                <TextWrapper>
                    © iLINK ACADEMY. ALL RIGHTS RESERVED. 2022
                </TextWrapper>
                <SocialWrapper>
                    <SocialLink href="#">
                        <svg height="20" width="20"><use xlinkHref={socialSprite + '#vkontakte'}></use></svg>
                    </SocialLink>
                    <SocialLink href="#">
                        <svg height="20" width="20"><use xlinkHref={socialSprite + '#smthSocial'}></use></svg>
                    </SocialLink>
                    <SocialLink href="#">
                        <svg height="20" width="20"><use xlinkHref={socialSprite + '#telegram'}></use></svg>
                    </SocialLink>
                </SocialWrapper>
            </FlexWrapper>
            </Wrapper>
        </CopyWrapper>
    );
};

export default Copyright;
