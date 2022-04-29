import React from 'react';
import styled from 'styled-components';
import { PopularProduct, Category, Storeproduct } from '../../Data';
import { Product } from './Product';

const Container = styled.div`
background:pink;
`;

export const Products = () => {
    return <Container>
        <div className="">
            <div className='container'>
                <h4>our services</h4>
                <div className='row'>
                    {
                        PopularProduct.map((item) => (

                            <Product item={item} key={item.id} />
                        ))
                    }
                </div>
            </div>
        </div>

       </Container>  
         
};
