import React from "react"
import styled from "styled-components"
import Button from "../GeneralComp/Button"
import { Wrapper, FlexWrapper } from "../GeneralComp/SuppComponents"
import FeedbackItem from "./FeedbackItem"

const FeedbackWrapper = styled(Wrapper)`
    background: #fff;
    padding: 60px;
    padding-left: 80px;
    margin-right: 80px;
`;
const FeedbackHeader = styled.h2`
    font-family: "Factor-Medium";
    font-size: 68px;
    line-height: 88px;
`;

const Feedback = () => {
    return (
        <FeedbackWrapper className="leftside-container">
            <FlexWrapper>
                <FeedbackHeader>Отзывы</FeedbackHeader>
                <Button buttonText="+ Добавить отзыв"/>
            </FlexWrapper>
            <Wrapper>
                <FeedbackItem 
                userName="Дмитрий Кулешов" 
                userPost="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quos hic illo at qui animi quidem sunt ut vitae aperiam eos ducimus voluptate, odit iusto nulla incidunt cupiditate, eveniet in."
                postDate="16.03.2022"/>
                <FeedbackItem/>
                
            </Wrapper>

        </FeedbackWrapper>
    )
}

export default Feedback