import React from 'react';
import styled from 'styled-components';

export const Training = () => {
  const WraperSection = styled.div`
.height{
  min-height:100vh; 
}
.p-1{
  margin:0 auto;
  width:200px;
}
.height-80{
  min-height:80vh;  
}
  `;
  return <WraperSection className='bg-dark'>
    <div className='row height align-items-center'>
      <div className='col'>
        <h1 className='text-danger text-uppercase font-weight-bold font-italic'>
          <strong>welcome to progress training</strong><br />
          <span className='text-white'>website</span>
        </h1>
        <p className='text-muted lead py-2 w-75'>
          Utility: also known as use program, there are utility for text editing and processing, managing information, for electronic communication and networking.
          What are the functions of the following commands?
          apropos: It searches the Linux man page with the help of the keyword provided by the user to find the command and its function.
          Ln the ln command creates links between files, associating file names with file data.
          Echo $SHELL it is used to output shell directory.
          Explain the types of permissions availa

        </p>
        <a href="#" className='btn btn-primary btn-lg m-2 text-capitalize'>press here</a>
        <a href="#" className='btn btn-success btn-lg m-2 text-capitalize'>press here</a>
      </div>
    </div>
    {/* end of header section */}
    {/* skill section */}
    <section className='py-5 bg-white'>
      <div className='container'>
        {/* title */}
        <div className='row'>
          <div className='col text-center'>
            <h1 className='display-4 text-uppercase text-dark mb-0'>
              <strong>skills</strong>
            </h1>
            {/* underlining the header */}
            <div className='title-underline bg-danger p-1'></div>
            <p className='mt-2 text-capitalize text-muted'>dmsmsdfklsfks smfskfls smflskflsk mdlkslfksl  wprwprowp</p>
          </div>

        </div>
        {/* end of title */}


        <div className='row'>
          {/* sigle column */}
          <div className='col-md-6 col-lg-3 text-center my-4'>
            <i className='fab fa-node-js fa-5x text-danger display-4s'>logogo</i>
            <h1 className='text-uppercase my-3'>node.js</h1>
            <p className='text-muted'>ssjfhskf jksfjskfj mksfjksfj ksjfksaf nsjkfslkasfo  fjkssfkkasfkasf jskjsflksfl  skfjsf nskjsfksjask skfjsfj nksfksfjsk smnskfjsfk mksfjk</p>
            <a href='#' className='btn btn-outline-danger btn-block text-uppercase'>press here</a>
          </div>
          {/* end of the single column */}
          {/* sigle column */}
          <div className='col-md-6 col-lg-3 text-center my-4'>
            <i className='fab fa-node-js fa-5x text-danger display-4s'>logogo</i>
            <h1 className='text-uppercase my-3'>node.js</h1>
            <p className='text-muted'>ssjfhskf jksfjskfj mksfjksfj ksjfksaf nsjkfslkasfo  fjkssfkkasfkasf jskjsflksfl  skfjsf nskjsfksjask skfjsfj nksfksfjsk smnskfjsfk mksfjk</p>
            <a href='#' className='btn btn-outline-danger btn-block text-uppercase'>press here</a>
          </div>
          {/* end of the single column */}
          {/* sigle column */}
          <div className='col-md-6 col-lg-3 text-center my-4'>
            <i className='fab fa-node-js fa-5x text-danger display-4s'>logogo</i>
            <h1 className='text-uppercase my-3'>node.js</h1>
            <p className='text-muted'>ssjfhskf jksfjskfj mksfjksfj ksjfksaf nsjkfslkasfo  fjkssfkkasfkasf jskjsflksfl  skfjsf nskjsfksjask skfjsfj nksfksfjsk smnskfjsfk mksfjk</p>
            <a href='#' className='btn btn-outline-danger btn-block text-uppercase'>press here</a>
          </div>
          {/* end of the single column */}
          {/* sigle column */}
          <div className='col-md-6 col-lg-3 text-center my-4'>
            <i className='fab fa-node-js fa-5x text-danger display-4s'>logogo</i>
            <h1 className='text-uppercase my-3'>node.js</h1>
            <p className='text-muted'>ssjfhskf jksfjskfj mksfjksfj ksjfksaf nsjkfslkasfo  fjkssfkkasfkasf jskjsflksfl  skfjsf nskjsfksjask skfjsfj nksfksfjsk smnskfjsfk mksfjk</p>
            <a href='#' className='btn btn-outline-danger btn-block text-uppercase'>press here</a>
          </div>
          {/* end of the single column */}
        </div>





      </div>
    </section>
    <section className='bg-info'>

      <div className='container-fluid'>

        <div className='row'>
          {/* about image */}
          <div className='col-md-6 about-picture height-80'></div>
          {/* about image */}
          <div className='col-md-6 about-text height-80 px-5'>
            <div className='col text-center'>
              <div className='row'>
                <div className='col text-center'>
                  <h1 className='display-4 text-uppercase text-dark mb-0'>
                    <strong>about</strong>
                  </h1>
                  {/* underlining the header */}
                  <div className='title-underline bg-warning p-1'></div>
                  <p className='mt-2 text-capitalize text-muted'>dmsmsdfklsfks smfskfls smflskflsk mdlkslfksl  wprwprowp</p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>




  </WraperSection>;
};
