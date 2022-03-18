import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../GeneralComp/Button';
import { Wrapper, FlexWrapper } from '../GeneralComp/SuppComponents';
import FeedbackItem from './FeedbackItem';
import { feedbacks } from './feedbacks';
import Carousel from 'react-elastic-carousel';
import arrowNext from '../../images/ArrowNext.svg';
import arrowPrev from '../../images/ArrowPrev.svg';
import feeds from './feedback.module.css';

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

const Feedback = () => {
    const carouselRef = useRef(null);
    const [prevState, setPrevState] = useState(true);
    const [nextState, setNextState] = useState(false);
    return (
        <Container className='container leftside-container'>
            <FlexWrapper style={{ alignItems: 'end' }}>
                <FeedbackWrapper>
                    <HeaderBlock>
                        <FeedbackHeader>Отзывы</FeedbackHeader>
                        <Button buttonText='+ Добавить отзыв' />
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
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M4.25 12.2744L19.25 12.2744' stroke='#000' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                            <path
                                d='M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976' stroke='#000' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/>
                        </svg>
                    </CarouselButton>
                    <CarouselButton
                        disabled={nextState}
                        className={feeds.sliderBtn}
                        onClick={() => carouselRef.current.slideNext()}>
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M19.75 11.7256L4.75 11.7256' stroke='#333333' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                            <path
                                d='M13.7002 5.70124L19.7502 11.7252L13.7002 17.7502' stroke='#333333' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                        </svg>
                    </CarouselButton>
                </ButtonsWrapper>
            </FlexWrapper>
        </Container>
    );
};

export default Feedback;
