import React from "react"
import styled from "styled-components";
import { FlexWrapper, Wrapper } from "../GeneralComp/SuppComponents";
import DefaultUserPhoto from "../../images/defaultPhoto.png";

const UserPost = styled.span`
    font-size: 14px;
    line-height: 22px;
`;
const UserName = styled.span`
    font-family: "Factor-Medium", sans-serif;
    font-size: 24px;
    line-height: 28px;
`;
const ImageWrapper = styled(Wrapper)`
    width: 52px; height: 52px;
    margin-right: 20px;
`;
const ItemWrapper = styled(Wrapper)`
    max-width: 520px;
    min-height: 280px;
    border-radius: 2px;
    background: #f5f5f5;
    padding: 25px;
    @media screen and (max-width: 768px) {
        padding: 20px;
    }
`;
const MarginFlex = styled(FlexWrapper)`
    align-items: start;
    margin-bottom: 25px ;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: start;
        margin-bottom: 15px;
    }
`;
const PostDate = styled(Wrapper)`
    font-family: "Factor-Regular", sans-serif;
    font-size: 14px;
    color: #8A8A8A;
    @media screen and (max-width: 768px) {
        margin-top: 12px;
    }
`;

const FeedbackItem = ({ userPhoto, userName, userPost, postDate }) => {    
    return (
        <ItemWrapper>
            <MarginFlex>
                <FlexWrapper>
                        <ImageWrapper>
                            <img src={userPhoto ? userPhoto : DefaultUserPhoto} alt="Фотография"/>
                        </ImageWrapper>
                        <Wrapper>
                            <UserName>
                                {userName}
                            </UserName>
                        </Wrapper>
                </FlexWrapper>
                <PostDate>{postDate}</PostDate>
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