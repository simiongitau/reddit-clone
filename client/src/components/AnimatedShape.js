import React from 'react'
import styled from 'styled-components'




// different shape creating
const Squre = styled.div`
width:60px;
height:60px;
background-color:yellow;
opacity:0.7;
position:absolute;
top:-60px;
left:-60px;
z-index:1;
animation:squ 25s linear alternate infinite;

@keyframes squ{
    to{
        transform:translate(100vw,100vh);
    }
}
`;

const Circle = styled.div`
width:100px;
height:100px;
border-radius:50%;
background-color:#ff97af;
position:absolute;
top:200px;
opacity:0.5;
left:-100px;
z-index:1;
animation:move 25s linear alternate infinite;

@keyframes move{
    to{
        transform:translate(100vw,-100vh);
    }
}
`;

const Reactangle = styled.div`
width:60px;
height:100px;
background-color:#669966;
opacity:0.5;
position:absolute;
top:400px;
left:-50px;
z-index:1;
animation:move 25s linear alternate infinite;

@keyframes move{
    to{
        transform:translate(100vw,-50vh);
    }
}
`;




export const AnimatedShape = () => {
    return (<>
        <Squre />
        <Reactangle />
        <Circle />
    </>
    )

}
