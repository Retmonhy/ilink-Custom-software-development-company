import React from "react"
import styled from "styled-components";
import { FlexWrapper, Wrapper } from "../GeneralComp/SuppComponents";
import DefaultUserPhoto from "../../images/DefaultUserPhoto.svg";

const UserPost = styled.span``;
const UserName = styled.span``;
const ImageWrapper = styled(Wrapper)`
    width: 52px; height: 52px;
    margin-right: 20px;

`;
const ItemWrapper = styled(Wrapper)`
    max-width: 520px;
    border-radius: 2px;
    background: #f5f5f5;
    padding: 25px;
    margin-right: 20px;
`;
const MarginFlex = styled(FlexWrapper)`
    margin-bottom: 25px ;
`;

const FeedbackItem = ({ userPhoto=DefaultUserPhoto, userName, userPost, postDate }) => {    
    return (
        <ItemWrapper>
            <MarginFlex>
                <FlexWrapper>
                        <ImageWrapper>
                            <img src={userPhoto} alt="Фотография"/>
                        </ImageWrapper>
                        <Wrapper>
                            <UserName>
                                {userName}
                            </UserName>
                        </Wrapper>
                </FlexWrapper>
                <Wrapper>{postDate}</Wrapper>
            </MarginFlex>
            <Wrapper>
                <UserPost>
                    {userPost}
                </UserPost>
            </Wrapper>
        </ItemWrapper>

    )
}

export default FeedbackItem