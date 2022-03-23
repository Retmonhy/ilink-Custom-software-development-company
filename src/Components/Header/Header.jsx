import React from "react"
import styled from "styled-components";

import logo from '../../images/Logo.png'
import myPhoto from '../../images/11.jpg'
import Button from "../GeneralComp/Button";
import { Wrapper } from "../GeneralComp/SuppComponents"
import profileSvg from "../../images/Profile.svg"

const HeaderWrappaer = styled.header`
    padding-top: 32px;
    padding-bottom: 32px;
    @media screen and (max-width: 768px) {
        padding: 20px 15px
    }
`;
const ProfileBtn = styled(Button)`
    @media screen and (max-width: 768px) {
       & > u { display: none;}
        background: center url(profileSvg);
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
`;
const UserName = styled.span`
    display: inline-block;
    font-family: "Gilroy-Bold", sans-serif;
    margin-left: 20px;
`;

const Logo = styled(Wrapper)``;

const Header = () => {
    return (
        <HeaderWrappaer className="container">
            <HeaderBody>
                <Profile> 
                    <ImageWrapper>
                        <img src={myPhoto} alt="Фотография"/>
                    </ImageWrapper>
                    <Wrapper>
                        <UserName>
                            Дмитрий Кулешов
                        </UserName>
                    </Wrapper>
                </Profile>

                <Logo>
                    <img src={logo} alt="Logo"/>
                </Logo>

                <ProfileBtn buttonChild="Панель управления"/>
            </HeaderBody>
        </HeaderWrappaer>
    )
}

export default Header