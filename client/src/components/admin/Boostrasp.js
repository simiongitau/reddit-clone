import React from 'react';
import styled from 'styled-components';

export const Boostrasp = () => {

    const Container = styled.div`
   .tom{
    background:#f15025;
    }
    
    `
    return <Container>
        {/* good from the boostrap */}
        <h1 className='bg-success text-uppercase text-white text-center'>helllloooo from the boostarp</h1>
        <h1 className='text-white'>heloooo</h1>
        <h1 className='text-info'>heloooo</h1>
        <h1 className='text-dark'>heloooo</h1>
        <h1 className='text-warning'>heloooo</h1>
        <h1 className='text-danger'>heloooo</h1>
        {/* trainng background color */}
        <div className='bg-primary'>
            <h1>div 1</h1>
        </div>
        <div className='bg-success text-info '>
            <h1>div 2</h1>
        </div>
        <div className='bg-info text-white'>
            <h1>div 3</h1>
        </div>
        <div className='bg-secondary'>
            <h1>div 4</h1>
        </div>
        <div className='tom'>
            <h1>div 5</h1>
        </div>
        {/* topogragy */}
        <h1 className='display-3'>display 3</h1>
        <h1 className='display-2'>display 2</h1>
        <h1 className='display-1'>display 1</h1>
        <h1 className='display-4'>display 4</h1>
        {/* font wight boostrap sytax
         */}
        <p className='font-weight-bold font-italic text-center text-capitalize'>sassasasa adadd dadada dadada adada dadada  saas sas</p>
        <p className='font-weight-light text-right text-uppercase'>sassasasa adadd dadada dadada adada dadada  saas sas</p>
        <p className='text-lowercase'>gee kenyan</p>

        {/* creating grid using the boostrap */}
        {/* first start with the wrapper,row collumn */}
        {/* gride rule to remember */}
        {/* whole screen is diveded into 12 column */}
        <div className='cointainer'>
            <div className='row'>
                <div className='col bg-danger'>
                    i am sigle column
                </div>
            </div>
        </div>


        <div className='cointainer-fluid'>
            <div className='row'>
                <div className='col bg-danger'>
                    i am sigle column
                </div>

                <div className='col bg-warning'>
                    i am second column
                </div>

                <div className='col bg-dark'>
                    i am second column
                </div>
            </div>
        </div>
        <h1>break</h1>

        <div className='cointainer-fluid'>
            <div className='row'>
                <div className='col-sm-6 col-md-3 col-lg-6 col-xl-3 bg-danger'>
                    i am sigle column
                </div>

                <div className='col-sm-6  col-md-3 col-lg-6 bg-warning'>
                    i am second column
                </div>

                <div className='col-sm-6  col-md-3 col-lg-6 bg-dark'>
                    i am second column
                </div>
                <div className='col-sm-6  col-md-3 col-lg-6 bg-info'>
                    i am second column
                </div>
            </div>
        </div>

        <h3>third examle</h3>
        <div className='row my-5 mx-5'>
            <section className='p-5 bg-success col-lg-2 m-3'>
                section one
            </section>
            <section className='p-5 bg-primary col-lg-2 m-3'>
                section two
            </section>
            <section className='p-5 bg-info col-lg-2 m-3'>
                section three
            </section>
            <section className='p-5 bg-dark col-lg-2 m-3'>
                section four
            </section>
            <section className='p-5 bg-dark col-lg-2 m-3'>
                section four
            </section>

            <section className='p-5 bg-dark col-lg-2 m-3'>
                section four
            </section>

            <section className='p-5 bg-dark col-lg-2 m-3'>
                section four
            </section>

            <section className='p-5 bg-dark col-lg-2 m-3'>
                section four
            </section>
            <section className='p-5 bg-dark col-lg-2 m-3'>
                section four
            </section>
            <section className='p-5 bg-dark col-lg-2 m-3'>
                section four
            </section>


        </div>

        {/* margin and padding in boostrap padding pl,pr,pt,px,py same to margin*/}
        {/* working with the flex box */}
        {/* justify-content-center justify-content-between,justify-content-around */}
        {/* align-items justify-content-end */}

        <div className='d-flex mx-2 justify-content-around'>
            <div className=' p-5 bg-primary mx-2'>

            </div>
            <div className='p-5 bg-success'>

            </div>
            <div className="p-5 bg-dark">

            </div>
        </div>

        {/* end  of boostarp content */}




    </Container>;
};
