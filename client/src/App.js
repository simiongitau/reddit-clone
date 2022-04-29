import React from "react";
import "./App.css";
import styled, { css } from "styled-components";
import { Navbar } from "./components/Navbar";
import { Intro } from "./components/Intro";
import { Feature } from "./components/Feature";
import { Categories } from './components/Example/Categories';
const Container = styled.div`
height:100vh;
overflow:hidden;

`;
const TShape = css`
width:100%;
height:100%;
position:absolute;
clip-path:polygon(65% 0%,100% 0%,100% 100%, 55% 100%);
top:0;
left:0;
z-index:-1;

`;

const Shape = styled.div`
${TShape};
width:100%;
height:100%;
position:absolute;
clip-path:polygon(65% 0%,100% 0%,100% 100%, 55% 100%);
top:0;
left:0;
z-index:-1;
background-color:crimson;

`;



const App = () => {

    // render() {
    return (<>
        <Container>
            <Navbar />
            <Intro />
            <Shape />
        </Container >
        <Container>
            <Feature />
        </Container>
        <Categories/>
    </>
    );
}
export default App;