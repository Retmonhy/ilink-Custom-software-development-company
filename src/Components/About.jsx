import React from 'react';
import styled from 'styled-components';
import { Wrapper, FlexWrapper } from './GeneralComp/SuppComponents';
import photo from '../images/11.jpg';
import svgSprite from '../images/svg-sprite.svg';

const ImageWrapper = styled(Wrapper)`
    width: 40%;
    overflow: hidden;
    height: 450px;
    margin-top: 60px;
    background: transparent url(${props => props.image}) center / cover no-repeat;
`;
const Name = styled(Wrapper)`
    h2 {
        color: #585cc6;
        font-family: 'Factor-Bold', sans-serif;
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
        font-family: 'Gilroy-Regular', sans-serif;
        color: #8a8a8a;
    }
`;
const Ul = styled(FlexWrapper)`
    justify-content: start;
    flex-wrap: wrap;
    margin: 20px 0;
    li {
        margin-right: 40px;
        strong {
            font-family: 'Gilroy-Bold', sans-serif;
        }
    }
`;
const Li = ({ label, text }) => (
    <li>
        {' '}
        <strong>{label}</strong>: {text}{' '}
    </li>
);

export const LiWithIcon = ({ className, label, text, icon }) => (
    <li className={'withIcon ' + className}>
        <FlexWrapper>
            <FlexWrapper>
                <strong>{label}:&nbsp;</strong>
                <span> {text}</span>
            </FlexWrapper>
            <svg width={icon.width} height={icon.height}>
                <use xlinkHref={icon.iconPath} />
            </svg>
        </FlexWrapper>
    </li>
);

const AboutMe = styled.div`
    line-height: 24px;
    margin-bottom: 40px;
    strong {
        font-family: 'Gilroy-Bold', sans-serif;
    }
    span {
        font-family: 'Gilroy-Medium', sans-serif;
    }
    @media screen and (max-width: 1200px ) {
        span {
        font-size: 16px;
        line-height: 20px;
    }
    @media screen and (max-width: 1100px ) {
        span {
        font-size: 14px;
        line-height: 18px;
    }
}
`;
const AboutWrapper = styled(Wrapper)`
    padding-bottom: 120px;
`;
const AboutFlex = styled(FlexWrapper)`
@media screen and (max-width: 1200px ) {
}
`;

const About = () => {
    return (
        <AboutWrapper className='container'>
            <AboutFlex>
                <ImageWrapper image={photo}/>
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

                        <Ul as='ul'>
                            <Li label='Город' text='Томск' />
                            <LiWithIcon
                                className='iconRight'
                                label='Пол'
                                text='мужчина'
                                icon={{
                                    width: 32,
                                    height: 22,
                                    iconPath: svgSprite + '#mars',
                                }}
                            />
                            <Li label='Возраст' text='21' />
                        </Ul>
                        <AboutMe>
                            <strong>О себе: </strong>
                            <span>
                                Хэй хэй хэй! Меня зовут Дмитрий, но друзья меня называют просто - Дмитрий. Мне 21 год и
                                я обучаюсь в магистратуре ТГУ. По окончании бакалавриата понял, что хочу заниматься
                                другим и решил начать учиться разработке. Так как был выбран фронтенд, то начал я с
                                верстки, стилей и JS. Сейчат активно изучаю React JS. Прошел курсик на одной из платформ
                                по этой библиотеке. Сейчас пишу своё небольшое учебное приложение, для получения новых
                                знаний и оттачивания уже существующих. Предпочитаю активный спортивный отдых. Читаю книжки,
                                умею собирать кубик рубика(интересный факт)
                            </span>
                        </AboutMe>
                        <LiWithIcon
                            as='div'
                            className='iconLeft'
                            label='Домашнее животное'
                            text='есть'
                            icon={{
                                width: 32,
                                height: 22,
                                iconPath: svgSprite + '#pitFeeder',
                            }}
                        />
                    </Wrapper>
                </Description>
            </AboutFlex>
        </AboutWrapper>
    );
};

export default About;
