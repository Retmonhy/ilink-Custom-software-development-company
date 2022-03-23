import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm, FormProvider } from 'react-hook-form';
import svgSprite from '../../../images/svg-sprite.svg';
// Components
import { FlexWrapper, Wrapper } from '../../GeneralComp/SuppComponents';
import { FormInput } from './FormInput';
import { MultilineField } from './MultilineField';
import Button from '../../GeneralComp/Button';
import loader from '../../../images/Vector.png';

const DeleteFile = styled(Wrapper)`
    svg {
        width: 20px;
        height: 20px;
    }
    &:hover {
        cursor: pointer;
    }
`;
const InputsFlex = styled(FlexWrapper)``;
const FileUploadProcess = styled(FlexWrapper)`
    display: inline-flex;
    justify-content: start;
    background: #f5f5f5;
    padding: 14px;
    margin-bottom: 30px;
`;
const FlexWrapperColumn = styled(FlexWrapper)`
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin: 0 15px;
    span.error-span { font-family: 'Gilroy-Semibold', sans-serif; font-size: 14px; color: #EB5757;}
    span.error-span + svg use { stroke: #EB5757;}
    span { margin-bottom: 10px;}
    svg use { stroke: #585cc6;}
`;
const Loader = styled.div`
    img {
        transform-origin: 50% 50%;
        animation-name: rotate;
        animation-duration: 0.7s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }
`;

const Overlay = styled(FlexWrapper)`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    justify-content: center;
    z-index: 99;
`;
const ModalWrapper = styled(Wrapper)`
    z-index: 100;
    background: #fff;
    width: 100%;
    max-width: 670px;
    min-height: 440px;
    padding: 25px;
`;
const HeaderWrapper = styled(Wrapper)`
    margin-bottom: 20px;
    h3 {
        font-family: 'Factor-Medium', sans-serif;
        font-size: 24px;
        line-height: 28px;
    }
`;
const CloseButton = styled.button`
    border: none;
    background: transparent;
`;
const Form = styled.form`
    background: transparent;
`;
const SubmitWrapper = styled(FlexWrapper)`
    justify-content: start;
    svg {
        margin-right: 10px;
    }
    svg > use {
        stroke: #585cc6;
    }
    span {
        font-family: 'Gilroy-Regular', sans-serif;
        font-size: 12px;
        line-height: 16px;
        color: #8a8a8a;
    }
`;
const FileUploadLabel = styled.label`
    input {
        display: none;
    }
    font-family: 'Gilroy-Semibold', sans-serif;
    font-size: 18px;
    line-height: 18px;
    padding: 15px 28px;
    background: #585cc6;
    border: none;
    color: #fff;
    border-radius: 2px;
    &:hover { cursor: pointer;}
`;
const FileStateWrapper = styled(Wrapper)`
    margin-bottom: 30px;
`;



const AddFeedbackModal = ({ setModalIsOpen }) => {
    const [inputFiles, setFiles] = useState(null);
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
        watch,
    } = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onBlur',
    });
    const feedLength = watch('feedText')?.length;
    const reader = new FileReader();

    const createFeed = (data) => {
        data['fileAttach'] = inputFiles.name;
        console.log('data = ', data);
        reset();
        setFiles(null)
    };

    const handleFiles = files => {
        const file = files[0];

        console.log('reader = ', reader)
        reader.readAsText(file)
        setFiles(file);
    }


    return (
        <Overlay
            className='overlay'
            onClick={(evt) => (evt.target.classList.contains('overlay') ? setModalIsOpen(false) : '')}>
            <ModalWrapper>

                <HeaderWrapper>
                    <FlexWrapper>
                        <h3>Отзыв</h3>
                        <CloseButton className='closeBtn' onClick={() => setModalIsOpen(false)}>
                            <svg height='24' width='24'>
                                <use xlinkHref={svgSprite + '#cross'}></use>
                            </svg>
                        </CloseButton>
                    </FlexWrapper>
                </HeaderWrapper>

                <FormProvider register={register} errors={errors}>
                    <Form noValidate onSubmit={handleSubmit(createFeed)}>
                        <InputsFlex>

                            <FormInput
                                label='Как вас зовут?'
                                placeholder='Имя Фамилия'
                                name='name'
                                options={{
                                    required: 'Введите свое имя',
                                }}
                            />

                            <Wrapper>
                                <FileUploadLabel htmlFor='fileAttach'>
                                    <svg style={{width: '14px', height: '14px', transform: 'translateY(2px)', marginRight: '10px'}}><use xlinkHref={svgSprite+'#plus'}></use></svg> 
                                    Загрузить фото
                                    <input
                                        type='file'
                                        name='fileAttach'
                                        id='fileAttach'
                                        accept=".jpg, .jpeg, .png"
                                        onDrop={(e) => handleFiles([...e.dataTransfer.files])}
                                        onChange={(e) => {
                                            handleFiles([...e.target.files]);
                                        }}
                                    />
                                </FileUploadLabel>
                            </Wrapper>
                            
                        </InputsFlex>

                            {inputFiles?.name ? (
                                <FileUploadProcess>
                                    <svg height='24' width='24'><use xlinkHref={svgSprite + '#jpg'}></use></svg>
                                    <FlexWrapperColumn>
                                        {
                                            inputFiles?.size > 500000 ? 
                                            <span className="error-span">Your file is too big!</span>    
                                            :
                                        <span>{inputFiles?.name}</span>
                                        }
                                        <svg height="4" width="170"><use xlinkHref={svgSprite+"#line-fileUpload"}></use></svg>
                                    </FlexWrapperColumn>
                                    {
                                        reader.readyState === 1 ?
                                    <Loader>
                                        <img src={loader} alt="loader"/>
                                    </Loader> : 
                                    <DeleteFile onClick={() => setFiles(null)}>
                                        <svg>
                                            <use xlinkHref={svgSprite + '#deleteFile'}></use>
                                        </svg>
                                    </DeleteFile>
                                    }
                                </FileUploadProcess>
                            ) : (
                                ""
                            )}

                        <MultilineField
                            textLength={feedLength}
                            label='Все ли вам понравилось?'
                            name='feedText'
                            placeholder='Напишите пару слов о вашем опыте...'
                            options={{
                                required: 'Поле обязательно для заполнения!',
                                maxLength: {
                                    value: 200,
                                    message: 'Максимально количество символов 200',
                                },
                            }}
                            rows={4}
                        />

                        <SubmitWrapper>
                            <Button buttonChild='Отправить отзыв' type='submit' />
                            <Wrapper style={{ marginLeft: '20px' }}>
                                <FlexWrapper>
                                    <svg height='20' width='20'>
                                        <use xlinkHref={svgSprite + '#infoSquare'}></use>
                                    </svg>
                                    <span>Все отзывы проходят модерацию в течение 2 часов</span>
                                </FlexWrapper>
                            </Wrapper>
                        </SubmitWrapper>
                    </Form>
                </FormProvider>

            </ModalWrapper>
        </Overlay>
    );
};

export default AddFeedbackModal;
