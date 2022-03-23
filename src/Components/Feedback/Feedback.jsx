import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import { feedbacks } from './feedbacks';
import svgSprite from "../../images/svg-sprite.svg"
import feeds from './feedback.module.css';
// Components
import Button from '../GeneralComp/Button';
import { Wrapper, FlexWrapper } from '../GeneralComp/SuppComponents';
import FeedbackItem from './FeedbackItem';
import AddFeedbackModal from './FeedbackForm/AddFeedbackModal';


const Container = styled.div``;
const FeedbackWrapper = styled(Wrapper)`
    background: #fff;
    padding: 60px;
    padding-left: 80px;
    margin-right: 80px;
    min-width: 1200px;
    margin-right: 35px;
`;
const FeedbackHeader = styled.h2`
    font-family: 'Factor-Medium';
    font-size: 68px;
    line-height: 88px;
`;
const HeaderBlock = styled(FlexWrapper)`
    margin-bottom: 40px;
`;
const ButtonsWrapper = styled(FlexWrapper)`
    float: right;
`;
const CarouselButton = styled.button`
    width: 55px;
    height: 55px;
    border-radius: 2px;
    background: #fff url(${(props) => props.arrowPath}) center no-repeat;
    svg > use{ stroke: #333; }
    &:hover svg > use{ stroke: #333; }
    /* &:hover svg > use {fill: red; } */

`;
const PaginationItem = styled.span`
    display: inline-block;
    width: 12px;
    height: 4px;
    background: #585CC6;
    margin: 0 3px;
    opacity: 0.3;
    &.active{
        width: 24px;
        opacity: 1;
    }
`;

const Feedback = ({setModalIsOpen}) => {
    const carouselRef = useRef(null);
    const [prevState, setPrevState] = useState(true);
    const [nextState, setNextState] = useState(false);
    return (
        <Container className='container leftside-container'>
            <FlexWrapper style={{ alignItems: 'end' }}>
                
                <FeedbackWrapper>
                    <HeaderBlock>
                        <FeedbackHeader>Отзывы</FeedbackHeader>
                        <Button onClick={() => setModalIsOpen(true)} 
                        buttonChild={
                        <><svg style={{width: '14px', height: '14px', transform: 'translateY(2px)', marginRight: '10px'}}>
                            <use xlinkHref={svgSprite+'#plus'}></use>
                            </svg>
                            Добавить отзыв
                        </>}
                            />
                    </HeaderBlock>
                    <Carousel
                        ref={carouselRef}
                        onPrevEnd={(currentItem, pageIndex) => {
                            if (+currentItem.index === 0) setPrevState(true);
                            setNextState(false);
                        }}
                        onNextEnd={(currentItem, pageIndex) => {
                            if (+currentItem.index + 1 === feedbacks.length - 1) setNextState(true);
                            setPrevState(false);
                        }}
                        renderPagination = {({ pages, activePage, onClick }) => {
                            return (
                                <FlexWrapper>
                                    {pages.map(page => {
                                        const isActivePage = activePage === page;
                                        return (
                                            <PaginationItem 
                                                key={page}
                                                onClick={() => onClick(page)}
                                                active={isActivePage}
                                                className = {isActivePage ? "active" : "" }
                                            />
                                        )
                                    })}
                                </FlexWrapper>
                            )
                        }}
                        itemPadding={[0, 13]}
                        outerSpacing={-20}
                        itemsToShow={2}
                        itemsToScroll={1}
                        showArrows={false}
                        disableArrowsOnEnd={true}>
                        {feedbacks.map((feed, index) => (
                            <FeedbackItem
                                style={{ display: 'inline-block' }}
                                key={index}
                                userName={feed.userName}
                                userPost={feed.userPost}
                                postDate={feed.postDate}
                                userPhoto={feed.userPhoto}
                            />
                        ))}
                    </Carousel>
                </FeedbackWrapper>

                <ButtonsWrapper>
                    <CarouselButton
                        disabled={prevState}
                        className={feeds.sliderBtn}
                        style={{ marginRight: '15px' }}
                        onClick={() => carouselRef.current.slidePrev()}>
                        <svg height="24" width="24"><use xlinkHref={svgSprite+"#arrowPrev"}></use></svg>
                    </CarouselButton>
                    <CarouselButton
                        disabled={nextState}
                        className={feeds.sliderBtn}
                        onClick={() => carouselRef.current.slideNext()}>
                        <svg height="24" width="24"><use xlinkHref={svgSprite+"#arrowNext"}></use></svg>
                    </CarouselButton>
                </ButtonsWrapper>

            </FlexWrapper>
        </Container>
    );
};

export default Feedback;
