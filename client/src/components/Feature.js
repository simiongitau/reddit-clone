import { Button } from 'bootstrap';
import React from 'react';
import styled from 'styled-components';
import img from "../images/lap7.jpg"

const Container = styled.div`
display:flex;
`;
const Right = styled.div`
width:50%;
display:flex;
flex-direction:column;
justify-content:center;
background-color:yellow;
`;

const Left = styled.div`
width:50%;
background-color:50%;   
`;
const Img = styled.img`

`;

const Title = styled.span`
font-size:50px;
`;
const Sub = styled.span`
font-size:24px;
font-style:italic;
color:#333;
margin-top:30px;
`;
const Desc = styled.p`
color:#777;
margin-top:30px;
`;
const Btn = styled.button`
width:150px;
border:none;                
padding:15px 20px;
background-color:darkblue;
border-radius:40px;
color:white;
`;

export const Feature = () => {
    return <Container>
        <Left><Img src={img} /></Left>
        <Right>
            <Title><b>perfect </b> work <br /> <b>good </b> work</Title>
            <Sub>gf ewe ret yryer ytutu we ret et yy575 erf</Sub>
            <Desc>sdsf fdgsfghdf hgjhj kjkyjl lklk ili uiipuip popo pu tytr erew rqwr rwrqw rqre t5y 5u6u6 i7i7 o8o 8 ipi pppip  676 3523</Desc>
            <Btn>learn more</Btn>
        </Right>

    </Container>;
};
