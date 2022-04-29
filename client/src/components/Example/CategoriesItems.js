import React from 'react';
import styled from 'styled-components';


const Cointainer = styled.div`
flex:1;
background-color:green;
margin:3px;
height:70vh;
postion:relative;
`;
// flex 1 meaning that all the image size will be the one
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
`;
const Info = styled.div`
position:absolute;
top:0;
left:0;
background-color:yellow;
height:100px;
width:100px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;
const Title = styled.h1`
color:white;
font-weight:200;
margin-bottom:20px;
`;
const Button = styled.button`
padding:5px;
border-radius:15px;
background-color:white;
color:gray;
font-weight:600;
border:none;

`;



export const CategoriesItems = ({ item }) => {
    return <Cointainer>
        <Image src={item.Img} />
        <Info>
            <Title>{item.title}</Title>
            <Button>shop now</Button>
        </Info>

    </Cointainer>;
};
