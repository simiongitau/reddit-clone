import React from 'react';
import styled from 'styled-components';
import img from "../../images/dice.jpg"
import { ShoppingCartOutlined, FavoriteBorderOutlined, SearchOutlined } from "@material-ui/icons"

const ContainerWrapper = styled.div`
margin:30px;
border-radius:100px;
.card{
    border-color:transparent;
    transition:all 1s linear;
    width:300px;
    height:300px;
}
.card-footer{
    background:transparent;
    border-top:trasparent;
    transition:all 1s linear;
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background:rgba(247,247,247);
    }
    .card-img-top{
        transition:all 1s linear;
    }
    .img-cointainer{
        position:relative;
        overflow:hidden;
    }
    .img-container:hover .card-img-top{
     transform:scale(1.2);
    }
   
}
.card-btn{
    position:absolute;
    botton:0;
    right:0;
    padding:0.2rem 0.4rem;
    border-radius:30px;
    font-weight:200;
    border:none;
    color:white;
}
.card-btn:hover{
    cursor:pointer;
    background:violet;
}
.btn{
    background:gray;
    font-weight:200;
    border-radius:12px;
    border:none;
    color:white;
    width:100px;
    height:40px;

}
`



export const Product = ({ item }) => {
    return (
        <ContainerWrapper className='col-9 max-auto col-md-6 col-lg-3'>
            {/* card container from the boostarp */}
            <div className='card '>
                {/* cointer that belong to the image */}
                <div className='img-container p-5 ' onClick={() => console.log("you clicked me")}>
                    <img src={item.Img} alt="product image" className='card-img-top' />
                    {/* button for add into card */}
                    <button className="card-btn btn-primary">
                        add to cart
                    </button>
                </div>
                {/* card footer */}
                <div className='card-footer d-flex justify-content-between'>
                    <p className='align-self-center mb-0'>
                        {item.title}
                    </p>
                    <button className='btn'>detail</button>
                    <h5 className='font-italic mb-o text-blue'>
                        <span className='mr-1'>ksh 1400</span>
                    </h5>
                </div>

            </div>
        </ContainerWrapper>
    )
};
