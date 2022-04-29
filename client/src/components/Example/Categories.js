import React from 'react';
import styled from 'styled-components';
import { Storeproduct } from '../../Data';
import { CategoriesItems } from './CategoriesItems';

const Container = styled.div`
display:flex;
padding:20px;
justify-content:space-between;
`
export const Categories = () => {
    return <Container>
        {
            Storeproduct.map((item) => (
                <CategoriesItems item={item} />
            ))
        }

    </Container>;
};
