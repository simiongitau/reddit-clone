import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
height:70px;
background-color:gray;

 
`;

const Wraper = styled.div`
padding:0px 20px;
display:flex;
align-items:center;
justify-content:space-between;


`;

const Left = styled.div`
width:20%;
`;
const Logo = styled.h1`
font-size:15px
font-weight:200;
text-decoration:underline crimson;
color:pink;
:hover{
    cursor:pointer;
}
`;

const Right = styled.div`


`;
const Menu = styled.ul`
display:flex;
gap:12px;
color:pink;
margin-top:19px;
`;
const List = styled.li`
list-style:none;
:hover{
    cursor:pointer;
    color:yellow;
    text-decoration:underline;
}
`;
const Center = styled.div`

`;
const Button = styled.button`
border:2px solid black;
padding:6px 15px;
background-color:crimson;
color:white;
border-radius:18px;
cursor:pointer;

`;

export const Navbar = () => {
    return (
        <Container>

            <Wraper>
                <Left>
                    <Logo>Agency</Logo>
                </Left>
                <Center>
                    <Menu>
                        <List>Home</List>
                        <List>Sevices</List>
                        <List>Picing</List>
                        <List>Contact</List>
                        <List>Home</List>
                    </Menu>
                </Center>


                <Button>send</Button>
            </Wraper>

        </Container>
    )
}
