import React from 'react'
import styled from 'styled-components';
import img from '../images/lap8.jpg';
import { AnimatedShape } from './AnimatedShape';

const Container = styled.div`
height:calc(100vh-70px);
background-color:white;
display:flex;
padding:20px;
`;
const Right = styled.div`
width:40%;
`;

const Left = styled.div`
width:60%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

const Title = styled.h1`
font-size:60px;
width:60%;
`;

const Desc = styled.p`
width:60%;
font-size:20px;
margin-top:20px;
`;

const Button = styled.button`
padding:15px;
background-color:darkblue;
border-radius:20px;
color:white;
border:none;
letter-spacing:2px;
`;
const Info = styled.div`
width:60%;
margin-top:50px;
display:flex;
align-items:center;
justify-content:space-between;
`;

const Contact = styled.div`
display:flex;
flex-direction:column;
`;
const Phone = styled.span`
color:#f0667d;
font-weight:bold;
`;

const ContanctTex = styled.span`
color:gray;
margin-top:5px;
`;

const Image = styled.img`
width:100%;
`;

export const Intro = () => {
    return (
        <Container>
            <Left>
                <Title>Adventure in creative age</Title>
                <Desc>aadsdd dgfgfh hghg hghg h ghgjhjy uutytyt ytytyurtuty  iuiu6i ty76  76765878 6tyyuju ukioi ilil  ilioioio li
                    gtytu uyuy iuiut iuiuri uiu iioioi teata t ERERE rre yty yt  uu uyu yuy
                </Desc>
                <Info>
                    <Button>start a project</Button>
                    <Contact>
                        <Phone> call us 070 6692 468</Phone>
                        <ContanctTex>for any question concern reach us</ContanctTex>
                    </Contact>
                </Info>
            </Left>
            <Right>
                <Image src={img} alt="photo" />


            </Right>
            <AnimatedShape/>
        </Container>
    )
}
