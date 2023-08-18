import React from 'react';
import { Carousel, Image, Container,  Row, Col } from 'react-bootstrap';


const Work = () => {
  return (
   <>
    <Container className='hero'>
      <Row>
      <Col>
        <h2 className='display-1 fw-bold'>
           My Work
        </h2>
        <p>Here are a few of the jobs I've done.:</p>
        <hr />
        <ul>
          <li>
            <h4>Project 1</h4>
            <p>Tech Stack: HTML, CSS, JS</p>
          </li>
          <li>
            <h4>Project 2</h4>
            <p>Tech Stack: HTML, CSS, JS</p>
          </li>
          <li>
            <h4>Project 3 </h4>
            <p>Tech Stack: HTML, CSS, JS</p>
          </li>
        </ul>
      </Col>
      <Col className='d-flex justify-content-center align-items-center'>
      <div style={{minWidth:280}}>
      <Carousel>
        <Carousel.Item>
           <div style={{maxHeight:300}}>
            <Image src="PORTFOLIO1.png" className="w-100 h-100 object-cover bg-dark"/>
           </div>
          <Carousel.Caption>
            <h3>Project 1</h3>  
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{maxHeight:300}}>
            <Image src="projImage1.png" className="w-100 h-100 object-cover bg-dark"/>
           </div>
          <Carousel.Caption>
            <h3>Project 2</h3>  
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          
          <div style={{maxHeight:300}}>
            <Image src="proj2.png" className="w-100 h-100 object-cover bg-dark"/>
           </div>
          <Carousel.Caption>
            <h3>Project 3</h3>    
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      </Col>
    </Row>
    </Container>
   </>
  );
};

export default Work;
