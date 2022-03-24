import './App.css';
import Header from "./Components/Header/Header"
import About from "./Components/About"
import Feedback from './Components/Feedback/Feedback';
import styled from "styled-components"
import Copyright from './Components/Copyright';
import AddFeedbackModal from './Components/Feedback/FeedbackForm/AddFeedbackModal'
import React, { useState } from "react"
import backg from "./images/bg_svg.svg"
import { Context } from './Components/Context'


const Main = styled.main`
  padding-top: 93px;
  padding-bottom: 130px;
  background: #585CC6 url(${props => props.background}) 100% 0% no-repeat;
  @media screen and (max-width: 952px) {
    padding-top: 50px;
  padding-bottom: 130px;
  }
  @media screen and (max-width: 952px) {
    padding-top: 50px;
  padding-bottom: 130px;
  }
  @media screen and (max-width: 530px) {
    padding-top: 40px;
  padding-bottom: 80px;
  background-position: 0% -40%;
  }

`;
const MainHeader = styled.h1`
  font-family: "Factor-Medium", sans-serif;
  font-size: 124px;
  line-height: 148px;
  color: #fff;
  @media screen and (max-width: 952px) {
    font-size: 100px;
    line-height: 120px;
  }
  @media screen and (max-width: 768px) {
    font-size: 70px;
    line-height: 85px;
    padding: 0 40px;
  }
  @media screen and (max-width: 530px) {
    font-size: 48px;
    line-height: 54px;
    padding: 0 15px;
    margin: 0;
  }
`;


function App() {  
  
  const [ screenSize, setScreenSize ] = useState(1920);
  window.onresize = () => setScreenSize(window.innerWidth)
  window.onload = () => setScreenSize(window.innerWidth)
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  console.log('screenSize = ', screenSize)
  return (
    <div className="App">
      <Context.Provider value={screenSize}>
      <Header/>
      <Main background={backg}>
        <MainHeader className="container header__margin">Добро пожаловать <br/>в академию!</MainHeader>
        <About/>
        <Feedback setModalIsOpen={setModalIsOpen}/>
        {modalIsOpen && <AddFeedbackModal setModalIsOpen={setModalIsOpen} />}
      </Main>
      <Copyright/>
    </Context.Provider>
    </div>
  );
}

export default App;
