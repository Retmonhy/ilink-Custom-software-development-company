import React, { useContext } from "react"
import styled from "styled-components";

import logo from '../../images/Logo.png'
import myPhoto from '../../images/11.jpg'
import Button, { GeneralButton } from "../GeneralComp/Button";
import { Wrapper } from "../GeneralComp/SuppComponents"
import profileSvg from "../../images/Profile.svg"
import { Context } from "../Context"

const HeaderWrappaer = styled.header`
    padding-top: 32px;
    padding-bottom: 32px;
    @media screen and (max-width: 768px) {
        padding: 20px 15px
    }
`;
const ProfileBtn = styled(GeneralButton)`
    @media screen and (max-width: 530px) {
        padding: 8px 11px;
    }
`;
const HeaderBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 52px;
`;
const Profile = styled(HeaderBody)`

`;
const ImageWrapper = styled.div`
    border-radius: 2px;
    width: 52px; height: 52px;
    overflow: hidden;
    img {
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
    @media screen and (max-width: 530px) {
        max-width: 59px;
    }
`;
const UserName = styled.span`
    display: inline-block;
    font-family: "Gilroy-Bold", sans-serif;
    margin-left: 20px;
    @media screen and (max-width: 530px) {
        margin-left: 10px;
        font-size: 12px;
    }
`;

const Logo = styled(Wrapper)`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;

const Header = () => {
    const screenSize = useContext(Context);
    return (
        <HeaderWrappaer className="container">
            <HeaderBody>
                <Profile> 
                    <ImageWrapper>
                        <img src={myPhoto} alt="Фотография"/>
                    </ImageWrapper>
                    <Wrapper>
                        <UserName>
                            {screenSize > 530 ? 'Дмитрий Кулешов' : 'Дмитрий'}
                        </UserName>
                    </Wrapper>
                </Profile>

                <Logo>
                    <img src={logo} alt="Logo"/>
                </Logo>

                <ProfileBtn onClick={() => {}} >{
                    screenSize > 530 ? 'Панель управления' : <img src={profileSvg} alt="profile icon"/>}</ProfileBtn>
            </HeaderBody>
        </HeaderWrappaer>
    )
}

export default Header