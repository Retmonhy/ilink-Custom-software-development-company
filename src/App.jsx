import './App.css';
import Header from "./Components/Header/Header"
import About from "./Components/About"
import Feedback from './Components/Feedback/Feedback';
import styled from "styled-components"
import Copyright from './Components/Copyright';
import AddFeedbackModal from './Components/Feedback/FeedbackForm/AddFeedbackModal'
import React, { useState } from "react"


const Main = styled.main`
  padding-top: 93px;
  padding-bottom: 130px;
  background: #585CC6;
`;
const MainHeader = styled.h1`
  font-family: "Factor-Medium", sans-serif;
  font-size: 124px;
  line-height: 148px;
  color: #fff;
`;

function App() {
  const [ modalIsOpen, setModalIsOpen ] = useState(false);
  return (
    <div className="App">
      <Header/>
      <Main>
        <MainHeader className="container header__margin">Добро пожаловать <br/>в академию!</MainHeader>
        <About/>
        <Feedback setModalIsOpen={setModalIsOpen}/>
        {modalIsOpen && <AddFeedbackModal setModalIsOpen={setModalIsOpen}/>}
      </Main>
      <Copyright/>
    </div>
  );
}

export default App;
